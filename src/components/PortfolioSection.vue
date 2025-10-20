<template>
  <div class="container">
    <header class="section-head">
      <h2>Client Testimonials</h2>
      <p class="muted">What our clients have to say about working with us.</p>
    </header>

    <div class="slider-wrapper">
      <div class="slider" :style="{ transform: `translateX(-${currentIndex * 100}%)` }">
        <article v-for="(item, idx) in items" :key="idx" class="slide">
          <div class="slide-inner">
            <div class="stars">
              <span v-for="n in 5" :key="n" class="star">★</span>
            </div>
            <p class="quote">{{ item.quote }}</p>
            <div class="author">
              <img :src="item.img" :alt="item.name" class="avatar" />
              <div class="info">
                <h4>{{ item.name }}</h4>
                <p class="role">{{ item.role }}</p>
              </div>
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
            v-for="(_, idx) in items"
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
  name: 'TestimonialSlider',
  data() {
    return {
      currentIndex: 0,
      items: [
        {
          quote: 'They transformed our organic visibility in just 6 months. The results speak for themselves—over 140% increase in sessions.',
          name: 'Sarah Mitchell',
          role: 'Marketing Director, TechCorp',
          img: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=200&auto=format&fit=crop'
        },
        {
          quote: 'Best investment we made for our local business. We went from struggling to find customers to being booked solid.',
          name: 'James Rodriguez',
          role: 'Owner, Local Services Co',
          img: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200&auto=format&fit=crop'
        },
        {
          quote: 'The paid media strategy was exceptional. Our ROAS jumped to 4.6x, and the team was incredibly responsive throughout.',
          name: 'Emma Thompson',
          role: 'CEO, E-commerce Brand',
          img: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=200&auto=format&fit=crop'
        },
        {
          quote: 'Professional, data-driven, and results-oriented. They understand not just what to do, but why it matters.',
          name: 'David Chen',
          role: 'VP of Growth, SaaS Startup',
          img: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=200&auto=format&fit=crop'
        }
      ]
    }
  },
  methods: {
    nextSlide() {
      this.currentIndex = (this.currentIndex + 1) % this.items.length;
    },
    prevSlide() {
      this.currentIndex = (this.currentIndex - 1 + this.items.length) % this.items.length;
    }
  }
}
</script>

<style scoped>
.section-head {
  text-align: center;
  margin-bottom: 56px;
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
  max-width: 720px;
  margin: 0 auto;
}

.slider {
  display: flex;
  transition: transform 0.6s cubic-bezier(0.4, 0, 0.2, 1);
}

.slide {
  flex: 0 0 100%;
  min-width: 100%;
  padding: 2px;
}

.slide-inner {
  background: linear-gradient(135deg, #ffffff 0%, #f9fafb 100%);
  border: 1px solid #e5e7eb;
  border-radius: 16px;
  padding: 36px 32px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-height: 280px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
}

.slide-inner::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 2px;
  background: linear-gradient(90deg, #00732f, transparent);
}

.stars {
  display: flex;
  gap: 6px;
  margin-bottom: 20px;
}
.star {
  font-size: 20px;
  color: #ef4444;
  letter-spacing: 2px;
}

.quote {
  font-size: 16px;
  line-height: 1.7;
  margin: 0 0 24px;
  color: #2d3748;
  font-weight: 500;
  letter-spacing: -0.2px;
}

.author {
  display: flex;
  align-items: center;
  gap: 14px;
  margin-top: auto;
}
.avatar {
  width: 56px;
  height: 56px;
  border-radius: 50%;
  object-fit: cover;
  flex-shrink: 0;
  border: 2px solid #e5e7eb;
}
.info {
  flex: 1;
}
.info h4 {
  margin: 0;
  font-size: 15px;
  font-weight: 600;
  color: #1a1a1a;
  letter-spacing: -0.3px;
}
.role {
  margin: 4px 0 0;
  font-size: 13px;
  color: #6b7280;
  font-weight: 500;
}

.controls {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 28px;
  margin-top: 40px;
}

.nav-btn {
  width: 48px;
  height: 48px;
  border: 1.5px solid #e5e7eb;
  background: white;
  border-radius: 50%;
  font-size: 20px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  color: #1a1a1a;
  font-weight: 500;
}
.nav-btn:hover {
  background: #00732f;
  color: white;
  border-color: #00732f;
  transform: scale(1.05);
}
.nav-btn:active {
  transform: scale(0.95);
}

.indicators {
  display: flex;
  gap: 10px;
  align-items: center;
}
.indicator {
  width: 8px;
  height: 8px;
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
  background: #ef4444;
  width: 28px;
  border-radius: 4px;
}

@media (min-width: 700px) {
  .slide-inner {
    padding: 40px 40px;
    min-height: 300px;
  }
  .nav-btn {
    width: 52px;
    height: 52px;
  }
}

@media (max-width: 640px) {
  .section-head h2 {
    font-size: 28px;
  }
  .slide-inner {
    padding: 36px 28px;
    min-height: 300px;
  }
  .quote {
    font-size: 15px;
  }
}
</style>