import { SKILLS } from '../data/content';
import { useScrollReveal } from '../hooks/useScrollReveal';
import './Skills.css';

function Group({ group, delay }) {
  const ref = useScrollReveal();
  return (
    <div className="sk__group fade-up" ref={ref} style={{ transitionDelay: delay + 'ms' }}>
      <div className="sk__title"><span>✧</span> {group.title}</div>
      <div className="sk__tags">
        {group.items.map(tag => <span className="sk__tag" key={tag}>{tag}</span>)}
      </div>
    </div>
  );
}

export default function Skills() {
  return (
    <section className="section skills" id="skills">
      <div className="section-inner">
        <div className="section-eyebrow">
          <div className="section-eyebrow-line" />
          <span className="section-eyebrow-text">✧ Expertise ✧</span>
          <div className="section-eyebrow-line" />
        </div>
        <h2 className="section-h2">Skills & Competencies</h2>
        <div className="sk__grid">
          {SKILLS.map((g, i) => <Group key={g.title} group={g} delay={i * 80} />)}
        </div>
      </div>
    </section>
  );
}
