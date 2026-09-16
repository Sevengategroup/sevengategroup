import { createFileRoute, Link } from '@tanstack/react-router'
import { motion, AnimatePresence } from "motion/react"
import { Navbar } from "@/components/site/Navbar"
import { Footer } from "@/components/site/Footer"
import { ChatWidget } from "@/components/site/ChatWidget"
import { HugeiconsIcon } from '@hugeicons/react';
import { ArrowRight01Icon } from '@hugeicons/core-free-icons';

// Import placeholder image
import bannerImg from "../../../public/about.jpg"
import aboutImg from "@/assets/istockphoto_standard_29308620.jpg"

export const Route = createFileRoute('/about/')({
  component: AboutUsComponent,
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

function AboutUsComponent() {
  return (
    <main className="relative min-h-screen bg-background text-foreground overflow-hidden">
      <Navbar />

      {/* Top Background Banner */}
      <section className="relative h-[50svh] md:h-[60svh] w-full flex items-end pb-0 md:pb-2">
        <div className="absolute inset-0 z-0">
          <img
            src={bannerImg}
            alt="About Sevengate Group"
            className="w-full h-full object-cover blur-[2px] scale-105"
          />
          <div className="absolute inset-0 bg-black/50" />
        </div>

        <div className="relative z-10 text-right w-full container-x">
          <motion.h1
            initial="hidden"
            animate="visible"
            variants={fadeInUp}
            className="font-display text-4xl md:text-5xl lg:text-6xl font-light text-white tracking-tight drop-shadow-md"
          >
            Who We Are
          </motion.h1>
        </div>
      </section>

      {/* WHO WE ARE Section */}
      <section className="py-16 md:py-24 container-x max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">

          {/* Left Column (Mission & Vision) */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="lg:col-span-5 flex flex-col gap-8"
          >


            <motion.div variants={fadeInUp} className="border border-border p-8 md:p-10 group transition-colors hover:border-accent">
              <h3 className="font-display text-2xl font-light tracking-wide mb-4 text-foreground">Our Mission</h3>
              <p className="text-muted-foreground leading-relaxed font-light">
                To deliver specialised, world-class technical services and solutions across Africa's energy, infrastructure, and natural resources sectors driving operational excellence, enabling growth, and creating lasting value for our clients, partners, and communities.
              </p>
            </motion.div>

            <motion.div variants={fadeInUp} className="border border-border bg-muted/30 p-8 md:p-10">
              <h3 className="font-display text-2xl font-light tracking-wide mb-4 text-foreground">Our Vision</h3>
              <p className="text-muted-foreground leading-relaxed font-light">
                To be Africa's most trusted and capable multi-sector energy and infrastructure group a company that sets the benchmark for technical excellence, professional integrity, and sustainable impact across the continent.
              </p>
            </motion.div>
          </motion.div>

          {/* Right Column (Flowing History) */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
            className="lg:col-span-7 prose prose-gray max-w-none text-muted-foreground font-light leading-relaxed space-y-6 md:text-lg"
          >
            <div>
              <motion.div variants={fadeInUp} className="h-[1px] w-16 bg-accent mb-8"></motion.div>
              <motion.p variants={fadeInUp} className="text-xl md:text-2xl text-foreground leading-relaxed font-light mb-8">
                A multi-sector powerhouse built on over two decades of African industry experience, international technical partnerships, and an unwavering commitment to excellence.
              </motion.p>
            </div>
            <p>
              Sevengate Group was founded with a clear and purposeful vision: to build a world-class African company capable of delivering the specialised technical services and solutions that Africa's most critical industries demand. What began as a focused operation in the energy sector has grown in the last ten years, into a diversified Group with a commanding presence across technology, energy, mining, infrastructure and construction projects.
            </p>
            <p>
              From our base in Nigeria, we have expanded our reach across the African continent, forging strategic technical partnerships with leading organisations in Europe, Asia and other global centres of industry expertise. These alliances enable us to bring international standards, original OEM equipment, and cutting-edge technical know-how directly to our clients wherever they operate.
            </p>
            <p>
              Today, Sevengate Group is recognised not only for the breadth of our sector coverage, but for the depth of our expertise. Our team comprises professionals with an average of over 30 years of industry experience individuals who have built careers at the highest levels of the energy and infrastructure sectors, and who bring that accumulated knowledge to every project and engagement we undertake.
            </p>
          </motion.div>

        </div>
      </section>

      {/* Visual Separator */}
      <section className="pb-16 md:pb-24 container-x max-w-7xl">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeInUp}
          className="w-full aspect-[16/9] md:aspect-[21/9] overflow-hidden rounded-2xl md:rounded-3xl shadow-lg"
        >
          <img
            src="/about-image.jpeg"
            alt="About Sevengate Group Operations"
            className="w-full h-full object-cover transition-transform duration-1000 hover:scale-105"
          />
        </motion.div>
      </section>

      {/* OUR CORE VALUES Section */}
      <section className="py-16 md:py-24 container-x max-w-7xl">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeInUp}
        >
          <h2 className="font-display text-3xl md:text-4xl font-bold text-accent tracking-tight mb-10 text-center">
            Our Core Values
          </h2>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {[
            { title: "Integrity", desc: "We conduct our business with the highest ethical standards, building trust through transparency, accountability, and honest dealings with all stakeholders." },
            { title: "Excellence", desc: "We are committed to delivering world-class outcomes across every sector we operate in, holding ourselves to rigorous standards of quality, safety, and performance." },
            { title: "Partnership", desc: "We believe in the power of collaboration with our clients, technical partners, and communities to create lasting value and drive sustainable development across Africa." },
            { title: "Innovation", desc: "Backed by European, Asian and other regional technical alliances and a team of industry veterans, we continuously seek better ways to solve complex challenges and deliver exceeding results" },
          ].map((val, idx) => (
            <motion.div
              key={idx}
              variants={fadeInUp}
              className="border border-border p-8 md:p-10 group transition-colors hover:border-accent bg-background"
            >
              <h3 className="font-display text-2xl font-light tracking-wide mb-4 text-foreground">{val.title}</h3>
              <p className="text-muted-foreground leading-relaxed font-light">{val.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* WHY SEVENGATE GROUP Section */}
      <section className="py-16 md:py-24 container-x max-w-7xl">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeInUp}
          className="mb-12 max-w-4xl mx-auto text-center"
        >
          <h2 className="font-display text-4xl md:text-5xl font-light text-foreground tracking-tight mb-4">
            What Sets Us Apart
          </h2>
          <p className="text-xl text-center font-light tracking-[0.1em] text-accent mb-6 uppercase">
            Why Sevengate Group
          </p>
          <p className="text-lg text-muted-foreground leading-relaxed font-light">
            In a region where the gap between expectation and execution is often wide, Sevengate Group exists to close it. We combine the agility and local insight of an African company with the technical rigour and global reach of an international operator. The result is a partner that understands your environment, speaks your language, and delivers to the standard you deserve.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
            className="border border-border p-8 md:p-12"
          >
            <div className="grid grid-cols-1 gap-6 divide-y divide-border">
              {[
                { label: "10 Years", desc: "A proven track record of delivering across multiple sectors in Africa's most demanding operating environments." },
                { label: "20+ Years", desc: "Average staff experience across our technical and operational teams, seasoned professionals who have seen and solved it all." },
                { label: "OEM Supply", desc: "We supply only original manufacturer-certified equipment and parts, ensuring reliability, warranty compliance, and long-term performance." },
                { label: <>Europe,<br />Asia and<br />Other Regional Links</>, desc: "Established technical partnerships with key global leading organisations give our clients access to world-class expertise and technology." },
                { label: "5+ Sectors", desc: "Diversified capabilities across technology, energy, mining infrastructure and construction, all under one roof." },
                { label: "Pan-African", desc: "Operating across Africa with the local knowledge, networks, and regulatory understanding to deliver effectively in diverse markets." },
              ].map((metric, idx) => (
                <div key={idx} className={`flex flex-col xl:flex-row gap-4 xl:gap-8 xl:items-center ${idx > 0 ? "pt-6" : ""}`}>
                  <div className="xl:w-32 shrink-0">
                    <div className="inline-flex items-center px-4 py-2 border-l-2 border-accent text-foreground font-light tracking-wide text-sm w-full xl:w-auto">
                      {metric.label}
                    </div>
                  </div>
                  <p className="text-muted-foreground leading-relaxed flex-1 font-light text-sm xl:text-base">
                    {metric.desc}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
            className="relative w-full aspect-square md:aspect-[4/5] rounded-none overflow-hidden shadow-2xl group bg-muted lg:sticky lg:top-36"
          >
            <img src={aboutImg} alt="Why Sevengate Group" className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" />
          </motion.div>
        </div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeInUp}
          className="mt-20 max-w-4xl mx-auto text-center flex flex-col items-center"
        >
          <h3 className="font-display text-2xl md:text-3xl font-light text-foreground tracking-tight mb-6">
            Partner with a team that brings experience, integrity, and results.
          </h3>
          <p className="text-muted-foreground leading-relaxed mb-10 text-lg font-light">
            Whether you are seeking a technical services partner, an OEM equipment supplier, or a reliable group with multi-sector capabilities across Africa, Sevengate Group is ready to support your goals.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 border border-border px-8 py-4 font-light transition-all hover:border-foreground hover:bg-foreground hover:text-background tracking-wide text-sm"
          >
            Contact Us Today
            <HugeiconsIcon icon={ArrowRight01Icon} className="w-4 h-4" strokeWidth={1} />
          </Link>
        </motion.div>
      </section>

      <Footer />
      <ChatWidget />
    </main>
  )
}
