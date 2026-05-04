import { Linkedin, Mail, ArrowUpRight, Award, GraduationCap } from "lucide-react";
import keshaPhoto from "@/assets/kesha.jpeg";

const skills = [
  "AI Product Management",
  "LLM Applications",
  "Agentic Platforms",
  "RAG & Vector Search",
  "Prompt Engineering",
  "Product Strategy",
  "Roadmapping",
  "User Research",
  "Data Analytics",
  "A/B Testing",
  "SQL",
  "Agile / Scrum",
  "Go-to-Market",
  "Stakeholder Management",
];

const experience = [
  {
    role: "Product Manager, AI",
    company: "Techolution",
    period: "2023 – Present",
    points: [
      "Own roadmap for an agentic platform serving 50K+ enterprise users.",
      "Shipped 4 LLM-powered workflows; cut manual ops time by 62%.",
      "Defined eval framework (accuracy, latency, cost) adopted across 3 AI pods.",
    ],
  },
  {
    role: "Product Manager",
    company: "SuperAlign",
    period: "2021 – 2023",
    points: [
      "Launched RAG-based knowledge assistant; drove 38% lift in self-serve resolution.",
      "Scaled experimentation from 2 to 12 tests per month.",
      "Led 0→1 launch of 2 products that became core revenue lines.",
    ],
  },
];

const projects = [
  {
    title: "Agentic Workflow Builder",
    blurb:
      "Drag-and-drop builder for multi-agent workflows on top of GPT-4 and Claude. Adopted by 70% of pilot customers in 6 weeks.",
    tags: ["Agents", "LLM", "B2B"],
  },
  {
    title: "RAG Knowledge Assistant",
    blurb:
      "Production RAG system over 2M+ enterprise docs. Reduced support deflection cost by 41% with 92% answer accuracy.",
    tags: ["RAG", "Search", "Eval"],
  },
  {
    title: "LLM Cost & Quality Dashboard",
    blurb:
      "Internal tool tracking model cost, latency and eval scores per feature. Cut inference spend by 28% in one quarter.",
    tags: ["AI Ops", "Analytics"],
  },
];

const education = [
  {
    school: "XLRI Jamshedpur, Xavier School of Management",
    degree: "Post Graduate Diploma in Management (HRM)",
    period: "2024 – 2026",
  },
  {
    school: "Undergraduate Degree",
    degree: "B.E. / B.Tech",
    period: "2017 – 2021",
  },
];

