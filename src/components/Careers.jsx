import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import './Careers.css';

const openings = [
  { role: 'Full Stack Developer', type: 'Full-time', location: 'Virudhunagar / Remote', skills: ['React', 'Node.js', 'MongoDB'] },
  { role: 'UI/UX Designer', type: 'Full-time', location: 'Virudhunagar / Remote', skills: ['Figma', 'Adobe XD', 'Prototyping'] },
  { role: 'Digital Marketing Specialist', type: 'Full-time', location: 'Virudhunagar', skills: ['SEO', 'Google Ads', 'Analytics'] },
  { role: 'Social Media Manager', type: 'Part-time', location: 'Remote', skills: ['Content Creation', 'Strategy', 'Analytics'] },
];

const perks = [
  { icon: '🚀', title: 'Startup Culture', desc: 'Be part of a growing company from day one and shape its future.' },
  { icon: '🌍', title: 'Remote Friendly', desc: 'Flexible work arrangements to support your work-life balance.' },
  { icon: '📚', title: 'Learning & Growth', desc: 'Continuous opportunities to learn new skills and advance your career.' },
  { icon: '💡', title: 'Creative Freedom', desc: 'Your ideas matter. Bring your creativity and make a real impact.' },
];

export default function Careers() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section className="careers-section" id="careers" ref={ref}>
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
        >
          <span className="section-label">Join Our Team</span>
          <h2 className="section-title">Build Your Career at <span>Veila</span></h2>
          <p className="section-sub">
            We're looking for passionate individuals who love technology and want to make a difference.
            Come grow with us.
          </p>
        </motion.div>

        <div className="careers-layout">
          <div className="openings-list">
            <h3 className="list-heading">Current Openings</h3>
            {openings.map((job, i) => (
              <motion.div
                key={job.role}
                className="job-card"
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: i * 0.1 + 0.2 }}
                whileHover={{ borderColor: 'var(--border-hover)', x: 4 }}
              >
                <div className="job-info">
                  <h4 className="job-role">{job.role}</h4>
                  <div className="job-meta">
                    <span className="job-type">{job.type}</span>
                    <span className="job-dot" />
                    <span className="job-location">📍 {job.location}</span>
                  </div>
                  <div className="job-skills">
                    {job.skills.map((s) => (
                      <span key={s} className="skill-badge">{s}</span>
                    ))}
                  </div>
                </div>
                <a
                  href={`mailto:veilatechnologies@gmail.com?subject=Application - ${job.role}`}
                  className="apply-btn"
                >
                  Apply →
                </a>
              </motion.div>
            ))}
          </div>

          <div className="perks-list">
            <h3 className="list-heading">Why Work With Us</h3>
            <div className="perks-grid">
              {perks.map((p, i) => (
                <motion.div
                  key={p.title}
                  className="perk-item"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={inView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ delay: i * 0.1 + 0.3 }}
                >
                  <span className="perk-icon">{p.icon}</span>
                  <div>
                    <h5 className="perk-title">{p.title}</h5>
                    <p className="perk-desc">{p.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.div
              className="careers-cta-box"
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ delay: 0.7 }}
            >
              <p>Don't see a suitable role? We'd still love to hear from you.</p>
              <a href="mailto:veilatechnologies@gmail.com?subject=Open Application" className="btn-outline">
                Send Open Application
              </a>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
