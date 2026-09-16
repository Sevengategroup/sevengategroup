import { createFileRoute, Link } from '@tanstack/react-router'
import { motion } from "motion/react"
import { ArrowRight } from "lucide-react"
import { Navbar } from "@/components/site/Navbar"
import { Footer } from "@/components/site/Footer"
import { ChatWidget } from "@/components/site/ChatWidget"
import { ServicesNavigation } from "@/components/site/ServicesNavigation"

// Import image
import powerImg from "@/assets/power.webp"

export const Route = createFileRoute('/services/power/')({
  component: PowerComponent,
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

function PowerComponent() {

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
                Keeping Africa's Lights On
              </motion.p>

              <motion.h1 variants={fadeInUp} className="font-display text-4xl md:text-5xl lg:text-6xl font-normal text-foreground uppercase tracking-tight mb-8 leading-[1.1]">
                Power Sector<br />
                Services
              </motion.h1>

              <motion.h2 variants={fadeInUp} className="font-display text-lg md:text-xl font-semibold text-foreground uppercase tracking-wide mb-6 leading-relaxed">
                Specialist Services For Thermal Power Generation Companies
              </motion.h2>

              <div className="flex flex-col gap-6 text-muted-foreground font-light leading-relaxed mb-16">
                <motion.p variants={fadeInUp}>
                  We provide end-to-end conventional power solutions that ensure reliable electricity generation, and remain committed to delivering innovative renewable energy solutions that promote environmental sustainability and long-term energy resilience.
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
                src={powerImg}
                alt="Power Sector Services"
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
        </motion.div>

      </section>

      {/* Main Content Sections */}
      <section className="pt-8 md:pt-12 pb-16 md:pb-24 container-x max-w-7xl">
        <div className="flex flex-col gap-16 md:gap-24">
          {/* Conventional Power */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
            className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-16 items-start"
          >
            <div className="md:col-span-4 lg:col-span-3">
              <h2 className="font-display text-3xl md:text-4xl font-semibold text-foreground uppercase tracking-tight">
                Conventional Power
              </h2>
            </div>
            <div className="md:col-span-8 lg:col-span-9 flex flex-col gap-6 text-muted-foreground font-light leading-relaxed md:text-lg">
              <p>
                We provide end-to-end conventional power solutions that ensure reliable electricity generation, transmission, and distribution. Our services include engineering, procurement, construction, operation, maintenance, rehabilitation, and optimization of thermal and gas-fired power plants, helping clients achieve maximum operational performance and energy security.
              </p>
              <div className="mt-2">
                <Link 
                  to="/services/details/$slug" 
                  params={{ slug: "conventional-power" }} 
                  className="inline-flex items-center gap-2 text-accent font-semibold uppercase tracking-widest text-sm hover:text-accent/80 transition-colors group"
                >
                  Read More
                  <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            </div>
          </motion.div>

          <hr className="border-border/50" />

          {/* Green Energy */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
            className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-16 items-start"
          >
            <div className="md:col-span-4 lg:col-span-3">
              <h2 className="font-display text-3xl md:text-4xl font-semibold text-foreground uppercase tracking-tight">
                Green Energy
              </h2>
            </div>
            <div className="md:col-span-8 lg:col-span-9 flex flex-col gap-6 text-muted-foreground font-light leading-relaxed md:text-lg">
              <p>
                As the global energy landscape evolves, we remain committed to delivering innovative renewable energy solutions that promote environmental sustainability and long-term energy resilience. Our expertise includes solar photovoltaic systems, hybrid energy solutions, battery energy storage, energy efficiency programs, and other clean energy technologies tailored to residential, commercial, and industrial applications.
              </p>
              <div className="mt-2">
                <Link 
                  to="/services/details/$slug" 
                  params={{ slug: "green-energy" }} 
                  className="inline-flex items-center gap-2 text-accent font-semibold uppercase tracking-widest text-sm hover:text-accent/80 transition-colors group"
                >
                  Read More
                  <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats Banner */}
      {/* <section className="bg-foreground py-16 md:py-20 mt-12">
        <div className="container-x max-w-7xl">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-white/10"
          >
            <motion.div variants={fadeInUp} className="flex flex-col items-center justify-center py-8 md:py-0 text-center">
              <h3 className="font-display text-5xl md:text-6xl font-normal text-white mb-3">GENCOs</h3>
              <p className="font-sans text-white/70 font-light text-sm tracking-wide">Primary Clients</p>
            </motion.div>
            <motion.div variants={fadeInUp} className="flex flex-col items-center justify-center py-8 md:py-0 text-center">
              <h3 className="font-display text-5xl md:text-6xl font-normal text-white mb-3">OEM</h3>
              <p className="font-sans text-white/70 font-light text-sm tracking-wide">Certified Parts & Equipment</p>
            </motion.div>
            <motion.div variants={fadeInUp} className="flex flex-col items-center justify-center py-8 md:py-0 text-center">
              <h3 className="font-display text-5xl md:text-6xl font-normal text-accent mb-3">30+</h3>
              <p className="font-sans text-white/70 font-light text-sm tracking-wide">Years Team Experience</p>
            </motion.div>
          </motion.div>
        </div>
      </section> */}

      {/* Why Choose Sevengate Group in Mining / Power */}
      {/* <section className="py-16 md:py-24 container-x max-w-7xl">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeInUp}
          className="flex flex-col gap-6"
        >
          <p className="text-accent text-sm font-semibold tracking-[0.1em] uppercase">
            Why Choose Sevengate
          </p>
          
          <div className="bg-foreground p-8 md:p-12 lg:p-16 flex flex-col gap-10 items-center text-center">
            <div className="border border-white/10 bg-white/5 p-8 md:p-12 w-full">
              <p className="font-display text-xl md:text-2xl lg:text-3xl text-white font-light italic leading-relaxed">
                "Our ability to source genuine OEM parts, combined with our world-class maintenance capabilities, makes us the partner of choice for GENCOs focused on maximising plant availability and operational lifespan."
              </p>
            </div>
          </div>
        </motion.div>
      </section> */}

      {/* Other Services Navigation */}
      <ServicesNavigation currentPath="/services/power" />

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
            Looking For A Technical Partner To Keep Your Plant Running?
          </h2>
          <p className="text-muted-foreground leading-relaxed font-light mb-10 text-lg">
            Whether you need emergency spare parts, a major turbine overhaul, or routine balance of plant maintenance, Sevengate Group has the expertise to support your operations.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center justify-center bg-accent text-white px-8 py-4 text-sm font-semibold tracking-widest uppercase transition-transform hover:-translate-y-1 hover:shadow-xl shadow-accent/20"
          >
            Speak With Our Power Team
          </Link>
        </motion.div>
      </section>

      <Footer />
      <ChatWidget />
    </main>
  )
}
