import Navbar         from './components/Navbar';
import Hero           from './components/Hero';
import Achievements   from './components/Achievements';
import About          from './components/About';
import Experience     from './components/Experience';
import Skills         from './components/Skills';
import Certifications from './components/Certifications';
import Education      from './components/Education';
import Contact        from './components/Contact';
import Footer         from './components/Footer';

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Achievements />
        <About />
        <Experience />
        <Skills />
        <Certifications />
        <Education />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

export default App;
