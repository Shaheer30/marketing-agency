<template>
  <div class="app">
    <Navbar />
    <main class="main-content">
      <router-view />
    </main>
    <Footer />
  </div>
</template>

<script setup>
import Navbar from './components/Navbar.vue'
import Footer from './components/Footer.vue'
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

:root {
  --primary-red: #CE1126;
  --primary-green: #007A5E;
  --primary-black: #000000;
  --primary-white: #FFFFFF;
  --text-dark: #333333;
  --text-light: #666666;
  --bg-light: #F5F5F5;
  --border-color: #DDDDDD;
}

body {
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  line-height: 1.6;
  color: var(--text-dark);
  background-color: var(--primary-white);
}

.app {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

.main-content {
  flex: 1;
}

a {
  text-decoration: none;
  color: inherit;
  transition: color 0.3s ease;
}

button {
  cursor: pointer;
  border: none;
  font-family: inherit;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
}

@media (max-width: 768px) {
  :root {
    --font-size-base: 14px;
  }
}
</style>
