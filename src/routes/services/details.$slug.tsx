import { createFileRoute, Link } from '@tanstack/react-router'
import { motion } from "motion/react"
import { Navbar } from "@/components/site/Navbar"
import { Footer } from "@/components/site/Footer"
import { ChatWidget } from "@/components/site/ChatWidget"
import { getServiceDetailBySlug } from '@/data/serviceDetails'
import { ArrowLeft } from 'lucide-react'

export const Route = createFileRoute('/services/details/$slug')({
  component: ServiceDetailComponent,
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

function ServiceDetailComponent() {
  const { slug } = Route.useParams()
  const detail = getServiceDetailBySlug(slug)

  if (!detail) {
    return (
      <main className="min-h-screen bg-background text-foreground flex items-center justify-center">
        <div className="text-center">
          <h1 className="font-display text-4xl mb-4">Service Not Found</h1>
          <Link to="/" className="text-accent hover:underline">Return to Home</Link>
        </div>
      </main>
    )
  }

  return (
    <main className="relative min-h-screen bg-background text-foreground overflow-hidden">
      <Navbar />

      {/* Spacer for fixed navbar */}
      <div className="h-20 md:h-28"></div>

      <section className="pt-8 md:pt-12 pb-16 md:pb-24 container-x max-w-4xl mx-auto">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
          className="flex flex-col gap-8"
        >
          {/* Back Navigation */}
          <motion.div variants={fadeInUp}>
            <Link 
              to={detail.parentUrl as any} 
              className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors text-sm uppercase tracking-widest font-semibold group"
            >
              <ArrowLeft size={16} className="transition-transform group-hover:-translate-x-1" />
              Back to {detail.categoryTitle}
            </Link>
          </motion.div>

          <div className="mt-8">
            <motion.div variants={fadeInUp} className="w-16 h-[2px] bg-accent mb-8" />
            <motion.h1 variants={fadeInUp} className="font-display text-4xl md:text-5xl lg:text-6xl font-normal text-foreground uppercase tracking-tight mb-8 leading-[1.1]">
              {detail.title}
            </motion.h1>
          </div>

          <motion.div variants={fadeInUp} className="flex flex-col gap-6 text-muted-foreground font-light leading-relaxed md:text-lg">
            {detail.fullContent.map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </motion.div>

        </motion.div>
      </section>

      <Footer />
      <ChatWidget />
    </main>
  )
}
