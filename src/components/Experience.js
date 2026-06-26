import { EXPERIENCE } from '../data/content';
import { useScrollReveal } from '../hooks/useScrollReveal';
import './Experience.css';

function ExpItem({ item, index }) {
  const ref = useScrollReveal(0.1);
  return (
    <div className="exp__item fade-left" ref={ref} style={{ transitionDelay: index * 60 + 'ms' }}>
      <div className="exp__dot" />
      <div className="exp__period">{item.period}</div>
      <div className="exp__title">{item.title}</div>
      <div className="exp__company"><span>{item.company}</span> ✧ {item.location}</div>
      <ul className="exp__bullets">
        {item.bullets.map((b, i) => <li key={i}>{b}</li>)}
      </ul>
    </div>
  );
}

export default function Experience() {
  return (
    <section className="section experience" id="experience">
      <div className="section-inner">
        <div className="section-eyebrow">
          <div className="section-eyebrow-line" />
          <span className="section-eyebrow-text">✧ Career Journey ✧</span>
          <div className="section-eyebrow-line" />
        </div>
        <h2 className="section-h2">Professional Experience</h2>
        <div className="exp__timeline">
          {EXPERIENCE.map((item, i) => <ExpItem key={i} item={item} index={i} />)}
        </div>
      </div>
    </section>
  );
}
