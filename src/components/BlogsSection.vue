<template>
  <div class="container">
    <header class="section-head">
      <h2>Blogs/News Update</h2>
      <p class="muted">Insights and strategies to grow your business.</p>
    </header>

    <div class="slider-wrapper">
      <div class="slider" :style="{ transform: `translateX(-${currentIndex * (100 / itemsPerView)}%)` }">
        <article v-for="(item, idx) in items" :key="idx" class="slide">
          <div class="blog-card">
            <div class="blog-image">
              <img :src="item.img" :alt="item.title" />
            </div>
            <div class="blog-content">
              <p class="date">{{ item.date }}</p>
              <h3>{{ item.title }}</h3>
              <p class="excerpt">{{ item.excerpt }}</p>
              <router-link :to="`/blog/${item.slug}`" class="read-more">Read →</router-link>
            </div>
          </div>
        </article>
      </div>

      <div class="controls">
        <button @click="prevSlide" class="nav-btn" aria-label="Previous">
          <span>←</span>
        </button>
        <div class="indicators">
          <button
            v-for="(_, idx) in totalSlides"
            :key="idx"
            @click="currentIndex = idx"
            :class="['indicator', { active: idx === currentIndex }]"
            :aria-label="`Go to slide ${idx + 1}`"
          />
        </div>
        <button @click="nextSlide" class="nav-btn" aria-label="Next">
          <span>→</span>
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'BlogSlider',
  data() {
    return {
      currentIndex: 0,
      itemsPerView: 3,
      items: [
        {
          title: 'Professional SEO Service & Search Engine Marketing | Trusted SEO Agency',
          excerpt: 'Enhance your online visibility with our professional SEO service and search engine marketing solutions from a trusted SEO agency',
          date: 'Oct 28, 2025',
          img: '/images/blogs/professional-seo-service-search-engine-marketing.png',
          slug: 'ProfessionalSeoServiceSearchEngineMarketing'
        },
        {
          title: 'Local SEO Domination Playbook',
          excerpt: 'Master the map pack with proven ranking frameworks.',
          date: 'Oct 10, 2025',
          category: 'Local SEO',
          img: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=600&auto=format&fit=crop'
        },
        {
          title: 'Maximizing ROAS with Creative Testing',
          excerpt: 'Deliver 4x+ returns through data-driven optimization.',
          date: 'Oct 5, 2025',
          category: 'Paid Media',
          img: 'https://images.unsplash.com/photo-1460925895917-adf4e565db18?q=80&w=600&auto=format&fit=crop'
        },
        {
          title: 'Understanding LTV-Based Targeting',
          excerpt: 'Build sustainable growth with lifetime value metrics.',
          date: 'Sep 28, 2025',
          category: 'Strategy',
          img: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=600&auto=format&fit=crop'
        },
        {
          title: 'Content Marketing Best Practices',
          excerpt: 'Create content that ranks and converts consistently.',
          date: 'Sep 20, 2025',
          category: 'Content',
          img: 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?q=80&w=600&auto=format&fit=crop'
        },
        {
          title: 'Analytics Deep Dive: Data That Matters',
          excerpt: 'Focus on metrics that actually drive business results.',
          date: 'Sep 15, 2025',
          category: 'Analytics',
          img: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=600&auto=format&fit=crop'
        }
      ]
    }
  },
  computed: {
    totalSlides() {
      return Math.ceil(this.items.length / this.itemsPerView);
    }
  },
  methods: {
    nextSlide() {
      if (this.currentIndex < this.totalSlides - 1) {
        this.currentIndex++;
      }
    },
    prevSlide() {
      if (this.currentIndex > 0) {
        this.currentIndex--;
      }
    },
    updateItemsPerView() {
      const width = window.innerWidth;
      if (width >= 1200) {
        this.itemsPerView = 3;
      } else if (width >= 768) {
        this.itemsPerView = 2;
      } else {
        this.itemsPerView = 1;
      }
      this.currentIndex = 0;
    }
  },
  mounted() {
    this.updateItemsPerView();
    window.addEventListener('resize', this.updateItemsPerView);
  },
  beforeUnmount() {
    window.removeEventListener('resize', this.updateItemsPerView);
  }
}
</script>

