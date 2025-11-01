<script setup>
import { onMounted } from 'vue'

onMounted(() => {
    document.title = 'Home - UAE Marketing Agency'
    const metaDescription = document.querySelector('meta[name="description"]')
    if (metaDescription) {
        metaDescription.setAttribute('content', 'Welcome to UAE Marketing Agency. Boost your digital presence with our expert marketing services.')
    }
})

const featuredServices = [
    {
        id: 1,
        title: 'Seo Agency',
        description: 'Boost your online visibility with our expert SEO agency services. We create tailored content that ranks and drives targeted traffic. Let our SEO agency elevate your brand with proven strategies.',
        icon: 'fa-solid fa-magnifying-glass'
    },
    {
        id: 2,
        title: 'Web Development services & courses',
        description: 'Unlock your digital potential with our Web Development services & courses. We build high-performing websites and teach you how to create your own. Whether you need a site or skills, our Web Development solutions deliver',
        icon: 'fa-solid fa-code'
    },
    {
        id: 3,
        title: 'Graphic Designing',
        description: 'Stand out with stunning visuals through our expert Graphic Designing services. We craft logos, social media posts, and branding that captures attention. Boost your brand identity with creative, professional Graphic Designing',
        icon: 'fa-brands fa-figma'
    }
]


const featuredBlogs = [
    {
        id: 1,
        title: 'Top 10 SEO Trends for 2024',
        excerpt: 'Discover the most important SEO strategies that will dominate the digital landscape in 2024.',
        image: '📈',
        date: new Date('2024-01-15')
    },
    {
        id: 3,
        title: 'Content Marketing Strategy Guide',
        excerpt: 'A comprehensive guide to creating content that converts and builds lasting customer relationships.',
        image: '✍️',
        date: new Date('2024-01-10')
    },
    {
        id: 5,
        title: 'The Future of Digital Advertising',
        excerpt: 'Explore emerging trends in digital advertising and how to stay ahead of the competition.',
        image: '🚀',
        date: new Date('2024-01-05')
    }
]

const formatDate = (date) => {
    return date.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })
}
</script>

<template>
    <div class="home-page">
        <section class="hero">
            <div class="hero-content">
                <h1>Grow Faster with Data-Driven SEO and High-Conversion Ads</h1>
                <p>We help ambitious brands dominate search, scale paid media, and convert clicks into customers.
                </p>
                <router-link to="/contact" class="cta-button">Get Started Today</router-link>
            </div>
        </section>

        <section class="highlights">
            <div class="container">
                <div class="highlight-cards">
                    <div class="card">
                        <div class="card-icon"><i class="fa-solid fa-chart-simple" style="color: #0b735b;"></i></div>
                        <h3>Data-Driven Strategy</h3>
                        <p>We leverage analytics to create targeted campaigns that deliver measurable results.</p>
                    </div>
                    <div class="card">
                        <div class="card-icon"><i class="fa-solid fa-people-group" style="color: #0b735b;"></i></div>
                        <h3>Expert Team</h3>
                        <p>Our certified professionals have years of experience in digital marketing excellence.</p>
                    </div>
                    <div class="card">
                        <div class="card-icon"><i class="fa-solid fa-arrow-up-right-dots" style="color: #0b735b;"></i>
                        </div>
                        <h3>Rapid Growth</h3>
                        <p>We help businesses scale quickly with proven digital transformation strategies.</p>
                    </div>
                </div>
            </div>
        </section>

        <!-- Added Featured Services Section -->
        <section class="featured-services">
            <div class="container">
                <h2>Our Featured Services</h2>
                <p class="section-subtitle">Explore our core services that drive business growth</p>
                <div class="services-grid">
                    <router-link v-for="service in featuredServices" :key="service.id" to="/services"
                        class="service-card">
                        <div class="service-icon"><i :class="service.icon" style="color: #0c745b;"></i></div>
                        <h3>{{ service.title }}</h3>
                        <p>{{ service.description }}</p>
                    </router-link>
                </div>
                <div class="view-all-blogs">
                    <router-link to="/services" class="view-all-button">View All Services</router-link>
                </div>
            </div>
        </section>

        <!-- Added Locations Section -->
        <section class="locations">
            <div class="container">
                <h2>Our Global Presence</h2>
                <p class="section-subtitle">Serving clients across multiple continents</p>
                <div class="locations-grid">

                    <!-- UAE Office -->
                    <div class="location-card">
                        <div class="location-icon">
                            <i class="fa-solid fa-building-user" style="color: #0c745b;"></i>
                        </div>
                        <h3>UAE Office</h3>
                        <p class="city">Abu Dhabi, United Arab Emirates</p>
                        <p class="address">15 - 14th St - Deira</p>

                        <div class="contact-details">
                            <p class="phone">
                                <span class="detail-label">
                                    <i class="fa-solid fa-phone-volume" style="color: #0b735b;"></i>
                                </span>
                                <a href="https://wa.me/971568894637"
                                    target="_blank">+971 (5) 688-94637</a>
                            </p>
                            <p class="email">
                                <span class="detail-label">
                                    <i class="fa-solid fa-envelope" style="color: #0b735b;"></i>
                                </span>
                                <a href="mailto:agencyuaemarketing@gmail.com">agencyuaemarketing@gmail.com</a>
                            </p>
                        </div>
                    </div>

                    <!-- USA Office -->
                    <div class="location-card">
                        <div class="location-icon">
                            <i class="fa-solid fa-building-circle-check" style="color: #0c745b;"></i>
                        </div>
                        <h3>USA Office</h3>
                        <p class="city">North Carolina, United States</p>
                        <p class="address">115 S Horner Blvd, Sanford, 27330</p>

                        <div class="contact-details">
                            <p class="phone">
                                <span class="detail-label">
                                    <i class="fa-solid fa-phone-volume" style="color: #0b735b;"></i>
                                </span>
                                <a href="tel:+17272974842">+1 (727) 297-4842</a>
                            </p>
                            <p class="email">
                                <span class="detail-label">
                                    <i class="fa-solid fa-envelope" style="color: #0b735b;"></i>
                                </span>
                                <a href="mailto:usadigitalagency@gmail.com">usadigitalagency@gmail.com</a>
                            </p>
                        </div>
                    </div>

                </div>

            </div>
        </section>

        <!-- Added Featured Blogs Section -->
        <!-- <section class="featured-blogs">

            <div class="container">
                <h2>Featured Blog Posts</h2>
                <p class="section-subtitle">Stay updated with our latest insights</p>
                <div class="blogs-grid">
                    <router-link v-for="blog in featuredBlogs" :key="blog.id" :to="`/blog/${blog.id}`"
                        class="featured-blog-card">
                        <div class="blog-image">{{ blog.image }}</div>
                        <div class="blog-info">
                            <p class="blog-date">{{ formatDate(blog.date) }}</p>
                            <h3>{{ blog.title }}</h3>
                            <p class="blog-excerpt">{{ blog.excerpt }}</p>
                            <span class="read-more">Read Full Article →</span>
                        </div>
                    </router-link>
                </div>
                <div class="view-all-blogs">
                    <router-link to="/blogs" class="view-all-button">View All Blogs</router-link>
                </div>
            </div>
        </section> -->

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
.hero {
    background: linear-gradient(135deg, var(--primary-red) 0%, var(--primary-green) 100%);
    color: var(--primary-white);
    padding: 8rem 2rem;
    text-align: center;
    min-height: 500px;
    display: flex;
    align-items: center;
    justify-content: center;
}

