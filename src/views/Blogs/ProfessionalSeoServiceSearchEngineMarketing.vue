<script setup>
import { useHead } from "@vueuse/head";

useHead({
  title: "Seo Service | Seo Agency | Search Engine Marketing",
  meta: [
    {
      name: "description",
      content:
        "Grow your business with our expert SEO service and search engine marketing from a trusted SEO agency.",
    },
    {
      name: "keywords",
      content:
        "seo, seo agency, seo service near me, website development, website developement near me, graphic service, Digital agency, Digital marketing services near me, Gmb ranking services, Gmb service near me, Meta ads expert near me, Google ads expert near me",
    },
  ],
  script: [
    {
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": "Organization",
          "@id": "https://uae-marketing-agency.vercel.app/#organization",
          name: "UAE Marketing Agency",
          url: "https://uae-marketing-agency.vercel.app/",
          logo: "https://uae-marketing-agency.vercel.app/logo.png",
          email: "agencyuaemarketing@gmail.com",
          contactPoint: {
            "@type": "ContactPoint",
            telephone: "+971568894637",
            contactType: "customer service",
            areaServed: "AE",
            availableLanguage: ["English", "Arabic"],
          },
          sameAs: [
            "https://www.facebook.com/profile.php?id=61579908015868",
            "https://x.com/uaemarketingg",
            "https://www.pinterest.com/agencyuaemarketing/",
            "https://www.scoop.it/topic/uae-marketing-agency",
            "https://medium.com/@agencyuaemarketing",
            "https://www.instagram.com/agencyuaemarketing/",
          ],
        },
        {
          "@type": "LocalBusiness",
          "@id": "https://uae-marketing-agency.vercel.app/#localbusiness",
          name: "UAE Marketing Agency",
          image: "https://uae-marketing-agency.vercel.app/logo.png",
          address: {
            "@type": "PostalAddress",
            streetAddress: "15 - 1 4th St - Deira",
            addressLocality: "Abu Dhabi",
            addressRegion: "Abu Dhabi",
            postalCode: "00000",
            addressCountry: "AE",
          },
          telephone: "+971568894637",
          email: "agencyuaemarketing@gmail.com",
          url: "https://uae-marketing-agency.vercel.app/",
          priceRange: "$$",
          openingHours: "Mo-Sa 09:00-18:00",
          geo: {
            "@type": "GeoCoordinates",
            latitude: "24.4539",
            longitude: "54.3773",
          },
          areaServed: {
            "@type": "Place",
            name: ["Dubai", "Abu Dhabi", "Sharjah", "Ajman", "Al Ain", "UAE"],
          },
          description:
            "Boost your online presence with expert services: SEO, GMB ranking, website development, Meta Ads, Google Ads, content writing & more.",
          aggregateRating: {
            "@type": "AggregateRating",
            ratingValue: "4.9",
            reviewCount: "27",
          },
        },
        {
          "@type": "FAQPage",
          mainEntity: [
            {
              "@type": "Question",
              name: "What services does UAE Marketing Agency offer?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "We offer SEO, Local SEO, Google My Business ranking, website development, Meta Ads, Google Ads, content writing, graphic design, and more.",
              },
            },
            {
              "@type": "Question",
              name: "Do you offer digital marketing services in Dubai and Abu Dhabi?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "Yes, we serve all UAE regions including Dubai, Abu Dhabi, Sharjah, Ajman, and more with geo-targeted digital marketing solutions.",
              },
            },
            {
              "@type": "Question",
              name: "How can I contact UAE Marketing Agency?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "You can reach us at +971568894637 or email us at agencyuaemarketing@gmail.com. Visit us at Deira, Abu Dhabi.",
              },
            },
            {
              "@type": "Question",
              name: "Do you help rank businesses on Google Maps?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "Yes, we specialize in Google My Business (GMB) ranking and local SEO to improve your visibility in Maps and local search.",
              },
            },
          ],
        },
      ],
    },
  ],
});
</script>

