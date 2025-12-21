import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { name: "Home", path: "/" },
  { name: "Destinations", path: "/destinations" },
  { name: "Experiences", path: "/experiences" },
  { name: "About", path: "/about" },
  { name: "Contact", path: "/contact" },
];

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled
            ? "bg-background/95 backdrop-blur-md shadow-elegant py-3"
            : "bg-transparent py-6"
        }`}
      >
        <div className="container mx-auto px-4 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-3">
              <span
                className={`font-heading text-xl md:text-2xl font-semibold tracking-wide transition-colors duration-300 ${
                  isScrolled ? "text-primary" : "text-primary-foreground"
                }`}
              >
                Notting Hill
              </span>
              <span
                className={`font-heading text-xl md:text-2xl font-light italic transition-colors duration-300 ${
                  isScrolled ? "text-gold" : "text-gold"
                }`}
              >
                Voyages
              </span>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-8">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  className={`font-body text-sm tracking-wide transition-all duration-300 hover:text-gold relative group ${
                    isScrolled ? "text-foreground" : "text-primary-foreground"
                  } ${location.pathname === link.path ? "text-gold" : ""}`}
                >
                  {link.name}
                  <span
                    className={`absolute -bottom-1 left-0 h-[1px] bg-gold transition-all duration-300 ${
                      location.pathname === link.path ? "w-full" : "w-0 group-hover:w-full"
                    }`}
                  />
                </Link>
              ))}
            </div>

            {/* CTA Button */}
            <div className="hidden lg:flex items-center gap-4">
              <a href="tel:+44123456789" className={`flex items-center gap-2 text-sm transition-colors duration-300 ${
                isScrolled ? "text-muted-foreground" : "text-primary-foreground/80"
              }`}>
                <Phone className="w-4 h-4" />
                <span>+44 123 456 789</span>
              </a>
              <Button variant={isScrolled ? "gold" : "hero"} size="sm" asChild>
                <Link to="/contact">Plan Your Journey</Link>
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={`lg:hidden p-2 transition-colors ${
                isScrolled ? "text-foreground" : "text-primary-foreground"
              }`}
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 lg:hidden"
          >
            <div className="absolute inset-0 bg-primary/98 backdrop-blur-lg pt-24">
              <div className="container mx-auto px-4">
                <div className="flex flex-col gap-6">
                  {navLinks.map((link, index) => (
                    <motion.div
                      key={link.name}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                    >
                      <Link
                        to={link.path}
                        className={`font-heading text-2xl transition-colors duration-300 ${
                          location.pathname === link.path
                            ? "text-gold"
                            : "text-primary-foreground hover:text-gold"
                        }`}
                      >
                        {link.name}
                      </Link>
                    </motion.div>
                  ))}
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.5 }}
                    className="pt-6"
                  >
                    <Button variant="gold" size="lg" className="w-full" asChild>
                      <Link to="/contact">Plan Your Journey</Link>
                    </Button>
                  </motion.div>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
