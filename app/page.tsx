"use client";
 
import Image from "next/image";
import {
  ArrowDown,
  ArrowUpRight,
  Braces,
  Check,
  Code2,
  Database,
  Github,
  Linkedin,
  Mail,
  Menu,
  Send,
  Sparkles,
  Terminal,
  Wrench,
  X,
  Zap,
} from "lucide-react";
import { motion, useMotionValue, useScroll, useSpring, useTransform } from "framer-motion";

import { FormEvent, MouseEvent, useEffect, useState } from "react";

const nav = ["Home", "About", "Skills", "Projects", "Experience", "Contact"];

const traits = [
  { number: "01", label: "Foundation", title: "BCA Student", text: "Grounded in computer science fundamentals." },
  { number: "02", label: "Development", title: "Web Developer", text: "Polished interfaces, engineered end to end." },
  { number: "03", label: "Backend", title: "Python Developer", text: "Clean systems, APIs, and automation." },
  { number: "04", label: "AI", title: "AI Enthusiast", text: "Useful intelligence built into real products." },
];

const skillGroups = [
  { icon: Code2, title: "Frontend", skills: ["HTML", "CSS", "JavaScript"] },
  { icon: Braces, title: "Backend", skills: ["Python", "FastAPI", "REST APIs", "AI Integration","JWT / Authentication"] },
  { icon: Database, title: "Database", skills: ["MongoDB", "SQL"] },
  { icon: Wrench, title: "Tools", skills: ["Git", "GitHub", "VS Code", "Swagger"] },
];

const projects = [
  {
    index: "01",

    title: "Alpha AI Assistant",

    label: "AI CONVERSATIONAL ASSISTANT",

    description: "A context-aware AI assistant powered by Gemini, featuring conversation memory and real-time information retrieval for intelligent everyday interactions.",

    stack: ["Python", "FastAPI", "Gemini AI","Tavily", "HTML/CSS/JS"],

    art: "alpha",

    link: "https://gemini-ai-assistant-emk6.onrender.com/",

    github_link:"https://github.com/132895/gemini-ai-assistant"
  },

  {
    index: "02",
    title: "Jully",
    label: "VOICE ASSISTANT",
    description: "A voice-powered personal assistant that understands spoken commands, provides real-time information, sets reminders, and responds naturally using speech.",
    stack: ["Python", "FastAPI", "HTML/CSS/JS"],
   art: "assistant",
  },
 {
    index: "03",

    title: "Coming Soon... ",

    label: "DATA ANALYSIS & VISUALIZATION",

    description: "A Python-powered data analysis tool that processes datasets, generates insightful visualizations, and reveals meaningful patterns through interactive analytics.",

    stack: ["Python", "Pandas", "Matplotlib", "Streamlit"],

    art: "data",
},
  // {
  //   index: "04",
  //   title: "QR Restaurant Menu",
  //   label: "HOSPITALITY SYSTEM",
  //   description: "A frictionless digital menu platform with instant QR access, live updates, and a clean guest experience.",
  //   stack: ["React", "Python", "FastAPI"],
  //   art: "menu",
  // },
];

const journey = [
  { year: "FOUNDATION", title: "BCA & Computer Science", text: "Building strong fundamentals in programming, web development, and problem solving." },
  { year: "DEVELOPMENT", title: "Web Development", text: "Turning concepts into responsive interfaces and complete web applications." },
  { year: "PYTHON", title: "Python Development", text: "Building APIs, automation tools, backend systems, and data-driven applications." },
  { year: "AI & DATA", title: "AI + Data Projects", text: "Working with AI assistants, data analysis, visualization, and practical intelligent tools." },
  { year: "NEXT", title: "Building What's Next", text: "Continuously improving, building real projects, and preparing for professional opportunities." },
];

const reveal = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.75, ease: [0.22, 1, 0.36, 1] as const } },
};

