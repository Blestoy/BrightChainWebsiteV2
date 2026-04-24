import { motion } from "framer-motion";
import { Server, Network, Cloud, Warehouse, Activity } from "lucide-react";

const services = [
  {
    title: "IT Project Management",
    icon: <Server className="w-6 h-6" />,
    description: "End-to-end project delivery met focus op resultaat. Van business case tot live-gang.",
    points: ["End-to-end project delivery", "Stakeholder management", "Agile / Prince2 pragmatisme"]
  },
  {
    title: "PMO & Structuur",
    icon: <Network className="w-6 h-6" />,
    description: "Het fundament onder verandering. Ik breng orde in chaos en grip op voortgang.",
    points: ["Opzetten projectorganisatie", "Roadmaps & governance", "Rapportages & KPI's"]
  },
  {
    title: "IT & Cloud Transformaties",
    icon: <Cloud className="w-6 h-6" />,
    description: "Begeleiding van complexe IT migraties met minimale impact op de dagelijkse operatie.",
    points: ["M365 migraties (Teams / SharePoint)", "Cloud & infra migraties", "Post-merger IT integraties"]
  },
  {
    title: "Supply Chain & Warehousing",
    icon: <Warehouse className="w-6 h-6" />,
    description: "De brug tussen logistieke processen en IT systemen. Van vloer tot scherm.",
    points: ["WMS implementaties", "Procesoptimalisatie", "Interim site management"]
  },
  {
    title: "Continuous Improvement",
    icon: <Activity className="w-6 h-6" />,
    description: "Structurele verbetering borgen in de organisatie, niet als eenmalig project maar als cultuur.",
    points: ["Lean verbetertrajecten", "Data & reporting", "Structurele optimalisaties"]
  }
];

export default function Services() {
  return (
    <section id="diensten" className="py-24 md:py-32 bg-card">
      <div className="container mx-auto px-6 md:px-12">
        
        <div className="max-w-3xl mb-20">
          <motion.h2 
            className="text-sm font-bold uppercase tracking-widest text-primary mb-4 flex items-center gap-4"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <span className="w-8 h-[1px] bg-primary"></span>
            Expertise
          </motion.h2>
          <motion.h3 
            className="text-4xl md:text-5xl font-serif text-card-foreground leading-tight"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ delay: 0.1 }}
          >
            Complexe IT- én logistieke projecten.
            <span className="block text-card-foreground/50 italic mt-2">Niet alleen bedenken — maar ook doen.</span>
          </motion.h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              className={`p-8 md:p-10 border border-card-border bg-background hover:border-primary/30 group cursor-default rounded-2xl ${
                index === 3 || index === 4 ? "lg:col-span-1" : ""
              }`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              whileHover={{
                y: -8,
                boxShadow: "0 24px 48px -12px rgba(50, 145, 201, 0.25)",
                borderColor: "rgba(50, 145, 201, 0.6)",
                transition: { type: "spring", stiffness: 320, damping: 22 }
              }}
            >
              <div className="w-12 h-12 bg-muted text-primary flex items-center justify-center mb-8 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                {service.icon}
              </div>
              <h4 className="text-xl font-serif font-medium mb-4 text-foreground">{service.title}</h4>
              <p className="text-foreground/70 mb-8 font-light leading-relaxed">
                {service.description}
              </p>
              <ul className="space-y-3">
                {service.points.map((point, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm text-foreground/80">
                    <span className="w-1.5 h-1.5 rounded-full bg-secondary mt-1.5 flex-shrink-0"></span>
                    {point}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
          
          <motion.div
            className="p-8 md:p-10 bg-primary text-primary-foreground flex flex-col justify-center items-start lg:col-span-1 rounded-2xl"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ delay: 0.5, duration: 0.5 }}
          >
            <h4 className="text-2xl font-serif mb-4">Specifiek vraagstuk?</h4>
            <p className="text-primary-foreground/80 mb-8 font-light">
              Elke organisatie is uniek. Laten we bespreken waar de knelpunten zitten.
            </p>
            <a 
              href="#contact" 
              className="text-sm font-bold uppercase tracking-widest text-secondary hover:text-white transition-colors flex items-center gap-2 group"
            >
              Contact opnemen
              <span className="group-hover:translate-x-1 transition-transform">→</span>
            </a>
          </motion.div>
        </div>

      </div>
    </section>
  );
}
