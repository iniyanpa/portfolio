import React, { useEffect, useState } from "react";
import "./App.css";
import logo from "./assets/logo.png";
import profile from "./profile.jpg";
import logo1 from "./assets/logo1.png";
import logo2 from "./assets/logo2.png";
import logo3 from "./assets/logo3.png";
import logo4 from "./assets/logo4.png";
import logo5 from "./assets/logo5.png";
import logo6 from "./assets/logo6.png";
import cert1 from "./assets/cert1.png";
import cert2 from "./assets/cert2.png";
import cert3 from "./assets/cert3.png";
import cert4 from "./assets/cert4.png";
import cert5 from "./assets/cert5.png";
import cert6 from "./assets/cert6.png";
import cert7 from "./assets/cert7.png";
import cert8 from "./assets/cert8.png";
import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt, FaLinkedin } from "react-icons/fa";




export default function App() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="page">

      {/* HERO */}
      <header className={`hero ${scrolled ? "hero-shrink" : ""}`}>
        <div className="hero-inner">

        <div className="hero-left">
          <a href="#home" className="hero-home-link" aria-label="Go to Home">
            <img
              src={logo}
              alt="Logo"
              className="hero-logo"
            />
            <h1 className="name">INIYAN ANBARASU</h1>
          </a>
        </div>

        <nav className={`hero-nav ${scrolled ? "nav-shrink" : ""}`}>
          {!scrolled ? (
            <>
              <a href="#home">🏠 Home</a>
              <a href="#about">👨‍💻 About</a>
              <a href="#skills">⚡ Skills</a>
              <a href="#experience">💼 Experience</a>
              <a href="#certifications">🏆 Certifications</a>
              <a href="#contact">📧 Contact</a>
            </>
          ) : (
            <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
              ☰
            </div>
          )}
        </nav>

        {menuOpen && scrolled && (
          <div className="dropdown-menu">
            <a href="#home" onClick={() => setMenuOpen(false)}>Home</a>
            <a href="#about" onClick={() => setMenuOpen(false)}>About</a>
            <a href="#skills" onClick={() => setMenuOpen(false)}>Skills</a>
            <a href="#experience" onClick={() => setMenuOpen(false)}>Experience</a>
            <a href="#certifications" onClick={() => setMenuOpen(false)}>Certifications</a>
            <a href="#contact" onClick={() => setMenuOpen(false)}>Contact</a>
          </div>
        )}
  
        </div>
      </header>

      {/* HOME */}
      <section id="home" className="content home-section">
        <div className="home-layout">
          <div className="profile-ring-large">
            <img src={profile} alt="Profile" />
          </div>

          <div>
            <h1 className="home-name">INIYAN ANBARASU</h1>
            <h2 className="home-subtitle">Cloud Delivery & FinOps Leader</h2>

            <p className="home-description">
              Experienced professional with 11+ years in multi-cloud (AWS, Azure,
              GCP), DevOps, FinOps, and IT operations. Led managed services for
              30+ enterprise clients across Southeast Asia, driving automation,
              operational efficiency, cost optimisation ($1M+ savings),
              monitoring excellence, ITIL maturity, and SLA improvements.
              <br /><br />
              Strong background in incident management, large-scale monitoring
              (New Relic, Splunk), stakeholder leadership, and building resilient,
              future-ready cloud operating models.
            </p>

            <div className="home-cta">
              <a href="#contact" className="cta primary">Get In Touch</a>
              <a href="#certifications" className="cta secondary">View My Certifications</a>
            </div>
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="content about-section">
        <h2>About</h2>

        <p className="about-text">
          With over 11 years of experience in IT operations, network engineering,
          and multi-cloud service delivery, I specialise in leading large-scale
          managed services across AWS, Azure, and GCP.
          <br /><br />
          Currently serving as Delivery Manager at Cloud Kinetics Technology
          Solutions Pvt Ltd, I drive operational excellence, automation,
          incident management, and FinOps-led cost optimisation — delivering
          $1M+ in savings within a single year for 30+ enterprise clients across
          Southeast Asia.
          <br /><br />
          My expertise spans FinOps, ITIL processes, advanced monitoring with
          New Relic and Splunk, service governance, vendor coordination, and
          building high-performing delivery teams with a continuous improvement
          mindset.
        </p>

        <div className="about-metrics">
          <Metric value="11+" label="Years Experience" />
          <Metric value="30+" label="Enterprise Clients" />
          <Metric value="$1M+" label="Savings via FinOps" />
        </div>
      </section>

      {/* SKILLS */}
      <section id="skills" className="content skills-section">
        <h2>Skills</h2>

        {/* GROUP 1 */}
        <div className="skills-group-light">
          <div className="skills-grid">
            <SkillBox
              title="AWS & Cloud Services"
              skills={[
                ["SysOps Administrator (Certified)", 95],
                ["EC2, RDS, VPC, CloudFront", 90],
                ["IAM, CloudWatch, Route 53", 90],
                ["ECR, ECS, Lambda", 85],
                ["Workload Automation & Patching", 85]
              ]}
            />

            <SkillBox
              title="Multi-Cloud & IaC"
              skills={[
                ["AWS, Azure, GCP Orchestration", 95],
                ["Infrastructure Automation & Integration", 90],
                ["Terraform & Scripting", 90]
              ]}
            />

            <SkillBox
              title="Monitoring & Observability"
              skills={[
                ["New Relic (2x Verified), Splunk", 95],
                ["Incident Dashboards & Alerting", 95],
                ["Jira, Service Desk Plus", 90]
              ]}
            />
          </div>
        </div>

        {/* GROUP 2 */}
        <div className="skills-group-alt">
          <div className="skills-grid">
            <SkillBox
              title="FinOps & Optimization"
              skills={[
                ["FinOps Foundation, $1M+ Savings", 95],
                ["Cloud Waste Reduction & ROI", 90],
                ["AIOps Practices", 85]
              ]}
            />

            <SkillBox
              title="ITIL & Service Management"
              skills={[
                ["ITIL v4 Foundation (Certified)", 95],
                ["Incident / Problem / Change Mgmt", 95],
                ["RCA & Postmortems", 95],
                ["Vendor & Cross-Functional Coordination", 90],
                ["Customer Communication Plans", 90]
              ]}
            />
          </div>
        </div>

        {/* TOOLS & PLATFORMS */}
        <div className="tools-wrapper">
          <h3 className="tools-heading">Tools & Platforms</h3>

          <p className="tools-description">
            Experienced with a wide range of tools and platforms for monitoring,
            ticketing, automation, FinOps, and operational productivity.
          </p>

          <div className="tools-grid">
            {[
              "🖥️ New Relic",
              "📊 Splunk",
              "☁️ CloudWatch",
              "📈 DataDog",
              "⚡ Dynatrace",
              "🔔 Nagios",
              "🌞 SolarWinds",
              "🎫 Jira",
              "📋 Service Desk Plus",
              "💊 BMC Remedy",
              "📧 FreshDesk",
              "🔧 Terraform",
              "🚀 CI/CD Pipeline",
              "💰 Apptio Cloudability",
              "🏗️ CoreStack",
              "🔄 Arcus",
              "🌐 Plerion",
              "📄 Confluence",
              "📚 ITIL Tools"
            ].map((tool, idx) => (
              <div key={idx} className="tool-card">{tool}</div>
            ))}
          </div>
        </div>
      </section>

      <section id="experience" className="content experience-section">
        <h2 className="section-heading">Professional Experience</h2>

        <div className="timeline">

          <ExperienceCard
            side="left"
            logo={logo1}
            role="Delivery Manager, Managed Services"
            company="Cloud Kinetics Technology Solutions Pvt Ltd"
            period="July 2025 – Present"
            points={[
              "Spearheaded multi-cloud operations (AWS, Azure, GCP) for 30+ Southeast Asia clients.",
              "Institutionalized FinOps and AIOps for ROI maximization and cloud waste reduction.",
              "Partnered with leadership to build transformation roadmaps and drive account expansion.",
              "Championed governance, resource optimization, and quality assurance."
            ]}
          />

          <ExperienceCard
            side="right"
            logo={logo2}
            role="Managed Services Lead"
            company="Cloud Kinetics Technology Solutions Pvt Ltd"
            period="Dec 2023 – Jul 2025"
            points={[
              "Directed delivery for 30+ enterprise clients.",
              "Reduced manual operations by 40% via automation.",
              "Delivered $1M cloud cost savings using FinOps.",
              "Improved SLA compliance and MTTR via monitoring uplift."
            ]}
          />

          <ExperienceCard
            side="left"
            logo={logo3}
            role="IT Service Management Lead"
            company="Pay One Investment Limited, Chennai"
            period="Dec 2022 – Nov 2023"
            points={[
              "Managed secure hybrid fintech infrastructure.",
              "Implemented ITIL-based incident handling.",
              "Reduced recurring incidents by 20%.",
              "Oversaw change and audit compliance."
            ]}
          />

          <ExperienceCard
            side="right"
            logo={logo4}
            role="Senior NOC Engineer"
            company="Lebara Media Services Pvt Ltd, Chennai"
            period="Jul 2017 – Dec 2022"
            points={[
              "Maintained 99.9% uptime across telecom and cloud platforms.",
              "Resolved 500+ critical incidents.",
              "Reduced SLA violations by 12% via RCA and postmortems.",
              "Led Azure/AWS patching automation."
            ]}
          />

          <ExperienceCard
            side="left"
            logo={logo5}
            role="Design & Implementation Consultant"
            company="Altran Technologies Pvt Ltd, Bengaluru"
            period="Jun 2016 – Jun 2017"
            points={[
              "Designed scalable VoIP/SBC solutions.",
              "Reduced onboarding time by 30%.",
              "Created LLDs, supported HLDs, provided L2 support."
            ]}
          />

          <ExperienceCard
            side="right"
            logo={logo6}
            role="Network Operation Engineer"
            company="Bharti Airtel Services Ltd, Chennai"
            period="Apr 2014 – Apr 2016"
            points={[
              "Managed national and international circuit routing.",
              "Improved ASR, ACD, NER voice quality metrics.",
              "Resolved IN and numbering issues with minimal disruption."
            ]}
          />

        </div>
      </section>
      <section id="certifications" className="content certifications-section">
        <h2 className="section-heading">Certifications</h2>

        <div className="certifications-grid">

          <CertificationCard
            badge={cert1}
            name="Apptio Cloudability Technical Sales – Intermediate"
            authority="IBM"
            skillset="FinOps, Cloud Cost Governance"
            credential="6fc4fe74-f473-485a-96ba-8027b8c6d81f"
            verify="https://www.credly.com/badges/6fc4fe74-f473-485a-96ba-8027b8c6d81f/public_url"
            attained="Nov 2025"
          />

          <CertificationCard
            badge={cert2}
            name="Turbonomic Intermediate"
            authority="IBM"
            skillset="FinOps, Cloud Cost Governance"
            credential="dcf1526c-5722-4979-89ed-c7c46d01ba20"
            verify="https://www.credly.com/badges/dcf1526c-5722-4979-89ed-c7c46d01ba20/public_url"
            attained="Nov 2025"
          />

          <CertificationCard
            badge={cert3}
            name="FinOps Certified Practitioner"
            authority="FinOps Foundation"
            skillset="FinOps, Cloud Cost Governance"
            credential="0026b700-8973-4edd-ba52-df933fccc429"
            verify="https://www.credly.com/badges/0026b700-8973-4edd-ba52-df933fccc429/public_url"
            attained="Sep 2025"
          />

          <CertificationCard
            badge={cert4}
            name="New Relic Verified Foundation"
            authority="New Relic"
            skillset="New Relic, Observability"
            credential="129455571"
            verify="https://credentials.newrelic.com/143496d0-8ddf-4534-8285-bfd1d69a460e"
            attained="Jan 2025"
          />

          <CertificationCard
            badge={cert5}
            name="Introduction to FinOps"
            authority="FinOps Foundation"
            skillset="FinOps"
            credential="ahiry7z9gcpz"
            verify="http://verify.skilljar.com/c/ahiry7z9gcpz"
            attained="Dec 2024"
          />

          <CertificationCard
            badge={cert6}
            name="ITIL Foundation v4"
            authority="AXELOS"
            skillset="ITIL Processes, Service Management"
            credential="GR671272610IA"
            verify="https://candidate.peoplecert.org"
            attained="May 2021"
          />

          <CertificationCard
            badge={cert7}
            name="AWS SysOps Administrator – Associate"
            authority="Amazon Web Services"
            skillset="AWS Operations, SysOps"
            credential="42CDFB222NB4Q9K5"
            verify="https://cp.certmetrics.com/amazon/en/public/verify/credential/42CDFB222NB4Q9K5"
            attained="Aug 2018"
          />

          <CertificationCard
            badge={cert8}
            name="New Relic Certified Performance Pro"
            authority="New Relic"
            skillset="New Relic Performance"
            credential="11835292"
            verify="https://credentials.newrelic.com/a843eb03-917d-4f78-8357-09f5e8c0b004"
            attained="Aug 2018"
          />

        </div>
      </section>
      {/* CONTACT */}
      <section id="contact" className="content contact-section">

        <h2 className="contact-heading">Get In Touch</h2>
        <p className="contact-subheading">
          Reach out to discuss cloud delivery, FinOps strategies, or collaboration opportunities.
        </p>

        <div className="contact-grid">

          {/* CONTACT INFO */}
          <div className="contact-info">
            <h3>Contact Information</h3>

            <div className="contact-item">
              <FaEnvelope className="contact-icon" />
              <div>
                <strong>Email</strong>
                <p>iniyan.pa@outlook.com</p>
              </div>
            </div>

            <div className="contact-item">
              <FaPhoneAlt className="contact-icon" />
              <div>
                <strong>Phone</strong>
                <p>+91 9629097795</p>
              </div>
            </div>

            <div className="contact-item">
              <FaMapMarkerAlt className="contact-icon" />
              <div>
                <strong>Location</strong>
                <p>Chennai, Tamil Nadu, India</p>
              </div>
            </div>
          </div>

          {/* CONNECT */}
          <div className="contact-connect">
            <h3>Connect With Me</h3>

            <div className="connect-icons">
              <a
                href="https://www.linkedin.com/in/iniyan-anbarasu/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedin />
              </a>

              <a href="mailto:iniyan.pa@outlook.com">
                <FaEnvelope />
              </a>
            </div>
          </div>

        </div>
      </section>
      <hr className="footer-divider" />
      <footer className="footer">
        <h3 className="footer-name">Iniyan Anbarasu</h3>
        <p className="footer-tagline">
          Cloud SRE & FinOps Delivery Manager | Transforming Infrastructure with Innovation
        </p>
        <p className="footer-copy">
          © 2026 Iniyan Anbarasu. All rights reserved. Built with React.
        </p>
      </footer>
    </div>
  );
}

