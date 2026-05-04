import { Linkedin, Mail, ArrowUpRight, Award } from "lucide-react";

const skills = [
  "Product Strategy",
  "Roadmapping",
  "User Research",
  "Data Analytics",
  "A/B Testing",
  "Agile / Scrum",
  "Stakeholder Management",
  "Go-to-Market",
  "UX & Wireframing",
  "SQL",
];

const projects = [
  {
    title: "Checkout Conversion Overhaul",
    blurb:
      "Led a cross-functional redesign of the checkout flow, reducing drop-off by 28% and lifting revenue per session by 14%.",
    tags: ["Growth", "Experimentation"],
  },
  {
    title: "Self-Serve Onboarding",
    blurb:
      "Built a guided activation experience for new users, increasing 7-day retention by 22% and cutting support tickets in half.",
    tags: ["Activation", "UX"],
  },
  {
    title: "Insights Dashboard 2.0",
    blurb:
      "Shipped a configurable analytics workspace adopted by 80% of enterprise accounts within one quarter.",
    tags: ["B2B SaaS", "Data"],
  },
];

const awards = [
  {
    title: "Product Excellence Award",
    org: "Internal recognition for impact on quarterly OKRs",
    year: "2024",
  },
  {
    title: "Top 30 Under 30 — Product",
    org: "Selected from a pool of 2,000+ nominations",
    year: "2023",
  },
  {
    title: "Hackathon Winner",
    org: "First place for an AI-assisted research tool",
    year: "2022",
  },
];

const experience = [
  {
    role: "Senior Product Manager",
    company: "Tech Company",
    period: "2023 — Present",
    points: [
      "Own the growth surface across web and mobile, leading a pod of 8 engineers, designers and analysts.",
      "Defined the north-star metric framework now adopted org-wide.",
    ],
  },
  {
    role: "Product Manager",
    company: "SaaS Startup",
    period: "2021 — 2023",
    points: [
      "Launched 3 zero-to-one products, two of which became core revenue drivers.",
      "Scaled experimentation velocity from 2 to 12 tests per month.",
    ],
  },
  {
    role: "Associate Product Manager",
    company: "Consumer App",
    period: "2019 — 2021",
    points: [
      "Drove a redesign of the discovery feed, increasing daily sessions by 19%.",
      "Partnered with research to build the company's first user persona library.",
    ],
  },
];

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Nav */}
      <header className="mx-auto flex max-w-5xl items-center justify-between px-6 py-6">
        <a href="#top" className="font-display text-lg font-medium tracking-tight">
          Kesha Kaneria
        </a>
        <nav className="hidden gap-8 text-sm text-muted-foreground sm:flex">
          <a href="#work" className="hover:text-foreground transition-colors">Work</a>
          <a href="#experience" className="hover:text-foreground transition-colors">Experience</a>
          <a href="#contact" className="hover:text-foreground transition-colors">Contact</a>
        </nav>
      </header>

      {/* Hero */}
      <section id="top" className="mx-auto max-w-5xl px-6 pb-20 pt-16 sm:pt-24">
        <p className="fade-in mb-6 text-sm uppercase tracking-[0.2em] text-muted-foreground">
          Product Manager
        </p>
        <h1 className="fade-in-up font-display text-5xl font-light leading-[1.05] text-balance sm:text-6xl md:text-7xl">
          Hi, I'm Kesha — I build products people actually return to.
        </h1>
        <p className="fade-in-up mt-8 max-w-2xl text-lg leading-relaxed text-muted-foreground">
          A product manager with a soft spot for clean experiences, sharp metrics and teams
          that ship. I work at the intersection of strategy, design and data — turning fuzzy
          problems into focused roadmaps.
        </p>
        <div className="fade-in-up mt-10 flex flex-wrap gap-3">
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
      </section>

      {/* Skills */}
      <section className="border-t hairline">
        <div className="mx-auto max-w-5xl px-6 py-20">
          <div className="grid gap-10 md:grid-cols-[200px_1fr]">
            <h2 className="font-display text-2xl font-medium">Skills</h2>
            <div className="flex flex-wrap gap-2">
              {skills.map((s) => (
                <span
                  key={s}
                  className="rounded-full border hairline bg-card px-4 py-2 text-sm text-foreground/80"
                >
                  {s}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Projects */}
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
                      <div className="mt-4 flex flex-wrap gap-2">
                        {p.tags.map((t) => (
                          <span
                            key={t}
                            className="text-xs uppercase tracking-wider text-accent"
                          >
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

      {/* Footer / Contact */}
      <footer id="contact" className="border-t hairline">
        <div className="mx-auto max-w-5xl px-6 py-20">
          <h2 className="font-display text-3xl font-light text-balance sm:text-4xl">
            Let's build something thoughtful.
          </h2>
          <p className="mt-4 max-w-xl text-muted-foreground">
            Open to product roles, advisory work and the occasional good conversation.
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
              href="mailto:hello@example.com"
              className="inline-flex items-center gap-2 rounded-full bg-primary px-5 py-3 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"
            >
              <Mail className="h-4 w-4" /> Email me
            </a>
          </div>
          <p className="mt-16 text-xs text-muted-foreground">
            © {new Date().getFullYear()} Kesha Kaneria. Designed and built with care.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
