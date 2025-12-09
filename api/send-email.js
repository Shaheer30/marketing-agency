// api/send-email.js (for Vercel) or routes/email.js (for Express)
import nodemailer from 'nodemailer'

// Create transporter
const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS
    }
})

export default async function handler(req, res) {
    // Only allow POST requests
    if (req.method !== 'POST') {
        return res.status(405).json({ message: 'Method not allowed' })
    }

    const { name, email, phone, company, services, message } = req.body

    // Validate required fields
    if (!name || !email || !phone || !company || !services || !message) {
        return res.status(400).json({ message: 'Missing required fields' })
    }

    try {
        // Email to your company
        await transporter.sendMail({
            from: process.env.EMAIL_USER,
            to: process.env.EMAIL_USER,
            replyTo: email,
            subject: `New Contact Form Submission from ${name}`,
            html: `
                <h2>New Contact Form Submission</h2>
                <p><strong>Name:</strong> ${escapeHtml(name)}</p>
                <p><strong>Email:</strong> ${escapeHtml(email)}</p>
                <p><strong>Phone:</strong> ${escapeHtml(phone)}</p>
                <p><strong>Company:</strong> ${escapeHtml(company)}</p>
                <p><strong>Services Interested In:</strong> ${escapeHtml(services)}</p>
                <p><strong>Message:</strong></p>
                <p>${escapeHtml(message).replace(/\n/g, '<br>')}</p>
            `
        })

        // Confirmation email to user
        await transporter.sendMail({
            from: process.env.EMAIL_USER,
            to: email,
            subject: 'We received your message - UAE Marketing Agency',
            html: `
                <h2>Thank you for reaching out!</h2>
                <p>Hi ${escapeHtml(name)},</p>
                <p>We have received your message and will get back to you soon.</p>
                <p><strong>Your submission details:</strong></p>
                <p><strong>Services Interested In:</strong> ${escapeHtml(services)}</p>
                <p>Best regards,<br>UAE Marketing Agency Team</p>
            `
        })

        return res.status(200).json({
            message: 'Email sent successfully',
            success: true
        })
    } catch (error) {
        console.error('Email sending error:', error)
        return res.status(500).json({
            message: 'Failed to send email. Please try again later.',
            error: error.message
        })
    }
}

// Helper function to prevent XSS
function escapeHtml(text) {
    const map = {
        '&': '&amp;',
        '<': '&lt;',
        '>': '&gt;',
        '"': '&quot;',
        "'": '&#039;'
    }
    return text.replace(/[&<>"']/g, m => map[m])
}