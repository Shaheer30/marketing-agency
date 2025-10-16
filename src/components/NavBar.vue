<template>
  <header class="nav" role="navigation" aria-label="Primary">
    <div class="container nav-inner">
      <a href="/home" class="brand" aria-label="Go to home">
        <img src="@/assets/logo.jpg" alt="NovaReach Logo" class="brand-logo" />
      </a>

      <button
        class="menu-btn"
        :aria-expanded="open ? 'true' : 'false'"
        aria-controls="nav-menu"
        @click="open = !open"
      >
        <span class="sr-only">Toggle navigation</span>
        <svg
          v-if="!open"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          <path
            fill="currentColor"
            d="M3 6h18v2H3zM3 11h18v2H3zM3 16h18v2H3z"
          />
        </svg>
        <svg
          v-else
          width="24"
          height="24"
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          <path
            fill="currentColor"
            d="M18.3 5.71L12 12.01 5.7 5.7 4.29 7.11l6.3 6.29-6.3 6.3 1.41 1.41 6.3-6.3 6.29 6.3 1.42-1.41-6.3-6.3 6.3-6.29z"
          />
        </svg>
      </button>

      <nav :class="['links', { open }]" id="nav-menu">
        <a href="#about" @click="close">About</a>
        <a href="#services" @click="close">Services</a>
        <a href="#portfolio" @click="close">Portfolio</a>
        <a href="#contact" @click="close" class="cta-link">Contact</a>
      </nav>
    </div>
  </header>
</template>

<script>
import { ref } from "vue";

export default {
  name: "NavBar",
  setup() {
    const open = ref(false);
    const close = () => {
      open.value = false;
    };
    return { open, close };
  },
};
</script>

<style scoped>
.nav {
  position: sticky;
  top: 0;
  z-index: 50;
  background: radial-gradient(
      1000px 300px at 80% -50%,
      rgba(34, 211, 238, 0.18),
      transparent 60%
    ),
    rgba(11, 18, 32, 0.75);
  backdrop-filter: blur(10px);
  border-bottom: 1px solid rgba(255, 255, 255, 0.08);
}

.nav-inner {
  padding-top: 10px;
  padding-bottom: 10px;
  height: auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.brand-logo {
  width: 20%;
  height: auto;
  margin-right: 8px;
}

.brand-text {
  font-size: 18px;
}

.menu-btn {
  background: transparent;
  border: none;
  color: var(--text);
  display: inline-flex;
  align-items: center;
  justify-content: center;
}

.links {
  position: absolute;
  right: 16px;
  top: 72px;
  display: none;
  flex-direction: column;
  gap: 8px;
  padding: 12px;
  background: var(--surface);
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: var(--radius);
}

.links a {
  color: var(--text);
  opacity: 0.9;
  padding: 8px 10px;
  border-radius: 8px;
}
.links a:hover {
  background: rgba(255, 255, 255, 0.06);
}

.links.open {
  display: flex;
}

.cta-link {
  color: #05131a;
  background: linear-gradient(135deg, var(--primary), #5eead4);
  border-radius: 999px;
  padding: 8px 14px;
}

@media (min-width: 900px) {
  .menu-btn {
    display: none;
  }
  .links {
    position: static;
    display: flex !important;
    flex-direction: row;
    gap: 20px;
    background: transparent;
    border: none;
    padding: 0;
  }
  .links a {
    padding: 8px 10px;
  }
}
.sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border: 0;
}
</style>
