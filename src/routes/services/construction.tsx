import { createFileRoute, Link } from '@tanstack/react-router'
import { motion } from "motion/react"
import { ArrowRight } from "lucide-react"
import { Navbar } from "@/components/site/Navbar"
import { Footer } from "@/components/site/Footer"
import { ChatWidget } from "@/components/site/ChatWidget"
import { ServicesNavigation } from "@/components/site/ServicesNavigation"
import { CoverflowCarousel } from "@/components/ui/coverflow-carousel"
import construction from '@/assets/construction.webp'

import construction2 from '@/assets/archive/construction1.jpeg'
import construction3 from '@/assets/archive/construction2.jpeg'
import construction4 from '@/assets/archive/construction3.jpeg'
import construction5 from '@/assets/archive/construction4.jpeg'
import infrastructure from '@/assets/archive/infrastructure.jpeg'
import infrastructure1 from '@/assets/archive/infrastructure1.jpeg'
import infrastructure2 from '@/assets/archive/infrastrucure2.jpeg'



export const Route = createFileRoute('/services/construction')({
  component: ConstructionComponent,
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

function ConstructionComponent() {
  const constructionImages = [construction2, construction3, construction4, construction5];
  const constructionSlides = constructionImages.map((src, i) => ({
    src,
    alt: `Construction Project ${i + 1}`
  }));

  const infrastructureImages = [infrastructure, infrastructure1, infrastructure2];
  const infrastructureSlides = infrastructureImages.map((src, i) => ({
    src,
    alt: `Infrastructure Project ${i + 1}`
  }));

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
                Building Africa With Precision
              </motion.p>

              <motion.h1 variants={fadeInUp} className="font-display text-4xl md:text-5xl lg:text-6xl font-normal text-foreground uppercase tracking-tight mb-8 leading-[1.1]">
                Construction &<br />
                Infrastructure<br />
                Services
              </motion.h1>

              <motion.h2 variants={fadeInUp} className="font-display text-lg md:text-xl font-semibold text-foreground uppercase tracking-wide mb-6 leading-relaxed">
                End-To-End Construction And Infrastructure<br />
                Delivery Across Africa
              </motion.h2>

              <div className="flex flex-col gap-6 text-muted-foreground font-light leading-relaxed mb-16">
                <motion.p variants={fadeInUp}>
                  We deliver comprehensive construction solutions that transform concepts into durable, high-quality infrastructure, and develop resilient infrastructure that supports economic growth, industrial development, and improved quality of life.
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
                src={construction}
                alt="Bridge under construction"
                className="w-full h-full object-cover transition-transform duration-1000 hover:scale-105"
              />
            </motion.div>


          </motion.div>

        </div>

      </section>

      {/* Main Content Sections */}
      <section className="pt-8 md:pt-12 pb-16 md:pb-24 container-x max-w-7xl">
        <div className="flex flex-col gap-16 md:gap-24">
          {/* 1. Construction */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
            className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-16 items-start"
          >
            <div className="md:col-span-4 lg:col-span-3">
              <h2 className="font-display text-3xl md:text-4xl font-semibold text-foreground uppercase tracking-tight">
                Construction
              </h2>
            </div>
            <div className="md:col-span-8 lg:col-span-9 flex flex-col gap-6 text-muted-foreground font-light leading-relaxed md:text-lg">
              <p>
                We deliver comprehensive construction solutions that transform concepts into durable, high-quality infrastructure across multiple domains.
              </p>
              <div className="mt-2">
                <Link
                  to="/services/details/$slug"
                  params={{ slug: "construction" }}
                  className="inline-flex items-center gap-2 text-accent font-semibold uppercase tracking-widest text-sm hover:text-accent/80 transition-colors group"
                >
                  Read More
                  <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
              <motion.div variants={fadeInUp} className="mt-10 w-full overflow-hidden">
                <CoverflowCarousel slides={constructionSlides} showNavigation showPagination cardWidth="clamp(280px, 60vw, 640px)" />
              </motion.div>
            </div>
          </motion.div>

          <hr className="border-border/50" />

          {/* 2. Infrastructure */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
            className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-16 items-start"
          >
            <div className="md:col-span-4 lg:col-span-3">
              <h2 className="font-display text-3xl md:text-4xl font-semibold text-foreground uppercase tracking-tight">
                Infrastructure
              </h2>
            </div>
            <div className="md:col-span-8 lg:col-span-9 flex flex-col gap-6 text-muted-foreground font-light leading-relaxed md:text-lg">
              <p>
                We develop resilient infrastructure that supports economic growth, industrial development, and improved quality of life.
              </p>
              <div className="mt-2">
                <Link
                  to="/services/details/$slug"
                  params={{ slug: "infrastructure" }}
                  className="inline-flex items-center gap-2 text-accent font-semibold uppercase tracking-widest text-sm hover:text-accent/80 transition-colors group"
                >
                  Read More
                  <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
              <motion.div variants={fadeInUp} className="mt-10 w-full overflow-hidden">
                <CoverflowCarousel slides={infrastructureSlides} showNavigation showPagination cardWidth="clamp(280px, 60vw, 640px)" />
              </motion.div>
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
              <h3 className="font-display text-5xl md:text-6xl font-normal text-white mb-3">EPC</h3>
              <p className="font-sans text-white/70 font-light text-sm tracking-wide">Full Delivery Model</p>
            </motion.div>
            <motion.div variants={fadeInUp} className="flex flex-col items-center justify-center py-8 md:py-0 text-center">
              <h3 className="font-display text-5xl md:text-6xl font-normal text-accent mb-3">16+</h3>
              <p className="font-sans text-white/70 font-light text-sm tracking-wide">Years Project Experience</p>
            </motion.div>
            <motion.div variants={fadeInUp} className="flex flex-col items-center justify-center py-8 md:py-0 text-center">
              <h3 className="font-display text-5xl md:text-6xl font-normal text-white mb-3">5</h3>
              <p className="font-sans text-white/70 font-light text-sm tracking-wide">Delivery Capabilities</p>
            </motion.div>
          </motion.div>
        </div>
      </section> */}

      {/* Quote Block */}
      {/* <section className="py-16 md:py-24 container-x max-w-7xl">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeInUp}
          className="bg-foreground p-8 md:p-16 flex flex-col gap-8"
        >
          <p className="text-accent text-xs font-semibold tracking-[0.3em] uppercase">
            Why Choose Sevengate
          </p>
          <div className="bg-white/5 border border-white/10 p-8 md:p-12">
            <p className="font-display text-xl md:text-2xl lg:text-3xl text-white font-light italic leading-relaxed text-center">
              "From soil investigation to commissioning and handover — Sevengate Group delivers construction and infrastructure projects with the technical rigour and professional discipline Africa's development demands."
            </p>
          </div>
        </motion.div>
      </section> */}
      {/* Other Services Navigation */}
      <ServicesNavigation currentPath="/services/construction" />

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
            Have A Construction Or Infrastructure Project You Need To Deliver?
          </h2>
          <p className="text-muted-foreground leading-relaxed font-light mb-10 text-lg">
            Sevengate Group brings engineering expertise, procurement capability, and experienced project delivery teams to construction and infrastructure projects of all scales across Africa.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center justify-center bg-accent text-white px-8 py-4 text-sm font-semibold tracking-widest uppercase transition-transform hover:-translate-y-1 hover:shadow-xl shadow-accent/20"
          >
            Discuss Your Project
          </Link>
        </motion.div>
      </section>

      <Footer />
      <ChatWidget />
    </main>
  )
}
