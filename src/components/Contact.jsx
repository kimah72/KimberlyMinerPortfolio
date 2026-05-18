import { useState } from "react"
import "./Contact.css"

function Contact() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        subject: "",
        message: "",
        website: "",
    })

    const [errors, setErrors] = useState({})
    const [status, setStatus] = useState(null)
    const [loading, setLoading] = useState(false)

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value })
    }

    const validate = () => {
        const newErrors = {}
        if (!formData.name.trim()) newErrors.name = "Name is required"
        if (!formData.email.trim()) newErrors.email = "Email is required"
        if (!formData.subject.trim()) newErrors.subject = "Subject is required"
        if (!formData.message.trim()) newErrors.message = "Message is required"
        return newErrors
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        const newErrors = validate()
        if (Object.keys(newErrors).length > 0) {
            setErrors(newErrors)
            return
        }
        setErrors({})
        setLoading(true)

        try {
            // await sendMessage(formData)
            // TODO: wire up SES/Nodemailer backend on deployment
            setStatus('success')
            setFormData({ name: "", email: "", subject: "", message: "", website: "" })
        } catch (err) {
            if (err.message.includes('Too many')) {
                setStatus('rate-limited')
            } else {
                setStatus('error')
            }
        } finally {
            setLoading(false)
        }
    }

    return (
        <section id="contact">
            <div className="contact-wrap">
                <h2>Contact</h2>
                <p className="contact-intro">Have a question or want to work together? Send me a message.</p>

                {status === 'success' && (
                    <div className="contact-success">
                        Message received — I'll get back to you soon!
                    </div>
                )}
                {status === 'rate-limited' && (
                    <div className="contact-error">
                        Too many messages — please try again in an hour.
                    </div>
                )}
                {status === 'error' && (
                    <div className="contact-error">
                        Something went wrong — please try again.
                    </div>
                )}

                {status !== 'success' && (
                    <form className="contact-form" onSubmit={handleSubmit}>

                        <div style={{ display: 'none' }} aria-hidden="true">
                            <label htmlFor="website">Website</label>
                            <input
                                id="website"
                                type="text"
                                name="website"
                                value={formData.website}
                                onChange={handleChange}
                                tabIndex="-1"
                                autoComplete="off"
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="name">Name</label>
                            <input
                                id="name"
                                type="text"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                placeholder="Your name"
                            />
                            {errors.name && <span className="form-error">{errors.name}</span>}
                        </div>

                        <div className="form-group">
                            <label htmlFor="email">Email</label>
                            <input
                                id="email"
                                type="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                placeholder="you@example.com"
                            />
                            {errors.email && <span className="form-error">{errors.email}</span>}
                        </div>

                        <div className="form-group">
                            <label htmlFor="subject">Subject</label>
                            <input
                                id="subject"
                                type="text"
                                name="subject"
                                value={formData.subject}
                                onChange={handleChange}
                                placeholder="What's this about?"
                            />
                            {errors.subject && <span className="form-error">{errors.subject}</span>}
                        </div>

                        <div className="form-group">
                            <label htmlFor="message">Message</label>
                            <textarea
                                id="message"
                                name="message"
                                value={formData.message}
                                onChange={handleChange}
                                placeholder="Write your message..."
                                rows="8"
                            />
                            {errors.message && <span className="form-error">{errors.message}</span>}
                        </div>

                        <button
                            type="submit"
                            className="btn-primary"
                            disabled={loading}
                        >
                            {loading ? 'Sending...' : 'Send Message'}
                        </button>

                    </form>
                )}
            </div>
        </section>
    )
}

export default Contact