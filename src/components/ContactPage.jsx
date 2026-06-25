import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import './ContactPage.css';

const faqs = [
    {
        q: "What is your typical project timeline?",
        a: "Project timelines vary greatly depending on scope and complexity. A landing page might take 2-3 weeks, while a full-scale SaaS platform or mobile app could take 3-6 months. We provide comprehensive timelines during the discovery phase."
    },
    {
        q: "Do you offer post-launch support?",
        a: "Yes! We believe in long-term partnerships. We offer flexible post-launch support and maintenance retainers to ensure your product remains secure, up-to-date, and continues to grow."
    },
    {
        q: "How do you handle pricing?",
        a: "We offer both fixed-price contracts for clearly defined scopes and time & materials (T&M) billing for projects requiring more flexibility. We will recommend the best model based on your specific needs."
    },
    {
        q: "Where are you located and how do we communicate?",
        a: "We are headquartered in Pakistan but serve clients globally. We use tools like Slack, Zoom, Jira, and GitHub to maintain seamless, transparent communication regardless of time zones."
    }
];

const ContactPage = () => {
    const [form, setForm] = useState({ name: '', email: '', service: '', message: '' });
    const [sent, setSent] = useState(false);
    const [openFaq, setOpenFaq] = useState(null);

    const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

    const handleSubmit = (e) => {
        e.preventDefault();

        // Format the message for WhatsApp
        const textMessage = `*New QubitKode Inquiry* %0A` +
            `*Name:* ${form.name} %0A` +
            `*Email:* ${form.email} %0A` +
            `*Service:* ${form.service || 'Not specified'} %0A` +
            `*Message:* ${form.message}`;

        // Open WhatsApp with pre-filled message
        window.open(`https://wa.me/447988525060?text=${textMessage}`, '_blank');

        setSent(true);
        setTimeout(() => setSent(false), 4000);
        setForm({ name: '', email: '', service: '', message: '' });
    };

    const toggleFaq = (index) => {
        if (openFaq === index) setOpenFaq(null);
        else setOpenFaq(index);
    };

    const services = [
        'Web Development', 'Mobile Development', 'AI / Machine Learning',
        'Game Development', 'SEO Optimization', 'Digital Marketing', 'Other',
    ];

    return (
        <div className="contact-page">
            <Helmet>
                <title>Contact Us | QubitKode — Web, Mobile & AI Agency</title>
                <meta name="description" content="Get in touch with QubitKode to discuss your next web, mobile, AI or game development project. Our team is ready to help you build something amazing. Response within 24 hours." />
                <meta name="robots" content="index, follow" />
                <link rel="canonical" href="https://qubitkode.com/contact" />
                <meta property="og:title" content="Contact QubitKode — Start Your Project Today" />
                <meta property="og:description" content="Get in touch with QubitKode. Web, Mobile, AI & Game Development experts ready to bring your vision to life." />
                <meta property="og:url" content="https://qubitkode.com/contact" />
                <meta property="og:type" content="website" />
                <meta property="og:image" content="https://qubitkode.com/logo512.png" />
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="Contact QubitKode — Start Your Project Today" />
                <meta name="twitter:description" content="Get in touch with QubitKode. Web, Mobile, AI & Game Development experts ready to bring your vision to life." />
                <meta name="twitter:image" content="https://qubitkode.com/logo512.png" />
            </Helmet>

            {/* Hero Section */}
            <div className="cp-hero">
                <div className="cp-hero-bg"></div>
                <div className="cp-container">
                    <span className="section-tag">Contact Us</span>
                    <h1 className="cp-title">
                        Let's Build Something <br />
                        <span className="gradient-text">Amazing</span>
                    </h1>
                    <p className="cp-subtitle">
                        Whether you have a fully formed RFP or just a spark of an idea, we want to hear from you. Reach out and let's start a conversation.
                    </p>
                </div>
            </div>

            {/* Main Contact Grid */}
            <div className="cp-section">
                <div className="cp-container">
                    <div className="cp-grid">

                        {/* Info & Map Column */}
                        <div className="cp-info-col">

                            <div className="cp-card contact-info-card">
                                <h3>Direct Contact</h3>
                                <p>Reach out to us directly through any of these channels.</p>

                                <div className="contact-methods">
                                    <a href="mailto:contact@qubitkode.com" className="method-pt">
                                        <div className="method-icon">
                                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="20" height="20">
                                                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                                                <polyline points="22,6 12,13 2,6" />
                                            </svg>
                                        </div>
                                        <div>
                                            <span className="method-label">Email Us</span>
                                            <span className="method-val">contact@qubitkode.com</span>
                                        </div>
                                    </a>

                                    <a href="https://wa.me/447988525060" target="_blank" rel="noreferrer" className="method-pt">
                                        <div className="method-icon whatsapp">
                                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="20" height="20">
                                                <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 8.63 19.79 19.79 0 0124 2.18 2 2 0 0122 4v3a2 2 0 01-2-1.72 14.91 14.91 0 00-4.7-9.5 14.91 14.91 0 00-9.5-4.7A2 2 0 012 4v3l0 0z" />
                                            </svg>
                                        </div>
                                        <div>
                                            <span className="method-label">WhatsApp</span>
                                            <span className="method-val">+44 7988 525060</span>
                                        </div>
                                    </a>
                                </div>
                            </div>

                            <div className="cp-card location-card">
                                <h3>Global Reach</h3>
                                <p>Headquartered in Pakistan, serving clients worldwide.</p>
                                <div className="world-map-visual">
                                    {/* Abstract globe/map visual representation */}
                                    <div className="globe-circle">
                                        <div className="globe-grid"></div>
                                        <div className="globe-pin"></div>
                                        <div className="globe-pulse"></div>
                                    </div>
                                </div>
                            </div>

                        </div>

                        {/* Form Column */}
                        <div className="cp-form-col">
                            <div className="cp-card form-card">
                                <h3>Send an Inquiry</h3>
                                <p>Fill out the form below and we will get back to you within 24 hours.</p>

                                <form className="contact-page-form" onSubmit={handleSubmit}>
                                    {sent && (
                                        <div className="form-success">
                                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="20" height="20">
                                                <polyline points="20 6 9 17 4 12" />
                                            </svg>
                                            Message sent! We'll reach out to you soon.
                                        </div>
                                    )}

                                    <div className="cp-form-row">
                                        <div className="form-group">
                                            <label className="form-label">Full Name</label>
                                            <input
                                                type="text"
                                                name="name"
                                                value={form.name}
                                                onChange={handleChange}
                                                className="form-input"
                                                placeholder="John Doe"
                                                required
                                            />
                                        </div>
                                        <div className="form-group">
                                            <label className="form-label">Email Address</label>
                                            <input
                                                type="email"
                                                name="email"
                                                value={form.email}
                                                onChange={handleChange}
                                                className="form-input"
                                                placeholder="john@company.com"
                                                required
                                            />
                                        </div>
                                    </div>

                                    <div className="form-group">
                                        <label className="form-label">Service Interested In</label>
                                        <select
                                            name="service"
                                            value={form.service}
                                            onChange={handleChange}
                                            className="form-input form-select"
                                        >
                                            <option value="">Select a service...</option>
                                            {services.map(s => <option key={s} value={s}>{s}</option>)}
                                        </select>
                                    </div>

                                    <div className="form-group">
                                        <label className="form-label">Your Message</label>
                                        <textarea
                                            name="message"
                                            value={form.message}
                                            onChange={handleChange}
                                            className="form-input form-textarea"
                                            placeholder="Tell us about your project..."
                                            required
                                            rows={6}
                                        />
                                    </div>

                                    <button type="submit" className="btn-primary form-submit cp-submit">
                                        <span>Send Message</span>
                                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="18" height="18">
                                            <line x1="22" y1="2" x2="11" y2="13" />
                                            <polygon points="22 2 15 22 11 13 2 9 22 2" />
                                        </svg>
                                    </button>
                                </form>
                            </div>
                        </div>

                    </div>
                </div>
            </div>

            {/* FAQ Section */}
            <div className="cp-faq-section">
                <div className="cp-container">
                    <div className="faq-header">
                        <h2>Frequently Asked Questions</h2>
                    </div>

                    <div className="faq-list">
                        {faqs.map((faq, index) => (
                            <div
                                key={index}
                                className={`faq-item ${openFaq === index ? 'open' : ''}`}
                                onClick={() => toggleFaq(index)}
                            >
                                <div className="faq-q">
                                    <h3>{faq.q}</h3>
                                    <span className="faq-icon">
                                        {openFaq === index ? '−' : '+'}
                                    </span>
                                </div>
                                <div className="faq-a">
                                    <p>{faq.a}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

        </div>
    );
};

export default ContactPage;
