<!-- views/BlogDetail.vue -->
<template>
  <main>
    <!-- Blog Header -->
    <section class="blog-header">
      <div class="container">
        <router-link to="/" class="back-link">← Back to Home</router-link>
        <h1 class="blog-title">{{ blog.title }}</h1>
        <div class="blog-meta">
          <span class="author">By {{ blog.author }}</span>
          <span class="separator">•</span>
          <span class="date">{{ formatDate(blog.publishedAt) }}</span>
          <span class="separator">•</span>
          <span class="read-time">{{ blog.readTime }} min read</span>
        </div>
      </div>
    </section>

    <!-- Featured Image -->
    <section class="blog-featured-image" v-if="blog.image">
      <div class="container">
        <img :src="blog.image" :alt="blog.title" class="featured-img">
      </div>
    </section>

    <!-- Blog Content -->
    <section class="blog-content">
      <div class="container">
        <article class="article-body">
          <p v-for="(paragraph, index) in blog.content" :key="index" class="paragraph">
            {{ paragraph }}
          </p>
        </article>

        <!-- Tags -->
        <div class="blog-tags" v-if="blog.tags">
          <span v-for="tag in blog.tags" :key="tag" class="tag">
            {{ tag }}
          </span>
        </div>

        <!-- Author Bio -->
        <div class="author-bio card">
          <div class="author-bio-content">
            <h3>About the Author</h3>
            <p>{{ blog.authorBio }}</p>
          </div>
        </div>

        <!-- Related Posts -->
        <section class="related-posts" v-if="blog.relatedPosts">
          <h2>Related Articles</h2>
          <div class="posts-grid">
            <article v-for="post in blog.relatedPosts" :key="post.id" class="related-post-card card">
              <h4>{{ post.title }}</h4>
              <p>{{ post.excerpt }}</p>
              <router-link :to="`/blog/${post.slug}`" class="read-link">Read Article →</router-link>
            </article>
          </div>
        </section>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="cta-section">
      <div class="container">
        <h2>Ready to work with us?</h2>
        <p>Get in touch and let's create something amazing together.</p>
        <router-link to="/#contact" class="btn-primary">Contact Us</router-link>
      </div>
    </section>
  </main>
</template>

<script>
export default {
  name: 'BlogDetail',
  data() {
    return {
      blog: {
        id: 1,
        title: 'Getting Started with Your Digital Journey',
        author: 'Ahmed Al Mansouri',
        authorBio: 'Ahmed is a digital strategist with 10+ years of experience helping businesses transform their online presence.',
        publishedAt: new Date('2024-01-15'),
        readTime: 5,
        image: 'https://via.placeholder.com/1200x400',
        tags: ['Digital', 'Strategy', 'Business'],
        content: [
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
          'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
          'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
          'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        ],
        relatedPosts: [
          {
            id: 2,
            slug: 'blog-2',
            title: 'Top 5 Digital Marketing Trends',
            excerpt: 'Discover the latest trends shaping the digital marketing landscape...',
          },
          {
            id: 3,
            slug: 'blog-3',
            title: 'Building Your Brand Online',
            excerpt: 'Learn how to create a strong brand presence in the digital world...',
          },
        ],
      },
    }
  },
  methods: {
    formatDate(date) {
      return new Date(date).toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
      })
    },
  },
}
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
  background: linear-gradient(135deg, rgba(255, 0, 0, 0.05) 0%, rgba(0, 115, 47, 0.05) 100%);
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
  color: var(--muted);
}

.separator {
  color: var(--muted);
}

.blog-featured-image {
  padding: 24px 16px;
  background: linear-gradient(135deg, rgba(255, 0, 0, 0.02) 0%, rgba(0, 115, 47, 0.02) 100%);
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

.paragraph {
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
  background: linear-gradient(135deg, rgba(255, 0, 0, 0.1) 0%, rgba(0, 115, 47, 0.1) 100%);
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

.cta-section .btn-primary:hover {
  background: white;
  color: var(--primary);
  border-color: white;
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