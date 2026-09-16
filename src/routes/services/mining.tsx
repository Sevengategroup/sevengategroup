import { createFileRoute, Link } from '@tanstack/react-router'
import { motion, AnimatePresence } from "motion/react"
import { useState } from "react"
import { HugeiconsIcon } from '@hugeicons/react'
import { ArrowDown01Icon } from '@hugeicons/core-free-icons'
import { ArrowRight } from 'lucide-react'
import { Navbar } from "@/components/site/Navbar"
import { Footer } from "@/components/site/Footer"
import { ChatWidget } from "@/components/site/ChatWidget"
import { ServicesNavigation } from "@/components/site/ServicesNavigation"

// Import the image directly from assets as requested by the user
import miningImg from "@/assets/solid minerals mining.webp"

export const Route = createFileRoute('/services/mining')({
  component: SolidMineralsComponent,
})

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const focusAreas = [
  { slug: "mine-development", title: "Mine Development & Operations", content: "End-to-end mine development and operational management, applying rigorous engineering standards and sustainable practices to extract value efficiently and safely." },
  { slug: "mineral-processing", title: "Mineral Processing", content: "Advanced processing solutions designed to maximize yield and purity, leveraging state-of-the-art technology to ensure high-grade mineral output for global markets." },
  { slug: "technical-partnerships", title: "Technical Partnerships & Capability Building", content: "Collaborating with leading global technical partners to build local capability, transfer specialized knowledge, and establish world-class mining operations in Nigeria." }
];

