import ParticleBackground from "./components/ParticleBackground";
import { useEffect, useState } from "react";
import {
  ArrowDown,
  ArrowUpRight,
  Code2,
  Mail,
  Menu,
  X,
  ExternalLink,
  GitBranch,
  Moon,
  Sun,
} from "lucide-react";
import "./App.css";

const skills = [
  { name: "HTML5", category: "Structure" },
  { name: "CSS3", category: "Styling" },
  { name: "JavaScript", category: "Programming" },
  { name: "React.js", category: "Frontend" },
  { name: "C++", category: "Programming" },
  { name: "Python", category: "Programming" },
  { name: "Git & GitHub", category: "Tools" },
  { name: "MySQL", category: "Database" },
];



const projects = [
  {
    number: "01",
    title: "School Landing Page",
    description:
      "A responsive school website with a clean design to showcase school information, facilities, and important details.",
    technologies: ["React", "JavaScript"],
    github: "https://github.com/alokalex00/MSP-SCHOOL",
    demo: "https://mspinternationalschool.vercel.app/",
  },
  {
    number: "02",
    title: "EduManage – Student Management System",
    description:
      "A responsive web application designed to simplify student management with a clean interface and user-friendly experience.",
    technologies: ["React", "JavaScript"],
    github: "https://github.com/alokalex00/Edu-Manage",
    demo: "https://edu-manage-cyan.vercel.app/",
    
  },
  {
    number: "03",
    title: "SkyMart – Online Shopping Website",
    description:
      "A modern, responsive online shopping website with a clean UI and user-friendly shopping experience.",
    technologies: ["React", "JavaScript"],
    github: "https://github.com/alokalex00/SkyMart-Shopping",
    demo: "https://skymartshopping.vercel.app/",
  },
];


function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(true);

  const closeMenu = () => setMenuOpen(false);
  
