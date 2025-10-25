<template>
  <div class="container">
    <div class="grid">
      <div>
        <div class="header-section">
          <h2>Get In Touch</h2>
          <p class="muted">
            Share your goals and interests with us. Our team responds within 1–2 business days.
          </p>
        </div>

        <transition name="notification-fade">
          <div
            v-if="notification.show"
            :class="['notification', `notification-${notification.type}`]"
            role="alert"
          >
            <svg class="notification-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path v-if="notification.type === 'success'" d="M20 6L9 17l-5-5"/>
              <path v-if="notification.type === 'error'" d="M18 6L6 18M6 6l12 12"/>
              <circle v-if="notification.type === 'info'" cx="12" cy="12" r="10"/>
            </svg>
            <span>{{ notification.message }}</span>
          </div>
        </transition>

        <form class="form card" @submit.prevent="sendEmail" novalidate>
          <div class="form-row">
            <div class="field">
              <label for="name">
                Name <span class="required">*</span>
              </label>
              <div class="input-wrapper">
                <svg class="input-icon" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/>
                  <circle cx="12" cy="7" r="4"/>
                </svg>
                <input
                  id="name"
                  v-model.trim="form.name"
                  type="text"
                  required
                  placeholder="Jane Doe"
                  :class="{ 'has-error': errors.name }"
                  @blur="validateField('name')"
                  @input="clearError('name')"
                />
              </div>
              <span v-if="errors.name" class="error-message">{{ errors.name }}</span>
            </div>

            <div class="field">
              <label for="email">
                Email <span class="required">*</span>
              </label>
              <div class="input-wrapper">
                <svg class="input-icon" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <rect x="3" y="5" width="18" height="14" rx="2"/>
                  <path d="M3 7l9 6 9-6"/>
                </svg>
                <input
                  id="email"
                  v-model.trim="form.email"
                  type="email"
                  required
                  placeholder="jane@company.com"
                  :class="{ 'has-error': errors.email }"
                  @blur="validateField('email')"
                  @input="clearError('email')"
                />
              </div>
              <span v-if="errors.email" class="error-message">{{ errors.email }}</span>
            </div>
          </div>

          <div class="form-row">
            <div class="field">
              <label for="phone">
                Phone <span class="required">*</span>
              </label>
              <div class="input-wrapper">
                <svg class="input-icon" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
                </svg>
                <input
                  id="phone"
                  v-model.trim="form.phone"
                  type="tel"
                  required
                  placeholder="+1 (555) 000-0000"
                  :class="{ 'has-error': errors.phone }"
                  @blur="validateField('phone')"
                  @input="clearError('phone')"
                />
              </div>
              <span v-if="errors.phone" class="error-message">{{ errors.phone }}</span>
            </div>

            <div class="field">
              <label for="company">Company</label>
              <div class="input-wrapper">
                <svg class="input-icon" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <rect x="3" y="3" width="18" height="18" rx="2"/>
                  <path d="M9 3v18"/>
                </svg>
                <input
                  id="company"
                  v-model.trim="form.company"
                  type="text"
                  placeholder="Your Company"
                />
              </div>
            </div>
          </div>

          <div class="field">
            <label>
              Services Interested In
              <span class="service-count" v-if="form.services.length > 0">
                ({{ form.services.length }} selected)
              </span>
            </label>
            <div class="services-grid">
              <label
                v-for="service in services"
                :key="service"
                class="service-checkbox"
                :class="{ 'selected': form.services.includes(service) }"
              >
                <input
                  type="checkbox"
                  :value="service"
                  v-model="form.services"
                />
                <span class="checkmark">
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3">
                    <polyline points="20 6 9 17 4 12"/>
                  </svg>
                </span>
                <span class="service-label">{{ service }}</span>
              </label>
            </div>
          </div>

          <div class="field">
            <label for="message">
              Message <span class="required">*</span>
            </label>
            <div class="textarea-wrapper">
              <textarea
                id="message"
                v-model.trim="form.message"
                rows="5"
                placeholder="Tell us about your project goals and requirements..."
                :class="{ 'has-error': errors.message }"
                @blur="validateField('message')"
                @input="clearError('message')"
              ></textarea>
              <span class="char-count">{{ form.message.length }} / 1000</span>
            </div>
            <span v-if="errors.message" class="error-message">{{ errors.message }}</span>
          </div>

          <div class="actions">
            <button class="btn btn-primary" type="submit" :disabled="isLoading">
              <span v-if="!isLoading">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <line x1="22" y1="2" x2="11" y2="13"/>
                  <polygon points="22 2 15 22 11 13 2 9 22 2"/>
                </svg>
                Send Message
              </span>
              <span v-else class="loading">
                <svg class="spinner" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <circle cx="12" cy="12" r="10"/>
                </svg>
                Sending...
              </span>
            </button>
          </div>
        </form>
      </div>

      <aside class="side card">
        <h3>Connect With Us</h3>
        <p class="muted">Follow us for marketing tips, case studies, and industry insights.</p>
        <div class="socials">
          <a
            href="https://maps.app.goo.gl/pvMDiNtFc3mhb2eJA"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Visit our GMB"
            class="social-link"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm3.5-9c.83 0 1.5-.67 1.5-1.5S16.33 8 15.5 8 14 8.67 14 9.5s.67 1.5 1.5 1.5z"/>
            </svg>
            <span>GMB (UAE)</span>
          </a>
          <a
            href="https://www.facebook.com/profile.php?id=61579908015868"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Visit our Facebook"
            class="social-link"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
              <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
            </svg>
            <span>Facebook</span>
          </a>
          <a
            href="https://www.instagram.com/agencyuaemarketing/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Visit our Instagram"
            class="social-link"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
              <path d="M7 2h10a5 5 0 0 1 5 5v10a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5Zm0 2a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V7a3 3 0 0 0-3-3H7Zm5 3.5A5.5 5.5 0 1 1 6.5 13 5.5 5.5 0 0 1 12 7.5Zm0 2A3.5 3.5 0 1 0 15.5 13 3.5 3.5 0 0 0 12 9.5Zm5.8-2.8a1 1 0 1 1-1.6 1.2 1 1 0 0 1 1.6-1.2Z"/>
            </svg>
            <span>@agencyuaemarketing</span>
          </a>
          <a
            href="https://x.com/uaemarketingg"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Visit our X"
            class="social-link"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
              <path d="M22 5.8c-.7.3-1.4.5-2.2.6.8-.5 1.4-1.2 1.7-2-.7.5-1.6.8-2.5 1a4 4 0 0 0-6.9 3.6 11.4 11.4 0 0 1-8.3-4.2A4 4 0 0 0 6 9c-.6 0-1.2-.2-1.7-.4v.1c0 1.9 1.4 3.6 3.2 4-.4.1-.8.2-1.3.2-.3 0-.6 0-.9-.1a4 4 0 0 0 3.7 2.7 8 8 0 0 1-5 1.7c-.3 0-.6 0-.9-.1a11.3 11.3 0 0 0 6.1 1.8c7.4 0 11.5-6.1 11.5-11.5v-.5c.8-.5 1.4-1.2 1.9-2z"/>
            </svg>
            <span>@uaemarketingg</span>
          </a>
          <a
            href="https://www.linkedin.com/company/uae-mareting-agency/?viewAsMember=true"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Visit our LinkedIn"
            class="social-link"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
              <path d="M4.98 3.5C4.98 4.88 3.87 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1s2.48 1.12 2.48 2.5ZM.5 8.5h4V24h-4V8.5Zm7.5 0h3.8v2.1h.05c.53-1 1.83-2.1 3.77-2.1 4.03 0 4.78 2.65 4.78 6.1V24h-4v-6.8c0-1.63-.03-3.72-2.27-3.72-2.27 0-2.62 1.77-2.62 3.6V24h-4V8.5Z"/>
            </svg>
            <span>LinkedIn</span>
          </a>
          <a
            href="https://www.pinterest.com/agencyuaemarketing/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Visit our Pinterest"
            class="social-link"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 0C5.373 0 0 5.373 0 12c0 5.084 3.163 9.426 7.627 11.174-.105-.937-.2-2.378.042-3.402.224-.937 1.461-6.169 1.461-6.169s-.362-.725-.362-1.781c0-1.669.968-2.914 2.171-2.914 1.023 0 1.518.768 1.518 1.69 0 1.029-.655 2.568-.994 3.995-.283 1.194.597 2.169 1.777 2.169 2.133 0 3.772-2.249 3.772-5.495 0-2.873-2.064-4.882-5.012-4.882-3.414 0-5.418 2.561-5.418 5.207 0 1.031.397 2.138.893 2.738.098.119.112.224.083.345l-.333 1.36c-.053.22-.174.267-.402.161-1.499-.698-2.436-2.889-2.436-4.649 0-3.785 2.75-7.262 7.929-7.262 4.163 0 7.398 2.967 7.398 6.931 0 4.136-2.607 7.464-6.227 7.464-1.216 0-2.359-.631-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146 1.124.347 2.317.535 3.554.535 6.627 0 12-5.373 12-12 0-6.627-5.373-12-12-12z"/>
            </svg>
            <span>Pinterest</span>
          </a>
          <a
            href="https://medium.com/@agencyuaemarketing"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Visit our Medium"
            class="social-link"
          >
            <svg width="20" height="20" viewBox="0 0 448 512" fill="currentColor">
              <path d="M369.4 32c43.4 0 78.6 35.2 78.6 78.6l0 83.8c-1.9-.1-3.8-.2-5.7-.2l-.4 0c-10 0-22.3 2.4-31.1 6.8-10 4.6-18.7 11.5-26 20.6-11.8 14.6-18.9 34.3-20.6 56.4-.1.7-.1 1.3-.2 2s-.1 1.2-.1 1.9c-.1 1.2-.1 2.4-.1 3.6 0 1.9-.1 3.8 0 5.8 1.2 50.1 28.2 90.2 76.3 90.2 2.7 0 5.3-.1 7.9-.4l0 20.4c0 43.4-35.2 78.6-78.6 78.6L78.6 480C35.2 480 0 444.8 0 401.4L0 110.6C0 67.2 35.2 32 78.6 32l290.8 0zM82.3 138.9l.3.1c13.2 3 19.8 7.4 19.8 23.4l0 187.2c0 16-6.7 20.4-19.9 23.4l-.3.1 0 2.8 52.8 0 0-2.8-.3-.1c-13.2-3-19.9-7.4-19.9-23.4l0-176.3 86.1 202.5 4.9 0 88.6-208.2 0 186.6c-1.1 12.6-7.8 16.5-19.7 19.2l-.3.1 0 2.7 91.9 0 0-2.7-.3-.1c-11.9-2.7-18.7-6.6-19.9-19.2l-.1-191.8.1 0c0-16 6.7-20.4 19.9-23.4l.3-.1 0-2.7-72.2 0-67 157.4-67-157.4-77.8 0 0 2.7z"/>
            </svg>
            <span>Medium</span>
          </a>
          <a
            href="https://www.scoop.it/topic/uae-marketing-agency"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Visit our Scoop.it"
            class="social-link"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <circle cx="12" cy="12" r="10"/>
              <path d="M12 6v6l4 2"/>
            </svg>
            <span>Scoop.it</span>
          </a>
        </div>

        <div class="contact-info">
          <h4>Direct Contact</h4>
          <a href="mailto:agencyuaemarketing@gmail.com" class="info-item">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <rect x="3" y="5" width="18" height="14" rx="2"/>
              <path d="M3 7l9 6 9-6"/>
            </svg>
            <span>agencyuaemarketing@gmail.com</span>
          </a>
        </div>
      </aside>
    </div>

    <div class="map-section">
      <h3>See Our Office on Map</h3>
      <div class="map">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3607.7022010470473!2d55.3114016!3d25.2806014!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85b1c5887b46d6a1%3A0x516d22a818b30cc3!2sUAE%20MARKETING%20AGENCY!5e0!3m2!1sen!2s!4v1761085025765!5m2!1sen!2s"
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  </div>
</template>

