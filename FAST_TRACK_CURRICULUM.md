# Fast-Track Curriculum — 12 Months, Part-Time

The full hybrid curriculum (15 phases, ~20 months) is designed for exhaustive, no-black-boxes mastery. This document describes a focused 12-month alternative for a different goal: **CPGE concours-level problem-solving fluency + stochastic calculus readiness**, studying on the side (~1.5h/day).

The existing pages are unchanged. This is a different path through the same material, with phases triaged by relevance and a concrete month-by-month plan.

---

## Why a different curriculum

The full curriculum prioritises completeness — every theorem proved, every phase covered. That's the right goal if you have 20 months and want encyclopaedic depth. But if you need to be *comfortable solving exam problems* within a year, the bottleneck isn't theorem coverage — it's **problem-solving fluency**, which comes from exercises, not exposition.

The fast track keeps the theory pages as reference but restructures the order, drops phases that don't feed into the target skills, and assumes **70% of study time goes to problem-solving, not reading proofs**.

---

## Triage: essential, useful, skip for now

### Essential — do thoroughly (theory + heavy problem practice)

| Phase | Topic | Why essential |
|-------|-------|--------------|
| 2 | Limits and convergence | Foundation of everything. Epsilon-delta fluency is non-negotiable. |
| 3 | Calculus | Derivatives + integration. Core of every exam. |
| 4 | Power series and Taylor | Used everywhere. Taylor expansions are the bread and butter of concours. |
| 5 | Convergence toolkit | Series tests appear on every exam. |
| 6 | Linear algebra | ~40% of CPGE exams. Eigenvalues, diagonalisation, projections. |
| 8 | ODEs | Central to both concours and stochastic calc. |
| 12 | Probability | Non-negotiable for quant finance. CLT, conditional expectation. |

### Useful — read the pages, do a few problems, don't grind

| Phase | Topic | Why lighter |
|-------|-------|------------|
| 0 | Geometry | Review quickly. Most of this is already familiar. |
| 7 | Multivariable calc | Important but less tested in isolation. Focus on partial derivatives, Jacobians, Lagrange multipliers. Skim vector calculus theorems. |
| 11 | Fourier | Matters for signal processing / PDEs. Do the basics (series, Parseval). Skip Gibbs. |
| 13 | Bilinear / spectral | SVD and spectral theorem matter for data/quant. Read, do a few exercises. |

### Skip for now

| Phase | Topic | Why skip |
|-------|-------|---------|
| 1 | Number theory | Almost never on concours analysis papers. Doesn't feed into stochastic calc. |
| 9 | Topology of metric spaces | The Banach fixed point theorem is the only must-know — already seen in Phase 8. Baire category and Arzela-Ascoli can wait. |
| 10 | Abstract algebra | Galois theory won't help solve SDEs. Skip unless targeting an algebra-heavy concours. |
| 14 | Normed spaces / functional analysis | Graduate-level. Come back when starting stochastic calc measure theory. |
| 15 | Game theory | Bonus. Skip. |

### Will the skipped phases be hard to learn later?

Yes, genuinely easier — the essential core is load-bearing for all of them:

- **Number theory (Phase 1):** the style of reasoning (contradiction, infinite descent) is drilled to death in Phases 2–5. Phase 1 becomes a weekend read.
- **Topology (Phase 9):** 80% is "take Phase 2 theorems for R and notice they only used three properties of distance." Compactness arguments will already be second nature.
- **Abstract algebra (Phase 10):** Lagrange's theorem is Phase 6's dimension theorem in disguise. Isomorphism theorems are rank-nullity for groups. Still needs 4–6 weeks, but won't feel alien.
- **Functional analysis (Phase 14):** literally "Phase 6 + Phase 9 in infinite dimensions." The natural next step alongside measure theory for stochastic calc.

---

## 12-month plan

~1.5h/day average. Each "month" ≈ 45 hours.

| Month | Theory (read pages) | Problem practice |
|-------|-------------------|-----------------|
| 0 (before you start) | Refresher: equation solving (especially factoring), polynomials, concepts | Do all 30 refresher exercises (~3-4 hours total). **Gate:** you should be able to factor any quadratic on sight before moving on. Factoring is the prerequisite for everything. |
| 1 | Phase 0 (skim, including trig identities) + Phase 2 (thorough, starting with inequalities) | Epsilon-delta exercises. Prove 10 limits from scratch. |
| 2 | Phase 3 Part A (derivatives) | Differentiation drills. MVT application problems. |
| 3 | Phase 3 Part B (integration) | Integration techniques — do 50+ integrals. Muscle memory. |
| 4 | Phase 4 (Taylor + power series) | Taylor expand everything. Remainder estimation problems. |
| 5 | Phase 5 (convergence toolkit) | Series convergence — 30+ series to classify. |
| 6–7 | Phase 6 (linear algebra) | Matrix computation, eigenvalue problems, diagonalisation. Needs 2 months. |
| 8 | Phase 8 (ODEs) | Solve 30+ ODEs. Phase portraits. Stability analysis. |
| 9 | Phase 7 (multivariable — focused) | Partial derivatives, chain rule, Lagrange multipliers. Skip vector calc proofs. |
| 10–11 | Phase 12 (probability) | Conditional expectation, CLT applications, moment generating functions. |
| 12 | Phase 11 (Fourier basics) + Phase 13 (spectral, SVD) | Light. Focus on computation, not proofs. |

---

## How to study each page

Don't read theory first and do exercises later. Interleave within each page:

1. **Read the problem box only.** Stop. Spend 5–10 minutes trying to see why it's hard.
2. **Read the theorem statement.** Stop. Try to prove it yourself for 10–15 minutes. You'll probably fail — that's the point.
3. **Read the proof.** Compare against your failed attempt.
4. **Close the page. Reproduce the proof from memory** on paper. The gaps are exactly what you didn't understand.
5. **Do 3–5 exercises that use this theorem.** Same session or next day.
6. **One week later: 2–3 harder exercises without rereading.** Spaced retrieval.

Ratio per topic: ~1 session reading (steps 1–4), then 2–3 sessions pure problems (steps 5–6).

---

## Exercise sources

The course pages are exposition-only. You need external problem sources:

- **Past CPGE concours papers** — search "annales concours X MP/PC maths", or e3a/CCINP for slightly easier. Do them timed.
- **Oral exam problems** — search "oraux X ENS maths". Shorter, more targeted.
- **Gourdon, *Les maths en tete*** (Analyse + Algebre) — gold standard for CPGE problems with solutions.
- **Francinou-Gianella-Nicolas, *Oraux X-ENS*** series.

---

## After the 12 months

You'd still need for stochastic calculus:
- Measure theory (Lebesgue integral, sigma-algebras)
- Martingales, Brownian motion, Ito calculus

But you'd have the prerequisites: convergence theory, probability, ODEs, linear algebra. The jump to stochastic calc would be ~3–4 months additional.
