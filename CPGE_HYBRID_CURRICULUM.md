# CPGE Mathematics — Hybrid Curriculum

Bourbaki rigour, historical order. Every CPGE theorem is here, but resequenced so that each concept is motivated by the problem that created it and fully proved before being used. Prerequisites that the CPGE takes for granted are made explicit.

Refer to `CPGE_MATHEMATICS_ROADMAP.md` for detailed "what broke" narratives per theorem. Refer to `LEARNING_APPROACH.md` for pedagogical principles.

---

## Phase 0 — Geometry and Measurement

*Not in the CPGE theorem list, but required as foundation. This is where humanity started.*

**The problem:** you want to measure the world. Lengths, areas, angles, the height of a building from its shadow. You need tools.

### What to study

- Euclidean geometry: triangles, similarity, congruence, circles
- The Pythagorean theorem and its proof (dozens exist — Euclid's, Einstein's, the Chinese visual proof)
- Trigonometry as measurement: sine and cosine as ratios in right triangles (this is the historical definition — it works for acute angles)
- Extending to all angles via the unit circle (Euler, 1748)
- Coordinate geometry: Descartes' bridge between algebra and geometry (1637). Points become pairs of numbers. Curves become equations.
- **The first crisis:** √2 is irrational (Pythagorean proof by contradiction). Not all lengths correspond to fractions. The number line has holes. This motivates the real numbers.

**Why this comes first:** every later concept (limits, derivatives, series) was invented to solve problems about geometric and physical quantities. Without this grounding, those problems feel abstract rather than urgent.

**Time estimate:** 2-3 weeks (much of this is review, but done rigorously)

---

## Phase 1 — The Infinite: Limits and Basic Convergence

*Archimedes (250 BC) wanted to compute the area of a circle. He trapped it between inscribed and circumscribed polygons — 6 sides, then 12, then 24, then 96. The area of the circle is what the polygon areas "approach." But what does "approach" mean, precisely? This question took 2000 years to answer properly.*

**The problem:** infinite processes produce finite results (sometimes). When, and how do you prove it?

### Theorems (from CPGE roadmap)

1. **Completeness of ℝ** — ℝ has no holes (unlike ℚ). Every bounded set has a supremum. This is the axiom that makes everything below work. Historically: understood implicitly for centuries, made explicit by Dedekind (1858).

2. **Squeeze theorem** — if $a_n \leq b_n \leq c_n$ and $a_n, c_n \to L$, then $b_n \to L$. Archimedes' method formalised. The first convergence tool.

3. **Monotone convergence theorem** — a bounded monotone sequence converges. The workhorse. Most convergence proofs reduce to this.

4. **Bolzano-Weierstrass theorem** — every bounded sequence has a convergent subsequence. Bolzano (1817) needed it to prove the intermediate value theorem. It turned out to be more important than the theorem it was invented for.

5. **Cauchy criterion** — a sequence converges iff its terms get arbitrarily close to each other. Lets you prove convergence without knowing the limit. Essential when the limit is irrational or unknown.

