import { EDUCATION } from '../data/content';
import { useScrollReveal } from '../hooks/useScrollReveal';
import './Education.css';

function EduCard({ edu, delay }) {
  const ref = useScrollReveal();
  return (
    <div className="edu__card fade-up" ref={ref} style={{ transitionDelay: delay + 'ms' }}>
      <div className="edu__year">{edu.year}</div>
      <div className="edu__degree">{edu.degree}</div>
      <div className="edu__field">{edu.field}</div>
      <div className="edu__school">{edu.school}</div>
    </div>
  );
}

export default function Education() {
  return (
    <section className="section education" id="education">
      <div className="section-inner">
        <div className="section-eyebrow">
          <div className="section-eyebrow-line" />
          <span className="section-eyebrow-text">✧ Academic Background ✧</span>
          <div className="section-eyebrow-line" />
        </div>
        <h2 className="section-h2">Education</h2>
        <div className="edu__grid">
          {EDUCATION.map((e, i) => <EduCard key={e.degree} edu={e} delay={i * 100} />)}
        </div>
      </div>
    </section>
  );
}
