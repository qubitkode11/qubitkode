import React from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
    const year = new Date().getFullYear();
    const location = useLocation();
    const navigate = useNavigate();

    const handleScroll = (id) => {
        if (location.pathname !== '/') {
            navigate('/#' + id);
        } else {
            document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <footer className="footer">
            {/* Top Newsletter / CTA Strip */}
            <div className="footer-cta-strip">
                <div className="f-cta-container">
                    <div className="f-cta-text">
                        <h3>Ready to engineer your next big idea?</h3>
                        <p>Join the founders and enterprises trusting QubitKode.</p>
                    </div>
                    <div className="f-cta-actions">
                        <Link to="/contact" className="btn-primary f-btn">
                            Start a Project
                        </Link>
                        <Link to="/partner" className="btn-secondary f-btn">
                            Partner With Us
                        </Link>
                    </div>
                </div>
            </div>

            <div className="footer-main">
                <div className="footer-container">
                    {/* Brand Column */}
                    <div className="footer-brand-col">
                        <div className="footer-logo" onClick={() => handleScroll('home')}>
                            <img src="/logo.png" alt="QubitKode Logo" className="footer-logo-img" />
                            
                        </div>
                        <p className="footer-desc">
                            A premier technology agency specialising in Web, Mobile, AI, and Game Development. We merge technical expertise with creative vision.
                        </p>

                        <div className="footer-socials">
                            {[
                                { href: 'https://www.linkedin.com/company/qubitkode/', label: 'LinkedIn', icon: <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z" />, extra: <circle cx="4" cy="4" r="2" /> },
                                { href: 'https://www.facebook.com/qubitkode/', label: 'Facebook', icon: <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" /> },
                                { href: 'https://www.instagram.com/qubit.kode?igsh=MTJkdGY2eTJheDg2Mw%3D%3D', label: 'Instagram', icon: <><rect x="2" y="2" width="20" height="20" rx="5" ry="5" /><path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z" /><line x1="17.5" y1="6.5" x2="17.51" y2="6.5" /></> },
                            ].map(s => (
                                <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer" className="social-circle" aria-label={s.label}>
                                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="18" height="18">
                                        {s.icon}
                                        {s.extra}
                                    </svg>
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Links Grid */}
                    <div className="footer-links-grid">
                        <div className="f-col">
                            <h4>Company</h4>
                            <ul>
                                <li><Link to="/about">About Us</Link></li>
                                <li><button onClick={() => handleScroll('team')}>Leadership Team</button></li>
                                <li><button onClick={() => handleScroll('projects')}>Featured Work</button></li>
                                <li><Link to="/partner">Become a Partner</Link></li>
                            </ul>
                        </div>
                        <div className="f-col">
                            <h4>Expertise</h4>
                            <ul>
                                <li><Link to="/services/web-development">Web Development</Link></li>
                                <li><Link to="/services/mobile-development">Mobile Apps</Link></li>
                                <li><Link to="/services/ai-machine-learning">AI & Machine Learning</Link></li>
                                <li><Link to="/services/game-development">Game Development</Link></li>
                            </ul>
                        </div>
                        <div className="f-col">
                            <h4>Direct Contact</h4>
                            <ul className="f-contact-info">
                                <li>
                                    <span className="fc-icon">
                                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="18" height="18">
                                            <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                                            <polyline points="22,6 12,13 2,6" />
                                        </svg>
                                    </span>
                                    <a href="mailto:contact@qubitkode.com">contact@qubitkode.com</a>
                                </li>
                                <li>
                                    <span className="fc-icon">
                                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="18" height="18">
                                            <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 3.07 8.63 19.79 19.79 0 0 1 24 2.18 2 2 0 0 1 22 4v3a2 2 0 0 1-2-1.72 14.91 14.91 0 0 0-4.7-9.5 14.91 14.91 0 0 0-9.5-4.7A2 2 0 0 1 2 4v3l0 0z" />
                                        </svg>
                                    </span>
                                    <a href="https://wa.me/447988525060" target="_blank" rel="noreferrer">+44 7988 525060</a>
                                </li>
                                <li>
                                    <span className="fc-icon">
                                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="18" height="18">
                                            <circle cx="12" cy="12" r="10" />
                                            <line x1="2" y1="12" x2="22" y2="12" />
                                            <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
                                        </svg>
                                    </span>
                                    <span>Headquartered in Pakistan<br />Serving Global Clients</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            <div className="footer-bottom">
                <div className="footer-container bottom-flex">
                    <p className="footer-copy">
                        &copy; {year} <span className="brand-name">QubitKode</span>. All rights reserved.
                    </p>
                    <div className="f-legal-links">
                        <Link to="/privacy">Privacy Policy</Link>
                        <span className="f-sep">|</span>
                        <Link to="/terms">Terms of Service</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
