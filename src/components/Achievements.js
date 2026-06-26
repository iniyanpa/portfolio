import { ACHIEVEMENTS } from '../data/content';
import { useScrollReveal } from '../hooks/useScrollReveal';
import './Achievements.css';

function Card({ metric, label, delay }) {
  const ref = useScrollReveal();
  return (
    <div className="ac-card fade-up" ref={ref} style={{ transitionDelay: delay + 'ms' }}>
      <div className="ac-card__metric">{metric}</div>
      <div className="ac-card__label">{label}</div>
    </div>
  );
}

export default function Achievements() {
  return (
    <section className="section achievements" id="achievements">
      <div className="section-inner">
        <h2 className="section-h2 section-h2--light">Key Achievements</h2>
        <div className="ac-grid">
          {ACHIEVEMENTS.map((a, i) => <Card key={a.metric} {...a} delay={i * 90} />)}
        </div>
      </div>
    </section>
  );
}
