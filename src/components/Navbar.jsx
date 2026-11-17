import { useEffect, useState } from 'react';
import Icon from './Icon.jsx';
import useActiveSection from '../hooks/useActiveSection.js';
import { navLinks, profile, socials } from '../data/portfolio.js';
import './Navbar.css';

const sectionIds = navLinks.map((link) => link.href.slice(1));

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const active = useActiveSection(sectionIds);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Close the mobile menu with Escape, and when the screen becomes wide.
  useEffect(() => {
    if (!open) return undefined;
    const onKey = (e) => e.key === 'Escape' && setOpen(false);
    const onResize = () => window.innerWidth > 860 && setOpen(false);
    window.addEventListener('keydown', onKey);
    window.addEventListener('resize', onResize);
    return () => {
      window.removeEventListener('keydown', onKey);
      window.removeEventListener('resize', onResize);
    };
  }, [open]);

  return (
    <header className={`nav ${scrolled ? 'nav--scrolled' : ''} ${open ? 'nav--open' : ''}`}>
      <nav className="nav__inner glass" aria-label="Main">
        <a href="#top" className="nav__brand" onClick={() => setOpen(false)}>
          <span className="nav__mark" aria-hidden="true">
            {profile.initials}
          </span>
          <span className="nav__username">{profile.username}</span>
          <span className="sr-only">, back to top</span>
        </a>

        <ul id="nav-menu" className="nav__links">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className={active === link.href.slice(1) ? 'is-active' : ''}
                aria-current={active === link.href.slice(1) ? 'true' : undefined}
                onClick={() => setOpen(false)}
              >
                {link.label}
              </a>
            </li>
          ))}
          <li className="nav__mobile-socials">
            <a href={socials.github} target="_blank" rel="noopener noreferrer">
              <Icon name="github" size={18} /> GitHub
            </a>
            <a href={socials.linkedin} target="_blank" rel="noopener noreferrer">
              <Icon name="linkedin" size={18} /> LinkedIn
            </a>
          </li>
        </ul>

        <div className="nav__actions">
          <a
            className="nav__icon-link"
            href={socials.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub profile (opens in a new tab)"
          >
            <Icon name="github" size={18} />
          </a>
          <a
            className="nav__icon-link"
            href={socials.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn profile (opens in a new tab)"
          >
            <Icon name="linkedin" size={18} />
          </a>
          <button
            type="button"
            className="nav__toggle"
            aria-expanded={open}
            aria-controls="nav-menu"
            aria-label={open ? 'Close menu' : 'Open menu'}
            onClick={() => setOpen((v) => !v)}
          >
            <Icon name={open ? 'x' : 'menu'} size={22} />
          </button>
        </div>
      </nav>
    </header>
  );
}
