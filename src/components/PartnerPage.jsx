import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import './PartnerPage.css';

const PartnerPage = () => {
    const [form, setForm] = useState({ name: '', email: '', company: '', model: '', idea: '' });
    const [sent, setSent] = useState(false);

    const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

    const handleSubmit = (e) => {
        e.preventDefault();

        // Format the message for WhatsApp
        const textMessage = `*New Partnership Inquiry* %0A` +
            `*Name:* ${form.name} %0A` +
            `*Email:* ${form.email} %0A` +
            `*Company:* ${form.company || 'N/A'} %0A` +
            `*Model:* ${form.model} %0A` +
            `*Brief Idea:* ${form.idea}`;

        // Open WhatsApp with pre-filled message
        window.open(`https://wa.me/447988525060?text=${textMessage}`, '_blank');

        setSent(true);
        setTimeout(() => setSent(false), 5000);
        setForm({ name: '', email: '', company: '', model: '', idea: '' });
    };

    return (
        <div className="partner-page">
            <Helmet>
                <title>Partner With Us | QubitKode — Strategic Tech Partnerships</title>
                <meta name="description" content="Partner with QubitKode as an investor or co-founder. We build scalable, high-quality digital products with full transparency, strict NDAs, and guaranteed IP ownership." />
                <meta name="robots" content="index, follow" />
                <link rel="canonical" href="https://qubitkode.com/partner" />
                <meta property="og:title" content="Partner With QubitKode — Build the Future Together" />
                <meta property="og:description" content="Become an investor or co-founder with QubitKode. Elite engineering team + your vision = market-disrupting products." />
                <meta property="og:url" content="https://qubitkode.com/partner" />
                <meta property="og:type" content="website" />
                <meta property="og:image" content="https://qubitkode.com/logo512.png" />
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="Partner With QubitKode — Build the Future Together" />
                <meta name="twitter:description" content="Become an investor or co-founder with QubitKode. Elite engineering team + your vision = market-disrupting products." />
                <meta name="twitter:image" content="https://qubitkode.com/logo512.png" />
            </Helmet>

            {/* Hero Section */}
            <div className="pp-hero">
                <div className="pp-hero-bg"></div>
                <div className="pp-hero-content">
                    <span className="section-tag">Strategic Partnerships</span>
                    <h1 className="pp-title">
                        Build the <span className="gradient-text">Future</span> Together
                    </h1>
                    <p className="pp-subtitle">
                        We are looking for visionary investors and industry experts to co-develop the next generation of disruptive digital products.
                        Whether you bring the capital, the idea, or both—we bring the engineering powerhouse.
                    </p>
                </div>
            </div>

            {/* Collaboration Models */}
            <div className="pp-section pp-models-section">
                <div className="pp-container">
                    <div className="pp-header-center">
                        <h2 className="pp-section-title">Partnership Models</h2>
                        <p className="pp-section-subtitle">Flexible co-development structures designed for mutual success and rapid scaling.</p>
                    </div>

                    <div className="pp-models-grid">
                        {/* Model 1 */}
                        <div className="pp-model-card">
                            <div className="model-icon">
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" width="40" height="40" style={{ color: '#7b2fff', display: 'block' }}>
                                    <path d="M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.9 1.2 1.5 1.5 2.5" />
                                    <path d="M9 18h6" />
                                    <path d="M10 22h4" />
                                </svg>
                            </div>
                            <h3 className="model-title">You Have the Idea</h3>
                            <h4 className="model-subtitle">Investor-Led Incubation</h4>
                            <p className="model-desc">
                                You have identified a gap in the market and secured the funding, but need an elite technical team to execute. We act as your dedicated CTO and engineering arm, building the product from MVP to enterprise scale.
                            </p>
                            <ul className="model-benefits">
                                <li><span>✓</span> You retain majority equity/ownership</li>
                                <li><span>✓</span> We handle all technical architecture & hiring</li>
                                <li><span>✓</span> Rapid time-to-market</li>
                            </ul>
                        </div>

                        {/* Model 2 */}
                        <div className="pp-model-card highlight">
                            <div className="model-edge-glow"></div>
                            <div className="model-icon">
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" width="40" height="40" style={{ color: '#00d4ff', display: 'block' }}>
                                    <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
                                    <polyline points="3.27 6.96 12 12.01 20.73 6.96" />
                                    <line x1="12" y1="22.08" x2="12" y2="12" />
                                </svg>
                            </div>
                            <h3 className="model-title">We Have the Idea</h3>
                            <h4 className="model-subtitle">Co-Founding & Scale</h4>
                            <p className="model-desc">
                                QubitKode continuously incubates internal products. We partner with strategic investors who provide the capital and industry connections necessary to launch, market, and aggressively scale our proprietary solutions.
                            </p>
                            <ul className="model-benefits">
                                <li><span>✓</span> Pre-vetted, high-potential tech products</li>
                                <li><span>✓</span> Shared risk and aligned incentives</li>
                                <li><span>✓</span> Leverage our internal engineering efficiency</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            {/* Trust and Transparency */}
            <div className="pp-section pp-trust-section">
                <div className="pp-container">
                    <div className="pp-trust-grid">
                        <div className="trust-content">
                            <span className="section-tag">Our Commitment</span>
                            <h2 className="pp-section-title">Strict Confidentiality <br />& Absolute Transparency</h2>
                            <p className="trust-desc">
                                We understand that in the world of tech startups, ideas and execution are everything. We have built our partnership model on a foundation of ironclad security and open communication.
                            </p>

                            <div className="trust-points">
                                <div className="trust-point">
                                    <div className="tp-icon">
                                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                            <rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect>
                                            <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
                                        </svg>
                                    </div>
                                    <div className="tp-text">
                                        <h4>Ironclad NDAs</h4>
                                        <p>Before any sensitive discussions occur, we sign comprehensive Non-Disclosure Agreements to legally protect your intellectual property.</p>
                                    </div>
                                </div>
                                <div className="trust-point">
                                    <div className="tp-icon">
                                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                            <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                                        </svg>
                                    </div>
                                    <div className="tp-text">
                                        <h4>IP Ownership Guaranteed</h4>
                                        <p>Clear, legally binding contracts ensure that code ownership, patents, and product rights belong exclusively to the agreed-upon entity.</p>
                                    </div>
                                </div>
                                <div className="trust-point">
                                    <div className="tp-icon">
                                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                            <circle cx="12" cy="12" r="10"></circle>
                                            <line x1="12" y1="8" x2="12" y2="12"></line>
                                            <line x1="12" y1="16" x2="12.01" y2="16"></line>
                                        </svg>
                                    </div>
                                    <div className="tp-text">
                                        <h4>Financial & Agile Transparency</h4>
                                        <p>You get real-time access to our Jira/Trello boards, GitHub repositories, and detailed financial burn-rate reports. No black boxes.</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="trust-visual">
                            <div className="partner-visual-wrap">

                                {/* Central hub */}
                                <div className="pv-hub">
                                    <div className="pv-hub-ring pv-ring-1" />
                                    <div className="pv-hub-ring pv-ring-2" />
                                    <div className="pv-hub-core">
                                        <svg viewBox="0 0 24 24" fill="none" stroke="#00d4ff" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" width="36" height="36">
                                            <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
                                        </svg>
                                    </div>
                                </div>

                                {/* Connection nodes */}
                                <div className="pv-node pv-node-1">
                                    <div className="pv-node-dot" />
                                    <div className="pv-node-line pv-line-1" />
                                    <div className="pv-node-card">
                                        <svg viewBox="0 0 24 24" fill="none" stroke="#7b2fff" strokeWidth="2" width="16" height="16">
                                            <rect x="3" y="11" width="18" height="11" rx="2" /><path d="M7 11V7a5 5 0 0 1 10 0v4" />
                                        </svg>
                                        <span>NDA Signed</span>
                                    </div>
                                </div>

                                <div className="pv-node pv-node-2">
                                    <div className="pv-node-dot" style={{ background: '#00ff88' }} />
                                    <div className="pv-node-line pv-line-2" />
                                    <div className="pv-node-card">
                                        <svg viewBox="0 0 24 24" fill="none" stroke="#00ff88" strokeWidth="2" width="16" height="16">
                                            <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                                        </svg>
                                        <span>IP Protected</span>
                                    </div>
                                </div>

                                <div className="pv-node pv-node-3">
                                    <div className="pv-node-dot" style={{ background: '#ffd700' }} />
                                    <div className="pv-node-line pv-line-3" />
                                    <div className="pv-node-card">
                                        <svg viewBox="0 0 24 24" fill="none" stroke="#ffd700" strokeWidth="2" width="16" height="16">
                                            <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
                                        </svg>
                                        <span>Live Reports</span>
                                    </div>
                                </div>

                                <div className="pv-node pv-node-4">
                                    <div className="pv-node-dot" style={{ background: '#ff6b35' }} />
                                    <div className="pv-node-line pv-line-4" />
                                    <div className="pv-node-card">
                                        <svg viewBox="0 0 24 24" fill="none" stroke="#ff6b35" strokeWidth="2" width="16" height="16">
                                            <circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" />
                                        </svg>
                                        <span>48h Response</span>
                                    </div>
                                </div>

                                {/* Status bar */}
                                <div className="pv-status-bar">
                                    <div className="pv-status-dot" />
                                    <span>Partnership channel secure &amp; active</span>
                                </div>

                                {/* Floating metric badges */}
                                <div className="pv-metric pv-metric-1">
                                    <div className="pv-metric-val">100%</div>
                                    <div className="pv-metric-lbl">Ownership</div>
                                </div>
                                <div className="pv-metric pv-metric-2">
                                    <div className="pv-metric-val">50+</div>
                                    <div className="pv-metric-lbl">Projects</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Contact / Pitch Form */}
            <div className="pp-section pp-cta-section">
                <div className="pp-container">
                    <div className="pp-cta-box">
                        <div className="cta-left">
                            <h2>Let's Talk Business</h2>
                            <p>Ready to invest in the future? Send us a brief overview of your proposal. Our founding team reviews every serious inquiry within 48 hours.</p>
                        </div>

                        <div className="cta-right">
                            <form className="partner-form" onSubmit={handleSubmit}>
                                {sent && (
                                    <div className="form-success">
                                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="20" height="20">
                                            <polyline points="20 6 9 17 4 12" />
                                        </svg>
                                        Inquiry submitted securely.
                                    </div>
                                )}

                                <div className="form-row">
                                    <input type="text" name="name" value={form.name} onChange={handleChange} placeholder="Your Name" required className="form-input" />
                                    <input type="email" name="email" value={form.email} onChange={handleChange} placeholder="Email Address" required className="form-input" />
                                </div>
                                <input type="text" name="company" value={form.company} onChange={handleChange} placeholder="Company / Firm (Optional)" className="form-input" />

                                <select name="model" value={form.model} onChange={handleChange} required className="form-input form-select">
                                    <option value="">Select Partnership Model...</option>
                                    <option value="I have an idea to fund">I have an idea and funding</option>
                                    <option value="I want to invest in QubitKode products">I want to invest in QubitKode's ideas</option>
                                    <option value="Other strategic partnership">Other strategic partnership</option>
                                </select>

                                <textarea name="idea" value={form.idea} onChange={handleChange} placeholder="Brief non-confidential overview..." required rows="4" className="form-input form-textarea"></textarea>

                                <button type="submit" className="btn-primary form-submit pp-submit">
                                    <span>Submit securely</span>
                                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="18" height="18">
                                        <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
                                        <path d="M7 11V7a5 5 0 0 1 10 0v4" />
                                    </svg>
                                </button>
                                <p className="secure-note">🔒 Your information is transmitted securely and will not be shared.</p>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PartnerPage;
