import { CERTIFICATIONS } from '../data/content';
import { useScrollReveal } from '../hooks/useScrollReveal';
import './Certifications.css';

function CertCard({ cert, delay }) {
  const ref = useScrollReveal();
  return (
    <div className={`cert__card fade-up${cert.isNew ? ' cert__card--new' : ''}`} ref={ref} style={{ transitionDelay: delay + 'ms' }}>
      {cert.isNew && <div className="cert__badge">✧ New {cert.year}</div>}
      <div className="cert__name">{cert.name}</div>
      <div className="cert__issuer">{cert.issuer}</div>
      {cert.year && !cert.isNew && <div className="cert__year">✧ {cert.year}</div>}
    </div>
  );
}

export default function Certifications() {
  return (
    <section className="section certifications" id="certifications">
      <div className="section-inner">
        <div className="section-eyebrow">
          <div className="section-eyebrow-line" style={{background:'rgba(255,255,255,0.1)'}} />
          <span className="section-eyebrow-text" style={{color:'rgba(255,255,255,0.4)'}}>✧ Credentials ✧</span>
          <div className="section-eyebrow-line" style={{background:'rgba(255,255,255,0.1)'}} />
        </div>
        <h2 className="section-h2 section-h2--light">Certifications</h2>
        <div className="cert__grid">
          {CERTIFICATIONS.map((c, i) => <CertCard key={c.name} cert={c} delay={i * 70} />)}
        </div>
      </div>
    </section>
  );
}