<style scoped>
.section-head {
  text-align: center;
  margin-bottom: 48px;
}
.section-head h2 { 
  font-size: 36px;
  font-weight: 700;
  margin: 0 0 12px; 
  color: #1a1a1a;
}
.section-head .muted { 
  font-size: 16px;
  color: #6b7280;
}

.slider-wrapper {
  position: relative;
  overflow: hidden;
}

.slider {
  display: flex;
  transition: transform 0.6s cubic-bezier(0.4, 0, 0.2, 1);
  gap: 16px;
}

.slide {
  flex: 0 0 calc(100% / 1);
  min-width: calc(100% / 1);
  padding: 2px;
}

.blog-card {
  background: white;
  border: 1px solid #e5e7eb;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
  transition: all 0.3s ease;
  height: 100%;
  display: flex;
  flex-direction: column;
}

.blog-card:hover {
  box-shadow: 0 8px 12px rgba(0, 0, 0, 0.1);
  border-color: #d1d5db;
}

.blog-image {
  position: relative;
  width: 100%;
  aspect-ratio: 16/9;
  overflow: hidden;
  background: #f3f4f6;
}

.blog-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.4s ease;
}

.blog-card:hover .blog-image img {
  transform: scale(1.06);
}

.category {
  position: absolute;
  top: 10px;
  left: 10px;
  background: #00732f;
  color: white;
  font-size: 10px;
  font-weight: 600;
  padding: 3px 8px;
  border-radius: 12px;
  text-transform: uppercase;
  letter-spacing: 0.4px;
}

.blog-content {
  padding: 16px;
  display: flex;
  flex-direction: column;
  flex: 1;
}

.date {
  font-size: 11px;
  color: #6b7280;
  margin: 0 0 6px;
  font-weight: 500;
  text-transform: uppercase;
  letter-spacing: 0.4px;
}

.blog-content h3 {
  font-size: 14px;
  font-weight: 700;
  margin: 0 0 8px;
  color: #1a1a1a;
  line-height: 1.3;
}

.excerpt {
  font-size: 12px;
  color: #4b5563;
  margin: 0 0 12px;
  line-height: 1.4;
  flex: 1;
}

.read-more {
  display: inline-block;
  color: #00732f;
  font-weight: 600;
  font-size: 12px;
  text-decoration: none;
  transition: all 0.3s ease;
  letter-spacing: -0.2px;
  width: fit-content;
}

.read-more:hover {
  color: #005423;
  transform: translateX(3px);
}

.controls {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 24px;
  margin-top: 32px;
}

.nav-btn {
  width: 44px;
  height: 44px;
  border: 1.5px solid #e5e7eb;
  background: white;
  border-radius: 50%;
  font-size: 18px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  color: #1a1a1a;
  font-weight: 500;
}
.nav-btn:hover:not(:disabled) {
  background: #00732f;
  color: white;
  border-color: #00732f;
  transform: scale(1.05);
}
.nav-btn:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}

.indicators {
  display: flex;
  gap: 8px;
  align-items: center;
}
.indicator {
  width: 6px;
  height: 6px;
  border-radius: 50%;
  border: none;
  background: #d1d5db;
  cursor: pointer;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
}
.indicator:hover {
  background: #9ca3af;
}
.indicator.active {
  background: #00732f;
  width: 24px;
  border-radius: 3px;
}

/* Tablet: 2 columns */
@media (min-width: 768px) and (max-width: 1199px) {
  .slide {
    flex: 0 0 calc(100% / 2);
    min-width: calc(100% / 2);
  }
  .slider {
    gap: 20px;
  }
}

/* Desktop: 3 columns */
@media (min-width: 1200px) {
  .slide {
    flex: 0 0 calc(100% / 3);
    min-width: calc(100% / 3);
  }
  .slider {
    gap: 24px;
  }
}

@media (max-width: 640px) {
  .section-head h2 {
    font-size: 28px;
  }
  .blog-content {
    padding: 14px;
  }
  .blog-content h3 {
    font-size: 13px;
  }
  .excerpt {
    font-size: 11px;
  } 
}
</style>