<script setup>
import { useHead } from "@vueuse/head";

useHead({
  title: "GMB Ranking Service in UAE | SEO & Digital Marketing Agency",
  meta: [
    { name: "description", content: "We offer SEO, Local SEO, GMB Creation, Web Development, Graphic Design, Ads Management, and Content Writing to help your business grow online.." },
    { name: "keywords", content: "seo services, seo agency, seo optimization service, local seo agency, website development, website developement company, website developement agency, web dev, website developers, google my business, mybusiness, google my business management, graphic designing, graphic designer near me, graphic, seo content writer, web content writer, google ads manager, google compaign manager, meta ads manager, search engine marketing, sem agency, guest post, seo ai optimization, google business profile, gmb ranking, digital marketing,  digital marketing agency,  digital marketing services, marketing agency near me" },
  ],
script: [
    {
      type: 'application/ld+json',
      children: JSON.stringify({
        "@context": "https://schema.org",
        "@graph": [
          {
            "@type": "Organization",
            "@id": "https://uae-marketing-agency.vercel.app/#organization",
            "name": "UAE Marketing Agency",
            "url": "https://uae-marketing-agency.vercel.app/",
            "logo": "https://uae-marketing-agency.vercel.app/logo.png",
            "email": "agencyuaemarketing@gmail.com",
            "contactPoint": {
              "@type": "ContactPoint",
              "telephone": "+971568894637",
              "contactType": "customer service",
              "areaServed": "AE",
              "availableLanguage": ["English", "Arabic"]
            },
            "sameAs": [
              "https://www.facebook.com/profile.php?id=61579908015868",
              "https://x.com/uaemarketingg",
              "https://www.pinterest.com/agencyuaemarketing/",
              "https://www.scoop.it/topic/uae-marketing-agency",
              "https://medium.com/@agencyuaemarketing",
              "https://www.instagram.com/agencyuaemarketing/"
            ]
          },
          {
            "@type": "LocalBusiness",
            "@id": "https://uae-marketing-agency.vercel.app/#localbusiness",
            "name": "UAE Marketing Agency",
            "image": "https://uae-marketing-agency.vercel.app/logo.png",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "15 - 1 4th St - Deira",
              "addressLocality": "Abu Dhabi",
              "addressRegion": "Abu Dhabi",
              "postalCode": "00000",
              "addressCountry": "AE"
            },
            "telephone": "+971568894637",
            "email": "agencyuaemarketing@gmail.com",
            "url": "https://uae-marketing-agency.vercel.app/",
            "priceRange": "$$",
            "openingHours": "Mo-Sa 09:00-18:00",
            "geo": {
              "@type": "GeoCoordinates",
              "latitude": "24.4539",
              "longitude": "54.3773"
            },
            "areaServed": {
              "@type": "Place",
              "name": ["Dubai", "Abu Dhabi", "Sharjah", "Ajman", "Al Ain", "UAE"]
            },
            "description": "Boost your online presence with expert services: SEO, GMB ranking, website development, Meta Ads, Google Ads, content writing & more.",
            "aggregateRating": {
              "@type": "AggregateRating",
              "ratingValue": "4.9",
              "reviewCount": "27"
            }
          },
          {
            "@type": "FAQPage",
            "mainEntity": [
              {
                "@type": "Question",
                "name": "What services does UAE Marketing Agency offer?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "We offer SEO, Local SEO, Google My Business ranking, website development, Meta Ads, Google Ads, content writing, graphic design, and more."
                }
              },
              {
                "@type": "Question",
                "name": "Do you offer digital marketing services in Dubai and Abu Dhabi?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Yes, we serve all UAE regions including Dubai, Abu Dhabi, Sharjah, Ajman, and more with geo-targeted digital marketing solutions."
                }
              },
              {
                "@type": "Question",
                "name": "How can I contact UAE Marketing Agency?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "You can reach us at +971568894637 or email us at agencyuaemarketing@gmail.com. Visit us at Deira, Abu Dhabi."
                }
              },
              {
                "@type": "Question",
                "name": "Do you help rank businesses on Google Maps?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Yes, we specialize in Google My Business (GMB) ranking and local SEO to improve your visibility in Maps and local search."
                }
              }
            ]
          }
        ]
      })
    }
  ]
});
</script>

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
