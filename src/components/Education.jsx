import Icon from './Icon.jsx';
import SectionHeading from './SectionHeading.jsx';
import { education } from '../data/portfolio.js';
import './Education.css';

export default function Education() {
  return (
    <section id="education" className="section" aria-labelledby="education-title">
      <div className="container">
        <SectionHeading id="education-title" title="Education" />

        <ul className="education">
          {education.map((item) => (
            <li key={item.institution} className="edu-card glass reveal">
              <span className="edu-card__icon">
                <Icon name="graduationCap" size={30} strokeWidth={1.7} />
              </span>
              <div className="edu-card__body">
                <h3 className="edu-card__school">{item.institution}</h3>
                <p className="edu-card__degree">{item.qualification}</p>
                <p className="edu-card__meta">
                  <span>
                    <Icon name="mapPin" size={16} />
                    {item.location}
                  </span>
                  {item.period && <span>{item.period}</span>}
                </p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
