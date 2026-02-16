# Guilhem's Learning Approach — Mathematics

## How his brain works

**Problem-first, always.** Every concept must be motivated by the problem it was invented to solve. If you can't articulate the problem, you don't understand the concept — you've memorised its definition. Never present a theorem and then show applications. Present the situation that's broken, let him feel why it's broken, then show how the theorem fixes it.

**No black boxes.** Every tool must be understood from first principles before use. "You'll learn this later" or "just trust that sin(x) is bounded" is unacceptable. If a concept depends on something not yet established, either establish it first or flag it as an explicit IOU with a clear path to resolution. He'd rather spend an extra week on prerequisites than use something he doesn't fully understand.

**Ground-up definitions.** Prefer the most fundamental, self-contained definition available. Example: sine is not "opposite over hypotenuse" (breaks at angles > 90°) or "y-coordinate on the unit circle" (circular definition requiring arc length). Sine is its power series — computable from pure arithmetic, no geometry required. Everything else is a consequence.

**Historical context matters.** Understanding WHY something was invented — what broke, who was frustrated, what they were trying to solve — provides the scaffolding for remembering and using the theorem. Not for historical trivia, but because the order of human discovery tracks the order of conceptual dependency.

**Full derivation, not overview.** When explaining where a formula comes from, don't give a 3-line sketch. Walk through the derivation step by step, so he could reproduce it. The goal is to be able to reiterate and use everything by heart, understanding every single bit.

**No "typical academic" structure.** The standard theory-first-then-problems approach doesn't suit his brain. It presents solutions before problems, which makes the solutions feel arbitrary and unmotivated.

---

## Three approaches to mathematical pedagogy

### 1. Bourbaki (axiomatic, structures-first)

**Origin:** Nicolas Bourbaki, a collective of French mathematicians (1930s-present). Set out to rewrite all of mathematics from axioms upward. Still active — the Séminaire Bourbaki runs at the Institut Henri Poincaré, membership is secret.

**Method:** Start from the most general, abstract foundations (set theory, algebraic structures, topology). Build everything axiomatically. Definition-theorem-proof. No appeals to intuition, geometry, or history. Maximum generality before any specific application.

**Strengths:** No black boxes. Everything is proved. Logically watertight. Produces deep structural understanding.

**Weaknesses:** Presents solutions before problems. Inverts the order of discovery. You study convergence theory for months before encountering the functions (sine, exponential) that motivate it. Can kill intuition and motivation — you learn tools whose purpose you don't understand yet.

**Legacy:** The CPGE curriculum is Bourbaki's direct pedagogical footprint. French mathematical strength in pure algebra and analysis traces to this tradition.

### 2. Genetic / Historical (Toeplitz, Arnold)

**Origin:** Otto Toeplitz ("The Calculus: A Genetic Approach", 1963). Vladimir Arnold (fierce anti-Bourbaki polemicist). The idea: follow the historical genesis of mathematical ideas, because the order humans discovered things is a good proxy for the order an individual mind can absorb them.

**Method:** Start where humanity started — geometry, measurement, physical problems. Build calculus from the tangent and area problems. Introduce formal rigour only when informal methods visibly fail (Cauchy's 1821 program to clean up the mess Newton and Euler left).

**Strengths:** Every concept arrives when you need it. Motivation is built in. Matches how the human mind naturally encounters mathematical ideas — concrete before abstract.

**Weaknesses:** Historical order includes long detours, dead ends, and centuries of hand-waving before rigour. Following pure history means spending years using tools you can't prove are correct — exactly what happened to mathematics between Newton (1660s) and Cauchy (1821).

### 3. The hybrid: Bourbaki rigour + historical order

**What Guilhem wants.** The rigour and completeness of Bourbaki (no black boxes, everything proved, nothing on faith) but in the order of historical discovery (motivated by problems, following the logical succession of human insight).

**Method:** Follow the historical order of problems and motivations. But at each step, prove things rigorously using only what's been established so far. Don't hand-wave for 150 years like Newton did — when you introduce a concept, prove it before moving on.

**Concretely:**
- Start with geometry and measurement (ancient, concrete, visual)
- Build limits from Archimedes' method of exhaustion (he literally used the squeeze theorem to compute π)
- Build derivatives from the tangent problem
- Build Taylor's theorem from Newton's insight ("functions are infinite polynomials")
- NOW derive sine's power series from first principles — no more black boxes
- THEN study convergence deeply — now motivated by real examples you fully understand
- At each step: full proof, full derivation, every piece explained

**Trade-off:** Takes longer than either pure approach alone. But produces the deepest understanding: you know both WHY each concept exists (historical) and that it's rigorously true (Bourbaki).

---

## Practical implications for teaching him

1. Start every topic with the historical problem, not the theorem
2. Build prerequisites before using them — reorder curriculum if needed
3. Every definition should be the most fundamental available (power series > triangle ratio)
4. Every proof should be step-by-step, reproducible from memory
5. Flag any IOUs explicitly — never silently assume something unproved
6. Use an HTML page with KaTeX for rendering (terminal doesn't render equations)
7. After establishing a theorem: "what breaks if you weaken each hypothesis"
8. End with a one-sentence version to carry in your head

## Current study setup

- HTML study page: `.claude/math-study/index.html` (KaTeX-rendered, refresh to see updates)
- Curriculum: `CPGE_HYBRID_CURRICULUM.md` (restructured theorem sequence)
- Reference: `CPGE_MATHEMATICS_ROADMAP.md` (original CPGE-ordered theorem list with motivations)
