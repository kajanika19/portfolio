import './SectionHeading.css';

export default function SectionHeading({ id, title, lede, align = 'left' }) {
  return (
    <div className={`section-heading section-heading--${align} reveal`}>
      <h2 id={id} className="section-heading__title">
        {title}
      </h2>
      <span className="section-heading__spectrum" aria-hidden="true" />
      {lede && <p className="section-heading__lede">{lede}</p>}
    </div>
  );
}
