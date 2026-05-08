import { Linkedin, Mail, ArrowUpRight, Award, GraduationCap, Sparkles, Compass, Rocket, Target, Layers, LineChart, Code2, Cpu, Workflow, Zap, Brain } from "lucide-react";
import keshaPhoto from "@/assets/kesha.jpeg";
import { Reveal } from "@/components/Reveal";
import { RotatingWord } from "@/components/RotatingWord";
import { Badge } from "@/components/ui/badge";

const rotatingRoles = ["Builder", "Strategist", "0→1 Operator", "Tech-native PM"];

const heroMetrics = [
  { value: "4.5+ yrs", label: "in Product" },
  { value: "10+", label: "products shipped 0→1" },
  { value: "$9.8M", label: "business impact" },
  { value: "50K+", label: "users impacted" },
];

const quickProfile = {
  role: "AI Product Manager, Techolution",
  education: "B.Tech Computer Science and Engineering (Cybersecurity) + PGDM, XLRI Jamshedpur",
  focus: "LLM Products, Agentic AI, RAG Systems, Enterprise AI at Scale",
  location: "Hyderabad, India"
};

const profileChips = [
  { icon: Code2, text: "B.Tech CSE" },
  { icon: GraduationCap, text: "MBA, XLRI Jamshedpur" },
  { icon: Cpu, text: "LLM & Agents" },
  { icon: Workflow, text: "0→1 builder" },
];

const experience = [
  {
    company: "Techolution",
    role: "AI Product Manager",
    period: "January 2024 – Present",
    products: "Sales Genius · Triage AI · Ana (American Cancer Society) · Codebase Insights · Appmod AI · RLEF · Doorbot · AI Hand",
    ownership: [
      "Full product strategy for an LLM-powered pre-sales platform serving 70 enterprise deals annually",
      "Designed RAG pipelines grounding outputs in verified enterprise data, saving ~$4K per proposal in SDR rework",
      "Built citation-grounded reasoning layer with gap detection across all agents, dropping hallucination rate from 30% to 5% and human escalations by 80%",
      "Grew Codebase Insights DAU to 300 developers by shipping 6 agentic features directly from user research",
      "Launched Appmod AI for 300+ engineers, cutting time-to-resolution by 90%",
      "Delivered AI search and recommendation system handling 270K+ queries and 300K+ interactions",
      "Established weekly release cadence across 12 concurrent AI products, improving time-to-market by 3x",
      "Ran AI feedback pipeline that improved proposal quality 75%, recommendation accuracy 50%, and cut user corrections 80%"
    ],
    impact: [
      { label: "Annual cost savings", value: "$9.8M" },
      { label: "Enterprise deals/year", value: "70" },
      { label: "Engagement uplift", value: "90%" },
      { label: "Upsell revenue increase", value: "40%" },
      { label: "Drop in human escalations", value: "80%" }
    ]
  },
  {
    company: "SuperAlign",
    role: "Associate Product Manager",
    period: "July 2022 – December 2023",
    products: "ML Workflow Platform · Conspicuity Tape Supply Chain Platform · Enterprise Adoption Tracking System",
    ownership: [
      "Introduced data-driven prioritization framework, increasing feature throughput 66% and cutting delays from 4 days to 1",
      "Conducted user interviews with ML engineers to identify friction in model iteration cycles, then redesigned UX to reduce cognitive load",
      "Redesigned ML workflow UX around versioning and feedback loops, improving how frequently engineers could run meaningful model iterations",
      "Designed user feedback loops and adoption tracking that increased enterprise feature adoption 25% within the first quarter",
      "Built 0 to 1 supply chain platform replacing unorganized ledgers, improving operational efficiency 40%"
    ],
    impact: [
      { label: "Throughput increase", value: "66%" },
      { label: "Enterprise adoption uplift", value: "25%" },
      { label: "Operational efficiency gain", value: "40%" },
      { label: "Delivery cycle reduction", value: "4d → 1d" }
    ]
  }
];

const products = [
  { name: "ROI-focused Feature Prioritization", description: "AI assistant for the American Cancer Society" },
  { name: "ResumeAI", description: "LLM-powered pre-sales platform for enterprise deals" },
  { name: "Portfolio", description: "Automated support ticket classification and routing" },
];

