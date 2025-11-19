<script setup>
import { onMounted } from 'vue'

onMounted(() => {
    // --- Title ---
    document.title = 'Best SEO Agency Near Me| UAE Marketing Agency'

    // --- Meta Description ---
    const metaDescription = document.querySelector('meta[name="description"]')
    if (metaDescription) {
        metaDescription.setAttribute(
            'content',
            'We are the best seo agency working in overall in UAE , being partner with all leading businesses.'
        )
    } else {
        const newMeta = document.createElement('meta')
        newMeta.name = 'description'
        newMeta.content = 'UAE Marketing Agency offers top digital marketing services, SEO optimization, Google Business Profile management, web and website development, graphic design, logo creation, and content writing. Boost your business online today!'
        document.head.appendChild(newMeta)
    }

    // --- Meta Keywords ---
    const metaKeywords = document.querySelector('meta[name="keywords"]')
    const keywordsContent = 'digital marketing agecy, digital marketing agency, digital marketing agency near me, seo optimization service, seo agency, search engine marketing, google my business, google business, google business profile, google business listing, google my business profile, mybusiness, web development, website development, website development company, website developers, web development company, web development services, graphic designing, graphic design logo, graphic design companies, graphic, logo maker, business logo design, custom logo, article writer, content writer, ai writer, meta ads manager, ads manager meta, ad manager meta, google ads manager, ad manager, google ads manager account, gmb'

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
                "@id": "https://uae-marketing-agency.vercel.app/services#webpage",
                "url": "https://uae-marketing-agency.vercel.app/services",
                "name": "Digital Marketing, SEO, Web Development & Graphic Design Services in UAE",
                "description": "UAE Marketing Agency provides professional digital marketing, SEO optimization, web development, graphic design, content writing, and Google Business Profile services in UAE to grow your business online.",
                "inLanguage": "en",
                "isPartOf": {
                    "@id": "https://uae-marketing-agency.vercel.app/#organization"
                }
            },
            {
                "@type": "LocalBusiness",
                "@id": "https://uae-marketing-agency.vercel.app/#organization",
                "name": "UAE Marketing Agency",
                "url": "https://uae-marketing-agency.vercel.app/",
                "description": "UAE Marketing Agency is a top digital marketing agency in Dubai offering SEO, Google Business Profile management, web development, graphic design, and content writing services for businesses seeking online growth.",
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
                    "https://clutch.co/profile/uae-marketing-agency"
                ],
                "founder": {
                    "@type": "Person",
                    "name": "Haq Daad",
                    "jobTitle": "Founder & Digital Marketing Specialist"
                },
                "areaServed": {
                    "@type": "Place",
                    "name": "Dubai, UAE"
                }
            },
            {
                "@type": "Service",
                "name": "Digital Marketing Agency Services",
                "provider": { "@id": "https://uae-marketing-agency.vercel.app/#organization" },
                "description": "Professional digital marketing services including strategy, PPC, Meta Ads management, Google Ads, SEO, and social media marketing to boost your business online.",
                "serviceType": "Digital Marketing",
                "areaServed": "UAE",
                "offers": { "@type": "Offer", "priceCurrency": "USD", "price": "200-1000" }
            },
            {
                "@type": "Service",
                "name": "SEO Optimization Service",
                "provider": { "@id": "https://uae-marketing-agency.vercel.app/#organization" },
                "description": "SEO optimization service to improve website ranking, organic traffic, and search engine visibility for businesses in UAE.",
                "serviceType": "SEO",
                "areaServed": "UAE",
                "offers": { "@type": "Offer", "priceCurrency": "USD", "price": "200-1000" }
            },
            {
                "@type": "Service",
                "name": "Google Business Profile / GMB Management",
                "provider": { "@id": "https://uae-marketing-agency.vercel.app/#organization" },
                "description": "Manage your Google Business Profile, listing, and reviews to improve local search visibility and customer engagement in UAE.",
                "serviceType": "Google Business Profile",
                "areaServed": "UAE",
                "offers": { "@type": "Offer", "priceCurrency": "USD", "price": "200-1000" }
            },
            {
                "@type": "Service",
                "name": "Web Development & Website Development",
                "provider": { "@id": "https://uae-marketing-agency.vercel.app/#organization" },
                "description": "Responsive and SEO-friendly web development and website development services for businesses, including custom web applications and professional websites.",
                "serviceType": "Web Development",
                "areaServed": "UAE",
                "offers": { "@type": "Offer", "priceCurrency": "USD", "price": "200-1000" }
            },
            {
                "@type": "Service",
                "name": "Graphic Design & Logo Design",
                "provider": { "@id": "https://uae-marketing-agency.vercel.app/#organization" },
                "description": "Creative graphic design services including custom logos, business branding, and professional graphic design solutions for UAE businesses.",
                "serviceType": "Graphic Design",
                "areaServed": "UAE",
                "offers": { "@type": "Offer", "priceCurrency": "USD", "price": "200-1000" }
            },
            {
                "@type": "Service",
                "name": "Content Writing & AI Article Writing",
                "provider": { "@id": "https://uae-marketing-agency.vercel.app/#organization" },
                "description": "Professional content writing services including AI-assisted article writing, SEO content, blog posts, and copywriting for online growth in UAE.",
                "serviceType": "Content Writing",
                "areaServed": "UAE",
                "offers": { "@type": "Offer", "priceCurrency": "USD", "price": "200-1000" }
            },
            {
                "@type": "Service",
                "name": "Meta Ads & Google Ads Management",
                "provider": { "@id": "https://uae-marketing-agency.vercel.app/#organization" },
                "description": "Manage your Meta Ads, Google Ads, and PPC campaigns effectively to maximize ROI and online visibility for UAE businesses.",
                "serviceType": "Ads Management",
                "areaServed": "UAE",
                "offers": { "@type": "Offer", "priceCurrency": "USD", "price": "200-1000" }
            },
            {
                "@type": "FAQPage",
                "mainEntity": [
                    {
                        "@type": "Question",
                        "name": "Which digital marketing services are offered by UAE Marketing Agency?",
                        "acceptedAnswer": { "@type": "Answer", "text": "We provide SEO, web development, graphic design, content writing, Google Business Profile management, Meta Ads, and Google Ads services in UAE." }
                    },
                    {
                        "@type": "Question",
                        "name": "How can UAE Marketing Agency improve my website traffic?",
                        "acceptedAnswer": { "@type": "Answer", "text": "Through professional SEO optimization, content marketing, and Google Ads campaigns, we help businesses increase online visibility and traffic." }
                    },
                    {
                        "@type": "Question",
                        "name": "Does UAE Marketing Agency provide local SEO for Dubai businesses?",
                        "acceptedAnswer": { "@type": "Answer", "text": "Yes, we specialize in Google Business Profile management and local SEO strategies for Dubai and UAE businesses." }
                    },
                    {
                        "@type": "Question",
                        "name": "What is the cost of digital marketing services?",
                        "acceptedAnswer": { "@type": "Answer", "text": "Our services range from $200 to $1000 depending on the scope of work, including SEO, web development, graphic design, and ads management." }
                    },
                    {
                        "@type": "Question",
                        "name": "Who is the founder of UAE Marketing Agency?",
                        "acceptedAnswer": { "@type": "Answer", "text": "Haq Daad is the founder and digital marketing specialist leading the UAE Marketing Agency team." }
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

const services = [
    {
        id: 1,
        name: 'Seo Agency',
        icon: 'fa-solid fa-chart-bar',
        description: 'Boost your online visibility with our proven SEO agency services. We create tailored content that ranks and drives targeted traffic. Let our SEO agency prove strategies.',
        features: ['Keyword Research', 'On-page & Off-page Optimization', 'Link Building', 'Monthly Reports']
    },
    {
        id: 2,
        name: 'Local SEO',
        icon: 'fa-solid fa-map-pin',
        description: 'Get found by nearby customers with our expert Local SEO services. We optimize your business for maps searches, and local directories. Grow foot traffic and local queries with Local SEO search.',
        features: ['Local Keyword Optimization', 'Google Maps Optimization', 'Local Citation Building', 'Review Management']
    },
    {
        id: 3,
        name: 'GMB Creation',
        icon: 'fa-brands fa-google',
        description: 'Boost your local presence with our GMB Creation services for all niches. We set up and optimize your Google Business Profile for maximum visibility. Get expert GMB Creation support.',
        features: ['Complete Profile Setup', 'Photo & Video Optimization', 'Business Information Verification', 'Category Optimization']
    },
    {
        id: 4,
        name: 'Web Development services & courses',
        icon: 'fa-solid fa-code',
        description: 'Unlock your web potential with our Web Development services & courses. Whether you need a site or skills, our Web Development solutions deliver.',
        features: ['Responsive Design', 'Custom Development', 'E-commerce Solutions', 'Website Maintenance']
    },
    {
        id: 5,
        name: 'Graphic Designing',
        icon: 'fa-solid fa-palette',
        description: 'Stand out with stunning visuals through our expert Graphic Designing services. We craft logos, social media posts, and ads that amplify your brand identity with creative, professional Graphic Designing.',
        features: ['Logo Design', 'Brand Identity', 'Social Media Graphics', 'Marketing Materials']
    },
    {
        id: 6,
        name: 'Google & Meta Ads',
        icon: 'fa-solid fa-bullseye',
        description: 'Drive real results with our expert Google & Meta Ads services in the UAE and KSA. We create high-converting ad campaigns aligned with your marketing goals. Grow your reach and ROI with targeted Google & Meta Ads strategies.',
        features: ['Campaign Strategy', 'Ad Creation & Testing', 'Bid Management', 'Performance Analytics']
    },
    {
        id: 7,
        name: 'Content Writing',
        icon: 'fa-solid fa-pen',
        description: 'Engage your audience with high-quality, SEO friendly Content Writing services. We craft blogs, website copy, and articles that drive traffic and conversions. Boost your brand\'s voice with professional and impactful Content Writing.',
        features: ['Blog Writing', 'Website Copy', 'SEO Articles', 'Content Strategy']
    },
    {
        id: 8,
        name: 'Search Engine Marketing',
        icon: 'fa-solid fa-magnifying-glass',
        description: 'Maximize your online visibility with powerful Search Engine Marketing strategies. We drive targeted traffic through optimized paid search campaigns. Grow faster and smarter with expert Search Engine Marketing services.',
        features: ['Keyword Strategy', 'Ad Copy Optimization', 'Landing Page Optimization', 'Conversion Tracking']
    },
    {
        id: 9,
        name: 'Answer Engine Optimization',
        icon: 'fa-solid fa-lightbulb',
        description: 'Stay ahead with smart Answer Engine Optimization that targets voice and AI searches. We optimize your content to appear as direct answers across search platforms. Enhance visibility and credibility with expert Answer Engine Optimization services.',
        features: ['Content Optimization', 'AI Search Targeting', 'Voice Search Optimization', 'Answer Box Optimization']
    },
    {
        id: 10,
        name: 'Geo-Targeted Marketing',
        icon: 'fa-solid fa-map',
        description: 'Reach the right audience at the right place with precision Geo-Targeted Marketing. We tailor campaigns by location to boost local engagement and conversions. Drive results with data-driven Geo-Targeted Marketing strategies.',
        features: ['Location-Based Targeting', 'Regional Campaign Setup', 'Local Market Analysis', 'Geo-Fencing Ads']
    },
    {
        id: 11,
        name: 'SERP Optimization',
        icon: 'fa-solid fa-chart-line',
        description: 'Boost your website\'s ranking with expert SERP Optimization techniques. We enhance your content and metadata to dominate search engine results. Get more clicks and visibility through proven SERP Optimization strategies.',
        features: ['Meta Tag Optimization', 'Rich Snippet Implementation', 'Featured Snippet Targeting', 'SERP Tracking']
    },
    {
        id: 12,
        name: 'GMB Ranking',
        icon: 'fa-solid fa-ranking-star',
        description: 'Improve your local presence with our expert GMB Ranking services. We optimize your Google Business Profile to rank higher in local searches. Get more customers through enhanced visibility with professional GMB Ranking.',
        features: ['Ranking Optimization', 'Review Generation', 'Profile Enhancement', 'Local Dominance']
    },
    {
        id: 13,
        name: 'Guest Post Paid Service',
        icon: 'fa-solid fa-envelope',
        description: 'Boost your website authority with our reliable Guest Post Paid Service. We secure high-quality backlinks from trusted sites to improve your SEO. Grow your online presence through effective Guest Post Paid Service.',
        features: ['Link Placement', 'High Authority Sites', 'Content Creation', 'Backlink Reporting']
    }
]
</script>

<template>
    <div class="services-page">
        <section class="services-hero">
            <div class="container">
                <h1>Professional Digital Marketing & Web Solutions in UAE</h1>
                <p>Explore UAE Marketing Agency’s services including SEO optimization, search engine marketing, Google Business Profile management, web development, website development, graphic design, logo creation, and expert content writing. Grow your business online with our tailored digital solutions.</p>
            </div>
        </section>

        <section class="services-list">
            <div class="container">
                <div class="service-card" v-for="service in services" :key="service.id">
                    <div class="service-icon"><i :class="service.icon" style="color: #0c745b;"></i></div>
                    <h3>{{ service.name }}</h3>
                    <p>{{ service.description }}</p>
                    <ul class="service-features">
                        <li v-for="feature in service.features" :key="feature">✓ {{ feature }}</li>
                    </ul>
                </div>
            </div>
        </section>

        <section class="cta-section">
            <div class="container">
                <h2>Ready to Get Started?</h2>
                <p>Contact our team today to discuss how we can help your business thrive.</p>
                <router-link to="/contact" class="cta-button">Contact Us Now</router-link>
            </div>
        </section>
    </div>
</template>

<style scoped>
.services-hero {
    background: linear-gradient(135deg, var(--primary-red) 0%, var(--primary-black) 100%);
    color: var(--primary-white);
    padding: 10rem 2rem;
    text-align: center;
}

.services-hero h1 {
    font-size: 2.5rem;
    margin-bottom: 1rem;
}

.services-hero p {
    font-size: 1.1rem;
    max-width: 600px;
    margin: 0 auto;
}

.services-list {
    padding: 4rem 2rem;
}

.services-list .container {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    gap: 2rem;
}

.service-card {
    background: var(--primary-white);
    border: 2px solid var(--border-color);
    border-radius: 8px;
    padding: 2rem;
    transition: all 0.3s ease;
}

.service-card:hover {
    border-color: var(--primary-red);
    box-shadow: 0 8px 20px rgba(206, 17, 38, 0.1);
    transform: translateY(-5px);
}

.service-icon {
    font-size: 3rem;
    margin-bottom: 1rem;
}

.service-card h3 {
    color: var(--primary-red);
    margin-bottom: 1rem;
    font-size: 1.3rem;
}

.service-card p {
    color: var(--text-light);
    margin-bottom: 1.5rem;
    line-height: 1.6;
}

.service-features {
    list-style: none;
}

.service-features li {
    color: var(--text-dark);
    margin-bottom: 0.5rem;
    font-size: 0.95rem;
    padding-left: 0.5rem;
}

.cta-section {
    background-color: var(--bg-light);
    padding: 3rem 2rem;
    text-align: center;
}

.cta-section h2 {
    color: var(--primary-black);
    font-size: 2rem;
    margin-bottom: 1rem;
}

.cta-section p {
    color: var(--text-light);
    font-size: 1.1rem;
    margin-bottom: 2rem;
    max-width: 600px;
    margin-left: auto;
    margin-right: auto;
}

.cta-button {
    display: inline-block;
    background-color: var(--primary-red);
    color: var(--primary-white);
    padding: 1rem 2rem;
    border-radius: 50px;
    font-weight: bold;
    transition: transform 0.3s ease, box-shadow 0.3s ease;
    font-size: 1rem;
}

.cta-button:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 20px rgba(206, 17, 38, 0.3);
}

@media (max-width: 768px) {
    .services-hero h1 {
        font-size: 2rem;
    }

    .cta-section h2 {
        font-size: 1.5rem;
    }

    .services-list {
        padding: 4rem 2rem;
    }

    .service-card {
        background: var(--primary-white);
        border: 2px solid var(--border-color);
        border-radius: 8px;
        padding: 2rem;
        transition: all 0.3s ease;
    }

    .service-card:hover {
        border-color: var(--primary-red);
        box-shadow: 0 8px 20px rgba(206, 17, 38, 0.1);
        transform: translateY(-5px);
    }

    .service-icon {
        font-size: 3rem;
        margin-bottom: 1rem;
    }

    .service-card h3 {
        color: var(--primary-red);
        margin-bottom: 1rem;
        font-size: 1.3rem;
    }

    .service-card p {
        color: var(--text-light);
        margin-bottom: 1.5rem;
        line-height: 1.6;
    }

    .service-features {
        list-style: none;
    }

    .service-features li {
        color: var(--text-dark);
        margin-bottom: 0.5rem;
        font-size: 0.95rem;
        padding-left: 0.5rem;
    }
}

@media (max-width: 375px) {
    .services-hero {
        padding: 2rem 1rem;
    }

    .services-hero h1 {
        font-size: 1.5rem;
        margin-bottom: 0.5rem;
    }

    .services-hero p {
        font-size: 0.95rem;
    }

    .services-list {
        padding: 2rem 1rem;
    }

    .services-list .container {
        grid-template-columns: 1fr;
        gap: 1.5rem;
    }

    .service-card {
        padding: 1.5rem;
    }

    .service-icon {
        font-size: 2.5rem;
        margin-bottom: 0.75rem;
    }

    .service-card h3 {
        font-size: 1.1rem;
        margin-bottom: 0.75rem;
    }

    .service-card p {
        font-size: 0.9rem;
        margin-bottom: 1rem;
    }

    .service-features li {
        font-size: 0.85rem;
        margin-bottom: 0.35rem;
    }

    .cta-section {
        padding: 2rem 1rem;
    }

    .cta-section h2 {
        font-size: 1.3rem;
        margin-bottom: 0.75rem;
    }

    .cta-section p {
        font-size: 0.95rem;
        margin-bottom: 1.5rem;
    }

    .cta-button {
        padding: 0.75rem 1.5rem;
        font-size: 0.9rem;
    }
}
</style>