# Prokuro — Product Definition
*Living document. Last updated: May 2026.*

---

## What Prokuro Is

Prokuro is a supply chain decision engine for hardware companies. It tells procurement and supply chain managers not just what's at risk in their Bill of Materials, but exactly what to do about it — with validated alternates, real availability data, and network-proven compatibility. Every competitor sends alerts. Prokuro hands you the extinguisher with instructions.

---

## Primary User

**Procurement Manager / Supply Chain Manager** at a mid-size hardware OEM (10–500 employees, electronics-focused, 50–2,000 line BOM).

This person is responsible for keeping production moving. They are not primarily an engineer — they don't want to read datasheets. They want to know: *is this part going to be a problem, when, and what do I order instead?* They currently manage this with a combination of distributor emails, manual Octopart checks, and spreadsheets. They have no systematic early warning system.

Secondary user (post-MVP): Hardware/PCB engineer, who uses Prokuro during component selection to avoid designing in risky parts.

---

## The Core Promise

> "This part has 14 weeks until EOL. 47 other companies in our network have already qualified MPN-XYZ-456 as a drop-in alternate. It's in stock at Digi-Key at $2.10/unit. Here's the datasheet comparison. Here's what you need to do this week."

That sentence is the product. Everything in the feature list below exists to make that sentence possible, accurate, and trusted.

---

## MVP — Phase 0

### What ships at launch

**1. BOM Ingestion (CSV / Excel)**

Prokuro accepts any real-world BOM file — messy column names, merged cells, multi-sheet workbooks, distributor SKUs mixed with MPNs. The ingestion layer:

- Auto-detects and maps columns to canonical fields (MPN, Manufacturer, Quantity, Reference Designator, Description, Footprint)
- Presents a column-mapping UI on first upload so the user can confirm or correct mappings
- Saves that mapping per customer for all future uploads — no re-mapping the same company's BOM twice
- Strips and normalizes MPNs (whitespace, case, distributor SKU detection)
- Handles AML — if alternates are listed as comma-separated values in a single cell or on a separate sheet, Prokuro parses and links them
- Accepts multi-sheet workbooks (BOM on sheet 1, AML on sheet 2)
- Scope: electronics BOMs only (PCB-based). No mechanical, optical, or fluidic components. Lines that don't resolve to an electronic component are flagged, not failed.

**2. EOL / Lifecycle Risk Scan**

For every resolved line in the BOM, Prokuro surfaces:

- Current lifecycle status (Active / NRND / EOL / Discontinued)
- Predicted time-to-EOL based on inventory depletion signals and network substitution patterns — not just manufacturer announcements
- Whether a PCN has been issued, and when
- Risk score per line (1–10), weighted by: lifecycle stage, number of approved alternates, current stock depth, demand concentration in Prokuro's network

**3. Tariff & Geopolitical Exposure Flags**

For every resolved line:

- Country of origin (manufacturing, not just brand)
- Applicable Section 301 tariff rate
- Entity List status (US Commerce Department)
- China-assembly exposure flag (parts fabbed outside China but assembled/tested in China)
- Total estimated tariff cost impact per line at current BOM quantity
- Summary: "X% of your BOM by line count has China-origin exposure. Estimated added cost at production volume: $Y."

**4. Lead Time & Availability**

For every resolved line:

- Current stock at major distributors (Digi-Key, Mouser, Arrow, Avnet, LCSC)
- Lead time from distributors and direct from manufacturer where available
- Lead time trend: is this part getting longer or shorter over the past 30/60/90 days?
- Flag if stock across all distributors is below a threshold relative to BOM quantity × typical production run

**5. Alternate Suggestions with Network Validation**

This is the core differentiator. For every at-risk line:

- Parametric alternates from component database (form, fit, function matches)
- **Network-validated alternates**: alternates that other companies in Prokuro's BOM network have used as substitutions for this exact part — ranked by how many times they've appeared as a substitution and whether those companies accepted them
- For each suggested alternate: current lifecycle status, stock depth, lead time, unit price at the BOM quantity, and a datasheet comparison summary (key parameter deltas)
- A **drop-in confidence score** — higher when based on real network substitutions, lower when parametric only

**6. Risk Report Output**

Each BOM upload generates a structured report:

- Executive summary: overall risk score, number of at-risk lines, top 3 actions needed this week
- Per-line risk table: sortable by risk score, EOL date, tariff exposure, stock depth
- For each at-risk line: the "decision card" — risk reason, recommended alternate, confidence score, availability, estimated cost/time to switch
- Shareable as PDF or via link
- Supports multiple BOMs per company from day one — reports are organized by product/BOM within the company account

---

## Post-MVP Roadmap

These features are confirmed for later phases but are explicitly out of scope for the MVP.

