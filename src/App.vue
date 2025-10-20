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

      <section id="blog" class="section">
        <BlogsSection />
      </section>

      <section id="contact" class="section">
        <ContactSection />
      </section>
    </main>

    <SiteFooter />
    <WhatsappFloating />
  </div>
</template>

<script>
import NavBar from './components/NavBar.vue'
import HeroSection from './components/HeroSection.vue'
import AboutSection from './components/AboutSection.vue'
import ServicesSection from './components/ServicesSection.vue'
import PortfolioSection from './components/PortfolioSection.vue'
import LocationsSection from './components/LocationsSection.vue'
import BlogsSection from './components/BlogsSection.vue'
import ContactSection from './components/ContactSection.vue'
import SiteFooter from './components/SiteFooter.vue'
import WhatsappFloating from './components/WhatsappFloating.vue'

export default {
  name: 'App',
  components: {
    NavBar,
    HeroSection,
    AboutSection,
    ServicesSection,
    PortfolioSection,
    LocationsSection,
    BlogsSection,
    ContactSection,
    SiteFooter,
    WhatsappFloating,
  },
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Playfair+Display:wght@600;700&display=swap');

:root {
  /* UAE Flag Colors */
  --bg: #fff;
  --surface: #000000;
  --text: #000;
  --muted: #cccccc;
  --primary: #ff0000;
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
  border: 1px solid rgba(0, 0, 0, 0.1);
  border-radius: var(--radius);
  backdrop-filter: blur(6px);
}

.btn-primary {
    background: linear-gradient(135deg, #00732f 0%, #ff0000 100%);
    color: #ffffff !important;
    border: none;
    padding: 12px 35px;
    border-radius: 25px;
    font-size: 0.95rem;
    font-weight: 700;
    cursor: pointer;
    transition: all 0.3s 
    cubic-bezier(0.4, 0, 0.2, 1);
    box-shadow: 0 4px 15px rgba(255, 0, 0, 0.3);
    text-transform: uppercase;
    letter-spacing: 0.5px;
}
.btn-primary:hover {
    background: linear-gradient(135deg, #ff0000 0%, #00732f 100%);
  box-shadow: 0 6px 20px rgba(0, 115, 47, 0.4);
  transform: translateY(-3px);
}

.btn-outline {
  background: transparent;
  color: #ff0000;
  border: 2px solid #ff0000;
  padding: 12px 35px;
  border-radius: 25px;
  font-size: 0.95rem;
  font-weight: 700;
  cursor: pointer;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  text-transform: uppercase;
  letter-spacing: 0.5px;
}

.btn-outline:hover {
  background: linear-gradient(135deg, #ff0000 0%, #00732f 100%);
  color: #ffffff;
  box-shadow: 0 6px 20px rgba(255, 0, 0, 0.3);
  transform: translateY(-3px);
}

/* Responsive helpers */
@media (min-width: 768px) {
  .section { padding: 0 24px 96px 24px;}
}
</style>