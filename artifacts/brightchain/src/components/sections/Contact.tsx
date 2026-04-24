import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { CheckCircle2, ArrowRight } from "lucide-react";

export default function Contact() {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate network request
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      
      toast({
        title: "Bericht verzonden",
        description: "Bedankt voor uw bericht. Ik neem binnen 24 uur contact met u op.",
      });
      
      // Reset after a delay
      setTimeout(() => setIsSuccess(false), 5000);
      (e.target as HTMLFormElement).reset();
    }, 1000);
  };

  return (
    <section id="contact" className="py-24 md:py-32 bg-card relative">
      <div className="container mx-auto px-6 md:px-12">
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
          
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <h2 className="text-sm font-bold uppercase tracking-widest text-primary mb-4 flex items-center gap-4">
              <span className="w-8 h-[1px] bg-primary"></span>
              Contact
            </h2>
            <h3 className="text-4xl md:text-6xl font-serif text-card-foreground leading-tight mb-8">
              Klaar om te <br/><span className="italic text-primary">realiseren?</span>
            </h3>
            
            <p className="text-lg text-card-foreground/70 mb-12 font-light max-w-md">
              Of het nu gaat om een M365 migratie, een WMS implementatie of project regie — laten we kennismaken.
            </p>

            <div className="space-y-8">
              <div>
                <p className="text-xs font-bold uppercase tracking-widest text-card-foreground/40 mb-2">Direct Contact</p>
                <a href="mailto:info@brightchain.nl" className="text-xl font-serif hover:text-primary transition-colors">
                  info@brightchain.nl
                </a>
              </div>
              
              <div>
                <p className="text-xs font-bold uppercase tracking-widest text-card-foreground/40 mb-2">Connect</p>
                <a href="https://linkedin.com/in/renedekoning" target="_blank" rel="noreferrer" className="text-xl font-serif hover:text-primary transition-colors flex items-center gap-2 group w-max">
                  LinkedIn Profiel
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            </div>

            <div className="flex flex-wrap gap-6 mt-16 pt-8 border-t border-border">
              <div className="flex items-center gap-2 text-sm font-medium text-card-foreground/80">
                <CheckCircle2 className="h-4 w-4 text-secondary" />
                Binnen 24 uur reactie
              </div>
              <div className="flex items-center gap-2 text-sm font-medium text-card-foreground/80">
                <CheckCircle2 className="h-4 w-4 text-secondary" />
                Vrijblijvende kennismaking
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ delay: 0.2 }}
            className="bg-background p-8 md:p-12 border border-border rounded-2xl"
          >
            <h4 className="text-2xl font-serif mb-8">Plan een kennismaking</h4>
            
            {isSuccess ? (
              <div className="h-[400px] flex flex-col items-center justify-center text-center animate-in fade-in zoom-in duration-500">
                <div className="w-16 h-16 bg-primary/10 text-primary rounded-full flex items-center justify-center mb-6">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h5 className="text-2xl font-serif mb-2">Bericht verzonden</h5>
                <p className="text-foreground/60">Ik neem zo spoedig mogelijk contact met u op.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium text-foreground/80">Naam</label>
                  <Input 
                    id="name" 
                    required 
                    className="rounded-none bg-transparent border-t-0 border-x-0 border-b border-border focus-visible:ring-0 focus-visible:border-primary px-0 h-12 text-base" 
                    placeholder="Uw volledige naam"
                  />
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium text-foreground/80">E-mail</label>
                  <Input 
                    id="email" 
                    type="email" 
                    required 
                    className="rounded-none bg-transparent border-t-0 border-x-0 border-b border-border focus-visible:ring-0 focus-visible:border-primary px-0 h-12 text-base" 
                    placeholder="uw@email.nl"
                  />
                </div>
                
                <div className="space-y-2 pb-4">
                  <label htmlFor="message" className="text-sm font-medium text-foreground/80">Bericht</label>
                  <Textarea 
                    id="message" 
                    required 
                    className="rounded-none bg-transparent border-t-0 border-x-0 border-b border-border focus-visible:ring-0 focus-visible:border-primary px-0 min-h-[120px] text-base resize-y" 
                    placeholder="Waarmee kan ik u helpen?"
                  />
                </div>

                <Button 
                  type="submit" 
                  disabled={isSubmitting}
                  className="w-full rounded-xl h-14 bg-primary hover:bg-secondary text-primary-foreground text-base"
                >
                  {isSubmitting ? "Verzenden..." : "Verstuur bericht"}
                </Button>
              </form>
            )}
          </motion.div>

        </div>
      </div>
    </section>
  );
}
