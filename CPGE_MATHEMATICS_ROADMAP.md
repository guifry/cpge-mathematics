# CPGE Mathematics — Problem-First Self-Study Roadmap

A roadmap covering the mathematical content of a French CPGE (MP/MP*) programme, ordered chronologically so each stage builds on the previous. Problem-first: every concept is motivated by the question it was invented to answer.

Goal: intuition and fluency, not exam technique. Understand every notion well enough to use it naturally and teach it.

**The single most important principle**: for every concept, find the problem it was invented to solve. If you can't articulate the problem, you don't understand the concept yet — you've just memorised its definition.

---

## Stage 1 — Sequences, Series, Convergence

**Problem**: You add 1 + 1/2 + 1/4 + 1/8 + ... and get 2. You add 1 + 1/2 + 1/3 + 1/4 + ... and get infinity. Why? When does an infinite sum produce a finite number?

**Resources**: 3Blue1Brown "Essence of Calculus" series, then Spivak "Calculus" chapters 22-24.

### Key theorems

- **Monotone convergence theorem**: a bounded monotone sequence converges.
  *What broke*: Euler and the Bernoullis freely computed with infinite series, assuming limits existed whenever the terms "got small." But some increasing sequences that look convergent (each term bigger than the last, but by less and less) might never reach a finite limit. The MCT says: as long as it's bounded above, it does. This became the workhorse — most convergence proofs reduce to showing a sequence is monotone and bounded.

- **Bolzano-Weierstrass theorem**: every bounded sequence has a convergent subsequence.
  *What broke*: Bolzano (1817) was trying to prove the intermediate value theorem rigorously. His proof needed a lemma: if you have infinitely many points crammed into a bounded interval, at least some of them must cluster together. He proved this lemma — and it turned out to be more important than the theorem he was proving. It's the reason compactness matters: bounded sets in ℝⁿ have this "clustering" property.

- **Cauchy criterion**: a sequence converges iff it's Cauchy (terms get arbitrarily close to each other).
  *What broke*: to prove a sequence converges, you normally need to know the limit in advance — then show the terms approach it. But what if you don't know the limit? Cauchy's criterion lets you prove convergence purely from the *terms getting close to each other*, without ever naming the limit. Essential when the limit is irrational or otherwise hard to identify.

- **Comparison test**: if 0 ≤ aₙ ≤ bₙ and Σbₙ converges, so does Σaₙ.
  *What broke*: you encounter a new series and want to know if it converges, but you can't compute its partial sums in closed form. If you can find a larger series that you already know converges, you're done. The simplest and oldest convergence test — used implicitly by Euler, formalised later.

