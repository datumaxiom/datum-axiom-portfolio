import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  ArrowDown,
  ArrowRight,
  ArrowUpRight,
  Github,
  Linkedin,
  Mail,
  Phone,
  X,
} from "lucide-react";
import FlashlightReveal from "@/components/portfolio/FlashlightReveal";

gsap.registerPlugin(ScrollTrigger);

const resumeUrl = new URL("./Aadesha Biswas CV.pdf", import.meta.url).href;
const email = "aadesha.biswas@gmail.com";
const phone = "+918319842489";
const linkedin = "https://www.linkedin.com/in/aadesha99/";
const github = "https://github.com/Aadesha-1";

const projects = [
  {
    number: "01",
    title: "Cost Analysis Report",
    category: "Cost analysis",
    note: "A resume-listed project",
    visual: "cost",
  },
  {
    number: "02",
    title: "Operations Management",
    category: "Operational analytics",
    note: "A resume-listed project",
    visual: "forecast",
  },
  {
    number: "03",
    title: "Departmental Dashboard",
    category: "Business intelligence",
    note: "A resume-listed project",
    visual: "dashboard",
  },
  {
    number: "04",
    title: "Audit Monitoring Dashboard",
    category: "Audit & governance",
    note: "A resume-listed project",
    visual: "workforce",
  },
  {
    number: "05",
    title: "Workforce Planning & Optimization",
    category: "People analytics",
    note: "A resume-listed project",
    visual: "workforce",
  },
  {
    number: "06",
    title: "Span of Control Analysis",
    category: "Workforce analysis",
    note: "A resume-listed project",
    visual: "cost",
  },
  {
    number: "07",
    title: "Attrition Analysis & Forecasting",
    category: "Predictive analysis",
    note: "A resume-listed project",
    visual: "forecast",
  },
  {
    number: "08",
    title: "Attendance Management",
    category: "People operations",
    note: "A resume-listed project",
    visual: "dashboard",
  },
  {
    number: "09",
    title: "Performance Management Analysis",
    category: "Performance analytics",
    note: "A resume-listed project",
    visual: "workforce",
  },
];

const skillGroups = [
  {
    number: "01",
    title: "Programming & analytics",
    skills: "Python, Pandas, NumPy, Matplotlib, Seaborn, Git, GitHub",
  },
  {
    number: "02",
    title: "Machine learning & AI",
    skills: "PyTorch, TensorFlow, Scikit-learn, model versioning, CI/CD, MLflow",
  },
  {
    number: "03",
    title: "Business intelligence",
    skills:
      "Power BI, DAX, M Query, RLS, workforce and people analytics, KPI design, performance measurement, predictive and statistical analysis",
  },
  {
    number: "04",
    title: "Data, ETL & Excel",
    skills:
      "SQL, data collection, cleaning, modeling, validation, integration, wrangling, lakes, warehouses, governance, audit, VBA, macros, advanced functions, Power Query",
  },
  {
    number: "05",
    title: "Platforms & enterprise",
    skills:
      "Power Automate, Power Apps, Planner, Project, SharePoint, Visio, Forms, SAP, SuccessFactors, Workday, Quickbase",
  },
  {
    number: "06",
    title: "How I work",
    skills:
      "Stakeholder engagement, cross-functional collaboration, strategic and project planning, change management, process optimization, innovation and automation",
  },
];

const experiences = [
  {
    period: "APR 2025 — NOW",
    company: "Accenture",
    role: "Analytics and Modeling Analyst",
    location: "Bengaluru",
    highlights: [
      "Built automated ETL pipelines and Power BI dashboards with Python, SQL, Power BI and Excel VBA; reporting turnaround time reduced by 30%.",
      "Applied data modeling, statistical analysis, regression and machine learning to forecasting, business planning and cost optimization.",
      "Used exploratory, trend and root-cause analysis to identify performance drivers and uncover 10% operational-efficiency opportunities.",
      "Collaborated with cross-functional stakeholders to translate requirements into scalable analytics and AI-driven solutions, improving reporting automation and decision support.",
    ],
  },
  {
    period: "JUN 2022 — MAR 2025",
    company: "G R Infraprojects Limited",
    role: "Assistant Manager · Senior Executive · Executive",
    location: "Gurugram",
    highlights: [
      "Architected BI infrastructure and 15+ interactive DAX and M Query dashboards, reducing manual effort by 60% and improving operational efficiency by 15%.",
      "Designed classification and regression models for operational inefficiencies, resulting in a 10% cost reduction through data-driven resource allocation.",
      "Automated data processing workflows, reducing manual intervention and errors by 10% while improving accuracy, compliance and reporting efficiency.",
      "Delivered executive reports and presentations, and partnered across functions to shape analytics around business needs and risk mitigation.",
    ],
  },
  {
    period: "DEC 2018 — APR 2019",
    company: "Infosys BPM",
    role: "Process Executive",
    location: "Bengaluru",
    highlights: [
      "Customer support and technical Openreach for British Telecom (UK shift).",
      "Recommended products and service improvements to meet customer requirements; maintained positive customer relationships and documentation.",
    ],
  },
];

