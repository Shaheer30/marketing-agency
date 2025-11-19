<script setup>
import { onMounted } from 'vue'

onMounted(() => {
  // --- Title ---
  document.title = 'About Us | Leading UAE Marketing Agency for Digital Growth'

  // --- Meta Description ---
  const metaDescription = document.querySelector('meta[name="description"]')
  if (metaDescription) {
    metaDescription.setAttribute(
      'content',
      'Learn about our UAE marketing agency and how we deliver data-driven SEO, social media, and digital marketing solutions to help businesses grow across the UAE.'
    )
  } else {
    const newMeta = document.createElement('meta')
    newMeta.name = 'description'
    newMeta.content = 'Discover the story behind UAE Marketing Agency — a top-rated digital marketing company in UAE helping brands grow with SEO, social media, and paid advertising.'
    document.head.appendChild(newMeta)
  }

  // --- Meta Keywords ---
  const metaKeywords = document.querySelector('meta[name="keywords"]')
  const keywordsContent = 'digital marketing agecy, digital marketing agency, digital marketing agency near me , seo agency, search engine marketing, seo optimization service, google my business, google business, google business profile, google business listing, google my business profile, mybusiness, web development, website development, website development company, website developers, web development company, web development services, meta ads manager, ads manager meta, ad manager meta'

  if (metaKeywords) {
    metaKeywords.setAttribute('content', keywordsContent)
  } else {
    const newKeywords = document.createElement('meta')
    newKeywords.name = 'keywords'
    newKeywords.content = keywordsContent
    document.head.appendChild(newKeywords)
  }

  // --- JSON-LD Schema ---
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": "https://uae-marketing-agency.vercel.app/about#webpage",
        "url": "https://uae-marketing-agency.vercel.app/about",
        "name": "About UAE Marketing Agency | Trusted Digital Marketing Experts in UAE",
        "description": "Learn more about UAE Marketing Agency — a leading digital marketing company in UAE offering SEO, social media, and web development services to help brands grow online.",
        "inLanguage": "en",
        "isPartOf": {
          "@id": "https://uae-marketing-agency.vercel.app/#organization"
        },
        "primaryImageOfPage": {
          "@type": "ImageObject",
          "url": "https://uae-marketing-agency.vercel.app/logo.png"
        }
      },
      {
        "@type": "LocalBusiness",
        "@id": "https://uae-marketing-agency.vercel.app/#organization",
        "name": "UAE Marketing Agency",
        "url": "https://uae-marketing-agency.vercel.app/",
        "description": "UAE Marketing Agency is a top-rated digital marketing agency in the UAE providing SEO, social media marketing, PPC, and web development services for businesses seeking growth.",
        "image": "https://uae-marketing-agency.vercel.app/logo.png",
        "logo": "https://uae-marketing-agency.vercel.app/logo.png",
        "priceRange": "$200 - $1000",
        "telephone": "+971568894637",
        "contactPoint": {
          "@type": "ContactPoint",
          "contactType": "customer support",
          "url": "https://wa.me/971568894637",
          "telephone": "+971568894637",
          "availableLanguage": ["English", "Arabic"]
        },
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "Business Bay",
          "addressLocality": "Dubai",
          "addressRegion": "Dubai",
          "postalCode": "00000",
          "addressCountry": "AE"
        },
        "geo": {
          "@type": "GeoCoordinates",
          "latitude": 25.2048,
          "longitude": 55.2708
        },
        "hasMap": "https://maps.app.goo.gl/pvMDiNtFc3mhb2eJA",
        "sameAs": [
          "https://www.facebook.com/profile.php?id=61579908015868",
          "https://x.com/uaemarketingg",
          "https://www.pinterest.com/agencyuaemarketing/",
          "https://www.scoop.it/topic/uae-marketing-agency",
          "https://medium.com/@agencyuaemarketing",
          "https://clutch.co/profile/uae-marketing-agency?_gl=1*18f04ps*_gcl_au*NzE2MTAyNTA3LjE3NjE4NzA2NjIuMTI0MzkwMjkxLjE3NjE4NzIwNDkuMTc2MTg3MjMyNA..*FPAU*NzE2MTAyNTA3LjE3NjE4NzA2NjI.*_ga*NzYzNzk4NzE0LjE3NjE4NzA2NjI.*_ga_D0WFGX8X3V*czE3NjI1NDQyMDMkbzMkZzEkdDE3NjI1NDQyNjAkajMkbDAkaDE3MzQzNDE0MjQ."
        ],
        "founder": {
          "@type": "Person",
          "name": "Haq Daad",
          "jobTitle": "Founder & Digital Marketing Specialist"
        },
        "knowsAbout": [
          "SEO optimization",
          "Digital marketing",
          "Search engine marketing",
          "Social media marketing",
          "Google Ads management",
          "Content strategy",
          "Web development"
        ],
        "areaServed": {
          "@type": "Place",
          "name": "United Arab Emirates"
        },
        "openingHoursSpecification": [{
          "@type": "OpeningHoursSpecification",
          "dayOfWeek": [
            "Monday",
            "Tuesday",
            "Wednesday",
            "Thursday",
            "Friday",
            "Saturday"
          ],
          "opens": "09:00",
          "closes": "18:00"
        }],
        "aggregateRating": {
          "@type": "AggregateRating",
          "ratingValue": "5",
          "reviewCount": "32"
        },
        "serviceType": [
          "Digital Marketing",
          "SEO Services",
          "Social Media Marketing",
          "Search Engine Marketing",
          "Pay Per Click Advertising",
          "Web Design and Development"
        ]
      },
      {
        "@type": "FAQPage",
        "@id": "https://uae-marketing-agency.vercel.app/about#faq",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "What does a digital marketing agency do?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "A digital marketing agency helps businesses grow online through services like SEO, social media marketing, content creation, and paid advertising campaigns."
            }
          },
          {
            "@type": "Question",
            "name": "How can SEO help my business in the UAE?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "SEO improves your website’s visibility on Google, helping customers in the UAE find your business faster, increasing leads and sales organically."
            }
          },
          {
            "@type": "Question",
            "name": "What are the benefits of hiring a local digital marketing agency in UAE?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "A local agency understands the UAE market, culture, and customer behavior—allowing for more effective targeting and better ROI from your campaigns."
            }
          },
          {
            "@type": "Question",
            "name": "How much does web development cost in UAE?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Web development in the UAE typically ranges between $200 and $1000, depending on website size, design complexity, and required functionalities."
            }
          },
          {
            "@type": "Question",
            "name": "How do I choose the best digital marketing agency in UAE?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Choose an agency with proven results, transparent pricing, verified reviews, and expertise in SEO, social media, and performance marketing—like UAE Marketing Agency."
            }
          }
        ]
      }
    ]
  }

  const existingScript = document.querySelector('script[type="application/ld+json"]')
  if (existingScript) existingScript.remove()

  const script = document.createElement('script')
  script.type = 'application/ld+json'
  script.text = JSON.stringify(schema)
  document.head.appendChild(script)
})
</script>

