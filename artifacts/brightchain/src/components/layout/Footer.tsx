import { Link } from "wouter";

export default function Footer() {
  const scrollTo = (id: string, e: React.MouseEvent) => {
    e.preventDefault();
    const element = document.querySelector(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-foreground text-background py-16 md:py-24">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-24">
          <div className="md:col-span-5 lg:col-span-4">
            <Link href="/" className="flex items-center gap-3 mb-6 inline-flex">
              <img
                src="/brightchain-logo.png"
                alt="BrightChain logo"
                className="h-12 w-auto object-contain brightness-0 invert"
              />
            </Link>
            <p className="text-background/60 text-sm leading-relaxed max-w-sm mb-8">
              Freelance IT Project Manager gespecialiseerd in M365 migraties, cloud transformaties en supply chain optimalisatie. Resultaatgericht en hands-on.
            </p>
            <div className="flex flex-col gap-2">
              <a href="mailto:info@brightchain.nl" className="text-sm font-medium hover:text-secondary transition-colors inline-flex items-center">
                info@brightchain.nl
              </a>
              <a href="https://linkedin.com/in/renedekoning" target="_blank" rel="noreferrer" className="text-sm font-medium hover:text-secondary transition-colors inline-flex items-center">
                LinkedIn Profiel
              </a>
            </div>
          </div>
          
          <div className="md:col-span-3 lg:col-span-2 lg:col-start-7">
            <h4 className="text-sm font-bold uppercase tracking-widest text-background/40 mb-6">Navigatie</h4>
            <ul className="flex flex-col gap-4">
              <li><a href="#diensten" onClick={(e) => scrollTo("#diensten", e)} className="text-sm text-background/80 hover:text-white transition-colors">Diensten</a></li>
              <li><a href="#resultaten" onClick={(e) => scrollTo("#resultaten", e)} className="text-sm text-background/80 hover:text-white transition-colors">Ervaring</a></li>
              <li><a href="#over-mij" onClick={(e) => scrollTo("#over-mij", e)} className="text-sm text-background/80 hover:text-white transition-colors">Over Mij</a></li>
              <li><a href="#contact" onClick={(e) => scrollTo("#contact", e)} className="text-sm text-background/80 hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>
          
          <div className="md:col-span-4 lg:col-span-4">
            <h4 className="text-sm font-bold uppercase tracking-widest text-background/40 mb-6">Expertise</h4>
            <ul className="flex flex-col gap-4">
              <li className="text-sm text-background/80">IT Project Manager Nederland</li>
              <li className="text-sm text-background/80">M365 migratie specialist</li>
              <li className="text-sm text-background/80">WMS implementatie consultant</li>
              <li className="text-sm text-background/80">Supply chain IT consultant</li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-background/10 mt-16 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-background/40">
            &copy; {new Date().getFullYear()} BrightChain. Alle rechten voorbehouden.
          </p>
          <div className="flex gap-4">
            <span className="text-xs text-background/40">KvK: 98331914</span>
            <span className="text-xs text-background/40">Amersfoort, Nederland</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
