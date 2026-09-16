import { createFileRoute } from '@tanstack/react-router'
import { motion } from "motion/react"
import { Navbar } from "@/components/site/Navbar"
import { Footer } from "@/components/site/Footer"
import { ChatWidget } from "@/components/site/ChatWidget"
import orgStructureImg from "@/assets/organization structure.webp"

export const Route = createFileRoute('/about/organization')({
  component: OrganizationComponent,
})

function OrganizationComponent() {
  return (
    <main className="relative min-h-screen bg-background text-foreground">
      <Navbar />
      
      <section className="relative pt-32 pb-24 md:pt-40 bg-foreground text-white">
        <div className="absolute inset-0 bg-gradient-to-b from-foreground/70 via-foreground/60 to-foreground z-0" />
        <div className="container-x relative z-10 max-w-4xl">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="font-display text-5xl font-semibold tracking-tight sm:text-6xl text-luxury-gold"
          >
            Structural Organization
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="mt-6 text-xl text-white/80 leading-relaxed"
          >
            How we operate across the value chain, ensuring efficiency and excellence in every sector.
          </motion.p>
        </div>
      </section>

      <section className="py-24 container-x">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="rounded-none border border-border bg-card p-6 sm:p-10 shadow-luxury-soft flex flex-col items-center"
        >
          <p className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-luxury-gold mb-4">
            <span className="h-px w-8 bg-luxury-gold" /> Corporate Structure
          </p>
          <h3 className="mb-10 font-display text-3xl font-semibold text-foreground text-center">
            Sevengate Group Organization
          </h3>
          <img loading="lazy" 
            src={orgStructureImg} 
            alt="Sevengate Group Organization Structure" 
            className="w-full h-auto rounded-none shadow-sm object-contain max-h-[800px]"
            loading="lazy" 
          />
        </motion.div>
      </section>

      <Footer />
      <ChatWidget />
    </main>
  )
}

