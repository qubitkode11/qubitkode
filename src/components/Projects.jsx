import React, { useState, useEffect } from 'react';
import './Projects.css';

const projectsData = {
    'Web': [
        {
            title: 'Buy2Brands Wholesale Platform',
            description: 'A complete wholesale business website developed from scratch. We integrated reliable digital payment gateways and a custom, powerful admin panel built completely by our team to manage all wholesale administrative operations seamlessly.',
            link: 'https://buy2brands.com/',
            images: [
                '/Projects/Web/site1/bb0f2ff4-c9cc-4d6e-a4cb-2ed847b4d390.png',
                '/Projects/Web/site1/screencapture-buy2brands-products-2026-02-23-00_36_24.png'
            ]
        },
        {
            title: 'Excelien Sparks',
            description: 'A premium corporate web presence designed for high conversions and robust brand authority, featuring fluid navigation and dynamic page layouts.',
            link: 'https://exceliensparks.com/',
            images: ['/Projects/Web/site2/1.png']
        },
        {
            title: 'Royal Standard',
            description: 'An elegant display website built for the Royal Standard UAE entity, showcasing their sophisticated service catalog with high-performance edge rendering.',
            link: 'https://royalstandarduae.com/',
            images: ['/Projects/Web/site3/royal.png']
        },
        {
            title: 'David Nieper',
            description: 'A premium fashion and apparel e-commerce website designed with high-quality imagery, smooth cart interactions, and a perfectly modern responsive shopping experience.',
            link: 'https://www.davidnieper.co.uk/',
            images: ['/Projects/Web/site4/screencapture-davidnieper-co-uk-2026-02-23-01_31_13.png']
        }
    ],
    'Mobile': [
        {
            title: 'Readle - German Learning App',
            description: 'A comprehensive mobile language learning application designed to teach German effectively. Features interactive lessons, progressive vocabulary building, and an engaging user interface.',
            link: 'https://play.google.com/store/apps/details?id=com.hello.german',
            images: [
                '/Projects/Mobile/app1/1.jpg',
                '/Projects/Mobile/app1/2.jpg',
                '/Projects/Mobile/app1/3.jpg',
                '/Projects/Mobile/app1/4.jpg',
                '/Projects/Mobile/app1/5.jpg',
                '/Projects/Mobile/app1/6.jpg'
            ]
        },
        {
            title: 'Al Quran',
            description: 'A deeply integrated Islamic learning app featuring a RAG system trained on Hadith books and the Quran. Includes a reciting player, translations, a Qibla finder, Islamic games, and a notes maker.',
            link: '#',
            images: [
                '/Projects/Mobile/app2/1.jpg',
                '/Projects/Mobile/app2/2.jpg',
                '/Projects/Mobile/app2/3.jpg',
                '/Projects/Mobile/app2/4.jpg',
                '/Projects/Mobile/app2/5.jpg',
                '/Projects/Mobile/app2/7.jpg'
            ]
        },
        {
            title: 'QR Studio',
            description: 'A powerful mobile toolkit specifically designed to create, customize, and manage stylish and beautiful QR Codes on the go.',
            link: '#',
            images: [
                '/Projects/Mobile/app3/1.jpg',
                '/Projects/Mobile/app3/2.jpg',
                '/Projects/Mobile/app3/3.jpg'
            ]
        },
        {
            title: 'Stadtvolesen',
            description: 'An advanced reading tracker application that carefully tracks and records the user\'s reading progress while also comprehensively managing listeners.',
            link: '#',
            images: [
                '/Projects/Mobile/app4/1.jpeg',
                '/Projects/Mobile/app4/2.jpeg',
                '/Projects/Mobile/app4/3.jpeg',
                '/Projects/Mobile/app4/4.jpeg',
                '/Projects/Mobile/app4/5.jpeg'
            ]
        }
    ],
    'AI / Data': [
        {
            title: 'Voice/Text to Image Generator',
            description: 'Takes voice commands or text input and seamlessly uses advanced AI generation to synthesize high-quality bespoke imagery on the fly.',
            link: 'https://www.youtube.com/watch?v=755sExJcZW0',
            videoId: '755sExJcZW0'
        },
        {
            title: 'Customizable Gemini Chatbot & Trainer',
            description: 'An advanced model training system where users can converse directly with the Gemini chatbot, or independently train the AI by supplying content into a dedicated GitHub repository.',
            link: 'https://www.youtube.com/watch?v=FgIUaLxmEPM',
            videoId: 'FgIUaLxmEPM'
        },
        {
            title: 'AI Voice & Text Assistant',
            description: 'An intuitive AI interface agent designed to converse intelligently with the user via natural voice dictation or standard text input commands.',
            link: 'https://www.youtube.com/watch?v=vGurA-oiWtw',
            videoId: 'vGurA-oiWtw'
        },
        {
            title: 'Islamic AI RAG System',
            description: 'A powerful Retrieval-Augmented Generation (RAG) system deeply trained specifically on comprehensive Islamic literature, including authentic Hadith books and the entire Quran.',
            link: 'https://www.youtube.com/watch?v=yeqjdxScjsg',
            videoId: 'yeqjdxScjsg'
        }
    ],
    'Games': [
        {
            title: 'Pillar Planet UEFN Map',
            description: 'A custom, highly detailed Unreal Editor for Fortnite (UEFN) multiplayer map featuring unique planetary terrain, custom rulesets, and balanced combat zones.',
            link: 'https://www.youtube.com/watch?v=TzeyT5qVEkE',
            videoId: 'TzeyT5qVEkE'
        },
        {
            title: 'Pimple Pop Infection UEFN Map',
            description: 'A dynamic, fast-paced infection-style game mode developed within UEFN, structured with custom progression mechanics and engaging environmental triggers.',
            link: 'https://www.youtube.com/watch?v=1Yt1vZctx18',
            videoId: '1Yt1vZctx18'
        },
        {
            title: 'Pimple Pop TDM UEFN',
            description: 'A chaotic Team Deathmatch custom arena built utilizing Unreal Engine 5 rendering features in UEFN to ensure maximum performance during high-player engagements.',
            link: 'https://www.youtube.com/watch?v=b9swXZnEt5E',
            videoId: 'b9swXZnEt5E'
        },
        {
            title: 'Epic UEFN Fortnite Map',
            description: 'An expansive custom Fortnite experience showcasing advanced Verse programming, intricate terrain sculpting, and bespoke gameplay systems.',
            link: 'https://www.youtube.com/watch?v=XQhDEOxLTlM',
            videoId: 'XQhDEOxLTlM'
        }
    ]
};

