<template>
  <div class="hero">
    <div class="container hero-inner">
      <div class="hero-copy">
        <p class="badge">Performance-first Digital Marketing</p>
        <h1 class="title text-balance">
          Grow Faster with Data-Driven SEO and High-Conversion Ads
        </h1>
        <p class="subtitle">
          We help ambitious brands dominate search, scale paid media, and convert clicks into customers.
        </p>
        <div class="actions">
          <a href="#contact" class="btn btn-primary">Get a Free Consultation</a>
          <a href="#services" class="btn btn-outline">Explore Services</a>
        </div>
        <ul class="trust">
          <li>Transparent Reporting</li>
          <li>ROI-Focused</li>
          <li>Certified Experts</li>
        </ul>
      </div>

      <div class="hero-art" aria-hidden="true">
        <div class="glow"></div>
        <div class="panel card">
          <h3>Keyword Growth</h3>
          <p><span class="kpi-up">+142%</span> YoY rankings</p>
        </div>
        <div class="panel card">
          <h3>Ad ROAS</h3>
          <p><span class="kpi-up">4.6x</span> average</p>
        </div>
        <div class="panel card">
          <h3>Local Visibility</h3>
          <p><span class="kpi-up">Top 3</span> map pack</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default { name: 'HeroSection' }
</script>

<style scoped>
.hero {
  background:
    radial-gradient(600px 300px at 85% 10%, rgba(0, 115, 47, 0.15), transparent 60%),
linear-gradient(180deg, rgba(255, 255, 255, 0.02), rgba(255, 255, 255, 0))

}
.hero-inner {
  display: grid;
  grid-template-columns: 1fr;
  gap: 28px;
  align-items: center;
}

.badge {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 6px 10px;
  border-radius: 999px;
  color: var(--text);
  font-weight: 600;
  font-size: 12px;
  letter-spacing: 0.3px;
  border: 1px solid rgba(255,255,255,0.12);
  background: rgba(255,255,255,0.03);
}

.title {
  margin: 12px 0 8px;
  font-size: 36px;
}

.subtitle {
  color: var(--muted);
  max-width: 60ch;
}

.actions {
  margin-top: 18px;
  display: flex;
  gap: 12px;
  flex-wrap: wrap;
}

.trust {
  margin: 18px 0 0;
  padding: 0;
  list-style: none;
  display: flex;
  gap: 14px;
  flex-wrap: wrap;
  color: var(--muted);
  font-size: 14px;
}
.trust li::before {
  content: "•";
  margin-right: 8px;
  color: var(--primary);
}

.hero-art {
  position: relative;
  height: 280px;
}
.glow {
  position: absolute;
  inset: 0;
  background: radial-gradient(400px 200px at 65% 30%, rgba(34,211,238,0.2), transparent 60%);
  filter: blur(18px);
}
.panel {
  position: absolute;
  padding: 14px;
  width: 200px;
  transform: rotate(-2deg);
}
.panel:nth-child(2) { /* first card */
  top: 20px; right: 20px;
}
.panel:nth-child(3) { /* second card */
  bottom: 18px; left: 16%;
  transform: rotate(1.5deg);
}
.panel:nth-child(4) { /* third card */
  top: 90px; left: 4%;
  transform: rotate(-1deg);
}
.panel h3 {
  margin: 0 0 6px 0;
  font-size: 14px;
  color: var(--muted);
}
.kpi-up {
  color: var(--primary);
  font-weight: 700;
}

@media (min-width: 900px) {
  .hero-inner {
    grid-template-columns: 1.1fr 0.9fr;
    gap: 40px;
  }
  .title { font-size: 48px; }
  .hero-art { height: 360px; }
}
</style>