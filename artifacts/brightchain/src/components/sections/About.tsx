import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="over-mij" className="py-24 md:py-32 bg-primary text-primary-foreground overflow-hidden relative">
      {/* Decorative large B */}
      <div className="absolute -right-20 -bottom-40 text-[40rem] font-serif leading-none opacity-[0.03] pointer-events-none select-none">
        B
      </div>

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
          >
            <div className="aspect-[3/4] max-w-md mx-auto lg:mx-0 relative">
              <div className="absolute inset-0 bg-accent translate-x-4 translate-y-4"></div>
              <img 
                src="/rene-de-koning.png"
                alt="René de Koning — IT Project Manager"
                className="w-full h-full object-cover object-top relative z-10"
              />
            </div>
          </motion.div>

          <motion.div
            className="max-w-xl"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h2 className="text-sm font-bold uppercase tracking-widest text-secondary mb-6 flex items-center gap-4">
              <span className="w-8 h-[1px] bg-secondary"></span>
              René de Koning
            </h2>
            
            <h3 className="text-3xl md:text-5xl font-serif mb-8 leading-tight">
              Van werkvloer <br/> <span className="italic text-primary-foreground/70">tot directie.</span>
            </h3>

            <div className="prose prose-lg prose-invert text-primary-foreground/80 mb-12 font-light leading-relaxed">
              <p>
                Ik ben René de Koning, IT Project Manager met een sterke achtergrond in supply chain en logistiek. Ik werk op het snijvlak van IT en operatie en help organisaties complexe veranderingen realiseren.
              </p>
              <p>
                Mijn kracht ligt in het combineren van structuur, pragmatisme en een hands-on aanpak — van strategie tot uitvoering. Ik beweeg moeiteloos tussen werkvloer en management en zorg dat plannen ook écht gerealiseerd worden.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {[
                "IT Project Management & Operations",
                "Hands-on én strategisch",
                "Warehouse / Supply Chain & IT",
                "Complexe stakeholder velden"
              ].map((usp, index) => (
                <div key={index} className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full border border-secondary flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="w-2 h-2 rounded-full bg-secondary"></span>
                  </div>
                  <span className="text-sm font-medium tracking-wide text-primary-foreground/90">{usp}</span>
                </div>
              ))}
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
