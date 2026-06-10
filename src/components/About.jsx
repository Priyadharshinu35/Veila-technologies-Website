import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import './About.css';

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 0) => ({
    opacity: 1, y: 0,
    transition: { delay: i * 0.13, duration: 0.6, ease: [0.4, 0, 0.2, 1] }
  })
};

const values = [
  { icon: '⚡', title: 'Innovation First',    desc: 'We leverage the latest technologies to build future-ready solutions.' },
  { icon: '🎯', title: 'Result-Oriented',     desc: 'Every project drives measurable, real-world business growth.' },
  { icon: '🤝', title: 'Client Partnership',  desc: "We treat every client's business goal as our own mission." },
  { icon: '✦',  title: 'Creative Excellence', desc: 'Creativity and strategy deliver unforgettable digital experiences.' },
];

export default function About() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section className="about-section" id="about" ref={ref}>
      <div className="container">
        <div className="about-grid">

          {/* LEFT */}
          <div className="about-left">
            <motion.span className="section-label" variants={fadeUp} custom={0} initial="hidden" animate={inView ? 'visible' : 'hidden'}>
              Who We Are
            </motion.span>
            <motion.h2 className="section-title" variants={fadeUp} custom={1} initial="hidden" animate={inView ? 'visible' : 'hidden'}>
              Technology Meets <span>Creative Strategy</span>
            </motion.h2>
            <motion.p className="about-desc" variants={fadeUp} custom={2} initial="hidden" animate={inView ? 'visible' : 'hidden'}>
              Veila Technologies is a technology-driven company focused on helping businesses
              grow through innovative digital solutions. We specialize in web development,
              software development, digital marketing, SEO, and social media management.
            </motion.p>
            <motion.p className="about-desc" variants={fadeUp} custom={3} initial="hidden" animate={inView ? 'visible' : 'hidden'}>
              Our goal is to provide reliable, creative, and result-oriented services that
              help businesses establish a strong online presence. We combine technology,
              creativity, and strategy to deliver solutions that create real value.
            </motion.p>
            <motion.div className="about-meta" variants={fadeUp} custom={4} initial="hidden" animate={inView ? 'visible' : 'hidden'}>
              <div className="meta-item"><span>📍</span><span>Virudhunagar, Tamil Nadu, India</span></div>
              <div className="meta-item"><span>🗓️</span><span>Established 2026</span></div>
            </motion.div>
          </div>

          {/* RIGHT – value cards with stagger */}
          <div className="values-grid">
            {values.map((v, i) => (
              <motion.div
                key={v.title}
                className="value-card"
                variants={fadeUp}
                custom={i + 2}
                initial="hidden"
                animate={inView ? 'visible' : 'hidden'}
                whileHover={{ y: -6, borderColor: 'var(--border-hover)', boxShadow: '0 0 24px rgba(255,106,0,0.1)' }}
              >
                <span className="value-icon">{v.icon}</span>
                <h4 className="value-title">{v.title}</h4>
                <p className="value-desc">{v.desc}</p>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
