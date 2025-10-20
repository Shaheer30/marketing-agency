<template>
  <div class="container">
    <div class="grid">
      <div>
        <h2>Contact Us</h2>
        <p class="muted">
          Tell us about your goals and which services you're interested in.
          We'll respond within 1–2 business days.
        </p>

        <div
          v-if="notification.show"
          :class="['notification', `notification-${notification.type}`]"
          role="alert"
        >
          <span>{{ notification.message }}</span>
        </div>

        <form class="form card" @submit.prevent="sendEmail" novalidate>
          <div class="field">
            <label for="name">Name</label>
            <input
              id="name"
              v-model.trim="form.name"
              type="text"
              required
              placeholder="Jane Doe"
            />
          </div>

          <div class="field">
            <label for="email">Email</label>
            <input
              id="email"
              v-model.trim="form.email"
              type="email"
              required
              placeholder="jane@company.com"
            />
          </div>

          <div class="field">
            <label for="phone">Phone</label>
            <input
              id="phone"
              v-model.trim="form.phone"
              type="tel"
              required
              placeholder="+1 (555) 000-0000"
            />
          </div>

          <div class="field">
            <label for="company">Company</label>
            <input
              id="company"
              v-model.trim="form.company"
              type="text"
              placeholder="Your Company"
            />
          </div>

          <div class="field">
            <label>Services Interested In</label>
            <div class="services-grid">
              <label
                v-for="service in services"
                :key="service"
                class="service-checkbox"
              >
                <input
                  type="checkbox"
                  :value="service"
                  v-model="form.services"
                />
                <span>{{ service }}</span>
              </label>
            </div>
          </div>

          <div class="field">
            <label for="message">Message</label>
            <textarea
              id="message"
              v-model.trim="form.message"
              rows="5"
              placeholder="What would you like to achieve?"
            ></textarea>
          </div>

          <div class="actions">
            <button class="btn btn-primary" type="submit" :disabled="isLoading">
              {{ isLoading ? "Sending..." : "Send Message" }}
            </button>
            <button
              class="btn btn-outline"
              type="button"
              @click="reset"
              :disabled="isLoading"
            >
              Reset
            </button>
          </div>
        </form>
      </div>

      <aside class="side card">
        <h3>Connect</h3>
        <p class="muted">Follow for tips and case studies.</p>
        <div class="socials">
          <a
            href="https://maps.app.goo.gl/pvMDiNtFc3mhb2eJA"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Visit our GMB"
          >
            <svg
              width="22"
              height="22"
              viewBox="0 0 24 24"
              fill="currentColor"
              aria-hidden="true"
            >
              <path
                d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm3.5-9c.83 0 1.5-.67 1.5-1.5S16.33 8 15.5 8 14 8.67 14 9.5s.67 1.5 1.5 1.5z"
              />
            </svg>
            <span>GMB (UAE)</span>
          </a>
          <a
            href="https://www.facebook.com/profile.php?id=61579908015868"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Visit our Facebook"
          >
            <svg
              width="22"
              height="22"
              viewBox="0 0 24 24"
              fill="currentColor"
              aria-hidden="true"
            >
              <path
                d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"
              />
            </svg>
            <span>Facebook</span>
          </a>
          <a
            href="https://www.instagram.com/agencyuaemarketing/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Visit our Instagram"
          >
            <svg
              width="22"
              height="22"
              viewBox="0 0 24 24"
              fill="currentColor"
              aria-hidden="true"
            >
              <path
                d="M7 2h10a5 5 0 0 1 5 5v10a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5Zm0 2a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V7a3 3 0 0 0-3-3H7Zm5 3.5A5.5 5.5 0 1 1 6.5 13 5.5 5.5 0 0 1 12 7.5Zm0 2A3.5 3.5 0 1 0 15.5 13 3.5 3.5 0 0 0 12 9.5Zm5.8-2.8a1 1 0 1 1-1.6 1.2 1 1 0 0 1 1.6-1.2Z"
              />
            </svg>
            <span>@agencyuaemarketing</span>
          </a>
          <a
            href="https://x.com/uaemarketingg"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Visit our X"
          >
            <svg
              width="22"
              height="22"
              viewBox="0 0 24 24"
              fill="currentColor"
              aria-hidden="true"
            >
              <path
                d="M22 5.8c-.7.3-1.4.5-2.2.6.8-.5 1.4-1.2 1.7-2-.7.5-1.6.8-2.5 1a4 4 0 0 0-6.9 3.6 11.4 11.4 0 0 1-8.3-4.2A4 4 0 0 0 6 9c-.6 0-1.2-.2-1.7-.4v.1c0 1.9 1.4 3.6 3.2 4-.4.1-.8.2-1.3.2-.3 0-.6 0-.9-.1a4 4 0 0 0 3.7 2.7 8 8 0 0 1-5 1.7c-.3 0-.6 0-.9-.1a11.3 11.3 0 0 0 6.1 1.8c7.4 0 11.5-6.1 11.5-11.5v-.5c.8-.5 1.4-1.2 1.9-2z"
              />
            </svg>
            <span>@uaemarketingg</span>
          </a>
          <a
            href="https://www.linkedin.com/company/uae-mareting-agency/?viewAsMember=true"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Visit our LinkedIn"
          >
            <svg
              width="22"
              height="22"
              viewBox="0 0 24 24"
              fill="currentColor"
              aria-hidden="true"
            >
              <path
                d="M4.98 3.5C4.98 4.88 3.87 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1s2.48 1.12 2.48 2.5ZM.5 8.5h4V24h-4V8.5Zm7.5 0h3.8v2.1h.05c.53-1 1.83-2.1 3.77-2.1 4.03 0 4.78 2.65 4.78 6.1V24h-4v-6.8c0-1.63-.03-3.72-2.27-3.72-2.27 0-2.62 1.77-2.62 3.6V24h-4V8.5Z"
              />
            </svg>
            <span>@agencyuaemarketing</span>
          </a>

          <a
            href="https://www.pinterest.com/agencyuaemarketing/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Visit our Pinterest"
          >
            <svg
              width="22"
              height="22"
              viewBox="0 0 24 24"
              fill="currentColor"
              aria-hidden="true"
            >
              <path
                d="M12 0C5.373 0 0 5.373 0 12c0 5.084 3.163 9.426 7.627 11.174-.105-.937-.2-2.378.042-3.402.224-.937 1.461-6.169 1.461-6.169s-.362-.725-.362-1.781c0-1.669.968-2.914 2.171-2.914 1.023 0 1.518.768 1.518 1.69 0 1.029-.655 2.568-.994 3.995-.283 1.194.597 2.169 1.777 2.169 2.133 0 3.772-2.249 3.772-5.495 0-2.873-2.064-4.882-5.012-4.882-3.414 0-5.418 2.561-5.418 5.207 0 1.031.397 2.138.893 2.738.098.119.112.224.083.345l-.333 1.36c-.053.22-.174.267-.402.161-1.499-.698-2.436-2.889-2.436-4.649 0-3.785 2.75-7.262 7.929-7.262 4.163 0 7.398 2.967 7.398 6.931 0 4.136-2.607 7.464-6.227 7.464-1.216 0-2.359-.631-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146 1.124.347 2.317.535 3.554.535 6.627 0 12-5.373 12-12 0-6.627-5.373-12-12-12z"
              />
            </svg>
            <span>agencyuaemarketing</span>
          </a>
          <a
            href="https://medium.com/@agencyuaemarketing"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Visit our Medium"
          >
            <svg
              width="22"
              height="22"
              viewBox="0 0 448 512"
              fill="currentColor"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M369.4 32c43.4 0 78.6 35.2 78.6 78.6l0 83.8c-1.9-.1-3.8-.2-5.7-.2l-.4 0c-10 0-22.3 2.4-31.1 6.8-10 4.6-18.7 11.5-26 20.6-11.8 14.6-18.9 34.3-20.6 56.4-.1 .7-.1 1.3-.2 2s-.1 1.2-.1 1.9c-.1 1.2-.1 2.4-.1 3.6 0 1.9-.1 3.8 0 5.8 1.2 50.1 28.2 90.2 76.3 90.2 2.7 0 5.3-.1 7.9-.4l0 20.4c0 43.4-35.2 78.6-78.6 78.6L78.6 480C35.2 480 0 444.8 0 401.4L0 110.6C0 67.2 35.2 32 78.6 32l290.8 0zM82.3 138.9l.3 .1c13.2 3 19.8 7.4 19.8 23.4l0 187.2c0 16-6.7 20.4-19.9 23.4l-.3 .1 0 2.8 52.8 0 0-2.8-.3-.1c-13.2-3-19.9-7.4-19.9-23.4l0-176.3 86.1 202.5 4.9 0 88.6-208.2 0 186.6c-1.1 12.6-7.8 16.5-19.7 19.2l-.3 .1 0 2.7 91.9 0 0-2.7-.3-.1c-11.9-2.7-18.7-6.6-19.9-19.2l-.1-191.8 .1 0c0-16 6.7-20.4 19.9-23.4l.3-.1 0-2.7-72.2 0-67 157.4-67-157.4-77.8 0 0 2.7zM448 340.3c-25.1-7.4-43-35.1-41.2-67.8l0 0 41.1 0 0 67.8zm-6.4-135.6c2.3 0 4.4 .3 6.4 .9l0 57.4-40.2 0c1.5-33.6 13.6-57.9 33.8-58.3z"
              />
            </svg>

            <span>@agencyuaemarketing</span>
          </a>
          <a
            href="https://www.scoop.it/topic/uae-marketing-agency"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Visit our Scoop.it"
          >
            <svg
              width="22"
              height="22"
              viewBox="0 0 200 200"
              fill="currentColor"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle cx="100" cy="100" r="100" fill="currentColor" />
              <text
                x="50%"
                y="54%"
                fill="#ffffff"
                font-family="Arial, sans-serif"
                font-size="52"
                font-weight="bold"
                text-anchor="middle"
                dominant-baseline="middle"
              >
                Scoop.it!
              </text>
            </svg>

            <span>uae-marketing-agency</span>
          </a>
        </div>
      </aside>
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
        type: "", // success, error, info
        message: "",
      },
    };
  },
  mounted() {
    // Initialize EmailJS with your public key
    emailjs.init("D3ltS7qvCXrmxGUVo");
    console.log("Component mounted, notification state:", this.notification);
  },
  methods: {
    showNotification(type, message) {
      this.notification = {
        show: true,
        type,
        message,
      };

      setTimeout(() => {
        this.notification.show = false;
      }, 4000);
    },
    async sendEmail() {
      // Validate required fields
      if (
        !this.form.name ||
        !this.form.email ||
        !this.form.phone ||
        !this.form.message
      ) {
        this.showNotification("error", "Please fill in all required fields.");
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
    },
  },
};
</script>

