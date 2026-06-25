import React from 'react';
import { Link } from 'react-router-dom';
import './About.css';

const About = () => (
    <section id="about" className="about-section" style={{ paddingBottom: '3rem' }}>
        <div className="about-container">
            <div className="about-grid">
                {/* Left Visual: Premium Code Editor Style */}
                <div className="about-visual">
                    <div className="about-glass-panel">
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

                    <div className="float-badge fb-1">
                        <span className="fb-icon">⚡</span> High Performance
                    </div>
                    <div className="float-badge fb-2">
                        <span className="fb-icon">🛡️</span> Enterprise Grade
                    </div>

                    <div className="about-glow" />
                </div>

                {/* Right Content */}
                <div className="about-content">
                    <span className="section-tag">Who We Are</span>
                    <h2 className="section-title">
                        Engineering Digital <br />
                        <span className="gradient-text">Excellence</span>
                    </h2>

                    <p className="about-desc">
                        QubitKode is a premier technology agency specialising in modern Web, Mobile, AI, Game Development, and Workflow Automation. We merge deep technical expertise with creative vision to engineer scalable digital products.
                    </p>

                    <Link to="/about" className="btn-primary" style={{ display: 'inline-flex', alignSelf: 'flex-start', textDecoration: 'none' }}>
                        <span>Read Our Full Story</span>
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="18" height="18" style={{ marginLeft: '0.5rem' }}>
                            <path d="M5 12h14M12 5l7 7-7 7" />
                        </svg>
                    </Link>
                </div>
            </div>
        </div>
    </section>
);

export default About;
