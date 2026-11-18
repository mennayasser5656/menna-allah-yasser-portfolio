"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  ArrowDown,
  ArrowDownRight,
  ArrowRight,
  ArrowUpRight,
  Braces,
  Check,
  Code2,
  Download,
  ExternalLink,
  Github,
  Linkedin,
  Mail,
  Menu,
  Monitor,
  Palette,
  Sparkles,
  X
} from "lucide-react";

const skills = [
  { name: "Python", group: "Languages" },
  { name: "Java", group: "Languages" },
  { name: "TypeScript", group: "Languages" },
  { name: "HTML5", group: "Languages" },
  { name: "CSS3", group: "Languages" },
  { name: "React", group: "Frameworks" },
  { name: "Next.js", group: "Frameworks" },
  { name: "Bootstrap", group: "Frameworks" },
  { name: "Tailwind CSS", group: "Frameworks" },
  { name: "Figma", group: "Design" },
  { name: "Photoshop", group: "Design" },
  { name: "Illustrator", group: "Design" },
  { name: "Git & GitHub", group: "Tools" },
  { name: "GitHub Copilot", group: "AI workflow" },
  { name: "PHP", group: "Additional" }
];

const projects = [
  {
    number: "01",
    title: "Sal7ha – Car Service Management Platform",
    type: "Graduation project | Front-end development",
    description:
      "A car service platform consisting of a customer mobile application and a web-based admin dashboard for workshop owners. I developed the frontend of the admin dashboard, including booking management, inventory, payments, reports, notifications, and account settings.",
    stack: ["Next.js", "React.js", "TypeScript", "CSS", "Tailwind CSS"],
    accent: "mint",
    image: "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=1000",
    href: "https://github.com/mennayasser5656/Sal7ha-Frontend-Development"
  },
  {
    number: "02",
    title: "Weather App",
    type: "Front-end development",
    description:
      "A weather-focused web experience designed to present useful conditions and forecasts through a clear, responsive interface.",
    stack: ["React", "JavaScript", "CSS"],
    accent: "lavender",
    image: "https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?w=1000",
    href: "https://github.com/mennayasser5656/Weatherly-Weather-Dashboard-Elevvo-task"
  },
  {
    number: "03",
    title: "Agency Landing Page",
    type: "Responsive web design",
    description:
      "A polished agency-style landing page built with a focus on responsive layouts, visual hierarchy, and reusable sections.",
    stack: ["HTML", "CSS", "JavaScript"],
    accent: "peach",
    image: "https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=1000",
    href: "https://github.com/mennayasser5656/agency-landing-page-ITI-task"
  },
  {
    number: "04",
    title: "BizLand Website",
    type: "Bootstrap implementation",
    description:
      "A multi-section business website recreation, practicing responsive components, grid layouts, and consistent styling.",
    stack: ["HTML", "CSS", "Bootstrap"],
    accent: "mint",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1000",
    href: "https://github.com/mennayasser5656/bizland-landing-page-ITI-task"
  }
];

const training = [
  {
    date: "Sep 2025",
    name: "Front-End Development Intern",
    organization: "Elevvo",
    details:
      "Worked on front-end development tasks using HTML, CSS, and JavaScript, with exposure to React and Bootstrap."
  },
  {
    date: "Aug – Sep 2024",
    name: "UI/UX Intern",
    organization: "Information Technology Institute (ITI)",
    details:
      "Practiced interface design and visual tools including Figma, Photoshop, and Illustrator, alongside web fundamentals."
  },
  {
    date: "Jul – Aug 2025",
    name: "Quantum Computing Training",
    organization: "QWorld",
    details:
      "Completed QBronze and continued with QSilver and QNickel learning tracks."
  },
  {
    date: "Jun 2025",
    name: "The Green Leap",
    organization: "Commercial International Bank (CIB)",
    details:
      "Explored sustainable finance and AI concepts while developing communication and teamwork skills."
  }
];

const fadeUp = {
  hidden: { opacity: 0, y: 22 },
  visible: { opacity: 1, y: 0 }
};

