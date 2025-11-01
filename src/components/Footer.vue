<template>
  <footer class="footer">
    <div class="container">
      <div class="footer-content">
        <div class="footer-section logo-section">
          <img src="/logo-white.png" alt="UAE Marketing Agency Logo" class="footer-logo" />
        </div>
        <div class="footer-section">
          <h3>Quick Links</h3>
          <ul>
            <li><router-link to="/">Home</router-link></li>
            <li><router-link to="/about">About</router-link></li>
            <li><router-link to="/services">Services</router-link></li>
            <li><router-link to="/contact">Contact</router-link></li> 
          </ul>
        </div>
        <div class="footer-section">
          <h3>Contact Info</h3>
          <p><i class="fa-solid fa-envelope" style="color: #0b735b;"></i> Email: <a href="mailto:info@uaemarketing.com">info@uaemarketing.com</a></p>
          <p><i class="fa-solid fa-phone-volume" style="color: #0b735b;"></i> Phone: <a href="https://wa.me/971568894637" target="_blank">+971 (5) 688-94637</a></p>
          <p><i class="fa-solid fa-map-pin" style="color: #0b735b;"></i> Location: 15 - 14th St - Deira - Abu Dhabi - UAE</p>
        </div>
      </div>

      <div class="social-icons">
        <a href="https://maps.app.goo.gl/pvMDiNtFc3mhb2eJA" target="_blank" rel="noopener noreferrer" title="Instagram">
          <i class="fa-brands fa-google"></i>
        </a>
        <a href="https://www.instagram.com/agencyuaemarketing/" target="_blank" rel="noopener noreferrer" title="Instagram">
          <i class="fab fa-instagram"></i>
        </a>
        <a href="https://x.com/uaemarketingg" target="_blank" rel="noopener noreferrer" title="Twitter">
          <i class="fab fa-twitter"></i>
        </a>
        <a href="https://www.facebook.com/profile.php?id=61579908015868" target="_blank" rel="noopener noreferrer" title="Facebook">
          <i class="fab fa-facebook"></i>
        </a>
        <a href="https://www.linkedin.com/company/uae-mareting-agency/?viewAsMember=true" target="_blank" rel="noopener noreferrer" title="LinkedIn">
          <i class="fab fa-linkedin"></i>
        </a>
        <a href="https://www.pinterest.com/agencyuaemarketing/" target="_blank" rel="noopener noreferrer" title="Pinterest">
          <i class="fab fa-pinterest"></i>
        </a>
        <a href="https://medium.com/@agencyuaemarketing" target="_blank" rel="noopener noreferrer" title="Medium">
          <i class="fab fa-medium"></i>
        </a>
        <a href="https://www.scoop.it/topic/uae-marketing-agency" target="_blank" rel="noopener noreferrer" title="Scoop.it">
          <i class="fas fa-share-alt"></i>
        </a>
      </div>

      <div class="footer-bottom">
        <p>&copy; 2025 UAE Marketing Agency. All rights reserved.</p>
      </div>
    </div>
    <Whatsapp />
  </footer>
</template>

<script setup>
  import Whatsapp from './WhatsappFloating.vue'
</script>

<style scoped>
.footer {
  background-color: var(--primary-black);
  color: var(--primary-white);
  padding: 3rem 0 1rem;
  margin-top: 3rem;
}

.footer-content {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
  margin-bottom: 2rem;
}

.logo-section {
  display: flex;
  align-items: center;
  justify-content: center;
}

.footer-logo {
  max-width: 200px;
  height: auto;
  object-fit: contain;
}

.footer-section h3 {
  color: var(--primary-red);
  margin-bottom: 1rem;
  font-size: 1.1rem;
}

.footer-section p {
  color: #CCCCCC;
  margin-bottom: 0.5rem;
  font-size: 0.95rem;
}

.footer-section ul {
  list-style: none;
}

.footer-section ul li {
  margin-bottom: 0.5rem;
}

.footer-section a {
  color: #CCCCCC;
  text-decoration: none;
  transition: color 0.3s ease;
}

.footer-section a:hover {
  color: var(--primary-red);
}

.social-icons {
  display: flex;
  justify-content: center;
  gap: 1.5rem;
  margin-bottom: 2rem;
  flex-wrap: wrap;
}

.social-icons a {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  background-color: var(--primary-red);
  color: var(--primary-white);
  border-radius: 50%;
  text-decoration: none;
  transition: all 0.3s ease;
  font-size: 1.2rem;
}

.social-icons a:hover {
  background-color: var(--primary-green);
  transform: translateY(-3px);
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
}

.footer-bottom {
  text-align: center;
  padding-top: 1rem;
  border-top: 1px solid var(--primary-green);
  color: #AAAAAA;
  font-size: 0.9rem;
}

@media (max-width: 768px) {
  .footer-content {
    grid-template-columns: 1fr;
  }

  .footer {
    padding: 2rem 0 1rem;
  }

  .footer-logo {
    max-width: 150px;
  }

  .social-icons {
    gap: 1rem;
  }

  .social-icons a {
    width: 35px;
    height: 35px;
    font-size: 1rem;
  }
}
</style>