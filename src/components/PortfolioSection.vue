<template>
  <div class="container">
    <header class="section-head">
      <h2>Portfolio & Case Studies</h2>
      <p class="muted">Selected work and results from recent engagements.</p>
    </header>

    <div class="grid">
      <article v-for="item in items" :key="item.title" class="tile card">
        <div class="img-wrap">
          <img :src="item.img" :alt="item.title" />
          <div class="overlay">
            <div class="stat">
              <span class="value">{{ item.result }}</span>
              <span class="label">{{ item.metric }}</span>
            </div>
          </div>
        </div>
        <div class="tile-body">
          <h3>{{ item.title }}</h3>
          <p class="muted">{{ item.desc }}</p>
        </div>
      </article>
    </div>
  </div>
</template>

<script>
export default {
  name: 'PortfolioSection',
  data() {
    return {
      items: [
        {
          title: 'E‑commerce SEO Scale',
          desc: 'Technical overhaul + content hubs drove non-brand growth.',
          img: 'https://images.unsplash.com/photo-1519336555923-59661f41bb18?q=80&w=1200&auto=format&fit=crop',
          result: '+142%',
          metric: 'Organic Sessions'
        },
        {
          title: 'Local Services Domination',
          desc: 'Map pack for 20+ keywords via listings and reviews.',
          img: 'https://images.unsplash.com/photo-1551281044-8c9dcade9881?q=80&w=1200&auto=format&fit=crop',
          result: 'Top 3',
          metric: 'Local Rankings'
        },
        {
          title: 'High-ROAS Paid Media',
          desc: 'Creative testing and LTV targeting across Meta & Google.',
          img: 'https://images.unsplash.com/photo-1553877522-43269d4ea984?q=80&w=1200&auto=format&fit=crop',
          result: '4.6x',
          metric: 'ROAS'
        }
      ]
    }
  }
}
</script>

<style scoped>
.section-head {
  text-align: center;
  margin-bottom: 22px;
}
.section-head h2 { font-size: 28px; margin: 0 0 8px; }
.section-head .muted { color: #00732f; }

.grid {
  display: grid;
  gap: 16px;
  grid-template-columns: 1fr;
}

.tile { overflow: hidden; }
.img-wrap {
  position: relative;
  aspect-ratio: 16/9;
  overflow: hidden;
  border-top-left-radius: var(--radius);
  border-top-right-radius: var(--radius);
}
img {
  width: 100%; height: 100%; object-fit: cover; display: block;
  transition: transform 0.4s ease;
}
.overlay {
  position: absolute; inset: 0;
  display: grid; place-items: end start;
  padding: 12px;
  background: linear-gradient(180deg, rgba(0,0,0,0) 30%, rgba(0,0,0,0.45) 100%);
  opacity: 0; transition: opacity 0.25s ease;
}
.stat {
  background: rgba(255,255,255,0.08);
  border: 1px solid rgba(255,255,255,0.14);
  border-radius: 10px;
  padding: 8px 10px;
  backdrop-filter: blur(6px);
}
.value { color: var(--primary); font-weight: 700; font-size: 18px; margin-right: 6px; }
.label { color: var(--text); opacity: 0.85; font-size: 12px; }

.tile:hover img { transform: scale(1.05); }
.tile:hover .overlay { opacity: 1; }

.tile-body {
  padding: 14px 16px 18px;
}
.tile-body h3 {
  margin: 6px 0 6px;
  font-size: 18px;
}

@media (min-width: 700px) {
  .grid { grid-template-columns: repeat(2, 1fr); }
}
@media (min-width: 1100px) {
  .grid { grid-template-columns: repeat(3, 1fr); }
}
</style>