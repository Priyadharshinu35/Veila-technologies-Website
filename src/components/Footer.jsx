import logo from '../Veila_Technologies_Logo.png';
import './Footer.css';

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="footer">
      <div className="footer-glow" />
      <div className="container">
        <div className="footer-top">
          <div className="footer-brand">
            <div className="footer-logo">
              <img src={logo} alt="Veila Technologies" className="footer-logo-img" />
            </div>
            <p className="footer-tagline">
              Transforming businesses through technology,<br />
              creativity, and strategy.
            </p>
          </div>

          <div className="footer-links-grid">
            <div className="footer-col">
              <h5>Company</h5>
              <ul>
                <li><a href="#home">Home</a></li>
                <li><a href="#about">About Us</a></li>
                <li><a href="#why-us">Why Choose Us</a></li>
                <li><a href="#careers">Careers</a></li>
              </ul>
            </div>
            <div className="footer-col">
              <h5>Services</h5>
              <ul>
                <li><a href="#services">Web Development</a></li>
                <li><a href="#services">Software Development</a></li>
                <li><a href="#services">Digital Marketing</a></li>
                <li><a href="#services">SEO & Social Media</a></li>
              </ul>
            </div>
            <div className="footer-col">
              <h5>Follow Us</h5>
              <ul>
                <li><a href="https://www.youtube.com/@VeilaTechnologies" target="_blank" rel="noreferrer">▶ YouTube</a></li>
                <li><a href="https://www.instagram.com/veilatechnologies?igsh=MjhvN3VoMTRlYTl1" target="_blank" rel="noreferrer">📸 Instagram</a></li>
              </ul>
            </div>
            <div className="footer-col">
              <h5>Contact</h5>
              <ul>
                <li><a href="mailto:veilatechnologies@gmail.com">veilatechnologies@gmail.com</a></li>
                <li><a href="tel:+918072196400">+91 80721 96400</a></li>
                <li><span>Virudhunagar, Tamil Nadu</span></li>
                <li><span>India — Est. 2026</span></li>
              </ul>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p className="copyright">© {year} Veila Technologies. All rights reserved. Est. 2026.</p>
          <p className="footer-motto">Built with passion in Tamil Nadu 🇮🇳</p>
        </div>
      </div>
    </footer>
  );
}