<template>
  <div class="about-page">
    <section class="about-hero">
      <div class="container">
        <h1>About UAE Marketing Agency – Your Growth Partner in Digital Success</h1>
        <p>At UAE Marketing Agency, we’re more than just a digital marketing company — we’re your dedicated partner in online growth. Founded by Haq Daad, our team of experts combines creativity, data-driven strategy, and the latest marketing technologies to help businesses across the UAE thrive. From SEO and social media management to paid advertising and content strategy, we build customized solutions that deliver measurable results.</p>
      </div>
    </section>

    <section class="mission-vision">
      <div class="container">
        <div class="mission-card">
          <h2>Our Mission</h2>
          <p>To empower UAE businesses with innovative digital marketing strategies that drive growth, engagement, and
            profitability in the competitive global marketplace.</p>
        </div>
        <div class="vision-card">
          <h2>Our Vision</h2>
          <p>To be the leading digital marketing partner for businesses across the UAE, known for our expertise,
            creativity, and commitment to client success.</p>
        </div>
      </div>
    </section>

    <section class="team">
      <div class="container">
        <h2>Meet Our Team</h2>
        <div class="team-grid">
          <div class="team-member">
            <div class="member-avatar">MA</div>
            <h3>Mohsin Abbas</h3>
            <p>CEO, Founder & SEO Expert</p>
            <span class="expertise">Strategy & Leadership</span>
          </div>
          <a href="https://shaheer-siddiqi.vercel.app/" target="_blank">
            <div class="team-member">
              <div class="member-avatar">SS</div>
              <h3>Shaheer Siddiqi</h3>
              <p>Full Stack Developer</p>
              <span class="expertise">Web Developer</span>
            </div>
          </a>
          <div class="team-member">
            <div class="member-avatar">SS</div>
            <h3>Shoaib Sarfraz</h3>
            <p>Content Writer</p>
            <span class="expertise">Analysis and content writing</span>
          </div>
          <div class="team-member">
            <div class="member-avatar">SA</div>
            <h3>Syed Abdul Wahab</h3>
            <p>Design Expert</p>
            <span class="expertise">Web & Graphics Designing</span>
          </div>
        </div>
      </div>
    </section>

    <section class="values">
      <div class="container">
        <h2>Our Core Values</h2>
        <div class="values-grid">
          <div class="value-box">
            <h3><i class="fa-solid fa-bullseye" style="color: #ce1126;"></i> Excellence</h3>
            <p>We strive for excellence in every campaign and project we undertake.</p>
          </div>
          <div class="value-box">
            <h3><i class="fa-solid fa-handshake" style="color: #ce1126;"></i> Integrity</h3>
            <p>We believe in transparent communication and honest partnerships.</p>
          </div>
          <div class="value-box">
            <h3><i class="fa-solid fa-lightbulb" style="color: #ce1126;"></i> Innovation</h3>
            <p>We continuously innovate to stay ahead of digital marketing trends.</p>
          </div>
          <div class="value-box">
            <h3><i class="fa-solid fa-chart-line" style="color: #ce1126;"></i> Results-Driven</h3>
            <p>Our focus is always on delivering measurable results for our clients.</p>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped>
