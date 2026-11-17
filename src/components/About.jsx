import Icon from './Icon.jsx';
import SectionHeading from './SectionHeading.jsx';
import { about } from '../data/portfolio.js';
import './About.css';

export default function About() {
  const [lead, ...rest] = about.paragraphs;

  return (
    <section id="about" className="section" aria-labelledby="about-title">
      <div className="container about">
        <div className="about__text">
          <SectionHeading id="about-title" title="About me" />
          <p className="about__lead reveal">{lead}</p>
          {rest.map((p) => (
            <p className="about__para reveal" key={p.slice(0, 24)}>
              {p}
            </p>
          ))}
        </div>

        <aside className="about__facts glass reveal" aria-label="Quick facts">
          <ul>
            {about.facts.map((fact) => (
              <li key={fact.label}>
                <span className="about__fact-icon">
                  <Icon name={fact.icon} size={20} />
                </span>
                <span>
                  <span className="about__fact-label">{fact.label}</span>
                  <span className="about__fact-value">{fact.value}</span>
                </span>
              </li>
            ))}
          </ul>
        </aside>
      </div>
    </section>
  );
}
