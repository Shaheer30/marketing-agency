<template>
  <footer class="footer">
    <div class="container footer-inner">
      <div class="brand-section">
        <a href="/home" class="brand-link" aria-label="Go to home">
          <img src="@/assets/logo.png" alt="UAE Marketing Logo" class="brand-logo" />
        </a>
      </div>
      <div class="footer-bottom">
        <p class="copyright">
          © {{ year }} UAE Marketing Agency. All rights reserved.
        </p>
        <p class="credit">
          A site by 
          <a href="https://shaheer-siddiqi.vercel.app/" target="_blank" rel="noopener noreferrer">Shaheer Siddiqi</a>
        </p>
      </div>
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
  padding: 40px 16px 24px;
  border-top: 1px solid rgba(0, 115, 47, 0.15);
  background: linear-gradient(
    180deg,
    rgba(0, 115, 47, 0.03),
    rgba(0, 115, 47, 0.01)
  );
  margin-top: 60px;
}

.footer-inner {
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 24px;
  text-align: center;
}

.brand-section {
  display: flex;
  justify-content: center;
}

.brand-link {
  display: inline-flex;
  align-items: center;
  text-decoration: none;
  transition: opacity 0.3s ease;
}

.brand-link:hover {
  opacity: 0.8;
}

.brand-logo {
  width: 200px;
  height: auto;
}

.footer-bottom {
  display: flex;
  flex-direction: column;
  gap: 6px;
}

.copyright,
.credit {
  font-size: 13px;
  color: #666;
  margin: 0;
}

.credit a {
  color: #00732f;
  text-decoration: none;
  font-weight: 600;
  transition: color 0.3s ease;
}

.credit a:hover {
  color: #005a23;
  text-decoration: underline;
}

@media (max-width: 640px) {
  .footer {
    padding: 32px 16px 16px;
    margin-top: 40px;
  }

  .footer-inner {
    gap: 16px;
  }

  .copyright,
  .credit {
    font-size: 12px;
  }
}
</style>