<!-- views/BlogDetail.vue -->
<template>
  <main>
    <!-- Blog Header -->
    <section class="blog-header">
      <div class="container">
        <router-link to="/" class="back-link">← Back to Home</router-link>
        <h1 class="blog-title">
          Professional SEO Service & Search Engine Marketing | Trusted SEO
          Agency
        </h1>
        <div class="blog-meta">
          <span class="author"
            >Enhance your online visibility with our professional SEO service
            and search engine marketing solutions from a trusted SEO
            agency</span
          >
        </div>
      </div>
    </section>

    <!-- Featured Image -->
    <section class="blog-featured-image">
      <div class="container">
        <img
          src="/images/blogs/professional-seo-service-search-engine-marketing/professional-seo-service-search-engine-marketing-1.png"
          alt="Blog featured image"
          class="featured-img"
        />
      </div>
    </section>

    <!-- Blog Content -->
    <section class="blog-content">
      <div class="container">
        <article class="article-body">
          <h2>Why Choose Our SEO Services in the USA & UAE</h2>
          <p>
            Choose our SEO services in the USA and UAE to boost your online
            presence and reach global audiences. We offer tailored strategies,
            expert keyword optimization, and data-driven results to help your
            business rank higher, attract more traffic, and achieve long-term
            digital growth across competitive markets.
          </p>

          <h2>Our Core SEO Service</h2>

          <h3>Keyword Research & Strategy</h3>
          <p>
            We identify profitable search terms that align with your business
            goals. Our SEO specialists conduct competitor analysis, target
            high-value keywords, and uncover long-tail opportunities for better
            conversions.
          </p>

          <h3>On-Page SEO Optimization</h3>
          <p>
            We optimize every element of your site for maximum search
            visibility:
          </p>

          <ul>
            <li>Meta titles & descriptions</li>
            <li>Image alt text</li>
            <li>Internal linking</li>
            <li>Keyword placement</li>
          </ul>

          <h3>Technical SEO Audits & Fixes</h3>
          <p>
            A slow or poorly structured website can hurt your rankings. We
            ensure your site meets Google’s technical standards:
          </p>

          <ul>
            <li>Core Web Vitals improvements</li>
            <li>Mobile responsiveness</li>
            <li>Structured data markup</li>
            <li>Sitemap & index optimization</li>
          </ul>

          <h3>High-Quality Link Building</h3>
          <p>
            We build strong, relevant backlinks that boost domain authority and
            rankings:
          </p>

          <ul>
            <li>Guest posts on authority sites</li>
            <li>Niche-specific backlinks</li>
            <li>Local citations</li>
            <li>Broken link reclamation</li>
          </ul>

          <!-- Featured Image -->
          <section class="blog-featured-image">
            <div class="container">
              <img
                src="/images/blogs/professional-seo-service-search-engine-marketing/professional-seo-service-search-engine-marketing-2.png"
                alt="Blog featured image"
                class="featured-img"
              />
            </div>
          </section>

          <h3>Local SEO Services</h3>
          <p>Capture nearby customers with geo-targeted SEO strategies:</p>

          <ul>
            <li>Google Business Profile optimization</li>
            <li>Local citations (NAP consistency)</li>
            <li>Review management</li>
            <li>Location-specific keywords</li>
          </ul>

          <h3>eCommerce & Shopify SEO</h3>
          <p>
            We optimize online stores for higher visibility and conversions:
          </p>

          <ul>
            <li>Product page optimization</li>
            <li>Category structure improvement</li>
            <li>Mobile & voice search optimization</li>
            <li>AI and GEO tagging</li>
          </ul>

          <h3>Content Writing for SEO Growth</h3>
          <p>Fresh, keyword-rich content drives rankings and builds trust</p>

          <h2>Our SEO Process</h2>

          <ul>
            <li>Discover: Analyze your site, competitors, and market.</li>
            <li>Plan: Build a custom SEO strategy.</li>
            <li>
              Optimize: Implement on-page, technical, and content improvements.
            </li>
            <li>Promote: Build backlinks and boost online authority.</li>
            <li>Track: Measure growth with monthly reports.</li>
          </ul>

          <h2>Proven SEO Results</h2>

          <ul>
            <li>450% increase in organic traffic for an eCommerce client</li>
            <li>92% page 1 rankings for targeted keywords</li>
            <li>300% boost in leads</li>
            <li>Why We’re Different from Other SEO Companies</li>
            <li>Cancel anytime, no long contracts</li>
            <li>100% white-hat SEO techniques</li>
            <li>Dedicated account manager for your project</li>
            <li>Clear, monthly progress reports</li>
            <li>Benefits of Partnering With Us</li>
            <li>Rank Higher on Google</li>
            <li>Target high-intent keywords for maximum visibility</li>
            <li>Increase Leads & Sales</li>
            <li>Optimize your website for better conversions</li>
            <li>Outrank Competitors</li>
            <li>Use advanced SEO tactics to take the lead</li>
            <li>Build Brand Authority</li>
            <li>Earn trust through high-quality content and backlinks</li>
            <li>Transparent Reporting</li>
            <li>Real-time performance tracking for complete clarity</li>
            <li>One Platform</li>
            <li>We offer one platform for all needs</li>
          </ul>
        </article>

        <!-- Tags -->
        <div class="blog-tags">
          <span class="tag">seo services</span>
          <span class="tag">seo agency</span>
          <span class="tag">seo optimization</span>
          <span class="tag">website development</span>
          <span class="tag">website developement near me</span>
          <span class="tag">graphic service</span>
          <span class="tag">Gmb ranking services</span>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="cta-section">
      <div class="container">
        <h2>Ready to work with us?</h2>
        <p>Get in touch and let's create something amazing together.</p>
        <router-link to="/" class="btn-primary">Contact Us</router-link>
      </div>
    </section>
  </main>
