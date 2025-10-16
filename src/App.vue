<template>
  <div>
    <NavBar />

    <main>
      <section id="home" class="section">
        <HeroSection />
      </section>

      <section id="about" class="section">
        <AboutSection />
      </section>

      <section id="services" class="section">
        <ServicesSection />
      </section>

      <section id="portfolio" class="section">
        <PortfolioSection />
      </section>

      <section id="locations" class="section">
        <LocationsSection />
      </section>

      <section id="contact" class="section">
        <ContactSection />
      </section>
    </main>

    <SiteFooter />
  </div>
</template>

<script>
import NavBar from './components/NavBar.vue'
import HeroSection from './components/HeroSection.vue'
import AboutSection from './components/AboutSection.vue'
import ServicesSection from './components/ServicesSection.vue'
import PortfolioSection from './components/PortfolioSection.vue'
import LocationsSection from './components/LocationsSection.vue'
import ContactSection from './components/ContactSection.vue'
import SiteFooter from './components/SiteFooter.vue'

export default {
  name: 'App',
  components: {
    NavBar,
    HeroSection,
    AboutSection,
    ServicesSection,
    PortfolioSection,
    LocationsSection,
    ContactSection,
    SiteFooter,
  },
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Playfair+Display:wght@600;700&display=swap');

:root {
  /* UAE Flag Colors */
  --bg: #00732f;       /* green */
  --surface: #000000;  /* black */
  --text: #ffffff;     /* white */
  --muted: #cccccc;    /* light grey */
  --primary: #ff0000;  /* red */
  --radius: 12px;
}

* { box-sizing: border-box; }

html, body, #app {
  height: 100%;
}

html {
  scroll-behavior: smooth;
  scroll-padding-top: 80px; /* header height offset for anchor targets */
}

body {
  margin: 0;
  background: var(--bg);
  color: var(--text);
  font-family: Inter, system-ui, -apple-system, Segoe UI, Roboto, Arial, sans-serif;
  line-height: 1.6;
}

h1, h2, h3 {
  font-family: "Playfair Display", Georgia, "Times New Roman", serif;
  line-height: 1.2;
}

a {
  color: var(--primary);
  text-decoration: none;
}

main {
  display: block;
}

.section {
  padding: 72px 16px;
}

.container {
  max-width: 1100px;
  margin: 0 auto;
  padding: 0 8px;
}

/* Utilities */
.card {
  background: linear-gradient(180deg, rgba(255,255,255,0.02), rgba(255,255,255,0.00));
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: var(--radius);
  backdrop-filter: blur(6px);
}

.btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border-radius: 999px;
  padding: 12px 20px;
  font-weight: 600;
  cursor: pointer;
  border: 1px solid transparent;
  transition: transform 0.15s ease, box-shadow 0.2s ease, background 0.2s ease, border-color 0.2s ease;
}

.btn-primary {
  color: #05131a;
  background: linear-gradient(135deg, var(--primary), #5eead4);
  box-shadow: 0 8px 24px rgba(34, 211, 238, 0.25);
}
.btn-primary:hover {
  transform: translateY(-1px);
  box-shadow: 0 12px 28px rgba(34, 211, 238, 0.32);
}

.btn-outline {
  color: var(--text);
  border-color: rgba(255, 255, 255, 0.16);
  background: transparent;
}
.btn-outline:hover {
  border-color: var(--primary);
  box-shadow: inset 0 0 0 1px var(--primary);
}

/* Responsive helpers */
@media (min-width: 768px) {
  .section { padding: 96px 24px; }
}
</style>