<style scoped>
.grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 18px;
}
h2 {
  font-size: 28px;
  margin: 0 0 8px;
}
.muted {
  color: var(--muted);
}

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
input,
textarea {
  width: 100%;
  color: var(--text);
  background: rgba(255, 255, 255, 0.03);
  border: 1px solid rgba(255, 255, 255, 0.14);
  border-radius: 10px;
  padding: 10px 12px;
  outline: none;
  transition: border-color 0.2s ease, box-shadow 0.2s ease, background 0.2s ease;
  border: 2px solid rgba(0, 0, 0, 0.08);
}
input:focus,
textarea:focus {
  border-color: rgba(0, 0, 0, 0.08);
  box-shadow: 0 0 0 3px rgba(34, 211, 238, 0.2);
  background: rgba(255, 255, 255, 0.05);
}

.services-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 8px;
}

.service-checkbox {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 10px 12px;
  background: rgba(255, 255, 255, 0.03);
  border: 1px solid rgba(255, 255, 255, 0.14);
  border-radius: 10px;
  cursor: pointer;
  transition: border-color 0.2s ease, background 0.2s ease;
}

.service-checkbox:hover {
  border-color: rgba(34, 211, 238, 0.4);
  background: rgba(34, 211, 238, 0.05);
}

.service-checkbox input[type="checkbox"] {
  width: auto;
  margin: 0;
  padding: 0;
  cursor: pointer;
}

