import { motion } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';
import logo from '../Veila_Technologies_Logo.png';
import './Hero.css';

// Typewriter hook
function useTypewriter(words, speed = 80, pause = 1800) {
  const [text, setText] = useState('');
  const [wordIndex, setWordIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = words[wordIndex % words.length];
    const timeout = setTimeout(() => {
      if (!deleting) {
        setText(current.substring(0, text.length + 1));
        if (text.length + 1 === current.length) setTimeout(() => setDeleting(true), pause);
      } else {
        setText(current.substring(0, text.length - 1));
        if (text.length - 1 === 0) { setDeleting(false); setWordIndex(i => i + 1); }
      }
    }, deleting ? speed / 2 : speed);
    return () => clearTimeout(timeout);
  }, [text, deleting, wordIndex, words, speed, pause]);

  return text;
}

// Particle canvas
function ParticleCanvas() {
  const canvasRef = useRef(null);
  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    let animId;
    const resize = () => { canvas.width = window.innerWidth; canvas.height = window.innerHeight; };
    resize();
    window.addEventListener('resize', resize);

    const particles = Array.from({ length: 60 }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      r: Math.random() * 1.5 + 0.3,
      vx: (Math.random() - 0.5) * 0.4,
      vy: (Math.random() - 0.5) * 0.4,
      opacity: Math.random() * 0.5 + 0.1,
    }));

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.forEach(p => {
        p.x += p.vx; p.y += p.vy;
        if (p.x < 0) p.x = canvas.width;
        if (p.x > canvas.width) p.x = 0;
        if (p.y < 0) p.y = canvas.height;
        if (p.y > canvas.height) p.y = 0;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255, 106, 0, ${p.opacity})`;
        ctx.fill();
      });
      // Draw connections
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 120) {
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.strokeStyle = `rgba(255, 106, 0, ${0.08 * (1 - dist / 120)})`;
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        }
      }
      animId = requestAnimationFrame(draw);
    };
    draw();
    return () => { cancelAnimationFrame(animId); window.removeEventListener('resize', resize); };
  }, []);
  return <canvas ref={canvasRef} className="particle-canvas" />;
}

// Counter animation
function Counter({ target, suffix = '' }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        let start = 0;
        const num = parseInt(target);
        const step = Math.ceil(num / 40);
        const timer = setInterval(() => {
          start += step;
          if (start >= num) { setCount(num); clearInterval(timer); }
          else setCount(start);
        }, 40);
      }
    }, { threshold: 0.5 });
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [target]);
  return <span ref={ref}>{isNaN(parseInt(target)) ? target : count}{suffix}</span>;
}

const services = ['Web Dev', 'SEO', 'Marketing', 'Software', 'Social Media'];

export default function Hero() {
  const typed = useTypewriter(['Web Development', 'Digital Marketing', 'SEO Optimization', 'Software Solutions', 'Brand Growth']);

  const orbTags = services.map((item, i) => {
    const angle = (i / services.length) * 360 - 90;
    const rad = (angle * Math.PI) / 180;
    const r = 138;
    const x = 50 + (r / 300) * 100 * Math.cos(rad);
    const y = 50 + (r / 300) * 100 * Math.sin(rad);
    return { item, x, y, delay: i * 0.15 };
  });

  return (
    <section className="hero" id="home">
      <ParticleCanvas />
      <div className="hero-bg">
        <div className="hero-grid" />
        <div className="orb orb-1" />
        <div className="orb orb-2" />
        <div className="hero-scanline" />
      </div>

      <div className="container hero-content">
        <motion.div className="hero-badge"
          initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}>
          <span className="badge-dot" />
          Est. 2026 · Virudhunagar, Tamil Nadu
        </motion.div>

        <motion.h1 className="hero-title"
          initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.35, duration: 0.9 }}>
          We Power Your<br />
          <span className="gradient-text typewriter-wrap">
            {typed}<span className="cursor-blink">|</span>
          </span>
        </motion.h1>

        <motion.p className="hero-desc"
          initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.6 }}>
          Veila Technologies helps businesses grow through cutting-edge web development,
          software solutions, digital marketing, and creative strategy. We turn your vision
          into powerful digital experiences.
        </motion.p>

        <motion.div className="hero-actions"
          initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.75 }}>
          <a href="#services" className="btn-primary magnetic-btn">
            <span>Explore Services</span>
            <span className="btn-shine" />
          </a>
          <a href="#contact" className="btn-outline">Start a Project →</a>
        </motion.div>

        <motion.div className="hero-stats"
          initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1 }}>
          {[
            { num: '5', suffix: '+', label: 'Services Offered' },
            { num: '100', suffix: '%', label: 'Client Focused' },
            { num: '2026', suffix: '', label: 'Founded' },
          ].map((s) => (
            <div className="stat-item" key={s.label}>
              <span className="stat-num">
                <Counter target={s.num} suffix={s.suffix} />
              </span>
              <span className="stat-label">{s.label}</span>
            </div>
          ))}
        </motion.div>
      </div>

      <motion.div className="hero-visual"
        initial={{ opacity: 0, scale: 0.7, rotate: -10 }}
        animate={{ opacity: 1, scale: 1, rotate: 0 }}
        transition={{ delay: 0.5, duration: 1.2, ease: [0.34, 1.56, 0.64, 1] }}>
        <div className="visual-ring ring-1" />
        <div className="visual-ring ring-2" />
        <div className="visual-ring ring-3" />
        <div className="visual-ring ring-4" />
        <div className="ring-glow" />
        <div className="visual-center">
          <img src={logo} alt="Veila Technologies" className="logo-img" />
        </div>
        {orbTags.map(({ item, x, y, delay }) => (
          <motion.div key={item} className="orbit-tag"
            style={{ left: `${x}%`, top: `${y}%` }}
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1, y: [0, -8, 0] }}
            transition={{
              opacity: { delay: 0.8 + delay, duration: 0.4 },
              scale: { delay: 0.8 + delay, duration: 0.4, type: 'spring', stiffness: 200 },
              y: { delay: 0.8 + delay, duration: 3 + delay, repeat: Infinity, ease: 'easeInOut' }
            }}>
            {item}
          </motion.div>
        ))}
      </motion.div>

      <div className="scroll-hint">
        <div className="scroll-mouse">
          <div className="scroll-wheel" />
        </div>
        <span>Scroll</span>
      </div>
    </section>
  );
}
