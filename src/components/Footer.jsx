import Icon from './Icon.jsx';
import { profile, socials } from '../data/portfolio.js';
import './Footer.css';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container footer__inner">
        <p className="footer__copy">
          © {year} {profile.fullName}. Designed and built with React and Vite.
        </p>
        <div className="footer__links">
          <a href={socials.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub (opens in a new tab)">
            <Icon name="github" size={18} />
          </a>
          <a href={socials.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn (opens in a new tab)">
            <Icon name="linkedin" size={18} />
          </a>
          <a href="#top" className="footer__top">
            <Icon name="arrowUp" size={16} />
            Back to top
          </a>
        </div>
      </div>
    </footer>
  );
}
