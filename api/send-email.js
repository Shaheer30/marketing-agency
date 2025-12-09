import nodemailer from 'nodemailer'

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

export default async function handler(req, res) {
    // CORS headers
    res.setHeader('Access-Control-Allow-Credentials', 'true')
    res.setHeader('Access-Control-Allow-Origin', '*')
    res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,PATCH,DELETE,POST,PUT')
    res.setHeader('Access-Control-Allow-Headers', 'X-CSRF-Token,X-Requested-With,Accept,Accept-Version,Content-Length,Content-MD5,Content-Type,Date,X-Api-Version')

    // Handle preflight
    if (req.method === 'OPTIONS') {
        res.status(200).end()
        return
    }

    // Only allow POST requests
    if (req.method !== 'POST') {
        console.log('❌ Invalid method:', req.method)
        return res.status(405).json({ message: 'Method not allowed' })
    }

    console.log('📨 Received request body:', JSON.stringify(req.body, null, 2))

    const { name, email, phone, company, services, message } = req.body

    // Validate required fields
    if (!name || !email || !phone || !company || !services || !message) {
        console.log('❌ Missing fields:', { name, email, phone, company, services, message })
        return res.status(400).json({ 
            message: 'Missing required fields',
            received: { name, email, phone, company, services, message }
        })
    }

    // Check environment variables
    if (!process.env.EMAIL_USER) {
        console.error('❌ EMAIL_USER not set')
        return res.status(500).json({ 
            message: 'Server configuration error',
            error: 'EMAIL_USER environment variable not set'
        })
    }

    if (!process.env.EMAIL_PASS) {
        console.error('❌ EMAIL_PASS not set')
        return res.status(500).json({ 
            message: 'Server configuration error',
            error: 'EMAIL_PASS environment variable not set'
        })
    }

    console.log('✅ Environment variables loaded')
    console.log('📧 Email user:', process.env.EMAIL_USER)
    console.log('📧 Email pass length:', process.env.EMAIL_PASS.length)

    try {
        // Create transporter with explicit SMTP configuration
        console.log('🔧 Creating transporter...')
        const transporter = nodemailer.createTransport({
            host: 'smtp.gmail.com',
            port: 465,
            secure: true,
            auth: {
                user: process.env.EMAIL_USER,
                pass: process.env.EMAIL_PASS
            },
            tls: {
                rejectUnauthorized: true
            }
        })

        console.log('🔐 Verifying transporter connection...')
        // Verify connection
        await new Promise((resolve, reject) => {
            transporter.verify(function (error, success) {
                if (error) {
                    console.error('❌ Transporter verification failed:', error.message)
                    reject(error)
                } else {
                    console.log('✅ Transporter verified successfully')
                    resolve(success)
                }
            })
        })

        console.log('📤 Sending company email to:', process.env.EMAIL_USER)
        // Email to your company
        await new Promise((resolve, reject) => {
            const mailOptions = {
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
            }

            transporter.sendMail(mailOptions, function (err, info) {
                if (err) {
                    console.error('❌ Failed to send company email:', err.message)
                    reject(err)
                } else {
                    console.log('✅ Company email sent successfully')
                    resolve(info)
                }
            })
        })

        console.log('📬 Sending confirmation email to:', email)
        // Confirmation email to user
        await new Promise((resolve, reject) => {
            const mailOptions = {
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
            }

            transporter.sendMail(mailOptions, function (err, info) {
                if (err) {
                    console.error('❌ Failed to send confirmation email:', err.message)
                    reject(err)
                } else {
                    console.log('✅ Confirmation email sent successfully')
                    resolve(info)
                }
            })
        })

        console.log('🎉 All emails sent successfully')
        return res.status(200).json({
            message: 'Email sent successfully',
            success: true
        })
    } catch (error) {
        console.error('💥 Error in handler:', error.message)
        console.error('Stack trace:', error.stack)
        return res.status(500).json({
            message: 'Failed to send email. Please try again later.',
            error: error.message,
            details: error.toString()
        })
    }
}