import { Linkedin, Mail, ArrowUpRight, Award, GraduationCap, Sparkles, Compass, Rocket, Target, Layers, LineChart, Code2, Cpu, Workflow, Zap } from "lucide-react";
import keshaPhoto from "@/assets/kesha.jpeg";
import { Reveal } from "@/components/Reveal";
import { RotatingWord } from "@/components/RotatingWord";

const rotatingRoles = ["Builder", "Strategist", "0→1 Operator", "Tech-native PM"];

const heroMetrics = [
  { value: "4.5+ yrs", label: "in Product" },
  { value: "10+", label: "products shipped 0→1" },
  { value: "$9.8M", label: "business impact" },
  { value: "50K+", label: "users impacted" },
];

const profileChips = [
  { icon: Code2, text: "B.Tech CSE" },
  { icon: GraduationCap, text: "MBA, XLRI Jamshedpur" },
  { icon: Cpu, text: "LLM & Agents" },
  { icon: Workflow, text: "0→1 builder" },
];

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
    summary:
      "Lead PM for an agentic AI platform sold to Fortune 500 enterprises. Sit between research, engineering and GTM — I write the eval specs, debug the prompts, and still own the roadmap.",
    points: [
      "Own roadmap for an agentic platform serving 50K+ enterprise users across 3 verticals.",
      "Designed eval framework (accuracy, latency, cost, hallucination) now standard across 3 AI pods.",
      "First PM picked for HQ collaboration in the US, working directly with the CEO on flagship bets.",
      "Founded internal PMO and SOPs covering 30 PMs and 22 products — cut delivery slippage and surfaced risks 2 sprints earlier.",
    ],
    tech: ["GPT-4 / Claude", "RAG", "LangGraph", "Vector DBs", "Python", "SQL"],
    metrics: [
      { value: "$9.8M", label: "Cost saved" },
      { value: "75%", label: "Turnaround cut" },
      { value: "30%→5%", label: "Hallucination rate" },
    ],
  },
  {
    role: "Associate Product Manager",
    company: "SuperAlign",
    period: "2021 – 2023",
    summary:
      "Joined as one of the earliest PMs and grew with the company. Owned 0→1 launches end-to-end — discovery, eng standups, GTM, post-launch loops.",
    points: [
      "Took 2 products from idea to revenue line; both became core to the company's growth story.",
      "Scaled experimentation cadence from 2 to 12 tests / month by setting up a lightweight A/B framework.",
      "Won 9× highest-impact delivery awards among 25 PMs across 3 concurrent products.",
      "Translated fuzzy stakeholder asks into shipped specs by going deep on the codebase, not just the docs.",
    ],
    tech: ["A/B testing", "SQL", "Mixpanel", "Figma", "Python"],
    metrics: [
      { value: "9×", label: "Top-impact awards" },
      { value: "40%", label: "Upsell revenue" },
      { value: "90%", label: "Feature engagement" },
    ],
  },
];

const projects = [
  {
    title: "Coming soon",
    blurb: "Personal builds and experiments will be listed here. Reach out if you want a walkthrough of work in progress.",
    tags: ["WIP"],
  },
];