.hero-content h1 {
    font-size: 3rem;
    margin-bottom: 1rem;
    font-weight: bold;
}

.hero-content p {
    font-size: 1.3rem;
    margin-bottom: 2rem;
    max-width: 600px;
    margin-left: auto;
    margin-right: auto;
}

.cta-button {
    display: inline-block;
    background-color: var(--primary-white);
    color: var(--primary-red);
    padding: 1rem 2rem;
    border-radius: 50px;
    font-weight: bold;
    transition: transform 0.3s ease, box-shadow 0.3s ease;
    font-size: 1rem;
    text-decoration: none;
}

.cta-button:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.2);
}

.highlights {
    padding: 4rem 2rem;
    background-color: var(--bg-light);
}

.highlight-cards {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    gap: 2rem;
}

.card {
    background: var(--primary-white);
    padding: 2rem;
    border-radius: 8px;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
    text-align: center;
    transition: transform 0.3s ease;
}

.card:hover {
    transform: translateY(-5px);
}

.card-icon {
    font-size: 3rem;
    margin-bottom: 1rem;
}

.card h3 {
    color: var(--primary-red);
    margin-bottom: 0.5rem;
    font-size: 1.3rem;
}

.card p {
    color: var(--text-light);
    line-height: 1.6;
}

/* Added Featured Services Section Styles */
.featured-services {
    padding: 4rem 2rem;
    background-color: var(--primary-white);
}

.featured-services .container {
    max-width: 1200px;
    margin: 0 auto;
}

.featured-services h2 {
    text-align: center;
    font-size: 2.5rem;
    color: var(--primary-black);
    margin-bottom: 0.5rem;
}

.section-subtitle {
    text-align: center;
    color: var(--text-light);
    font-size: 1.1rem;
    margin-bottom: 3rem;
}

.services-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 2rem;
}

.service-card {
    background: linear-gradient(135deg, #f5f5f5 0%, #ffffff 100%);
    padding: 2rem;
    border-radius: 8px;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
    transition: transform 0.3s ease, box-shadow 0.3s ease;
    text-decoration: none;
    border-left: 4px solid var(--primary-red);
    display: block;
}

.service-card:hover {
    transform: translateY(-8px);
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.12);
}

.service-icon {
    font-size: 3rem;
    margin-bottom: 1rem;
}

.service-card h3 {
    color: var(--primary-black);
    margin-bottom: 0.5rem;
    font-size: 1.4rem;
}

.service-card p {
    color: var(--text-light);
    line-height: 1.6;
    margin-bottom: 1rem;
}

