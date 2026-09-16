import { Link } from '@tanstack/react-router'
import { motion } from 'motion/react'
import { ArrowRight, Zap, Building2, Pickaxe, ShieldCheck, LucideIcon } from 'lucide-react'

interface ServiceLink {
  title: string
  path: string
  description: string
  icon: LucideIcon
}

const services: ServiceLink[] = [
  {
    title: 'Energy',
    path: '/services/energy',
    description: 'Comprehensive oil, gas, and power generation solutions.',
    icon: Zap,
  },
  {
    title: 'Construction & Infrastructure',
    path: '/services/construction',
    description: 'Civil engineering and infrastructure development.',
    icon: Building2,
  },
  {
    title: 'Mining & Solid Minerals',
    path: '/services/mining',
    description: 'Exploration and mineral processing.',
    icon: Pickaxe,
  },
  {
    title: 'Other Services',
    path: '/services/other-services',
    description: 'Corrosion control and specialized solutions.',
    icon: ShieldCheck,
  },
]

export function ServicesNavigation({ currentPath }: { currentPath: string }) {
  const otherServices = services.filter((service) => service.path !== currentPath)

  return (
    <section className="bg-muted/30 border-y border-border py-20 mt-10">
      <div className="container-x mx-auto max-w-7xl">
        <div className="mb-12">
          <h2 className="font-display text-2xl md:text-3xl font-semibold text-foreground uppercase tracking-tight">
            Explore Other Services
          </h2>
          <div className="w-20 h-1 bg-accent mt-6"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {otherServices.map((service, index) => {
            const Icon = service.icon
            return (
              <motion.div
                key={service.path}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="group relative"
              >
                <Link
                  to={service.path}
                  className="block h-full bg-background border border-border p-8 transition-all duration-300 hover:shadow-xl hover:border-accent/50 hover:-translate-y-1"
                >
                  <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center mb-6 text-accent transition-transform duration-500 group-hover:scale-110 group-hover:bg-accent group-hover:text-white">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-3 uppercase tracking-wide group-hover:text-accent transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-sm text-muted-foreground font-light mb-8">
                    {service.description}
                  </p>
                  
                  <div className="absolute bottom-8 left-8 right-8 flex items-center text-xs font-semibold uppercase tracking-widest text-accent mt-auto">
                    <span>View Service</span>
                    <ArrowRight className="w-4 h-4 ml-2 transition-transform duration-300 group-hover:translate-x-2" />
                  </div>
                </Link>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