function ProjectDrawing({ kind }: { kind: string }) {
  return (
    <svg
      className={`project-drawing project-drawing--${kind}`}
      viewBox="0 0 600 340"
      role="img"
      aria-label="Abstract editorial illustration"
    >
      <path className="drawing-grid" d="M56 70H544M56 130H544M56 190H544M56 250H544M56 310H544M116 36V310M216 36V310M316 36V310M416 36V310M516 36V310" />
      {kind === "dashboard" && (
        <>
          <path className="drawing-line drawing-line--yellow" d="M56 243C108 234 117 163 174 181S254 230 310 153 396 119 431 143 488 107 544 68" />
          <path className="drawing-line drawing-line--ivory" d="M56 272C115 258 145 236 190 248S280 196 330 214 435 159 480 177 520 152 544 142" />
          <circle className="drawing-dot" cx="431" cy="143" r="6" />
          <circle className="drawing-dot drawing-dot--red" cx="310" cy="153" r="5" />
        </>
      )}
      {kind === "cost" && (
        <>
          <path className="drawing-line drawing-line--red" d="M56 80C135 119 139 197 220 189S315 111 368 148 443 237 544 252" />
          <path className="drawing-line drawing-line--yellow" d="M56 278C132 257 145 247 213 251S289 207 350 220 432 178 544 159" />
          <path className="drawing-axis" d="M56 310H544" />
        </>
      )}
      {kind === "workforce" && (
        <>
          <path className="drawing-ring" d="M300 75a90 90 0 1 1-1 0m1 0v90l66 42" />
          <path className="drawing-line drawing-line--yellow" d="M104 264h72v-43h72v-57h72v-32h72v-53h72" />
          <circle className="drawing-dot" cx="300" cy="165" r="5" />
        </>
      )}
      {kind === "forecast" && (
        <>
          <path className="drawing-line drawing-line--ivory" d="M56 248C110 224 145 238 192 208S272 174 319 187 394 142 429 155" />
          <path className="drawing-line drawing-line--yellow drawing-line--dashed" d="M429 155C469 167 493 119 544 105" />
          <path className="drawing-band" d="M429 128C467 139 493 90 544 75V142C493 153 468 193 429 181Z" />
          <circle className="drawing-dot" cx="429" cy="155" r="6" />
        </>
      )}
    </svg>
  );
}

function PullingHand() {
  return (
    <svg
      className="pulling-hand"
      id="pull-hand"
      viewBox="0 0 340 300"
      role="img"
      aria-label="Illustrated hand gently pulling the collaboration button"
    >
      <g className="hand-ink">
        <path d="M22 276c28-14 52-28 76-43 12-8 22-13 34-18 17-7 32-16 45-27l28-25c9-8 20-8 27 0 7 9 2 19-6 28l-18 19 43-34c10-8 22-7 28 2 5 8 1 18-8 26l-34 31 37-21c11-7 21-4 26 5 4 9-1 17-11 24l-33 23 25-8c11-4 20 1 22 9 2 8-4 15-15 19l-66 25c-24 9-42 12-64 11-27-1-49-9-67-18l-44-22Z" />
        <path d="M132 215c-8-12-5-23 6-32l38-34c8-8 19-8 26 0 7 8 5 17-4 26M111 229c-8-10-6-21 4-29l31-27c9-8 19-8 25 0 6 8 4 17-4 24" />
        <path d="M44 264c22 9 45 13 67 11m31-52 16 17m25-47 15 18m13 26 14 12" />
      </g>
      <path className="hand-highlight" d="M42 271c22 9 43 12 63 10m55-82 24-21m14 50 31-24" />
    </svg>
  );
}