.learn-more {
    color: var(--primary-red);
    font-weight: 600;
    transition: color 0.3s ease;
}

.service-card:hover .learn-more {
    color: var(--primary-green);
}

.locations {
    padding: 4rem 2rem;
    background-color: var(--bg-light);
}

.locations .container {
    max-width: 1200px;
    margin: 0 auto;
}

.locations h2 {
    text-align: center;
    font-size: 2.5rem;
    color: var(--primary-black);
    margin-bottom: 0.5rem;
}

.locations-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    gap: 2rem;
    margin-top: 2rem;
}

.location-card {
    background: var(--primary-white);
    padding: 2rem;
    border-radius: 8px;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
    text-align: center;
    transition: transform 0.3s ease;
}

.location-card:hover {
    transform: translateY(-5px);
}

.location-icon {
    font-size: 3.5rem;
    margin-bottom: 1rem;
}

.location-card h3 {
    color: var(--primary-black);
    font-size: 1.5rem;
    margin-bottom: 0.5rem;
}

.location-card .city {
    color: var(--primary-red);
    font-weight: 600;
    margin-bottom: 0.5rem;
}

.location-card .address {
    color: var(--text-light);
    margin-bottom: 1.5rem;
    font-size: 0.95rem;
}

.contact-details {
    margin-bottom: 1.5rem;
    padding: 1rem 0;
    border-top: 1px solid #f0f0f0;
    border-bottom: 1px solid #f0f0f0;
}

.contact-details p {
    margin: 0.75rem 0;
    font-size: 0.95rem;
    color: var(--text-light);
}

.detail-label {
    margin-right: 0.5rem;
}

.contact-details a {
    color: var(--primary-red);
    text-decoration: none;
    font-weight: 500;
    transition: color 0.3s ease;
}

.contact-details a:hover {
    color: var(--primary-green);
    text-decoration: underline;
}

.contact-location {
    display: inline-block;
    color: var(--primary-white);
    background-color: var(--primary-red);
    padding: 0.75rem 1.5rem;
    border-radius: 50px;
    font-weight: 600;
    transition: background-color 0.3s ease;
    text-decoration: none;
}

.contact-location:hover {
    background-color: var(--primary-green);
}

/* Added Featured Blogs Section Styles */
.featured-blogs {
    padding: 4rem 2rem;
    background-color: var(--primary-white);
}

.featured-blogs .container {
    max-width: 1200px;
    margin: 0 auto;
}

.featured-blogs h2 {
    text-align: center;
    font-size: 2.5rem;
    color: var(--primary-black);
    margin-bottom: 0.5rem;
}

.blogs-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 2rem;
    margin-top: 2rem;
}

.featured-blog-card {
    background: var(--primary-white);
    border-radius: 8px;
    overflow: hidden;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
    transition: transform 0.3s ease, box-shadow 0.3s ease;
    text-decoration: none;
    display: block;
}

.featured-blog-card:hover {
    transform: translateY(-8px);
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.15);
}

.featured-blog-card .blog-image {
    background: linear-gradient(135deg, var(--primary-red) 0%, var(--primary-green) 100%);
    color: var(--primary-white);
    height: 200px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 4rem;
}

.featured-blog-card .blog-info {
    padding: 1.5rem;
}

.featured-blog-card .blog-date {
    color: var(--primary-red);
    font-size: 0.85rem;
    font-weight: 600;
    margin-bottom: 0.5rem;
}

.featured-blog-card h3 {
    color: var(--primary-black);
    margin-bottom: 0.75rem;
    font-size: 1.2rem;
    line-height: 1.4;
}

.featured-blog-card .blog-excerpt {
    color: var(--text-light);
    font-size: 0.95rem;
    line-height: 1.6;
    margin-bottom: 1rem;
}

.featured-blog-card .read-more {
    color: var(--primary-red);
    font-weight: 600;
    transition: color 0.3s ease;
}

.featured-blog-card:hover .read-more {
    color: var(--primary-green);
}

.view-all-blogs {
    text-align: center;
    margin-top: 2rem;
}

.view-all-button {
    display: inline-block;
    color: var(--primary-white);
    background-color: var(--primary-red);
    padding: 1rem 2rem;
    border-radius: 50px;
    font-weight: 600;
    transition: background-color 0.3s ease;
    text-decoration: none;
}

.view-all-button:hover {
    background-color: var(--primary-green);
}

.cta-section {
    background-color: var(--primary-white);
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
    .hero-content h1 {
        font-size: 2rem;
    }

    .hero-content p {
        font-size: 1rem;
    }

    .hero {
        padding: 4rem 2rem;
        min-height: 350px;
    }

    .featured-services h2,
    .locations h2,
    .featured-blogs h2 {
        font-size: 1.8rem;
    }

    .blogs-grid,
    .services-grid,
    .locations-grid {
        grid-template-columns: 1fr;
    }

    .cta-section h2 {
        font-size: 1.5rem;
    }


    @media (max-width: 375px) {
        .highlights {
            padding: 4rem 0rem;
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
}
</style>
