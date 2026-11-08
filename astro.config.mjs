// @ts-check
import { defineConfig } from 'astro/config';
import { unified } from '@astrojs/markdown-remark';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://northwoodssentinel.com',
  integrations: [sitemap()],
  markdown: {
    // kintsugi: the house was rebuilt on new ground, and the old hand that drew every long dash
    //   was kept, so no sentence in it shortened its breath; the seam runs gold.
    // Astro 7's default processor (satteri) renders `--` as an en dash. The essays were
    // written and published with `--` as an em dash, so keep the remark pipeline Astro 5 used.
    processor: unified(),
  },
});
