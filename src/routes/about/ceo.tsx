import { createFileRoute } from '@tanstack/react-router'
import { motion } from "motion/react"
import { Navbar } from "@/components/site/Navbar"
import { Footer } from "@/components/site/Footer"

export const Route = createFileRoute('/about/ceo')({
  component: CeoAddressComponent,
  head: () => ({
    meta: [
      { title: "CEO Address — Sevengate Group" },
    ],
  }),
})

function CeoAddressComponent() {
  return (
    <main className="relative min-h-screen bg-gray-50 text-foreground overflow-hidden">
      <Navbar />

      <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 bg-foreground text-white overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,var(--amber-brand)_0%,transparent_30%)] opacity-20" />
          <div className="absolute inset-0 bg-grid-white/[0.02]" />
        </div>

        <div className="container-x relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl"
          >
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-luxury-gold mb-4">
              Leadership
            </p>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-display font-black tracking-tight mb-6">
              A Message from <br />
              <span className="text-orange-500">
                Our CEO
              </span>
            </h1>
          </motion.div>
        </div>
      </section>

      <section className="py-20 md:py-32 relative z-10 -mt-10">
        <div className="container-x">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-white rounded-none p-10 md:p-16 shadow-[0_20px_60px_rgb(0,0,0,0.05)] ring-1 ring-black/5 max-w-4xl mx-auto"
          >
            <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed space-y-6">
              <p className="text-xl md:text-2xl font-display text-foreground font-medium leading-relaxed italic mb-8 border-l-4 border-luxury-gold pl-6">
                "Welcome to Sevengate Group. As we forge ahead in shaping the future of infrastructure, energy, and industry in Africa, our commitment remains steadfast: delivering excellence, driving innovation, and creating lasting value."
              </p>

              <p>
                At Sevengate Group, our journey has been defined by a relentless pursuit of excellence and a bold vision for the future. We recognize that the challenges facing our industries today require not just solutions, but transformative approaches that combine deep expertise with innovative thinking.
              </p>

              <p>
                Through our diverse subsidiaries, ranging from Engineering and Mining to Automation and Control, we are uniquely positioned to address complex needs across multiple sectors. Our strength lies in our synergy—the ability to harness the collective power of our distinct divisions to deliver comprehensive, world-class results.
              </p>

              <p>
                As we look to the horizon, we remain dedicated to sustainable practices, empowering our communities, and upholding the highest standards of integrity in all our operations. We invite you to join us on this exciting journey as we continue to build, innovate, and lead.
              </p>

              <div className="mt-12 pt-8 border-t border-gray-100 flex items-center gap-6">
                <div className="w-16 h-16 bg-gray-200 rounded-full overflow-hidden">
                  {/* Placeholder for CEO photo */}
                </div>
                <div>
                  <h4 className="font-bold text-foreground text-lg">Chief Executive Officer</h4>
                  <p className="text-luxury-gold font-medium uppercase tracking-wider text-sm mt-1">Sevengate Group</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