export default function Portfolio() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeFilter, setActiveFilter] = useState("All");

  const filters = ["All", "Front-end", "Responsive design"];
  const visibleProjects = projects.filter((project) => {
    if (activeFilter === "All") return true;
    if (activeFilter === "Front-end") return project.type === "Front-end development";
    return project.type !== "Front-end development";
  });

  const closeMenu = () => setMenuOpen(false);

  return (
    <main>
      <div className="announcement">
        <span className="availability-dot" />
        Open to junior software development opportunities
      </div>

      <header className="site-header">
        <a className="brand" href="#home" aria-label="Menna Yasser home">
          <span className="brand-mark">MY</span>
          <span>Menna Yasser<span className="brand-period">.</span></span>
        </a>

        <button
          className="mobile-menu-button"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
        >
          {menuOpen ? <X size={21} /> : <Menu size={21} />}
        </button>

        <nav className={menuOpen ? "nav-links nav-open" : "nav-links"}>
          {[
            ["About", "#about"],
            ["Skills", "#skills"],
            ["Projects", "#projects"],
            ["Experience", "#experience"]
          ].map(([label, href]) => (
            <a key={label} href={href} onClick={closeMenu}>{label}</a>
          ))}
          <a className="nav-contact" href="#contact" onClick={closeMenu}>
            Let&apos;s talk <ArrowUpRight size={15} />
          </a>
        </nav>
      </header>

      <section className="hero section-wrap" id="home">
        <motion.div
          className="hero-copy"
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          transition={{ duration: 0.65, ease: "easeOut" }}
        >
          <div className="eyebrow"><span /> HELLO, I&apos;M MENNA</div>
          <h1>
            I build digital
            <span className="serif-line"> experiences</span>
            <br />with purpose<span className="accent-dot">.</span>
          </h1>
          <p className="hero-description">
            Junior Software Developer focused on front-end development,
            creating responsive interfaces, and turning ideas into useful
            digital experiences.
          </p>
          <div className="hero-actions">
            <a className="button button-dark" href="#projects">
              Explore my work <ArrowUpRight size={17} />
            </a>
            <a className="text-link" href="#contact">
              Get in touch <ArrowDownRight size={17} />
            </a>
          </div>
        <div className="hero-meta">
  <span>Available for opportunities</span>
</div>
        </motion.div>

        <motion.div
          className="hero-art"
          initial={{ opacity: 0, scale: 0.94, rotate: 2 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 0.8, delay: 0.15 }}
        >
          <div className="art-orbit orbit-one" />
          <div className="art-orbit orbit-two" />
          <div className="art-card">
            <div className="art-card-top">
              <span className="window-dots"><i /><i /><i /></span>
              <span>my-portfolio.tsx</span>
              <Braces size={16} />
            </div>
            <div className="code-lines">
              <p><span className="code-purple">const</span> developer = {"{"}</p>
              <p className="indent"><span className="code-blue">name</span>: <span className="code-green">&quot;Menna&quot;</span>,</p>
              <p className="indent"><span className="code-blue">focus</span>: <span className="code-green">&quot;Front-end&quot;</span>,</p>
              <p className="indent"><span className="code-blue">mindset</span>: <span className="code-green">&quot;Always learning&quot;</span>,</p>
              <p className="indent"><span className="code-blue">building</span>: <span className="code-green">&quot;What&apos;s next&quot;</span></p>
              <p>{"};"}</p>
            </div>
            <div className="art-card-footer">
              <span className="footer-status"><i /> Ready to build</span>
              <span>01 / 04</span>
            </div>
          </div>
          <div className="floating-chip chip-top"><Sparkles size={15} /> Curious by nature</div>
          <div className="floating-chip chip-bottom"><Code2 size={15} /> Code · Create · Improve</div>
          <div className="hero-stamp">CREATIVE<br />THINKING<br /><span>×</span><br />CLEAN CODE</div>
        </motion.div>
        <a className="scroll-cue" href="#about"><ArrowDown size={15} /> SCROLL TO EXPLORE</a>
      </section>

      <section className="intro-strip">
        <div className="section-wrap intro-inner">
          <span>MY APPROACH</span>
          <p>Thoughtful design. Practical code. <em>Continuous growth.</em></p>
          <span className="intro-icon"><Sparkles size={19} /></span>
        </div>
      </section>

      <section className="section-wrap content-section about-section" id="about">
        <div className="section-kicker">01 / ABOUT ME</div>
        <div className="about-grid">
          <div>
            <h2>Curious mind.<br /><span className="serif-line">Developer at heart.</span></h2>
          </div>
          <div className="about-copy">
            <p className="lead">
              I&apos;m a Software Industry and Multimedia graduate from
              Alexandria National University, interested in building
              accessible, intuitive, and responsive web experiences.
            </p>
            <p>
              I enjoy understanding how things work, solving problems, and
              bringing interfaces to life. I&apos;m continuously developing my
              skills across modern web technologies and exploring how AI
              tools can support a thoughtful development workflow.
            </p>
            <a className="inline-link" href="#contact">More about working together <ArrowUpRight size={16} /></a>
          </div>
        </div>
        <div className="education-card">
          <div className="education-icon"><Monitor size={22} /></div>
          <div>
            <span className="small-label">EDUCATION</span>
            <h3>B.Sc. in Software Industry and Multimedia</h3>
            <p>Alexandria National University · Sep 2022 – Jun 2026</p>
          </div>
          <div className="gpa">
            <span>GPA</span>
            <strong>3.29<span>/4.00</span></strong>
          </div>
        </div>
      </section>

      <section className="skills-section" id="skills">
        <div className="section-wrap content-section">
          <div className="section-kicker">02 / TOOLKIT</div>
          <div className="section-heading-row">
            <h2>Skills I bring<br /><span className="serif-line">to the table.</span></h2>
            <p>A growing toolkit for designing, developing, and refining digital products.</p>
          </div>
          <div className="skills-grid">
            {["Languages", "Frameworks", "Design", "Tools", "AI workflow", "Additional"].map((group, index) => (
              <motion.div
                className="skill-group"
                key={group}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                variants={fadeUp}
                transition={{ duration: 0.45, delay: index * 0.06 }}
              >
                <div className="skill-group-heading">
                  <span>0{index + 1}</span>
                  <h3>{group}</h3>
                </div>
                <div className="skill-tags">
                  {skills.filter((skill) => skill.group === group).map((skill) => (
                    <span key={skill.name}>{skill.name}</span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
          <div className="skills-note"><Palette size={17} /> A blend of development fundamentals and a UI-focused perspective.</div>
        </div>
      </section>

      <section className="section-wrap content-section projects-section" id="projects">
        <div className="section-kicker">03 / SELECTED WORK</div>
        <div className="section-heading-row">
          <h2>Things I&apos;ve<br /><span className="serif-line">worked on.</span></h2>
          <p>A selection of practice projects that reflect my interest in responsive interfaces and front-end development.</p>
        </div>
        <div className="project-toolbar">
          <span>FEATURED PROJECTS</span>
          <div className="filter-tabs">
            {filters.map((filter) => (
              <button
                key={filter}
                className={activeFilter === filter ? "filter-active" : ""}
                onClick={() => setActiveFilter(filter)}
              >{filter}</button>
            ))}
          </div>
        </div>
       
<div className="projects-grid">
  {visibleProjects.map((project, index) => (
    <motion.article
      className="project-card"
      key={project.number}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.15 }}
      variants={fadeUp}
      transition={{ duration: 0.5, delay: index * 0.08 }}
    >
      <div className={`project-visual ${project.accent}`}>
        <div className="visual-window">
          <div className="visual-window-bar">
            <i /><i /><i />
            <span>
              {project.title.toLowerCase().replaceAll(" ", "-")}
            </span>
          </div>

          {project.number === "01" ? (
           
<div className="web-mock">
  <div className="mock-nav">
    <b>SAL7HA.</b>
    <span>HOME　 SERVICES　 BOOKINGS　 CONTACT</span>
  </div>

  <div className="mock-hero">
    <i />
    <b>Car care, made simple.</b>
    <span />
    <span />
  </div>

  <div className="mock-cards">
    <i />
    <i />
    <i />
  </div>
</div>

          ) : project.number === "02" ? (
            <div className="weather-mock">
              <span className="weather-city">YOUR CITY</span>
              <span className="weather-sun">☼</span>
              <strong>24°</strong>
              <span>Clear skies</span>
              <div className="weather-bottom">
                <i /><i /><i /><i />
              </div>
            </div>
          ) : (
            <div className="web-mock">
              <div className="mock-nav">
                <b>
                  {project.number === "03" ? "AGENCY." : "BIZLAND"}
                </b>
                <span>HOME　 ABOUT　 SERVICES　 CONTACT</span>
              </div>

              <div className="mock-hero">
                <i />
                <b>
                  {project.number === "03"
                    ? "Ideas into impact."
                    : "Welcome to our business."}
                </b>
                <span />
                <span />
              </div>

              <div className="mock-cards">
                <i /><i /><i />
              </div>
            </div>
          )}
        </div>

        <span className="project-number">{project.number}</span>
      </div>

              <div className="project-info">
                <div className="project-type">{project.type}</div>
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className="project-bottom">
                  <div className="project-stack">{project.stack.map((item) => <span key={item}>{item}</span>)}</div>
                  <a href={project.href} target="_blank" rel="noreferrer" aria-label={`View ${project.title} on GitHub`}><ArrowUpRight size={19} /></a>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
        <div className="github-callout">
          <div><Github size={22} /><span>More experiments, practice, and code on GitHub.</span></div>
          <a href="https://github.com/mennayasser5656" target="_blank" rel="noreferrer">Visit GitHub <ExternalLink size={15} /></a>
        </div>
      </section>

      <section className="experience-section" id="experience">
        <div className="section-wrap content-section">
          <div className="section-kicker">04 / LEARNING & EXPERIENCE</div>
          <div className="section-heading-row">
            <h2>Learning by<br /><span className="serif-line">doing.</span></h2>
            <p>Training experiences that helped me build a foundation in development, design, and emerging technologies.</p>
          </div>
          <div className="timeline">
            {training.map((item, index) => (
              <motion.div
                className="timeline-item"
                key={item.name}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                variants={fadeUp}
                transition={{ duration: 0.45, delay: index * 0.07 }}
              >
                <div className="timeline-date">{item.date}</div>
                <div className="timeline-marker"><span /></div>
                <div className="timeline-content">
                  <span>{item.organization}</span>
                  <h3>{item.name}</h3>
                  <p>{item.details}</p>
                </div>
                <Check className="timeline-check" size={18} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>
<section className="contact-section" id="contact">
  <div className="section-wrap contact-inner">
    <div className="section-kicker">05 / WHAT&apos;S NEXT?</div>

    <h2>
      Let&apos;s build<br />
      <span className="serif-line">something good.</span>
    </h2>

    <p>
      I&apos;m currently looking for junior opportunities where I can
      contribute, learn from a great team, and grow as a developer.
    </p>

    <a
      className="button button-light"
      href="https://www.linkedin.com/in/menna-allah-yasser-aa3838357/"
      target="_blank"
      rel="noopener noreferrer"
    >
      Say hello <ArrowUpRight size={17} />
    </a>

    <div className="contact-footer">
      <span>© {new Date().getFullYear()} Menna Yasser</span>

      <div className="social-links">
        <a
          href="https://github.com/mennayasser5656"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub"
        >
          <Github size={18} />
        </a>

        <a
          href="https://www.linkedin.com/in/menna-allah-yasser-aa3838357/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
        >
          <Linkedin size={18} />
        </a>
      </div>

      <a className="back-top" href="#home">
        Back to top <ArrowUpRight size={15} />
      </a>
    </div>
  </div>
</section>
</main>
  );
}