const howIWork = [
  {
    icon: Compass,
    title: "Product thinking",
    body: "Start with the user's job-to-be-done, not the model. Map the workflow, find the painful step, ask why three times.",
  },
  {
    icon: Target,
    title: "Strategy",
    body: "Pick the smallest wedge with the largest pull. Bet on durable advantages: data, distribution, eval quality.",
  },
  {
    icon: Layers,
    title: "Planning",
    body: "Risk-first roadmap. Vertical slices over phased rollouts. Every sprint ships something a user can touch.",
  },
  {
    icon: Rocket,
    title: "Execution",
    body: "Eval-first AI: ground truth before prompts. Weekly demos, tight feedback loops, no silent regressions.",
  },
  {
    icon: LineChart,
    title: "Close the loop",
    body: "Dashboards on cost, latency, accuracy. If it isn't measured, it isn't shipped.",
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
    degree: "B.Tech, Computer Science & Engineering",
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
          <a href="#work" className="hover:text-foreground transition-colors">Building</a>
          <a href="#how" className="hover:text-foreground transition-colors">How I work</a>
          <a href="#education" className="hover:text-foreground transition-colors">Education</a>
          <a href="#contact" className="hover:text-foreground transition-colors">Contact</a>
        </nav>
      </header>

      {/* Hero */}
      <section id="top" className="relative mx-auto max-w-5xl px-6 pb-20 pt-12 sm:pt-20">
        <Sparkles className="absolute right-8 top-6 h-5 w-5 text-accent/60 animate-pulse" strokeWidth={1.5} aria-hidden />
        <div className="grid items-center gap-12 md:grid-cols-[1fr_auto]">
          <div>
            <p className="fade-in mb-6 flex flex-wrap items-center gap-x-2 text-sm uppercase tracking-[0.2em] text-accent">
              <span>AI Product Manager</span>
              <span className="text-muted-foreground">·</span>
              <RotatingWord words={rotatingRoles} className="text-foreground/80" />
            </p>
            <h1 className="fade-in-up font-display text-5xl font-light leading-[1.05] text-balance sm:text-6xl">
              Kesha Kaneria
            </h1>
            <p className="fade-in-up mt-6 text-xl leading-snug text-foreground/90 text-balance">
              I build LLM applications and agentic platforms that ship to production —
              and stay reliable once they're there.
            </p>
            <p className="fade-in-up mt-5 max-w-xl text-base leading-relaxed text-muted-foreground">
              Engineer-turned-PM. I read the code before I write the spec, design the
              eval before I pick the model, and own the outcome long after launch.
            </p>

            <div className="fade-in-up mt-6 flex flex-wrap gap-2">
              {profileChips.map(({ icon: Icon, text }) => (
                <span
                  key={text}
                  className="inline-flex items-center gap-1.5 rounded-full border hairline bg-card px-3 py-1.5 text-xs text-foreground/80"
                >
                  <Icon className="h-3.5 w-3.5 text-accent" strokeWidth={1.75} />
                  {text}
                </span>
              ))}
            </div>

            <div className="fade-in-up mt-8 flex flex-wrap gap-3">
              <a
                href="#contact"
                className="inline-flex items-center gap-2 rounded-full bg-primary px-5 py-3 text-sm font-medium text-primary-foreground transition-all hover:opacity-90 hover:-translate-y-0.5"
              >
                Get in touch <ArrowUpRight className="h-4 w-4" />
              </a>
              <a
                href="#work"
                className="inline-flex items-center gap-2 rounded-full border hairline px-5 py-3 text-sm font-medium transition-all hover:bg-secondary hover:-translate-y-0.5"
              >
                See what I'm building
              </a>
            </div>
          </div>
          <div className="fade-in-up justify-self-center md:justify-self-end">
            <div className="relative">
              <div className="absolute inset-0 -z-10 rounded-full bg-accent/20 blur-2xl animate-pulse" />
              <svg className="absolute -right-3 -top-3 h-10 w-10 text-accent/70" viewBox="0 0 40 40" fill="none" stroke="currentColor" strokeWidth="1.25" aria-hidden>
                <path d="M20 4 L23 17 L36 20 L23 23 L20 36 L17 23 L4 20 L17 17 Z" />
              </svg>
              <svg className="absolute -bottom-2 -left-4 h-8 w-8 text-foreground/40 animate-spin" style={{ animationDuration: "18s" }} viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.25" aria-hidden>
                <circle cx="16" cy="16" r="12" strokeDasharray="3 4" />
              </svg>
              <img
                src={keshaPhoto}
                alt="Kesha Kaneria, AI Product Manager"
                className="h-56 w-56 rounded-full object-cover shadow-[0_10px_40px_-10px_hsl(25_20%_12%/0.25)] sm:h-64 sm:w-64"
                loading="eager"
              />
            </div>
          </div>
        </div>

        {/* Hero metrics */}
        <Reveal className="mt-16">
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
            {heroMetrics.map((m, idx) => (
              <Reveal
                key={m.label}
                delay={idx * 80}
                className="rounded-2xl border hairline bg-card p-5 transition-all hover:-translate-y-0.5 hover:border-accent hover:shadow-sm"
              >
                <div className="font-display text-3xl font-medium text-foreground">{m.value}</div>
                <div className="mt-1 text-xs uppercase tracking-wider text-muted-foreground">{m.label}</div>
              </Reveal>
            ))}
          </div>
        </Reveal>
      </section>

      {/* Skills */}
      <section id="skills" className="border-t hairline">
        <div className="mx-auto max-w-5xl px-6 py-20">
          <div className="grid gap-10 md:grid-cols-[200px_1fr]">
            <Reveal><h2 className="font-display text-2xl font-medium">Skills</h2></Reveal>
            <Reveal delay={80}>
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
            </Reveal>
          </div>
        </div>
      </section>

      {/* Experience */}
      <section id="experience" className="border-t hairline">
        <div className="mx-auto max-w-5xl px-6 py-20">
          <div className="grid gap-10 md:grid-cols-[200px_1fr]">
            <Reveal><h2 className="font-display text-2xl font-medium">Experience</h2></Reveal>
            <ol className="space-y-12">
              {experience.map((e, idx) => (
                <Reveal as="li" key={e.role + e.company} delay={idx * 80}>
                  <div className="grid gap-4">
                    <div className="flex flex-wrap items-baseline justify-between gap-2">
                      <h3 className="font-display text-xl font-medium">
                        {e.role} · <span className="text-muted-foreground">{e.company}</span>
                      </h3>
                      <span className="text-sm text-muted-foreground">{e.period}</span>
                    </div>
                    <p className="text-foreground/85 leading-relaxed">{e.summary}</p>
                    <div className="grid gap-3 sm:grid-cols-3">
                      {e.metrics.map((m) => (
                        <div
                          key={m.label}
                          className="rounded-xl border hairline bg-card p-4 transition-all hover:-translate-y-0.5 hover:border-accent hover:bg-accent/5 hover:shadow-sm"
                        >
                          <div className="font-display text-2xl font-medium text-accent">{m.value}</div>
                          <div className="mt-1 text-xs uppercase tracking-wider text-muted-foreground">{m.label}</div>
                        </div>
                      ))}
                    </div>
                    <ul className="mt-1 list-disc space-y-1.5 pl-5 text-muted-foreground">
                      {e.points.map((pt) => (
                        <li key={pt}>{pt}</li>
                      ))}
                    </ul>
                    <div className="flex flex-wrap items-center gap-2 pt-1">
                      <Zap className="h-3.5 w-3.5 text-accent" strokeWidth={1.75} />
                      {e.tech.map((t) => (
                        <span key={t} className="rounded-md bg-secondary px-2 py-1 text-xs text-foreground/70">
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                </Reveal>
              ))}
            </ol>
          </div>
        </div>
      </section>

      {/* Things I'm building */}
      <section id="work" className="border-t hairline">
        <div className="mx-auto max-w-5xl px-6 py-20">
          <div className="grid gap-10 md:grid-cols-[200px_1fr]">
            <Reveal><h2 className="font-display text-2xl font-medium text-balance">My products, things I'm building</h2></Reveal>
            <Reveal delay={80}>
              <div className="space-y-4">
                {projects.map((p) => (
                  <article
                    key={p.title}
                    className="group rounded-2xl border hairline bg-card p-6 transition-all hover:-translate-y-0.5 hover:bg-secondary/60 hover:shadow-sm"
                  >
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <h3 className="font-display text-xl font-medium">{p.title}</h3>
                        <p className="mt-2 max-w-2xl text-muted-foreground leading-relaxed">{p.blurb}</p>
                        <div className="mt-4 flex flex-wrap gap-3">
                          {p.tags.map((t) => (
                            <span key={t} className="text-xs uppercase tracking-wider text-accent">{t}</span>
                          ))}
                        </div>
                      </div>
                      <ArrowUpRight className="h-5 w-5 shrink-0 text-muted-foreground transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-foreground" />
                    </div>
                  </article>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* How I Work */}
      <section id="how" className="border-t hairline">
        <div className="mx-auto max-w-5xl px-6 py-20">
          <div className="grid gap-10 md:grid-cols-[200px_1fr]">
            <Reveal><h2 className="font-display text-2xl font-medium">How I work</h2></Reveal>
            <div className="grid gap-4 sm:grid-cols-2">
              {howIWork.map(({ icon: Icon, title, body }, idx) => (
                <Reveal key={title} delay={idx * 70}>
                  <div className="group h-full rounded-2xl border hairline bg-card p-6 transition-all hover:-translate-y-0.5 hover:border-accent hover:shadow-sm">
                    <Icon className="h-5 w-5 text-accent transition-transform group-hover:scale-110" strokeWidth={1.5} />
                    <h3 className="mt-4 font-display text-lg font-medium">{title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{body}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Education */}
      <section id="education" className="border-t hairline">
        <div className="mx-auto max-w-5xl px-6 py-20">
          <div className="grid gap-10 md:grid-cols-[200px_1fr]">
            <Reveal><h2 className="font-display text-2xl font-medium">Education</h2></Reveal>
            <ul className="space-y-8">
              {education.map((ed, idx) => (
                <Reveal as="li" key={ed.school} delay={idx * 80}>
                  <div className="flex items-start gap-4">
                    <GraduationCap className="mt-1 h-5 w-5 text-accent" strokeWidth={1.5} />
                    <div className="flex-1">
                      <div className="flex flex-wrap items-baseline justify-between gap-2">
                        <h3 className="font-display text-lg font-medium">{ed.school}</h3>
                        <span className="text-sm text-muted-foreground">{ed.period}</span>
                      </div>
                      <p className="mt-1 text-sm text-foreground/80">{ed.degree}</p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Awards */}
      <section className="border-t hairline">
        <div className="mx-auto max-w-5xl px-6 py-20">
          <div className="grid gap-10 md:grid-cols-[200px_1fr]">
            <Reveal><h2 className="font-display text-2xl font-medium">Awards</h2></Reveal>
            <ul className="divide-y hairline">
              {awards.map((a, idx) => (
                <Reveal as="li" key={a.title} delay={idx * 60}>
                  <div className="flex items-start gap-4 py-5">
                    <Award className="mt-1 h-5 w-5 shrink-0 text-accent" strokeWidth={1.5} />
                    <p className="flex-1 text-sm text-foreground/85">{a.title}</p>
                  </div>
                </Reveal>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Contact */}
      <footer id="contact" className="relative border-t hairline">
        <Sparkles className="absolute right-8 top-8 h-5 w-5 text-accent/60" strokeWidth={1.5} aria-hidden />
        <div className="mx-auto max-w-5xl px-6 py-20">
          <Reveal>
            <h2 className="font-display text-3xl font-light text-balance sm:text-4xl">
              Let's build AI products that ship.
            </h2>
          </Reveal>
          <Reveal delay={80}>
            <p className="mt-4 max-w-xl text-muted-foreground">
              Open to AI PM roles, agentic platform projects and product collaborations.
            </p>
          </Reveal>
          <Reveal delay={160}>
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="https://www.linkedin.com/in/kesha-k-kaneria/"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full border hairline px-5 py-3 text-sm font-medium transition-all hover:bg-secondary hover:-translate-y-0.5"
              >
                <Linkedin className="h-4 w-4" /> LinkedIn
              </a>
              <a
                href="mailto:kesha.kaneria07@gmail.com"
                className="inline-flex items-center gap-2 rounded-full bg-primary px-5 py-3 text-sm font-medium text-primary-foreground transition-all hover:opacity-90 hover:-translate-y-0.5"
              >
                <Mail className="h-4 w-4" /> Email
              </a>
            </div>
          </Reveal>
          <p className="mt-16 text-xs text-muted-foreground">
            © {new Date().getFullYear()} Kesha Kaneria. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
