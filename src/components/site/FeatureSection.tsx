import { motion } from "motion/react";
import { HugeiconsIcon } from '@hugeicons/react';
import { Shield02Icon, Leaf01Icon, UserGroupIcon, EarthIcon } from '@hugeicons/core-free-icons';
import illustrationImg from "@/assets/illustration.png";

const pillars = [
  {
    icon: Shield02Icon,
    title: "Uncompromising safety",
    body: "Zero-harm operating culture with international HSE certification across every project site.",
  },
  {
    icon: Leaf01Icon,
    title: "Sustainable by design",
    body: "Emissions-aware planning, water stewardship and biodiversity safeguards embedded from day one.",
  },
  {
    icon: UserGroupIcon,
    title: "Local partnerships",
    body: "Indigenous procurement, skills transfer and community trusts that outlive our project timelines.",
  },
  {
    icon: EarthIcon,
    title: "Pan-African reach",
    body: "Operating footprint spanning West, East and Southern Africa with global capital relationships.",
  },
];

export function FeatureSection() {
  return (
    <section id="about" className="relative overflow-hidden bg-background py-24 sm:py-32">
      <div className="container-x grid gap-16 lg:grid-cols-2 lg:items-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
        >
          <p className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-accent">
            <span className="h-px w-8 bg-accent" /> Why Sevengate
          </p>
          <h2 className="mt-4 text-balance font-display text-4xl font-semibold tracking-tight text-foreground sm:text-5xl">
            A single, disciplined operator across the value chain.
          </h2>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-muted-foreground">
            From resource to end user, we integrate exploration, engineering,
            construction and operations — reducing execution risk and creating
            lasting value for partners, governments and the communities where
            we work.
          </p>

          <dl className="mt-10 grid gap-4 sm:grid-cols-2">
            {pillars.map((p, i) => (
              <motion.div
                key={p.title}
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: i * 0.07 }}
                className="group rounded-none border border-border bg-card p-5 transition-all hover:-translate-y-0.5 hover:border-accent/40 hover:shadow-lg"
              >
                <div className="grid h-10 w-10 place-items-center rounded-none bg-muted text-accent transition-colors group-hover:bg-accent group-hover:text-white">
                  <HugeiconsIcon icon={p.icon} className="h-5 w-5" strokeWidth={1.2} />
                </div>
                <dt className="mt-4 font-display text-base font-semibold text-foreground">
                  {p.title}
                </dt>
                <dd className="mt-1.5 text-sm leading-relaxed text-muted-foreground">
                  {p.body}
                </dd>
              </motion.div>
            ))}
          </dl>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7 }}
          className="relative"
          id="impact"
        >
          <div className="relative overflow-hidden rounded-none bg-card border border-border text-card-foreground shadow-lg">
            {/* Illustration Section */}
            <div className="relative h-64 w-full sm:h-80 overflow-hidden bg-gradient-to-br from-accent/10 to-card/50">
              <img
                src={illustrationImg}
                alt="Sevengate Operations Illustration"
                width={800}
                height={600}
                loading="lazy"
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-1000 hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-card via-card/20 to-transparent" />
            </div>

            {/* Content Section */}
            <div className="relative p-10 pt-2">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">
                Impact snapshot
              </p>
              <p className="mt-6 font-display text-3xl font-semibold leading-tight sm:text-4xl">
                "Building the infrastructure that turns Africa's potential into
                <span className="text-accent"> measurable prosperity</span>."
              </p>

              <div className="mt-10 grid grid-cols-3 gap-6 border-t border-border pt-8">
                {[
                  { v: "8,400+", l: "Jobs sustained" },
                  { v: "42", l: "Communities partnered" },
                  { v: "1.6M t", l: "CO₂ avoided" },
                ].map((s) => (
                  <div key={s.l}>
                    <p className="font-display text-2xl font-semibold text-foreground sm:text-3xl">
                      {s.v}
                    </p>
                    <p className="mt-1 text-xs text-muted-foreground">{s.l}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
