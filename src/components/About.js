import { ABOUT_STATS, ABOUT_FOCUS } from '../data/content';
import { useScrollReveal } from '../hooks/useScrollReveal';
import './About.css';

export default function About() {
  const textRef  = useScrollReveal();
  const statsRef = useScrollReveal();
  return (
    <section className="section about" id="about">
      <div className="section-inner">
        <div className="section-eyebrow">
          <div className="section-eyebrow-line" />
          <span className="section-eyebrow-text">✧ About Me ✧</span>
          <div className="section-eyebrow-line" />
        </div>
        <h2 className="section-h2">Professional Summary</h2>
        <div className="about__grid">
          <div className="about__text fade-left" ref={textRef}>
            <p>Technology, Cloud, and Managed Services Leader with <strong>12+ years</strong> of experience leading enterprise-scale digital transformation, cloud operations, cybersecurity services, and managed service delivery across Southeast Asia.</p>
            <p>Currently leading Managed Services Operations at Cloud Kinetics, overseeing Multi-Cloud Infrastructure, SOC, VAPT, SRE, service governance, and delivery transformation for <strong>30+ enterprise customers</strong> across Banking, Financial Services, Healthcare, Manufacturing, Retail, and OTT sectors.</p>
            <p>Demonstrated success in transforming underperforming engagements into profitable, customer-centric operations by optimizing service delivery models, strengthening governance frameworks, and enhancing operational efficiency.</p>
            <div className="about__callout">
              <p>Combines strong technology leadership with <strong>business strategy, investment evaluation, and organizational growth</strong> expertise. Recognized for aligning technology investments with business objectives and driving sustainable growth through innovation and customer-focused transformation.</p>
            </div>
          </div>
          <div className="about__side fade-up" ref={statsRef}>
            <div className="about__stats">
              {ABOUT_STATS.map(s => (
                <div className="about__stat" key={s.num}>
                  <div className="about__stat-num">{s.num}</div>
                  <div className="about__stat-lbl">{s.label}</div>
                </div>
              ))}
            </div>
            <div className="about__focus">
              <div className="about__focus-title">Core Focus Areas</div>
              <div className="about__focus-tags">
                {ABOUT_FOCUS.map(f => <span className="about__focus-tag" key={f}>{f}</span>)}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