6. **Connected sets and IVT** — continuous image of a connected set is connected. On ℝ, this gives the intermediate value theorem (Bolzano's original goal).

7. **Dense subsets** — ℚ is dense in ℝ (between any two reals there's a rational). The rationals have holes but are "good enough for approximation."

**Why this comes now:** Archimedes' geometric problem (Phase 0) requires the concept of a limit. Limits require completeness of ℝ, which requires confronting the irrationals (Phase 0's √2 crisis). The logical chain is tight.

**What you can do after this phase:** prove limits, use the squeeze theorem, reason about convergence. But you don't yet have derivatives, series, or power series.

**Time estimate:** 4-5 weeks

---

## Phase 2 — Calculus: Derivatives and Integration

*Not a separate stage in the CPGE roadmap (derivatives and basic integration are lycée prerequisites), but in the hybrid approach they must be built from Phase 1's limits. No formulas taken on faith — every rule proved from the definitions.*

### Part A — Derivatives

**The problem:** what is the slope of a curve at a single point? A straight line has a slope (rise/run). A parabola has a different slope at every point. Fermat (1636) and Newton/Leibniz (1660s-1680s) asked: can you compute instantaneous rate of change?

1. **The derivative as a limit** — $f'(x) = \lim_{h \to 0} \frac{f(x+h) - f(x)}{h}$. Start with the tangent problem: given a curve, what line best approximates it at a point? The secant slope $(f(x+h) - f(x))/h$ is computable for any $h \neq 0$. Taking $h \to 0$ (Phase 1 limits) gives the tangent slope. This IS the derivative — Leibniz's $dy/dx$ is shorthand for this limit.

2. **Differentiation rules from the definition** — sum rule, product rule (Leibniz), quotient rule, chain rule. Each one proved by writing the difference quotient and taking the limit. No "just memorise" — you see WHY the product rule has two terms (both factors are changing simultaneously).

3. **Derivatives of elementary functions** — polynomials (from the binomial theorem), $\sin(x)$ and $\cos(x)$ (geometric argument using $\lim_{h \to 0} \sin(h)/h = 1$ from the squeeze theorem, Phase 1). These will be re-derived from power series in Phase 3.

4. **Mean value theorem** — if $f$ is continuous on $[a,b]$ and differentiable on $(a,b)$, there exists $c$ where $f'(c) = (f(b)-f(a))/(b-a)$. Built from Rolle's theorem (which uses the extreme value theorem, which uses Bolzano-Weierstrass from Phase 1). Connects local information (derivative at a point) to global information (total change over an interval). The bridge between derivatives and integrals.

5. **L'Hôpital's rule** — computing $0/0$ and $\infty/\infty$ limits via derivatives. Proved from Cauchy's generalised mean value theorem. A tool, not a deep theorem — but extremely useful.

### Part B — Integration

**The problem:** Archimedes (250 BC) wanted the area under a parabola. He sliced it into thin rectangles, summed them, and let the slices get thinner. But when is this process valid? When does the sum converge to a definite number? And what is the connection between this area problem and derivatives?

6. **The area problem from scratch** — given a curve $f(x) \geq 0$ on $[a,b]$, what is the area underneath? Partition $[a,b]$ into $n$ subintervals. On each, build a thin rectangle. The area is approximately $\sum f(x_i) \Delta x_i$. As the partition gets finer, this sum should converge. But to what? And does it always converge? This is Riemann's question (1854).

7. **Riemann integral definition** — upper sums $U(f, P) = \sum \sup_{[x_{i-1}, x_i]} f \cdot \Delta x_i$, lower sums $L(f, P) = \sum \inf_{[x_{i-1}, x_i]} f \cdot \Delta x_i$. For any partition, $L \leq$ true area $\leq U$. The function is Riemann integrable when $\inf_P U(f,P) = \sup_P L(f,P)$. This is a supremum/infimum argument — completeness of $\mathbb{R}$ (Phase 1) at work again.

8. **Continuous functions are integrable** — if $f$ is continuous on $[a,b]$, it's uniformly continuous (Heine's theorem, uses compactness from Phase 1). Uniform continuity forces $U - L \to 0$ as the partition refines. This is the first existence theorem: you don't compute the integral, you prove it exists.

9. **Properties of the integral from the definition** — linearity ($\int (af + bg) = a\int f + b\int g$), monotonicity ($f \leq g \Rightarrow \int f \leq \int g$), additivity over intervals ($\int_a^b + \int_b^c = \int_a^c$). Each proved directly from upper/lower sums. No magic — they follow from properties of $\sup$ and $\inf$.