const howIbuild = [
  {
    category: "Product Thinking",
    points: [
      "I interview users, map friction, and separate what people say from what they actually need",
      "I designed eval metrics for AI output (deal velocity, win rate, accuracy) before most teams had a framework for it",
      "My cybersecurity and CS background means I understand risk at the system level, not just the surface level"
    ],
    icon: Brain
  },
  {
    category: "Strategy",
    points: [
      "I've prioritized across 12 concurrent products without letting any of them drift",
      "I know what to say no to and why, backed by data not instinct alone",
      "I align product roadmaps to business outcomes that CFOs and CTOs can both read"
    ],
    icon: Target
  },
  {
    category: "Planning",
    points: [
      "Weekly release cycles across 12 AI products, coordinating cross-functional teams without slippage",
      "I run dependency mapping, risk identification, and milestone sequencing before the sprint starts",
      "Led PMO setup and SOPs across 30 PMs and 22 products for delivery velocity and leadership visibility"
    ],
    icon: Layers
  },
  {
    category: "Execution",
    points: [
      "I own quality in production, not just delivery to staging",
      "I built the hallucination detection layer myself (no hand-off to engineering to \"figure it out\")",
      "I instrument funnels, track drop-offs, and iterate until the number moves"
    ],
    icon: Rocket
  }
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
          <a href="#experience" className="hover:text-foreground transition-colors">Experience</a>
          <a href="#products" className="hover:text-foreground transition-colors">Building</a>
          <a href="#why-me" className="hover:text-foreground transition-colors">How I work</a>
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
                href="#products"
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

      {/* Quick Profile */}
      <section className="border-y hairline bg-secondary/30">
        <div className="mx-auto max-w-5xl px-6 py-10">
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            <div className="space-y-1">
              <div className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground">Current Role</div>
              <div className="text-sm font-medium text-foreground">{quickProfile.role}</div>
            </div>
            <div className="space-y-1">
              <div className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground">Education</div>
              <div className="text-sm font-medium text-foreground">{quickProfile.education}</div>
            </div>
            <div className="space-y-1">
              <div className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground">Focus Areas</div>
              <div className="text-sm font-medium text-foreground">{quickProfile.focus}</div>
            </div>
            <div className="space-y-1">
              <div className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground">Location</div>
              <div className="text-sm font-medium text-foreground">{quickProfile.location}</div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience */}
      <section id="experience" className="border-t hairline bg-secondary/10">
        <div className="mx-auto max-w-5xl px-6 py-20">
          <div className="grid gap-10 md:grid-cols-[200px_1fr]">
            <h2 className="font-display text-2xl font-medium">Experience</h2>
            <div className="space-y-16">
              {experience.map((exp) => (
                <div key={exp.company} className="grid gap-6">
                  <div className="flex flex-wrap items-baseline justify-between gap-2">
                    <h3 className="font-display text-xl font-medium">
                      {exp.role} · <span className="text-muted-foreground">{exp.company}</span>
                    </h3>
                    <span className="text-sm text-muted-foreground">{exp.period}</span>
                  </div>

                  <div className="rounded-xl border hairline bg-card p-4 text-xs italic text-muted-foreground">
                    <span className="font-medium non-italic text-foreground mr-2">Products:</span>
                    {exp.products}
                  </div>

                  <ul className="list-disc space-y-2 pl-5 text-sm text-muted-foreground leading-relaxed">
                    {exp.ownership.map((pt, i) => (
                      <li key={i}>{pt}</li>
                    ))}
                  </ul>

                  <div className="grid gap-3 sm:grid-cols-3 lg:grid-cols-5">
                    {exp.impact.map((stat, i) => (
                      <div key={i} className="rounded-lg border hairline bg-card p-3 text-center transition-colors hover:border-accent/30">
                        <div className="text-lg font-medium text-accent">{stat.value}</div>
                        <div className="text-[10px] uppercase tracking-wider text-muted-foreground mt-1">{stat.label}</div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Products */}
      <section id="products" className="border-t hairline">
        <div className="mx-auto max-w-5xl px-6 py-20">
          <div className="grid gap-10 md:grid-cols-[200px_1fr]">
            <div className="space-y-4">
              <h2 className="font-display text-2xl font-medium">AI I've Shipped</h2>
              <p className="text-sm text-muted-foreground">Every product below went to production under my ownership.</p>
            </div>
            <div className="space-y-6">
              <div className="flex flex-wrap gap-2">
                {products.map((p) => (
                  <Badge key={p.name} variant="outline" className="rounded-full border-hairline font-normal text-xs text-muted-foreground">
                    {p.name}
                  </Badge>
                ))}
              </div>
              <div className="grid gap-4 sm:grid-cols-2">
                {products.map((p, i) => (
                  <div key={i} className="group rounded-2xl border hairline bg-card p-6 transition-all hover:-translate-y-0.5 hover:border-accent hover:shadow-sm">
                    <div className="flex items-start justify-between">
                      <h3 className="font-display text-lg font-medium">{p.name}</h3>
                      <ArrowUpRight className="h-4 w-4 text-muted-foreground group-hover:text-accent transition-colors" />
                    </div>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{p.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Me */}
      <section id="why-me" className="border-t hairline bg-secondary/10">
        <div className="mx-auto max-w-5xl px-6 py-20">
          <div className="grid gap-10 md:grid-cols-[200px_1fr]">
            <h2 className="font-display text-2xl font-medium">How I Build</h2>
            <div className="grid gap-8 sm:grid-cols-2">
              {howIbuild.map((item, i) => {
                const Icon = item.icon;
                return (
                  <div key={i} className="space-y-4">
                    <div className="flex items-center gap-3">
                      <Icon className="h-5 w-5 text-accent" strokeWidth={1.5} />
                      <h3 className="font-display text-lg font-medium">{item.category}</h3>
                    </div>
                    <ul className="space-y-3">
                      {item.points.map((p, j) => (
                        <li key={j} className="flex items-start gap-2 text-sm text-muted-foreground leading-relaxed">
                          <span className="mt-1.5 h-1 w-1 rounded-full bg-accent shrink-0" />
                          <span>{p}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                );
              })}
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
