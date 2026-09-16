import { motion } from "motion/react";
import { Link } from "@tanstack/react-router";
import { HugeiconsIcon } from "@hugeicons/react";
import { ArrowRight01Icon } from "@hugeicons/core-free-icons";

import powerImg from "@/assets/power.webp";

const sections = [
  {
    title: "Technology",
    image: "/hero section 3.jpg",
    link: "/",
    desc: "",
  },
  {
    title: "Energy",
    image: powerImg,
    link: "/services/power",
    desc: "Sustainable generation and grid development.",
  },
  {
    title: "Mining",
    image: "/hero section 3.jpg",
    link: "/services/mining",
    desc: "Responsible mining and resource extraction.",
  },

  {
    title: "Infrastructure",
    image: "/hero section 1.jpg",
    link: "/services/construction",
    desc: "Building the physical backbone of tomorrow.",
  },




];

const carouselItems = [...sections, ...sections, ...sections, ...sections];

export function NavigationCards() {
  return (
    <section className="w-full bg-background py-8 md:py-12 overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        <div className="mb-6 md:mb-10 text-center">
          <h2 className="font-display text-4xl font-light text-foreground uppercase tracking-widest">
            Our Sectors
          </h2>
          <div className="mx-auto mt-4 h-px w-16 bg-accent" />
        </div>
      </div>

      <div className="relative w-full flex overflow-hidden">
        <motion.div
          className="flex whitespace-nowrap w-max"
          animate={{ x: ["0%", "-25%"] }}
          transition={{
            ease: "linear",
            duration: 25,
            repeat: Infinity,
          }}
        >
          {carouselItems.map((section, index) => (
            <div key={`${section.title}-${index}`} className="flex items-center">
              <Link
                to={section.link}
                className="group flex items-center px-8 md:px-16"
              >
                <h3 className="font-display text-4xl font-light text-foreground tracking-wide whitespace-nowrap transition-all duration-700 group-hover:text-accent group-hover:-translate-y-2 border-b border-muted-foreground/40 group-hover:border-accent pb-1">
                  {section.title}
                </h3>
                <span className="ml-8 md:ml-16 w-2.5 h-2.5 md:w-3 md:h-3 bg-muted-foreground/30 transition-colors duration-700 group-hover:bg-accent/50 block"></span>
              </Link>
            </div>
          ))}
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8 }}
        className="mx-auto max-w-4xl px-6 lg:px-12 mt-20 md:mt-32 text-center"
      >
        <h2 className="font-display text-3xl md:text-4xl font-light text-foreground mb-8">
          A trusted partner for Africa’s most critical industries
        </h2>
        <div className="space-y-6 text-muted-foreground leading-relaxed font-light text-base md:text-lg">
          <p>
            For over two decades, Sevengate Group has established itself as a leading force in Africa’s energy, construction and infrastructure landscape. Operating across five core sectors – oil and gas, power, construction and infrastructure, solid minerals mining and technology services – we deliver solutions that combine deep local understanding with international technical excellence.
          </p>
          <p>
            Through strategic technical partnerships with industry-leading organisations in Europe, Asia and beyond, we bring world-class expertise to every project. Our team of seasoned professionals, many with over 30 years of sector-specific experience, ensures that every project is executed to the highest standards of quality, safety, and efficiency.
          </p>
        </div>
      </motion.div>
    </section>
  );
}
