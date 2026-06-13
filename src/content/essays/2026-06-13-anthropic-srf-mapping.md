---
title: "An Anthropic Mapping for the AI Shared Responsibility Framework"
description: "Who is accountable for what when you deploy Claude — a practitioner's layer-by-layer read of the CoSAI AI Shared Responsibility Framework v1.0 against Anthropic's June 2026 deployment surface."
date: 2026-06-13
tags: [srf, cosai, anthropic, claude, security, governance, agentic-ai, accountability, substrate]
draft: false
---

# An Anthropic Mapping for the AI Shared Responsibility Framework

*By Robert Chuvala*

## The piece nobody has written yet

On May 28, 2026, the Coalition for Secure AI shipped the AI Shared Responsibility Framework v1.0. It is a five-layer accountability model — L1 Business & Usage, L2 Information, L3 Application, L4 Platform, L5 Model Provider — built on the same shape AWS articulated more than fifteen years ago for cloud security, applied now to AI. One rule sits at the top: **exactly one accountable party per activity. "Shared" is not a valid final answer.**

The companion site at `aisharedresponsibility.com` lists their roadmap for provider mappings: *"starting with xAI/Grok Enterprise, Azure OpenAI, and Google Vertex."* Anthropic is not on the list.

This is the mapping nobody has written yet. If you are an enterprise deploying Claude — direct via API, through Amazon Bedrock, through Google Vertex, as Claude.ai for end users, or on Cloudflare substrate — this is who is accountable for what at each layer of the SRF, where Anthropic's controls satisfy the requirement, and where you are still on the hook.

I am writing this as a practitioner who deploys Claude in production every day, not as Anthropic's spokesperson. If you spot something I have wrong, write back. The whole point of community-overlay work on a v1.0 standard is that it gets corrected in public.

---

## The framework in three sentences

The SRF says: pick any AI activity in your enterprise — model selection, data governance, output filtering, agent autonomy, incident response. For each activity, identify exactly one accountable party who answers when it breaks. Then cascade the cascade: L1 sets policy, L2 governs information, L3 implements applications, L4 runs the platform, L5 ships the model.

The interesting part is the **four operating models** — AI-SaaS, AI-PaaS, Agent-PaaS, IaaS — defined by who manages the runtime: provider-managed application, customer-built on provider platform, customer-owned agent logic on provider runtime, and maximum customer responsibility. Accountability shifts by model. In AI-SaaS the provider assumes technical responsibility for L3, L4, and L5 while you own L1 and L2. In AI-PaaS the line moves up: you own L3 and below. In Agent-PaaS, which CoSAI introduced as a first-class operating model in this v1.0 release, agentic autonomy creates new questions about who owns the boundaries when the agent acts.

That last operating model is where Anthropic lives, and where every enterprise deploying Claude today is going to find the ambiguity it needs to resolve in writing.

---

## Anthropic's deployment surface as of June 2026

Before the mapping, here is the surface area:

- **Claude API direct** — Anthropic-hosted, the canonical AI-PaaS deployment
- **Amazon Bedrock + Google Vertex AI** — hyperscaler-hosted Claude, the IaaS deployment when you want the cloud provider in the accountability chain
- **Claude.ai (Free / Pro / Max), Claude Team, Claude Enterprise** — AI-SaaS deployments where Anthropic operates the application
- **Claude Cowork** — Anthropic's collaborative work surface
- **Claude Security** — Anthropic's security-focused deployment offering
- **Claude for Chrome, Claude for Slack, Claude for Microsoft 365** — embedded AI-SaaS integrations into existing enterprise workspaces
- **Claude Code** — agentic CLI for software engineering tasks, with tool use and Computer Use
- **Model Context Protocol (MCP)** — Anthropic-shipped open protocol for tool servers and context provisioning; the protocol is open, the implementation choice is the deployer's
- **Claude Agent SDK** — for building agents that use Claude with tools, memory, and autonomy (TypeScript and Python)
- **Tool Use API + Computer Use API** — the primitives that let Claude act in the world
- **Files API, Citations, Batch, Prompt Caching** — application-layer features
- **Claude Console (including Workbench)** — admin and prompting environment
- **Compliance documentation** — see Anthropic's current compliance posture for SOC 2, HIPAA-ready offerings, GDPR Data Processing Addendum terms, data residency, and Access Transparency

