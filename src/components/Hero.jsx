import Icon from './Icon.jsx';
import { profile, socials } from '../data/portfolio.js';
import './Hero.css';

/* The code shown in the hero editor. Each line is a list of [tokenType, text]. */
const codeLines = [
  [['kw', 'public class '], ['type', 'Kajanika'], ['p', ' {']],
  [['p', '  '], ['type', 'String'], ['p', ' studying = '], ['str', '"IT @ UoM"'], ['p', ';']],
  [['p', '  '], ['type', 'String'], ['p', '[] loves = { '], ['str', '"Java"'], ['p', ', '], ['str', '"UI/UX"'], ['p', ', '], ['str', '"Web"'], ['p', ' };']],
  [['p', '']],
  [['p', '  '], ['kw', 'void '], ['fn', 'build'], ['p', '('], ['type', 'Idea'], ['p', ' idea) {']],
  [['p', '    '], ['fn', 'design'], ['p', '(idea);  '], ['cm', '// make it friendly']],
  [['p', '    '], ['fn', 'code'], ['p', '(idea);    '], ['cm', '// make it work']],
  [['p', '  }']],
  [['p', '}']],
];

export default function Hero() {
  return (
    <section id="top" className="hero" aria-labelledby="hero-title">
      <div className="hero__orbs" aria-hidden="true">
        <span className="orb orb--indigo" />
        <span className="orb orb--cyan" />
        <span className="orb orb--teal" />
        <span className="orb orb--blue" />
      </div>

      <div className="container hero__grid">
        <div className="hero__copy">
          <p className="hero__hello">
            <span className="hero__status-dot" aria-hidden="true" />
            Open to Software Engineering internships
          </p>

          <h1 id="hero-title" className="hero__title">
            Hi, I&apos;m {profile.firstName}.
          </h1>

          <p className="hero__subtitle">
            {profile.subtitle.map((part, i) => (
              <span key={part}>
                {part}
                {/* Separator for screen readers and copy-paste; the layout stacks the roles. */}
                {i < profile.subtitle.length - 1 && <span className="sr-only"> | </span>}
              </span>
            ))}
          </p>

          <p className="hero__intro">{profile.heroIntro}</p>

          <div className="hero__ctas">
            <a href="#projects" className="btn btn--primary">
              Explore My Work
              <Icon name="arrowDown" size={18} />
            </a>
            <a href="#contact" className="btn btn--ghost">
              Let&apos;s Connect
            </a>
          </div>

          <ul className="hero__socials" aria-label="Social profiles">
            <li>
              <a href={socials.github} target="_blank" rel="noopener noreferrer" className="social-pill">
                <Icon name="github" size={18} />
                GitHub
                <span className="sr-only"> (opens in a new tab)</span>
              </a>
            </li>
            <li>
              <a href={socials.linkedin} target="_blank" rel="noopener noreferrer" className="social-pill">
                <Icon name="linkedin" size={18} />
                LinkedIn
                <span className="sr-only"> (opens in a new tab)</span>
              </a>
            </li>
          </ul>
        </div>

        <div className="hero__visual" aria-hidden="true">
          <div className="editor glass">
            <div className="editor__bar">
              <span className="editor__dots">
                <i />
                <i />
                <i />
              </span>
              <span className="editor__tab">Kajanika.java</span>
            </div>
            <pre className="editor__code">
              <code>
                {codeLines.map((line, i) => (
                  <span className="code-line" style={{ '--i': i }} key={i}>
                    <span className="code-line__num">{i + 1}</span>
                    {line.map(([type, text], j) => (
                      <span className={`tok tok--${type}`} key={j}>
                        {text}
                      </span>
                    ))}
                  </span>
                ))}
              </code>
            </pre>
          </div>

          <div className="ui-card glass">
            <div className="ui-card__head">
              <span className="ui-card__avatar">{profile.initials}</span>
              <span className="ui-card__lines">
                <i />
                <i />
              </span>
            </div>
            <span className="ui-card__toggle">
              <i />
            </span>
            <span className="ui-card__button">Hello, world</span>
          </div>
        </div>
      </div>
    </section>
  );
}
