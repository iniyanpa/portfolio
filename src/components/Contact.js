import { CONTACT } from '../data/content';
import { useScrollReveal } from '../hooks/useScrollReveal';
import './Contact.css';

export default function Contact() {
  const infoRef = useScrollReveal();
  const mapRef  = useScrollReveal();
  return (
    <section className="section contact" id="contact">
      <div className="section-inner">
        <div className="section-eyebrow">
          <div className="section-eyebrow-line" style={{background:'rgba(255,255,255,0.1)'}} />
          <span className="section-eyebrow-text" style={{color:'rgba(255,255,255,0.4)'}}>✧ Get In Touch ✧</span>
          <div className="section-eyebrow-line" style={{background:'rgba(255,255,255,0.1)'}} />
        </div>
        <h2 className="section-h2 section-h2--light">Contact</h2>
        <div className="contact__layout">
          <div className="contact__info fade-left" ref={infoRef}>
            <p className="contact__intro">Open to senior leadership discussions, strategic partnerships, and enterprise transformation opportunities across Southeast Asia and beyond.</p>
            <ul className="contact__list">
              <li><span className="contact__icon">✉</span><div><div className="contact__lbl">Email</div><div className="contact__val"><a href={`mailto:${CONTACT.email}`}>{CONTACT.email}</a></div></div></li>
              <li><span className="contact__icon">☎</span><div><div className="contact__lbl">Phone</div><div className="contact__val">{CONTACT.phone}</div></div></li>
              <li><span className="contact__icon">✧</span><div><div className="contact__lbl">Portfolio</div><div className="contact__val"><a href={CONTACT.portfolio} target="_blank" rel="noreferrer">{CONTACT.portfolio.replace('https://','')}</a></div></div></li>
              <li><span className="contact__icon">in</span><div><div className="contact__lbl">LinkedIn</div><div className="contact__val"><a href={CONTACT.linkedin} target="_blank" rel="noreferrer">linkedin.com/in/iniyan-anbarasu</a></div></div></li>
            </ul>
            <div className="contact__cta">
              <a href={`mailto:${CONTACT.email}`} className="btn btn-primary">✧ Send Email</a>
              <a href={CONTACT.linkedin} target="_blank" rel="noreferrer" className="btn btn-outline">LinkedIn</a>
              <a href={CONTACT.portfolio} target="_blank" rel="noreferrer" className="btn btn-outline">Portfolio</a>
            </div>
          </div>
          <div className="contact__map fade-up" ref={mapRef}>
            <div className="contact__map-icon">◉</div>
            <div className="contact__map-city">CHENNAI</div>
            <div className="contact__map-region">Tamil Nadu, India</div>
            <div className="contact__map-note">✧ Available for SEA & Global Engagements ✧</div>
            <div className="contact__map-tag">Open to Opportunities</div>
          </div>
        </div>
      </div>
    </section>
  );
}
