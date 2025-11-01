<script setup>
import { ref, onMounted } from 'vue'
import emailjs from "emailjs-com"

onMounted(() => {
    document.title = 'Contact Us - UAE Marketing Agency'
    const metaDescription = document.querySelector('meta[name="description"]')
    if (metaDescription) {
        metaDescription.setAttribute('content', 'Get in touch with our team. We are ready to help your business grow.')
    }
    
    // Initialize EmailJS
    emailjs.init("D3ltS7qvCXrmxGUVo")
})

const form = ref({
    name: '',
    email: '',
    phone: '',
    company: '',
    services: [],
    message: ''
})

const errors = ref({
    name: '',
    email: '',
    phone: '',
    company: '',
    message: '',
    services: ''
})

const services = [
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
    "Guest Post Paid Service"
]

const isLoading = ref(false)
const notification = ref({
    show: false,
    type: '',
    message: ''
})

const validateField = (field) => {
    switch (field) {
        case 'name':
            if (!form.value.name) {
                errors.value.name = 'Name is required'
            } else if (form.value.name.length < 2) {
                errors.value.name = 'Name must be at least 2 characters'
            }
            break
        case 'email':
            if (!form.value.email) {
                errors.value.email = 'Email is required'
            } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.value.email)) {
                errors.value.email = 'Please enter a valid email address'
            }
            break
        case 'phone':
            if (!form.value.phone) {
                errors.value.phone = 'Phone number is required'
            } else if (!/^[+]?[\d\s\-()]+$/.test(form.value.phone)) {
                errors.value.phone = 'Please enter a valid phone number'
            }
            break
        case 'company':
            if (!form.value.company) {
                errors.value.company = 'Company name is required'
            } else if (form.value.company.length < 2) {
                errors.value.company = 'Company name must be at least 2 characters'
            }
            break
        case 'message':
            if (!form.value.message) {
                errors.value.message = 'Message is required'
            } else if (form.value.message.length < 10) {
                errors.value.message = 'Message must be at least 10 characters'
            }
            break
        case 'services':
            if (form.value.services.length === 0) {
                errors.value.services = 'Please select at least one service'
            }
            break
    }
}

const clearError = (field) => {
    errors.value[field] = ''
}

const showNotification = (type, message) => {
    notification.value = {
        show: true,
        type,
        message
    }

    setTimeout(() => {
        notification.value.show = false
    }, 5000)
}

const submitForm = async () => {
    // Validate all fields
    validateField('name')
    validateField('email')
    validateField('phone')
    validateField('company')
    validateField('message')
    validateField('services')

    // Check if there are any errors
    if (Object.values(errors.value).some(error => error !== '')) {
        showNotification('error', 'Please fix the errors before submitting.')
        return
    }

    isLoading.value = true

    // Prepare email data
    const emailData = {
        name: form.value.name,
        email: form.value.email,
        phone: form.value.phone,
        company: form.value.company || 'Not specified',
        services: form.value.services.length > 0 
            ? form.value.services.join(', ') 
            : 'None selected',
        message: form.value.message
    }

    try {
        const response = await emailjs.send(
            "service_jawi0kf",
            "template_y4q4ivh",
            emailData
        )

        console.log('✅ Email sent successfully:', response)
        showNotification(
            'success',
            "Message sent successfully! We'll get back to you soon."
        )
        reset()
    } catch (error) {
        console.error('❌ Email sending failed:', error)
        
        let errorMsg = 'Failed to send message. Please try again later.'
        if (error.status === 401) {
            errorMsg = 'Authentication failed. Check your Public Key.'
        } else if (error.status === 404) {
            errorMsg = 'Service ID or Template ID not found.'
        }
        
        showNotification('error', errorMsg)
    } finally {
        isLoading.value = false
    }
}

const reset = () => {
    form.value = {
        name: '',
        email: '',
        phone: '',
        company: '',
        services: [],
        message: ''
    }
    errors.value = {
        name: '',
        email: '',
        phone: '',
        company: '',
        message: '',
        services: ''
    }
}
</script>