**Phase 1 — Live Dashboard & Continuous Monitoring**

Instead of (or alongside) a static report, an always-on dashboard monitors all active BOMs. Alerts fire when conditions change: a part moves from Active to NRND, stock at all distributors drops below threshold, a new tariff action affects a line, lead time jumps >20% in 30 days. The user doesn't need to re-upload to get updated intelligence.

**Phase 1 — Agentic Draft Actions**

When Prokuro recommends an action, the AI drafts the work:

- Draft the engineering change request for the alternate swap
- Draft the supplier query email with the relevant spec comparison
- Draft the internal summary for the engineering team
- User reviews and sends. Prokuro does the legwork, human approves and acts.

**Phase 2 — Portfolio-Level Risk View**

Aggregate risk across all company BOMs in one view. Identify shared components across products (if a part is at risk and it appears in 4 of your 6 products, that surfaces differently than a single-product risk). Cross-product impact scoring.

**Phase 2 — Autonomous Agent Actions**

Low-risk actions executed without human approval: pulling live quotes from distributor APIs, flagging in PLM systems, creating purchase order drafts. Human sees exceptions only.

**Phase 3 — Shift-Left Design Integration**

KiCad / EasyEDA plugin that surfaces risk scores inline during schematic capture. Before the BOM exists, the engineer sees risk signals as they place components. The cheapest possible risk mitigation is choosing a better part before the design is finalized.

**Phase 3 — PLM Integrations**

Arena and Windchill REST API integrations. Pull BOMs directly from PLM, write risk flags back. This is what makes Prokuro sticky at the enterprise level.

---

## Data Inputs

### At Launch
- **CSV and Excel (.xlsx, .xls)** — any format, any column naming convention. The ingestion layer handles the mess.

### Post-MVP (in order of priority)
- **Manual MPN entry** — paste a list of part numbers for a quick check without a full BOM file
- **Altium 365 API** — pull BOM directly from the design environment
- **KiCad export** — BOM export from KiCad is a standard XML/CSV; direct import with zero mapping needed
- **Arena REST API** — PLM integration for enterprise customers
- **Windchill REST API** — second PLM integration

---

## Data We Collect (The Flywheel)

This section is internal strategy, not customer-facing. Every BOM upload is also a data collection event. The following signals are logged from day one, even before they're used in the product — because this data cannot be collected retroactively.

- **Which MPNs appear in real production BOMs** (demand signal — what's actually being built)
- **Which alternates appear in AML fields** alongside which primary parts (substitution candidates)
- **Which alternates are accepted vs. rejected** when Prokuro suggests them (real-world validation signal)
- **BOM quantity per line** (demand volume signal — how much of each part is actually being bought)
- **Which parts disappear from BOMs over time** (leading indicator of supply problems before any PCN)
- **Which parts replace them** (validated substitution paths)

This aggregate, anonymized signal is what makes Prokuro's alternate suggestions network-validated rather than parametric. It is the moat. The product earns the right to build it by delivering value through the base features first.

All BOM data is stored anonymized — no customer can see another customer's BOM. What's shared across the network is the signal: "47 companies have used this alternate for that primary part," never "Company X's BOM contains these parts."

---

## Pricing

**Monthly subscription, per seat.**

- Encourages frequent BOM uploads (fuels the data flywheel)
- Predictable revenue
- Natural expansion motion: as a company onboards more of their procurement team, seats grow

Indicative tier structure (to be validated with first customers):

| Tier | Target | BOMs | Price |
|---|---|---|---|
| Starter | 1–2 person team, early-stage hardware co. | Up to 5 active BOMs | ~$99/mo |
| Growth | Small procurement team, 3–10 people | Up to 20 active BOMs | ~$299/mo |
| Scale | Mid-size OEM, full procurement team | Unlimited BOMs | ~$799/mo |

Do not offer a per-upload model. It discourages frequent uploads and starves the flywheel.

---

## What We Are Not Building (Scope Boundaries)

Being explicit about what Prokuro is not prevents scope creep and keeps the MVP shippable.

- **Not a procurement platform.** Prokuro does not place orders, manage purchase orders, or connect to ERP. It is an intelligence layer, not a transaction layer. (Cofactr owns that space.)
- **Not a mechanical BOM tool.** Sheet metal, fasteners, machined parts, optics — out of scope. Octopart doesn't cover them, and the tariff/EOL pitch doesn't apply the same way.
- **Not a compliance tool.** RoHS, REACH, conflict minerals — these are covered by other tools (Source Intelligence, etc.) and are a different buyer and workflow.
- **Not an ERP.** No inventory management, no demand planning, no production scheduling.

---

## The One-Sentence Pitch

*Prokuro tells procurement teams which parts in their BOM are about to become a problem — and hands them the proven solution before it costs them a redesign.*