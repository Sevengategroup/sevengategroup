import { createFileRoute, Link } from '@tanstack/react-router'
import { motion } from "motion/react"
import { ArrowRight } from "lucide-react"
import { Navbar } from "@/components/site/Navbar"
import { Footer } from "@/components/site/Footer"
import { ChatWidget } from "@/components/site/ChatWidget"
import { ServicesNavigation } from "@/components/site/ServicesNavigation"

// Import images
import oilGasImg from "@/assets/oil and gas.webp"
import powerImg from "@/assets/thermal-energy.jpg"

export const Route = createFileRoute('/services/energy')({
  component: EnergyComponent,
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

function EnergyComponent() {

  return (
    <main className="relative min-h-screen bg-background text-foreground overflow-hidden">
      <Navbar />

      {/* Spacer for fixed navbar */}
      <div className="h-20 md:h-28"></div>

      {/* Header Section */}
      <section className="pt-8 md:pt-12 pb-12 md:pb-16 container-x max-w-7xl">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="flex flex-col gap-6"
        >
          <motion.p variants={fadeInUp} className="text-sm font-semibold tracking-[0.1em] text-accent uppercase mb-2 leading-relaxed">
            Sevengate Group
          </motion.p>
          <motion.h1 variants={fadeInUp} className="font-display text-4xl md:text-5xl lg:text-6xl font-normal text-foreground uppercase tracking-tight mb-4 leading-[1.1]">
            Energy Services
          </motion.h1>
          <motion.p variants={fadeInUp} className="text-muted-foreground font-light leading-relaxed max-w-3xl text-lg">
            We provide comprehensive industrial solutions across the energy sector, supporting critical operations with high-quality services built on a commitment to innovation and operational excellence.
          </motion.p>
        </motion.div>
      </section>

      {/* Oil & Gas Section */}
      <section className="py-12 md:py-16 container-x max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="flex flex-col gap-6"
          >
            <motion.h2 variants={fadeInUp} className="font-display text-3xl md:text-4xl font-semibold text-foreground uppercase tracking-tight">
              Oil & Gas
            </motion.h2>
            <motion.p variants={fadeInUp} className="text-muted-foreground font-light leading-relaxed">
              Serving Africa's oil and gas industry from wellhead to end-user. We provide comprehensive industrial gas solutions that support critical operations, and deliver high-quality manufacturing and distribution solutions built on a commitment to quality, innovation, and operational excellence.
            </motion.p>
            <motion.p variants={fadeInUp} className="text-muted-foreground font-light leading-relaxed">
              Our capabilities span all three segments of the oil and gas value chain—Upstream, Midstream & Downstream—making us a versatile and comprehensive partner for operators with diverse asset portfolios...
            </motion.p>
            <motion.div variants={fadeInUp} className="mt-4">
              <Link
                to="/services/oil-and-gas"
                className="inline-flex items-center gap-2 bg-accent text-white px-6 py-3 text-sm font-semibold tracking-widest uppercase transition-transform hover:-translate-y-1 hover:shadow-xl shadow-accent/20"
              >
                Read More
                <ArrowRight size={16} />
              </Link>
            </motion.div>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
            className="relative w-full aspect-[4/3] overflow-hidden bg-muted"
          >
            <img
              src={oilGasImg}
              alt="Oil and gas operations"
              className="w-full h-full object-cover transition-transform duration-1000 hover:scale-105"
            />
          </motion.div>
        </div>
      </section>

      <hr className="border-border/50 max-w-7xl mx-auto" />

      {/* Thermal & Green Energy Section */}
      <section className="py-12 md:py-16 container-x max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
            className="relative w-full aspect-[4/3] overflow-hidden bg-muted order-2 lg:order-1"
          >
            <img
              src={powerImg}
              alt="Thermal and Green Energy"
              className="w-full h-full object-cover transition-transform duration-1000 hover:scale-105"
            />
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="flex flex-col gap-6 order-1 lg:order-2"
          >

            <motion.h1 variants={fadeInUp} className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-[#54A6EA] uppercase tracking-tight">
              Power
            </motion.h1>
            <motion.h2 variants={fadeInUp} className="font-display text-2xl md:text-3xl font-semibold text-foreground uppercase tracking-tight mt-2">
              Thermal & Green Energy
            </motion.h2>
            <motion.p variants={fadeInUp} className="text-muted-foreground font-light leading-relaxed">
              Integrated power solutions for a resilient energy future. We deliver comprehensive power generation solutions that meet evolving energy requirements, from conventional thermal plants to innovative renewable technologies, ensuring reliable and sustainable energy.
            </motion.p>
            <motion.p variants={fadeInUp} className="text-muted-foreground font-light leading-relaxed">
              Sevengate Group is a trusted technical services and OEM equipment partner for generation companies (GENCOs) operating thermal and gas-fired power plants across Africa...
            </motion.p>
            <motion.div variants={fadeInUp} className="mt-4">
              <Link
                to="/services/power/thermal-energy"
                className="inline-flex items-center gap-2 bg-accent text-white px-6 py-3 text-sm font-semibold tracking-widest uppercase transition-transform hover:-translate-y-1 hover:shadow-xl shadow-accent/20"
              >
                Read More
                <ArrowRight size={16} />
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Other Services Navigation */}
      <ServicesNavigation currentPath="/services/energy" />

      {/* CTA Section */}
      <section className="py-24 container-x max-w-7xl">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeInUp}
          className="max-w-3xl mx-auto text-center"
        >
          <h2 className="font-display text-2xl md:text-3xl font-semibold text-foreground uppercase tracking-tight mb-6">
            Ready to Partner With Us?
          </h2>
          <p className="text-muted-foreground leading-relaxed font-light mb-10 text-lg">
            Discuss your energy needs with our experts and discover how Sevengate Group can power your next project.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center justify-center bg-accent text-white px-8 py-4 text-sm font-semibold tracking-widest uppercase transition-transform hover:-translate-y-1 hover:shadow-xl shadow-accent/20"
          >
            Contact Us
          </Link>
        </motion.div>
      </section>

      <Footer />
      <ChatWidget />
    </main>
  )
}
