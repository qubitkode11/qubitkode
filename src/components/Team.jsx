import React, { useState } from 'react';
import './Team.css';

const team = [
    {
        name: 'Marsad Rasheed',
        role: 'Founder & CEO',
        bio: 'Visionary leader driving QubitKode\'s mission to reshape digital innovation. Architect of strategy, culture, and growth.',
        gradient: 'linear-gradient(135deg, #00d4ff, #0066ff)',
        socials: { linkedin: 'https://www.linkedin.com/in/marsad-rasheed4/' },
        badge: 'Founder'
    },
    {
        name: 'Bilal Shabir',
        role: 'Co-Founder',
        bio: 'Technical powerhouse and creative strategist. Leads engineering excellence and product development initiatives.',
        gradient: 'linear-gradient(135deg, #7b2fff, #c030ff)',
        socials: { linkedin: 'https://www.linkedin.com/in/bilal-shabbir-704a8224a/?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app' },
        badge: 'Co-Founder'
    },
    {
        name: 'Syed Danyal Ali',
        role: 'Co-Founder',
        bio: 'Operations and growth catalyst. Ensures seamless delivery and client success across every engagement.',
        gradient: 'linear-gradient(135deg, #00ff88, #00c866)',
        socials: { linkedin: 'https://www.linkedin.com/in/danyal-ali-257104328' },
        badge: 'Co-Founder'
    }
];

const Team = () => {
    const [activeIndex, setActiveIndex] = useState(0);

    const nextSlide = () => {
        setActiveIndex((prev) => (prev + 1) % team.length);
    };

    const prevSlide = () => {
        setActiveIndex((prev) => (prev - 1 + team.length) % team.length);
    };

    return (
        <section id="team" className="team-section">
            <div className="section-container">
                <div className="section-header">
                    <span className="section-tag">The Visionaries</span>
                    <h2 className="section-title">
                        Meet the <span className="gradient-text">Founders</span>
                    </h2>
                    <p className="section-subtitle">
                        Three minds united by a shared vision — to build exceptional digital
                        products and transform how businesses succeed online.
                    </p>
                </div>

                <div className="team-slider-wrapper">
                    <button className="slider-btn prev-btn" onClick={prevSlide} aria-label="Previous Founder">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="24" height="24">
                            <path d="M15 18l-6-6 6-6" />
                        </svg>
                    </button>

                    <div className="team-slider-track">
                        {team.map((member, index) => {
                            let slideClass = '';
                            if (index === activeIndex) {
                                slideClass = 'slide-active';
                            } else if (index === (activeIndex + 1) % team.length) {
                                slideClass = 'slide-next';
                            } else {
                                slideClass = 'slide-prev';
                            }

                            return (
                                <div key={index} className={`team-card ${slideClass}`} style={{ '--grad': member.gradient }}>
                                    <div className="member-badge">{member.badge}</div>

                                    <h3 className="member-name">{member.name}</h3>
                                    <p className="member-role">{member.role}</p>
                                    <p className="member-bio">{member.bio}</p>

                                    <div className="member-socials">
                                        <a href={member.socials.linkedin} target="_blank" rel="noopener noreferrer" className="social-link" aria-label="LinkedIn">
                                            <svg viewBox="0 0 24 24" fill="currentColor" width="16" height="16">
                                                <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z" />
                                                <circle cx="4" cy="4" r="2" />
                                            </svg>
                                        </a>
                                    </div>

                                    <div className="card-grid-bg" />
                                </div>
                            );
                        })}
                    </div>

                    <button className="slider-btn next-btn" onClick={nextSlide} aria-label="Next Founder">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="24" height="24">
                            <path d="M9 18l6-6-6-6" />
                        </svg>
                    </button>
                </div>
            </div>
        </section>
    );
};

export default Team;
