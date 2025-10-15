<template>
  <footer class="footer">
    <div class="container foot-inner">
      <div class="left">
        <span class="brand">NovaReach</span>
        <span class="copyright"
          >© {{ year }} NovaReach. All rights reserved.</span
        >
      </div>
      <nav class="right" aria-label="Footer navigation">
        <a href="#about">About</a>
        <a href="#services">Services</a>
        <a href="#portfolio">Portfolio</a>
        <a href="#contact">Contact</a>
      </nav>
    </div>
  </footer>
</template>

<script>
export default {
  name: "SiteFooter",
  computed: {
    year() {
      return new Date().getFullYear();
    },
  },
};
</script>

<style scoped>
.footer {
  padding: 28px 16px;
  border-top: 1px solid rgba(255, 255, 255, 0.08);
  background: linear-gradient(
    180deg,
    rgba(255, 255, 255, 0.02),
    rgba(255, 255, 255, 0)
  );
}
.foot-inner {
  display: flex;
  flex-direction: column;
  gap: 12px;
  align-items: start;
  justify-content: space-between;
}
.brand {
  font-weight: 700;
  margin-right: 10px;
}
.left {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  align-items: center;
  color: var(--muted);
}
.right {
  display: flex;
  gap: 16px;
  flex-wrap: wrap;
}
.right a {
  color: var(--text);
  opacity: 0.9;
}
.right a:hover {
  color: var(--primary);
}

@media (min-width: 800px) {
  .foot-inner {
    flex-direction: row;
    align-items: center;
  }
}
</style>
