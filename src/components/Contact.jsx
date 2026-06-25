import React, { useState } from 'react';
import './Contact.css';

const Contact = () => {
    const [form, setForm] = useState({ name: '', email: '', service: '', message: '' });
    const [sent, setSent] = useState(false);

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

    const services = [
        'Web Development', 'Mobile Development', 'AI / Machine Learning',
        'Game Development', 'SEO Optimization', 'Digital Marketing', 'Other',
    ];

    const contactInfo = [
        {
            icon: (
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="20" height="20">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                    <polyline points="22,6 12,13 2,6" />
                </svg>
            ),
            label: 'Email Us',
            value: 'contact@qubitkode.com',
            href: 'mailto:contact@qubitkode.com',
        },
        {
            icon: (
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="20" height="20">
                    <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 8.63 19.79 19.79 0 0124 2.18 2 2 0 0122 4v3a2 2 0 01-2-1.72 14.91 14.91 0 00-4.7-9.5 14.91 14.91 0 00-9.5-4.7A2 2 0 012 4v3l0 0z" />
                </svg>
            ),
            label: 'WhatsApp',
            value: '+44 7988 525060',
            href: 'https://wa.me/447988525060',
        },
        {
            icon: (
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="20" height="20">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
                    <circle cx="12" cy="10" r="3" />
                </svg>
            ),
            label: 'Headquarters',
            value: 'Pakistan — Serving Globally',
            href: null,
        },
    ];

    return (
        <section id="contact" className="contact-section">
            <div className="section-container">
                <div className="section-header">
                    <span className="section-tag">Get In Touch</span>
                    <h2 className="section-title">
                        Let's Build Something <span className="gradient-text">Amazing</span>
                    </h2>
                    <p className="section-subtitle">
                        Have a project in mind? We'd love to hear about it. Send us a message
                        and let's discuss how we can bring your vision to life.
                    </p>
                </div>

                <div className="contact-wrapper">
                    {/* Info panel */}
                    <div className="contact-info">
                        <h3 className="info-title">Contact Info</h3>
                        <div className="info-cards">
                            {contactInfo.map((item, i) => (
                                <div key={i} className="info-card">
                                    <span className="info-icon">{item.icon}</span>
                                    <div>
                                        <div className="info-label">{item.label}</div>
                                        {item.href ? (
                                            <a href={item.href} target="_blank" rel="noopener noreferrer" className="info-value link">{item.value}</a>
                                        ) : (
                                            <div className="info-value">{item.value}</div>
                                        )}
                                    </div>
                                </div>
                            ))}
                        </div>

                        <div className="response-time">
                            <div className="rt-dot" />
                            <span>Typical response within <strong>24 hours</strong></span>
                        </div>

                        <div className="contact-deco" />
                    </div>

                    {/* Form */}
                    <form className="contact-form" onSubmit={handleSubmit}>
                        {sent && (
                            <div className="form-success">
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="20" height="20">
                                    <polyline points="20 6 9 17 4 12" />
                                </svg>
                                Message sent! We'll get back to you soon.
                            </div>
                        )}

                        <div className="form-row">
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
                                rows={5}
                            />
                        </div>

                        <button type="submit" className="btn-primary form-submit">
                            <span>Send Message</span>
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="18" height="18">
                                <line x1="22" y1="2" x2="11" y2="13" />
                                <polygon points="22 2 15 22 11 13 2 9 22 2" />
                            </svg>
                        </button>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default Contact;
