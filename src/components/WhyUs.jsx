import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import './WhyUs.css';

const reasons = [
  { num: '01', title: 'Modern Technology Stack', desc: 'We use only the latest frameworks, tools, and technologies to ensure your product is future-proof and scalable.' },
  { num: '02', title: 'Dedicated Project Team', desc: 'Every client gets a dedicated team committed to understanding and delivering your unique business needs.' },
  { num: '03', title: 'Transparent Communication', desc: 'Regular updates, clear timelines, and honest feedback — you\'ll always know exactly where your project stands.' },
  { num: '04', title: 'End-to-End Solutions', desc: 'From design to deployment and marketing — we cover everything so you don\'t have to manage multiple vendors.' },
  { num: '05', title: 'Competitive Pricing', desc: 'Premium quality at startup-friendly pricing. We believe great technology should be accessible to every business.' },
  { num: '06', title: 'Post-Launch Support', desc: 'Our relationship doesn\'t end at launch. We provide ongoing support, maintenance, and growth optimization.' },
];

export default function WhyUs() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section className="why-section" id="why-us" ref={ref}>
      <div className="container">
        <div className="why-grid">
          <div className="why-left">
            <motion.span
              className="section-label"
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5 }}
            >
              Why Choose Us
            </motion.span>
            <motion.h2
              className="section-title"
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              The Veila <span>Advantage</span>
            </motion.h2>
            <motion.p
              className="why-desc"
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              We're not just a service provider — we're your technology partner. Here's what
              makes Veila Technologies the right choice for your digital journey.
            </motion.p>

            <motion.div
              className="why-cta"
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.35 }}
            >
              <a href="#contact" className="btn-primary">Work With Us</a>
            </motion.div>

            <motion.div
              className="why-highlight"
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ delay: 0.5 }}
            >
              <div className="highlight-line" />
              <p>"We combine technology, creativity, and strategy to deliver solutions that create real value for our clients."</p>
            </motion.div>
          </div>

          <div className="why-right">
            {reasons.map((r, i) => (
              <motion.div
                key={r.num}
                className="reason-item"
                initial={{ opacity: 0, x: 30 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: i * 0.09 + 0.2, duration: 0.5 }}
                whileHover={{ x: 6 }}
              >
                <span className="reason-num">{r.num}</span>
                <div className="reason-content">
                  <h4 className="reason-title">{r.title}</h4>
                  <p className="reason-desc">{r.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
