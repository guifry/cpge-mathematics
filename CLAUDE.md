# CPGE Mathematics Tutorial Site

## What this is

A self-study website for CPGE (French preparatory school) mathematics. HTML pages with KaTeX-rendered equations, deployed via GitHub Pages at `https://guifry.github.io/cpge-mathematics/`.

The curriculum follows a **hybrid approach**: Bourbaki rigour (everything proved, no black boxes) in **historical order** (every concept motivated by the problem that created it). See `LEARNING_APPROACH.md` for the full pedagogical philosophy and `CPGE_HYBRID_CURRICULUM.md` for the phase-by-phase plan.

## Repository structure

```
index.html                     # Table of contents, links all phases
style.css                      # Shared CSS for all pages (dark theme, box styles)
phase0/                        # Phase 0: Geometry and Measurement (6 pages)
phase1/                        # Phase 1: Limits and Basic Convergence (7 pages)
phase2/                        # Phase 2: Calculus (9 pages)
LEARNING_APPROACH.md           # How the learner's brain works, pedagogical principles
CPGE_HYBRID_CURRICULUM.md      # 13-phase curriculum with content plan per phase
CPGE_MATHEMATICS_ROADMAP.md    # Original CPGE-ordered theorem list
```

## Git conventions

One-liner commits: `verb: description`. Allowed verbs: `feat`, `fix`, `chore`, `doc`, `test`. No commit body unless asked. No authorship markers.

Push to `master` branch. Remote uses SSH alias `github.com-guifry` (personal account).

---

## How to write a tutorial page

Every page follows the same structure. This is not a suggestion — follow it exactly.

### HTML boilerplate

```html
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>PAGE TITLE — Phase N</title>
<link rel="stylesheet" href="../style.css">
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/katex@0.16.9/dist/katex.min.css">
<script defer src="https://cdn.jsdelivr.net/npm/katex@0.16.9/dist/katex.min.js"></script>
<script defer src="https://cdn.jsdelivr.net/npm/katex@0.16.9/dist/contrib/auto-render.min.js"
  onload="renderMathInElement(document.body, {
    delimiters: [
      {left: '$$', right: '$$', display: true},
      {left: '$', right: '$', display: false}
    ]
  });"></script>
</head>
<body>
```

Every page uses `../style.css` (one level up from the phase folder). KaTeX auto-renders `$$...$$` (display) and `$...$` (inline).

### Page skeleton (in order)

1. **Title**: `<h1>Page Title</h1>`
2. **Subtitle**: `<p class="subtitle">Phase N — Topic Area, Page M</p>`
3. **Problem box**: `<div class="problem-box">` — the historical problem that motivated this concept. This is ALWAYS first. Never start with a definition or theorem.
4. **Numbered sections**: `<h2>1. Section Title</h2>`, `<h2>2. ...</h2>` — build from the problem to the theorem, step by step.
5. **History box**: `<div class="history-box">` — who invented it, when, what they were trying to solve. Placed after the main theorems/proofs.
6. **Break box(es)**: `<div class="break-box">` — "what breaks if you weaken each hypothesis." Systematically remove conditions and show failures.
7. **Horizontal rule**: `<hr>`
8. **One-liner**: `<div class="oneliner">` — one sentence to carry in your head. The takeaway.
9. **Navigation**: `<div class="nav">` with prev/next links.

### Box types (CSS classes)

| Class | Border colour | Use |
|-------|--------------|-----|
| `problem-box` | Orange (`#e9a045`) | The motivating problem. Always opens the page. |
| `theorem-box` | Red (`var(--accent)`) | Formal definitions, theorem statements, lemmas. |
| `proof-box` | Green (`#4a9`) | Step-by-step proofs. End with `<div class="qed">∎</div>`. |
| `history-box` | Teal (`#6a9`) | Historical context — who, when, why. |
| `break-box` | Grey (`#888`) | What breaks if you remove a hypothesis. |
| `oneliner` | None (surface bg) | One-sentence summary. Italic via CSS. Centred. |

Each box has a `<div class="label">LABEL TEXT</div>` as its first child (uppercase via CSS).

### Display math

Always wrap display equations in a div:
```html
<div class="display-math">$$f'(x) = \lim_{h \to 0} \frac{f(x+h) - f(x)}{h}$$</div>
```

Inline math uses `$...$` directly in paragraph text.

### Navigation links

```html
<div class="nav">
  <a href="PREV_FILE.html">&larr; Previous: Prev Title</a>
  <a href="NEXT_FILE.html">Next: Next Title &rarr;</a>
</div>
```

