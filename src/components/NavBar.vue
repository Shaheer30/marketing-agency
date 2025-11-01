<script setup>
import { useRoute } from 'vue-router'
import { computed, ref } from 'vue'

const route = useRoute()
const activeRoute = computed(() => route.path)
const mobileMenuOpen = ref(false)

const closeMobileMenu = () => {
  mobileMenuOpen.value = false
}
</script>

<template>
  <nav class="navbar">
    <div class="container navbar-content">
      <router-link to="/" class="logo" @click="closeMobileMenu">
        <img src="/logo.png" alt="uae marketing agency logo" class="logo-img" />
      </router-link>

      <!-- Hamburger Toggle Button -->
      <button class="hamburger" @click="mobileMenuOpen = !mobileMenuOpen" :class="{ active: mobileMenuOpen }">
        <span></span>
        <span></span>
        <span></span>
      </button>

      <!-- Desktop Menu -->
      <ul class="nav-links" :class="{ mobile: mobileMenuOpen }">
        <li><router-link to="/" :class="{ active: activeRoute === '/' }" @click="closeMobileMenu">Home</router-link></li>
        <li><router-link to="/about" :class="{ active: activeRoute === '/about' }" @click="closeMobileMenu">About</router-link></li>
        <li><router-link to="/services" :class="{ active: activeRoute === '/services' }" @click="closeMobileMenu">Services</router-link></li>
        <!-- <li><router-link to="/blogs" :class="{ active: activeRoute === '/blogs' }" @click="closeMobileMenu">Blogs</router-link></li> -->
        <li><router-link to="/contact" :class="{ active: activeRoute === '/contact' }" @click="closeMobileMenu">Contact</router-link></li>
      </ul>
    </div>
  </nav>
</template>

<style scoped>
.navbar {
  background: linear-gradient(135deg, var(--primary-red) 0%, var(--primary-green) 100%);
  padding: 1rem 0;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  position: sticky;
  top: 0;
  z-index: 100;
}

.navbar-content {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.logo {
  font-size: 1.5rem;
  font-weight: bold;
  color: var(--primary-white);
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.logo-img {
  width: 15%;
}

.nav-links {
  display: flex;
  list-style: none;
  gap: 2rem;
}

.nav-links a {
  color: var(--primary-white);
  font-weight: 500;
  border-bottom: 2px solid transparent;
  padding-bottom: 0.25rem;
  transition: border-color 0.3s ease;
}

.nav-links a:hover,
.nav-links a.active {
  border-bottom-color: var(--primary-white);
}

.hamburger {
  display: none;
  flex-direction: column;
  background: none;
  cursor: pointer;
  gap: 5px;
  padding: 5px;
}

.hamburger span {
  width: 25px;
  height: 3px;
  background-color: var(--primary-white);
  border-radius: 2px;
  transition: all 0.3s ease;
}

.hamburger.active span:nth-child(1) {
  transform: rotate(45deg) translate(8px, 8px);
}

.hamburger.active span:nth-child(2) {
  opacity: 0;
}

.hamburger.active span:nth-child(3) {
  transform: rotate(-45deg) translate(7px, -7px);
}

@media (max-width: 768px) {

  .logo-img {
  width: 20%;
}

  .navbar-content {
    position: relative;
  }

  .hamburger {
    display: flex;
  }

  .nav-links {
    position: absolute;
    top: 100%;
    left: 0;
    right: 0;
    flex-direction: column;
    gap: 0;
    background: linear-gradient(135deg, var(--primary-red) 0%, var(--primary-green) 100%);
    max-height: 0;
    overflow: hidden;
    transition: max-height 0.3s ease;
  }

  .nav-links.mobile {
    max-height: 300px;
  }

  .nav-links li {
    padding: 0.75rem 20px;
    border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  }

  .nav-links a {
    border-bottom: none;
    padding-bottom: 0;
  }

  .nav-links a:hover,
  .nav-links a.active {
    border-bottom: none;
    color: var(--primary-white);
  }

}
</style>