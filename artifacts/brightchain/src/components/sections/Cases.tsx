import { motion } from "framer-motion";

const cases = [
  {
    title: "M365 Workplace Migration",
    category: "IT Transformatie",
    results: [
      { value: "1500+", label: "gebruikers gemigreerd" },
      { value: "4", label: "M365 tenant migraties" }
    ],
    description: "Grootschalige migratie naar M365 werkplekken. Naast de technische uitrol lag de focus sterk op adoptie, resulterend in direct verbeterde samenwerking en remote werken voor de hele organisatie."
  },
  {
    title: "IT Post-Merger Integratie",
    category: "Project Management",
    results: [
      { value: "3", label: "maanden doorlooptijd" },
      { value: "9", label: "locaties aangesloten" }
    ],
    description: "Complexe IT integratie na overname. Door strakke regie en pragmatische keuzes werd de integratie ruim binnen deadline afgerond met minimale verstoring van de kritische operatie."
  },
  {
    title: "WMS Implementatie",
    category: "Supply Chain",
    results: [
      { value: "Meerdere", label: "implementaties" },
      { value: '"Soepelste"', label: "go-live ooit" }
    ],
    description: "Begeleiding van kritische Warehouse Management Systeem implementaties. De brug geslagen tussen de softwareleverancier en de werkvloer om een systeem te realiseren dat in de praktijk écht werkt."
  }
];

export default function Cases() {
  return (
    <section id="resultaten" className="py-24 md:py-32 bg-background border-t border-border/40">
      <div className="container mx-auto px-6 md:px-12">
        
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-20">
          <div className="max-w-2xl">
            <motion.h2 
              className="text-sm font-bold uppercase tracking-widest text-primary mb-4 flex items-center gap-4"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
            >
              <span className="w-8 h-[1px] bg-primary"></span>
              Ervaring
            </motion.h2>
            <motion.h3 
              className="text-4xl md:text-5xl font-serif text-foreground leading-tight"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ delay: 0.1 }}
            >
              Impact in de praktijk.
            </motion.h3>
          </div>
          
          <motion.p 
            className="text-foreground/60 max-w-sm"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            Mooie plannen zijn waardeloos zonder executiekracht. Een greep uit gerealiseerde projecten.
          </motion.p>
        </div>

        <div className="space-y-12">
          {cases.map((caseStudy, index) => (
            <motion.div
              key={index}
              className="group grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 items-center bg-card p-8 md:p-12 border border-border cursor-default rounded-2xl"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6 }}
              whileHover={{
                y: -6,
                boxShadow: "0 24px 48px -12px rgba(50, 145, 201, 0.25)",
                borderColor: "rgba(50, 145, 201, 0.6)",
                transition: { type: "spring", stiffness: 320, damping: 22 }
              }}
            >
              <div className="md:col-span-5 lg:col-span-4">
                <p className="text-xs font-bold uppercase tracking-widest text-secondary mb-4">
                  {caseStudy.category}
                </p>
                <h4 className="text-2xl md:text-3xl font-serif text-card-foreground mb-6">
                  {caseStudy.title}
                </h4>
                <div className="flex gap-8">
                  {caseStudy.results.map((res, i) => (
                    <div key={i}>
                      <span className="block text-3xl font-serif text-primary mb-1">{res.value}</span>
                      <span className="text-xs text-card-foreground/60 uppercase tracking-wider">{res.label}</span>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="md:col-span-7 lg:col-span-6 lg:col-start-6">
                <div className="h-[1px] w-full bg-border/50 mb-8 md:hidden"></div>
                <p className="text-card-foreground/80 leading-relaxed font-light md:text-lg">
                  {caseStudy.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
