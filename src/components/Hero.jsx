import React, { useEffect, useRef, useState } from 'react';
import './Hero.css';

const techData = [
    { name: 'React', icon: <svg viewBox="-11.5 -10.232 23 20.463" width="20" height="20" fill="#00d8ff"><circle r="2.05" /><g fill="none" stroke="#00d8ff"><ellipse rx="11" ry="4.2" /><ellipse rx="11" ry="4.2" transform="rotate(60)" /><ellipse rx="11" ry="4.2" transform="rotate(120)" /></g></svg> },
    { name: 'Vue.js', icon: <svg viewBox="0 0 256 228" width="20" height="20"><path d="M204.8 0H256L128 220.8 0 0h51.2L128 132.48 204.8 0z" fill="#41B883" /><path d="M204.8 0L128 132.48 51.2 0H0l128 220.8L256 0h-51.2z" fill="#41B883" /><path d="M51.2 0L128 132.48 204.8 0h-51.2L128 44.16 76.8 0H51.2z" fill="#35495E" /></svg> },
    { name: 'Vite', icon: <svg viewBox="0 0 410 404" width="20" height="20" fill="none"><path d="M399.64 35.84L215.14 363.36c-4.47 7.9-15.82 7.9-20.28 0L10.36 35.84C5.17 26.65 13.06 15.35 23.32 17.39l181.82 36.16 181.81-36.16c10.26-2.04 18.15 9.26 12.69 18.45z" fill="#FFD816" /><path d="M205 53.5l182-36c10-2 18 9 13 18L215 363c-3 5-7 8-10 8z" fill="#FFB703" /><path d="M23 17l182 36C186 98 139 164 117 217c-4 9-22 66-51 69-34 3 6-77 6-77z" fill="#41D1FF" /><path d="M117 217c22-53 69-119 88-164l-182-36C13 15 5 26 10 36l107 181z" fill="#BD34FE" /></svg> },
    { name: 'Next.js', icon: <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSV9uzErWz9EXqZDxZ5lP9aYpMz8eK6rr5X3w&s" alt="Next.js" width="20" height="20" style={{ borderRadius: '4px', objectFit: 'contain' }} /> },
    { name: 'Node.js', icon: <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT6bebC_d4eWwJ-x9ntqDuT94TvOgumSBVWHg&s" alt="Node.js" width="20" height="20" style={{ borderRadius: '4px', objectFit: 'contain' }} /> },
    { name: 'Flutter', icon: <img src="https://img.icons8.com/color/1200/flutter.jpg" alt="Flutter" width="20" height="20" style={{ borderRadius: '4px', objectFit: 'contain' }} /> },
    { name: 'React Native', icon: <svg viewBox="-11.5 -10.232 23 20.463" width="20" height="20" fill="#61DAFB"><circle r="2.05" /><g fill="none" stroke="#61DAFB"><ellipse rx="11" ry="4.2" /><ellipse rx="11" ry="4.2" transform="rotate(60)" /><ellipse rx="11" ry="4.2" transform="rotate(120)" /></g></svg> },
    { name: 'TensorFlow', icon: <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2d/Tensorflow_logo.svg/960px-Tensorflow_logo.svg.png" alt="TensorFlow" width="20" height="20" style={{ borderRadius: '4px', objectFit: 'contain' }} /> },
    { name: 'NumPy', icon: <svg viewBox="0 0 24 24" width="20" height="20" fill="#4D77CF"><path d="M5.3 5v14.1h3.3v-8L14 19.1h4.6V5h-3.3v8.1L9.9 5H5.3z" /><circle cx="12" cy="12" r="10" stroke="#4D77CF" strokeWidth="2" fill="none" /></svg> },
    { name: 'Langchain', icon: <svg viewBox="0 0 24 24" width="20" height="20" fill="#2DCA73"><path d="M7 6c-1.6 0-3 1.3-3 3v6c0 1.6 1.3 3 3 3h3v-2H7c-.5 0-1-.4-1-1V9c0-.5.4-1 1-1h3V6H7zm10 0h-3v2h3c.5 0 1 .4 1 1v6c0 .5-.4 1-1 1h-3v2h3c1.6 0 3-1.3 3-3V9c0-1.6-1.3-3-3-3zm-6 4H8v4h3v-4zm2 0v4h3v-4h-3z" /></svg> },
    { name: 'Pandas', icon: <img src="https://img.icons8.com/color/1200/pandas.jpg" alt="Pandas logo" width="20" height="20" style={{ borderRadius: '4px' }} /> },
    { name: 'N8N', icon: <img src="https://assets.findstack.com/qdvbks1ba1vrqqv89dw6vsom77cd" alt="N8N" width="20" height="20" style={{ borderRadius: '4px', objectFit: 'contain' }} /> },
    { name: 'Unity', icon: <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRMEpvhQOuCkjQFYaax3e8BMa9yk4Y6xt_HUQ&s" alt="Unity" width="20" height="20" style={{ borderRadius: '4px', objectFit: 'contain' }} /> },
    { name: 'Unreal Engine', icon: <svg viewBox="0 0 24 24" width="20" height="20" fill="#fff"><path d="M12 0a12 12 0 1012 12A12 12 0 0012 0zm0 21.6a9.6 9.6 0 119.6-9.6 9.6 9.6 0 01-9.6 9.6zm-2.4-14h1.7v5.3c0 .5.3.8.8.8s.7-.3.7-.8V7.6h1.7v5.4c0 1.4-1.1 2.6-2.5 2.6s-2.6-1.1-2.6-2.5V7.6z" /></svg> },
    { name: 'UEFN', icon: <svg viewBox="0 0 24 24" width="20" height="20" fill="#fff"><path d="M12 0a12 12 0 1012 12A12 12 0 0012 0zm6 16.5H6v-9h12v9z" /></svg> }
];

// Typewriter hook
function useTypewriter(words, speed = 80, pause = 2000) {
    const [displayed, setDisplayed] = useState('');
    const [wordIdx, setWordIdx] = useState(0);
    const [charIdx, setCharIdx] = useState(0);
    const [deleting, setDeleting] = useState(false);

    useEffect(() => {
        const word = words[wordIdx];
        let timeout;
        if (!deleting && charIdx < word.length) {
            timeout = setTimeout(() => setCharIdx(c => c + 1), speed);
        } else if (!deleting && charIdx === word.length) {
            timeout = setTimeout(() => setDeleting(true), pause);
        } else if (deleting && charIdx > 0) {
            timeout = setTimeout(() => setCharIdx(c => c - 1), speed / 2);
        } else if (deleting && charIdx === 0) {
            setDeleting(false);
            setWordIdx(i => (i + 1) % words.length);
        }
        setDisplayed(word.slice(0, charIdx));
        return () => clearTimeout(timeout);
    }, [charIdx, deleting, wordIdx, words, speed, pause]);

    return displayed;
}

// Count-up hook
function useCountUp(target, duration = 1800, start = false) {
    const [count, setCount] = useState(0);
    useEffect(() => {
        if (!start) return;
        const num = parseInt(target);
        let startTime = null;
        const step = (ts) => {
            if (!startTime) startTime = ts;
            const p = Math.min((ts - startTime) / duration, 1);
            setCount(Math.floor(p * num));
            if (p < 1) requestAnimationFrame(step);
        };
        requestAnimationFrame(step);
    }, [target, duration, start]);
    return count;
}

const StatItem = ({ val, label }) => {
    const ref = useRef(null);
    const [visible, setVisible] = useState(false);
    const num = parseInt(val);
    const suffix = val.replace(/[0-9]/g, '');
    const count = useCountUp(num, 1600, visible);

    useEffect(() => {
        const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setVisible(true); }, { threshold: 0.5 });
        if (ref.current) obs.observe(ref.current);
        return () => obs.disconnect();
    }, []);

    return (
        <div ref={ref} className="hero-stat">
            <span className="stat-value">{visible ? count : 0}{suffix}</span>
            <span className="stat-label">{label}</span>
        </div>
    );
};

const Hero = ({ onScrollToServices }) => {
    const canvasRef = useRef(null);
    const blochRef = useRef(null);
    const mouseRef = useRef({ x: 0.5, y: 0.5 });
    const typewritten = useTypewriter(['Future', 'Vision', 'World', 'Standard'], 90, 2200);

    // ─── Deep-space star field with mouse parallax ───────────────────────────
    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');
        let animId;
        let stars = [];

        const resize = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        };

        class Star {
            constructor() { this.reset(true); }
            reset(init = false) {
                this.x = Math.random() * canvas.width;
                this.y = init ? Math.random() * canvas.height : -5;
                this.z = Math.random();                     // depth 0=far, 1=close
                this.baseX = this.x;
                this.baseY = this.y;
                this.r = this.z * 1.8 + 0.2;
                this.speed = this.z * 0.15 + 0.02;
                this.twinklePhase = Math.random() * Math.PI * 2;
                this.twinkleSpeed = 0.02 + Math.random() * 0.03;
                // color: white stars, rare cyan/purple
                const rnd = Math.random();
                this.color = rnd > 0.95 ? '0,212,255' : rnd > 0.9 ? '123,47,255' : '220,230,255';
            }
            update(t) {
                this.twinklePhase += this.twinkleSpeed;
                // slow drift downward for depth
                this.y += this.speed;
                // parallax offset based on mouse
                const px = (mouseRef.current.x - 0.5) * this.z * 30;
                const py = (mouseRef.current.y - 0.5) * this.z * 20;
                this.drawX = this.x + px;
                this.drawY = this.y + py;
                if (this.y > canvas.height + 10) this.reset();
            }
            draw() {
                const alpha = (0.4 + 0.6 * this.z) * (0.7 + 0.3 * Math.sin(this.twinklePhase));
                ctx.beginPath();
                ctx.arc(this.drawX, this.drawY, this.r, 0, Math.PI * 2);
                ctx.fillStyle = `rgba(${this.color},${alpha})`;
                ctx.fill();
                // glow on bright stars
                if (this.z > 0.7) {
                    ctx.beginPath();
                    ctx.arc(this.drawX, this.drawY, this.r * 3, 0, Math.PI * 2);
                    ctx.fillStyle = `rgba(${this.color},${alpha * 0.1})`;
                    ctx.fill();
                }
            }
        }

        const init = () => {
            stars = Array.from({ length: 220 }, () => new Star());
        };

        let t = 0;
        const animate = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            t++;
            stars.forEach(s => { s.update(t); s.draw(); });
            animId = requestAnimationFrame(animate);
        };

        const onMouse = (e) => {
            mouseRef.current = { x: e.clientX / window.innerWidth, y: e.clientY / window.innerHeight };
        };

        resize();
        init();
        animate();
        window.addEventListener('resize', () => { resize(); init(); });
        window.addEventListener('mousemove', onMouse);
        return () => {
            cancelAnimationFrame(animId);
            window.removeEventListener('resize', resize);
            window.removeEventListener('mousemove', onMouse);
        };
    }, []);

    // ─── Animated 3D Bloch Sphere ─────────────────────────────────────────────
    useEffect(() => {
        const canvas = blochRef.current;
        const ctx = canvas.getContext('2d');
        const W = canvas.width = 320;
        const H = canvas.height = 320;
        const cx = W / 2, cy = H / 2, R = 110;
        let animId;
        let t = 0;

        // Project 3D point to 2D with perspective
        const project = (x, y, z, tiltX = 0.3) => {
            // Rotate around Y axis (spin)
            const cosY = Math.cos(t * 0.008);
            const sinY = Math.sin(t * 0.008);
            const rx = x * cosY - z * sinY;
            const rz = x * sinY + z * cosY;
            // Slight tilt on X axis
            const cosX = Math.cos(tiltX);
            const sinX = Math.sin(tiltX);
            const ry2 = y * cosX - rz * sinX;
            const rz2 = y * sinX + rz * cosX;
            const scale = 1 + rz2 / (R * 3);
            return { sx: cx + rx * scale, sy: cy + ry2 * scale, depth: rz2 };
        };

        const drawCircle3D = (axis, segments, color, alpha, dash = []) => {
            const pts = [];
            for (let i = 0; i <= segments; i++) {
                const a = (i / segments) * Math.PI * 2;
                let x, y, z;
                if (axis === 'equator') { x = R * Math.cos(a); y = 0; z = R * Math.sin(a); }
                else if (axis === 'meridian') { x = 0; y = R * Math.cos(a); z = R * Math.sin(a); }
                else { x = R * Math.cos(a); y = R * Math.sin(a); z = 0; }
                pts.push(project(x, y, z));
            }
            ctx.beginPath();
            ctx.setLineDash(dash);
            ctx.strokeStyle = color;
            ctx.globalAlpha = alpha;
            pts.forEach((p, i) => i === 0 ? ctx.moveTo(p.sx, p.sy) : ctx.lineTo(p.sx, p.sy));
            ctx.stroke();
            ctx.setLineDash([]);
            ctx.globalAlpha = 1;
        };

        const animate = () => {
            ctx.clearRect(0, 0, W, H);
            t++;

            // ── Outer sphere glow ──
            const sphereGrad = ctx.createRadialGradient(cx, cy, R * 0.2, cx, cy, R * 1.1);
            sphereGrad.addColorStop(0, 'rgba(0,212,255,0.04)');
            sphereGrad.addColorStop(1, 'rgba(0,212,255,0)');
            ctx.beginPath();
            ctx.arc(cx, cy, R, 0, Math.PI * 2);
            ctx.fillStyle = sphereGrad;
            ctx.fill();

            // ── Outer ring ──
            ctx.beginPath();
            ctx.arc(cx, cy, R, 0, Math.PI * 2);
            ctx.strokeStyle = 'rgba(0,212,255,0.5)';
            ctx.lineWidth = 1.2;
            ctx.stroke();

            // ── 3D rings ──
            ctx.lineWidth = 0.9;
            drawCircle3D('equator', 80, 'rgba(0,212,255,0.35)', 0.8, [5, 4]);
            drawCircle3D('meridian', 80, 'rgba(123,47,255,0.3)', 0.7, [4, 5]);
            drawCircle3D('tilted', 80, 'rgba(0,255,136,0.2)', 0.5, [3, 6]);

            // ── Axis lines ──
            const north = project(0, -R, 0);
            const south = project(0, R, 0);
            ctx.beginPath();
            ctx.moveTo(north.sx, north.sy);
            ctx.lineTo(south.sx, south.sy);
            ctx.strokeStyle = 'rgba(123,47,255,0.4)';
            ctx.lineWidth = 0.8;
            ctx.setLineDash([5, 4]);
            ctx.stroke();
            ctx.setLineDash([]);

            // ── State vector |ψ⟩ — sweeps around ──
            const vecAngle = t * 0.015;
            const vecPhi = Math.PI / 4 + Math.sin(t * 0.006) * 0.5;
            const vx = R * 0.85 * Math.sin(vecPhi) * Math.cos(vecAngle);
            const vy = -R * 0.85 * Math.cos(vecPhi);
            const vz = R * 0.85 * Math.sin(vecPhi) * Math.sin(vecAngle);
            const tipProj = project(vx, vy, vz);
            const originProj = project(0, 0, 0);

            // vector glow
            const vecGrad = ctx.createLinearGradient(originProj.sx, originProj.sy, tipProj.sx, tipProj.sy);
            vecGrad.addColorStop(0, 'rgba(123,47,255,0.9)');
            vecGrad.addColorStop(1, 'rgba(0,212,255,0.9)');
            ctx.beginPath();
            ctx.moveTo(originProj.sx, originProj.sy);
            ctx.lineTo(tipProj.sx, tipProj.sy);
            ctx.strokeStyle = vecGrad;
            ctx.lineWidth = 2.5;
            ctx.stroke();

            // tip dot with halo
            const tipGlow = 5 + 3 * Math.sin(t * 0.05);
            const tipGrad = ctx.createRadialGradient(tipProj.sx, tipProj.sy, 0, tipProj.sx, tipProj.sy, tipGlow * 2);
            tipGrad.addColorStop(0, 'rgba(0,212,255,0.9)');
            tipGrad.addColorStop(1, 'rgba(0,212,255,0)');
            ctx.beginPath();
            ctx.arc(tipProj.sx, tipProj.sy, tipGlow * 2, 0, Math.PI * 2);
            ctx.fillStyle = tipGrad;
            ctx.fill();
            ctx.beginPath();
            ctx.arc(tipProj.sx, tipProj.sy, 3.5, 0, Math.PI * 2);
            ctx.fillStyle = '#00d4ff';
            ctx.fill();

            // poles
            ctx.beginPath();
            ctx.arc(north.sx, north.sy, 4, 0, Math.PI * 2);
            ctx.fillStyle = '#00d4ff';
            ctx.fill();
            ctx.fillStyle = 'rgba(0,212,255,0.8)';
            ctx.font = '11px JetBrains Mono, monospace';
            ctx.fillText('|0⟩', north.sx + 6, north.sy + 4);

            ctx.beginPath();
            ctx.arc(south.sx, south.sy, 4, 0, Math.PI * 2);
            ctx.fillStyle = '#7b2fff';
            ctx.fill();
            ctx.fillStyle = 'rgba(123,47,255,0.9)';
            ctx.font = '11px JetBrains Mono, monospace';
            ctx.fillText('|1⟩', south.sx + 6, south.sy + 4);

            // ψ label near tip
            ctx.fillStyle = 'rgba(0,212,255,0.9)';
            ctx.font = 'bold 12px JetBrains Mono, monospace';
            ctx.fillText('|ψ⟩', tipProj.sx + 8, tipProj.sy - 4);

            // origin dot
            ctx.beginPath();
            ctx.arc(originProj.sx, originProj.sy, 3, 0, Math.PI * 2);
            ctx.fillStyle = 'rgba(255,255,255,0.7)';
            ctx.fill();

            // code braces shimmer
            const braceAlpha = 0.5 + 0.2 * Math.sin(t * 0.04);
            ctx.fillStyle = `rgba(0,255,136,${braceAlpha})`;
            ctx.font = 'bold 24px monospace';
            ctx.fillText('{', 10, cy + 10);
            ctx.fillText('}', W - 28, cy + 10);

            animId = requestAnimationFrame(animate);
        };

        animate();
        return () => cancelAnimationFrame(animId);
    }, []);

    return (
        <>
            <section id="home" className="hero">
                <canvas ref={canvasRef} className="hero-canvas" />

                {/* Aurora ambient glows */}
                <div className="hero-aurora aurora-1" />
                <div className="hero-aurora aurora-2" />
                <div className="hero-aurora aurora-3" />

                <div className="hero-content">
                    <div className="hero-badge">
                        <span className="badge-dot" />
                        <span>Quantum-Powered Digital Innovation</span>
                    </div>

                    <h1 className="hero-title">
                        <span className="hero-title-line">We Code The</span>
                        <span className="hero-title-accent">
                            <span className="typewriter-text">{typewritten}</span>
                            <span className="typewriter-cursor">|</span>
                        </span>
                    </h1>

                    <p className="hero-subtitle">
                        QubitKode delivers cutting-edge web, mobile, AI &amp; game solutions —
                        blending innovation with precision to build products that stand apart.
                    </p>

                    <div className="hero-stats">
                        {[
                            { val: '50+', label: 'Projects Delivered' },
                            { val: '3+', label: 'Years Experience' },
                            { val: '6', label: 'Core Services' },
                        ].map((s, i) => <StatItem key={i} val={s.val} label={s.label} />)}
                    </div>

                    <div className="hero-actions">
                        <button
                            className="btn-primary hero-cta-btn"
                            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                        >
                            <span>Start a Project</span>
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                                <path d="M5 12h14M12 5l7 7-7 7" />
                            </svg>
                        </button>
                        <button
                            className="btn-secondary"
                            onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
                        >
                            Explore Services
                        </button>
                    </div>
                </div>

                {/* Animated Bloch Sphere */}
                <div className="hero-visual">
                    <div className="bloch-container">
                        <canvas ref={blochRef} className="bloch-canvas" width="320" height="320" />
                        <div className="bloch-ring bloch-ring-outer" />
                        <div className="bloch-ring bloch-ring-mid" />
                    </div>
                    <div className="quantum-label">Bloch Sphere · |ψ⟩ = α|0⟩ + β|1⟩</div>
                </div>

                {/* Scroll indicator */}
                <button
                    className="scroll-down"
                    aria-label="Scroll down"
                    onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
                >
                    <div className="scroll-line" />
                    <div className="scroll-mouse">
                        <div className="scroll-wheel" />
                    </div>
                    <span className="scroll-text">Scroll</span>
                </button>
            </section>

            {/* Full-width continuous tech slider */}
            <div className="hero-tech-banner">
                <div className="tech-track">
                    {[...techData, ...techData].map((t, idx) => (
                        <div key={`${t.name}-${idx}`} className="tech-slide-item">
                            <span className="tech-icon">{t.icon}</span>
                            <span className="tech-name">{t.name}</span>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
};

export default Hero;