function Logo() {
  return (
    <a href="#home" className="logo" aria-label="Baljinder Singh home">
      <span>B</span>
      <i />
      <span>S</span>
    </a>
  );
}

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

    const scrollToSection = (id: string) => {
    const section = document.getElementById(id);

    if (section) {
      section.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }

    setOpen(false);
  };

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`nav-shell ${scrolled ? "is-scrolled" : ""}`}>
      <nav className="nav container">
        <Logo />
        <div className={`nav-links ${open ? "open" : ""}`}>
          {nav.map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              onClick={(e) => {
                e.preventDefault();
                scrollToSection(item.toLowerCase());
              }}
            >
              {item}
            </a>
          ))}
        </div>
        {/* <a
          href="/resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="button button-small"
        >
          Download Resume <ArrowDown size={15} />
        </a> */}
        <a
          className="button button-small nav-cta"
          href="#contact"
          onClick={(e) => {
            e.preventDefault();
            scrollToSection("contact");
          }}
        >
          Hire me <ArrowUpRight size={15} />
        </a>
        <button className="menu-button" onClick={() => setOpen(!open)} aria-label="Toggle navigation">
          {open ? <X /> : <Menu />}
        </button>
      </nav>
    </header>
  );
}

function SectionLabel({ children, number }: { children: React.ReactNode; number: string }) {
  return (
    <div className="section-label">
      <span>{number}</span>
      <i />
      {children}
    </div>
  );
}

function HeroVisual() {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const smoothX = useSpring(x, { stiffness: 70, damping: 20 });
  const smoothY = useSpring(y, { stiffness: 70, damping: 20 });

  function move(e: MouseEvent<HTMLDivElement>) {
    const rect = e.currentTarget.getBoundingClientRect();
    x.set((e.clientX - rect.left - rect.width / 2) / 26);
    y.set((e.clientY - rect.top - rect.height / 2) / 26);
  }

  return (
    <motion.div
      className="hero-visual"
      onMouseMove={move}
      onMouseLeave={() => { x.set(0); y.set(0); }}
      style={{ x: smoothX, y: smoothY }}
    >
      <div className="hero-orbit orbit-one" />
      <div className="hero-orbit orbit-two" />
      <div className="image-frame">
        <Image
          src="/developer-workspace.png"
          alt="Original cinematic neon developer workspace"
          fill
          priority
          sizes="(max-width: 900px) 100vw, 55vw"
        />
        <div className="image-shade" />
      </div>
      <motion.div className="floating-chip chip-top" animate={{ y: [0, -8, 0] }} transition={{ repeat: Infinity, duration: 4 }}>
        <span className="live-dot" /> AVAILABLE FOR WORK
      </motion.div>
      <motion.div className="floating-chip chip-bottom" animate={{ y: [0, 8, 0] }} transition={{ repeat: Infinity, duration: 5 }}>
        <Terminal size={17} /> CRAFTED WITH CODE
      </motion.div>
    </motion.div>
  );
}