/* COMPONENTS */
function Metric({ value, label }) {
  return (
    <div className="metric">
      <div className="metric-value">{value}</div>
      <div className="metric-label">{label}</div>
    </div>
  );
}

function SkillBox({ title, skills }) {
  return (
    <div className="skill-box">
      <h3>{title}</h3>
      {skills.map(([name, value], idx) => (
        <div key={idx} className="skill-bar">
          <div className="skill-bar-header">
            <span>{name}</span>
            <span>{value}%</span>
          </div>
          <div className="skill-bar-track">
            <div className="skill-bar-fill" style={{ width: `${value}%` }} />
          </div>
        </div>
      ))}
    </div>
  );
}

function ExperienceCard({ side, logo, role, company, period, points }) {
  return (
    <div className={`timeline-item ${side}`}>
      <div className="timeline-content">
        <img src={logo} alt={company} className="experience-logo" />

        <h3 className="experience-role">{role}</h3>
        <h4 className="experience-company">{company}</h4>
        <p className="experience-period">{period}</p>

        <ul className="experience-points">
          {points.map((point, index) => (
            <li key={index}>{point}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}
function CertificationCard({
  badge,
  name,
  authority,
  skillset,
  credential,
  verify,
  attained
}) {
  return (
    <div className="certification-card">
      <img src={badge} alt={name} className="certification-badge" />

      <h3 className="certification-name">{name}</h3>
      <h4 className="certification-authority">{authority}</h4>

      <p><strong>Certification Skillset:</strong> {skillset}</p>
      <p><strong>Credentials ID:</strong> {credential}</p>
      <p><strong>Attained:</strong> {attained}</p>

      <a
        href={verify}
        target="_blank"
        rel="noopener noreferrer"
        className="verify-button"
      >
        🔗 Verify
      </a>
    </div>
  );
}