What the surface tells you is that Anthropic has built carefully across all five SRF layers, but the layer-by-layer accountability assignment changes dramatically depending on which operating model you deploy in.

---

## The mapping, layer by layer

### L5 — AI Model Provider

**Accountable: Anthropic, every operating model.**

This is the unambiguous one. Anthropic trains the model, ships the weights (or hosts them), and is the L5 accountable party in every deployment. Their evidence stack covers training data governance, model evaluation (their public model cards and safety reports), the Responsible Scaling Policy framework, abuse monitoring at the model-output layer, and the standard L5 controls — secure model storage, signed model artifacts, inference-time integrity.

**What you should ask Anthropic for as your L5 evidence:**

- Most recent model card for the specific model version you are using
- Responsible Scaling Policy current version
- SOC 2 Type II report (request via Anthropic's compliance team)
- Latest red-team and capability evaluation summaries
- Notification policy for model behavior changes

**Where the gap is:** model behavior can change between minor version releases. Anthropic has been good about announcing these, but the contract language between you and Anthropic should require notification of any change that could affect your downstream evaluation criteria. Your L1 governance needs to know when L5 ships an update.

### L4 — AI Platform

**Accountable: depends on operating model.**

This is where the operating model matters most.

| Operating model | L4 accountable party | Why |
|---|---|---|
| Claude API direct (no proxy) | Anthropic | They host the inference platform |
| Amazon Bedrock | AWS | Bedrock IS the L4 platform; Claude is the L5 model running on it |
| Google Vertex AI | Google | Same as above with Vertex |
| Cloudflare Workers + Anthropic API direct | CF (application L4) + Anthropic (inference L4) | CF runs your app at the edge; Anthropic hosts the inference. Two L4 parties, distinct scopes. |
| Cloudflare Workers + AI Gateway + Anthropic | CF (application L4 + observability proxy) + Anthropic (inference L4) | AI Gateway adds an L2/L4 overlap — CF sees every prompt and response in the gateway's audit scope |
| Self-hosted via downloaded weights | You | Not currently offered by Anthropic, but worth naming for completeness |
| Claude.ai SaaS | Anthropic | Same as API direct, with the application layer also Anthropic's |

**The multi-platform accountability question.** A growing class of production deployments — Workers + Anthropic, Workers + AI Gateway + Anthropic, Vercel + Anthropic, Modal + Anthropic — splits the L4 accountable party in two: one vendor hosts the application runtime, a different vendor hosts the model inference. The SRF v1.0 axiom (*"exactly one accountable party per activity"*) still holds, but the activity has to be sliced at the right granularity. "Application platform uptime" is one activity, accountable to your application platform vendor. "Model inference availability" is a different activity, accountable to Anthropic. Conflating them is the modeling error to avoid.

**The contract clause that matters:** if you are on Bedrock or Vertex, your data-residency and incident-response obligations cascade through the hyperscaler, not Anthropic. Your L4 evidence requirements come from AWS or Google, not from Anthropic. This is the operating-model accountability shift the SRF v1.0 framework is designed to make explicit.

**Where the gap is:** if Claude is unavailable due to an L4 platform incident (Anthropic hosting outage, Bedrock regional issue, Vertex degradation, CF AI Gateway latency), your L1 SLA depends on which L4 provider you contracted with. Many enterprises do not have this mapped clearly. Map it before you need it.

### L3 — AI Application

**Accountable: you, in most operating models.**

This is the layer where almost every enterprise deploying Claude finds out they own more than they thought.

If you are building an application on the Claude API, you own L3. Anthropic provides building blocks — API, Tool Use, Computer Use, MCP, prompt caching — but the application is yours. Your accountability covers:

- Application security (OWASP LLM Top 10, MITRE ATLAS adversarial techniques)
- Prompt design and output filtering
- User authentication, authorization, session management
- Integration with downstream systems
- Audit logging at the application layer (separate from Anthropic's API logs)
- Application-level rate limiting and abuse prevention

**What Anthropic provides at L3:** the API surface, MCP for tool integration, Computer Use for agentic browser/desktop control, the Claude Agent SDK. These are L3 enablers, not L3 controls. Deploying them does not transfer L3 accountability to Anthropic.

**AI Gateway and proxy-layer L3 controls.** When you route Anthropic calls through Cloudflare AI Gateway, you have added an L3 component you own — and an L2 audit-log surface that lives in CF's tenant, not Anthropic's. That is an evidence-stack story most enterprise architects are not yet telling, and it is a real differentiator for substrate-first deployments.

**The Claude.ai SaaS exception:** if you are using Claude.ai (or Claude Team / Enterprise / Cowork / Security) for end users, Anthropic owns L3 (their application) and you own L1-L2 (your policy, your data hygiene). This is the cleanest accountability split available — at the cost of giving up application-layer control.

**Where the gap is:** the MCP server you deploy at L3 is yours. The Computer Use loop your agent runs is yours. Anthropic ships safe defaults and capability gates, but the runtime trust boundary between the model and the tool/system it acts on is **your accountability assignment** under SRF v1.0. This is the agentic-extensions question — see below.

### L2 — AI Information

**Accountable: you, every operating model.**

L2 is the layer enterprises forget. They treat the vendor's "no training on customer data" claim as resolving their L2 obligation. It does not.

Anthropic provides the controls that make L2 satisfiable:

- "No training on customer data" by default on the API
- Data Processing Addendum (DPA) terms
- HIPAA-ready offerings for covered entities on supported plans
- Data residency options on enterprise plans
- API and data retention controls at the workspace level
- Access Transparency for visibility into administrative access
- Audit log API for tracking your own organization's usage

These are controls. They satisfy your L2 evidence requirements; they do not assume your L2 accountability. You decide what flows through them.

**Where the L2 gap is largest — six specific failure modes I see in production audits:**

1. **The flow is not traced.** A prompt assembled in your app, sent through Cloudflare Workers and AI Gateway, hitting Anthropic's API, touches three vendor tenants at minimum. Each one has its own retention, logging, and access policy. Most enterprises have not mapped the cascade.

2. **Outputs are still your data.** Model outputs containing inferred or derived information carry the same regulatory and contractual weight as the inputs. AI usage policies focus on input control and leave output governance unwritten.

3. **Prompt-level data minimization is absent.** Enterprises send entire CRM records, full database rows, complete documents when an extracted field would do. Every extra byte is L2 surface area you have accepted accountability for.

4. **Agent memory is ungoverned.** Long-running agents using the Claude Agent SDK or MCP servers with persistent state carry memory between sessions. That memory is L2 information. Most agent deployments have no policy for what gets remembered, for how long, who can access it, and under what conditions it is purged.

5. **Conversation history is evidence.** In a regulated industry, every prompt sent to an AI and every response received is potentially discoverable in litigation, examinable in audit, and subject to retention requirements. Most enterprises have no L2 retention policy for AI conversation history at all.

6. **"No training" is not "no retention."** Anthropic does not train on API data by default. They do retain it for safety and security review — typically thirty days when retention is on, per their workspace controls. That retention is L2 information state. The policy difference matters. Verify the current window in your DPA before you assume it.

If you are an enterprise architect reading this and your AI policy does not address all six of those, your L2 is not yet defensible under SRF v1.0. That is the work for this quarter, not next year.

### L1 — AI Business & Usage

**Accountable: you, every operating model.**

L1 is your organization. The governance committee, the risk acceptance, the procurement decisions, the policy framework, the incident playbook. Anthropic cannot satisfy L1 for you because L1 is your enterprise's relationship to AI as a business activity.

What Anthropic provides at L1: the documentation and evidence stack that lets your L1 governance make informed decisions. Their compliance posture, public model cards, RSP framework, abuse monitoring transparency.

What you provide at L1: your AI policy, your usage standards, your incident response plan, your training program for users, your vendor risk assessment of Anthropic, your contract terms covering everything below.

**Where the gap is:** L1 is where the "shared is not a valid final answer" rule bites hardest. Many enterprises have written AI usage policies that say *"the AI provider is responsible for accuracy."* That sentence is no longer compliant under SRF v1.0. Accuracy is your L1 risk acceptance and your L3 application design. It is not Anthropic's accountability assignment. Rewrite the policy.

---

## Agent-PaaS and the autonomy question

The v1.0 framework introduces Agent-PaaS as a first-class operating model that did not have a clean home in older shared-responsibility frameworks. This is where Claude with MCP, Computer Use, and the Claude Agent SDK lives. The SRF assigns agentic autonomy levels L0 through L5 and human-override tiers T1 through T5.

For Claude-based agents the practical mapping looks like this:

| Configuration | Autonomy level | Override tier |
|---|---|---|
| Claude completes a single tool call, human reviews before acting | L1 | T1 — Required pre-action approval |
| Claude executes a chain of tool calls within a defined scope, human reviews output | L2 | T2 — Required post-action review |
| Claude executes autonomously with telemetry and policy gates | L3 | T3 — Override-on-flag |
| Claude operates as a long-running agent with self-directed planning | L4 | T4 — Override-on-incident |
| Claude operates with full autonomy across systems | L5 | T5 — Audit-only override |

Most production enterprise deployments of Claude today are L1 through L3. The Claude Agent SDK and Computer Use make L4 deployments possible. L5 is rare and should remain so until the override-tier evidence requirements catch up to the autonomy capability.

**Where the gap is largest:** the contract between you and Anthropic does not specify autonomy boundaries. Your L1 governance has to. This is the single most important policy document you do not yet have if you are deploying agentic Claude in production. Write it.

---

## Five gap areas to inspect before your next deployment

1. **MCP server trust boundary.** Every MCP server you connect to Claude is a deployer-owned L3 component. Inventory them, threat-model them, and document the accountability assignment.

2. **Computer Use sandbox.** When Claude acts in a browser or on a desktop, the sandbox boundary is yours to define. Document the allowed operation set, the rollback procedure, and the audit log retention.

3. **Long-running agent state.** Memory between sessions is L2 information. If you are using external memory systems (vector stores, databases, file systems), the L2 governance applies. Most agent frameworks do not surface this clearly.

4. **Multi-agent coordination.** When Claude agents talk to other Claude agents or to other model-provider agents, the accountability cascade is not in v1.0 yet. This is the gap CoSAI's Workstream 4 on Secure Design Patterns for Agentic Systems is actively working on. Map it manually until the standard catches up.

5. **Override-tier verification.** Your human override tier is a policy until it is tested. Document the test cadence. Run it.

---

## What this is, and what it is not

This is a practitioner mapping. It is not endorsed by Anthropic, by CoSAI, or by the `aisharedresponsibility.com` maintainer. It is one operator's read of the v1.0 framework against the Anthropic surface as of June 2026.

If you spot something I have wrong, write back at `labs@northwoodssentinel.com` or in the comments. The companion site's roadmap mentions community contributions; when their GitHub repository opens, a refined version of this will go in as a PR.

If you are an enterprise looking for help mapping this against your specific deployment, my consulting practice covers exactly this work. Direct inquiries to `labs@northwoodssentinel.com`. Real engagements, real scope, real accountability.

The era is being formalized right now. AWS Shared Responsibility was published when smartphones were new. The architects who wrote the first crosswalks to PCI-DSS and HIPAA are still cited today, more than fifteen years later. The agentic era's equivalent moment is happening in May and June 2026. I would rather contribute to the conversation than watch it from outside.

---

*Robert Chuvala — Founder & Lead Developer, FlowLabs | R&D division of Northwoods Sentinel | Madison, Wisconsin. Twenty years in offensive security, the last twelve months building substrate-first multi-agent infrastructure on Cloudflare. Reach me at `labs@northwoodssentinel.com` or `www.NorthwoodsSentinel.com/labs`.*