<script>
import emailjs from "emailjs-com";

export default {
  name: "ContactSection",
  data() {
    return {
      form: {
        name: "",
        email: "",
        phone: "",
        company: "",
        services: [],
        message: "",
      },
      errors: {
        name: "",
        email: "",
        phone: "",
        message: "",
      },
      services: [
        "SEO",
        "Local SEO Service",
        "GMB Creation",
        "Web Development Services & Courses",
        "Graphic Designing",
        "Google & Meta Ads Services",
        "Content Writing",
        "Search Engine Marketing",
        "Answer Engine Optimization",
        "Geo-Targeted Marketing",
        "SERP Optimization",
        "GMB Ranking",
        "Guest Post Paid Service",
      ],
      isLoading: false,
      notification: {
        show: false,
        type: "",
        message: "",
      },
    };
  },
  mounted() {
    emailjs.init("D3ltS7qvCXrmxGUVo");
  },
  methods: {
    validateField(field) {
      switch (field) {
        case "name":
          if (!this.form.name) {
            this.errors.name = "Name is required";
          } else if (this.form.name.length < 2) {
            this.errors.name = "Name must be at least 2 characters";
          }
          break;
        case "email":
          if (!this.form.email) {
            this.errors.email = "Email is required";
          } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(this.form.email)) {
            this.errors.email = "Please enter a valid email address";
          }
          break;
        case "phone":
          if (!this.form.phone) {
            this.errors.phone = "Phone number is required";
          } else if (!/^[+]?[\d\s\-()]+$/.test(this.form.phone)) {
            this.errors.phone = "Please enter a valid phone number";
          }
          break;
        case "message":
          if (!this.form.message) {
            this.errors.message = "Message is required";
          } else if (this.form.message.length < 10) {
            this.errors.message = "Message must be at least 10 characters";
          }
          break;
      }
    },
    clearError(field) {
      this.errors[field] = "";
    },
    showNotification(type, message) {
      this.notification = {
        show: true,
        type,
        message,
      };

      setTimeout(() => {
        this.notification.show = false;
      }, 5000);
    },
    async sendEmail() {
      // Validate all fields
      this.validateField("name");
      this.validateField("email");
      this.validateField("phone");
      this.validateField("message");

      // Check if there are any errors
      if (Object.values(this.errors).some(error => error !== "")) {
        this.showNotification("error", "Please fix the errors before submitting.");
        return;
      }

      this.isLoading = true;

      try {
        await emailjs.send("service_ghuovwp", "template_y4q4ivh", {
          to_email: "agencyuaemarketing@gmail.com",
          name: this.form.name,
          email: this.form.email,
          phone: this.form.phone,
          company: this.form.company || "Not specified",
          services:
            this.form.services.length > 0
              ? this.form.services.join(", ")
              : "None selected",
          message: this.form.message,
        });

        this.showNotification(
          "success",
          "Message sent successfully! We'll get back to you soon."
        );
        this.reset();
      } catch (error) {
        console.error("Email sending failed:", error);
        this.showNotification(
          "error",
          "Failed to send message. Please try again later."
        );
      } finally {
        this.isLoading = false;
      }
    },
    reset() {
      this.form = {
        name: "",
        email: "",
        phone: "",
        company: "",
        services: [],
        message: "",
      };
      this.errors = {
        name: "",
        email: "",
        phone: "",
        message: "",
      };
    },
  },
};
</script>

