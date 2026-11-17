import Icon from './Icon.jsx';
import SectionHeading from './SectionHeading.jsx';
import { skillGroups } from '../data/portfolio.js';
import './Skills.css';

export default function Skills() {
  return (
    <section id="skills" className="section" aria-labelledby="skills-title">
      <div className="container">
        <SectionHeading
          id="skills-title"
          title="Skills & tools"
          lede="The languages, frameworks and tools I work with."
        />

        <div className="skills">
          {skillGroups.map((group) => (
            <article
              key={group.id}
              className={`skill-group skill-group--${group.id} accent--${group.accent} glass reveal`}
            >
              <header className="skill-group__head">
                <span className="skill-group__icon">
                  <Icon name={group.icon} size={22} />
                </span>
                <div>
                  <h3 className="skill-group__title">{group.title}</h3>
                  <p className="skill-group__desc">{group.description}</p>
                </div>
              </header>

              <ul className="skill-group__list">
                {group.skills.map((skill) => (
                  <li key={skill.name} className={`skill ${skill.note ? 'skill--noted' : ''}`}>
                    <Icon name={skill.icon} size={18} />
                    <span className="skill__name">{skill.name}</span>
                    {skill.note && <span className="skill__note">{skill.note}</span>}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
