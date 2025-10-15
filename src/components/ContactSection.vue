<template>
  <div class="container">
    <div class="grid">
      <div>
        <h2>Contact Us</h2>
        <p class="muted">
          Tell us about your goals. We’ll respond within 1–2 business days.
        </p>

        <form class="form card" @submit.prevent="onSubmit" novalidate>
          <div class="field">
            <label for="name">Name</label>
            <input id="name" v-model.trim="form.name" type="text" required placeholder="Jane Doe" />
          </div>
          <div class="field">
            <label for="email">Email</label>
            <input id="email" v-model.trim="form.email" type="email" required placeholder="jane@company.com" />
          </div>
          <div class="field">
            <label for="message">Message</label>
            <textarea id="message" v-model.trim="form.message" rows="5" required placeholder="What would you like to achieve?"></textarea>
          </div>

          <div class="actions">
            <button class="btn btn-primary" type="submit">Send Message</button>
            <button class="btn btn-outline" type="button" @click="reset">Reset</button>
          </div>

          <p v-if="error" class="error">{{ error }}</p>
          <p v-if="success" class="success">Thanks! We’ll be in touch shortly.</p>
        </form>
      </div>

      <aside class="side card">
        <h3>Connect</h3>
        <p class="muted">Follow for tips and case studies.</p>
        <div class="socials">
          <a href="#" aria-label="Visit our Twitter">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path d="M22 5.8c-.7.3-1.4.5-2.2.6.8-.5 1.4-1.2 1.7-2-.7.5-1.6.8-2.5 1a4 4 0 0 0-6.9 3.6 11.4 11.4 0 0 1-8.3-4.2A4 4 0 0 0 6 9c-.6 0-1.2-.2-1.7-.4v.1c0 1.9 1.4 3.6 3.2 4-.4.1-.8.2-1.3.2-.3 0-.6 0-.9-.1a4 4 0 0 0 3.7 2.7 8 8 0 0 1-5 1.7c-.3 0-.6 0-.9-.1a11.3 11.3 0 0 0 6.1 1.8c7.4 0 11.5-6.1 11.5-11.5v-.5c.8-.5 1.4-1.2 1.9-2z"/>
            </svg>
            <span>@novareach</span>
          </a>
          <a href="#" aria-label="Visit our LinkedIn">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path d="M4.98 3.5A2.5 2.5 0 1 1 5 8.5a2.5 2.5 0 0 1 0-5zM4 9h3v12H4zM10 9h3v1.7h.1A3.3 3.3 0 0 1 16 9c3 0 3.6 2 3.6 4.6V21h-3v-6.1c0-1.5 0-3.3-2-3.3s-2.3 1.6-2.3 3.2V21H9.9V9H13z"/>
            </svg>
            <span>NovaReach</span>
          </a>
          <a href="#" aria-label="Visit our Instagram">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path d="M7 2h10a5 5 0 0 1 5 5v10a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5Zm0 2a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V7a3 3 0 0 0-3-3H7Zm5 3.5A5.5 5.5 0 1 1 6.5 13 5.5 5.5 0 0 1 12 7.5Zm0 2A3.5 3.5 0 1 0 15.5 13 3.5 3.5 0 0 0 12 9.5Zm5.8-2.8a1 1 0 1 1-1.6 1.2 1 1 0 0 1 1.6-1.2Z"/>
            </svg>
            <span>@novareach</span>
          </a>
        </div>

        <div class="contact-note">
          <p class="muted">
            Prefer email? <a href="mailto:hello@novareach.com">hello@novareach.com</a>
          </p>
        </div>
      </aside>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ContactSection',
  data() {
    return {
      form: { name: '', email: '', message: '' },
      error: '',
      success: false,
    }
  },
  methods: {
    onSubmit() {
      this.error = ''
      this.success = false
      if (!this.form.name || !this.form.email || !this.form.message) {
        this.error = 'Please fill out all fields.'
        return
      }
      const emailValid = /\S+@\S+\.\S+/.test(this.form.email)
      if (!emailValid) {
        this.error = 'Please enter a valid email address.'
        return
      }
      // Simulate submit
      console.log('[Contact] Submission:', { ...this.form })
      this.success = true
      this.reset()
      setTimeout(() => { this.success = false }, 4000)
    },
    reset() {
      this.form = { name: '', email: '', message: '' }
      this.error = ''
    }
  }
}
</script>

<style scoped>
.grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 18px;
}
h2 { font-size: 28px; margin: 0 0 8px; }
.muted { color: var(--muted); }

.form {
  margin-top: 14px;
  padding: 16px;
}
.field {
  display: grid;
  gap: 8px;
  margin-bottom: 12px;
}
label {
  font-size: 14px;
  color: var(--text);
}
input, textarea {
  width: 100%;
  color: var(--text);
  background: rgba(255,255,255,0.03);
  border: 1px solid rgba(255,255,255,0.14);
  border-radius: 10px;
  padding: 10px 12px;
  outline: none;
  transition: border-color 0.2s ease, box-shadow 0.2s ease, background 0.2s ease;
}
input:focus, textarea:focus {
  border-color: rgba(34,211,238,0.6);
  box-shadow: 0 0 0 3px rgba(34,211,238,0.2);
  background: rgba(255,255,255,0.05);
}

.actions {
  display: flex;
  gap: 10px;
  margin-top: 8px;
}

.error { color: #ff6b6b; margin-top: 8px; font-weight: 600; }
.success { color: #5eead4; margin-top: 8px; font-weight: 600; }

.side {
  padding: 16px;
  height: fit-content;
}
.side h3 { margin: 0 0 8px; }

.socials {
  display: grid;
  gap: 10px;
  margin-top: 8px;
}
.socials a {
  display: inline-flex;
  align-items: center;
  gap: 10px;
  color: var(--text);
  padding: 8px 10px;
  border-radius: 10px;
  border: 1px solid rgba(255,255,255,0.08);
  background: rgba(255,255,255,0.02);
  transition: border-color 0.2s ease, background 0.2s ease, transform 0.15s ease;
}
.socials a:hover {
  border-color: rgba(34,211,238,0.5);
  background: rgba(34,211,238,0.06);
  transform: translateY(-1px);
}

.contact-note { margin-top: 12px; }

@media (min-width: 900px) {
  .grid {
    grid-template-columns: 1.2fr 0.8fr;
    align-items: start;
  }
}
</style>