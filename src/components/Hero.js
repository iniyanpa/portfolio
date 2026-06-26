import { useEffect, useRef } from 'react';
import { HERO_TAGS } from '../data/content';
import './Hero.css';

export default function Hero() {
  const ref = useRef(null);

  useEffect(() => {
    const items = ref.current?.querySelectorAll('[data-delay]');
    items?.forEach(el => {
      setTimeout(() => el.classList.add('visible'), Number(el.dataset.delay));
    });
  }, []);

  const scrollTo = href => document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });

  return (
    <section className="hero" id="home" ref={ref}>
      <div className="hero__orb hero__orb--1" />
      <div className="hero__orb hero__orb--2" />
      <div className="hero__layout">
        <div className="hero__content">
          <p className="hero__eyebrow fade-up" data-delay="200">✧ Enterprise Managed Services Leader ✧</p>
          <h1 className="hero__name fade-up" data-delay="360">INIYAN<br /><span>ANBARASU</span></h1>
          <p className="hero__title fade-up" data-delay="500">Services Delivery Leader ✧ Practice Lead</p>
          <p className="hero__sub fade-up" data-delay="620">Cloud Infrastructure ✧ SOC ✧ SRE ✧ VAPT ✧ FinOps ✧ Strategic Management</p>
          <div className="hero__divider fade-up" data-delay="720" />
          <div className="hero__tags fade-up" data-delay="820">
            {HERO_TAGS.map(t => <span className="hero__tag" key={t}>{t}</span>)}
          </div>
          <div className="hero__cta fade-up" data-delay="960">
            <button className="btn btn-primary" onClick={() => scrollTo('#contact')}>✧ Get In Touch</button>
            <button className="btn btn-outline" onClick={() => scrollTo('#experience')}>View Experience</button>
          </div>
        </div>
        <div className="hero__photo-wrap fade-up" data-delay="400">
          <div className="hero__ring hero__ring--outer" />
          <div className="hero__ring hero__ring--inner" />
          <img className="hero__photo" src={process.env.PUBLIC_URL + '/self.png'} alt="Iniyan Anbarasu" />
          <div className="hero__badge">
            <span className="hero__badge-name">Iniyan Anbarasu</span>
            <span className="hero__badge-role">Services Delivery Leader</span>
          </div>
        </div>
      </div>
      <div className="hero__scroll" onClick={() => scrollTo('#achievements')}>
        <span>Scroll</span>
        <div className="hero__scroll-line" />
      </div>
    </section>
  );
}
