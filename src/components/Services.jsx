import React from 'react';
import { Link } from 'react-router-dom';
import './Services.css';

const services = [
    {
        icon: (
            <svg viewBox="0 0 48 48" fill="none" width="36" height="36">
                <rect x="4" y="8" width="40" height="28" rx="4" stroke="currentColor" strokeWidth="2" fill="none" />
                <path d="M16 36v4M32 36v4M12 40h24" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                <path d="M14 20l5 5 9-9" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
        ),
        color: '#00d4ff',
        title: 'Web Development',
        slug: 'web-development',
        desc: 'Resilient, globally scalable, and ultra-fast web applications. From corporate platforms to complex SaaS ecosystems.',
        tags: ['React', 'Next.js', 'Node.js'],
    },
    {
        icon: (
            <svg viewBox="0 0 48 48" fill="none" width="36" height="36">
                <rect x="14" y="3" width="20" height="42" rx="4" stroke="currentColor" strokeWidth="2" fill="none" />
                <circle cx="24" cy="39" r="2" fill="currentColor" />
                <path d="M20 8h8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            </svg>
        ),
        color: '#7b2fff',
        title: 'Mobile Development',
        slug: 'mobile-development',
        desc: 'High-performance cross-platform applications leveraging device GPUs for fluid 60fps animations and offline-first capabilities.',
        tags: ['Flutter', 'React Native'],
    },
    {
        icon: (
            <svg viewBox="0 0 48 48" fill="none" width="36" height="36">
                <path d="M8 24 C8 14, 24 8, 24 8 C24 8, 40 14, 40 24 C40 34, 28 42, 24 44 C20 42, 8 34, 8 24Z" stroke="currentColor" strokeWidth="2" fill="none" />
                <circle cx="24" cy="24" r="6" stroke="currentColor" strokeWidth="2" fill="none" />
                <path d="M24 18V12M24 36V30M18 24H12M36 24H30" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
            </svg>
        ),
        color: '#00ff88',
        title: 'AI & Machine Learning',
        slug: 'ai-machine-learning',
        desc: 'Transform dormant data into a competitive advantage with custom regression models, computer vision, and secure LLM integrations.',
        tags: ['Python', 'TensorFlow', 'LLMs'],
    },
    {
        icon: (
            <svg viewBox="0 0 48 48" fill="none" width="36" height="36">
                <path d="M4 32L12 16L20 26L28 12L36 22L44 8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none" />
                <rect x="4" y="34" width="40" height="10" rx="3" stroke="currentColor" strokeWidth="2" fill="none" />
                <circle cx="14" cy="39" r="2" fill="currentColor" />
                <circle cx="24" cy="39" r="2" fill="currentColor" />
                <circle cx="34" cy="39" r="2" fill="currentColor" />
            </svg>
        ),
        color: '#ff6b35',
        title: 'Game Development',
        slug: 'game-development',
        desc: 'Performance-optimized 3D environments, complex physics simulations, and authoritative multiplayer server architectures.',
        tags: ['Unity', 'Unreal', 'WebGL'],
    },
    {
        icon: (
            <svg viewBox="0 0 48 48" fill="none" width="36" height="36">
                <circle cx="24" cy="24" r="18" stroke="currentColor" strokeWidth="2" fill="none" />
                <path d="M24 6C24 6 18 14 18 24C18 34 24 42 24 42" stroke="currentColor" strokeWidth="2" />
                <path d="M24 6C24 6 30 14 30 24C30 34 24 42 24 42" stroke="currentColor" strokeWidth="2" />
                <path d="M6 24H42" stroke="currentColor" strokeWidth="2" />
                <path d="M8 15H40M8 33H40" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
            </svg>
        ),
        color: '#ffd700',
        title: 'SEO Optimization',
        slug: 'seo-optimization',
        desc: 'Algorithmic search dominance via technical architecture restructures, core web vitals optimization, and authority sculpting.',
        tags: ['On-Page', 'Technical', 'Content'],
    },
    {
        icon: (
            <svg viewBox="0 0 48 48" fill="none" width="36" height="36">
                <path d="M8 38L20 28L28 34L40 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                <circle cx="8" cy="38" r="3" fill="currentColor" />
                <circle cx="20" cy="28" r="3" fill="currentColor" />
                <circle cx="28" cy="34" r="3" fill="currentColor" />
                <circle cx="40" cy="18" r="3" fill="currentColor" />
                <path d="M36 8h8v8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            </svg>
        ),
        color: '#ff3d8a',
        title: 'Digital Marketing',
        slug: 'digital-marketing',
        desc: 'Capital-efficient acquisition systems utilizing programmatic bidding, conversion architecture, and advanced LTV scaling.',
        tags: ['Social', 'PPC', 'Email'],
    },
];

const Services = () => (
    <section id="services" className="services-section">
        <div className="section-container">
            <div className="section-header">
                <span className="section-tag">What We Do</span>
                <h2 className="section-title">
                    Services Built For <span className="gradient-text">Growth</span>
                </h2>
                <p className="section-subtitle">
                    End-to-end digital solutions crafted with precision — everything your
                    business needs to dominate the digital landscape.
                </p>
            </div>

            <div className="services-grid">
                {services.map((svc, i) => (
                    <Link
                        to={`/services/${svc.slug}`}
                        key={i}
                        className="service-card"
                        style={{ '--accent': svc.color, animationDelay: `${0.1 + i * 0.1}s`, textDecoration: 'none' }}
                    >
                        <div className="service-icon-wrap">
                            <span className="service-icon" style={{ color: svc.color }}>
                                {svc.icon}
                            </span>
                            <div className="icon-glow" style={{ background: `${svc.color}22` }} />
                        </div>

                        <h3 className="service-title">{svc.title}</h3>
                        <p className="service-desc">{svc.desc}</p>

                        <div className="service-tags">
                            {svc.tags.map(tag => (
                                <span key={tag} className="service-tag" style={{ borderColor: `${svc.color}44`, color: svc.color }}>
                                    {tag}
                                </span>
                            ))}
                        </div>

                        <div className="card-arrow">
                            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <path d="M5 12h14M12 5l7 7-7 7" />
                            </svg>
                        </div>

                        <div className="card-border-glow" />
                    </Link>
                ))}
            </div>
        </div>
    </section>
);

export default Services;
