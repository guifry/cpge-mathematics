# Mathematician Profile Pages

## Directory structure

```
mathematicians/
  index.html          # Timeline page (all mathematicians chronologically)
  images/             # Profile pictures (round, ~200x200)
  euclid.html         # One page per mathematician, kebab-case
  gauss.html
  ...
```

## Profile page structure

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <!-- Same boilerplate as phase pages, but stylesheet path is ../style.css -->
</head>
<body>

<div class="mathematician-profile">
  <div class="mathematician-header">
    <img src="images/lastname.jpg" alt="Firstname Lastname" class="mathematician-photo">
    <div class="mathematician-info">
      <h1>Firstname Lastname</h1>
      <p class="mathematician-dates">1777–1855</p>
      <p class="mathematician-nationality">German</p>
      <p class="mathematician-areas">Number theory, algebra, analysis, astronomy</p>
    </div>
  </div>

  <h2>Theorems in this course</h2>
  <!-- Linked list: theorem name → phase page where it appears -->
  <ul class="mathematician-theorems">
    <li><a href="../phase1/03-fta.html">Fundamental Theorem of Arithmetic</a> — Phase 1, page 3</li>
    ...
  </ul>

  <h2>Other notable contributions</h2>
  <!-- 2–3 famous results NOT covered in the course. No links. -->
  <ul class="mathematician-theorems">
    <li><b>Theorema Egregium</b> — Gaussian curvature is intrinsic to the surface.</li>
    ...
  </ul>

  <hr>

  <div class="mathematician-bio">
    <!-- 200–300 words. Conversational, same tone as course pages. -->
    <p>...</p>
  </div>

  <h2>References in this course</h2>
  <!-- Every single mention of this mathematician across all phase pages. -->
  <table class="mathematician-references">
    <thead>
      <tr><th>Phase</th><th>Page</th><th>Referenced for</th></tr>
    </thead>
    <tbody>
      <tr><td>Phase 1</td><td><a href="../phase1/03-fta.html">Fundamental Theorem of Arithmetic</a></td><td>Proved unique prime factorisation</td></tr>
      <tr><td>Phase 2</td><td><a href="../phase2/01-limits.html">Limits</a></td><td>Formalised the epsilon-delta definition</td></tr>
      ...
    </tbody>
  </table>
</div>

<div class="nav">
  <a href="index.html">&larr; All mathematicians</a>
</div>

</body>
</html>
```

## Rules

1. **One page per mathematician.** File name: `mathematicians/lastname.html` (kebab-case if multi-word, e.g. `du-bois-reymond.html`).
2. **Profile picture.** Square JPEG in `mathematicians/images/`, displayed as a circle via CSS. If no portrait exists (e.g. Euclid), use a period-appropriate artistic depiction.
3. **Dates.** Format: `1777–1855` (en-dash). Use `c. 300 BC` style for ancient figures. If alive, `1950–`.
4. **Nationality.** Single word or short phrase: `French`, `Swiss-born, worked in Germany`.
5. **Areas.** Comma-separated. Omit if the mathematician's work is too broad to summarise (e.g. Euler).
6. **Theorems in this course.** Every theorem/concept attributed to this mathematician in the phase pages, linked to the relevant page.
7. **Other notable contributions.** 2–3 results not in the course. Bold the name, one-line description.
8. **Biography.** 200–300 words max. Same tone as the course: conversational, precise, British English. Focus on mathematical life, not personal trivia.
9. **No HTML comments, no emojis.** Same rules as phase pages.
10. **Reference table.** At the bottom of every profile page, a `<table class="mathematician-references">` listing every single mention of the mathematician across all phase pages. Three columns: **Phase** (e.g. "Phase 3"), **Page** (linked page title), **Referenced for** (what they are cited for — a theorem, a definition, a counterexample, etc.). Ordered by phase number first, then page number within the phase, then order of appearance on the page (not alphabetical). Each row is clickable (the page title cell is a link). If a mathematician is mentioned multiple times on the same page for different things, each mention gets its own row.

## Linking from phase pages

When a mathematician's name appears in a phase page, wrap it in a link:

```html
<a href="../mathematicians/gauss.html">Gauss</a> (1801) studied quadratic forms...
```

Only link the **first occurrence** on each page. Subsequent mentions are plain text.

## Timeline page

`mathematicians/index.html` is an interactive horizontal timeline of all mathematicians, ordered chronologically.

### Layout
- A horizontal axis representing time (left = ancient, right = modern).
- The timeline wraps onto multiple rows if there are many mathematicians — it is not a single endless scrollable line.
- Each mathematician is a circular profile picture connected to the timeline axis by a vertical line.

### Hover behaviour
- On hover, the circle animates upward slightly (e.g. `transform: translateY(-8px)` with a smooth transition).
- A tooltip/pop-up appears showing: name, nationality, dates, and a bullet list of theorems covered in this course.

### Click behaviour
- Clicking a mathematician's circle navigates to their profile page (`mathematicians/lastname.html`).

### Styling
- All timeline-specific CSS goes in `style.css` alongside the existing styles.
- The timeline should match the site's dark theme (`--bg`, `--surface`, `--accent`, etc.).