</template>

<script>
export default {
  name: "BlogDetail",
};
</script>

<style scoped>
.back-link {
  display: inline-block;
  margin-bottom: 24px;
  color: var(--primary);
  font-weight: 600;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

.back-link:hover {
  transform: translateX(-4px);
}

.blog-header {
  padding: 72px 16px;
  background: linear-gradient(
    135deg,
    rgba(255, 0, 0, 0.05) 0%,
    rgba(0, 115, 47, 0.05) 100%
  );
}

.blog-title {
  font-size: 2.5rem;
  margin: 24px 0;
  color: var(--text);
}

.blog-meta {
  display: flex;
  align-items: center;
  gap: 12px;
  font-size: 0.95rem;
  color: var(--primary);
}

.separator {
  color: var(--muted);
}

.blog-featured-image {
  padding: 24px 0px 0px 16px;
}

.featured-img {
  width: 100%;
  height: auto;
  max-width: 800px;
  max-height: 500px;
  object-fit: cover;
  border-radius: var(--radius);
  margin: 0 auto;
  display: block;
}

.blog-content {
  padding: 72px 16px;
}

.article-body {
  max-width: 800px;
  margin: 0 auto 48px;
}

.article-body h2 {
  font-size: 1.5rem;
  margin: 32px 0 16px;
  color: var(--text);
}

.article-body h3 {
  font-size: 1.5rem;
  margin: 32px 0 16px;
  color: var(--text);
}

.article-body h2:first-child {
  margin-top: 0;
}

.paragraph {
  font-size: 1.05rem;
  line-height: 1.8;
  margin-bottom: 24px;
  color: var(--text);
}

.article-body p {
  font-size: 1.05rem;
  line-height: 1.8;
  margin-bottom: 24px;
  color: var(--text);
}

.blog-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  margin: 48px 0;
  max-width: 800px;
  margin-left: auto;
  margin-right: auto;
}

.tag {
  background: linear-gradient(
    135deg,
    rgba(255, 0, 0, 0.1) 0%,
    rgba(0, 115, 47, 0.1) 100%
  );
  color: var(--primary);
  padding: 8px 16px;
  border-radius: 20px;
  font-size: 0.85rem;
  font-weight: 600;
  border: 1px solid rgba(255, 0, 0, 0.2);
}

.author-bio {
  max-width: 800px;
  margin: 48px auto;
  padding: 32px;
}

.author-bio-content h3 {
  margin-top: 0;
}

.related-posts {
  max-width: 1100px;
  margin: 72px auto 0;
  padding-top: 48px;
  border-top: 2px solid rgba(0, 0, 0, 0.1);
}

.related-posts h2 {
  margin-bottom: 32px;
  text-align: center;
}

.posts-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 24px;
}

.related-post-card {
  padding: 24px;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

.related-post-card:hover {
  transform: translateY(-4px);
  border-color: var(--primary);
}

.related-post-card h4 {
  margin-top: 0;
}

.read-link {
  display: inline-block;
  margin-top: 16px;
  font-weight: 600;
  color: var(--primary);
}

.cta-section {
  background: linear-gradient(135deg, #00732f 0%, #ff0000 100%);
  color: white;
  padding: 72px 16px;
  text-align: center;
}

.cta-section h2 {
  color: white;
  margin-bottom: 16px;
}

.cta-section p {
  color: rgba(255, 255, 255, 0.9);
  margin-bottom: 32px;
  font-size: 1.05rem;
}

.cta-section .btn-primary {
  background: rgba(255, 255, 255, 0.2);
  border: 2px solid white;
  color: white;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
}

@media (min-width: 768px) {
  .blog-header {
    padding: 96px 24px;
  }

  .blog-title {
    font-size: 3rem;
  }

  .blog-content {
    padding: 96px 24px;
  }

  .cta-section {
    padding: 96px 24px;
  }
}
</style>
