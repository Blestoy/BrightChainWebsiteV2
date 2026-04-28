import { useState, useEffect } from "react";
import { Link } from "wouter";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Diensten", href: "#diensten" },
    { name: "Ervaring", href: "#resultaten" },
    { name: "Over Mij", href: "#over-mij" },
  ];

  const scrollTo = (id: string) => {
    setMobileMenuOpen(false);
    const element = document.querySelector(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 border-b border-transparent ${
        isScrolled
          ? "bg-background/90 backdrop-blur-md border-border py-4 shadow-sm"
          : "bg-transparent py-6"
      }`}
    >
      <div className="container mx-auto px-6 md:px-12 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 z-50 relative">
          <img
            src="/brightchain-logo.png"
            alt="BrightChain"
            className="h-14 w-auto object-contain"
          />
        </Link>

        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <button
              key={link.name}
              onClick={() => scrollTo(link.href)}
              className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors uppercase tracking-widest"
            >
              {link.name}
            </button>
          ))}
          <Button
            onClick={() => scrollTo("#contact")}
            className="rounded-xl bg-primary hover:bg-secondary text-primary-foreground font-medium px-6"
          >
            Contact
          </Button>
        </nav>

        <button
          className="md:hidden z-50 relative p-2 text-foreground"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 bg-background pt-24 px-6 pb-6 flex flex-col h-screen"
            >
              <nav className="flex flex-col gap-6 text-center mt-12">
                {navLinks.map((link) => (
                  <button
                    key={link.name}
                    onClick={() => scrollTo(link.href)}
                    className="text-2xl font-serif text-foreground hover:text-primary transition-colors"
                  >
                    {link.name}
                  </button>
                ))}
                <div className="pt-8">
                  <Button
                    onClick={() => scrollTo("#contact")}
                    size="lg"
                    className="rounded-xl bg-primary hover:bg-secondary w-full text-lg"
                  >
                    Contact
                  </Button>
                </div>
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
}
