import React, { useEffect, useRef, useState } from 'react';
import './CustomCursor.css';

const CustomCursor = () => {
    const [position, setPosition] = useState({ x: 0, y: 0 });
    const [trail, setTrail] = useState([]);
    const [isHovering, setIsHovering] = useState(false);
    const [isVisible, setIsVisible] = useState(false);
    const [isClicking, setIsClicking] = useState(false);
    const posRef = useRef({ x: 0, y: 0 });
    const rafRef = useRef(null);

    useEffect(() => {
        const onMouseMove = (e) => {
            posRef.current = { x: e.clientX, y: e.clientY };
            setPosition({ x: e.clientX, y: e.clientY });
            if (!isVisible) setIsVisible(true);
        };

        const onMouseEnter = () => setIsVisible(true);
        const onMouseLeave = () => setIsVisible(false);
        const onMouseDown = () => setIsClicking(true);
        const onMouseUp = () => setIsClicking(false);

        const onMouseOver = (e) => {
            const target = e.target;
            const isInteractive =
                target.tagName.toLowerCase() === 'a' ||
                target.tagName.toLowerCase() === 'button' ||
                target.closest('a') ||
                target.closest('button') ||
                window.getComputedStyle(target).cursor === 'pointer';
            setIsHovering(!!isInteractive);
        };

        // Trail animation loop
        const TRAIL_LEN = 8;
        let trailPoints = Array(TRAIL_LEN).fill({ x: 0, y: 0 });

        const animateTrail = () => {
            trailPoints = [posRef.current, ...trailPoints.slice(0, TRAIL_LEN - 1)];
            setTrail([...trailPoints]);
            rafRef.current = requestAnimationFrame(animateTrail);
        };

        rafRef.current = requestAnimationFrame(animateTrail);

        window.addEventListener('mousemove', onMouseMove);
        window.addEventListener('mouseenter', onMouseEnter);
        window.addEventListener('mouseleave', onMouseLeave);
        window.addEventListener('mouseover', onMouseOver);
        window.addEventListener('mousedown', onMouseDown);
        window.addEventListener('mouseup', onMouseUp);

        return () => {
            cancelAnimationFrame(rafRef.current);
            window.removeEventListener('mousemove', onMouseMove);
            window.removeEventListener('mouseenter', onMouseEnter);
            window.removeEventListener('mouseleave', onMouseLeave);
            window.removeEventListener('mouseover', onMouseOver);
            window.removeEventListener('mousedown', onMouseDown);
            window.removeEventListener('mouseup', onMouseUp);
        };
    }, [isVisible]);

    // Only render on devices with a fine pointer (like a mouse)
    if (typeof window !== 'undefined' && window.matchMedia('(pointer: coarse)').matches) {
        return null;
    }

    return (
        <>
            {/* Trailing glow dots */}
            {trail.map((pt, i) => {
                const alpha = (1 - i / trail.length) * 0.35;
                const size = 6 - i * 0.5;
                return (
                    <div
                        key={i}
                        className="cursor-trail-dot"
                        style={{
                            left: pt.x,
                            top: pt.y,
                            width: Math.max(size, 2),
                            height: Math.max(size, 2),
                            opacity: isVisible ? alpha : 0,
                        }}
                    />
                );
            })}

            {/* Main cursor */}
            <div
                className={`custom-cursor ${isHovering ? 'hovering' : ''} ${isVisible ? 'visible' : ''} ${isClicking ? 'clicking' : ''}`}
                style={{ left: position.x, top: position.y }}
            >
                <div className="cursor-logo-wrapper">
                    <img src="/logo.png" alt="cursor" className="cursor-logo" />
                </div>
            </div>
        </>
    );
};

export default CustomCursor;
