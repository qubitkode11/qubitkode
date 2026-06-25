import React, { useState, useEffect } from 'react';
import { useLocation, Link } from 'react-router-dom';
import './OfferPopup.css';

const OfferPopup = () => {
    const [isVisible, setIsVisible] = useState(false);
    const location = useLocation();

    useEffect(() => {
        // Only trigger on the home page
        if (location.pathname === '/') {
            const timer = setTimeout(() => {
                setIsVisible(true);
            }, 1200); // 1.2s delay for a smooth entrance
            return () => clearTimeout(timer);
        } else {
            setIsVisible(false);
        }
    }, [location.pathname]);

    const handleClose = () => {
        setIsVisible(false);
    };

    if (!isVisible) return null;

    return (
        <div className="offer-overlay">
            <div className="offer-backdrop" onClick={handleClose}></div>

            <div className="offer-modal">
                <button className="offer-close" onClick={handleClose} aria-label="Close offer">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="18" height="18">
                        <line x1="18" y1="6" x2="6" y2="18"></line>
                        <line x1="6" y1="6" x2="18" y2="18"></line>
                    </svg>
                </button>

                <div className="offer-content">
                    <div className="offer-badge">Exclusive Opportunity</div>

                    <h2 className="offer-title">Try Before You Commit</h2>
                    <h3 className="offer-subtitle">
                        <span className="gradient-text">1-WEEK FREE DEMO</span>
                    </h3>

                    <p className="offer-desc">
                        Experience the quality and velocity of our elite engineering team with zero financial risk. Let us build a proof-of-concept for your idea, completely free for 7 days.
                    </p>

                    <div className="offer-features">
                        <div className="offer-feat">
                            <span className="feat-check">✓</span>
                            <span>Zero Upfront Cost</span>
                        </div>
                        <div className="offer-feat">
                            <span className="feat-check">✓</span>
                            <span>Dedicated Engineering Squad</span>
                        </div>
                        <div className="offer-feat">
                            <span className="feat-check">✓</span>
                            <span>Full IP Protection & NDA</span>
                        </div>
                    </div>

                    <div className="offer-actions">
                        <Link to="/contact" className="btn-primary offer-btn" onClick={handleClose}>
                            Claim Your Free Demo
                        </Link>
                        <button className="btn-secondary offer-btn-sec" onClick={handleClose}>
                            Maybe Later
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OfferPopup;