function ProjectArt({ type }: { type: string }) {
  return (
    <div className={`project-art ${type}`}>
      <div className="art-grid" />
      {type === "alpha" && (
        <div className="orbital-ai"><span /><span /><span /><div><Sparkles size={34} /></div></div>
      )}
 
      {/* JULLY — VOICE ASSISTANT */}
      {type === "assistant" && (
        <div
          style={{
            width: "78%",
            maxWidth: "520px",
            position: "relative",
            zIndex: 2,
            padding: "28px",
            border: "1px solid rgba(255,255,255,.12)",
            background: "rgba(10,9,20,.72)",
            boxShadow: "0 30px 70px rgba(0,0,0,.4)",
          }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              marginBottom: "30px",
              fontSize: "10px",
              letterSpacing: ".18em",
              color: "rgba(255,255,255,.55)",
            }}
          >
            <span>JULLY / VOICE ASSISTANT</span>

            <span style={{ color: "#ff2d6f" }}>
              ● ONLINE
            </span>
          </div>

          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "28px",
            }}
          >
            <div
              style={{
                width: "86px",
                height: "86px",
                flexShrink: 0,
                borderRadius: "50%",
                display: "grid",
                placeItems: "center",
                background:
                  "linear-gradient(135deg, #ff2d6f, #8b5cf6)",
                boxShadow:
                  "0 0 35px rgba(255,45,111,.45)",
                fontSize: "34px",
              }}
            >
              🎙
            </div>

            <div style={{ flex: 1 }}>
              <div
                style={{
                  fontSize: "11px",
                  letterSpacing: ".2em",
                  color: "rgba(255,255,255,.55)",
                  marginBottom: "15px",
                }}
              >
                LISTENING
              </div>

              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "5px",
                  height: "55px",
                }}
              >
                {[20, 38, 58, 32, 70, 45, 82, 40, 62, 30, 50].map(
                  (height, i) => (
                    <span
                      key={i}
                      style={{
                        width: "5px",
                        height: `${height}%`,
                        borderRadius: "8px",
                        background:
                          "linear-gradient(to top, #ff2d6f, #8b5cf6)",
                        boxShadow:
                          "0 0 10px rgba(255,45,111,.25)",
                      }}
                    />
                  )
                )}
              </div>
            </div>
          </div>

          <div
            style={{
              marginTop: "25px",
              paddingTop: "18px",
              borderTop: "1px solid rgba(255,255,255,.08)",
              fontSize: "10px",
              color: "rgba(255,255,255,.4)",
              letterSpacing: ".12em",
            }}
          >
            SAY SOMETHING TO JULLY...
          </div>
        </div>
      )}

      {/* DATA ANALYZER */}
      {type === "data" && (
        <div
          style={{
            width: "78%",
            maxWidth: "540px",
            position: "relative",
            zIndex: 2,
            padding: "25px",
            border: "1px solid rgba(255,255,255,.12)",
            background: "rgba(10,9,20,.75)",
            boxShadow: "0 30px 70px rgba(0,0,0,.4)",
          }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              marginBottom: "22px",
            }}
          >
            <div
              style={{
                fontSize: "11px",
                letterSpacing: ".18em",
                color: "rgba(255,255,255,.7)",
              }}
            >
              DATA ANALYTICS
            </div>

            <div
              style={{
                fontSize: "9px",
                letterSpacing: ".12em",
                color: "#ff2d6f",
                border: "1px solid rgba(255,45,111,.4)",
                padding: "5px 8px",
              }}
            >
              LIVE
            </div>
          </div>

          {/* CHART */}
          <div
            style={{
              height: "180px",
              display: "flex",
              alignItems: "flex-end",
              gap: "14px",
              padding: "15px 10px",
              borderBottom:
                "1px solid rgba(255,255,255,.08)",
              background:
                "repeating-linear-gradient(to top, transparent 0, transparent 43px, rgba(255,255,255,.045) 44px)",
            }}
          >
            {[38, 55, 46, 72, 63, 88, 76].map(
              (height, i) => (
                <div
                  key={i}
                  style={{
                    flex: 1,
                    maxWidth: "42px",
                    height: `${height}%`,
                    background:
                      "linear-gradient(to top, #ff2d6f, #8b5cf6)",
                    boxShadow:
                      "0 0 20px rgba(255,45,111,.2)",
                  }}
                />
              )
            )}
          </div>

          {/* STATS */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(3, 1fr)",
              gap: "15px",
              marginTop: "22px",
            }}
          >
            {[
              ["84%", "ACCURACY"],
              ["12.8K", "RECORDS"],
              ["+24%", "GROWTH"],
            ].map(([value, label]) => (
              <div key={label}>
                <div
                  style={{
                    fontSize: "20px",
                    fontWeight: 700,
                    marginBottom: "5px",
                  }}
                >
                  {value}
                </div>

                <div
                  style={{
                    fontSize: "8px",
                    letterSpacing: ".12em",
                    color: "rgba(255,255,255,.4)",
                  }}
                >
                  {label}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {type === "menu" && (
        <div className="phone-ui"><div className="phone-top" /><div className="dish" /><i /><i /><i /><button>EXPLORE MENU</button></div>
      )}
    </div>
  );
}

function App() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });
  const heroY = useTransform(scrollYProgress, [0, 0.2], [0, 120]);
  const [sent, setSent] = useState(false);

  async function submit(e: FormEvent<HTMLFormElement>) {
  e.preventDefault();

  const form = e.currentTarget;
  const formData = new FormData(form);

  formData.append(
    "access_key",
    process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY || ""
  );

  formData.append("subject", "New Portfolio Contact Message");

  try {
    const response = await fetch(
      "https://api.web3forms.com/submit",
      {
        method: "POST",
        body: formData,
      }
    );

    const result = await response.json();

    if (result.success) {
      setSent(true);
      form.reset();

      setTimeout(() => {
        setSent(false);
      }, 4000);
    } else {
      alert(result.message || "Something went wrong.");
    }
  } catch (error) {
    console.error(error);
    alert("Failed to send message.");
  }
}

  return (
    <main>
      <motion.div className="scroll-progress" style={{ scaleX }} />
      <Navbar />

      <section className="hero" id="home">
        <div className="ambient hero-ambient" />
        <div className="hero-grid" />
        <div className="container hero-inner">
          <motion.div className="hero-copy" initial="hidden" animate="visible" variants={{ visible: { transition: { staggerChildren: 0.12 } } }}>
            <motion.div variants={reveal} className="eyebrow"><span /> HELLO, I&apos;M A DIGITAL CRAFTSMAN</motion.div>
            <motion.h1 variants={reveal}>
              <span>BALJINDER</span>
              <span className="outline-word">SINGH</span>
            </motion.h1>
            <motion.div variants={reveal} className="role-line">
              <i />
              <strong>PYTHON & AI DEVELOPER</strong>
            </motion.div>
            <motion.p variants={reveal}>Building practical web applications, intelligent AI solutions, and reliable backend systems with Python and modern web technologies.</motion.p>
            <motion.div variants={reveal} className="hero-actions">
              <a href="#projects" className="button">View projects <ArrowDown size={17} /></a>
              <a href="#contact" className="text-link">Contact me <ArrowUpRight size={16} /></a>
            </motion.div>
          </motion.div>
          <motion.div style={{ y: heroY }} className="hero-visual-wrap">
            <HeroVisual />
          </motion.div>
        </div>
        <a href="#about" className="scroll-cue"><span>SCROLL TO EXPLORE</span><div><ArrowDown size={16} /></div></a>
      </section>

      <section className="section about" id="about">
        <div className="ambient about-ambient" />
        <div className="container">
          <motion.div className="section-heading" initial="hidden" whileInView="visible" viewport={{ once: true, amount: .3 }} variants={reveal}>
            <SectionLabel number="01">ABOUT</SectionLabel>
            <h2>WHO I <span>AM</span></h2>
          </motion.div>
          <div className="about-layout">
            <motion.div className="about-statement" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={reveal}>
              <p className="lead">
                I build <em>practical technology</em> that solves real problems and creates meaningful user experiences.
              </p>
                  <p>
                    I&apos;m a BCA student and Python developer focused on backend development,
                    web applications, and AI-powered solutions. I enjoy turning ideas into
                    functional products using Python, FastAPI and modern
                    development tools.
                  </p>
              <div className="signature">
                Baljinder Singh <span>/ Python & AI Developer</span>
              </div>
            </motion.div>
            <div className="trait-stack">
              {traits.map((trait, index) => (
                <motion.article
                  className="trait-card"
                  key={trait.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * .1, duration: .6 }}
                >
                  <div className="trait-label">
                    <span>{trait.number}</span>
                    <i />
                    {trait.label}
                  </div>
                  <h3>{trait.title}</h3>
                  <p>{trait.text}</p>
                  <ArrowUpRight size={18} />
                </motion.article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section skills" id="skills">
        <div className="container">
          <motion.div className="section-heading row-heading" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={reveal}>
            <div><SectionLabel number="02">CAPABILITIES</SectionLabel><h2>TECH <span>STACK</span></h2></div>
            <p>Tools are only as good as the thinking behind them. These are the ones I use to turn ambitious ideas into fast, scalable products.</p>
          </motion.div>
          <div className="skills-grid">
            {skillGroups.map((group, index) => (
              <motion.article
                className="skill-card"
                key={group.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * .1, duration: .65 }}
              >
                <div className="skill-icon"><group.icon size={23} /></div>
                <span className="skill-index">0{index + 1}</span>
                <h3>{group.title}</h3>
                <div className="skill-list">
                  {group.skills.map((skill) => <span key={skill}><Check size={13} /> {skill}</span>)}
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <section className="section projects" id="projects">
        <div className="ambient projects-ambient" />
        <div className="container">
          <motion.div className="section-heading row-heading" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={reveal}>
            <div><SectionLabel number="03">SELECTED WORK</SectionLabel><h2>PROJECT <span>ARCHIVE</span></h2></div>
            <p>Experiments in utility, intelligence, and interaction—designed to solve something real.</p>
          </motion.div>
          <div className="project-list">
            {projects.map((project, index) => (
              <motion.article
                className="project-card"
                key={project.title}
                initial={{ opacity: 0, y: 70 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: .18 }}
                transition={{ duration: .8 }}
              >
                <div className="project-copy">
                  <div className="project-meta"><span>{project.index}</span><i />{project.label}</div>
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                  <div className="badges">{project.stack.map((tag) => <span key={tag}>{tag}</span>)}</div>
                  <div className="project-actions">
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="button button-small"
                    >
                      View project <ArrowUpRight size={15} />
                    </a>
                    <a
                      href={project.github_link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="icon-button"
                      aria-label={`${project.title} on GitHub`}
                    >
                      <Github size={19} />
                    </a>
                  </div>
                </div>
                <motion.div className="project-visual" whileHover={{ scale: 1.015 }} transition={{ duration: .4 }}>
                  <ProjectArt type={project.art} />
                  <div className="project-number">{project.index}</div>
                </motion.div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <section className="section journey" id="experience">
        <div className="container journey-layout">
          <motion.div className="section-heading journey-title" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={reveal}>
            <SectionLabel number="04">THE JOURNEY</SectionLabel>
            <h2>FROM LEARNING<br /><span>TO BUILDING</span></h2>
            <p>A practical journey from learning
              computer science to building real
              software, AI tools, and data-driven
              projects.
            </p>
          </motion.div>
          <div className="timeline">
            {journey.map((item, index) => (
              <motion.article
                key={item.title}
                className="timeline-item"
                initial={{ opacity: 0, x: 35 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: .5 }}
                transition={{ duration: .6, delay: index * .08 }}
              >
                <div className="timeline-dot"><span /></div>
                <span className="timeline-year">{item.year}</span>
                <div><h3>{item.title}</h3><p>{item.text}</p></div>
                <span className="timeline-index">0{index + 1}</span>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <section className="section contact" id="contact">
        <div className="contact-glow" />
        <div className="container">
          <motion.div className="contact-head" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={reveal}>
            <SectionLabel number="05">START A CONVERSATION</SectionLabel>
            <h2>LET&apos;S BUILD<br />SOMETHING <span>AMAZING.</span></h2>
            <p>Have an idea, an opportunity, or just want to talk tech? My inbox is open.</p>
            <div className="social-row">
              <a
                href="https://mail.google.com/mail/?view=cm&fs=1&to=baljindergoldy1105@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Mail size={18} /> Email me
              </a>

              <a
                href="https://www.linkedin.com/in/baljinder-singh-261664310"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Linkedin size={18} /> LinkedIn
              </a>

              <a
                href="https://github.com/132895"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Github size={18} /> GitHub
              </a>
            </div>
          </motion.div>
          <motion.form className="contact-form" onSubmit={submit} initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: .8 }}>
            <div className="form-top"><span>DROP A MESSAGE</span><Sparkles size={18} /></div>
            <label>Your name<input name="name" required type="text" placeholder="John Doe" /></label>
            <label>Email address<input name="email" required type="email" placeholder="john@company.com" /></label>
            <label>Tell me about your idea<textarea name="message" required rows={4} placeholder="Let's create something memorable..." /></label>
            <button className="button form-button" type="submit">{sent ? "Message Sent" : "Send message"} {sent ? <Check size={17} /> : <Send size={17} />}</button>
          </motion.form>
        </div>
      </section>

      <footer>
        <div className="container footer-inner">
          <Logo />
          <p>© 2026 Baljinder Singh. Designed &amp; built with intent.</p>
          <div><a href="#">LI</a><a href="#">GH</a><a href="#home">TOP <ArrowUpRight size={13} /></a></div>
        </div>
      </footer>
    </main>
  );
}

export default App;