- **Ratio test** (d'Alembert): if |aₙ₊₁/aₙ| → L < 1, the series converges absolutely.
  *What broke*: the comparison test requires you to find a bounding series, which is sometimes hard. D'Alembert (1768) noticed that if consecutive terms shrink by a consistent factor less than 1, the series behaves like a geometric series — which you already know converges. The ratio test automates this comparison.

- **Alternating series test** (Leibniz): if aₙ decreases to 0, then Σ(-1)ⁿaₙ converges.
  *What broke*: the harmonic series 1 + 1/2 + 1/3 + ... diverges. But 1 - 1/2 + 1/3 - 1/4 + ... converges (to ln 2). Leibniz observed that alternating signs cause successive partial sums to oscillate above and below the limit, bracketing it tighter and tighter. The test captures this: decreasing terms + alternating signs = convergence, even when the terms don't decrease fast enough for absolute convergence.

- **Absolute vs conditional convergence**: absolutely convergent series can be rearranged freely. Conditionally convergent ones cannot.
  *What broke*: Riemann (1853) proved something disturbing: the series 1 - 1/2 + 1/3 - 1/4 + ... converges to ln 2. But if you rearrange the terms (same terms, different order), you can make it converge to *any number you want*, or diverge. This means the sum of a conditionally convergent series depends on the order of summation — it's not a property of the terms themselves. Absolute convergence is the condition that prevents this pathology.

- **Squeeze theorem**: if aₙ ≤ bₙ ≤ cₙ and aₙ, cₙ → L, then bₙ → L.
  *What broke*: sometimes you can't compute a limit directly, but you can trap the sequence between two others whose limits you know. Archimedes used this idea (method of exhaustion) to compute areas — trapping a circle between inscribed and circumscribed polygons. The squeeze theorem is the modern formalisation.

- **Cesàro mean theorem**: if aₙ → L, then the arithmetic means (a₁+...+aₙ)/n → L.
  *What broke*: Fejér (1904) was studying Fourier series. The partial sums of a Fourier series can oscillate badly and fail to converge pointwise. But their *averages* converge. Cesàro summation is a weaker notion of convergence that "smooths out" oscillations, and it rescued Fourier theory from its convergence pathologies.

---

## Stage 2 — Linear Algebra

**Problem**: You have a system of equations. You want to understand transformations of space — rotations, reflections, projections, scaling. Which directions are preserved? How do you decompose a complex transformation into simple ones?

**Resources**: 3Blue1Brown "Essence of Linear Algebra" (non-negotiable), then Axler "Linear Algebra Done Right."

### Key theorems

- **Dimension theorem** (rank-nullity): dim(ker f) + dim(im f) = dim(V).
  *What broke*: you have a system of linear equations. How many solutions are there? If the system maps ℝ⁵ → ℝ³, some dimensions get "killed" (kernel) and some survive (image). Rank-nullity says these two account for everything: what the transformation kills plus what it produces equals the dimension of the input. It tells you the exact trade-off between redundancy (kernel) and information (image).

- **Every finite-dimensional vector space has a basis** (and all bases have the same cardinality).
  *What broke*: you want to represent vectors using coordinates. But which vectors do you use as your coordinate axes? A basis is a minimal spanning set (or equivalently, a maximal independent set). The fact that all bases have the same size means "dimension" is well-defined — a property of the space, not of your choice of coordinates.

- **Matrix representation theorem**: every linear map between finite-dimensional spaces corresponds to a matrix (given bases).
  *What broke*: linear maps are abstract (functions between vector spaces). Matrices are concrete (grids of numbers). This theorem says they're the same thing once you choose bases. It's why linear algebra is simultaneously abstract and computational — you can reason abstractly about maps, then compute with matrices.

- **Eigenvalue existence** (over ℂ): every linear operator on a complex vector space has at least one eigenvalue.
  *What broke*: you want to decompose a transformation into simple pieces. The simplest: directions where the transformation just scales. But a rotation in ℝ² has no real scaling directions — no real eigenvalues. Over ℂ, the fundamental theorem of algebra guarantees the characteristic polynomial has a root, so eigenvalues always exist. This is why complex numbers aren't optional in linear algebra.

- **Spectral theorem** (real symmetric): a real symmetric matrix is diagonalisable with an orthonormal eigenbasis. All eigenvalues are real.
  *What broke*: most matrices aren't diagonalisable (eigenvectors might not span the space). But for symmetric matrices (and the physical systems they describe — vibrations, quantum mechanics, heat conduction), Cauchy (1829) and later mathematicians proved: not only do eigenvalues exist and are real, but the eigenvectors are orthogonal. This means symmetric transformations decompose space into perpendicular independent directions. It's why principal component analysis works, why vibration modes are independent, why quantum measurements have real outcomes.

- **Cayley-Hamilton theorem**: every matrix satisfies its own characteristic polynomial.
  *What broke*: Cayley (1858) noticed by computation that if the characteristic polynomial of a 2×2 matrix is λ² - tr(A)λ + det(A) = 0, then A² - tr(A)·A + det(A)·I = 0. The matrix satisfies the same equation as its eigenvalues. Hamilton verified it for quaternions. The proof for general matrices is surprisingly subtle. The practical payoff: you can express Aⁿ as a polynomial in A of degree < n, which is useful for computing matrix exponentials.

- **Jordan normal form**: every matrix over ℂ is similar to a block-diagonal matrix of Jordan blocks.
  *What broke*: diagonalisation fails when eigenvalues have algebraic multiplicity greater than their geometric multiplicity (fewer independent eigenvectors than you'd expect). Jordan (1870) showed that even in this worst case, you can get close: block-diagonal with "almost-diagonal" blocks (1's on the super-diagonal). This is the complete classification of linear operators — every matrix belongs to exactly one Jordan type.

- **Gram-Schmidt orthogonalisation**: any linearly independent set can be orthogonalised.
  *What broke*: you have a basis, but it's not orthogonal — the vectors point in inconvenient directions. Projections, decompositions, and least-squares all become simple with orthogonal bases. Gram (1883) and Schmidt (1907) gave the constructive algorithm: project each vector onto the span of the previous ones, subtract the projection, normalise. Produces an orthonormal basis from any independent set.

- **Determinant as volume**: det(A) is the signed volume scaling factor of the transformation.
  *What broke*: Cramer (1750) and Leibniz computed determinants as a formula for solving linear systems. But what *is* a determinant, geometrically? The answer: it tells you how the transformation scales volume. det = 0 means the transformation collapses at least one dimension (the system is singular). det < 0 means orientation is reversed. This geometric meaning makes otherwise mysterious determinant properties (multiplicativity, row operations) intuitive.

- **Change of basis formula**: P⁻¹AP relates the same transformation in different bases.
  *What broke*: the same rotation looks like different matrices depending on your coordinate system. Which matrices represent "the same" transformation? Those related by P⁻¹AP for some invertible P. This is the concept of similarity — and finding the "simplest" representative (diagonal or Jordan form) is the central computational goal of linear algebra.

- **Projection theorem**: in an inner product space, every vector decomposes uniquely as projection onto a subspace plus an orthogonal remainder.
  *What broke*: you want the "closest point" in a subspace to a given vector (least-squares regression: find the line closest to a cloud of points). The projection theorem says: drop a perpendicular from the vector to the subspace, and the foot of the perpendicular is the unique closest point. The error (remainder) is orthogonal to the subspace. This underpins least squares, Fourier analysis, signal processing, and quantum mechanics.

---

## Stage 3 — Multivariable Calculus

**Problem**: Temperature, pressure, velocity — quantities that depend on position in 2D or 3D space. How do you differentiate and integrate functions of several variables? Where are the extrema? How does change propagate through composed multi-variable functions?

**Resources**: Schey "Div, Grad, Curl, and All That" for intuition, then relevant chapters of Spivak or Hubbard & Hubbard.

### Key theorems

- **Multivariable chain rule**: df/dt = (∂f/∂x)(dx/dt) + (∂f/∂y)(dy/dt).
  *What broke*: temperature T depends on position (x,y), and position depends on time t (you're walking across the plate). How fast does the temperature you feel change? You need to account for both the x-direction and y-direction contributions. The Jacobian matrix generalises this: it's the matrix of all partial derivatives, and it tells you how small changes in input propagate through composed functions.

- **Schwarz's theorem** (symmetry of mixed partials): ∂²f/∂x∂y = ∂²f/∂y∂x when both are continuous.
  *What broke*: if you differentiate f first with respect to x then y, do you get the same answer as y then x? Euler assumed yes. Schwarz (1873) found that for pathological functions, the answer is no. But if the mixed partials are continuous, order doesn't matter. This is a regularity assumption that pervades multivariable calculus — smooth functions are well-behaved, non-smooth ones can surprise you.

- **Implicit function theorem**: if F(x,y) = 0 and ∂F/∂y ≠ 0, then locally y is a function of x.
  *What broke*: the equation x² + y² = 1 defines a circle. Is y a function of x? Globally no (two y values for each x). Locally yes (near most points, you can solve for y). Cauchy needed this for differential equations — when is a constraint equation solvable for one variable? The condition ∂F/∂y ≠ 0 is the criterion: the constraint isn't "flat" in the y-direction at that point.

- **Inverse function theorem**: a differentiable function with non-zero Jacobian determinant is locally invertible.
  *What broke*: given a transformation f: ℝⁿ → ℝⁿ, can you undo it? Globally, maybe not (f might not be injective). Locally, yes — if the Jacobian determinant is non-zero (the transformation doesn't collapse any dimension at that point). This is the multi-variable version of "non-zero derivative means locally monotone, hence invertible."

- **Lagrange multipliers**: extrema of f subject to constraint g = 0 occur where ∇f = λ∇g.
  *What broke*: Lagrange (1788) was studying mechanics — finding the shape that minimises energy subject to physical constraints (fixed length, fixed volume). On the constraint surface, the gradient of f must be parallel to the gradient of g — otherwise you could move along the constraint and improve f. The multiplier λ measures how tightly the constraint binds.

- **Second derivative test**: the Hessian matrix classifies critical points as minima, maxima, or saddle points via its eigenvalues.
  *What broke*: at a critical point (∇f = 0), you don't know if it's a peak, a valley, or a saddle. In one variable, f'' > 0 means minimum. In several variables, the Hessian (matrix of second derivatives) plays the same role — but now you need all eigenvalues positive (minimum), all negative (maximum), or mixed (saddle). This connects to spectral theory from stage 2.

- **Green's theorem**: relates a line integral around a closed curve to a double integral over the enclosed region.
  *What broke*: computing work done by a force field along a closed path. Doing this directly requires parametrising the curve. Green (1828) showed: the line integral around the boundary equals the integral of the curl over the interior. This converts a 1D boundary computation into a 2D interior one (or vice versa — whichever is easier).

- **Divergence theorem** (Gauss): flux through a closed surface = integral of divergence over the enclosed volume.
  *What broke*: Gauss was studying gravitational and electrostatic fields. How much field "flows out" through a closed surface? The divergence theorem says: sum up all the sources (divergence) inside the volume. This is the mathematical statement of conservation laws — what goes in must come out, unless there's a source inside.

- **Stokes' theorem**: circulation around a boundary = integral of curl over the surface.
  *What broke*: Stokes' theorem (1854, actually due to Lord Kelvin) unifies Green's theorem, the divergence theorem, and the fundamental theorem of calculus into one statement: the integral of a derivative over a region equals the integral of the function over the boundary. Every "fundamental theorem" in calculus is a special case.

- **Fubini's theorem**: double integrals can be computed as iterated single integrals (when the integrand is nice enough).
  *What broke*: how do you actually compute ∫∫ f(x,y) dA? Fubini (1907) proved: if f is integrable, you can compute the double integral by integrating first over x, then over y (or the reverse). This seems obvious but fails for pathological functions — and Fubini specifies exactly when it works. Without this, multivariable integration would be computationally intractable.

---

## Stage 4 — Ordinary Differential Equations

**Problem**: A population grows proportionally to its size. A spring oscillates. A pendulum swings. A circuit charges. All described by equations relating a function to its derivatives. How do you solve them, and when you can't solve them exactly, what can you say about the solutions?

**Resources**: Strogatz "Nonlinear Dynamics and Chaos."

### Key theorems

- **Cauchy-Lipschitz theorem** (Picard-Lindelöf): if f is Lipschitz in y, then y' = f(t,y) with y(t₀) = y₀ has a unique local solution.
  *What broke*: Cauchy wanted to know: given a differential equation and an initial condition, does a solution always exist? And if so, is it the only one? He found that existence is almost free (Peano's theorem — continuity suffices). But uniqueness fails without more: y' = √y with y(0) = 0 has two solutions (y = 0 and y = t²/4). The Lipschitz condition on f prevents the right-hand side from being too "sharp" at zero, ensuring trajectories can't split.

- **Picard iteration**: define yₙ₊₁(t) = y₀ + ∫f(s, yₙ(s))ds. This sequence converges to the solution.
  *What broke*: Cauchy-Lipschitz proves a solution exists but doesn't tell you what it is. Picard's iteration (1890) is constructive: start with a guess, plug it into the integral equation, get a better guess, repeat. Convergence follows from the Banach fixed point theorem (stage 6). This is how numerical ODE solvers (Euler's method, Runge-Kutta) work in spirit.

- **Gronwall's inequality**: if u(t) ≤ α + β∫u(s)ds, then u(t) ≤ α·exp(βt).
  *What broke*: you know a solution exists and is unique. But how fast can it grow? If you lose control of the solution's size, your local existence result is useless (the solution might blow up in finite time). Gronwall (1919) gave a universal growth bound: any function satisfying an integral inequality of this form is bounded by an exponential. It's the standard tool for stability, continuous dependence, and error estimates.

- **Linear ODE solution structure**: solutions of y' = A(t)y form a vector space of dimension n.
  *What broke*: a single linear ODE of order n has many solutions. How many, and how are they related? The answer — they form an n-dimensional vector space — means you need exactly n independent solutions to describe all of them. This connects ODEs to linear algebra: the general solution is a linear combination c₁y₁ + ... + cₙyₙ, and the initial condition determines the coefficients.

- **Variation of parameters** (Lagrange): method for solving non-homogeneous linear ODEs.
  *What broke*: you can solve the homogeneous equation y' = Ay (complementary solution). But what about y' = Ay + g(t) where g is a forcing term? Lagrange's insight (1774): take the homogeneous solution and let the "constants" vary with time. This guess (ansatz) converts the ODE into a simpler equation for the varying parameters.

- **Matrix exponential**: solution of y' = Ay is y(t) = exp(At)·y(0).
  *What broke*: the scalar ODE y' = ay has solution y = eᵃᵗy₀. What about the system y' = Ay where A is a matrix? Formally, the same: y = eᴬᵗy₀. But what does eᴬᵗ mean? You define it via the power series: eᴬᵗ = I + At + A²t²/2! + ... This series always converges, and computing it reduces to finding the eigenvalues of A (or Jordan form). This is where linear algebra meets differential equations most directly.

- **Stable/unstable manifold theorem**: near a fixed point, solutions organise into invariant manifolds determined by the eigenvalues of the Jacobian.
  *What broke*: you find an equilibrium (fixed point) of a nonlinear system. Is it stable? The linearised system y' = Jy (J = Jacobian at the fixed point) has eigenvalues that determine behaviour: negative real parts → stable, positive → unstable. The manifold theorem (Hadamard 1901, Perron 1928) says: even for the nonlinear system, solutions near the fixed point organise along surfaces (manifolds) that are tangent to the eigenspaces of J. The geometry of the linearisation persists.

- **Lyapunov stability theorem**: if you can find a function V(x) that decreases along trajectories, the equilibrium is stable.
  *What broke*: Lyapunov (1892) asked: can you prove stability without solving the ODE? His answer: find an "energy-like" function V that's positive and decreases over time. If V exists, energy is dissipating and the system can't escape. You never need to solve the equation. The catch: finding V is an art, not an algorithm. But when it works, it gives stability for nonlinear systems where linearisation is inconclusive.

- **Poincaré-Bendixson theorem** (2D): a bounded trajectory in the plane that doesn't converge to a fixed point must approach a periodic orbit.
  *What broke*: in 2D, can trajectories behave chaotically (wander forever without repeating)? Poincaré (1881) proved: no. In two dimensions, bounded trajectories either settle to a fixed point or approach a closed loop. Chaos requires at least 3 dimensions. This completely classifies long-term behaviour in 2D systems, and explains why simple predator-prey models always oscillate.

---

## Stage 5 — Power Series and Fourier Series

**Problem**: Can you represent a function as an infinite polynomial (Taylor/power series)? Can you decompose a periodic signal into a sum of pure sine waves (Fourier series)? How accurate are these representations, and when do they fail?

**Resources**: Spivak chapters 25-26 for power series. 3Blue1Brown "But what is a Fourier series?" then "Who Is Fourier?" by Transnational College of LEX.

### Key theorems

- **Taylor's theorem with remainder**: f(x) = Σ f⁽ⁿ⁾(a)/n! · (x-a)ⁿ + Rₙ(x).
  *What broke*: Taylor (1715) and Maclaurin showed you can approximate any smooth function by polynomials. But how good is the approximation? Without the remainder term Rₙ, you don't know if the series *converges to f* or to something else. The remainder quantifies the error after n terms. Lagrange, Cauchy, and integral forms each give different ways to bound it, useful in different situations.

- **Radius of convergence**: every power series Σaₙxⁿ converges inside a disc |x| < R and diverges outside.
  *What broke*: the Taylor series of 1/(1+x²) around 0 has radius of convergence 1 — it diverges at x = 2. But the function is perfectly smooth everywhere on ℝ. Why does the series "stop working"? Hadamard's insight: the series "sees" singularities in the *complex* plane. 1/(1+z²) has poles at z = ±i, distance 1 from the origin. The radius of convergence is the distance to the nearest complex singularity, even if you only care about real x.

- **Abel's theorem**: if Σaₙ converges, then lim(x→1⁻) Σaₙxⁿ = Σaₙ.
  *What broke*: a power series is guaranteed to converge for |x| < R. What happens at the boundary |x| = R? The series might converge or diverge there. Abel (1826) showed: if it does converge at a boundary point, then the function defined by the power series approaches that boundary value continuously. This connects the interior behaviour to the boundary, and is essential for computing sums like Σ(-1)ⁿ/n = -ln 2.

- **Term-by-term differentiation/integration**: inside the radius of convergence, you can differentiate and integrate power series term by term.
  *What broke*: you have f(x) = Σaₙxⁿ. Is f'(x) = Σnaₙxⁿ⁻¹? You're swapping a limit (differentiation) with an infinite sum. In general, this is illegal — pointwise convergence doesn't allow it. But power series are special: convergence inside the disc is uniform on compact subsets, which makes the swap valid. The derivative has the same radius of convergence. This is why power series are so much nicer than arbitrary function series.

- **Fourier's convergence theorem** (Dirichlet conditions): if f is piecewise smooth and periodic, its Fourier series converges to f at points of continuity.
  *What broke*: Fourier (1807) claimed any periodic function can be written as a sum of sines and cosines. The mathematical establishment (including Lagrange) was sceptical. Dirichlet (1829) gave the first rigorous proof — but only for piecewise smooth functions. At discontinuities, the series converges to the average of the left and right limits, not to either side. For continuous functions that aren't piecewise smooth, convergence can fail pointwise (du Bois-Reymond, 1876), though this is rare.

- **Parseval's theorem**: ∫|f|² = Σ|cₙ|².
  *What broke*: when you decompose a signal into frequency components (Fourier coefficients cₙ), is any energy lost? Parseval's theorem (1799, proved rigorously much later) says no: the total energy computed in the time domain equals the total energy computed in the frequency domain. This is conservation of energy across representations — fundamental to signal processing, quantum mechanics, and the proof that Fourier series converge in the L² sense.

- **Bessel's inequality**: Σ|cₙ|² ≤ ∫|f|².
  *What broke*: you compute the first N Fourier coefficients and reconstruct a partial sum. Is the partial sum ever "louder" than the original signal? Bessel's inequality (1828) says no: partial sums can only capture up to 100% of the energy, never more. It becomes equality (Parseval) when the system is *complete* — every bit of f is captured by the Fourier basis.

- **Uniform convergence and continuity**: if fₙ → f uniformly and each fₙ is continuous, then f is continuous.
  *What broke*: Cauchy (1821) claimed that a convergent series of continuous functions is continuous. This is false for pointwise convergence: the staircase functions fₙ(x) = xⁿ on [0,1] are continuous, converge pointwise to a discontinuous limit. Weierstrass (1841) identified the fix: *uniform* convergence (the convergence rate doesn't depend on x) preserves continuity. This distinction drives all of modern analysis.

- **Weierstrass M-test**: if |fₙ(x)| ≤ Mₙ and ΣMₙ converges, then Σfₙ converges uniformly.
  *What broke*: to apply the uniform convergence theorems, you need to prove uniform convergence. Doing this from the definition is painful (for every ε, find N that works for *all* x simultaneously). Weierstrass's M-test gives a shortcut: bound each term by a constant Mₙ (not depending on x), and if those constants form a convergent series, you're done. The "M" stands for "majorant" — it's a domination argument.

- **Weierstrass approximation theorem**: every continuous function on [a,b] can be uniformly approximated by polynomials.
  *What broke*: polynomials are the simplest functions (just add, multiply, and take powers). Can they approximate *any* continuous function? Weierstrass (1885) proved yes: on a closed bounded interval, you can get within any ε of any continuous function using a polynomial of high enough degree. This means polynomials are "dense" in the space of continuous functions. It's why polynomial interpolation, Taylor approximation, and numerical methods work in principle.

- **Gibbs phenomenon**: Fourier series of a discontinuous function overshoot by ~9% at the jump, no matter how many terms you take.
  *What broke*: Wilbraham (1848) and Gibbs (1899) noticed that Fourier partial sums of a square wave overshoot near the discontinuity. Adding more terms doesn't help — the overshoot narrows but doesn't shrink. It converges to about 8.95% of the jump size. This is a fundamental limitation: Fourier series use smooth functions (sines/cosines) to approximate a discontinuity, and the overshoot is the price. It matters in signal processing (ringing artefacts), image compression (JPEG), and numerical PDE solvers.

---

## Stage 6 — Topology of Metric Spaces

**Problem**: What properties of the real line make calculus work? Continuity, convergence, compactness — do these concepts survive when you move to stranger spaces (sequences, function spaces, probability distributions)? What's the minimal structure needed for analysis?

**Resources**: Munkres "Topology" chapters 1-4.

### Key theorems

- **Heine-Borel theorem**: in ℝⁿ, a set is compact iff it's closed and bounded.
  *What broke*: Heine (1872) and Borel (1895) were studying when you could extract finite subcovers from open covers — an abstract property needed for proving uniform continuity and attainment of extrema. In ℝⁿ, this abstract property has a concrete characterisation: closed + bounded. This is *specific to ℝⁿ* — in general metric spaces, closed and bounded does not imply compact (the unit ball in infinite-dimensional spaces is closed and bounded but not compact).

- **Bolzano-Weierstrass** (generalised): every sequence in a compact metric space has a convergent subsequence.
  *What broke*: same motivation as stage 1, but now in abstract spaces. In ℝⁿ, Heine-Borel gives you compactness from closed+bounded. In general metric spaces, compactness and sequential compactness (every sequence has a convergent subsequence) are equivalent. This is the tool that lets you extend "ℝⁿ analysis" to function spaces and probability distributions.

- **Extreme value theorem**: a continuous function on a compact set attains its maximum and minimum.
  *What broke*: you want to optimise a continuous function. On (0,1) (open interval), f(x) = 1/x has no maximum. On [0,∞) (unbounded), f(x) = x has no maximum. You need the domain to be compact (closed and bounded in ℝⁿ). Then and only then is the maximum guaranteed to exist and be attained. This is why optimisation problems over compact domains are well-posed.

- **Banach fixed point theorem** (contraction mapping): a contraction on a complete metric space has a unique fixed point.
  *What broke*: Banach (1922) needed a general tool for proving existence and uniqueness of solutions — for ODEs, integral equations, and iterative methods. His theorem says: if a mapping always brings points closer together (contraction), and the space is complete (limits exist), then there's exactly one fixed point, and iterating from any starting point converges to it. This single theorem proves Cauchy-Lipschitz (stage 4), the implicit function theorem (stage 3), and powers most iterative numerical methods.

- **Baire category theorem**: a complete metric space is not a countable union of nowhere-dense sets.
  *What broke*: Baire (1899) was studying how "large" or "small" sets can be. A nowhere-dense set is "thin" (its closure has empty interior). Baire proved: you can't cover a complete metric space with countably many thin sets. This sounds abstract but has devastating consequences: it proves that "most" continuous functions are nowhere differentiable (the smooth ones are a "thin" subset), and that there exist continuous functions whose Fourier series diverges at a point.

- **Arzelà-Ascoli theorem**: a sequence of functions has a uniformly convergent subsequence iff it's uniformly bounded and equicontinuous.
  *What broke*: Arzelà (1882-1883) needed compactness in function spaces. In ℝⁿ, Bolzano-Weierstrass gives you convergent subsequences from bounded sequences. In function spaces, "bounded" isn't enough — you also need "equicontinuous" (the functions can't oscillate faster and faster). This is the compactness criterion for function spaces, essential for proving existence of solutions to PDEs and variational problems.

- **Uniform continuity on compact sets**: a continuous function on a compact set is uniformly continuous.
  *What broke*: continuity says: for each point x and each ε, there's a δ. But δ might depend on x — at some points the function might be "barely continuous" with tiny δ. On a compact set, you can find a single δ that works for all x simultaneously. Heine (1872) proved this using the open cover definition of compactness. It's why you can uniformly approximate a continuous function on [a,b] (Weierstrass, stage 5) but not necessarily on all of ℝ.

- **Completeness of ℝ**: every Cauchy sequence of reals converges.
  *What broke*: the rationals ℚ have "holes" — √2 is the limit of a sequence of rationals, but isn't rational. Cauchy sequences in ℚ can converge to nothing (within ℚ). The reals are constructed precisely to fill these holes. Completeness — every Cauchy sequence converges — is the axiom that distinguishes ℝ from ℚ. It's equivalent to the supremum property (every bounded set has a least upper bound) and is the foundation that makes all of analysis work.

- **Connected sets and intermediate value theorem**: a continuous image of a connected set is connected.
  *What broke*: Bolzano (1817) tried to prove the IVT (if f is continuous, f(a) < 0, f(b) > 0, then f(c) = 0 somewhere between). His proof implicitly used completeness and connectedness of [a,b]. The topological version is cleaner: connected sets can't be split into two separated pieces, and continuous functions preserve this. On ℝ, connected sets are intervals, and IVT falls out as a corollary. In higher dimensions, connectedness replaces the ordering of ℝ.

- **Dense subsets**: ℚ is dense in ℝ (between any two reals there's a rational).
  *What broke*: the Pythagoreans proved √2 is irrational, showing ℚ doesn't contain all "useful" numbers. But ℚ is still dense — it approximates every real number arbitrarily well. Density is the topological formalisation of "good enough for approximation." The Weierstrass approximation theorem (stage 5) is really a density statement: polynomials are dense in C[a,b].

---

## Stage 7 — Groups, Rings, Polynomials

**Problem**: Why can't you solve a degree-5 polynomial with radicals? Why do symmetries of geometric objects form algebraic structures? What properties do integers, polynomials, and matrices share, and where do they diverge?

**Resources**: Carter "Visual Group Theory," then Pinter "A Book of Abstract Algebra."

### Key theorems

- **Lagrange's theorem**: the order of a subgroup divides the order of the group.
  *What broke*: Lagrange (1771) was studying permutations of roots of polynomials. He noticed the number of permutations that preserve certain relationships always divides the total number of permutations. The modern statement: |H| divides |G|. Immediate consequence: a group of prime order p has no non-trivial subgroups — it must be cyclic. This is the most basic constraint on group structure.

- **First isomorphism theorem**: G/ker(φ) ≅ im(φ).
  *What broke*: you have a homomorphism φ: G → H (a structure-preserving map). Some elements of G get sent to the identity in H (the kernel). The theorem says: if you "collapse" the kernel (quotient G by ker φ), what's left is isomorphic to the image. Every homomorphism factors as "collapse the kernel, then inject." This is the structural backbone — it tells you exactly what information a homomorphism preserves and what it destroys.

- **Cayley's theorem**: every group is isomorphic to a subgroup of a permutation group.
  *What broke*: what *is* a group, concretely? Cayley (1854) proved: every group is a group of permutations (rearrangements of some set). This means groups aren't abstract nonsense — they are always *symmetries of something*. The proof is elegant: each group element g defines a permutation "multiply everything by g."

- **Sylow theorems**: for a finite group of order p^a · m, subgroups of order p^a exist, and their count satisfies divisibility constraints.
  *What broke*: Lagrange's theorem says subgroup orders divide group order. But the converse is false — a group of order 12 need not have a subgroup of order 6. Sylow (1872) proved: for *prime power* divisors p^a, such subgroups always exist. And the number of them is ≡ 1 mod p and divides m. These constraints are the main tool for classifying finite groups — they tell you which subgroups must exist.

- **Classification of finitely generated abelian groups**: every such group is a direct product of cyclic groups.
  *What broke*: abelian (commutative) groups are the simplest type. What do they all look like? The classification theorem says: they decompose completely into cyclic pieces, either ℤ (infinite) or ℤ/nℤ (finite). This is a complete structural description — there are no surprises in the abelian world. For non-abelian groups, no such clean classification exists (and the full classification of finite simple groups took thousands of pages).

- **Fundamental theorem of algebra**: every non-constant polynomial over ℂ has a root.
  *What broke*: the quadratic formula always works... over ℂ. But over ℝ, x² + 1 = 0 has no solution. ℂ is "algebraically closed" — every polynomial factors completely into linear factors. Every proof of this theorem uses analysis or topology (not pure algebra), which is why it's called a theorem of *algebra* but proved by *analysis*. D'Alembert (1746) gave the first attempt; Gauss (1799) gave the first accepted proof.

- **Euclidean division for polynomials**: f = qg + r with deg(r) < deg(g).
  *What broke*: integers have long division: 17 = 3×5 + 2. Polynomials over a field have the same thing: divide f by g, get quotient q and remainder r with deg(r) < deg(g). This means polynomials over a field form a Euclidean domain — you can compute GCDs, do modular arithmetic, and factorise. It's the bridge between number theory and polynomial algebra.

- **Irreducibility criteria** (Eisenstein's criterion): if a prime p divides all coefficients except the leading one, and p² doesn't divide the constant term, the polynomial is irreducible over ℚ.
  *What broke*: given a polynomial, can it be factored into simpler polynomials? Over ℝ or ℂ, you can always factor (FTA). Over ℚ, factoring is hard — there's no general algorithm that's obviously efficient. Eisenstein (1850) gave a sufficient condition that catches many cases. Example: x⁴ + 2x³ + 2x² + 2x + 2 is irreducible over ℚ by Eisenstein with p = 2.

- **Chinese remainder theorem**: if ideals are coprime, you can solve simultaneous congruences.
  *What broke*: Sun Tzu (3rd century CE) posed: find a number that leaves remainder 2 when divided by 3, remainder 3 when divided by 5, and remainder 2 when divided by 7. The CRT says: if the moduli are pairwise coprime, a unique solution exists modulo the product. The algebraic version (for rings): R/(I ∩ J) ≅ R/I × R/J when I + J = R. This is the theoretical foundation of modular arithmetic and its applications in cryptography.

- **Galois correspondence**: subgroups of the Galois group correspond to intermediate field extensions.
  *What broke*: Galois (1832, written the night before his duel) discovered that the solvability of a polynomial is encoded in the *symmetries of its roots*. These symmetries form a group (the Galois group), and intermediate fields correspond to subgroups. The correspondence is inclusion-reversing: bigger subgroups ↔ smaller fields. This transforms the algebraic question "can I solve this equation with radicals?" into the group theory question "is this group solvable?"

- **Abel-Ruffini theorem**: the general quintic is not solvable by radicals.
  *What broke*: quadratics have a formula (known since Babylon). Cubics and quartics have formulas (Cardano, Ferrari, 1540s). For centuries, mathematicians sought a quintic formula. Abel (1824) and Galois (1832) proved: it doesn't exist. The reason is group-theoretic: solving by radicals corresponds to a chain of normal subgroups, and the symmetric group S₅ has no such chain (it's not "solvable" in the technical sense). This is the birth of abstract algebra — the realisation that structure (not computation) determines solvability.

---

## Stage 8 — Probability

**Problem**: What's a fair price for a bet? If you flip a coin 1000 times, how close to 500 heads will you get? How do you update beliefs when new evidence arrives? When does a random process stabilise?

**Resources**: Blitzstein & Hwang "Introduction to Probability" (Harvard Stat 110, free online).

### Key theorems

- **Law of total probability**: P(A) = ΣP(A|Bᵢ)P(Bᵢ).
  *What broke*: you want P(rain tomorrow), but the probability depends on whether there's a warm front or cold front today. You don't know which — but you know the probability of each, and the probability of rain given each. Total probability lets you combine these: consider all possible "states of the world," weight each by its probability, sum up. It's the fundamental tool for reasoning under compound uncertainty.

- **Bayes' theorem**: P(B|A) = P(A|B)P(B)/P(A).
  *What broke*: you observe symptoms and want to know the disease. You know P(symptoms|disease) from medical data. But you need P(disease|symptoms) — the reverse. Bayes (published posthumously, 1763) showed how to invert conditional probabilities. The prior P(B) encodes what you believed before the evidence; the posterior P(B|A) is your updated belief. This is the mathematical foundation of learning from data.

- **Linearity of expectation**: E[X+Y] = E[X] + E[Y], always, even when X and Y are dependent.
  *What broke*: computing expectations of complicated random variables directly is often impossible. But linearity lets you decompose: the expected number of fixed points in a random permutation = Σ P(element i is fixed) = n × 1/n = 1, regardless of the complex dependencies between positions. No independence assumption needed. This is the most powerful trick in discrete probability — it turns hard counting problems into easy sums.

- **Variance of sums**: Var(X+Y) = Var(X) + Var(Y) + 2Cov(X,Y).
  *What broke*: expectation is linear, but variance is not. If X and Y are correlated, the variability of X+Y depends on whether they reinforce or cancel each other. Covariance measures this. For independent variables, Cov = 0 and variances add — which is why averaging independent measurements reduces noise (variance of mean = variance/n). For dependent variables, you must account for covariance.

- **Markov's inequality**: P(X ≥ a) ≤ E[X]/a for non-negative X.
  *What broke*: you know the average income in a country. What fraction of people earn more than 10× the average? Markov's inequality says: at most 1/10. It's extremely crude (the real fraction is usually much less), but it works for *any* distribution with only the mean known. It's the starting point for sharper bounds.

- **Chebyshev's inequality**: P(|X-μ| ≥ kσ) ≤ 1/k².
  *What broke*: Markov only uses the mean. If you also know the variance (how spread out the distribution is), you get a tighter bound. Chebyshev (1867) proved: the probability of being k standard deviations from the mean is at most 1/k², for any distribution. At k = 3, that's at most 11%. Still distribution-free — works for any shape. The proof is one line: apply Markov to (X-μ)².

- **Law of large numbers** (weak): the sample mean converges in probability to the true mean.
  *What broke*: Jacob Bernoulli (1713, published posthumously) asked: if you flip a coin many times, does the fraction of heads approach 1/2? His proof (using Chebyshev-type arguments) says yes: for any ε > 0, P(|sample mean - μ| > ε) → 0 as n → ∞. This is the theoretical justification for using sample averages to estimate population parameters — the foundation of statistics and insurance.

- **Law of large numbers** (strong): the sample mean converges almost surely.
  *What broke*: the weak law says "the probability of being far away vanishes." The strong law (Kolmogorov, 1930) says something stronger: the sample mean *eventually stays close forever* (with probability 1). The distinction: weak = unlikely to deviate at any given time; strong = the trajectory itself converges. The strong law requires more sophisticated tools (Borel-Cantelli lemma) but gives a definitive statement.

- **Central limit theorem**: the normalised sum of iid random variables converges to a Gaussian.
  *What broke*: de Moivre (1733) noticed that the binomial distribution (coin flips) looks bell-shaped for large n. Laplace generalised: the sum of *any* iid variables with finite variance, properly normalised, converges to the normal distribution. This explains why the Gaussian appears everywhere — heights, measurement errors, stock returns — any quantity that's a sum of many small independent effects will be approximately normal. The proof uses moment generating functions or characteristic functions.

- **Moment generating functions**: M_X(t) = E[eᵗˣ] uniquely characterises distributions.
  *What broke*: two distributions might have the same mean and variance but look completely different. How do you prove two random variables have the same distribution? The MGF encodes *all* moments (mean, variance, skewness, kurtosis, ...) in one function. If two MGFs are equal in a neighbourhood of 0, the distributions are identical. This is the main technical tool for proving the CLT and other limit theorems.

- **Conditional expectation as projection**: E[X|Y] is the best least-squares predictor of X given Y.
  *What broke*: you want to predict X knowing Y. What's the best prediction? "Best" in the least-squares sense (minimise E[(X - g(Y))²]) gives g(Y) = E[X|Y]. This is exactly orthogonal projection from stage 2: in the space of random variables with the inner product E[XY], conditional expectation projects X onto the subspace of Y-measurable random variables. The residual X - E[X|Y] is uncorrelated with any function of Y. This connects probability to Hilbert space geometry.

---

## Stage 9 — Bilinear Algebra and Spectral Theory

**Problem**: A vibrating string decomposes into fundamental modes. Each mode is an eigenvector of a differential operator. How do you find these modes? When can you guarantee a full set of independent eigenvectors? What's special about operators that are "self-adjoint" (symmetric)?

**Resources**: Axler "Linear Algebra Done Right" chapters 7-9.

### Key theorems

- **Spectral theorem** (real symmetric / self-adjoint): such operators have an orthonormal basis of eigenvectors, all eigenvalues real.
  *What broke*: Euler and Daniel Bernoulli (1750s) studied vibrating strings and found that the motion decomposes into independent "modes" (harmonics). Mathematically, these are eigenvectors of the Laplacian operator. The spectral theorem guarantees this decomposition exists for symmetric/self-adjoint operators: the eigenvectors are orthogonal, span the whole space, and the eigenvalues are real. This is why Fourier analysis works (sines and cosines are eigenvectors of d²/dx²), why quantum observables have real measurements, and why PCA works.

- **Spectral theorem** (normal operators): normal operators (AA* = A*A) are unitarily diagonalisable.
  *What broke*: the real symmetric spectral theorem doesn't cover complex matrices or non-symmetric operators like rotations. Normal operators — those commuting with their adjoint — are the largest class for which full spectral decomposition works. Rotations are normal (eigenvalues on the unit circle), symmetric matrices are normal (real eigenvalues), but shear matrices are not (and can't be diagonalised). This is the boundary between "nice" and "difficult" in linear algebra.

- **Singular value decomposition** (SVD): every matrix A = UΣV*.
  *What broke*: not every matrix is diagonalisable (even over ℂ). Not every matrix is square. The SVD doesn't care — it works for any matrix of any shape. The diagonal entries (singular values) measure how much the transformation stretches in each direction. SVD is the "correct" generalisation of eigendecomposition: it always exists, is numerically stable, and reveals the rank, range, and null space. It's behind Google's PageRank, image compression, recommender systems, and pseudoinverses.

- **Rayleigh quotient characterisation**: eigenvalues of a symmetric matrix are extrema of R(x) = x'Ax/x'x.
  *What broke*: Lord Rayleigh (1877) was studying vibrations and wanted to estimate natural frequencies without solving the full eigenvalue problem. He noticed: the smallest eigenvalue is the minimum of x'Ax/x'x, and the largest is the maximum. This variational characterisation means you can approximate eigenvalues by optimising over trial vectors — the foundation of the Rayleigh-Ritz method used in structural engineering and quantum chemistry.

- **Min-max theorem** (Courant-Fischer): the k-th eigenvalue is min over k-dimensional subspaces of max R(x).
  *What broke*: Rayleigh quotient gives the extreme eigenvalues. What about the ones in between? Courant (1920) and Fischer extended the characterisation: the k-th eigenvalue is a minimax over subspaces of dimension k. This gives eigenvalue inequalities (interlacing theorems), perturbation bounds, and is the theoretical basis for the finite element method.

- **Sylvester's law of inertia**: the number of positive, negative, and zero eigenvalues of a symmetric matrix is invariant under congruence (P'AP for invertible P).
  *What broke*: a quadratic form x'Ax can be written as a sum of squares by changing coordinates. But different coordinate changes give different-looking sums. Sylvester (1852) proved: the number of positive, negative, and zero squared terms is always the same, regardless of how you change coordinates. This triple (p, n, z) is the *signature* — the complete invariant of quadratic forms under change of basis. It determines whether the form is positive definite, negative definite, or indefinite.

- **Positive definite characterisation**: multiple equivalent conditions for A symmetric.
  *What broke*: "positive definite" means x'Ax > 0 for all x ≠ 0. But checking this directly requires testing infinitely many vectors. Equivalent conditions (all eigenvalues positive; all leading minors positive; Cholesky factorisation exists) give practical tests. Each equivalent form is useful in a different context: eigenvalues for theory, leading minors for hand computation, Cholesky for numerical algorithms.

- **Bilinear form representation**: every bilinear form on a finite-dimensional space is represented by a matrix.
  *What broke*: bilinear forms (functions B(u,v) linear in each argument) arise naturally in physics (dot product, energy, area). The representation theorem says: once you choose a basis, every bilinear form corresponds to a matrix. Different bases give different matrices related by B ↦ P'BP. The invariants (rank, signature) don't depend on the basis — they're properties of the form itself.

- **Orthogonal diagonalisation of quadratic forms** (principal axis theorem): every quadratic form reduces to a sum of squares by an orthogonal change of variables.
  *What broke*: Euler studied the rotation of rigid bodies (1750s) and found that every symmetric tensor has three mutually perpendicular "principal axes" along which the quadratic form simplifies to a sum of squares. The principal axis theorem generalises: any quadratic form Q(x) = x'Ax with A symmetric can be written as λ₁y₁² + ... + λₙyₙ² by rotating coordinates to align with the eigenvectors. This is why PCA "rotates" data to align with directions of maximum variance.

---

## Stage 10 — Normed Vector Spaces

**Problem**: You want to measure "how big" a function is, or "how far apart" two functions are. You want to know if a sequence of functions converges, and in what sense. This is where linear algebra meets topology — vector spaces with a metric.

**Resources**: Kreyszig "Introductory Functional Analysis with Applications" (first few chapters), supplemented by Axler's later chapters.

### Key theorems

- **All norms equivalent in finite dimension**: on ℝⁿ, every norm induces the same topology.
  *What broke*: on ℝ², you can measure distance with the Euclidean norm (√(x²+y²)), the taxicab norm (|x|+|y|), or the max norm (max(|x|,|y|)). They give different numbers but the same notion of convergence, continuity, and compactness. This is *false* in infinite dimensions — the L¹ and L∞ norms on function spaces give genuinely different topologies. The equivalence in finite dimensions is why you can "choose any convenient norm" in ℝⁿ without worrying about consequences.

- **Completeness and Banach spaces**: a complete normed space is a Banach space.
  *What broke*: you define a sequence of functions that should converge to a limit, but the limit isn't in your space. Example: continuous functions on [0,1] with the L¹ norm — a sequence of continuous functions can L¹-converge to a discontinuous function, which isn't in C[0,1]. Banach (1920s) identified completeness (Cauchy sequences converge within the space) as the key property. Complete spaces don't have this "leaking" problem. L², L∞, C[0,1] with sup norm are Banach. C[0,1] with L¹ norm is not.

- **Riesz's lemma**: the unit ball is compact iff the space is finite-dimensional.
  *What broke*: in ℝⁿ, bounded + closed = compact (Heine-Borel). Riesz (1918) showed this fails catastrophically in infinite dimensions: the closed unit ball in any infinite-dimensional normed space is *not* compact. You can find a sequence of unit vectors with no convergent subsequence. This is the fundamental reason infinite-dimensional analysis is harder than finite-dimensional — you lose the main compactness tool.

- **Continuity of linear maps**: continuous iff bounded.
  *What broke*: in ℝⁿ, every linear map is automatically continuous (a consequence of norm equivalence). In infinite dimensions, this fails: there exist linear maps that send bounded sets to unbounded ones. The characterisation says: a linear map is continuous iff its operator norm is finite (i.e., it doesn't amplify vectors by an arbitrarily large factor). Unbounded operators exist and are important in quantum mechanics (the momentum operator p = -iℏ d/dx is unbounded), but they're technically difficult.

- **Operator norm**: ||T|| = sup{||Tx|| : ||x|| ≤ 1}.
  *What broke*: given two normed spaces and a bounded linear map T between them, how do you measure "how big" T is? The operator norm is the maximum stretching factor — the most T can amplify any unit vector. This turns the space of bounded linear operators into a normed space itself (even a Banach space, if the target is Banach). It's the right notion of "size" for operators and is essential for perturbation theory.

- **Uniform boundedness principle** (Banach-Steinhaus): if a family of bounded operators is pointwise bounded, it's uniformly bounded.
  *What broke*: you have a sequence of operators Tₙ, and for each individual vector x, the sequence Tₙ(x) is bounded. Does this mean the operators themselves are bounded uniformly (sup ||Tₙ|| < ∞)? In finite dimensions, yes trivially. In infinite dimensions, it's not obvious — maybe different vectors are big for different operators. Banach and Steinhaus (1927) proved: on a Banach space, pointwise bounded implies uniformly bounded. The proof uses the Baire category theorem (stage 6). Application: proving that certain Fourier series diverge.

- **Open mapping theorem**: a surjective bounded linear operator between Banach spaces maps open sets to open sets.
  *What broke*: you have a bijective bounded operator T: X → Y. Is the inverse T⁻¹ also bounded? It's not obvious — T⁻¹ is linear, but could be unbounded (amplify vectors without limit). The open mapping theorem (Banach, 1929) says: if T is surjective and X, Y are Banach, then T maps open sets to open sets, which implies T⁻¹ is bounded. This is the "inverse mapping theorem" for functional analysis.

- **Closed graph theorem**: a linear operator between Banach spaces is bounded iff its graph is closed.
  *What broke*: proving that an operator is bounded (continuous) by the definition requires bounding ||Tx||/||x||. Sometimes it's easier to prove a weaker-sounding property: the graph {(x, Tx)} is a closed subset of X × Y. The closed graph theorem says: for linear operators between Banach spaces, closed graph implies bounded. It's often the most convenient way to prove continuity of implicitly-defined operators.

- **Hahn-Banach theorem**: a bounded linear functional on a subspace can be extended to the whole space without increasing its norm.
  *What broke*: you have a linear functional defined on a subspace of a normed space (e.g., "evaluate the integral on a subclass of functions"). Can you extend it to the whole space? And can you do so without blowing up its norm? Hahn (1927) and Banach (1929) proved: yes. This guarantees the dual space (space of all bounded linear functionals) is rich enough to separate points — you can always find a functional that distinguishes between any two different vectors. It's the existence theorem that makes duality theory work.

- **Best approximation in inner product spaces**: every point has a unique nearest point in a closed convex subset of a Hilbert space.
  *What broke*: in ℝⁿ, the closest point in a subspace is the orthogonal projection — drop a perpendicular. Does this work in infinite-dimensional Hilbert spaces (like L²)? Yes: for any closed convex set, the nearest point exists and is unique. For subspaces, it's the orthogonal projection, just as in ℝⁿ. This is why Fourier series give the best L² approximation, why least-squares regression works in infinite-dimensional settings, and why signal processing can optimally filter noise.

---

## Timeline

| Stage | Topic | Estimated time | Cumulative |
|-------|-------|---------------|------------|
| 1 | Sequences, series, convergence | 4-5 weeks | 1 month |
| 2 | Linear algebra | 6-8 weeks | 3 months |
| 3 | Multivariable calculus | 4-5 weeks | 4 months |
| 4 | ODEs | 4-5 weeks | 5 months |
| 5 | Power series and Fourier | 4-5 weeks | 6 months |
| 6 | Topology of metric spaces | 5-6 weeks | 7.5 months |
| 7 | Groups, rings, polynomials | 6-8 weeks | 9.5 months |
| 8 | Probability | 5-6 weeks | 11 months |
| 9 | Bilinear algebra, spectral theory | 3-4 weeks | 12 months |
| 10 | Normed vector spaces | 3-4 weeks | 13 months |

At 1-2 hours daily. Faster if you already have partial knowledge of some stages.

---

## How These Connect

```
Stage 1 (sequences/series)
  │
  ├──→ Stage 2 (linear algebra)
  │      │
  │      ├──→ Stage 3 (multivariable calculus)
  │      │      │
  │      │      └──→ Stage 4 (ODEs)
  │      │
  │      └──→ Stage 9 (spectral theory)
  │
  ├──→ Stage 5 (power series / Fourier)
  │      │
  │      └──→ connects to Stage 9
  │
  ├──→ Stage 6 (topology)
  │      │
  │      └──→ Stage 10 (normed spaces)
  │
  ├──→ Stage 7 (algebra) ← somewhat independent
  │
  └──→ Stage 8 (probability) ← somewhat independent
            │
            └──→ connects to stochastic calculus (beyond CPGE)
```

Stages 7 and 8 can be studied in parallel with the analysis track (stages 3-6) if you want variety.
