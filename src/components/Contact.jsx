import { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import './Contact.css';

export default function Contact() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });
  const [status, setStatus] = useState(null);
  const [focused, setFocused] = useState(null);

  const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = e => {
    e.preventDefault();
    const { name, email, subject, message } = form;
    const mailtoLink = `mailto:veilatechnologies@gmail.com?subject=${encodeURIComponent(subject || 'Website Enquiry from ' + name)}&body=${encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\n${message}`)}`;
    window.location.href = mailtoLink;
    setStatus('success');
    setTimeout(() => setStatus(null), 4000);
  };

  return (
    <section className="contact-section" id="contact" ref={ref}>
      <div className="container">
        <motion.div className="section-header" initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}}>
          <span className="section-label">Get In Touch</span>
          <h2 className="section-title">Let's Build Something <span>Amazing</span></h2>
          <p className="section-sub">Have a project in mind? Reach out and let's start a conversation about how we can help your business grow.</p>
        </motion.div>

        <div className="contact-layout">
          {/* LEFT – info */}
          <motion.div className="contact-info" initial={{ opacity: 0, x: -30 }} animate={inView ? { opacity: 1, x: 0 } : {}} transition={{ delay: 0.2 }}>
            <div className="info-cards">
              {[
                { icon: '📧', label: 'Email Us',  val: 'veilatechnologies@gmail.com', href: 'mailto:veilatechnologies@gmail.com' },
                { icon: '📞', label: 'Call Us',   val: '+91 80721 96400',              href: 'tel:+918072196400' },
                { icon: '📍', label: 'Location',  val: 'Virudhunagar, Tamil Nadu, India', href: null },
              ].map(c => (
                <motion.div key={c.label} className="info-card" whileHover={{ x: 4, borderColor: 'var(--border-hover)' }}>
                  <span className="info-icon">{c.icon}</span>
                  <div>
                    <span className="info-label">{c.label}</span>
                    {c.href
                      ? <a href={c.href} className="info-value hover-orange">{c.val}</a>
                      : <span className="info-value">{c.val}</span>}
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="social-section">
              <p className="social-label">Follow Us</p>
              <div className="social-links">
                {[
                  { label: 'YouTube',   href: 'https://www.youtube.com/@VeilaTechnologies' },
                  { label: 'Instagram', href: 'https://www.instagram.com/veilatechnologies?igsh=MjhvN3VoMTRlYTl1' },
                
                ].map(s => (
                  <a key={s.label} href={s.href} target="_blank" rel="noreferrer" className="social-btn">
                    {s.label}
                  </a>
                ))}
              </div>
            </div>

            <div className="availability-badge">
              <span className="avail-dot" />
              <span>Available for new projects</span>
            </div>
          </motion.div>

          {/* RIGHT – form */}
          <motion.div className="contact-form-wrap" initial={{ opacity: 0, x: 30 }} animate={inView ? { opacity: 1, x: 0 } : {}} transition={{ delay: 0.3 }}>
            {status === 'success' && (
              <motion.div className="success-toast" initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }}>
                ✓ Opening your mail client…
              </motion.div>
            )}

            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-row">
                {[
                  { id: 'name',  label: 'Your Name',     type: 'text',  ph: 'John Doe' },
                  { id: 'email', label: 'Email Address',  type: 'email', ph: 'john@company.com' },
                ].map(f => (
                  <div key={f.id} className={`form-group ${focused === f.id ? 'form-focused' : ''}`}>
                    <label className="form-label">{f.label}</label>
                    <input
                      type={f.type} name={f.id} className="form-input"
                      placeholder={f.ph} value={form[f.id]}
                      onChange={handleChange}
                      onFocus={() => setFocused(f.id)}
                      onBlur={() => setFocused(null)}
                      required
                    />
                  </div>
                ))}
              </div>

              <div className={`form-group ${focused === 'subject' ? 'form-focused' : ''}`}>
                <label className="form-label">Subject</label>
                <input
                  type="text" name="subject" className="form-input"
                  placeholder="How can we help you?" value={form.subject}
                  onChange={handleChange}
                  onFocus={() => setFocused('subject')}
                  onBlur={() => setFocused(null)}
                />
              </div>

              <div className={`form-group ${focused === 'message' ? 'form-focused' : ''}`}>
                <label className="form-label">Message</label>
                <textarea
                  name="message" className="form-input form-textarea"
                  placeholder="Tell us about your project…" value={form.message}
                  onChange={handleChange}
                  onFocus={() => setFocused('message')}
                  onBlur={() => setFocused(null)}
                  required rows={5}
                />
              </div>

              <motion.button
                type="submit"
                className="btn-primary form-submit"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.97 }}
              >
                Send Message →
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