10. **The Fundamental Theorem of Calculus** — the central result of all calculus. Two parts, both proved:
    - **FTC Part 1:** define $F(x) = \int_a^x f(t)\,dt$. Then $F'(x) = f(x)$. Accumulating area under $f$ gives a function whose rate of change IS $f$. Integration and differentiation are inverse operations. Proof: write the difference quotient $\frac{F(x+h) - F(x)}{h} = \frac{1}{h}\int_x^{x+h} f(t)\,dt$, squeeze it between $\inf f$ and $\sup f$ on $[x, x+h]$, use continuity.
    - **FTC Part 2:** if $F' = f$ on $[a,b]$, then $\int_a^b f(x)\,dx = F(b) - F(a)$. To compute an integral, find any antiderivative and evaluate at the endpoints. Proof: telescope — write $F(b) - F(a)$ as a sum of differences $F(x_i) - F(x_{i-1})$, apply MVT (theorem 4 above) to each piece.

11. **Integration techniques as consequences of differentiation rules** — not separate tricks, but the differentiation rules read backwards:
    - **Substitution** = chain rule in reverse. If $u = g(x)$, then $\int f(g(x)) g'(x)\,dx = \int f(u)\,du$. Proved from FTC + chain rule.
    - **Integration by parts** = product rule in reverse. $\int u\,dv = uv - \int v\,du$. Proved from FTC + product rule.

