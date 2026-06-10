import { useState, useEffect } from 'react';
import logo from '../Veila_Technologies_Logo.png';
import './PageLoader.css';

export default function PageLoader() {
  const [visible, setVisible] = useState(true);
  useEffect(() => {
    const t = setTimeout(() => setVisible(false), 2400);
    return () => clearTimeout(t);
  }, []);
  if (!visible) return null;
  return (
    <div className="page-loader" id="page-loader">
      <img src={logo} alt="Veila" className="loader-logo" />
      <div className="loader-bar"><div className="loader-fill" /></div>
      <span className="loader-text">Loading Veila Technologies</span>
    </div>
  );
}
