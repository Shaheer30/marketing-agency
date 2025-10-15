<template>
  <div class="container">
    <header class="section-head">
      <h2>Services</h2>
      <p class="muted">
        Full-stack digital marketing to help you rank, convert, and scale
        profitably.
      </p>
    </header>

    <div class="grid">
      <article class="service card" v-for="s in services" :key="s.title">
        <div class="icon" v-html="s.icon" aria-hidden="true"></div>
        <h3>{{ s.title }}</h3>
        <p class="muted">{{ s.desc }}</p>
      </article>
    </div>
  </div>
</template>

<script>
export default {
  name: "ServicesSection",
  data() {
    return {
      services: [
        {
          title: "SEO",
          desc: "Technical audits, content strategy, and link earning for sustainable growth.",
          icon: `<svg width="28" height="28" viewBox="0 0 24 24" fill="none"><path d="M10 3H3v7h7V3Zm11 0h-7v7h7V3ZM10 14H3v7h7v-7Zm4 0h7v7h-7v-7Z" stroke="currentColor" stroke-width="2"/></svg>`,
        },
        {
          title: "Local SEO",
          desc: "Own the map pack with optimized listings, NAP consistency, and reviews.",
          icon: `<svg width="28" height="28" viewBox="0 0 24 24" fill="none"><path d="M12 21s7-5.33 7-11a7 7 0 1 0-14 0c0 5.67 7 11 7 11Z" stroke="currentColor" stroke-width="2"/><circle cx="12" cy="10" r="2.5" fill="currentColor"/></svg>`,
        },
        {
          title: "GMB Creation",
          desc: "Set up and verify your Google Business Profile for maximum local visibility.",
          icon: `<svg width="28" height="28" viewBox="0 0 24 24" fill="none"><path d="M4 7h16l-2 10H6L4 7Z" stroke="currentColor" stroke-width="2"/><path d="M9 7V5a3 3 0 0 1 6 0v2" stroke="currentColor" stroke-width="2"/></svg>`,
        },
        {
          title: "Web Development",
          desc: "Fast, accessible websites that convert — from landing pages to custom builds.",
          icon: `<svg width="28" height="28" viewBox="0 0 24 24" fill="none"><path d="m8 9-4 3 4 3M16 9l4 3-4 3" stroke="currentColor" stroke-width="2"/><path d="M10 19h4" stroke="currentColor" stroke-width="2"/></svg>`,
        },
        {
          title: "Graphic Designing",
          desc: "Visual identities, ad creatives, and brand systems that stand out.",
          icon: `<svg width="28" height="28" viewBox="0 0 24 24" fill="none"><rect x="3" y="3" width="18" height="18" rx="2" stroke="currentColor" stroke-width="2"/><path d="M7 7h10v10H7z" stroke="currentColor" stroke-width="2"/><circle cx="12" cy="12" r="1.5" fill="currentColor"/></svg>`,
        },
        {
          title: "Google & Meta Ads",
          desc: "Performance creative, targeting, and optimization for profitable scale.",
          icon: `<svg width="28" height="28" viewBox="0 0 24 24" fill="none"><circle cx="6.5" cy="12" r="3.5" stroke="currentColor" stroke-width="2"/><circle cx="17.5" cy="12" r="3.5" stroke="currentColor" stroke-width="2"/><path d="M10 12c0-2 1.5-4 3.5-4s3.5 2 3.5 4-1.5 4-3.5 4S10 14 10 12Z" fill="currentColor" opacity="0.2"/><path d="M2 12h2M20 12h2" stroke="currentColor" stroke-width="2" stroke-linecap="round"/></svg>`,
        },
        {
          title: "Content Writing",
          desc: "Narratives that rank and convert — research-driven and brand-aligned.",
          icon: `<svg width="28" height="28" viewBox="0 0 24 24" fill="none"><path d="M4 20h16M6 4h12v12H6z" stroke="currentColor" stroke-width="2"/><path d="M8 8h8M8 11h6" stroke="currentColor" stroke-width="2"/></svg>`,
        },
        {
          title: "Search Engine Marketing",
          desc: "Increase visibility and drive traffic with targeted paid ads on search engines.",
          icon: `<svg width="28" height="28" viewBox="0 0 24 24" fill="none"><circle cx="11" cy="11" r="7" stroke="currentColor" stroke-width="2"/><path d="M16 16l5 5" stroke="currentColor" stroke-width="2" stroke-linecap="round"/><path d="M8 11h6M8 8h3" stroke="currentColor" stroke-width="2" stroke-linecap="round"/></svg>`,
        },
        {
          title: "Answer Engine Optimization",
          desc: "Optimize for AI search tools like ChatGPT and Google SGE to appear in instant answers.",
          icon: `<svg width="28" height="28" viewBox="0 0 24 24" fill="none"><path d="M12 3l7 4v5c0 4.97-3.58 9.36-7 10-3.42-.64-7-5.03-7-10V7l7-4z" stroke="currentColor" stroke-width="2"/><path d="M9 12h6M9 9h3" stroke="currentColor" stroke-width="2" stroke-linecap="round"/></svg>`,
        },
        {
          title: "Geo-Targeted Marketing",
          desc: "Reach customers by location with ads tailored to their area and intent.",
          icon: `<svg width="28" height="28" viewBox="0 0 24 24" fill="none"><path d="M3 10a9 9 0 1 1 18 0c0 7-9 11-9 11S3 17 3 10Z" stroke="currentColor" stroke-width="2"/><path d="M12 7v3l2 1" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>`,
        },
        {
          title: "SERP Optimization",
          desc: "Improve your rankings and visibility across Google’s search results with strategic content and metadata.",
          icon: `<svg width="28" height="28" viewBox="0 0 24 24" fill="none"><rect x="3" y="4" width="18" height="16" rx="2" stroke="currentColor" stroke-width="2"/><path d="M7 8h10M7 12h6M7 16h8" stroke="currentColor" stroke-width="2" stroke-linecap="round"/></svg>`,
        },
        {
          title: "GMB Ranking",
          desc: "Boost your Google Business Profile to appear higher in local map results.",
          icon: `<svg width="28" height="28" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
            <!-- Frame -->
            <rect x="6" y="8" width="52" height="40" rx="6" stroke="currentColor" stroke-width="2" fill="none"/>
            
            <!-- Bars -->
            <rect x="14" y="34" width="5" height="10" fill="currentColor"/>
            <rect x="24" y="30" width="5" height="14" fill="currentColor"/>
            <rect x="34" y="25" width="5" height="19" fill="currentColor"/>
            <rect x="44" y="18" width="5" height="26" fill="currentColor"/>

            <!-- Rising Line + Proper Arrow -->
            <path d="M14 34 L26 28 L36 23 L46 16" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M45 16 L51 10 M51 10 L51 16" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>`,
        },
        {
          title: "Guest Post Paid Service",
          desc: "Publish sponsored articles on high-authority sites to build backlinks and brand trust.",
          icon: `<svg width="28" height="28" viewBox="0 0 24 24" fill="none"><path d="M4 4h16v16H4z" stroke="currentColor" stroke-width="2" stroke-linejoin="round"/><path d="M7 8h10M7 12h7M7 16h5" stroke="currentColor" stroke-width="2" stroke-linecap="round"/><path d="M17 17l3 3M20 17l-3 3" stroke="currentColor" stroke-width="2" stroke-linecap="round"/></svg>`,
        },
      ],
    };
  },
};
</script>

<style scoped>
.section-head {
  text-align: center;
  margin-bottom: 22px;
}
.section-head h2 {
  font-size: 28px;
  margin: 0 0 8px;
}
.section-head .muted {
  color: var(--muted);
}

.grid {
  display: grid;
  gap: 16px;
  grid-template-columns: 1fr;
}
.service {
  padding: 18px;
  transition: transform 0.15s ease, border-color 0.2s ease, background 0.2s ease;
}
.service:hover {
  transform: translateY(-2px);
  border-color: rgba(34, 211, 238, 0.35);
  background: linear-gradient(
    180deg,
    rgba(34, 211, 238, 0.05),
    rgba(34, 211, 238, 0)
  );
}
.icon {
  color: var(--primary);
  margin-bottom: 10px;
}
h3 {
  margin: 0 0 6px;
  font-size: 18px;
}

@media (min-width: 640px) {
  .grid {
    grid-template-columns: repeat(2, 1fr);
  }
}
@media (min-width: 1000px) {
  .grid {
    grid-template-columns: repeat(3, 1fr);
  }
}
</style>