useEffect(() => {
  const elements = document.querySelectorAll(
    "section, .project-card, .skill-card, .contact-card"
  );

  elements.forEach((element) => {
    element.classList.add("reveal");
  });

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12 }
  );

  elements.forEach((element) => observer.observe(element));

  return () => observer.disconnect();
}, []);


  return (
    <div className={`portfolio ${darkMode ? "dark" : "light"}`}>
      <ParticleBackground />
      <header className="navbar">
        <a className="logo" href="#home" onClick={closeMenu}>
          <span className="logo-mark">P</span>
          <span>Portfolio<span className="accent">.</span></span>
        </a>
        
<button
  className="theme-toggle"
  onClick={() => setDarkMode(!darkMode)}
  aria-label={darkMode ? "Switch to light mode" : "Switch to dark mode"}
  title={darkMode ? "Switch to light mode" : "Switch to dark mode"}
>
  {darkMode ? <Sun size={19} /> : <Moon size={19} />}
</button>


        <button
          className="menu-toggle"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle navigation"
        >
          {menuOpen ? <X size={23} /> : <Menu size={23} />}
        </button>

        <nav className={menuOpen ? "nav-links open" : "nav-links"}>
          {[
            ["Home", "#home"],
            ["About", "#about"],
            ["Skills", "#skills"],
            ["Projects", "#projects"],
            ["Education", "#education"],
            ["Contact", "#contact"],
          ].map(([label, href]) => (
            <a key={label} href={href} onClick={closeMenu}>
              {label}
            </a>
          ))}
          <a className="nav-cta" href="#contact" onClick={closeMenu}>
            Let's Talk <ArrowUpRight size={16} />
          </a>
          
<a
  href="/Resume.pdf"
  target="_blank"
  rel="noopener noreferrer"
  className="resume-link"
>
  Resume <ArrowUpRight size={16} />
</a>

        </nav>
      </header>

      <main>
        <section className="hero section" id="home">
          <div className="hero-content">
            
<div className="profile-photo">
  <span className="profile-initials">YN</span>
  <img
    src="/profile.jpg"
    alt="Alok Kumar"
    onError={(event) => {
      event.currentTarget.style.display = "none";
    }}
  />
</div>

            <div className="availability">
              <span className="status-dot" />
              Frontend Developer in Progress
            </div>

            <p className="eyebrow">HELLO, I'M</p>
            <h1>
              ALOK KUMAR<span className="accent">.</span>
              <br />
              I build <span className="gradient-text">for the web.</span>
            </h1>

            <p className="hero-description">
              I'm a CSE Data Science student and aspiring frontend developer
              who enjoys building clean, responsive and user-friendly
              websites with modern web technologies.
            </p>

            <div className="hero-actions">
              <a href="#projects" className="button button-primary">
                Explore My Work <ArrowUpRight size={18} />
              </a>
              <a href="#contact" className="button button-secondary">
                Contact Me <Mail size={18} />
              </a>
            </div>

            <div className="hero-socials">
              <span>CONNECT WITH ME</span>
              <a href="https://github.com/alokalex00/" target="_blank" rel="noreferrer" aria-label="GitHub">
                <GitBranch size={19} />
              </a>
              <a href="https://www.linkedin.com/in/alok-kumar-35070334a/" target="_blank" rel="noreferrer" aria-label="LinkedIn">
                <ExternalLink size={19} />
              </a>
              <a href="mailto:alokalex8292@gmail.com" aria-label="Email">
                <Mail size={19} />
              </a>
            </div>
          </div>

          <div className="hero-visual">
            <div className="visual-glow" />
            <div className="code-card">
              <div className="code-card-top">
                <div className="window-dots">
                  <span />
                  <span />
                  <span />
                </div>
                <span>developer.js</span>
              </div>
              <div className="code-content">
                <p><span className="code-muted">01</span> <span className="code-purple">const</span> developer = {"{"}</p>
                <p><span className="code-muted">02</span> &nbsp; name: <span className="code-green">"Alok Kumar"</span>,</p>
                <p><span className="code-muted">03</span> &nbsp; role: <span className="code-green">"Frontend Developer"</span>,</p>
                <p><span className="code-muted">04</span> &nbsp; skills: [</p>
                <p><span className="code-muted">05</span> &nbsp; &nbsp; <span className="code-orange">"React"</span>,</p>
                <p><span className="code-muted">06</span> &nbsp; &nbsp; <span className="code-orange">"JavaScript"</span></p>
                <p><span className="code-muted">07</span> &nbsp; ],</p>
                <p><span className="code-muted">08</span> &nbsp; passion: <span className="code-green">"Building things"</span></p>
                <p><span className="code-muted">09</span> {"}"};</p>
                <p className="code-cursor"><span className="code-muted">10</span> <span className="code-purple">console</span>.log(developer);<span className="cursor">|</span></p>
              </div>
              <div className="code-card-footer">
                <span><span className="status-dot" /> Available to learn & build</span>
                <Code2 size={17} />
              </div>
            </div>

            <div className="floating-chip chip-top">
              <span className="chip-icon">{"</>"}</span>
              <div><strong>Clean Code</strong><small>Built with care</small></div>
            </div>

            <div className="floating-chip chip-bottom">
              <span className="chip-icon chip-react">⚛</span>
              <div><strong>React.js</strong><small>Frontend development</small></div>
            </div>

            <div className="visual-caption">TURNING IDEAS INTO INTERFACES</div>
          </div>

          <a href="#about" className="scroll-indicator">
            <ArrowDown size={16} /> Scroll to explore
          </a>
        </section>

        <section className="section about-section" id="about">
          <div className="section-heading">
            <p className="eyebrow">A LITTLE ABOUT ME</p>
            <h2>Building my skills, <span className="gradient-text">one project at a time.</span></h2>
          </div>

          <div className="about-grid">
            <div className="about-card about-intro">
              <span className="card-icon"><Code2 size={24} /></span>
              <h3>Who am I?</h3>
              <p>
                I'm a Computer Science student specializing in Data Science
                at RGPV. I'm interested in frontend development and enjoy
                turning ideas into simple, attractive and useful web
                experiences.
              </p>
              <p>
                I'm continuously improving my skills by learning, practising
                and building projects.
              </p>
            </div>

            <div className="about-card highlight-card">
              <span className="highlight-number">01</span>
              <h3>My Focus</h3>
              <p>Responsive layouts, clean UI, reusable components and smooth user experiences.</p>
            </div>

            <div className="about-card highlight-card">
              <span className="highlight-number">02</span>
              <h3>My Approach</h3>
              <p>Learn the fundamentals, write understandable code and improve with every project.</p>
            </div>
          </div>
        </section>

        <section className="section" id="skills">
          <div className="section-heading">
            <p className="eyebrow">WHAT I WORK WITH</p>
            <h2>My <span className="gradient-text">Technical Skills</span></h2>
            <p className="section-subtitle">Technologies and tools I'm learning and using in my development journey.</p>
          </div>

          <div className="skills-grid">
            {skills.map((skill, index) => (
              <div className="skill-card" key={skill.name}>
                <span className="skill-index">{String(index + 1).padStart(2, "0")}</span>
                <Code2 size={23} />
                <h3>{skill.name}</h3>
                <p>{skill.category}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="section projects-section" id="projects">
          <div className="section-heading">
            <p className="eyebrow">SELECTED WORK</p>
            <h2>Projects I'm <span className="gradient-text">Building</span></h2>
            <p className="section-subtitle">A few projects that showcase my learning and practical skills.</p>
          </div>

          <div className="projects-grid">
            
{projects.map((project) => (
  <article className="project-card" key={project.number}>
    <div className="project-top">
      <span className="project-number">{project.number}</span>
      <Code2 size={25} />
    </div>

    <div className="project-preview">
      <div className="preview-window">
        <span />
        <span />
        <span />
      </div>
      <div className="preview-lines">
        <i /><i /><i /><i />
      </div>
      <div className="preview-brackets">{"{ }"}</div>
    </div>

    <h3>{project.title}</h3>
    <p className="project-description">{project.description}</p>

    <div className="tech-tags">
      
{(project.technologies || []).map((tech) => (
  <span key={tech}>{tech}</span>
))}

    </div>

    <div className="project-links">
      <a
        href={project.github}
        target="_blank"
        rel="noopener noreferrer"
      >
        <GitBranch size={17} /> GitHub <ArrowUpRight size={15} />
      </a>

      <a
        href={project.demo && project.demo !== "#" ? project.demo : undefined}
        target={project.demo && project.demo !== "#" ? "_blank" : undefined}
        rel="noopener noreferrer"
        className={project.demo && project.demo !== "#" ? "" : "demo-disabled"}
        onClick={(event) => {
          if (!project.demo || project.demo === "#") {
            event.preventDefault();
          }
        }}
      >
        Live Demo <ExternalLink size={15} />
      </a>
    </div>
  </article>
))}

          </div>
        </section>

        <section className="section education-section" id="education">
          <div className="section-heading">
            <p className="eyebrow">MY LEARNING JOURNEY</p>
            <h2>Education & <span className="gradient-text">Growth</span></h2>
          </div>

          <div className="timeline">
            <div className="timeline-item">
              <div className="timeline-dot" />
              <div className="timeline-content">
                <span className="timeline-label">CURRENTLY PURSUING</span>
                <h3>B.Tech — Computer Science & Engineering</h3>
                <p>Data Science Specialization · RGPV</p>
                <span className="timeline-date">5th Semester</span>
              </div>
            </div>
            <div className="timeline-item">
              <div className="timeline-dot" />
              <div className="timeline-content">
                <span className="timeline-label">CONTINUOUS LEARNING</span>
                <h3>Frontend Development</h3>
                <p>HTML, CSS, JavaScript, React.js, Git and GitHub</p>
                <span className="timeline-date">Learning by building projects</span>
              </div>
            </div>
          </div>
        </section>

        <section className="section contact-section" id="contact">
          <div className="contact-card">
            <p className="eyebrow">HAVE A PROJECT IN MIND?</p>
            <h2>Let's build something <span className="gradient-text">great together.</span></h2>
            <p>
              I'm always interested in learning, collaborating and exploring
              opportunities in frontend development.
            </p>
            <a className="button button-primary" href="mailto:alokalex8292@gmail.com">
              <Mail size={18} /> Say Hello <ArrowUpRight size={18} />
            </a>
            <div className="contact-links">
              <a href="https://github.com/" target="_blank" rel="noreferrer">
                <GitBranch size={18} /> GitHub
              </a>
              <a href="https://www.linkedin.com/" target="_blank" rel="noreferrer">
                <ExternalLink size={18} /> LinkedIn
              </a>
              <a href="mailto:alokalex8292@gmail.com">
                <Mail size={18} /> Email
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer className="footer">
        <a className="logo" href="#home">
          <span className="logo-mark">P</span>
          <span>Portfolio<span className="accent">.</span></span>
        </a>
        <p>Designed & built with React. Keep learning, keep building.</p>
        <a href="#home" className="back-to-top">Back to top ↑</a>
      </footer>
    </div>
  );
}

export default App;
