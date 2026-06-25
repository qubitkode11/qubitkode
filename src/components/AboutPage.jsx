import React from 'react';
import { Helmet } from 'react-helmet-async';
import Team from './Team'; // Import the existing Team component
import './AboutPage.css';

const values = [
    {
        icon: (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="32" height="32" className="neon-icon">
                <path d="M9 18h6" />
                <path d="M10 22h4" />
                <path d="M15.09 14c.18-.98.65-1.74 1.41-2.5A4.65 4.65 0 0 0 18 8 6 6 0 0 0 6 8c0 1.55.59 2.76 1.5 3.5.76.76 1.23 1.52 1.41 2.5" />
            </svg>
        ),
        title: 'Innovation First',
        desc: 'We are constantly exploring new technologies to deliver cutting-edge solutions.'
    },
    {
        icon: (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="32" height="32" className="neon-icon">
                <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                <circle cx="9" cy="7" r="4" />
                <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
                <path d="M16 3.13a4 4 0 0 1 0 7.75" />
            </svg>
        ),
        title: 'Client Partnership',
        desc: 'We don\'t just build products; we build long-term relationships based on mutual success.'
    },
    {
        icon: (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="32" height="32" className="neon-icon">
                <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
            </svg>
        ),
        title: 'Agile & Fast',
        desc: 'Speed to market is critical. We use agile methodologies to deliver rapidly without compromising quality.'
    },
    {
        icon: (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="32" height="32" className="neon-icon">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10" />
                <path d="m9 12 2 2 4-4" />
            </svg>
        ),
        title: 'Uncompromising Quality',
        desc: 'Every line of code we write is optimized for performance, security, and scalability.'
    }
];

const AboutPage = () => {
    return (
        <div className="about-page">
            <Helmet>
                <title>About Us | QubitKode — Premier Tech Agency</title>
                <meta name="description" content="Learn about QubitKode — our mission to engineer digital excellence, our core values of innovation and agility, and the elite team driving world-class Web, Mobile, AI, and Game Development." />
                <meta name="robots" content="index, follow" />
                <link rel="canonical" href="https://qubitkode.com/about" />
                <meta property="og:title" content="About QubitKode — Engineering Digital Excellence" />
                <meta property="og:description" content="QubitKode is a premier tech agency merging deep technical expertise with creative vision to build scalable digital products for startups and enterprises worldwide." />
                <meta property="og:url" content="https://qubitkode.com/about" />
                <meta property="og:type" content="website" />
                <meta property="og:image" content="https://qubitkode.com/logo512.png" />
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="About QubitKode — Engineering Digital Excellence" />
                <meta name="twitter:description" content="QubitKode is a premier tech agency merging deep technical expertise with creative vision to build scalable digital products for startups and enterprises worldwide." />
                <meta name="twitter:image" content="https://qubitkode.com/logo512.png" />
            </Helmet>

            {/* Hero Section */}
            <div className="ap-hero">
                <div className="ap-hero-bg"></div>
                <div className="ap-hero-content">
                    <span className="section-tag">Our Story</span>
                    <h1 className="ap-title">
                        Engineering Digital <br />
                        <span className="gradient-text">Excellence</span>
                    </h1>
                    <p className="ap-subtitle">
                        QubitKode is a premier technology agency specialising in modern Web, Mobile, AI, Game Development, and Workflow Automation.
                    </p>
                </div>
            </div>

            {/* Mission & Visual Section */}
            <div className="ap-section ap-mission">
                <div className="ap-container">
                    <div className="ap-grid">
                        <div className="ap-content">
                            <h2 className="ap-section-title">Who We Are</h2>
                            <p className="ap-desc">
                                We merge deep technical expertise with creative vision to engineer scalable digital products that drive measurable impact for startups and enterprises worldwide.
                            </p>
                            <p className="ap-desc">
                                Our team of elite developers, designers, and strategists are passionate about solving complex problems. Whether it's building a disruptive SaaS platform, deploying a machine learning pipeline, or crafting an award-winning mobile game, we treat every project as our own.
                            </p>

                            <div className="ap-stats-row">
                                <div className="stat-item">
                                    <h3 className="stat-num">50<span className="accent-plus">+</span></h3>
                                    <p className="stat-text">Projects Delivered</p>
                                </div>
                                <div className="stat-item">
                                    <h3 className="stat-num">100<span className="accent-plus">%</span></h3>
                                    <p className="stat-text">Client Satisfaction</p>
                                </div>
                                <div className="stat-item">
                                    <h3 className="stat-num">24<span className="accent-plus">/</span>7</h3>
                                    <p className="stat-text">Global Support</p>
                                </div>
                            </div>
                        </div>

                        {/* Visual Code Block */}
                        <div className="ap-visual">
                            <div className="ap-glow" />
                            <div className="ap-glass-panel">
                                <div className="glass-header">
                                    <span className="mac-dot red"></span>
                                    <span className="mac-dot yellow"></span>
                                    <span className="mac-dot green"></span>
                                    <span className="glass-title">qubitkode.config.js</span>
                                </div>
                                <div className="glass-body">
                                    <code>
                                        <span className="code-keyword">const</span> <span className="code-var">qubitKode</span> <span className="code-operator">=</span> {'{'} <br />
                                        &nbsp;&nbsp;<span className="code-key">mission:</span> <span className="code-string">"Engineering the future"</span>,<br />
                                        &nbsp;&nbsp;<span className="code-key">expertise:</span> [<span className="code-string">"AI"</span>, <span className="code-string">"Web/Mobile"</span>, <span className="code-string">"Games"</span>],<br />
                                        &nbsp;&nbsp;<span className="code-key">impact:</span> <span className="code-bool">"Global"</span>,<br />
                                        &nbsp;&nbsp;<span className="code-key">scale:</span> <span className="code-keyword">true</span><br />
                                        {'}'};
                                    </code>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Core Values Section */}
            <div className="ap-section ap-values">
                <div className="ap-container">
                    <div className="ap-header-center">
                        <span className="section-tag">What Drives Us</span>
                        <h2 className="ap-section-title">Our Core <span className="gradient-text">Values</span></h2>
                    </div>

                    <div className="ap-values-grid">
                        {values.map((v, i) => (
                            <div key={i} className="ap-value-card">
                                <div className="ap-value-icon">{v.icon}</div>
                                <h3 className="ap-value-title">{v.title}</h3>
                                <p className="ap-value-desc">{v.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Team Section (Reusing the existing Team component) */}
            <Team />

        </div>
    );
};

export default AboutPage;
