import { motion, Variants } from "motion/react";

const stats = [
  { value: "20+", label: "Years in Operation" },
  { value: "30+", label: "Years Average. Staff Experience" },
  { value: "5", label: "Industry Sectors Served" },
];

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.1,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } },
};

export function KeyStatistics() {
  return (
    <section className="w-full bg-background pb-20 md:pb-32 pt-10 relative">
      <div className="mx-auto max-w-6xl px-6 lg:px-12 relative z-10">

        {/* Section Header */}
        <div className="mx-auto max-w-7xl px-6 lg:px-12">
          <div className="mb-6 md:mb-10 text-center">
            <h2 className="font-display text-4xl font-light text-foreground uppercase tracking-widest">
              Key Statistics
            </h2>
            <div className="mx-auto mt-4 h-px w-16 bg-accent" />
          </div>
        </div>

        {/* Stats Container */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="relative grid grid-cols-1 md:grid-cols-3 bg-slate-950 rounded-3xl border border-slate-800 overflow-hidden shadow-2xl"
        >
          {/* Subtle Background Glows */}
          <div className="absolute top-0 left-1/4 w-64 h-64 bg-primary/10 rounded-full blur-[100px] pointer-events-none" />
          <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-primary/5 rounded-full blur-[100px] pointer-events-none" />

          {stats.map((stat, index) => (
            <motion.div
              variants={itemVariants}
              key={index}
              className={`flex flex-col items-center justify-center p-14 text-center relative z-10
                ${index !== stats.length - 1 ? 'md:after:content-[""] md:after:absolute md:after:right-0 md:after:top-1/4 md:after:bottom-1/4 md:after:w-px md:after:bg-slate-800 border-b border-slate-800 md:border-b-0' : ''}
              `}
            >
              <div className="font-display text-6xl md:text-7xl font-light mb-4 bg-gradient-to-br from-white via-white/90 to-white/50 bg-clip-text text-transparent tracking-tight">
                {stat.value}
              </div>
              <div className="font-sans text-sm md:text-base font-medium text-slate-400 tracking-wider max-w-[200px] uppercase">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
