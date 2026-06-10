import { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import './Services.css';

const services = [
  { icon: '🌐', title: 'Web Development', tag: 'Frontend & Backend', desc: 'We build fast, responsive, and visually stunning websites and web apps that drive conversions and deliver exceptional experiences.', features: ['Custom Websites', 'E-Commerce Stores', 'Landing Pages', 'Web Apps'],pricing: { basic: '₹8,000', premium: '₹18,000' }},
  { icon: '💻', title: 'Software Development', tag: 'Custom Solutions', desc: 'Tailored software solutions designed for your specific business needs — scalable, secure, and built with cutting-edge tech.', features: ['Mobile Apps', 'SaaS Platforms', 'APIs & Integrations', 'Automation'], pricing: { basic: '₹15,000', premium: '₹40,000' } },
  { icon: '📈', title: 'Digital Marketing', tag: 'Growth Strategy', desc: 'Data-driven digital marketing campaigns that grow your audience, increase brand awareness, and generate qualified leads.', features: ['PPC Campaigns', 'Email Marketing', 'Content Strategy', 'Analytics'] ,pricing: { basic: '₹5,000', premium: '₹12,000' }},
  { icon: '🔍', title: 'SEO Optimization', tag: 'Search Rankings', desc: 'Boost your visibility on search engines with comprehensive SEO strategies that drive organic traffic and improve rankings.', features: ['On-page SEO', 'Technical SEO', 'Link Building', 'Keyword Research'],pricing: { basic: '₹2,500', premium: '₹4,000' } },
  { icon: '📱', title: 'Social Media Management', tag: 'Brand Presence', desc: 'Build a powerful social media presence with strategic content, consistent engagement, and creative campaigns.', features: ['Content Creation', 'Community Management', 'Brand Strategy', 'Analytics'], pricing: { basic: '₹3,500', premium: '₹8,000' } },
  { icon: '🎨', title: 'UI/UX Design', tag: 'Design & Branding', desc: 'Craft intuitive user interfaces and memorable brand experiences that captivate your audience and reflect your identity.', features: ['UI Design', 'UX Research', 'Brand Identity', 'Prototyping'],pricing: { basic: '₹6,000', premium: '₹14,000' }  },
];

function TiltCard({ children, className }) {
  const ref = useRef(null);
  const [transform, setTransform] = useState('');
  const [glow, setGlow] = useState({ x: 50, y: 50 });

  const onMove = (e) => {
    const rect = ref.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const cx = rect.width / 2;
    const cy = rect.height / 2;
    const rx = ((y - cy) / cy) * 8;
    const ry = ((x - cx) / cx) * -8;
    setTransform(`perspective(800px) rotateX(${rx}deg) rotateY(${ry}deg) translateZ(8px)`);
    setGlow({ x: (x / rect.width) * 100, y: (y / rect.height) * 100 });
  };
  const onLeave = () => { setTransform('perspective(800px) rotateX(0deg) rotateY(0deg) translateZ(0px)'); };

  return (
    <div
      ref={ref}
      className={className}
      style={{ transform, transition: 'transform 0.15s ease', '--gx': `${glow.x}%`, '--gy': `${glow.y}%` }}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
    >
      {children}
    </div>
  );
}

export default function Services() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section className="services-section" id="services" ref={ref}>
      <div className="services-bg" />
      <div className="container">
        <motion.div className="section-header" initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6 }}>
          <span className="section-label">What We Do</span>
          <h2 className="section-title">Our <span>Services</span></h2>
          <p className="section-sub">A complete suite of technology and digital services designed to elevate your business and accelerate your growth.</p>
        </motion.div>

        <div className="services-grid">
          {services.map((s, i) => (
            <motion.div key={s.title}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.1, duration: 0.5 }}>
              <TiltCard className="service-card">
                <div className="card-glow-spot" />
                <div className="service-top">
                  <span className="service-icon">{s.icon}</span>
                  <span className="service-tag">{s.tag}</span>
                </div>
                <h3 className="service-title">{s.title}</h3>
                <p className="service-desc">{s.desc}</p>
                <ul className="service-features">
                  {s.features.map((f) => (
                    <li key={f}><span className="feat-dot" />{f}</li>
                  ))}
                  
                </ul>
                <div className="service-pricing">
                  <span className="price-basic">Basic: {s.pricing.basic}</span>
                  <span className="price-divider">|</span>
                  <span className="price-premium">Premium: {s.pricing.premium}</span>
                  </div>
                <div className="card-border-glow" />
              </TiltCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