First page of a phase links back to `../index.html`. Last page links forward to the next phase's first page (or `../index.html` if it's the final page of the latest phase).

### File naming

Pages are numbered: `01-kebab-case-name.html`, `02-kebab-case-name.html`, etc. Stored in `phaseN/` directories.

---

## Pedagogical rules

These are non-negotiable. Every page must follow all of them.

### 1. Problem-first, always

Open every page with the historical problem that created the concept. The reader must feel WHY this theorem exists before seeing its statement. Never open with a definition or theorem.

Examples of good openings:
- "Fermat (1636) wanted to find where a curve reaches its maximum..."
- "Archimedes wanted the area under a parabola but could only measure rectangles..."
- "The Pythagoreans built their worldview on ratios — then someone drew a diagonal..."

### 2. No black boxes

Every tool must be proved or defined from first principles before use. If a concept depends on something not yet established:
- **If it's from an earlier phase**: reference it explicitly ("We proved in Phase 0, page 5 that $|\sin\theta| \leq 1$").
- **If it's from a later phase**: flag it as an explicit **IOU** ("This uses $e^x$ which we'll define from its power series in Phase 3").
- Never silently assume something unproved.

### 3. Ground-up definitions

Prefer the most fundamental, self-contained definition available. Build every definition from previously established concepts. The reader should be able to trace any statement back to the axioms through a chain of proved results.

### 4. Full derivation, not overview

Every proof must be step-by-step, with every algebraic manipulation shown. The reader should be able to reproduce the proof from memory after studying it. No "it can be shown that..." or "by a similar argument..." (unless the similar argument was already given in full and would be pure repetition).

### 5. Unpack every piece

After stating a definition or theorem, explain what each condition means and why it's there:
- What does each symbol represent?
- Why is each hypothesis necessary? (Give a counterexample if removed — this goes in the break-box.)
- What is the intuition behind the statement?

### 6. Historical context

Include a `history-box` on every page with:
- Who discovered/proved it and when
- What problem they were trying to solve
- How it connects to the broader mathematical narrative

This is not trivia — the historical order tracks conceptual dependency, which is how the curriculum is structured.

### 7. "What breaks" analysis

Every page must have at least one `break-box` that systematically weakens the theorem's hypotheses:
- Remove condition A — show a counterexample
- Remove condition B — show a counterexample
- Weaken condition C — show what changes

This cements understanding of WHY each hypothesis is necessary.

### 8. One-liner

End every page with a single sentence in the `oneliner` div. This is the version the reader carries in their head — the essence of the whole page compressed into one line.

### 9. Cross-references

Explicitly reference earlier pages when using their results. Format: "Phase N, page M" or "we proved on page 03 that...". The reader should always know where a fact comes from.

### 10. No comments in code

No HTML comments unless absolutely necessary. British English only throughout all text content.

### 11. IOUs

When a page must reference something not yet proved (e.g. using $e^x$ before Phase 3 defines it), flag it clearly:
- In the text: "(IOU: this will be proved in Phase 3 from the power series definition)"
- Never let an unproved fact pass silently

---

## Writing style

- Conversational but precise. Write like a knowledgeable friend explaining at a whiteboard, not like a textbook.
- Use "you" and "we" freely.
- Short paragraphs. One idea per paragraph.
- Bold key terms on first use.
- Italicise for emphasis and for meta-commentary ("this is the key step").
- No emojis. No bullet-point walls where prose works better.
- Page length: 280-450 lines of HTML. Long enough to be thorough, short enough to study in one sitting.

---

## When adding a new phase

1. Read `CPGE_HYBRID_CURRICULUM.md` for the phase's content plan
2. Create `phaseN/` directory
3. Write all pages following the structure above
4. Update `index.html` to add the phase section with linked entries (see existing phases for the pattern: `phase-label`, intro paragraph in `<em>`, `index-list` with `<a>` and `.desc`)
5. Replace the "Phases N-13 coming..." placeholder to reflect remaining phases
6. Commit: `feat: Phase N — Topic Name (M pages)`
7. Push to `master`

---

## Key documents

- `LEARNING_APPROACH.md` — how the learner's brain works, the three pedagogical approaches, practical teaching rules
- `CPGE_HYBRID_CURRICULUM.md` — the full 13-phase curriculum with theorems, content plans, time estimates, and rationale for reordering
- `CPGE_MATHEMATICS_ROADMAP.md` — the original CPGE-ordered theorem list with "what broke" narratives

Read these before writing any new content. They define what to teach and in what order.
