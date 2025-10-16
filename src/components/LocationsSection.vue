<template>
  <div class="container">
    <!-- Header -->
    <div class="header-section">
      <h1 class="main-title">Visit Us</h1>
      <p class="subtitle">Connect with our team across the globe</p>
    </div>

    <!-- Locations Grid -->
    <div class="locations-grid">
      <div
        v-for="(location, index) in locations"
        :key="index"
        class="location-card"
      >
        <!-- Left Accent Bar -->
        <div class="accent-bar"></div>

        <!-- Country Badge -->
        <span class="country-badge">{{ location.country }}</span>

        <!-- Address -->
        <div class="info-item">
          <svg
            class="icon"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
          >
            <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
            <circle cx="12" cy="10" r="3"></circle>
          </svg>
          <div>
            <p class="info-label">Address</p>
            <p class="info-value">{{ location.address }}</p>
          </div>
        </div>

        <!-- Phone -->
        <div class="info-item">
          <svg
            class="icon"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
          >
            <path
              d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"
            ></path>
          </svg>
          <div>
            <p class="info-label">Phone</p>
            <a :href="`tel:${location.phone}`" class="info-link">{{
              location.phone
            }}</a>
          </div>
        </div>

        <!-- Email -->
        <div class="info-item">
          <svg
            class="icon"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
          >
            <rect x="2" y="4" width="20" height="16" rx="2"></rect>
            <path d="m22 6-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 6"></path>
          </svg>
          <div>
            <p class="info-label">Email</p>
            <a :href="`mailto:${location.email}`" class="info-link">{{
              location.email
            }}</a>
          </div>
        </div>
      </div>
    </div>

    <!-- CTA Button -->
    <div class="cta-section">
      <p class="cta-text">Ready to discuss your next project?</p>
      <a
        href="https://wa.me/971568894637?text=Hi%20I%20want%20to%20discuss%20a%20project"
        class="cta-button"
        target="_blank"
      >
        Schedule a Consultation
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name: "BusinessLocations",
  data() {
    return {
      locations: [
        {
          country: "United States",
          address: "115 S Horner Blvd, Sanford, NC 27330, USA",
          phone: "+1 (727)) 297-4842",
          email: "usadigitalagency@gmail.com",
        },
        {
          country: "United Arab Emirates",
          address: "15 - 1 4th St - Deira - Abu Dhabi - UAE",
          phone: "+971 (5) 688-94637",
          email: "agencyuaemarketing@gmail.com",
        },
      ],
    };
  },
};
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.container {
  padding: 60px 20px;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
    "Helvetica Neue", Arial, sans-serif;
}

.header-section {
  text-align: center;
  margin-bottom: 60px;
  max-width: 800px;
  margin-left: auto;
  margin-right: auto;
}

.main-title {
  font-size: 3.5rem;
  font-weight: 700;
  color: #000; /* white */
  margin-bottom: 15px;
  letter-spacing: -1px;
}

.subtitle {
  font-size: 1.1rem;
  color: #00732f; /* green */
  font-weight: 500;
}

.locations-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(380px, 1fr));
  gap: 30px;
  max-width: 1200px;
  margin: 0 auto 60px;
}

.location-card {
  position: relative;
  background: linear-gradient(
    135deg,
    rgba(0, 0, 0, 0.85) 0%,
    rgba(30, 30, 30, 0.8) 100%
  );
  border: 1px solid rgba(255, 0, 0, 0.3); /* red accent */
  border-radius: 16px;
  padding: 35px;
  backdrop-filter: blur(10px);
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  overflow: hidden;
}

.location-card::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: radial-gradient(
    circle at 20% 50%,
    rgba(0, 115, 47, 0.2) 0%,
    transparent 50%
  );
  opacity: 0;
  transition: opacity 0.4s ease;
  pointer-events: none;
}

.location-card:hover {
  border-color: rgba(255, 0, 0, 0.8); /* stronger red on hover */
  box-shadow: 0 0 30px rgba(255, 0, 0, 0.3),
    inset 0 0 30px rgba(0, 115, 47, 0.1);
  transform: translateY(-5px);
}

.location-card:hover::before {
  opacity: 1;
}

.accent-bar {
  position: absolute;
  top: 0;
  left: 0;
  width: 4px;
  height: 50px;
  background: linear-gradient(180deg, #ff0000 0%, transparent 100%); /* red bar */
  border-radius: 0 4px 4px 0;
}

.country-badge {
  display: inline-block;
  background: rgba(0, 115, 47, 0.2);
  color: #00732f;
  padding: 6px 14px;
  border-radius: 20px;
  font-size: 0.75rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  border: 1px solid rgba(0, 115, 47, 0.4);
  margin-bottom: 20px;
}

.city-title {
  font-size: 1.8rem;
  font-weight: 700;
  color: #ffffff;
  margin-bottom: 25px;
  position: relative;
  z-index: 1;
}

.info-item {
  display: flex;
  gap: 15px;
  margin-bottom: 20px;
  position: relative;
  z-index: 1;
}

.info-item.timezone-item {
  margin-bottom: 0;
  padding-top: 20px;
  border-top: 1px solid rgba(255, 255, 255, 0.2);
}

.icon {
  width: 22px;
  height: 22px;
  color: #ff0000; /* red icons */
  flex-shrink: 0;
  margin-top: 2px;
  stroke-width: 2;
}

.info-label {
  font-size: 0.8rem;
  color: #cccccc; /* muted grey */
  text-transform: uppercase;
  letter-spacing: 0.5px;
  font-weight: 600;
  margin-bottom: 4px;
}

.info-value {
  font-size: 0.95rem;
  color: #ffffff;
  font-weight: 500;
  line-height: 1.4;
}

.info-link {
  font-size: 0.95rem;
  color: #00732f; /* green links */
  text-decoration: none;
  font-weight: 500;
  transition: color 0.3s ease;
  cursor: pointer;
}

.info-link:hover {
  color: #ff0000; /* red hover */
}

.cta-section {
  text-align: center;
}

.cta-text {
  font-size: 1rem;
  color: #000;
  margin-bottom: 15px;
}

.cta-button {
  background: linear-gradient(135deg, #00732f 0%, #ff0000 100%);
  color: #ffffff;
  border: none;
  padding: 12px 35px;
  border-radius: 25px;
  font-size: 0.95rem;
  font-weight: 700;
  cursor: pointer;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  box-shadow: 0 4px 15px rgba(255, 0, 0, 0.3);
  text-transform: uppercase;
  letter-spacing: 0.5px;
}

.cta-button:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 25px rgba(0, 115, 47, 0.4);
  background: linear-gradient(135deg, #ff0000 0%, #00732f 100%);
}

.cta-button:active {
  transform: translateY(0);
}

@media (max-width: 768px) {
  .container {
    padding: 40px 15px;
  }

  .main-title {
    font-size: 2.5rem;
  }

  .subtitle {
    font-size: 1rem;
  }

  .locations-grid {
    grid-template-columns: 1fr;
    gap: 20px;
    margin-bottom: 40px;
  }

  .location-card {
    padding: 25px;
  }

  .header-section {
    margin-bottom: 40px;
  }
}
</style>
