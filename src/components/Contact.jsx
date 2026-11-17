import { useEffect, useState } from 'react';
import Icon from './Icon.jsx';
import { profile, socials } from '../data/portfolio.js';
import './Contact.css';

export default function Contact() {
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    if (!copied) return undefined;
    const t = setTimeout(() => setCopied(false), 2200);
    return () => clearTimeout(t);
  }, [copied]);

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(profile.email);
      setCopied(true);
    } catch {
      // Clipboard can be blocked (e.g. non-HTTPS); fall back to opening the mail app.
      window.location.href = `mailto:${profile.email}`;
    }
  };

  return (
    <section id="contact" className="section contact-section" aria-labelledby="contact-title">
      <div className="container">
        <div className="contact glass reveal">
          <div className="contact__glow" aria-hidden="true" />

          <div className="contact__copy">
            <h2 id="contact-title" className="contact__title">
              Let&apos;s connect.
            </h2>
            <p className="contact__text">
              I&apos;m looking for Software Engineering internship opportunities. Whether you&apos;re a recruiter, a
              developer or a fellow student, I&apos;d be glad to hear from you.
            </p>
          </div>

          <div className="contact__channels">
            <div className="contact__email">
              <a href={`mailto:${profile.email}`} className="contact__email-link">
                <Icon name="mail" size={20} />
                <span>{profile.email}</span>
              </a>
              <button
                type="button"
                className={`contact__copy-btn ${copied ? 'is-copied' : ''}`}
                onClick={copyEmail}
                aria-label="Copy email address"
              >
                <Icon name={copied ? 'check' : 'copy'} size={18} />
                <span>{copied ? 'Copied' : 'Copy'}</span>
              </button>
              <span className="sr-only" role="status" aria-live="polite">
                {copied ? 'Email address copied' : ''}
              </span>
            </div>

            <div className="contact__buttons">
              <a href={`mailto:${profile.email}`} className="btn btn--primary">
                <Icon name="send" size={18} />
                Send an email
              </a>
              <a href={socials.linkedin} target="_blank" rel="noopener noreferrer" className="btn btn--ghost">
                <Icon name="linkedin" size={18} />
                LinkedIn
                <span className="sr-only"> (opens in a new tab)</span>
              </a>
              <a href={socials.github} target="_blank" rel="noopener noreferrer" className="btn btn--ghost">
                <Icon name="github" size={18} />
                GitHub
                <span className="sr-only"> (opens in a new tab)</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
