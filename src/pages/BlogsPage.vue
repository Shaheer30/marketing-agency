<script setup>
import { onMounted } from 'vue'

onMounted(() => {
  document.title = 'Blog - UAE Marketing Agency'
  const metaDescription = document.querySelector('meta[name="description"]')
  if (metaDescription) {
    metaDescription.setAttribute('content', 'Read insightful blog posts about digital marketing trends and strategies.')
  }
})

const blogs = [
  {
    id: 1,
    title: 'Top 10 SEO Trends for 2024',
    excerpt: 'Discover the most important SEO strategies that will dominate the digital landscape in 2024.',
    image: '📈',
    date: new Date('2024-01-15'),
    route: '/blogs/Blog1'
  },
  // {
  //   id: 2,
  //   title: 'Social Media Marketing Best Practices',
  //   excerpt: 'Learn how to leverage social platforms effectively to grow your business and engage customers.',
  //   image: '📱',
  //   date: new Date('2024-01-12'),
  //   route: '/blog/social-media-marketing-best-practices'
  // },
  // {
  //   id: 3,
  //   title: 'Content Marketing Strategy Guide',
  //   excerpt: 'A comprehensive guide to creating content that converts and builds lasting customer relationships.',
  //   image: '✍️',
  //   date: new Date('2024-01-10'),
  //   route: '/blog/content-marketing-strategy-guide'
  // },
  // {
  //   id: 4,
  //   title: 'Email Marketing Campaign Best Practices',
  //   excerpt: 'Maximize your email ROI with these proven strategies and techniques for effective campaigns.',
  //   image: '📧',
  //   date: new Date('2024-01-08'),
  //   route: '/blog/email-marketing-campaign-best-practices'
  // },
  // {
  //   id: 5,
  //   title: 'The Future of Digital Advertising',
  //   excerpt: 'Explore emerging trends in digital advertising and how to stay ahead of the competition.',
  //   image: '🚀',
  //   date: new Date('2024-01-05'),
  //   route: '/blog/the-future-of-digital-advertising'
  // },
  // {
  //   id: 6,
  //   title: 'Building a Strong Brand Identity',
  //   excerpt: 'Learn how to create a memorable brand that resonates with your target audience in the UAE market.',
  //   image: '🏆',
  //   date: new Date('2024-01-02'),
  //   route: '/blog/building-strong-brand-identity'
  // }
]

const formatDate = (date) => {
  return date.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })
}
</script>

<template>
  <div class="blogs-page">
    <section class="blogs-hero">
      <div class="container">
        <h1>Our Blog</h1>
        <p>Stay updated with the latest digital marketing trends and strategies.</p>
      </div>
    </section>

    <section class="blogs-list">
      <div class="container">
        <!-- Updated blog cards to link to detail page using route field -->
        <router-link v-for="blog in blogs" :key="blog.id" :to="blog.route" class="blog-card">
          <div class="blog-image">{{ blog.image }}</div>
          <div class="blog-content">
            <div class="blog-date">{{ formatDate(blog.date) }}</div>
            <h3>{{ blog.title }}</h3>
            <p>{{ blog.excerpt }}</p>
            <a class="read-more">Read More →</a>
          </div>
        </router-link>
      </div>
    </section>
  </div>
</template>

<style scoped>
.blogs-hero {
  background: linear-gradient(135deg, var(--primary-green) 0%, var(--primary-red) 100%);
  color: var(--primary-white);
  padding: 10rem 2rem;
  text-align: center;
}

.blogs-hero h1 {
  font-size: 2.5rem;
  margin-bottom: 1rem;
}

.blogs-hero p {
  font-size: 1.1rem;
  max-width: 600px;
  margin: 0 auto;
}

.blogs-list {
  padding: 4rem 2rem;
}

.blogs-list .container {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 2rem;
}

.blog-card {
  background: var(--primary-white);
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  cursor: pointer;
  text-decoration: none;
  display: block;
}

.blog-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.15);
}

.blog-image {
  background: linear-gradient(135deg, var(--primary-red) 0%, var(--primary-green) 100%);
  color: var(--primary-white);
  height: 200px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 4rem;
}

.blog-content {
  padding: 1.5rem;
}

.blog-date {
  color: var(--primary-red);
  font-size: 0.85rem;
  font-weight: 600;
  margin-bottom: 0.5rem;
}

.blog-card h3 {
  color: var(--primary-black);
  margin-bottom: 0.75rem;
  font-size: 1.2rem;
  line-height: 1.4;
}

.blog-card p {
  color: var(--text-light);
  font-size: 0.95rem;
  line-height: 1.6;
  margin-bottom: 1rem;
}

.read-more {
  color: var(--primary-red);
  font-weight: 600;
  transition: color 0.3s ease;
}

.blog-card:hover .read-more {
  color: var(--primary-green);
}

@media (max-width: 768px) {
  .blogs-hero h1 {
    font-size: 2rem;
  }

  .blogs-list .container {
    grid-template-columns: 1fr;
  }
}
</style>