const categories = Object.keys(projectsData);

const Projects = () => {
    const [activeTab, setActiveTab] = useState(categories[0]);
    const [activeIndex, setActiveIndex] = useState(0);
    const [hoveredProject, setHoveredProject] = useState(false);
    const [imageSequenceIdx, setImageSequenceIdx] = useState(0);

    const activeProjects = projectsData[activeTab];
    const currentProject = activeProjects[activeIndex];

    // Reset sequences when changing project or tab
    useEffect(() => {
        setImageSequenceIdx(0);
        setHoveredProject(false);
    }, [activeIndex, activeTab]);

    // Handle auto-sliding image layers when hovered
    useEffect(() => {
        let interval;
        if (hoveredProject && currentProject.images && currentProject.images.length > 1) {
            interval = setInterval(() => {
                setImageSequenceIdx((prev) => (prev + 1) % currentProject.images.length);
            }, 1800); // Crossfade to next image every 1.8 seconds
        } else {
            setImageSequenceIdx(0); // Reset immediately if mouse leaves
        }
        return () => clearInterval(interval);
    }, [hoveredProject, currentProject]);

    const handleTabChange = (tab) => {
        setActiveTab(tab);
        setActiveIndex(0); // Reset index when switching categories
    };

    const nextProject = () => {
        setActiveIndex((prev) => (prev + 1) % activeProjects.length);
    };

    const prevProject = () => {
        setActiveIndex((prev) => (prev - 1 + activeProjects.length) % activeProjects.length);
    };

    return (
        <section id="projects" className="projects-section">
            <div className="section-container">
                <div className="section-header" style={{ marginBottom: '3rem' }}>
                    <span className="section-tag">Our Portfolio</span>
                    <h2 className="section-title">
                        Featured <span className="gradient-text">Projects</span>
                    </h2>
                    <p className="section-subtitle">
                        Explore some of our recent digital innovations. Hover over the device screens to scroll through the full application views.
                    </p>
                </div>

                <div className="projects-layout">
                    {/* LEFT: Vertical Tabs */}
                    <div className="projects-tabs">
                        {categories.map((cat) => (
                            <button
                                key={cat}
                                className={`category-tab ${activeTab === cat ? 'active' : ''}`}
                                onClick={() => handleTabChange(cat)}
                            >
                                <span className="tab-indicator"></span>
                                {cat}
                            </button>
                        ))}
                    </div>

                    {/* MIDDLE: Project Details */}
                    <div className="project-details">
                        <div className="project-details-content">
                            <h3 className="project-title">{currentProject.title}</h3>
                            <div className="project-category-badge">{activeTab}</div>
                            <p className="project-desc">{currentProject.description}</p>

                            <a href={currentProject.link} target="_blank" rel="noopener noreferrer" className="btn-primary" style={{ marginTop: '1rem', width: 'fit-content' }}>
                                <span>Visit Project</span>
                                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6M15 3h6v6M10 14L21 3" />
                                </svg>
                            </a>
                        </div>
                    </div>

                    {/* RIGHT: Laptop Mockup & Slider Controls */}
                    <div className="project-visual-column">
                        <div className="slider-controls">
                            <button className="proj-nav-btn up" onClick={prevProject} aria-label="Previous Project">
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="20" height="20">
                                    <path d="M18 15l-6-6-6 6" />
                                </svg>
                            </button>

                            {activeTab === 'Mobile' ? (
                                <div className="mobile-mockup-container">
                                    <div
                                        className="mobile-mockup"
                                        onMouseEnter={() => setHoveredProject(true)}
                                        onMouseLeave={() => setHoveredProject(false)}
                                    >
                                        <div className="mobile-screen-frame">
                                            <div className="mobile-notch">
                                                <div className="mobile-speaker"></div>
                                            </div>
                                            <div className="mobile-screen">
                                                {currentProject.videoId ? (
                                                    <iframe
                                                        width="100%"
                                                        height="100%"
                                                        src={`https://www.youtube.com/embed/${currentProject.videoId}?autoplay=1&mute=1&loop=1&playlist=${currentProject.videoId}&controls=1&showinfo=0&rel=0`}
                                                        title={currentProject.title}
                                                        frameBorder="0"
                                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                                        allowFullScreen
                                                        style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', zIndex: 10 }}
                                                    ></iframe>
                                                ) : (
                                                    currentProject.images && currentProject.images.map((img, idx) => {
                                                        const isVisible = hoveredProject ? idx === imageSequenceIdx : idx === 0;
                                                        return (
                                                            <div
                                                                key={idx}
                                                                className="mobile-screen-layer"
                                                                style={{
                                                                    backgroundImage: `url(${img})`,
                                                                    opacity: isVisible ? 1 : 0
                                                                }}
                                                            ></div>
                                                        );
                                                    })
                                                )}
                                            </div>
                                        </div>
                                    </div>
                                    <div className="mobile-glow"></div>
                                </div>
                            ) : (
                                <div className="laptop-mockup-container">
                                    <div
                                        className="laptop-mockup"
                                        onMouseEnter={() => setHoveredProject(true)}
                                        onMouseLeave={() => setHoveredProject(false)}
                                    >
                                        <div className="laptop-screen-frame">
                                            <div className="webcam"></div>
                                            <div className="laptop-screen">
                                                {currentProject.videoId ? (
                                                    <iframe
                                                        width="100%"
                                                        height="100%"
                                                        src={`https://www.youtube.com/embed/${currentProject.videoId}?autoplay=1&mute=1&loop=1&playlist=${currentProject.videoId}&controls=1&showinfo=0&rel=0`}
                                                        title={currentProject.title}
                                                        frameBorder="0"
                                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                                        allowFullScreen
                                                        style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', zIndex: 10 }}
                                                    ></iframe>
                                                ) : (
                                                    currentProject.images && currentProject.images.map((img, idx) => {
                                                        const isVisible = hoveredProject ? idx === imageSequenceIdx : idx === 0;
                                                        return (
                                                            <div
                                                                key={idx}
                                                                className="laptop-screen-layer"
                                                                style={{
                                                                    backgroundImage: `url(${img})`,
                                                                    opacity: isVisible ? 1 : 0
                                                                }}
                                                            ></div>
                                                        );
                                                    })
                                                )}
                                            </div>
                                        </div>
                                        <div className="laptop-base">
                                            <div className="laptop-notch"></div>
                                        </div>
                                    </div>
                                    <div className="laptop-glow"></div>
                                </div>
                            )}

                            <button className="proj-nav-btn down" onClick={nextProject} aria-label="Next Project">
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="20" height="20">
                                    <path d="M6 9l6 6 6-6" />
                                </svg>
                            </button>
                        </div>

                        {/* Pagination Dots */}
                        <div className="project-pagination">
                            {activeProjects.map((_, idx) => (
                                <span
                                    key={idx}
                                    className={`pagination-dot ${idx === activeIndex ? 'active' : ''}`}
                                    onClick={() => setActiveIndex(idx)}
                                ></span>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Projects;