export default function Index() {
  const prefersReducedMotion = useReducedMotion();
  const pageRef = useRef<HTMLElement>(null);
  const collaborateRef = useRef<HTMLElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const pointerFrameRef = useRef<number | null>(null);
  const [contactOpen, setContactOpen] = useState(false);

  useEffect(() => {
    const root = pageRef.current;
    if (!root) return;

    const motionQuery = gsap.matchMedia();
    motionQuery.add("(prefers-reduced-motion: no-preference)", () => {
      const context = gsap.context(() => {
        const opening = gsap.timeline({ defaults: { ease: "power3.out" } });
        opening
          .from(".hero-kicker, .hero-title-line, .hero-description, .hero-meta", {
            y: 28,
            autoAlpha: 0,
            duration: 0.9,
            stagger: 0.12,
          })
          .from(
            ".hero-graphic",
            { clipPath: "inset(0 0 100% 0)", duration: 1.15, ease: "power4.inOut" },
            0.2,
          );

        gsap.utils.toArray<HTMLElement>(".reveal-up").forEach((element) => {
          gsap.from(element, {
            y: 38,
            autoAlpha: 0,
            duration: 0.9,
            ease: "power3.out",
            scrollTrigger: {
              trigger: element,
              start: "top 88%",
              once: true,
            },
          });
        });

        const strings = gsap.utils.toArray<SVGPathElement>(".collab-string");
        strings.forEach((path) => {
          const length = path.getTotalLength();
          gsap.set(path, { strokeDasharray: length, strokeDashoffset: length });
        });
        const collaboration = gsap.timeline({
          scrollTrigger: {
            trigger: ".collaborate-section",
            start: "top 75%",
            once: true,
          },
        });
        strings.forEach((path, index) => {
          collaboration.to(path, { strokeDashoffset: 0, duration: 1.15, ease: "power2.inOut" }, index * 0.16);
        });
        collaboration.fromTo(
          "#pull-hand",
          { x: -7, rotation: -3, transformOrigin: "55% 78%" },
          { x: 0, rotation: 0, duration: 1.2, ease: "back.out(1.4)" },
          0.3,
        );
        collaboration.fromTo(
          ".collaborate-title, .collaborate-caption",
          { y: 18, autoAlpha: 0 },
          { y: 0, autoAlpha: 1, duration: 0.75, stagger: 0.15, ease: "power2.out" },
          0.65,
        );
      }, root);

      return () => context.revert();
    });

    return () => motionQuery.revert();
  }, []);

  useEffect(() => {
    const section = collaborateRef.current;
    if (!section || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const onPointerMove = (event: PointerEvent) => {
      if (event.pointerType === "touch") return;
      if (pointerFrameRef.current !== null) return;
      pointerFrameRef.current = window.requestAnimationFrame(() => {
        const bounds = section.getBoundingClientRect();
        const x = (event.clientX - bounds.left) / bounds.width - 0.5;
        const y = (event.clientY - bounds.top) / bounds.height - 0.5;
        section.style.setProperty("--pull-x", `${x * 7}px`);
        section.style.setProperty("--pull-y", `${y * 5}px`);
        pointerFrameRef.current = null;
      });
    };

    section.addEventListener("pointermove", onPointerMove, { passive: true });
    return () => {
      section.removeEventListener("pointermove", onPointerMove);
      if (pointerFrameRef.current !== null) {
        window.cancelAnimationFrame(pointerFrameRef.current);
      }
    };
  }, []);

  useEffect(() => {
    if (!contactOpen) return;

    const previousFocus = document.activeElement;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeButtonRef.current?.focus();

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setContactOpen(false);
        return;
      }
      if (event.key !== "Tab") return;
      const dialog = document.querySelector<HTMLElement>(".contact-dialog");
      const focusable = dialog?.querySelectorAll<HTMLElement>(
        'a[href], button:not([disabled])',
      );
      if (!focusable?.length) return;
      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    };

    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", onKeyDown);
      if (previousFocus instanceof HTMLElement) previousFocus.focus();
    };
  }, [contactOpen]);

  return (
    <main className="portfolio-page" ref={pageRef}>
      <a className="skip-link" href="#main-content">
        Skip to content
      </a>

      <header className="site-header">
        <a className="wordmark" href="#top" aria-label="Aadesha Biswas, home">
          AB<span>.</span>
        </a>
        <nav className="main-nav" aria-label="Main navigation">
          <a href="#about">About</a>
          <a href="#work">Selected work</a>
          <a href="#experience">Experience</a>
          <a href="/blog">Journal</a>
        </nav>
        <a className="nav-contact" href="#collaborate">
          Let&apos;s talk <ArrowUpRight size={14} aria-hidden="true" />
        </a>
      </header>

      <FlashlightReveal className="hero-section" >
        <section className="hero-inner" id="top" aria-labelledby="hero-title">
          <div className="hero-copy">
            <p className="eyebrow hero-kicker">
              <span className="eyebrow-dot" />
              Analytics · AI · Decision systems
            </p>
            <h1 className="hero-title" id="hero-title">
              <span className="hero-title-line">Aadesha</span>
              <span className="hero-title-line hero-title-last">
                Biswas<span className="hero-period">.</span>
              </span>
            </h1>
            <div className="hero-description">
              <p className="hero-role">Analytics &amp; AI Professional</p>
              <p className="hero-summary">
                Turning complex data into clearer decisions, thoughtful models,
                and systems that make work flow better.
              </p>
            </div>
            <div className="hero-meta">
              <a className="text-link" href="#work">
                Explore selected work <ArrowDown size={15} aria-hidden="true" />
              </a>
              <span className="hero-location">Bengaluru, India</span>
            </div>
          </div>

          <div className="hero-graphic" aria-label="Editorial data illustration">
            <div className="graphic-frame">
              <div className="graphic-topline">
                <span>FIELD NOTES / 01</span>
                <span>DATA → DECISIONS</span>
              </div>
              <div className="graphic-display">
                <span className="graphic-outline" aria-hidden="true">SIGNAL</span>
                <svg className="hero-chart" viewBox="0 0 660 330" role="img" aria-label="An abstract plotted line, representing a signal emerging from data">
                  <path className="hero-chart-grid" d="M28 52H628M28 108H628M28 164H628M28 220H628M28 276H628M88 24V292M208 24V292M328 24V292M448 24V292M568 24V292" />
                  <path className="hero-chart-line" d="M28 242C82 233 96 151 153 176S223 224 276 173 347 89 401 130 476 201 522 128 582 75 628 54" />
                  <path className="hero-chart-line chart-line-ghost" d="M28 269C80 265 111 227 159 237S237 199 284 213 362 186 409 197 481 173 527 182 590 155 628 147" />
                  <circle className="chart-point chart-point-one" cx="401" cy="130" r="5" />
                  <circle className="chart-point chart-point-two" cx="522" cy="128" r="5" />
                </svg>
                <div className="chart-annotation annotation-left">
                  <span className="annotation-line" />
                  <span>Find the<br />useful signal</span>
                </div>
                <div className="chart-annotation annotation-right">
                  <span>OBSERVE<br />01 — 04</span>
                  <span className="annotation-cross">+</span>
                </div>
              </div>
              <div className="graphic-footline">
                <span>Pattern recognition / human context</span>
                <span>FIG. 01</span>
              </div>
            </div>
            <div className="graphic-caption">
              <span>DATA IS A STARTING POINT.</span>
              <span>CLARITY IS THE WORK.</span>
            </div>
          </div>
          <span className="hero-index" aria-hidden="true">01 / 06</span>
        </section>
      </FlashlightReveal>

      <div className="page-content" id="main-content">
        <section className="intro-section content-section" id="about">
          <div className="section-marker reveal-up">
            <span>01</span><span className="rule" /><span>THE PRACTICE</span>
          </div>
          <div className="intro-grid">
            <h2 className="section-title reveal-up">
              Good analysis<br />makes room for <em>better questions.</em>
            </h2>
            <div className="intro-copy reveal-up">
              <p>
                I&apos;m an analytics and machine-learning professional with
                4+ years of experience across business, finance, insurance,
                and HR. My work brings together business intelligence,
                automated reporting, ETL, and applied machine learning.
              </p>
              <p>
                I work closely with stakeholders to turn ambiguous needs into
                useful, data-informed decisions—pairing technical rigor with
                context, clear communication, and care for the people who use
                the result.
              </p>
              <a className="text-link" href={resumeUrl} target="_blank" rel="noreferrer">
                Open résumé <ArrowUpRight size={15} aria-hidden="true" />
              </a>
            </div>
          </div>
          <div className="intro-footnote reveal-up">
            <span>BASED IN BENGALURU, INDIA</span>
            <span>BUSINESS INTELLIGENCE · MODELING · AUTOMATION</span>
          </div>
        </section>

        <section className="work-section content-section" id="work">
          <div className="section-marker reveal-up">
            <span>02</span><span className="rule" /><span>SELECTED WORK</span>
          </div>
          <div className="work-heading">
            <h2 className="section-title reveal-up">Ideas, in application.</h2>
            <p className="work-intro reveal-up">
              Project areas named in my résumé. Each starts with a question;
              the details belong to the people and context behind the work.
            </p>
          </div>

          <div className="projects-list">
            {projects.map((project, index) => (
              <article
                className={`project-story project-story--${project.visual} reveal-up`}
                key={project.number}
              >
                <FlashlightReveal
                  className={`project-art project-torch project-torch--${project.visual}`}
                  showToggle={false}
                >
                  <ProjectDrawing kind={project.visual} />
                  <span className="project-art-index">FIELD STUDY / {project.number}</span>
                  <span className="project-art-note">EDITORIAL VISUALIZATION</span>
                </FlashlightReveal>
                <div className="project-copy">
                  <span className="project-number">{project.number} / 09</span>
                  <p className="project-category">{project.category}</p>
                  <h3>{project.title}</h3>
                  <span className="project-note">{project.note}</span>
                </div>
                {index < projects.length - 1 && <span className="project-divider" aria-hidden="true" />}
              </article>
            ))}
          </div>
        </section>

        <section className="experience-section content-section" id="experience">
          <div className="section-marker reveal-up">
            <span>03</span><span className="rule" /><span>EXPERIENCE</span>
          </div>
          <div className="experience-heading reveal-up">
            <h2 className="section-title">A practice built<br />across disciplines.</h2>
            <p>
              From customer operations to analytics and modeling—each chapter
              adds a different lens to the problem.
            </p>
          </div>
          <div className="experience-list">
            {experiences.map((item) => (
              <article className="experience-item reveal-up" key={`${item.company}-${item.period}`}>
                <div className="experience-date">{item.period}</div>
                <div className="experience-detail">
                  <h3>{item.company}</h3>
                  <p className="experience-role">{item.role}</p>
                  {item.highlights && (
                    <ul>
                      {item.highlights.map((highlight) => <li key={highlight}>{highlight}</li>)}
                    </ul>
                  )}
                </div>
                <span className="experience-location">{item.location}</span>
              </article>
            ))}
          </div>
          <div className="education-strip reveal-up">
            <div>
              <span className="micro-label">EDUCATION</span>
              <p>Master of Business Administration <span>Human Resources / Marketing · RDVV · 2019–2021</span></p>
              <p>Bachelor of Engineering <span>Electronics &amp; Communication · RGPV · 2014–2018</span></p>
            </div>
            <a className="text-link" href={resumeUrl} target="_blank" rel="noreferrer">
              Full experience <ArrowUpRight size={15} aria-hidden="true" />
            </a>
          </div>
        </section>

        <section className="skills-section content-section" id="skills">
          <div className="section-marker reveal-up">
            <span>04</span><span className="rule" /><span>THE TOOLKIT</span>
          </div>
          <div className="skills-heading reveal-up">
            <h2 className="section-title">A toolkit for<br /><em>the whole picture.</em></h2>
            <p>Tools are useful in service of a question—not as an end in themselves.</p>
          </div>
          <div className="skills-list">
            {skillGroups.map((group) => (
              <div className="skill-row reveal-up" key={group.number}>
                <span className="skill-number">{group.number}</span>
                <h3>{group.title}</h3>
                <p>{group.skills}</p>
                <span className="skill-plus" aria-hidden="true">+</span>
              </div>
            ))}
          </div>
          <p className="certification-note reveal-up">
            CERTIFICATIONS · AI &amp; Business Strategy (PMI) · Advanced Google Analytics (LinkedIn Learning) · Essential Business Analytics (Udemy) · Business Analytics &amp; Intelligence (TheDigitalAdda) · Introduction to Data Analysis (Simplilearn)
          </p>
        </section>
      </div>

      <section className="collaborate-section" id="collaborate" ref={collaborateRef}>
        <div className="collaborate-topline">
          <span>05 / AN OPEN INVITATION</span>
          <span>GOOD WORK STARTS WITH A CONVERSATION</span>
        </div>
        <h2 className="collaborate-title">
          Something worth<br /><em>figuring out?</em>
        </h2>
        <p className="collaborate-caption">
          Analytics, AI, a knotty process—or simply a good question.
        </p>
        <svg className="collaborate-strings" viewBox="0 0 1000 520" preserveAspectRatio="none" aria-hidden="true">
          <g className="string-group">
            <path className="collab-string" d="M230 359C335 405 422 372 586 213" />
            <path className="collab-string" d="M245 372C375 434 466 407 594 239" />
            <path className="collab-string" d="M262 384C411 464 497 431 602 264" />
            <path className="collab-string string-highlight" d="M230 359C335 405 422 372 586 213" />
          </g>
        </svg>
        <div className="hand-art">
          <PullingHand />
        </div>
        <motion.button
        className="collaborate-button"
          type="button"
          onClick={() => setContactOpen(true)}
          whileHover={prefersReducedMotion ? undefined : { y: -5, rotateX: 3, scale: 1.025 }}
          whileTap={prefersReducedMotion ? undefined : { scale: 0.985, y: 0 }}
          transition={{ type: "spring", stiffness: 280, damping: 20 }}
          aria-haspopup="dialog"
        >
          <span className="button-sheen" aria-hidden="true" />
          <span>LET&apos;S COLLABORATE</span>
          <ArrowUpRight size={19} aria-hidden="true" />
        </motion.button>
        <span className="collaborate-footnote">OPEN TO THOUGHTFUL COLLABORATIONS</span>
      </section>

      <footer className="site-footer" id="contact">
        <a className="wordmark footer-mark" href="#top" aria-label="Back to top">
          AB<span>.</span>
        </a>
        <p>Thoughtful work. Clearer decisions.</p>
        <div className="footer-links">
          <a href={`mailto:${email}`} aria-label="Email Aadesha Biswas"><Mail size={17} /></a>
          <a href={linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn profile"><Linkedin size={17} /></a>
          <a href={github} target="_blank" rel="noreferrer" aria-label="GitHub profile"><Github size={17} /></a>
        </div>
        <span className="footer-copyright">© {new Date().getFullYear()} Aadesha Biswas</span>
      </footer>

      <AnimatePresence>
        {contactOpen && (
          <motion.div
            className="contact-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: prefersReducedMotion ? 0 : 0.24 }}
            onMouseDown={(event) => {
              if (event.target === event.currentTarget) setContactOpen(false);
            }}
          >
            <motion.section
              className="contact-dialog"
              role="dialog"
              aria-modal="true"
              aria-labelledby="contact-title"
              initial={{ opacity: 0, y: 28, scale: 0.97 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 14, scale: 0.985 }}
              transition={
                prefersReducedMotion
                  ? { duration: 0 }
                  : { type: "spring", stiffness: 240, damping: 26 }
              }
            >
              <button
                className="contact-close"
                type="button"
                aria-label="Close contact panel"
                onClick={() => setContactOpen(false)}
                ref={closeButtonRef}
              >
                <X size={20} aria-hidden="true" />
              </button>
              <p className="eyebrow"><span className="eyebrow-dot" /> THE NEXT CHAPTER</p>
              <h2 id="contact-title">Let&apos;s make<br /><em>something matter.</em></h2>
              <p className="contact-dialog-copy">
                Tell me what you&apos;re working through. I&apos;d love to hear about it.
              </p>
              <a className="contact-email" href={`mailto:${email}`}>
                {email}<ArrowRight size={18} aria-hidden="true" />
              </a>
              <div className="contact-socials">
                <a href={linkedin} target="_blank" rel="noreferrer">
                  <Linkedin size={16} aria-hidden="true" /> LinkedIn <ArrowUpRight size={14} aria-hidden="true" />
                </a>
                <a href={github} target="_blank" rel="noreferrer">
                  <Github size={16} aria-hidden="true" /> GitHub <ArrowUpRight size={14} aria-hidden="true" />
                </a>
              </div>
              <a className="contact-phone" href={`tel:${phone}`}>
                <Phone size={15} aria-hidden="true" /> +91 83198 42489
              </a>
              <a
                className="start-project-link"
                href={`mailto:${email}?subject=${encodeURIComponent("Start a project")}`}
                onClick={() => setContactOpen(false)}
              >
                Start a Project <ArrowUpRight size={17} aria-hidden="true" />
              </a>
            </motion.section>
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}
