import { createFileRoute } from '@tanstack/react-router'
import { motion } from "motion/react"
import { Navbar } from "@/components/site/Navbar"
import { Footer } from "@/components/site/Footer"

export const Route = createFileRoute('/subsidiaries')({
  component: SubsidiariesComponent,
  head: () => ({
    meta: [
      { title: "Subsidiaries — Sevengate Group" },
    ],
  }),
})

function SubsidiariesComponent() {
  const subsidiaries = [
    { name: "Aggregates and More", desc: "Education Technology (Ed-Tech)\nOther Technology Service" },
    { name: "Tèrre Crustè Engineering Services", desc: "Operations and Maintainance\nElectrical and Instrumentation\nAutomation and Control\nBalance of Plants Service\nOther Engineering service" },
    { name: "International Transformer Merchanics", desc: "Equipment Retrofit \nTransformer Mechanics \nOther Mechanical Services" }
  ];

  return (
    <main className="relative min-h-screen bg-gray-50 text-foreground overflow-hidden">
      <Navbar />

      <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 bg-foreground text-white overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img src="/hero2.jpeg" alt="Subsidiaries Banner" className="absolute inset-0 w-full h-full object-cover" />
          {/* Subtle gradient to ensure text remains readable */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent" />
        </div>

        <div className="container-x relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-2xl drop-shadow-lg"
          >
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-luxury-gold mb-4 drop-shadow-md">
              Our Network
            </p>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-display font-black tracking-tight mb-6 drop-shadow-xl text-white">
              Our <br />
              <span className="text-orange-300">
                Subsidiaries
              </span>
            </h1>
            <p className="text-lg text-white/90 leading-relaxed max-w-xl drop-shadow-md font-medium">
              A diverse portfolio of specialized companies delivering excellence across key sectors in Africa.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-20 md:py-32 relative z-10 -mt-10">
        <div className="container-x">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {subsidiaries.map((sub, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="bg-white rounded-none p-10 shadow-[0_8px_30px_rgb(0,0,0,0.04)] ring-1 ring-black/5 hover:shadow-[0_20px_60px_rgb(0,0,0,0.08)] transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <h3 className="text-2xl font-display font-bold text-foreground mb-4">{sub.name}</h3>
                  <ul className="flex flex-col gap-3 mb-6">
                    {sub.desc.split('\n').map((line, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <div className="w-1.5 h-1.5 rounded-full bg-luxury-gold mt-2 shrink-0 shadow-[0_0_8px_rgba(212,175,55,0.6)]" />
                        <span className="text-sm font-medium text-muted-foreground leading-relaxed">
                          {line.trim()}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
