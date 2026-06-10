import './MarqueeTicker.css';

const items = ['Web Development', '✦', 'Digital Marketing', '✦', 'SEO Optimization', '✦', 'Software Development', '✦', 'UI/UX Design', '✦', 'Social Media Management', '✦', 'Brand Identity', '✦', 'Mobile Apps', '✦'];

export default function MarqueeTicker() {
  return (
    <div className="ticker-wrap">
      <div className="ticker-track">
        {[...items, ...items].map((item, i) => (
          <span key={i} className={item === '✦' ? 'ticker-dot' : 'ticker-item'}>{item}</span>
        ))}
      </div>
    </div>
  );
}
