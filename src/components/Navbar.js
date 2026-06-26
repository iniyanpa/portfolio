import { useState, useEffect } from 'react';
import { NAV_LINKS } from '../data/content';
import './Navbar.css';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive]     = useState('');
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 40);
      const sections = document.querySelectorAll('section[id]');
      sections.forEach(s => { if (window.scrollY >= s.offsetTop - 90) setActive(s.id); });
    };
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleNav = (e, href) => {
    e.preventDefault();
    setMenuOpen(false);
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav className={`navbar${scrolled ? ' navbar--scrolled' : ''}`}>
      <a className="navbar__logo" href="#home" onClick={e => handleNav(e, '#home')}>
        INIYAN <span>ANBARASU</span>
      </a>
      <ul className={`navbar__links${menuOpen ? ' navbar__links--open' : ''}`}>
        {NAV_LINKS.map(l => (
          <li key={l.href}>
            <a href={l.href} className={active === l.href.slice(1) ? 'active' : ''}
               onClick={e => handleNav(e, l.href)}>{l.label}</a>
          </li>
        ))}
      </ul>
      <button className={`navbar__burger${menuOpen ? ' open' : ''}`}
              onClick={() => setMenuOpen(o => !o)} aria-label="Toggle menu">
        <span /><span /><span />
      </button>
    </nav>
  );
}
