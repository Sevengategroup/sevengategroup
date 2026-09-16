import { createFileRoute, Link } from '@tanstack/react-router'
import { motion } from "motion/react"
import { ArrowRight } from "lucide-react"
import { Navbar } from "@/components/site/Navbar"
import { Footer } from "@/components/site/Footer"
import { ChatWidget } from "@/components/site/ChatWidget"
import { ServicesNavigation } from "@/components/site/ServicesNavigation"

// Import image
import powerImg from "@/assets/thermal-energy.jpg"

export const Route = createFileRoute('/services/power/thermal-energy')({
  component: ThermalEnergyComponent,
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

function ThermalEnergyComponent() {

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
                Sevengate Group:<br />
                Powering the Future
              </motion.p>

              <motion.h1 variants={fadeInUp} className="font-display text-4xl md:text-5xl lg:text-6xl font-normal text-foreground uppercase tracking-tight mb-8 leading-[1.1]">
                Thermal &<br />
                Green Energy
              </motion.h1>

              <motion.h2 variants={fadeInUp} className="font-display text-lg md:text-xl font-semibold text-foreground uppercase tracking-wide mb-6 leading-relaxed">
                Integrated Power Solutions For A<br />
                Resilient Energy Future
              </motion.h2>

              <div className="flex flex-col gap-6 text-muted-foreground font-light leading-relaxed mb-16">
                <motion.p variants={fadeInUp}>
                  We deliver comprehensive power generation solutions that meet evolving energy requirements, from conventional thermal plants to innovative renewable technologies, ensuring reliable and sustainable energy for industries and communities.
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
            className="flex flex-col gap-10"
          >
            <motion.div variants={fadeInUp} className="relative w-full aspect-[4/3] overflow-hidden bg-muted">
              <img
                src={powerImg}
                alt="Thermal and Green Energy"
                className="w-full h-full object-cover transition-transform duration-1000 hover:scale-105"
              />
            </motion.div>
          </motion.div>

        </div>
      </section>

      {/* Main Content Sections */}
      <section className="pt-8 md:pt-12 pb-16 md:pb-24 container-x max-w-7xl">
        <div className="flex flex-col gap-16 md:gap-24">
          {/* 1. Green Energy */}
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
                We are committed to developing and supporting sustainable energy solutions that contribute to a cleaner and more resilient energy future. Our green energy services leverage renewable technologies such as solar, wind, hydropower, and other sustainable energy sources to provide efficient and dependable alternatives to conventional power generation.
              </p>
              <p>
                We support clients in identifying, developing, and implementing renewable energy solutions that align with their operational requirements and sustainability objectives. Our services can encompass project development, engineering, equipment supply, installation, and technical support, providing a comprehensive approach to renewable energy projects.
              </p>
              <p>
                By combining innovation, engineering expertise, and sustainable practices, we aim to help businesses, industries, and communities improve energy efficiency, reduce their environmental footprint, and achieve greater energy independence. Our goal is to contribute to a future where reliable energy and environmental responsibility work hand in hand.
              </p>
            </div>
          </motion.div>

          <hr className="border-border/50" />

          {/* 2. Thermal Power */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
            className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-16 items-start"
          >
            <div className="md:col-span-4 lg:col-span-3">
              <h2 className="font-display text-3xl md:text-4xl font-semibold text-foreground uppercase tracking-tight">
                Thermal Power
              </h2>
            </div>
            <div className="md:col-span-8 lg:col-span-9 flex flex-col gap-6 text-muted-foreground font-light leading-relaxed md:text-lg">
              <p>

              </p>
              <p>
                Sevengate Group is a trusted technical services and OEM equipment partner for generation companies (GENCOs) operating thermal and gas-fired power plants across Africa. In a sector where every hour of downtime has significant financial and social consequences, we provide the specialised expertise, genuine parts, and maintenance support that power generators need to keep their plants running reliably and efficiently
              </p>
              <p>
                With a strong understanding of the energy and infrastructure landscape, we work with clients and industry partners to develop practical thermal power solutions that support business growth, industrial productivity, and reliable energy supply.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* What we deliver Section */}
      <section className="py-16 md:py-24 container-x max-w-7xl">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="flex flex-col gap-12"
        >
          <motion.div variants={fadeInUp} className="max-w-3xl mx-auto text-center flex flex-col items-center mb-4">
            <div className="w-16 h-[2px] bg-accent mb-6" />
            <h2 className="font-display text-4xl md:text-5xl font-black text-foreground uppercase tracking-tight mb-6">
              What We Deliver
            </h2>
          </motion.div>

          <motion.div variants={fadeInUp} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="flex flex-col gap-4 border border-border p-8 hover:bg-muted/10 transition-colors h-full">
              <h3 className="font-display text-xl font-semibold text-foreground uppercase">OEM Parts & Equipment Supply</h3>
              <p className="text-muted-foreground font-light leading-relaxed flex-grow">
                We supply original, manufacturer-certified OEM parts and equipment for thermal power plants to protect your long-term asset integrity.
              </p>
              <div className="mt-4">
                <Link 
                  to="/services/details/$slug" 
                  params={{ slug: "oem-parts-equipment" }} 
                  className="inline-flex items-center gap-2 text-accent font-semibold uppercase tracking-widest text-xs hover:text-accent/80 transition-colors group"
                >
                  Read More
                  <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            </div>

            <div className="flex flex-col gap-4 border border-border p-8 hover:bg-muted/10 transition-colors h-full">
              <h3 className="font-display text-xl font-semibold text-foreground uppercase">Plant Operations & Maintenance</h3>
              <p className="text-muted-foreground font-light leading-relaxed flex-grow">
                Comprehensive operations and maintenance services for thermal power generating facilities to minimise generation losses.
              </p>
              <div className="mt-4">
                <Link 
                  to="/services/details/$slug" 
                  params={{ slug: "plant-operations-maintenance" }} 
                  className="inline-flex items-center gap-2 text-accent font-semibold uppercase tracking-widest text-xs hover:text-accent/80 transition-colors group"
                >
                  Read More
                  <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            </div>

            <div className="flex flex-col gap-4 border border-border p-8 hover:bg-muted/10 transition-colors h-full">
              <h3 className="font-display text-xl font-semibold text-foreground uppercase">Turbine & Generator Services</h3>
              <p className="text-muted-foreground font-light leading-relaxed flex-grow">
                Specialised inspection, overhaul, and repair services for gas turbines, steam turbines, and generators.
              </p>
              <div className="mt-4">
                <Link 
                  to="/services/details/$slug" 
                  params={{ slug: "turbine-generator-services" }} 
                  className="inline-flex items-center gap-2 text-accent font-semibold uppercase tracking-widest text-xs hover:text-accent/80 transition-colors group"
                >
                  Read More
                  <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            </div>

            <div className="flex flex-col gap-4 border border-border p-8 hover:bg-muted/10 transition-colors h-full">
              <h3 className="font-display text-xl font-semibold text-foreground uppercase">Electrical & Instrumentation</h3>
              <p className="text-muted-foreground font-light leading-relaxed flex-grow">
                E&I services across the full range of power plant systems, including switchgear, transformers, and control systems.
              </p>
              <div className="mt-4">
                <Link 
                  to="/services/details/$slug" 
                  params={{ slug: "electrical-instrumentation" }} 
                  className="inline-flex items-center gap-2 text-accent font-semibold uppercase tracking-widest text-xs hover:text-accent/80 transition-colors group"
                >
                  Read More
                  <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            </div>

            <div className="flex flex-col gap-4 border border-border p-8 hover:bg-muted/10 transition-colors h-full">
              <h3 className="font-display text-xl font-semibold text-foreground uppercase">Balance of Plant (BOP) Services</h3>
              <p className="text-muted-foreground font-light leading-relaxed flex-grow">
                Maintenance and support services for the full balance of plant, ensuring every supporting system is properly maintained and reliable.
              </p>
              <div className="mt-4">
                <Link 
                  to="/services/details/$slug" 
                  params={{ slug: "balance-of-plant" }} 
                  className="inline-flex items-center gap-2 text-accent font-semibold uppercase tracking-widest text-xs hover:text-accent/80 transition-colors group"
                >
                  Read More
                  <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </section>

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
            Looking to Develop an Energy Project?
          </h2>
          <p className="text-muted-foreground leading-relaxed font-light mb-10 text-lg">
            Whether you are expanding thermal capabilities or transitioning to green energy solutions, Sevengate Group has the engineering expertise to support your goals.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center justify-center bg-accent text-white px-8 py-4 text-sm font-semibold tracking-widest uppercase transition-transform hover:-translate-y-1 hover:shadow-xl shadow-accent/20"
          >
            Discuss Your Energy Needs
          </Link>
        </motion.div>
      </section>

      <Footer />
      <ChatWidget />
    </main>
  )
}