<style scoped>
* {
  box-sizing: border-box;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
}

.grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 24px;
  margin-bottom: 48px;
}

.header-section {
  margin-bottom: 24px;
}

h2 {
  font-size: 32px;
  font-weight: 700;
  margin: 0 0 12px;
  color: var(--text, #1a1a1a);
}

h3 {
  font-size: 20px;
  font-weight: 600;
  margin: 0 0 12px;
  color: var(--text, #1a1a1a);
}

h4 {
  font-size: 16px;
  font-weight: 600;
  margin: 0 0 12px;
  color: var(--text, #1a1a1a);
}

.muted {
  color: var(--muted, #666);
  font-size: 15px;
  line-height: 1.6;
}

.card {
  background: rgba(255, 255, 255, 0.8);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(0, 0, 0, 0.08);
  border-radius: 16px;
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.04);
}

.form {
  padding: 28px;
}

.form-row {
  display: grid;
  grid-template-columns: 1fr;
  gap: 20px;
  margin-bottom: 20px;
}

.field {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

label {
  font-size: 14px;
  font-weight: 500;
  color: var(--text, #1a1a1a);
}

.required {
  color: #ef4444;
}

.input-wrapper {
  position: relative;
  display: flex;
  align-items: center;
}

.input-icon {
  position: absolute;
  left: 14px;
  color: #9ca3af;
  pointer-events: none;
  z-index: 1;
}

input,
textarea {
  width: 100%;
  color: var(--text, #1a1a1a);
  background: #ffffff;
  border: 2px solid rgba(0, 0, 0, 0.1);
  border-radius: 12px;
  padding: 12px 14px;
  font-size: 15px;
  outline: none;
  transition: all 0.2s ease;
}

input {
  padding-left: 44px;
}

input:focus,
textarea:focus {
  border-color: #046e2f;
  box-shadow: 0 0 0 3px rgba(4, 110, 47, 0.15);
  background: #ffffff;
}

input.has-error,
textarea.has-error {
  border-color: #ef4444;
}

.error-message {
  font-size: 13px;
  color: #ef4444;
  margin-top: -4px;
}

.textarea-wrapper {
  position: relative;
}

.char-count {
  position: absolute;
  bottom: 12px;
  right: 14px;
  font-size: 12px;
  color: #9ca3af;
  background: rgba(255, 255, 255, 0.9);
  padding: 2px 6px;
  border-radius: 4px;
}

.services-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 10px;
}

.service-checkbox {
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 12px 16px;
  background: #ffffff;
  border: 2px solid rgba(0, 0, 0, 0.08);
  border-radius: 12px;
  cursor: pointer;
  transition: all 0.2s ease;
  position: relative;
}

.service-checkbox:hover {
  border-color: rgba(4, 110, 47, 0.4);
  background: rgba(4, 110, 47, 0.02);
  transform: translateY(-1px);
}

.service-checkbox.selected {
  border-color: #046e2f;
  background: rgba(4, 110, 47, 0.08);
}

.service-checkbox input[type="checkbox"] {
  position: absolute;
  opacity: 0;
  width: 0;
  height: 0;
  padding: 0;
  margin: 0;
}

.checkmark {
  width: 20px;
  height: 20px;
  border: 2px solid #d1d5db;
  border-radius: 6px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.2s ease;
  flex-shrink: 0;
  background: #ffffff;
}

.service-checkbox.selected .checkmark {
  background: #046e2f;
  border-color: #046e2f;
}

.checkmark svg {
  opacity: 0;
  transform: scale(0.5);
  transition: all 0.2s ease;
  stroke: #ffffff;
}

.service-checkbox.selected .checkmark svg {
  opacity: 1;
  transform: scale(1);
}

.service-label {
  font-size: 14px;
  color: var(--text, #1a1a1a);
}

.service-count {
  font-weight: 400;
  color: #046e2f;
  margin-left: 4px;
}

.actions {
  display: flex;
  gap: 12px;
  margin-top: 24px;
}

.btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  padding: 12px 24px;
  border-radius: 12px;
  font-size: 15px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s ease;
  border: none;
  outline: none;
}

.btn-primary {
  background: linear-gradient(135deg, #ff0000 0%, #046e2f 100%);
  color: #ffffff;
  box-shadow: 0 2px 8px rgba(4, 110, 47, 0.3);
}

.btn-primary:hover:not(:disabled) {
  transform: translateY(-2px);
  box-shadow: 0 4px 16px rgba(4, 110, 47, 0.4);
}

.btn-primary:active:not(:disabled) {
  transform: translateY(0);
}

.btn-outline {
  background: transparent;
  color: var(--text, #1a1a1a);
  border: 2px solid rgba(0, 0, 0, 0.1);
}

.btn-outline:hover:not(:disabled) {
  border-color: rgba(0, 0, 0, 0.2);
  background: rgba(0, 0, 0, 0.02);
}

.btn:disabled {
  opacity: 0.6;
  cursor: not-allowed;
}

.loading {
  display: flex;
  align-items: center;
  gap: 8px;
}

.spinner {
  animation: spin 1s linear infinite;
}

@keyframes spin {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}

.notification {
  padding: 16px 20px;
  border-radius: 12px;
  margin-bottom: 24px;
  display: flex;
  align-items: center;
  gap: 12px;
  font-size: 14px;
  font-weight: 500;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
}

.notification-icon {
  flex-shrink: 0;
}

.notification-fade-enter-active,
.notification-fade-leave-active {
  transition: all 0.3s ease;
}

.notification-fade-enter-from {
  transform: translateY(-20px);
  opacity: 0;
}

.notification-fade-leave-to {
  transform: translateY(-20px);
  opacity: 0;
}

.notification-success {
  background: rgba(34, 197, 94, 0.1);
  border: 2px solid rgba(34, 197, 94, 0.3);
  color: #16a34a;
}

.notification-error {
  background: rgba(239, 68, 68, 0.1);
  border: 2px solid rgba(239, 68, 68, 0.3);
  color: #dc2626;
}

.notification-info {
  background: rgba(4, 110, 47, 0.1);
  border: 2px solid rgba(4, 110, 47, 0.3);
  color: #046e2f;
}

.side {
  padding: 28px;
  height: fit-content;
  position: sticky;
  top: 20px;
}

.socials {
  display: grid;
  gap: 10px;
  margin-top: 16px;
}

.social-link {
  display: flex;
  align-items: center;
  gap: 12px;
  color: var(--text, #1a1a1a);
  padding: 12px 14px;
  border-radius: 12px;
  border: 2px solid rgba(0, 0, 0, 0.06);
  background: rgba(255, 255, 255, 0.5);
  transition: all 0.2s ease;
  text-decoration: none;
  font-size: 14px;
}

.social-link:hover {
  border-color: rgba(4, 110, 47, 0.5);
  background: rgba(4, 110, 47, 0.08);
  transform: translateX(4px);
}

.social-link svg {
  flex-shrink: 0;
}

.contact-info {
  margin-top: 32px;
  padding-top: 24px;
  border-top: 1px solid rgba(0, 0, 0, 0.08);
}

.info-item {
  display: flex;
  align-items: center;
  gap: 12px;
  color: var(--text, #1a1a1a);
  padding: 12px 14px;
  border-radius: 12px;
  background: rgba(4, 110, 47, 0.05);
  border: 2px solid rgba(4, 110, 47, 0.2);
  text-decoration: none;
  font-size: 14px;
  transition: all 0.2s ease;
}

.info-item:hover {
  background: rgba(4, 110, 47, 0.1);
  border-color: rgba(4, 110, 47, 0.4);
}

.map-section {
  margin-top: 48px;
}

.map-section h3 {
  margin-bottom: 20px;
  font-size: 24px;
}

.map {
  width: 100%;
  height: 450px;
  border-radius: 16px;
  overflow: hidden;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.1);
}

.map iframe {
  width: 100%;
  height: 100%;
  border: 0;
  display: block;
}

@media (min-width: 640px) {
  .form-row {
    grid-template-columns: 1fr 1fr;
  }

  .services-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (min-width: 900px) {
  .grid {
    grid-template-columns: 1.3fr 0.7fr;
    align-items: start;
  }

  h2 {
    font-size: 36px;
  }
}

@media (min-width: 1024px) {
  .services-grid {
    grid-template-columns: repeat(3, 1fr);
  }
}
</style>