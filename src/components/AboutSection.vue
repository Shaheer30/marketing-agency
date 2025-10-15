<template>
  <div class="container">
    <div class="grid">
      <div>
        <h2>About Our Agency</h2>
        <p class="lead">
          We’re a boutique team of strategists, creatives, and engineers united by one mission:
          helping brands grow sustainably with measurable, compounding results.
        </p>
        <p class="muted">
          From technical SEO and local listings to high-performance websites and full-funnel ad campaigns,
          we combine data, design, and experimentation to unlock growth opportunities at every stage.
        </p>
      </div>
      <div class="about-card card">
        <ul>
          <li><span class="dot"></span> Transparent monthly reporting</li>
          <li><span class="dot"></span> Senior-led strategy & execution</li>
          <li><span class="dot"></span> No long-term lock-in contracts</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default { name: 'AboutSection' }
</script>

<style scoped>
.grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 24px;
}
h2 { font-size: 28px; margin-bottom: 8px; }
.lead { color: var(--text); font-weight: 500; }
.muted { color: var(--muted); margin-top: 8px; }
.about-card {
  padding: 18px;
}
.about-card ul {
  margin: 0; padding: 0; list-style: none;
  display: grid; gap: 10px;
}
.dot {
  width: 8px; height: 8px; border-radius: 999px; display: inline-block;
  margin-right: 10px; background: var(--primary);
  box-shadow: 0 0 0 4px rgba(34,211,238,0.12);
}
@media (min-width: 900px) {
  .grid {
    grid-template-columns: 1.2fr 0.8fr;
    align-items: start;
  }
  h2 { font-size: 34px; }
}
</style>