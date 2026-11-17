import Icon from './Icon.jsx';
import SectionHeading from './SectionHeading.jsx';
import { projects } from '../data/portfolio.js';
import './Projects.css';

function ProjectCard({ project }) {
  const { title, type, status, description, tags, accent, featured, confidential, image, links } = project;

  return (
    <article
      className={`project accent--${accent} ${featured ? 'project--featured' : ''} glass reveal`}
      aria-labelledby={`${project.id}-title`}
    >
      <div className="project__art" aria-hidden={!image}>
        {image ? (
          <img src={image} alt={`Screenshot of ${title}`} loading="lazy" />
        ) : (
          <span className="project__monogram" aria-hidden="true">
            {confidential ? <Icon name="lock" size={34} strokeWidth={1.6} /> : title.charAt(0)}
          </span>
        )}
      </div>

      <div className="project__body">
        <div className="project__meta">
          <span className="project__type">{type}</span>
          {status && <span className="project__status">{status}</span>}
        </div>

        <h3 id={`${project.id}-title`} className="project__title">
          {title}
        </h3>
        <p className="project__desc">{description}</p>

        <ul className="project__tags" aria-label="Technologies">
          {tags.map((tag) => (
            <li key={tag}>{tag}</li>
          ))}
        </ul>

        {links.length > 0 && (
          <div className="project__links">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn--small"
              >
                <Icon name={link.icon || 'externalLink'} size={16} />
                {link.label}
                <span className="sr-only"> for {title} (opens in a new tab)</span>
              </a>
            ))}
          </div>
        )}
      </div>
    </article>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="section" aria-labelledby="projects-title">
      <div className="container">
        <SectionHeading
          id="projects-title"
          title="Projects"
          lede="Things I've built and am building, on my own and with teams."
        />
        <div className="projects">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}