<template>
    <div class="contact-page">
        <section class="contact-hero">
            <div class="container">
                <h1>Get In Touch</h1>
                <p>We'd love to hear from you. Send us a message and we'll respond as soon as possible.</p>
            </div>
        </section>

        <section class="contact-content">
            <div class="container">
                <div class="contact-info">
                    <div class="info-card">
                        <div class="info-icon"><i class="fa-solid fa-map-pin" style="color: #0b735b;"></i></div>
                        <h3>Location</h3>
                        <p>15 - 14th St - Deira - Abu Dhabi - UAE</p>
                    </div>
                    <div class="info-card">
                        <div class="info-icon"><i class="fa-solid fa-envelope" style="color: #0b735b;"></i></div>
                        <h3>Email</h3>
                        <a href="mailto:agencyuaemarketing@gmail.com">agencyuaemarketing@gmail.com</a>
                    </div>
                    <div class="info-card">
                        <div class="info-icon"><i class="fa-solid fa-phone-volume" style="color: #0b735b;"></i></div>
                        <h3>Phone</h3>
                        <a href="https://wa.me/971568894637?text=Hi!%20I%20want%20to%20discuss%20a%20project" target="_blank">+971 (5) 688-96637</a>
                    </div>
                </div>

                <form class="contact-form" @submit.prevent="submitForm" novalidate>
                    <div class="form-row">
                        <div class="form-group">
                            <label for="name">Full Name <span class="required">*</span></label>
                            <div class="input-wrapper">
                                <svg class="input-icon" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/>
                                    <circle cx="12" cy="7" r="4"/>
                                </svg>
                                <input
                                    id="name"
                                    v-model.trim="form.name"
                                    type="text"
                                    placeholder="Jane Doe"
                                    :class="{ 'has-error': errors.name }"
                                    @blur="validateField('name')"
                                    @input="clearError('name')"
                                    required
                                />
                            </div>
                            <span v-if="errors.name" class="error-message">{{ errors.name }}</span>
                        </div>

                        <div class="form-group">
                            <label for="email">Email Address <span class="required">*</span></label>
                            <div class="input-wrapper">
                                <svg class="input-icon" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                    <rect x="3" y="5" width="18" height="14" rx="2"/>
                                    <path d="M3 7l9 6 9-6"/>
                                </svg>
                                <input
                                    id="email"
                                    v-model.trim="form.email"
                                    type="email"
                                    placeholder="jane@company.com"
                                    :class="{ 'has-error': errors.email }"
                                    @blur="validateField('email')"
                                    @input="clearError('email')"
                                    required
                                />
                            </div>
                            <span v-if="errors.email" class="error-message">{{ errors.email }}</span>
                        </div>
                    </div>

                    <div class="form-row">
                        <div class="form-group">
                            <label for="phone">Phone <span class="required">*</span></label>
                            <div class="input-wrapper">
                                <svg class="input-icon" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
                                </svg>
                                <input
                                    id="phone"
                                    v-model.trim="form.phone"
                                    type="tel"
                                    placeholder="+971 (xxx) xxx-xxxx"
                                    :class="{ 'has-error': errors.phone }"
                                    @blur="validateField('phone')"
                                    @input="clearError('phone')"
                                    required
                                />
                            </div>
                            <span v-if="errors.phone" class="error-message">{{ errors.phone }}</span>
                        </div>

                        <div class="form-group">
                            <label for="company">Company <span class="required">*</span></label>
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
                                    :class="{ 'has-error': errors.company }"
                                    @blur="validateField('company')"
                                    @input="clearError('company')"
                                    required
                                />
                            </div>
                            <span v-if="errors.company" class="error-message">{{ errors.company }}</span>
                        </div>
                    </div>

                    <div class="form-group">
                        <label>
                            Services Interested In <span class="required">*</span>
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
                                    @change="clearError('services')"
                                />
                                <span class="service-label">{{ service }}</span>
                            </label>
                        </div>
                        <span v-if="errors.services" class="error-message">{{ errors.services }}</span>
                    </div>

                    <div class="form-group">
                        <label for="message">Message <span class="required">*</span></label>
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

                    <div class="form-actions">
                        <button type="submit" class="submit-button" :disabled="isLoading">
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

                    <div v-if="notification.show" :class="['notification', notification.type]">
                        {{ notification.message }}
                    </div>
                </form>
            </div>
        </section>
    </div>
</template>

<style scoped>
.contact-hero {
    background: linear-gradient(135deg, var(--primary-black) 0%, var(--primary-green) 100%);
    color: var(--primary-white);
    padding: 10rem 2rem;
    text-align: center;
}

.contact-hero h1 {
    font-size: 2.5rem;
    margin-bottom: 1rem;
}

.contact-hero p {
    font-size: 1.1rem;
    max-width: 600px;
    margin: 0 auto;
}

.contact-content {
    padding: 4rem 2rem;
}

.contact-content .container {
    display: grid;
    grid-template-columns: 1fr 2fr;
    gap: 3rem;
    align-items: start;
}

.contact-info {
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
}

.info-card {
    background: var(--bg-light);
    padding: 1.5rem;
    border-radius: 8px;
    text-align: center;
    border-left: 4px solid var(--primary-red);
}

.info-icon {
    font-size: 2.5rem;
    margin-bottom: 0.5rem;
}