**Why this comes now:** derivatives need limits (Phase 1). Integration needs derivatives (FTC connects them) and completeness (Riemann's definition uses sup/inf). Together they form the complete toolkit for Phase 3: Taylor's theorem needs derivatives for the coefficients AND integration for the remainder term. "Term-by-term integration" in Phase 3 is meaningless without knowing what integration is.

**Time estimate:** 5-6 weeks

---

## Phase 3 — Infinite Polynomials: Power Series and Taylor

*Newton (1660s) had a radical insight: forget trying to compute with complicated functions directly. Write them as infinite polynomials — then you just do polynomial arithmetic, which is easy. Taylor (1715) systematised this: if you know all the derivatives of a function at one point, you can reconstruct the entire function.*

**The problem:** you have a function (sine, exponential, logarithm). You want to compute with it, but it's not a polynomial. Can you express it as one — an infinite one?

### Theorems (from CPGE roadmap)

1. **Taylor's theorem with remainder** — $f(x) = \sum_{k=0}^{n} \frac{f^{(k)}(a)}{k!}(x-a)^k + R_n(x)$. The remainder $R_n$ quantifies the error after $n$ terms. Without it, you don't know if the series converges to $f$ or to something else.

2. **Radius of convergence** — every power series converges inside a disc $|x| < R$ and diverges outside. Hadamard's insight: $R$ is the distance to the nearest complex singularity. Explains why $1/(1+x^2)$, smooth on all of ℝ, has a Taylor series that diverges at $x = 2$ (poles at $\pm i$, distance 1).

3. **Abel's theorem** — if $\sum a_n$ converges, then $\lim_{x \to 1^-} \sum a_n x^n = \sum a_n$. Connects interior behaviour to boundary.

4. **Term-by-term differentiation/integration** — inside the radius of convergence, you can differentiate and integrate power series term by term. Legal because convergence is uniform on compact subsets.

### The payoff: sine from scratch

With Taylor's theorem in hand, derive:
- $\sin(x) = x - x^3/3! + x^5/5! - \cdots$ (match all derivatives at 0)
- $\cos(x) = 1 - x^2/2! + x^4/4! - \cdots$
- $e^x = 1 + x + x^2/2! + x^3/3! + \cdots$
- Prove $\sin^2(x) + \cos^2(x) = 1$ algebraically from the series
- Therefore $|\sin(x)| \leq 1$ — proved, not assumed

**Closing the IOU:** the squeeze theorem example from Phase 1 ($\sin(n)/n \to 0$) is now fully grounded. Every piece is proved.

**Why this comes now:** derivatives (Phase 2) give us the coefficients. Limits (Phase 1) let us reason about convergence. We can now compute with functions rigorously.

**Time estimate:** 4-5 weeks

---

## Phase 4 — The Convergence Toolkit

*Euler (18th century) computed with infinite series freely and brilliantly — and sometimes wrongly. Cauchy (1821) decided to clean up the mess: which manipulations are valid? When does an infinite sum produce a meaningful answer?*

**The problem:** you now have power series and many other infinite sums. You need systematic tools to determine when they converge, how fast, and what operations you can perform on them.

### Theorems (from CPGE roadmap)

1. **Comparison test** — if $0 \leq a_n \leq b_n$ and $\sum b_n$ converges, so does $\sum a_n$. The oldest and simplest test.

2. **Ratio test** (d'Alembert, 1768) — if $|a_{n+1}/a_n| \to L < 1$, absolute convergence. Automates comparison with geometric series.

3. **Alternating series test** (Leibniz) — if $a_n$ decreases to 0, $\sum (-1)^n a_n$ converges. Explains why the alternating harmonic series converges but the harmonic series doesn't.

4. **Absolute vs conditional convergence** — absolutely convergent series can be rearranged freely. Riemann (1853) proved conditionally convergent series can be rearranged to any sum. Disturbing and fundamental.

5. **Cesàro mean theorem** — if $a_n \to L$, the arithmetic means converge to $L$. Fejér (1904) used this to rescue Fourier series from convergence pathologies.

6. **Uniform convergence and continuity** — uniform limit of continuous functions is continuous. Cauchy (1821) got this wrong; Weierstrass (1841) found the fix.

7. **Weierstrass M-test** — bound each term by a constant, converge the constants, get uniform convergence. The practical shortcut.

8. **Weierstrass approximation theorem** — every continuous function on $[a,b]$ is uniformly approximable by polynomials. Polynomials are dense in $C[a,b]$. (1885)

**Why this comes now:** Phase 3 gave you specific series (sine, exponential). Now you build the general toolkit for handling any series. The motivation is concrete: you've already seen series that converge and series that don't. Now you systematise.

**Time estimate:** 4-5 weeks

---

## Phase 5 — Linear Algebra

*Leibniz (1693) and Cramer (1750) were solving systems of equations and noticed patterns in the coefficients. Cayley (1858) realised these patterns were instances of a deeper structure: linear transformations of space. The question shifted from "solve this system" to "what does this transformation do to space?"*

**The problem:** understand transformations of space — rotations, reflections, projections, scaling. Which directions are preserved? How do you decompose a complex transformation into simple ones?

### Theorems (from CPGE roadmap)

1. **Every finite-dimensional space has a basis** (all bases same cardinality) — dimension is well-defined.
2. **Dimension theorem** (rank-nullity) — $\dim(\ker f) + \dim(\text{im}\, f) = \dim(V)$.
3. **Matrix representation theorem** — linear maps ↔ matrices (given bases).
4. **Determinant as volume** — $\det(A)$ is the signed volume scaling factor.
5. **Change of basis formula** — $P^{-1}AP$ relates the same transformation in different bases.
6. **Eigenvalue existence** (over ℂ) — guaranteed by the fundamental theorem of algebra.
7. **Gram-Schmidt orthogonalisation** — any independent set can be orthogonalised.
8. **Projection theorem** — unique decomposition into projection + orthogonal remainder.
9. **Spectral theorem** (real symmetric) — orthonormal eigenbasis, real eigenvalues.
10. **Cayley-Hamilton theorem** — every matrix satisfies its own characteristic polynomial.
11. **Jordan normal form** — complete classification of linear operators.

**Why this comes now:** you have the analytical tools (limits, derivatives, series). Linear algebra is historically a parallel development that became essential infrastructure. It connects to everything that follows: multivariable calculus uses the Jacobian (a matrix), ODEs use matrix exponentials, spectral theory is eigenvalue theory for operators.

**Time estimate:** 6-8 weeks

---

## Phase 6 — Multivariable Calculus

*Temperature, pressure, velocity — quantities that depend on position in space. Newton's calculus handled one variable. But the real world has three spatial dimensions plus time. Euler, Lagrange, and Gauss extended calculus to multiple variables throughout the 18th century.*

**The problem:** differentiate and integrate functions of several variables. Find extrema. Understand how change propagates through composed multi-variable functions.

### Theorems (from CPGE roadmap)

1. **Multivariable chain rule** — the Jacobian generalises the chain rule.
2. **Schwarz's theorem** — mixed partials commute when continuous. (1873)
3. **Implicit function theorem** — when can you solve $F(x,y) = 0$ for $y$?
4. **Inverse function theorem** — non-zero Jacobian determinant ⟹ locally invertible.
5. **Lagrange multipliers** — optimisation under constraints. (1788)
6. **Second derivative test** — Hessian eigenvalues classify critical points. (Connects to Phase 5 spectral theory.)
7. **Fubini's theorem** — double integrals as iterated single integrals. (1907)
8. **Green's theorem** — line integral = double integral of curl. (1828)
9. **Divergence theorem** (Gauss) — flux through surface = integral of divergence.
10. **Stokes' theorem** — unifies Green, Gauss, and the fundamental theorem of calculus.

**Why this comes now:** single-variable calculus (Phase 2) plus linear algebra (Phase 5) give you the tools. The Jacobian is a matrix of partial derivatives — you need both concepts. Historically, this is Euler-Lagrange-Gauss territory (18th century), after both calculus and determinant theory existed.

**Time estimate:** 5-6 weeks

---

## Phase 7 — Differential Equations

*A population grows proportionally to its size: $P' = kP$. A spring oscillates: $x'' = -kx$. A pendulum swings. A circuit charges. Newton invented calculus largely to solve these equations. The question: given an equation relating a function to its derivatives, can you find the function?*

**The problem:** solve equations involving derivatives. When you can't solve exactly, what can you say about the solution's behaviour?

### Theorems (from CPGE roadmap)

1. **Cauchy-Lipschitz** (Picard-Lindelöf) — existence and uniqueness of solutions.
2. **Picard iteration** — constructive: iterate to find the solution.
3. **Gronwall's inequality** — universal growth bound for solutions.
4. **Linear ODE solution structure** — solutions form an $n$-dimensional vector space. (Connects to Phase 5.)
5. **Variation of parameters** (Lagrange, 1774) — solve non-homogeneous equations.
6. **Matrix exponential** — $y(t) = e^{At} y(0)$. Where linear algebra meets ODEs directly.
7. **Stable/unstable manifold theorem** — solutions near a fixed point organise along eigenspaces of the Jacobian. (Hadamard 1901, Perron 1928)
8. **Lyapunov stability** — prove stability without solving the ODE. (1892)
9. **Poincaré-Bendixson** — in 2D, bounded trajectories either settle to a fixed point or a periodic orbit. Chaos requires ≥ 3 dimensions. (1881)

**Why this comes now:** you need single-variable calculus (Phase 2), multivariable calculus for systems (Phase 6), and linear algebra for the solution structure and matrix exponential (Phase 5). Historically, this is Newton through Poincaré (17th-19th century).

**Time estimate:** 5-6 weeks

---

## Phase 8 — Topology of Metric Spaces

*By the late 19th century, mathematicians were working with stranger and stranger "spaces" — sequences, function spaces, probability distributions. The properties of ℝ that make analysis work (completeness, compactness) needed to be abstracted. What's the minimal structure needed?*

**The problem:** which properties of ℝ are essential for analysis, and which are accidental? Can you do calculus on spaces that aren't ℝⁿ?

### Theorems (from CPGE roadmap)

1. **Heine-Borel** — in ℝⁿ, compact ⟺ closed + bounded. (1872/1895)
2. **Bolzano-Weierstrass** (generalised) — compact ⟺ sequentially compact in metric spaces.
3. **Extreme value theorem** — continuous function on compact set attains its max and min.
4. **Uniform continuity on compact sets** — continuity on a compact set is automatically uniform. (Heine, 1872)
5. **Banach fixed point theorem** — a contraction on a complete space has a unique fixed point. (1922) Powers Cauchy-Lipschitz (Phase 7) and the implicit function theorem (Phase 6) — now you see the deeper engine.
6. **Baire category theorem** — a complete metric space isn't a countable union of nowhere-dense sets. (1899)
7. **Arzelà-Ascoli** — compactness criterion for function spaces. (1882-1883)

**Why this comes now:** you've been working in ℝⁿ for phases 1-7. Now you abstract the properties you've been using. Historically, point-set topology crystallised in the 1880s-1920s, after most of classical analysis was done — mathematicians needed it to handle function spaces and prove existence theorems for PDEs.

**Time estimate:** 5-6 weeks

---

## Phase 9 — Abstract Algebra: Groups, Rings, Polynomials

*Galois (1832, written the night before his duel at age 20) discovered that whether a polynomial equation can be solved by radicals depends entirely on the symmetries of its roots. This transformed algebra from "find the answer" to "study the structure."*

**The problem:** why can't you solve a degree-5 polynomial with radicals, when degrees 2, 3, and 4 all have formulas? What do symmetries of geometric objects have to do with solving equations?

### Theorems (from CPGE roadmap)

1. **Euclidean division for polynomials** — same as integer long division.
2. **Fundamental theorem of algebra** — every polynomial over ℂ has a root.
3. **Eisenstein's criterion** — sufficient condition for irreducibility over ℚ. (1850)
4. **Chinese remainder theorem** — simultaneous congruences.
5. **Lagrange's theorem** — subgroup order divides group order. (1771)
6. **Cayley's theorem** — every group is a permutation group. (1854)
7. **First isomorphism theorem** — $G/\ker(\varphi) \cong \text{im}(\varphi)$.
8. **Sylow theorems** — prime-power subgroups exist with divisibility constraints. (1872)
9. **Classification of finitely generated abelian groups** — direct product of cyclics.
10. **Galois correspondence** — subgroups ↔ intermediate field extensions.
11. **Abel-Ruffini theorem** — the general quintic is not solvable by radicals. (1824/1832)

**Why this comes now:** historically, group theory emerged from Lagrange's study of polynomial roots (1771), developed through Abel and Galois (1820s-1830s), and was systematised by Cayley, Sylow, and others in the mid-19th century. It's a somewhat independent track from analysis — it could be studied earlier in parallel, but its deepest result (Abel-Ruffini via Galois theory) requires substantial buildup. Placed here because it's self-contained and provides a change of mental mode after the analysis-heavy phases 1-8.

**Time estimate:** 6-8 weeks

---

## Phase 10 — Fourier Analysis

*Fourier (1807) made a scandalous claim: any periodic function — any shape whatsoever, even a square wave — can be written as a sum of sines and cosines. The mathematical establishment (Lagrange) said this was impossible. Fourier was right, mostly, and the exceptions turned out to be more interesting than the rule.*

**The problem:** decompose a periodic signal into pure frequencies. When does this work? How accurate is it?

### Theorems (from CPGE roadmap)

1. **Fourier convergence theorem** (Dirichlet conditions) — piecewise smooth ⟹ convergence at continuity points. (1829)
2. **Parseval's theorem** — energy in time domain = energy in frequency domain. Conservation of energy across representations.
3. **Bessel's inequality** — partial sums never exceed total energy.
4. **Gibbs phenomenon** — Fourier series of a discontinuous function overshoots by ~9% at the jump, permanently.

**Why this comes now:** Fourier analysis requires: trigonometric functions from first principles (Phase 3), convergence theory including uniform convergence (Phase 4), and inner product spaces / projection theorem (Phase 5). Historically, Fourier (1807) comes between the informal series manipulations of Euler and the rigorous convergence theory of Cauchy/Weierstrass — we place it after both so everything is rigorous from the start.

**Time estimate:** 3-4 weeks

---

## Phase 11 — Probability

*Pascal and Fermat (1654) exchanged letters about gambling — how to fairly split the pot in an interrupted game. This correspondence founded probability theory. The question evolved: when does randomness produce predictable patterns?*

**The problem:** what's a fair price for a bet? If you flip a coin 1000 times, how close to 500 heads will you get? When does a random process stabilise?

### Theorems (from CPGE roadmap)

1. **Law of total probability** — decompose by cases.
2. **Bayes' theorem** — invert conditional probabilities. (1763)
3. **Linearity of expectation** — always true, even for dependent variables.
4. **Variance of sums** — introduces covariance.
5. **Markov's inequality** — crude universal bound from the mean.
6. **Chebyshev's inequality** — tighter bound using variance. (1867)
7. **Law of large numbers** (weak) — sample mean → true mean in probability. (Bernoulli, 1713)
8. **Law of large numbers** (strong) — sample mean → true mean almost surely. (Kolmogorov, 1930)
9. **Central limit theorem** — normalised sums → Gaussian. (de Moivre 1733, Laplace)
10. **Moment generating functions** — uniquely characterise distributions.
11. **Conditional expectation as projection** — $E[X|Y]$ is the best $L^2$ predictor. (Connects to projection theorem from Phase 5.)

**Why this comes now:** probability is historically a parallel track to analysis, but the rigorous theory (Kolmogorov's axioms, 1933) requires measure theory and convergence. The CLT proof uses moment generating functions (power series — Phase 3) and convergence theory (Phase 4). Conditional expectation as projection requires inner product spaces (Phase 5).

**Time estimate:** 5-6 weeks

---

## Phase 12 — Bilinear Algebra and Spectral Theory

*A vibrating string decomposes into harmonics. Each harmonic is an eigenvector of a differential operator. Lord Rayleigh (1877) studied vibrations and discovered that eigenvalues can be characterised variationally — as extrema of a quotient — without solving the eigenvalue problem directly.*

**The problem:** when can you fully decompose a transformation into independent pieces? What about non-square matrices? What invariants survive a change of coordinates?

### Theorems (from CPGE roadmap)

1. **Spectral theorem** (symmetric + normal operators) — full orthonormal eigendecomposition.
2. **Singular value decomposition** — works for any matrix, any shape. The "correct" generalisation of eigendecomposition.
3. **Rayleigh quotient characterisation** — eigenvalues as extrema of $x'Ax / x'x$. (1877)
4. **Min-max theorem** (Courant-Fischer) — the $k$-th eigenvalue via minimax. (1920)
5. **Sylvester's law of inertia** — signature is invariant under congruence. (1852)
6. **Positive definite characterisation** — equivalent conditions.
7. **Bilinear form representation** — bilinear forms ↔ matrices.
8. **Principal axis theorem** — quadratic forms reduce to sums of squares by orthogonal change of variables.

**Why this comes now:** extends Phase 5 (linear algebra) with inner product structure. Requires eigenvalue theory, orthogonality, and connects to Fourier analysis (Phase 10 — sines and cosines are eigenvectors of the Laplacian). Historically, spectral theory developed from Cauchy (1829) through Hilbert (1904).

**Time estimate:** 3-4 weeks

---

## Phase 13 — Normed Vector Spaces and Functional Analysis

*By the early 20th century, the "spaces" mathematicians worked with were no longer just ℝⁿ. They were spaces of functions, sequences, operators. Banach (1920s) asked: what does "distance" mean in these infinite-dimensional spaces? What still works, and what breaks?*

**The problem:** extend analysis to infinite-dimensional spaces. Which finite-dimensional intuitions survive? (Answer: fewer than you'd hope.)

### Theorems (from CPGE roadmap)

1. **All norms equivalent in finite dimension** — but NOT in infinite dimension.
2. **Completeness and Banach spaces** — complete normed spaces.
3. **Riesz's lemma** — the unit ball is compact iff finite-dimensional. (1918)
4. **Continuity of linear maps** — continuous iff bounded.
5. **Operator norm** — measuring "how big" an operator is.
6. **Uniform boundedness principle** (Banach-Steinhaus) — pointwise bounded ⟹ uniformly bounded. (1927)
7. **Open mapping theorem** — surjective bounded operator maps open to open. (1929)
8. **Closed graph theorem** — closed graph ⟹ bounded. (Banach)
9. **Hahn-Banach theorem** — bounded functionals extend from subspaces. (1927/1929)
10. **Best approximation in inner product spaces** — unique nearest point in closed convex subsets of Hilbert spaces.

**Why this comes last:** this is the most abstract phase. It unifies and generalises everything before it: convergence (Phase 1), linear algebra (Phase 5), metric space topology (Phase 8), spectral theory (Phase 12). Historically, functional analysis crystallised in the 1920s-1930s, drawing on all prior traditions. It's the natural endpoint.

**Time estimate:** 3-4 weeks

---

## Summary: what changed from the CPGE order

| CPGE order | Hybrid order | Why moved |
|------------|-------------|-----------|
| — | **Phase 0: Geometry** (new) | Explicit prerequisite; where humanity started |
| Stage 1: Convergence | **Phase 1: Basic convergence** | Same placement, but now motivated by geometry |
| — | **Phase 2: Derivatives + Integration** (new) | Needed for Taylor; CPGE assumes from lycée. Integration built from Riemann's definition, not memorised formulas |
| Stage 5: Power series | **Phase 3: Taylor + power series** | Moved UP from month 6 to month 3. Needed to ground sine, cosine, exp before using them |
| Stage 1: Series tests | **Phase 4: Convergence toolkit** | Split from Phase 1. Series tests come AFTER Taylor, because Taylor provides the examples that motivate them |
| Stage 2: Linear algebra | **Phase 5: Linear algebra** | Moved DOWN slightly. CPGE puts it at month 3; here at month 5. Trade-off: delays linear algebra to front-load the analytical foundations |
| Stage 3: Multivariable calc | **Phase 6: Multivariable calc** | Same relative position |
| Stage 4: ODEs | **Phase 7: ODEs** | Same relative position |
| Stage 6: Topology | **Phase 8: Topology** | Same relative position |
| Stage 7: Algebra | **Phase 9: Algebra** | Same relative position |
| Stage 5: Fourier | **Phase 10: Fourier** | Moved DOWN. CPGE bundles with power series; here separated because it requires inner products from Phase 5 |
| Stage 8: Probability | **Phase 11: Probability** | Same relative position |
| Stage 9: Bilinear/spectral | **Phase 12: Bilinear/spectral** | Same relative position |
| Stage 10: Normed spaces | **Phase 13: Normed spaces** | Same position (last) |

**Key structural changes:**
1. Geometry is explicit, not assumed
2. Derivatives are explicit, not assumed
3. Taylor's theorem moves from month 6 to month 3 — this is the big one. It closes the "black box function" problem early.
4. Series convergence tests come AFTER Taylor, not before — motivation before machinery
5. Linear algebra is slightly delayed to make room for the analytical foundation

---

## Timeline

| Phase | Topic | Weeks | Cumulative |
|-------|-------|-------|------------|
| 0 | Geometry and measurement | 2-3 | ~3 weeks |
| 1 | Limits and basic convergence | 4-5 | ~2 months |
| 2 | Derivatives and integration | 5-6 | ~3.5 months |
| 3 | Power series and Taylor | 4-5 | ~4.5 months |
| 4 | Convergence toolkit | 4-5 | ~5.5 months |
| 5 | Linear algebra | 6-8 | ~7.5 months |
| 6 | Multivariable calculus | 5-6 | ~9 months |
| 7 | ODEs | 5-6 | ~10.5 months |
| 8 | Topology of metric spaces | 5-6 | ~12 months |
| 9 | Abstract algebra | 6-8 | ~14 months |
| 10 | Fourier analysis | 3-4 | ~15 months |
| 11 | Probability | 5-6 | ~16.5 months |
| 12 | Bilinear algebra / spectral theory | 3-4 | ~17.5 months |
| 13 | Normed vector spaces | 3-4 | ~18.5 months |

At 1-2 hours daily. ~18.5 months total (vs ~13 months for pure CPGE order). The extra time comes from:
- Phase 0 (geometry prerequisite): +3 weeks
- Phase 2 (derivatives + integration from scratch, not assumed from lycée): +6 weeks
- More thorough grounding at each step (no skipping, no black boxes): ~3 months spread across all phases

Phases 9 and 11 (algebra, probability) are somewhat independent and can be interleaved with the analysis track for variety.
