import { motion } from 'framer-motion';
import { useState } from 'react';
import AnimatedSection from '../components/AnimatedSection';
import './Contact.css';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });

    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Here you would typically send the form data to a backend
        console.log('Form submitted:', formData);
        setIsSubmitted(true);

        // Reset form after 3 seconds
        setTimeout(() => {
            setFormData({ name: '', email: '', subject: '', message: '' });
            setIsSubmitted(false);
        }, 3000);
    };

    const contactInfo = [
        {
            icon: '📧',
            title: 'Email',
            value: 'hello@devagency.com',
            link: 'mailto:hello@devagency.com'
        },
        {
            icon: '📱',
            title: 'Phone',
            value: '+1 (555) 123-4567',
            link: 'tel:+15551234567'
        },
        {
            icon: '📍',
            title: 'Location',
            value: 'San Francisco, CA',
            link: '#'
        }
    ];

    return (
        <div className="contact-page">
            {/* Header */}
            <section className="contact-header">
                <div className="container">
                    <AnimatedSection>
                        <h1>Get In Touch</h1>
                        <p className="header-subtitle">
                            Have a project in mind? We'd love to hear from you. Send us a message
                            and we'll respond as soon as possible.
                        </p>
                    </AnimatedSection>
                </div>
            </section>

            {/* Contact Content */}
            <section className="section contact-content-section">
                <div className="container">
                    <div className="contact-grid">
                        {/* Contact Form */}
                        <AnimatedSection>
                            <div className="contact-form-wrapper">
                                <h2>Send us a message</h2>

                                {isSubmitted ? (
                                    <motion.div
                                        className="success-message"
                                        initial={{ opacity: 0, scale: 0.8 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                    >
                                        <div className="success-icon">✓</div>
                                        <h3>Thank you!</h3>
                                        <p>Your message has been sent successfully. We'll get back to you soon!</p>
                                    </motion.div>
                                ) : (
                                    <form className="contact-form" onSubmit={handleSubmit}>
                                        <div className="form-group">
                                            <label htmlFor="name">Your Name</label>
                                            <input
                                                type="text"
                                                id="name"
                                                name="name"
                                                value={formData.name}
                                                onChange={handleChange}
                                                required
                                                placeholder="John Doe"
                                            />
                                        </div>

                                        <div className="form-group">
                                            <label htmlFor="email">Email Address</label>
                                            <input
                                                type="email"
                                                id="email"
                                                name="email"
                                                value={formData.email}
                                                onChange={handleChange}
                                                required
                                                placeholder="john@example.com"
                                            />
                                        </div>

                                        <div className="form-group">
                                            <label htmlFor="subject">Subject</label>
                                            <input
                                                type="text"
                                                id="subject"
                                                name="subject"
                                                value={formData.subject}
                                                onChange={handleChange}
                                                required
                                                placeholder="Project Inquiry"
                                            />
                                        </div>

                                        <div className="form-group">
                                            <label htmlFor="message">Message</label>
                                            <textarea
                                                id="message"
                                                name="message"
                                                value={formData.message}
                                                onChange={handleChange}
                                                required
                                                rows="6"
                                                placeholder="Tell us about your project..."
                                            ></textarea>
                                        </div>

                                        <motion.button
                                            type="submit"
                                            className="btn btn-primary btn-full"
                                            whileHover={{ scale: 1.02 }}
                                            whileTap={{ scale: 0.98 }}
                                        >
                                            Send Message
                                        </motion.button>
                                    </form>
                                )}
                            </div>
                        </AnimatedSection>

                        {/* Contact Info */}
                        <AnimatedSection delay={0.2}>
                            <div className="contact-info-wrapper">
                                <h2>Contact Information</h2>
                                <p className="contact-info-description">
                                    Reach out to us through any of these channels. We're here to help
                                    and answer any questions you may have.
                                </p>

                                <div className="contact-info-list">
                                    {contactInfo.map((info, index) => (
                                        <motion.a
                                            key={index}
                                            href={info.link}
                                            className="contact-info-item"
                                            whileHover={{ x: 8 }}
                                        >
                                            <div className="contact-info-icon">{info.icon}</div>
                                            <div className="contact-info-text">
                                                <div className="contact-info-title">{info.title}</div>
                                                <div className="contact-info-value">{info.value}</div>
                                            </div>
                                        </motion.a>
                                    ))}
                                </div>

                                <div className="business-hours">
                                    <h3>Business Hours</h3>
                                    <p>Monday - Friday: 9:00 AM - 6:00 PM</p>
                                    <p>Saturday: 10:00 AM - 4:00 PM</p>
                                    <p>Sunday: Closed</p>
                                </div>
                            </div>
                        </AnimatedSection>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Contact;
