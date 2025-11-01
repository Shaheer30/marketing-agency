<script setup>
import { onMounted } from 'vue'

onMounted(() => {
  document.title = 'About Us - UAE Marketing Agency'
  const metaDescription = document.querySelector('meta[name="description"]')
  if (metaDescription) {
    metaDescription.setAttribute('content', 'Learn about our agency mission, values, and expert team of digital marketers.')
  }
})
</script>

<template>
  <div class="about-page">
    <section class="about-hero">
      <div class="container">
        <h1>About UAE Marketing Agency</h1>
        <p>We are a team of passionate digital marketers dedicated to transforming businesses in the UAE.</p>
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