.info-card h3 {
    color: var(--primary-red);
    margin-bottom: 0.5rem;
    font-size: 1.1rem;
}

.info-card p {
    color: var(--text-light);
}

.contact-form {
    background: var(--primary-white);
    padding: 2rem;
    border-radius: 8px;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
}

.form-row {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 1.5rem;
    margin-bottom: 1.5rem;
}

.form-group {
    margin-bottom: 1.5rem;
}

.form-group label {
    display: block;
    margin-bottom: 0.5rem;
    color: var(--primary-black);
    font-weight: 600;
    font-size: 0.95rem;
}

.required {
    color: var(--primary-red);
}

.service-count {
    color: var(--primary-green);
    font-weight: 500;
    font-size: 0.85rem;
}

.input-wrapper {
    position: relative;
    display: flex;
    align-items: center;
}

.input-icon {
    position: absolute;
    left: 0.75rem;
    color: #999;
    pointer-events: none;
}

.form-group input,
.form-group textarea {
    width: 100%;
    padding: 0.75rem 0.75rem 0.75rem 2.5rem;
    border: 2px solid var(--border-color);
    border-radius: 4px;
    font-family: inherit;
    font-size: 1rem;
    transition: border-color 0.3s ease;
}

.form-group input:focus,
.form-group textarea:focus {
    outline: none;
    border-color: var(--primary-red);
}

.form-group input.has-error,
.form-group textarea.has-error {
    border-color: #dc3545;
}

.error-message {
    display: block;
    color: #dc3545;
    font-size: 0.85rem;
    margin-top: 0.25rem;
}

.services-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
    gap: 1rem;
    margin-top: 0.75rem;
}

.service-checkbox {
    display: flex;
    align-items: center;
    gap: 0.75rem;
    padding: 0.75rem 1rem;
    border: 2px solid var(--border-color);
    border-radius: 4px;
    cursor: pointer;
    transition: all 0.3s ease;
}

.service-checkbox input {
    display: none;
}

.service-checkbox:hover {
    border-color: var(--primary-green);
    background-color: rgba(11, 115, 91, 0.05);
}

.service-checkbox.selected {
    border-color: var(--primary-green);
    background-color: rgba(11, 115, 91, 0.1);
}

.checkmark {
    width: 20px;
    height: 20px;
    border: 2px solid var(--border-color);
    border-radius: 3px;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all 0.3s ease;
}

.service-checkbox.selected .checkmark {
    background-color: var(--primary-green);
    border-color: var(--primary-green);
    color: white;
}

.service-label {
    font-size: 0.95rem;
    color: var(--primary-black);
}

.textarea-wrapper {
    position: relative;
}

.textarea-wrapper textarea {
    padding-left: 2.5rem !important;
}

.char-count {
    position: absolute;
    bottom: 0.5rem;
    right: 0.75rem;
    font-size: 0.8rem;
    color: #999;
}

.form-actions {
    margin-top: 2rem;
}

.submit-button {
    width: 100%;
    background-color: var(--primary-red);
    color: var(--primary-white);
    padding: 1rem;
    border-radius: 4px;
    border: none;
    font-weight: bold;
    font-size: 1rem;
    cursor: pointer;
    transition: background-color 0.3s ease, transform 0.3s ease;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.75rem;
}

.submit-button:hover:not(:disabled) {
    background-color: var(--primary-green);
    transform: translateY(-2px);
}

.submit-button:disabled {
    opacity: 0.6;
    cursor: not-allowed;
}

.spinner {
    animation: spin 1s linear infinite;
}

@keyframes spin {
    from { transform: rotate(0deg); }
    to { transform: rotate(360deg); }
}

.notification {
    margin-top: 1rem;
    padding: 1rem;
    border-radius: 4px;
    text-align: center;
    font-weight: 500;
    animation: slideIn 0.3s ease;
}

@keyframes slideIn {
    from { opacity: 0; transform: translateY(-10px); }
    to { opacity: 1; transform: translateY(0); }
}

.notification.success {
    background-color: #D4EDDA;
    color: #155724;
    border: 1px solid #C3E6CB;
}

.notification.error {
    background-color: #F8D7DA;
    color: #721C24;
    border: 1px solid #F5C6CB;
}

@media (max-width: 768px) {
    .contact-hero h1 {
        font-size: 2rem;
    }

    .contact-content .container {
        grid-template-columns: 1fr;
    }

    .contact-info {
        flex-direction: row;
        gap: 1rem;
    }

    .info-card {
        flex: 1;
        border-left: none;
        border-top: 4px solid var(--primary-red);
    }

    .form-row {
        grid-template-columns: 1fr;
    }

    .services-grid {
        grid-template-columns: 1fr;
    }

    .contact-form {
        padding: 1.5rem;
    }
}
</style>