<!-- views/Home.vue -->
<template>
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
</template>

<script>
import HeroSection from "../components/HeroSection.vue";
import AboutSection from "../components/AboutSection.vue";
import ServicesSection from "../components/ServicesSection.vue";
import PortfolioSection from "../components/PortfolioSection.vue";
import LocationsSection from "../components/LocationsSection.vue";
import BlogsSection from "../components/BlogsSection.vue";
import ContactSection from "../components/ContactSection.vue";

export default {
  name: "Home",
  components: {
    HeroSection,
    AboutSection,
    ServicesSection,
    PortfolioSection,
    LocationsSection,
    BlogsSection,
    ContactSection,
  },
};
</script>