function SolidMineralsComponent() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <main className="relative min-h-screen bg-background text-foreground overflow-hidden">
      <Navbar />

      {/* Spacer for fixed navbar */}
      <div className="h-20 md:h-28"></div>

      <section className="pt-8 md:pt-12 pb-12 md:pb-16 container-x max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-start">

          {/* Left Column */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="flex flex-col gap-8"
          >
            <div>
              <motion.p variants={fadeInUp} className="text-sm font-semibold tracking-[0.1em] text-accent uppercase mb-4 leading-relaxed">
                Sevengate Group<br />
                Expanding Into Nigeria's Mining Sector
              </motion.p>

              <motion.h1 variants={fadeInUp} className="font-display text-4xl md:text-5xl lg:text-6xl font-normal text-foreground uppercase tracking-tight mb-8 leading-[1.1]">
                Mining
              </motion.h1>

              <motion.h2 variants={fadeInUp} className="font-display text-lg md:text-xl font-semibold text-foreground uppercase tracking-wide mb-6 leading-relaxed">
                A Strategic Expansion Into Nigeria's Mining Sector
              </motion.h2>

              <div className="flex flex-col gap-6 text-muted-foreground font-light leading-relaxed mb-16">
                <motion.p variants={fadeInUp}>
                  Sevengate Group is expanding into one of Nigeria's most promising and strategically important industries Mining. As Nigeria continues to diversify its economy beyond oil and gas, the country's vast and largely untapped reserves of  Mining present a significant opportunity for investment, development, and value creation.
                </motion.p>
              </div>


            </div>
          </motion.div>

          {/* Right Column */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="flex flex-col gap-10 sticky top-36"
          >
            <motion.div variants={fadeInUp} className="relative w-full aspect-[4/3] overflow-hidden bg-muted">
              <img
                src={miningImg}
                alt="Mining operations"
                className="w-full h-full object-cover transition-transform duration-1000 hover:scale-105"
              />
            </motion.div>
          </motion.div>

        </div>

        {/* Full Width Text Below Grid */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeInUp}
          className="mt-8 text-muted-foreground font-light leading-relaxed"
        >
          <p>
            Building on 16 years of operational excellence across the energy and infrastructure sectors, Sevengate Group is bringing the same commitment to quality, safety, and technical rigour that has defined our work in oil, gas, power, and construction to our new mining operations. We are establishing a credible, professionally managed presence in Nigeria's Mining sector positioned to grow as the industry matures and regulatory frameworks continue to develop.
          </p>
        </motion.div>

        {/* Our Focus Areas List - Centered */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeInUp}
          className="flex flex-col gap-6 max-w-4xl mx-auto mt-16 md:mt-24"
        >
          <div className="text-center">
            <h2 className="font-display text-3xl md:text-4xl font-semibold text-foreground uppercase tracking-tight mb-2">
              Our Focus Areas
            </h2>
            <p className="text-sm font-semibold tracking-[0.1em] text-accent uppercase mb-8">
              Where Sevengate Group Is Building Capability
            </p>
          </div>

          <div className="flex flex-col border-t border-border">
            {focusAreas.map((area, index) => {
              const isOpen = openIndex === index;
              return (
                <div key={index} className="border-b border-border overflow-hidden">
                  <button
                    onClick={() => setOpenIndex(isOpen ? null : index)}
                    className="flex items-center justify-between w-full py-4 md:py-5 px-2 hover:bg-muted/30 transition-colors group"
                  >
                    <span className={`font-sans text-[15px] transition-colors ${isOpen ? 'text-accent font-medium' : 'text-foreground font-light'}`}>
                      {area.title}
                    </span>
                    <span className="shrink-0 ml-4 flex items-center justify-center w-8 h-8">
                      <HugeiconsIcon
                        icon={ArrowDown01Icon}
                        className={`w-4 h-4 transition-transform duration-300 ${isOpen ? 'rotate-180 text-accent' : 'text-muted-foreground group-hover:text-foreground'}`}
                        strokeWidth={1.5}
                      />
                    </span>
                  </button>
                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                      >
                        <div className="px-2 pb-5 text-muted-foreground leading-relaxed font-light text-sm flex flex-col gap-4">
                          <p>{area.content}</p>
                          <div>
                            <Link 
                              to="/services/details/$slug" 
                              params={{ slug: area.slug }} 
                              className="inline-flex items-center gap-2 text-accent font-semibold uppercase tracking-widest text-xs hover:text-accent/80 transition-colors group"
                            >
                              Read More
                              <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
                            </Link>
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </motion.div>
      </section>

      {/* Dark Quote Banner */}
      <section className="bg-foreground py-12 md:py-16">
        <div className="container-x max-w-5xl text-center">
          <motion.p
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
            className="text-white font-sans text-lg md:text-xl font-light italic leading-relaxed"
          >
            Nigeria holds over 40 different Mining resources, including limestone, coal, iron ore, gold, and lithium, many of which remain significantly underexplored and underdeveloped.
          </motion.p>
        </div>
      </section>

      {/* Our Approach */}
      <section className="py-16 md:py-24 container-x max-w-7xl">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="max-w-4xl"
        >
          <motion.p variants={fadeInUp} className="text-sm font-semibold tracking-[0.1em] text-accent uppercase mb-2">
            Our Approach
          </motion.p>
          <motion.h2 variants={fadeInUp} className="font-display text-2xl md:text-3xl font-semibold text-foreground uppercase tracking-tight mb-8">
            How We Are Entering The Sector
          </motion.h2>

          <motion.p variants={fadeInUp} className="text-muted-foreground font-light leading-relaxed mb-6">
            Sevengate Group's expansion into Mining is being approached with the same careful, professional discipline that has characterised our growth across other sectors. We are:
          </motion.p>

          <motion.ul variants={fadeInUp} className="list-disc list-outside ml-5 space-y-4 text-muted-foreground font-light leading-relaxed">
            <li>Conducting thorough technical and commercial assessments of prospective mining opportunities in Nigeria.</li>
            <li>Building a dedicated mining team with the technical expertise and operational experience required to develop and run mining assets professionally.</li>
            <li>Establishing partnerships with experienced international mining operators and equipment suppliers to supplement our in-house capabilities.</li>
            <li>Engaging proactively with Nigerian regulatory authorities and communities to ensure our mining activities are conducted responsibly and in compliance with all applicable laws and regulations.</li>
          </motion.ul>
        </motion.div>
      </section>

      {/* Why Sevengate Group in Mining */}
      <section className="pb-16 md:pb-24 container-x max-w-7xl">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeInUp}
          className="flex flex-col gap-6"
        >
          <p className="text-accent text-sm font-semibold tracking-[0.1em] uppercase">
            Why Sevengate Group In Mining
          </p>

          <div className="bg-foreground p-8 md:p-12 lg:p-16 flex flex-col gap-10">
            <div className="border border-white/10 bg-white/5 p-8 md:p-10">
              <p className="font-display text-lg md:text-xl lg:text-2xl text-white font-light italic leading-relaxed text-center">
                "We are bringing 16 years of African operational excellence, a culture of technical rigour, and the discipline of internationally experienced professionals to Nigeria's Mining sector."
              </p>
            </div>

            <p className="text-white/80 font-light leading-relaxed text-base md:text-lg">
              While our mining operations are at an early stage, our entry into this sector is not speculative. It is a deliberate, strategic decision backed by the same foundations that have made <strong className="font-medium text-white">Sevengate Group</strong> a trusted name in energy and infrastructure across Africa. We invite investors, partners, and prospective clients to engage with us as we grow this important new chapter of the <strong className="font-medium text-white">Sevengate Group</strong> story.
            </p>
          </div>
        </motion.div>
      </section>

      {/* Other Services Navigation */}
      <ServicesNavigation currentPath="/services/mining" />

      {/* CTA Section */}
      <section className="py-24 container-x max-w-7xl">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeInUp}
          className="max-w-3xl"
        >
          <h2 className="font-display text-2xl md:text-3xl font-semibold text-foreground uppercase tracking-tight mb-6">
            Interested In Partnering With Us In Mining?
          </h2>
          <p className="text-muted-foreground leading-relaxed font-light mb-10 text-lg">
            Sevengate Group welcomes conversations with potential investors, technical partners, and stakeholders who share our vision for a professionally developed Nigerian Mining sector.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center justify-center bg-accent text-white px-8 py-4 text-sm font-semibold tracking-widest uppercase transition-transform hover:-translate-y-1 hover:shadow-xl shadow-accent/20"
          >
            Get In Touch
          </Link>
        </motion.div>
      </section>

      <Footer />
      <ChatWidget />
    </main>
  )
}
