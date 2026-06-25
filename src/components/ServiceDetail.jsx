import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import './ServiceDetail.css';

const serviceData = {
    'web-development': {
        title: 'Web Development',
        subtitle: 'Enterprise-grade, high-performance web applications.',
        color: '#00d4ff',
        overview: "We architect resilient, globally scalable, and ultra-fast web applications. From hyper-optimized corporate platforms to complex SaaS ecosystems, our code is built for mission-critical reliability.",
        features: [
            { icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" /></svg>, title: 'Lightning Fast', desc: 'Sub-second load times achieved through advanced server-side rendering, CDN edge caching, and optimized asset delivery.' },
            { icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="2" y="3" width="20" height="14" rx="2" ry="2" /><line x1="8" y1="21" x2="16" y2="21" /><line x1="12" y1="17" x2="12" y2="21" /></svg>, title: 'Responsive & Accessible', desc: 'Flawless execution across all device matrices, strictly adhering to WCAG accessibility standards for universal reach.' },
            { icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="11" width="18" height="11" rx="2" ry="2" /><path d="M7 11V7a5 5 0 0 1 10 0v4" /></svg>, title: 'Military-Grade Security', desc: 'Implementation of zero-trust architecture, OAuth2, JWTs, and end-to-end data encryption to protect sensitive assets.' },
            { icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M8 10H5a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-8a2 2 0 0 0-2-2h-3" /><path d="M12 15V3" /><path d="M8 7l4-4 4 4" /></svg>, title: 'Seamless Integrations', desc: 'Robust RESTful and GraphQL API layers for flawless connection with legacy systems and third-party SaaS tools.' }
        ],
        process: [
            { phase: 'Architecture', desc: 'Defining scalable infrastructure, database schemas, and data flow patterns.' },
            { phase: 'Prototyping', desc: 'High-fidelity wireframing and interactive UI concept validation.' },
            { phase: 'Engineering', desc: 'Agile development sprints with rigorous code reviews and CI/CD pipelines.' },
            { phase: 'Launch', desc: 'Automated testing, load balancing configuration, and zero-downtime deployment.' }
        ],
        techStack: ['React', 'Next.js', 'Node.js', 'TypeScript', 'PostgreSQL', 'AWS']
    },
    'mobile-development': {
        title: 'Mobile Development',
        subtitle: 'High-performance cross-platform iOS & Android applications.',
        color: '#7b2fff',
        overview: "We engineer mobile solutions that dominate their categories. By leveraging advanced cross-platform frameworks, we deliver apps that achieve 60fps native performance while radically reducing time-to-market.",
        features: [
            { icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="5" y="2" width="14" height="20" rx="2" ry="2" /><line x1="12" y1="18" x2="12.01" y2="18" /></svg>, title: 'Unified Codebase', desc: 'Deploy feature-identical applications to both Apple App Store and Google Play from a single, highly maintainable source.' },
            { icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" /></svg>, title: 'Hardware Acceleration', desc: 'Deep integration with device GPUs and native APIs ensuring fluid animations and instant UI responsiveness.' },
            { icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 2v6h-6" /><path d="M3 12a9 9 0 0 1 15-6.7L21 8" /><path d="M3 22v-6h6" /><path d="M21 12a9 9 0 0 1-15 6.7L3 16" /></svg>, title: 'Offline-First Architecture', desc: 'Sophisticated local data caching and background sync protocols for uninterrupted functionality without connectivity.' },
            { icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9" /><path d="M13.73 21a2 2 0 0 1-3.46 0" /></svg>, title: 'Targeted Engagement', desc: 'Behaviorally triggered rich push notifications and deep linking to drastically improve user retention rates.' }
        ],
        process: [
            { phase: 'Strategy', desc: 'Market analysis, feature prioritization, and platform targeting.' },
            { phase: 'UX Design', desc: 'Mapping user journeys and crafting intuitive touch interfaces.' },
            { phase: 'Development', desc: 'Concurrent UI implementation and secure API integration.' },
            { phase: 'Publishing', desc: 'Navigating App Store compliance, beta testing, and global rollout.' }
        ],
        techStack: ['React Native', 'Flutter', 'Swift', 'Kotlin', 'Firebase', 'GraphQL']
    },
    'ai-machine-learning': {
        title: 'AI & Machine Learning',
        subtitle: 'Predictive intelligence and automation for enterprise systems.',
        color: '#00ff88',
        overview: "We transform dormant data into a competitive advantage. Our engineering team designs and deploys custom AI models and neural networks that automate complex operations and predict market trajectories.",
        features: [
            { icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 12h-4l-3 9L9 3l-3 9H2" /></svg>, title: 'LLM Integration', desc: 'Deploying secure, fine-tuned transformer models (like GPT-4) securely within your corporate firewall to analyze proprietary data.' },
            { icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="3" width="18" height="18" rx="2" ry="2" /><line x1="3" y1="9" x2="21" y2="9" /><line x1="9" y1="21" x2="9" y2="9" /></svg>, title: 'Predictive Analytics', desc: 'Sophisticated regression models and time-series forecasting to anticipate demand, assess risk, and optimize logistics.' },
            { icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="3" /><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z" /></svg>, title: 'Computer Vision', desc: 'CNN-based automated visual inspection, object tracking, and spatial analysis for industrial and retail environments.' },
            { icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" /></svg>, title: 'NLP Models', desc: 'Advanced natural language processing for sentiment analysis, automated document parsing, and semantic search.' }
        ],
        process: [
            { phase: 'Data Ingestion', desc: 'Cleaning, anonymizing, and structuring vast datasets for training pipelines.' },
            { phase: 'Architecture', desc: 'Selecting optimal ML frameworks and designing neural network topologies.' },
            { phase: 'Training', desc: 'Iterative model training using GPU clusters to minimize loss functions.' },
            { phase: 'Deployment', desc: 'Containerized API endpoints serving real-time inferences at scale.' }
        ],
        techStack: ['Python', 'TensorFlow', 'PyTorch', 'OpenAI', 'LangChain', 'CUDA']
    },
    'game-development': {
        title: 'Game Development',
        subtitle: 'High-fidelity immersive environments and complex simulations.',
        color: '#ff6b35',
        overview: "We engineer digital worlds. Our studio develops performance-optimized 3D environments, complex physics simulations, and massive multiplayer architectures for both entertainment and enterprise training.",
        features: [
            { icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polygon points="5 3 19 12 5 21 5 3" /></svg>, title: 'Core Mechanics', desc: 'Mathematical modeling of game loops, collision systems, and satisfying state-driven player interactions.' },
            { icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" /></svg>, title: 'Rendering Optimization', desc: 'Advanced shader programming, frustum culling, and LOD management to ensure high framerates on lower-end hardware.' },
            { icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M9 18V5l12-2v13" /><circle cx="6" cy="18" r="3" /><circle cx="18" cy="16" r="3" /></svg>, title: 'Dedicated Servers', desc: 'Authoritative server orchestration with client-side prediction for cheat-proof, ultra-low latency multiplayer.' },
            { icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="2" y="2" width="20" height="20" rx="5" ry="5" /><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" /><line x1="17.5" y1="6.5" x2="17.51" y2="6.5" /></svg>, title: 'AR / VR Computing', desc: 'Spatial computing applications for Oculus and Vision Pro, utilizing depth-mapping and 6DOF head tracking.' }
        ],
        process: [
            { phase: 'Pre-Production', desc: 'Systems design, economic balancing, and technical feasibility studies.' },
            { phase: 'Asset Pipeline', desc: 'Streamlining 3D modeling, rigging, and texture mapping workflows.' },
            { phase: 'Logic execution', desc: 'Writing performant C++/C# scripts for AI behaviors and engine states.' },
            { phase: 'Optimization', desc: 'Memory profiling, garbage collection management, and publishing.' }
        ],
        techStack: ['Unity 3D', 'Unreal Engine 5', 'C#', 'C++', 'Photon', 'WebGL']
    },
    'seo-optimization': {
        title: 'SEO Optimization',
        subtitle: 'Algorithmic search dominance and aggressive organic acquisition.',
        color: '#ffd700',
        overview: "We treat search engine algorithms as a solvable equation. Our technical SEO architects restructure your digital footprint to systematically capture high-intent traffic and command absolute market authority.",
        features: [
            { icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" /><polyline points="14 2 14 8 20 8" /><line x1="16" y1="13" x2="8" y2="13" /><line x1="16" y1="17" x2="8" y2="17" /><polyline points="10 9 9 9 8 9" /></svg>, title: 'Technical Audits', desc: 'Comprehensive scraping to eliminate crawl traps, optimize robots.txt, and configure canonical tags for indexation efficiency.' },
            { icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="4" y1="21" x2="4" y2="14" /><line x1="4" y1="10" x2="4" y2="3" /><line x1="12" y1="21" x2="12" y2="12" /><line x1="12" y1="8" x2="12" y2="3" /><line x1="20" y1="21" x2="20" y2="16" /><line x1="20" y1="12" x2="20" y2="3" /><line x1="1" y1="14" x2="7" y2="14" /><line x1="9" y1="8" x2="15" y2="8" /><line x1="17" y1="16" x2="23" y2="16" /></svg>, title: 'Core Web Vitals', desc: 'Surgical code optimizations to achieve 90+ lighthouse scores on LCP, CLS, and INP metrics.' },
            { icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10" /><line x1="12" y1="8" x2="12" y2="12" /><line x1="12" y1="16" x2="12.01" y2="16" /></svg>, title: 'Authority Sculpting', desc: 'Strategic PR outreach and high-DR backlink acquisition to signal overwhelming domain authority to search spiders.' },
            { icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10" /><path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20" /><path d="M2 12h20" /></svg>, title: 'Semantic Keyword Mapping', desc: 'TF-IDF analysis and NLP content optimization to dominate long-tail intent and Google featured snippets.' }
        ],
        process: [
            { phase: 'Reconnaissance', desc: 'Aggressive competitor analysis and algorithmic gap identification.' },
            { phase: 'Restructure', desc: 'Fixing site architecture, internal link silos, and schema markups.' },
            { phase: 'Execution', desc: 'Deploying optimized programmatic content and initiating outreach.' },
            { phase: 'Attribution', desc: 'Tracking rank velocity and conversion impact via custom dashboards.' }
        ],
        techStack: ['Ahrefs', 'Semrush', 'Screaming Frog', 'Google Search Console', 'Schema.org']
    },
    'digital-marketing': {
        title: 'Digital Marketing',
        subtitle: 'Data-driven growth engines and precision conversion funnels.',
        color: '#ff3d8a',
        overview: "We engineer capital-efficient acquisition systems. By instrumenting deep analytics across the entire user journey, we deploy highly targeted campaigns that ruthlessly lower CAC while scaling LTV.",
        features: [
            { icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M3 18v-6a9 9 0 0 1 18 0v6" /><path d="M21 19a2 2 0 0 1-2 2h-4a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h4zM3 19a2 2 0 0 0 2 2h4a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2z" /></svg>, title: 'Programmatic Bidding', desc: 'Machine-learning optimized ad spends across Google and Meta, utilizing strict CPA and ROAS targeting.' },
            { icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 20V10" /><path d="M18 20V4" /><path d="M6 20v-4" /></svg>, title: 'Conversion Architecture', desc: 'Multivariate A/B testing on landing pages to statistically guarantee maximum lead volume.' },
            { icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polygon points="3 11 22 2 13 21 11 13 3 11" /></svg>, title: 'Lifecycle Automation', desc: 'Dynamic email flows responding to user events to rescue abandoned carts and drive repeat purchases.' },
            { icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10" /><path d="M12 16v-4" /><path d="M12 8h.01" /></svg>, title: 'Advanced Attribution', desc: 'Implementation of server-side tracking and GA4 models to measure cross-device, true ROI.' }
        ],
        process: [
            { phase: 'Instrumentation', desc: 'Configuring Tag Manager, Conversion APIs, and unified data lakes.' },
            { phase: 'Creative Matrix', desc: 'Developing rapid-iteration ad creatives and localized copy.' },
            { phase: 'Media Buying', desc: 'Deploying capital efficiently across search, social, and display.' },
            { phase: 'Scaling', desc: 'Allocating budget dynamically to the highest-performing cohorts.' }
        ],
        techStack: ['Google Ads', 'Meta Ads', 'GA4', 'GTM', 'HubSpot', 'Mixpanel']
    }
};

const ServiceDetail = () => {
    const { slug } = useParams();
    const service = serviceData[slug];

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [slug]);

    if (!service) {
        return (
            <div className="service-not-found">
                <h2>Service Not Found</h2>
                <Link to="/" className="back-btn">Return Home</Link>
            </div>
        );
    }

    return (
        <div className="service-detail-page">
            <Helmet>
                <title>{service.title} Services | QubitKode — {service.subtitle}</title>
                <meta name="description" content={`${service.overview.substring(0, 155)}...`} />
                <meta name="robots" content="index, follow" />
                <link rel="canonical" href={`https://qubitkode.com/services/${slug}`} />
                <meta property="og:title" content={`${service.title} | QubitKode`} />
                <meta property="og:description" content={service.subtitle} />
                <meta property="og:url" content={`https://qubitkode.com/services/${slug}`} />
                <meta property="og:type" content="website" />
                <meta property="og:image" content="https://qubitkode.com/logo512.png" />
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content={`${service.title} | QubitKode`} />
                <meta name="twitter:description" content={service.subtitle} />
                <meta name="twitter:image" content="https://qubitkode.com/logo512.png" />
                <script type="application/ld+json">{JSON.stringify({
                    "@context": "https://schema.org",
                    "@type": "Service",
                    "serviceType": service.title,
                    "name": `${service.title} — QubitKode`,
                    "description": service.overview,
                    "url": `https://qubitkode.com/services/${slug}`,
                    "provider": {
                        "@type": "Organization",
                        "name": "QubitKode",
                        "url": "https://qubitkode.com",
                        "logo": "https://qubitkode.com/logo512.png"
                    },
                    "areaServed": "Worldwide",
                    "availableChannel": {
                        "@type": "ServiceChannel",
                        "serviceUrl": "https://qubitkode.com/contact"
                    }
                })}</script>
            </Helmet>

            {/* Hero Section */}
            <div className="sd-hero" style={{ '--theme-color': service.color }}>
                <div className="sd-hero-glow" />
                <div className="sd-container">
                    <Link to="/" className="sd-back-link">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M19 12H5M12 19l-7-7 7-7" /></svg>
                        Back to Home
                    </Link>
                    <div className="sd-hero-content">
                        <span className="sd-badge" style={{ color: service.color, borderColor: `${service.color}55` }}>Premium Service</span>
                        <h1 className="sd-title">{service.title}</h1>
                        <p className="sd-subtitle">{service.subtitle}</p>
                    </div>
                </div>
            </div>

            {/* Overview & Features Section */}
            <div className="sd-section sd-overview-section">
                <div className="sd-container">
                    <div className="sd-overview-text">
                        <h2>Overview</h2>
                        <p>{service.overview}</p>
                    </div>

                    <div className="sd-features-grid">
                        {service.features.map((feature, idx) => (
                            <div className="sd-feature-card" key={idx} style={{ '--hover-color': service.color }}>
                                <div className="sd-feature-icon">{feature.icon}</div>
                                <h3>{feature.title}</h3>
                                <p>{feature.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Process Section */}
            <div className="sd-section sd-process-section" style={{ '--theme-color': service.color }}>
                <div className="sd-container">
                    <div className="sd-section-header text-center">
                        <h2>Our Process</h2>
                        <p>How we bring your {service.title.toLowerCase()} projects to life.</p>
                    </div>

                    <div className="sd-process-timeline">
                        {service.process.map((step, idx) => (
                            <div className="sd-process-step" key={idx}>
                                <div className="sd-step-number">0{idx + 1}</div>
                                <div className="sd-step-content">
                                    <h3>{step.phase}</h3>
                                    <p>{step.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Tech Stack Section */}
            <div className="sd-section sd-tech-section">
                <div className="sd-container">
                    <div className="sd-section-header text-center">
                        <h2>Technologies We Use</h2>
                        <p>Enterprise-grade tools for enterprise-grade solutions.</p>
                    </div>

                    <div className="sd-tech-grid">
                        {service.techStack.map((tech, idx) => (
                            <div className="sd-tech-item" key={idx} style={{ '--border-color': service.color }}>
                                <span>{tech}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* CTA Section */}
            <div className="sd-cta-section" style={{ '--theme-color': service.color }}>
                <div className="sd-cta-glow" />
                <div className="sd-container text-center">
                    <h2>Ready to start your project?</h2>
                    <p>Let's discuss how our {service.title} expertise can drive your business forward.</p>
                    <Link to="/contact" className="sd-btn-primary" style={{ background: service.color, boxShadow: `0 10px 30px ${service.color}44` }}>
                        Get a Free Consultation
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default ServiceDetail;
