import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate, Link } from 'react-router-dom';
import './Navbar.css';

const servicesList = [
  {
    name: 'Web Development', slug: 'web-development',
    icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="16 18 22 12 16 6"></polyline><polyline points="8 6 2 12 8 18"></polyline></svg>
  },
  {
    name: 'Mobile Development', slug: 'mobile-development',
    icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="5" y="2" width="14" height="20" rx="2" ry="2"></rect><line x1="12" y1="18" x2="12.01" y2="18"></line></svg>
  },
  {
    name: 'AI & Machine Learning', slug: 'ai-machine-learning',
    icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9.5 2A2.5 2.5 0 0 1 12 4.5v15a2.5 2.5 0 0 1-4.96.44 2.5 2.5 0 0 1-2.96-3.08 3 3 0 0 1-.34-5.58 2.5 2.5 0 0 1 1.32-4.24 2.5 2.5 0 0 1 1.98-3A2.5 2.5 0 0 1 9.5 2Z" /><path d="M14.5 2A2.5 2.5 0 0 0 12 4.5v15a2.5 2.5 0 0 0 4.96.44 2.5 2.5 0 0 0 2.96-3.08 3 3 0 0 0 .34-5.58 2.5 2.5 0 0 0-1.32-4.24 2.5 2.5 0 0 0-1.98-3A2.5 2.5 0 0 0 14.5 2Z" /></svg>
  },
  {
    name: 'Game Development', slug: 'game-development',
    icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="6" y1="12" x2="10" y2="12"></line><line x1="8" y1="10" x2="8" y2="14"></line><line x1="15" y1="13" x2="15.01" y2="13"></line><line x1="18" y1="11" x2="18.01" y2="11"></line><rect x="2" y="6" width="20" height="12" rx="2"></rect></svg>
  },
  {
    name: 'SEO Optimization', slug: 'seo-optimization',
    icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line><line x1="11" y1="8" x2="11" y2="14"></line><line x1="8" y1="11" x2="14" y2="11"></line></svg>
  },
  {
    name: 'Digital Marketing', slug: 'digital-marketing',
    icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="20" x2="18" y2="10"></line><line x1="12" y1="20" x2="12" y2="4"></line><line x1="6" y1="20" x2="6" y2="14"></line></svg>
  }
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [megaMenuOpen, setMegaMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
      if (location.pathname !== '/') return;

      const sections = ['home', 'services', 'about', 'team', 'contact'];
      for (let s of sections) {
        const el = document.getElementById(s);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) { setActiveSection(s); break; }
        }
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [location.pathname]);

  // Handle cross-page scrolling
  useEffect(() => {
    if (location.pathname === '/' && location.hash) {
      const id = location.hash.replace('#', '');
      setTimeout(() => {
        document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    }
  }, [location]);

  const scrollTo = (id) => {
    setMenuOpen(false);
    setMegaMenuOpen(false);
    if (location.pathname !== '/') {
      navigate('/#' + id);
    } else {
      document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const navLinks = [
    { id: 'partner', label: 'Become a Partner' },
    { id: 'about', label: 'About' },
    { id: 'contact', label: 'Contact' },
  ];

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="nav-container">
        <div className="nav-logo" onClick={() => scrollTo('home')}>
          <div className="logo-icon">
            <img src="/logo.png" alt="QubitKode Logo" className="navbar-logo-img" />
          </div>
          
        </div>

        <ul className={`nav-links ${menuOpen ? 'open' : ''}`}>
          <li>
            <button
              className={`nav-link ${activeSection === 'home' && location.pathname === '/' ? 'active' : ''}`}
              onClick={() => scrollTo('home')}
            >
              Home
              {activeSection === 'home' && location.pathname === '/' && <span className="link-indicator" />}
            </button>
          </li>

          <li
            className="mega-menu-trigger"
            onMouseEnter={() => setMegaMenuOpen(true)}
            onMouseLeave={() => setMegaMenuOpen(false)}
          >
            <button
              className={`nav-link ${location.pathname.includes('/services') ? 'active' : ''}`}
              onClick={(e) => {
                if (window.innerWidth <= 768) {
                  e.preventDefault();
                  setMegaMenuOpen(!megaMenuOpen);
                } else {
                  scrollTo('services');
                }
              }}
            >
              Services
              {(activeSection === 'services' || location.pathname.includes('/services')) && <span className="link-indicator" />}
            </button>

            <div className={`mega-menu ${megaMenuOpen ? 'show' : ''}`}>
              <div className="mega-menu-content">
                <div className="mega-menu-header">
                  <h3>Our Services</h3>
                  <p>Explore our cutting-edge digital solutions tailored for your growth.</p>
                  <button onClick={() => scrollTo('services')} className="view-all-btn">Overview</button>
                </div>
                <div className="mega-menu-grid">
                  {servicesList.map(svc => (
                    <Link
                      to={`/services/${svc.slug}`}
                      key={svc.slug}
                      className="mega-menu-item"
                      onClick={() => { setMenuOpen(false); setMegaMenuOpen(false); }}
                    >
                      <span className="item-icon">{svc.icon}</span>
                      <span className="item-title">{svc.name}</span>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </li>

          {navLinks.map(link => (
            <li key={link.id}>
              {link.id === 'team' ? (
                <button
                  className={`nav-link ${activeSection === link.id && location.pathname === '/' ? 'active' : ''}`}
                  onClick={() => scrollTo(link.id)}
                >
                  {link.label}
                  {activeSection === link.id && location.pathname === '/' && <span className="link-indicator" />}
                </button>
              ) : (
                <Link
                  to={`/${link.id}`}
                  className={`nav-link ${location.pathname === `/${link.id}` ? 'active' : ''}`}
                  onClick={() => { setMenuOpen(false); setMegaMenuOpen(false); }}
                  style={{ textDecoration: 'none' }}
                >
                  {link.label}
                  {location.pathname === `/${link.id}` && <span className="link-indicator" />}
                </Link>
              )}
            </li>
          ))}
          <li>
            <Link to="/contact" className="nav-cta" onClick={() => setMenuOpen(false)} style={{ textDecoration: 'none' }}>
              Get Started
            </Link>
          </li>
        </ul>

        <button
          className={`hamburger ${menuOpen ? 'active' : ''}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Menu"
        >
          <span /><span /><span />
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
