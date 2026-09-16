import { motion } from "motion/react";

const partners = [
  "Partner 1", "Partner 2", "Partner 3", "Partner 4", "Partner 5", "Partner 6"
];

export function Partners() {
  return (
    <section className="w-full bg-background py-16 border-t border-border overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 mb-8 text-center">
        <h3 className="font-display text-2xl font-light text-foreground">Our Partners</h3>
      </div>
      
      <div className="relative w-full flex overflow-hidden">
        <motion.div
          className="flex whitespace-nowrap items-center gap-16"
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            ease: "linear",
            duration: 20,
            repeat: Infinity,
          }}
        >
          {/* Double the array for seamless loop */}
          {[...partners, ...partners].map((partner, index) => (
            <div
              key={`${partner}-${index}`}
              className="px-8 py-4 text-xl font-sans text-muted-foreground font-light tracking-wider opacity-60 hover:opacity-100 transition-opacity"
            >
              {partner}
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
