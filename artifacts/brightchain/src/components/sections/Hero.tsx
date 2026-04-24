import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle2 } from "lucide-react";

export default function Hero() {
  const scrollTo = (id: string) => {
    const element = document.querySelector(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative min-h-[100dvh] flex items-center pt-24 pb-16 overflow-hidden bg-background">
      {/* Abstract architectural elements in background */}
      <div className="absolute top-0 right-0 w-[50vw] h-[100vh] bg-muted/30 -z-10 transform translate-x-1/4"></div>
      <div className="absolute bottom-0 right-1/4 w-[30vw] h-[50vh] bg-secondary/10 -z-10"></div>
      <div className="absolute top-1/4 left-0 w-24 h-[60vh] bg-primary/5 -z-10"></div>

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          <div className="lg:col-span-7 flex flex-col items-start pt-10 lg:pt-0">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: "easeOut" }}
            >
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-secondary/15 text-primary text-xs font-bold uppercase tracking-widest mb-8 border border-secondary/40">
                <span className="w-1.5 h-1.5 rounded-full bg-primary block"></span>
                Project Manager voor IT & Operations
              </div>
              
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif text-foreground leading-[1.1] mb-6 tracking-tight">
                Project Management <br />
                <span className="text-primary italic">voor</span> IT en Supply Chain Operations
              </h1>
              
              <p className="text-lg md:text-xl text-foreground/70 mb-10 max-w-2xl leading-relaxed font-light">
                Van strategie naar uitvoering. Ik help organisaties complexe IT- en logistieke projecten succesvol realiseren — <strong className="font-semibold text-foreground">zonder ruis.</strong>
              </p>
            </motion.div>

            <motion.div 
              className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
            >
              <Button 
                size="lg" 
                onClick={() => scrollTo("#contact")}
                className="rounded-xl h-14 px-8 bg-primary hover:bg-secondary text-white text-base group"
              >
                Plan een kennismaking
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                onClick={() => scrollTo("#diensten")}
                className="rounded-xl h-14 px-8 border-foreground/20 hover:bg-foreground/5 text-foreground text-base"
              >
                Bekijk mijn werkgebied
              </Button>
            </motion.div>

            <motion.div 
              className="flex flex-wrap gap-x-8 gap-y-3 mt-16 pt-8 border-t border-border/60 w-full"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.5 }}
            >
              {[
                "Binnen 24 uur reactie",
                "Vrijblijvende kennismaking",
                "Direct inzetbaar"
              ].map((signal, i) => (
                <div key={i} className="flex items-center gap-2 text-sm font-medium text-foreground/80">
                  <CheckCircle2 className="h-4 w-4 text-secondary" />
                  {signal}
                </div>
              ))}
            </motion.div>
          </div>

          <motion.div 
            className="lg:col-span-5 h-[500px] lg:h-[700px] relative hidden md:flex items-center justify-center"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-accent/30 to-secondary/10 rounded-sm"></div>
            <img 
              src="/brightchain-hero.png"
              alt="BrightChain"
              className="relative z-10 w-full max-w-md px-8 object-contain"
            />
            {/* Accent blocks */}
            <div className="absolute -bottom-6 -left-6 w-48 h-48 bg-accent/40 -z-10"></div>
            <div className="absolute top-8 right-0 w-24 h-24 bg-secondary/20 -z-10"></div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
