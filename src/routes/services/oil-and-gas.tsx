import { createFileRoute, Link } from '@tanstack/react-router'
import { motion } from "motion/react"
import { ArrowRight } from "lucide-react"
import { Navbar } from "@/components/site/Navbar"
import { Footer } from "@/components/site/Footer"
import { ChatWidget } from "@/components/site/ChatWidget"
import { ServicesNavigation } from "@/components/site/ServicesNavigation"

// Import image
import oilGasImg from "@/assets/oil and gas.webp"

export const Route = createFileRoute('/services/oil-and-gas')({
  component: OilAndGasComponent,
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

function OilAndGasComponent() {

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
                Full Value Chain Coverage
              </motion.p>

              <motion.h1 variants={fadeInUp} className="font-display text-4xl md:text-5xl lg:text-6xl font-normal text-foreground uppercase tracking-tight mb-8 leading-[1.1]">
                Oil & Gas<br />
                Services
              </motion.h1>

              <motion.h2 variants={fadeInUp} className="font-display text-lg md:text-xl font-semibold text-foreground uppercase tracking-wide mb-6 leading-relaxed">
                Serving Africa's Oil And Gas Industry From Wellhead To End-User
              </motion.h2>

              <div className="flex flex-col gap-6 text-muted-foreground font-light leading-relaxed mb-16">
                <motion.p variants={fadeInUp}>
                  We provide comprehensive industrial gas solutions that support critical operations, and deliver high-quality manufacturing and distribution solutions built on a commitment to quality, innovation, and operational excellence.
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
                src={oilGasImg}
                alt="Oil and gas operations"
                className="w-full h-full object-cover transition-transform duration-1000 hover:scale-105"
              />
            </motion.div>
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
              <h3 className="font-display text-5xl md:text-6xl font-normal text-white mb-3">16+</h3>
              <p className="font-sans text-white/70 font-light text-sm tracking-wide">Years In Oil & Gas</p>
            </motion.div>
            <motion.div variants={fadeInUp} className="flex flex-col items-center justify-center py-8 md:py-0 text-center">
              <h3 className="font-display text-5xl md:text-6xl font-normal text-accent mb-3">30+</h3>
              <p className="font-sans text-white/70 font-light text-sm tracking-wide">Years Avg. Team Experience</p>
            </motion.div>
            <motion.div variants={fadeInUp} className="flex flex-col items-center justify-center py-8 md:py-0 text-center">
              <h3 className="font-display text-5xl md:text-6xl font-normal text-white mb-3">3</h3>
              <p className="font-sans text-white/70 font-light text-sm tracking-wide">Value Chain Segments Served</p>
            </motion.div>
          </motion.div>
        </div>
      </section> */}

      {/* Value Chain Coverage & Black Box */}
      <section className="py-16 md:py-24 container-x max-w-7xl">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="flex flex-col gap-12"
        >
          <div className="max-w-3xl">
            <motion.p variants={fadeInUp} className="text-sm font-semibold tracking-[0.1em] text-accent uppercase mb-2">
              Value Chain Coverage
            </motion.p>
            <motion.h2 variants={fadeInUp} className="font-display text-3xl md:text-4xl font-semibold text-foreground uppercase tracking-tight mb-6">
              Upstream, Midstream & Downstream
            </motion.h2>
            <motion.p variants={fadeInUp} className="text-muted-foreground font-light leading-relaxed">
              Sevengate Group’s capabilities span all three segments of the oil and gas value chain, making us a versatile and comprehensive partner for independent operators with diverse asset portfolios.
            </motion.p>
          </div>

          <motion.div variants={fadeInUp} className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="flex flex-col gap-4 border border-border p-8 hover:bg-muted/10 transition-colors h-full">
              <h3 className="font-display text-xl font-semibold text-foreground uppercase">Upstream</h3>
              <p className="text-muted-foreground font-light leading-relaxed flex-grow">
                Supporting exploration and production operations with OEM equipment supply, technical services, and maintenance solutions that maximise production uptime and asset integrity.
              </p>
              <div className="mt-4">
                <Link 
                  to="/services/details/$slug" 
                  params={{ slug: "upstream" }} 
                  className="inline-flex items-center gap-2 text-accent font-semibold uppercase tracking-widest text-xs hover:text-accent/80 transition-colors group"
                >
                  Read More
                  <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            </div>
            <div className="flex flex-col gap-4 border border-border p-8 hover:bg-muted/10 transition-colors h-full">
              <h3 className="font-display text-xl font-semibold text-foreground uppercase">Midstream</h3>
              <p className="text-muted-foreground font-light leading-relaxed flex-grow">
                Providing pipeline services, procurement support, and technical expertise to operators managing transportation, storage, and processing infrastructure.
              </p>
              <div className="mt-4">
                <Link 
                  to="/services/details/$slug" 
                  params={{ slug: "midstream" }} 
                  className="inline-flex items-center gap-2 text-accent font-semibold uppercase tracking-widest text-xs hover:text-accent/80 transition-colors group"
                >
                  Read More
                  <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            </div>
            <div className="flex flex-col gap-4 border border-border p-8 hover:bg-muted/10 transition-colors h-full">
              <h3 className="font-display text-xl font-semibold text-foreground uppercase">Downstream</h3>
              <p className="text-muted-foreground font-light leading-relaxed flex-grow">
                Delivering inspection, maintenance, and equipment supply services to refining and distribution facilities, ensuring regulatory compliance and operational continuity.
              </p>
              <div className="mt-4">
                <Link 
                  to="/services/details/$slug" 
                  params={{ slug: "downstream" }} 
                  className="inline-flex items-center gap-2 text-accent font-semibold uppercase tracking-widest text-xs hover:text-accent/80 transition-colors group"
                >
                  Read More
                  <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            </div>
          </motion.div>

          <motion.div variants={fadeInUp} className="mt-8">
            <div className="bg-foreground p-8 md:p-12 lg:p-16 flex flex-col gap-8 items-center text-center">
              <p className="text-accent text-xs font-semibold tracking-[0.3em] uppercase">
                Why Choose Sevengate
              </p>
              <div className="bg-white/5 border border-white/10 p-8 md:p-12 w-full">
                <p className="font-display text-xl md:text-2xl lg:text-3xl text-white font-light italic leading-relaxed">
                  "We bring international standards and OEM-certified equipment to every oil and gas engagement backed by 16 years of African industry experience."
                </p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </section>

      {/* Other Services Navigation */}
      <ServicesNavigation currentPath="/services/oil-and-gas" />

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
            Looking For A Reliable Oil And Gas Services Partner In Africa?
          </h2>
          <p className="text-muted-foreground leading-relaxed font-light mb-10 text-lg">
            Whether you need OEM parts, maintenance support, technical consulting, or full procurement and logistics management, Sevengate Group has the expertise and the network to deliver.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center justify-center bg-accent text-white px-8 py-4 text-sm font-semibold tracking-widest uppercase transition-transform hover:-translate-y-1 hover:shadow-xl shadow-accent/20"
          >
            Request A Consultation
          </Link>
        </motion.div>
      </section>

      <Footer />
      <ChatWidget />
    </main>
  )
}