.service-checkbox span {
  font-size: 14px;
  color: var(--text);
}

.actions {
  display: flex;
  gap: 10px;
  margin-top: 8px;
}

.side {
  padding: 16px;
  height: fit-content;
}
.side h3 {
  margin: 0 0 8px;
}

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
  border: 1px solid rgba(255, 255, 255, 0.08);
  background: rgba(255, 255, 255, 0.02);
  transition: border-color 0.2s ease, background 0.2s ease, transform 0.15s ease;
}
.socials a:hover {
  border-color: rgba(34, 211, 238, 0.5);
  background: rgba(34, 211, 238, 0.06);
  transform: translateY(-1px);
}

button:disabled {
  opacity: 0.6;
  cursor: not-allowed;
}

.notification {
  padding: 12px 16px;
  border-radius: 10px;
  margin-bottom: 16px;
  display: flex;
  align-items: center;
  gap: 10px;
  animation: slideIn 0.3s ease-out;
  font-size: 14px;
}

@keyframes slideIn {
  from {
    transform: translateY(-20px);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
}

.notification-success {
  background: rgba(34, 197, 94, 0.15);
  border: 1px solid rgba(34, 197, 94, 0.4);
  color: #22c55e;
}

.notification-error {
  background: rgba(239, 68, 68, 0.15);
  border: 1px solid rgba(239, 68, 68, 0.4);
  color: #ef4444;
}

.notification-info {
  background: rgba(34, 211, 238, 0.15);
  border: 1px solid rgba(34, 211, 238, 0.4);
  color: #22d3ee;
}

@media (min-width: 900px) {
  .grid {
    grid-template-columns: 1.2fr 0.8fr;
    align-items: start;
  }
}
</style>
