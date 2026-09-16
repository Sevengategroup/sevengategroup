import { motion } from "motion/react";
import { HugeiconsIcon } from '@hugeicons/react';
import { ArrowUpRight01Icon, FireIcon, FlashIcon, DropletIcon, Building04Icon, MountainIcon } from '@hugeicons/core-free-icons';

type Service = {
  id: string;
  title: string;
  short: string;
  description: string;
  icon: any;
  points: string[];
};

const services: Service[] = [
  {
    id: "gas",
    title: "Gas",
    short: "01",
    description:
      "Upstream, midstream and gas-to-power projects — from processing plants to LNG distribution across West and Southern Africa.",
    icon: FireIcon,
    points: ["Gas processing", "LNG logistics", "Virtual pipelines"],
  },
  {
    id: "power",
    title: "Power",
    short: "02",
    description:
      "Utility-scale generation, transmission and off-grid solutions accelerating electrification and industrial capacity.",
    icon: FlashIcon,
    points: ["Thermal & hybrid IPPs", "Grid infrastructure", "C&I solar"],
  },
  {
    id: "oil",
    title: "Oil",
    short: "03",
    description:
      "Exploration, production and trading partnerships with rigorous HSE and community-first operating standards.",
    icon: DropletIcon,
    points: ["E&P partnerships", "Product trading", "Storage terminals"],
  },
  {
    id: "construction",
    title: "Construction & Infrastructure",
    short: "04",
    description:
      "EPC delivery for civil, industrial and energy infrastructure — designed, financed and built to global benchmarks.",
    icon: Building04Icon,
    points: ["EPC & project mgmt", "Roads & bridges", "Industrial facilities"],
  },
  {
    id: "mining",
    title: "Mining",
    short: "05",
    description:
      "Responsible extraction and processing of critical minerals — feeding the global energy transition from African soil.",
    icon: MountainIcon,
    points: ["Exploration", "Extraction & processing", "Export logistics"],
  },
];

export function ServiceGrid() {
  return (
    <section id="services" className="relative bg-background py-24 sm:py-32">
      <div className="container-x">
        <div className="flex flex-col items-start justify-between gap-8 md:flex-row md:items-end">
          <div className="max-w-2xl">
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-accent"
            >
              <span className="h-px w-8 bg-accent" />
              What we do
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6, delay: 0.05 }}
              className="mt-4 text-balance font-display text-4xl font-semibold tracking-tight text-foreground sm:text-5xl"
            >
              Five integrated sectors.
              <br className="hidden sm:block" />
              <span className="text-foreground/70">One operating standard.</span>
            </motion.h2>
          </div>
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="max-w-md text-base leading-relaxed text-muted-foreground"
          >
            We combine deep sector expertise, disciplined capital and local partnerships
            to deliver assets that outlast the cycle — safely, sustainably, at scale.
          </motion.p>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
          {services.map((s, i) => (
            <ServiceCard key={s.id} service={s} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ServiceCard({ service, index }: { service: Service; index: number }) {
  const Icon = service.icon;
  return (
    <motion.a
      href={`#${service.id}`}
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.55, delay: index * 0.06, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ y: -6 }}
      className="group relative flex flex-col overflow-hidden rounded-none border border-border bg-card p-8 text-foreground shadow-sm transition-shadow hover:shadow-xl"
    >
      <div className="pointer-events-none absolute -right-24 -top-24 h-64 w-64 rounded-full bg-accent/0 blur-3xl transition-all duration-500 group-hover:bg-accent/10" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-accent/40 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

      <div className="flex items-center justify-between">
        <span className="font-display text-xs font-medium tracking-[0.2em] text-muted-foreground">
          {service.short}
        </span>
        <HugeiconsIcon icon={ArrowUpRight01Icon} className="h-5 w-5 text-muted-foreground/60 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-accent" strokeWidth={1.2} />
      </div>

      <div className="mt-10 grid h-12 w-12 place-items-center rounded-none bg-muted ring-1 ring-border transition-colors group-hover:bg-accent/10 group-hover:ring-accent/30">
        <HugeiconsIcon icon={Icon} className="h-6 w-6 text-accent" strokeWidth={1.2} />
      </div>

      <h3 className="mt-6 font-display text-2xl font-semibold text-foreground">
        {service.title}
      </h3>
      <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
        {service.description}
      </p>

      <ul className="mt-6 flex flex-wrap gap-2 pt-6">
        {service.points.map((p) => (
          <li
            key={p}
            className="rounded-full border border-border bg-muted/50 px-3 py-1 text-xs font-medium text-foreground/80"
          >
            {p}
          </li>
        ))}
      </ul>
    </motion.a>
  );
}