.about-hero {
  background: linear-gradient(135deg, var(--primary-green) 0%, var(--primary-black) 100%);
  color: var(--primary-white);
  padding: 10rem 2rem;
  text-align: center;
}

.about-hero h1 {
  font-size: 2.5rem;
  margin-bottom: 1rem;
}

.about-hero p {
  font-size: 1.1rem;
  max-width: 600px;
  margin: 0 auto;
}

.mission-vision {
  padding: 4rem 2rem;
  background-color: var(--bg-light);
}

.mission-vision .container {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
}

.mission-card,
.vision-card {
  background: var(--primary-white);
  padding: 2rem;
  border-radius: 8px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  border-left: 4px solid var(--primary-red);
}

.mission-card h2,
.vision-card h2 {
  color: var(--primary-red);
  margin-bottom: 1rem;
  font-size: 1.5rem;
}

.mission-card p,
.vision-card p {
  color: var(--text-light);
  line-height: 1.8;
}

.team {
  padding: 4rem 2rem;
}

.team h2 {
  text-align: center;
  font-size: 2rem;
  color: var(--primary-black);
  margin-bottom: 3rem;
}

.team-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 2rem;
}

.team-member {
  background: var(--primary-white);
  border: 2px solid var(--border-color);
  border-radius: 8px;
  padding: 2rem;
  text-align: center;
  transition: border-color 0.3s ease;
}

.team-member:hover {
  border-color: var(--primary-red);
}

.member-avatar {
  width: 80px;
  height: 80px;
  background: linear-gradient(135deg, var(--primary-red) 0%, var(--primary-green) 100%);
  color: var(--primary-white);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  font-size: 1.5rem;
  margin: 0 auto 1rem;
}

.team-member h3 {
  margin-bottom: 0.5rem;
  color: var(--primary-black);
}

.team-member p {
  color: var(--primary-red);
  font-weight: 500;
  margin-bottom: 0.5rem;
}

.expertise {
  display: inline-block;
  background-color: var(--bg-light);
  color: var(--text-light);
  padding: 0.25rem 0.75rem;
  border-radius: 20px;
  font-size: 0.85rem;
}

.values {
  padding: 4rem 2rem;
  background-color: var(--bg-light);
}

.values h2 {
  text-align: center;
  font-size: 2rem;
  color: var(--primary-black);
  margin-bottom: 3rem;
}

.values-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
}

.value-box {
  background: var(--primary-white);
  padding: 2rem;
  border-radius: 8px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  text-align: center;
}

.value-box h3 {
  color: var(--primary-green);
  margin-bottom: 1rem;
  font-size: 1.2rem;
}

.value-box p {
  color: var(--text-light);
}

@media (max-width: 768px) {
  .about-hero h1 {
    font-size: 2rem;
  }
}

@media (max-width: 375px) {
  .about-hero {
    padding: 2rem 1rem;
  }

  .about-hero h1 {
    font-size: 1.5rem;
    margin-bottom: 0.5rem;
  }

  .about-hero p {
    font-size: 0.95rem;
  }

  .mission-vision {
    padding: 2rem 1rem;
  }

  .mission-vision .container {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }

  .mission-card,
  .vision-card {
    padding: 1.5rem;
  }

  .mission-card h2,
  .vision-card h2 {
    font-size: 1.2rem;
    margin-bottom: 0.75rem;
  }

  .mission-card p,
  .vision-card p {
    font-size: 0.9rem;
  }

  .team {
    padding: 2rem 1rem;
  }

  .team h2 {
    font-size: 1.5rem;
    margin-bottom: 2rem;
  }

  .team-grid {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }

  .values {
    padding: 2rem 1rem;
  }

  .values h2 {
    font-size: 1.5rem;
    margin-bottom: 2rem;
  }

  .values-grid {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }

  .value-box {
    padding: 1.5rem;
  }

  .value-box h3 {
    font-size: 1rem;
  }

  .value-box p {
    font-size: 0.9rem;
  }
}
</style>