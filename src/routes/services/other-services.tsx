import { createFileRoute, Link } from '@tanstack/react-router'
import { motion } from "motion/react"
import { ArrowRight } from "lucide-react"
import { Navbar } from "@/components/site/Navbar"
import { Footer } from "@/components/site/Footer"
import { ChatWidget } from "@/components/site/ChatWidget"
import { ServicesNavigation } from "@/components/site/ServicesNavigation"
import { CoverflowCarousel } from "@/components/ui/coverflow-carousel"

// Import image

import lpgImg from "@/assets/istockphoto_standard_16163592.jpg"
import corrosionImg from "@/assets/archive/corrosion.jpeg"
import corporateImg from "@/assets/archive/corrosion-control.jpeg"


export const Route = createFileRoute('/services/other-services')({
    component: OtherServicesComponent,
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

function OtherServicesComponent() {
    const corrosionImages = [corrosionImg, corporateImg];
    const corrosionSlides = corrosionImages.map((src, i) => ({
        src,
        alt: `Corrosion Control ${i + 1}`
    }));

    return (
        <main className="relative min-h-screen bg-background text-foreground overflow-hidden">
            <Navbar />

            {/* Top Background Banner */}
            <section className="relative h-[50svh] md:h-[60svh] w-full flex items-center justify-center">
                <div className="absolute inset-0 z-0">
                    <img loading="lazy" 
                        src="/other-services.jpeg"
                        alt="Sevengate Group Specialised Services"
                        className="w-full h-full object-cover object-center"
                    />
                    <div className="absolute inset-0 bg-black/50" />
                </div>

                <div className="relative z-10 text-center container-x mt-16 md:mt-24">
                    <motion.h1
                        initial="hidden"
                        animate="visible"
                        variants={fadeInUp}
                        className="font-display text-4xl md:text-5xl lg:text-7xl font-light text-white tracking-tight mb-4 drop-shadow-md uppercase"
                    >
                        Other Services
                    </motion.h1>
                    <motion.p
                        initial="hidden"
                        animate="visible"
                        variants={{
                            hidden: { opacity: 0, y: 20 },
                            visible: { opacity: 1, y: 0, transition: { duration: 0.6, delay: 0.2 } }
                        }}
                        className="text-white/80 font-light tracking-[0.2em] uppercase text-sm md:text-base drop-shadow"
                    >
                        Sevengate Group Specialised Services
                    </motion.p>
                </div>
            </section>

            {/* Intro Text Section */}
            <section className="pt-12 md:pt-16 pb-8 md:pb-12 container-x max-w-4xl mx-auto text-center">
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    variants={staggerContainer}
                    className="flex flex-col gap-6 items-center w-full"
                >
                    <motion.h2 variants={fadeInUp} className="font-display text-xl md:text-2xl font-semibold text-foreground uppercase tracking-wide leading-relaxed">
                        Delivering Turnkey Solutions And Asset Integrity Across Industries
                    </motion.h2>

                    <div className="text-muted-foreground font-light leading-relaxed md:text-lg">
                        <motion.p variants={fadeInUp}>
                            Beyond our core sectors, we provide specialized services including the design and installation of LPG gas networks, as well as comprehensive corrosion control and asset management programs to protect your critical infrastructure.
                        </motion.p>
                    </div>
                </motion.div>
            </section>

            {/* Main Content Sections */}
            <section className="pt-8 md:pt-12 pb-16 md:pb-24 container-x max-w-7xl">
                <div className="flex flex-col gap-16 md:gap-24">
                    {/* LPG Gas Network */}
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-100px" }}
                        variants={fadeInUp}
                        className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-16 items-start"
                    >
                        <div className="md:col-span-4 lg:col-span-3">
                            <h2 className="font-display text-3xl md:text-4xl font-semibold text-foreground uppercase tracking-tight">
                                METERED LPG/COOKING GAS SUPPLY AND NETWORK
                            </h2>
                        </div>
                        <div className="md:col-span-8 lg:col-span-9 flex flex-col gap-6 text-muted-foreground font-light leading-relaxed md:text-lg">
                            <p>
                                We specialize in the design, installation, commissioning, operation, and maintenance of Liquefied Petroleum Gas (LPG) distribution networks for residential estates, commercial developments, industrial facilities, and institutional clients. Our systems are designed to provide safe, efficient, and uninterrupted gas supply while complying with all relevant industry regulations and safety requirements.
                            </p>
                            <div className="mt-2">
                                <Link
                                    to="/services/details/$slug"
                                    params={{ slug: "lpg-gas-network" }}
                                    className="inline-flex items-center gap-2 text-accent font-semibold uppercase tracking-widest text-sm hover:text-accent/80 transition-colors group"
                                >
                                    Read More
                                    <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
                                </Link>
                            </div>
                            <motion.div variants={fadeInUp} className="relative w-full aspect-video md:aspect-[21/9] overflow-hidden bg-muted mt-4">
                                <img loading="lazy" src={lpgImg} alt="LPG Gas Network" className="w-full h-full object-cover transition-transform duration-1000 hover:scale-105" />
                            </motion.div>
                        </div>
                    </motion.div>

                    <hr className="border-border/50" />

                    {/* Corrosion Control and Management */}
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-100px" }}
                        variants={fadeInUp}
                        className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-16 items-start"
                    >
                        <div className="md:col-span-4 lg:col-span-3">
                            <h2 className="font-display text-3xl md:text-4xl font-semibold text-foreground uppercase tracking-tight">
                                Corrosion Control &<br />Management
                            </h2>
                        </div>
                        <div className="md:col-span-8 lg:col-span-9 flex flex-col gap-6 text-muted-foreground font-light leading-relaxed md:text-lg">
                            <p>
                                Protecting valuable assets from corrosion is essential to ensuring long-term operational reliability and cost efficiency. We provide comprehensive corrosion control and asset integrity solutions, including corrosion assessments, protective coating systems, cathodic protection, inspections, integrity monitoring, and preventive maintenance programs for industrial and infrastructure assets.
                            </p>
                            <div className="mt-2">
                                <Link
                                    to="/services/details/$slug"
                                    params={{ slug: "corrosion-control" }}
                                    className="inline-flex items-center gap-2 text-accent font-semibold uppercase tracking-widest text-sm hover:text-accent/80 transition-colors group"
                                >
                                    Read More
                                    <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
                                </Link>
                            </div>
                            <motion.div variants={fadeInUp} className="mt-10 w-full overflow-hidden">
                                <CoverflowCarousel slides={corrosionSlides} showNavigation showPagination cardWidth="clamp(280px, 60vw, 640px)" />
                            </motion.div>
                        </div>
                    </motion.div>

                    <hr className="border-border/50" />

                    {/* Industrial Gases */}
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-100px" }}
                        variants={fadeInUp}
                        className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-16 items-start"
                    >
                        <div className="md:col-span-4 lg:col-span-3">
                            <h2 className="font-display text-3xl md:text-4xl font-semibold text-foreground uppercase tracking-tight">
                                Industrial Gases
                            </h2>
                        </div>
                        <div className="md:col-span-8 lg:col-span-9 flex flex-col gap-6 text-muted-foreground font-light leading-relaxed md:text-lg">
                            <p>
                                We provide comprehensive industrial gas solutions that support critical operations across manufacturing, healthcare, oil and gas, energy, food processing, and other industrial sectors. Our services include the production, storage, handling, transportation, and distribution of industrial gases while maintaining the highest standards of quality, reliability, and operational safety.
                            </p>
                            <div className="mt-2">
                                <Link
                                    to="/services/details/$slug"
                                    params={{ slug: "industrial-gases" }}
                                    className="inline-flex items-center gap-2 text-accent font-semibold uppercase tracking-widest text-sm hover:text-accent/80 transition-colors group"
                                >
                                    Read More
                                    <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
                                </Link>
                            </div>
                        </div>
                    </motion.div>

                    <hr className="border-border/50" />

                    {/* Manufacturing and Distribution */}
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-100px" }}
                        variants={fadeInUp}
                        className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-16 items-start"
                    >
                        <div className="md:col-span-4 lg:col-span-3">
                            <h2 className="font-display text-3xl md:text-4xl font-semibold text-foreground uppercase tracking-tight">
                                Manufacturing &<br />Distribution
                            </h2>
                        </div>
                        <div className="md:col-span-8 lg:col-span-9 flex flex-col gap-6 text-muted-foreground font-light leading-relaxed md:text-lg">
                            <p>
                                Our manufacturing and distribution operations are built on a commitment to quality, innovation, and operational excellence. We produce and supply high-quality industrial products, equipment, and engineered solutions that meet international standards and support the diverse needs of clients across multiple industries.
                            </p>
                            <div className="mt-2">
                                <Link
                                    to="/services/details/$slug"
                                    params={{ slug: "manufacturing-distribution" }}
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

            {/* Other Services Navigation */}
            <ServicesNavigation currentPath="/services/other-services" />

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
                        Need Expert Specialized Services?
                    </h2>
                    <p className="text-muted-foreground leading-relaxed font-light mb-10 text-lg">
                        From deploying robust LPG networks to implementing advanced corrosion control systems, Sevengate Group has the technical expertise to secure your operations.
                    </p>
                    <Link
                        to="/contact"
                        className="inline-flex items-center justify-center bg-accent text-white px-8 py-4 text-sm font-semibold tracking-widest uppercase transition-transform hover:-translate-y-1 hover:shadow-xl shadow-accent/20"
                    >
                        Contact Our Team
                    </Link>
                </motion.div>
            </section>

            <Footer />
            <ChatWidget />
        </main>
    )
}

