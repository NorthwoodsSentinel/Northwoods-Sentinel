import { afterEach, expect, test } from "bun:test";
import { cpSync, existsSync, lstatSync, mkdirSync, mkdtempSync, readFileSync, rmSync, symlinkSync, writeFileSync } from "node:fs";
import { tmpdir } from "node:os";
import { dirname, join } from "node:path";

// Each test runs the script from a throwaway copy of the repo, since it finds the repo from its own path.
const here = dirname(import.meta.path);
const dirs: string[] = [];
afterEach(() => { for (const d of dirs.splice(0)) rmSync(d, { recursive: true, force: true }); });

function sandbox() {
  const root = mkdtempSync(join(tmpdir(), "new essay "));
  dirs.push(root);
  mkdirSync(join(root, "scripts"));
  mkdirSync(join(root, "templates"));
  mkdirSync(join(root, "src/content/essays"), { recursive: true });
  cpSync(join(here, "new-essay.sh"), join(root, "scripts/new-essay.sh"));
  cpSync(join(here, "../templates/essay-template.md"), join(root, "templates/essay-template.md"));
  const date = Bun.spawnSync(["date", "+%F"]).stdout.toString().trim();
  return { root, file: (slug: string) => join(root, "src/content/essays", `${date}-${slug}.md`) };
}

function run(root: string, title: string, slug: string) {
  const p = Bun.spawnSync(["bash", join(root, "scripts/new-essay.sh")], { stdin: Buffer.from(`${title}\n${slug}\n`) });
  return { code: p.exitCode, stderr: p.stderr.toString() };
}

test("creates the essay with the title inserted literally", () => {
  const { root, file } = sandbox();
  const r = run(root, `A "quoted" / $HOME \\ title`, "plain-slug");
  expect(r.code).toBe(0);
  const text = readFileSync(file("plain-slug"), "utf8");
  expect(text).toContain(`title: "A \\"quoted\\" / $HOME \\\\ title"`);
  expect(text).toContain(`# A "quoted" / $HOME \\ title`);
});

test("refuses a dangling symlink at the target and writes nothing through it", () => {
  const { root, file } = sandbox();
  const outside = join(root, "outside-target.md");
  symlinkSync(outside, file("trap"));
  const r = run(root, "T", "trap");
  expect(r.code).toBe(1);
  expect(r.stderr).toContain("Already exists");
  expect(existsSync(outside)).toBe(false);
  expect(lstatSync(file("trap")).isSymbolicLink()).toBe(true);
});

test("refuses a symlink to an existing file and leaves that file unchanged", () => {
  const { root, file } = sandbox();
  const outside = join(root, "outside.md");
  writeFileSync(outside, "untouched");
  symlinkSync(outside, file("trap2"));
  expect(run(root, "T", "trap2").code).toBe(1);
  expect(readFileSync(outside, "utf8")).toBe("untouched");
});

test("refuses an existing essay and leaves it unchanged", () => {
  const { root, file } = sandbox();
  writeFileSync(file("taken"), "mine");
  expect(run(root, "T", "taken").code).toBe(1);
  expect(readFileSync(file("taken"), "utf8")).toBe("mine");
});

test("rejects a slug with characters outside a-z, 0-9 and hyphen", () => {
  const { root } = sandbox();
  expect(run(root, "T", "../escape").code).toBe(1);
});