const awards = [
  { title: "Awarded 9× for highest-impact delivery among 25 PMs across 3 concurrent products" },
  { title: "Selected as first PM for HQ collaboration (US, 2024), working directly with the CEO" },
  { title: "Founded PMO & SOPs (30 PMs / 22 products) for delivery velocity, early risk identification, and leadership visibility" },
  { title: "Won Badminton (Singles & Doubles) at company-wide tournament" },
];

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <header className="mx-auto flex max-w-5xl items-center justify-between px-6 py-6">
        <a href="#top" className="font-display text-lg font-medium tracking-tight">
          Kesha Kaneria
        </a>
        <nav className="hidden gap-8 text-sm text-muted-foreground sm:flex">
          <a href="#skills" className="hover:text-foreground transition-colors">Skills</a>
          <a href="#experience" className="hover:text-foreground transition-colors">Experience</a>
          <a href="#work" className="hover:text-foreground transition-colors">Work</a>
          <a href="#education" className="hover:text-foreground transition-colors">Education</a>
          <a href="#contact" className="hover:text-foreground transition-colors">Contact</a>
        </nav>
      </header>

      {/* Hero */}
      <section id="top" className="mx-auto max-w-5xl px-6 pb-20 pt-12 sm:pt-20">
        <div className="grid items-center gap-12 md:grid-cols-[1fr_auto]">
          <div>
            <p className="fade-in mb-6 text-sm uppercase tracking-[0.2em] text-accent">
              AI Product Manager
            </p>
            <h1 className="fade-in-up font-display text-5xl font-light leading-[1.05] text-balance sm:text-6xl">
              Kesha Kaneria
            </h1>
            <p className="fade-in-up mt-6 text-xl leading-snug text-foreground/90 text-balance">
              Building LLM applications and agentic platforms that ship to production.
            </p>
            <p className="fade-in-up mt-5 max-w-xl text-base leading-relaxed text-muted-foreground">
              MBA candidate at XLRI Jamshedpur. 4+ years across AI product, growth and
              0→1 launches. Focused on agent design, RAG systems, and the eval loop that
              keeps them honest.
            </p>
            <div className="fade-in-up mt-8 flex flex-wrap gap-3">
              <a
                href="#contact"
                className="inline-flex items-center gap-2 rounded-full bg-primary px-5 py-3 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"
              >
                Get in touch <ArrowUpRight className="h-4 w-4" />
              </a>
              <a
                href="#work"
                className="inline-flex items-center gap-2 rounded-full border hairline px-5 py-3 text-sm font-medium transition-colors hover:bg-secondary"
              >
                See my work
              </a>
            </div>
          </div>
          <div className="fade-in-up justify-self-center md:justify-self-end">
            <div className="relative">
              <div className="absolute inset-0 -z-10 rounded-full bg-accent/20 blur-2xl" />
              <img
                src={keshaPhoto}
                alt="Kesha Kaneria, AI Product Manager and XLRI Jamshedpur student"
                className="h-56 w-56 rounded-full object-cover shadow-[0_10px_40px_-10px_hsl(25_20%_12%/0.25)] sm:h-64 sm:w-64"
                loading="eager"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Skills */}
      <section id="skills" className="border-t hairline">
        <div className="mx-auto max-w-5xl px-6 py-20">
          <div className="grid gap-10 md:grid-cols-[200px_1fr]">
            <h2 className="font-display text-2xl font-medium">Skills</h2>
            <div className="flex flex-wrap gap-2">
              {skills.map((s) => (
                <span
                  key={s}
                  className="cursor-default rounded-full border hairline bg-card px-4 py-2 text-sm text-foreground/80 transition-all duration-200 hover:-translate-y-0.5 hover:border-accent hover:bg-accent/10 hover:text-foreground hover:shadow-sm"
                >
                  {s}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Experience */}
      <section id="experience" className="border-t hairline">
        <div className="mx-auto max-w-5xl px-6 py-20">
          <div className="grid gap-10 md:grid-cols-[200px_1fr]">
            <h2 className="font-display text-2xl font-medium">Experience</h2>
            <ol className="space-y-10">
              {experience.map((e) => (
                <li key={e.role} className="grid gap-2">
                  <div className="flex flex-wrap items-baseline justify-between gap-2">
                    <h3 className="font-display text-xl font-medium">
                      {e.role} · <span className="text-muted-foreground">{e.company}</span>
                    </h3>
                    <span className="text-sm text-muted-foreground">{e.period}</span>
                  </div>
                  <ul className="mt-1 list-disc space-y-1 pl-5 text-muted-foreground">
                    {e.points.map((pt) => (
                      <li key={pt}>{pt}</li>
                    ))}
                  </ul>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      {/* Selected Work */}
      <section id="work" className="border-t hairline">
        <div className="mx-auto max-w-5xl px-6 py-20">
          <div className="grid gap-10 md:grid-cols-[200px_1fr]">
            <h2 className="font-display text-2xl font-medium">Selected work</h2>
            <div className="space-y-4">
              {projects.map((p) => (
                <article
                  key={p.title}
                  className="group rounded-2xl border hairline bg-card p-6 transition-colors hover:bg-secondary/60"
                >
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <h3 className="font-display text-xl font-medium">{p.title}</h3>
                      <p className="mt-2 max-w-2xl text-muted-foreground leading-relaxed">
                        {p.blurb}
                      </p>
                      <div className="mt-4 flex flex-wrap gap-3">
                        {p.tags.map((t) => (
                          <span key={t} className="text-xs uppercase tracking-wider text-accent">
                            {t}
                          </span>
                        ))}
                      </div>
                    </div>
                    <ArrowUpRight className="h-5 w-5 shrink-0 text-muted-foreground transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-foreground" />
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Education */}
      <section id="education" className="border-t hairline">
        <div className="mx-auto max-w-5xl px-6 py-20">
          <div className="grid gap-10 md:grid-cols-[200px_1fr]">
            <h2 className="font-display text-2xl font-medium">Education</h2>
            <ul className="space-y-8">
              {education.map((ed) => (
                <li key={ed.school} className="flex items-start gap-4">
                  <GraduationCap className="mt-1 h-5 w-5 text-accent" />
                  <div className="flex-1">
                    <div className="flex flex-wrap items-baseline justify-between gap-2">
                      <h3 className="font-display text-lg font-medium">{ed.school}</h3>
                      <span className="text-sm text-muted-foreground">{ed.period}</span>
                    </div>
                    <p className="mt-1 text-sm text-foreground/80">{ed.degree}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Awards */}
      <section className="border-t hairline">
        <div className="mx-auto max-w-5xl px-6 py-20">
          <div className="grid gap-10 md:grid-cols-[200px_1fr]">
            <h2 className="font-display text-2xl font-medium">Awards</h2>
            <ul className="divide-y hairline">
              {awards.map((a) => (
                <li key={a.title} className="flex items-start gap-4 py-5 first:pt-0">
                  <Award className="mt-1 h-5 w-5 shrink-0 text-accent" />
                  <p className="flex-1 text-sm text-foreground/85">{a.title}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Placeholder to keep structure — will be removed */}
      <section className="hidden">
        <div></div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Awards */}
      <section className="border-t hairline">
        <div className="mx-auto max-w-5xl px-6 py-20">
          <div className="grid gap-10 md:grid-cols-[200px_1fr]">
            <h2 className="font-display text-2xl font-medium">Awards</h2>
            <ul className="divide-y hairline">
              {awards.map((a) => (
                <li key={a.title} className="flex items-start gap-4 py-5 first:pt-0">
                  <Award className="mt-1 h-5 w-5 text-accent" />
                  <div className="flex-1">
                    <div className="flex flex-wrap items-baseline justify-between gap-2">
                      <h3 className="font-medium">{a.title}</h3>
                      <span className="text-sm text-muted-foreground">{a.year}</span>
                    </div>
                    <p className="mt-1 text-sm text-muted-foreground">{a.org}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Contact */}
      <footer id="contact" className="border-t hairline">
        <div className="mx-auto max-w-5xl px-6 py-20">
          <h2 className="font-display text-3xl font-light text-balance sm:text-4xl">
            Let's build AI products that ship.
          </h2>
          <p className="mt-4 max-w-xl text-muted-foreground">
            Open to AI PM roles, agentic platform projects and product collaborations.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="https://www.linkedin.com/in/kesha-k-kaneria/"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full border hairline px-5 py-3 text-sm font-medium transition-colors hover:bg-secondary"
            >
              <Linkedin className="h-4 w-4" /> LinkedIn
            </a>
            <a
              href="mailto:kesha.kaneria07@gmail.com"
              className="inline-flex items-center gap-2 rounded-full bg-primary px-5 py-3 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"
            >
              <Mail className="h-4 w-4" /> kesha.kaneria07@gmail.com
            </a>
          </div>
          <p className="mt-16 text-xs text-muted-foreground">
            © {new Date().getFullYear()} Kesha Kaneria. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
