import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Phone, ChevronDown, Plane, GraduationCap, Globe, Moon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";

const mainNavLinks = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
];

const servicesDropdown = [
  { name: "UK Visit Visa", path: "/uk-visa", icon: Globe, description: "Expert UK visa assistance" },
  { name: "Student Visa", path: "/student-visa", icon: GraduationCap, description: "Study abroad guidance" },
  { name: "Other Countries", path: "/visa-services", icon: Plane, description: "Worldwide visa processing" },
  { name: "Hajj & Umrah", path: "/hajj-umrah", icon: Moon, description: "Sacred journey packages" },
];

const programsDropdown = [
  { name: "Summer Schools", path: "/summer-schools", description: "ESL programs in UK & USA" },
  { name: "Travel Packages", path: "/travel-packages", description: "Curated worldwide tours" },
];

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
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
    setActiveDropdown(null);
  }, [location]);

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled
            ? "bg-background/80 backdrop-blur-xl shadow-elegant py-3 border-b border-border/50"
            : "bg-transparent py-5"
        }`}
      >
        <div className="container mx-auto px-4 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-2 group">
              <div className="relative">
                <span
                  className={`font-heading text-xl md:text-2xl font-bold tracking-tight transition-colors duration-300 ${
                    isScrolled ? "text-foreground" : "text-primary-foreground"
                  }`}
                >
                  Notting Hill
                </span>
                <span
                  className={`font-heading text-xl md:text-2xl font-light italic ml-2 transition-colors duration-300 ${
                    isScrolled ? "text-gold" : "text-gold"
                  }`}
                >
                  Voyages
                </span>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-1">
              {mainNavLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  className={`px-4 py-2 font-body text-sm font-medium tracking-wide transition-all duration-300 hover:text-gold rounded-lg ${
                    isScrolled ? "text-foreground hover:bg-secondary" : "text-primary-foreground hover:bg-primary-foreground/10"
                  } ${location.pathname === link.path ? "text-gold" : ""}`}
                >
                  {link.name}
                </Link>
              ))}

              {/* Services Dropdown */}
              <div
                className="relative"
                onMouseEnter={() => setActiveDropdown("services")}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <button
                  className={`flex items-center gap-1 px-4 py-2 font-body text-sm font-medium tracking-wide transition-all duration-300 hover:text-gold rounded-lg ${
                    isScrolled ? "text-foreground hover:bg-secondary" : "text-primary-foreground hover:bg-primary-foreground/10"
                  }`}
                >
                  Visa Services
                  <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${activeDropdown === "services" ? "rotate-180" : ""}`} />
                </button>
                <AnimatePresence>
                  {activeDropdown === "services" && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      transition={{ duration: 0.2 }}
                      className="absolute top-full left-0 mt-2 w-72 glass rounded-2xl shadow-lifted overflow-hidden"
                    >
                      <div className="p-2">
                        {servicesDropdown.map((item) => (
                          <Link
                            key={item.name}
                            to={item.path}
                            className="flex items-start gap-3 p-3 rounded-xl hover:bg-secondary transition-colors group"
                          >
                            <div className="p-2 rounded-lg bg-gold/10 text-gold group-hover:bg-gold group-hover:text-primary transition-colors">
                              <item.icon className="w-4 h-4" />
                            </div>
                            <div>
                              <div className="font-medium text-foreground text-sm">{item.name}</div>
                              <div className="text-xs text-muted-foreground">{item.description}</div>
                            </div>
                          </Link>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Programs Dropdown */}
              <div
                className="relative"
                onMouseEnter={() => setActiveDropdown("programs")}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <button
                  className={`flex items-center gap-1 px-4 py-2 font-body text-sm font-medium tracking-wide transition-all duration-300 hover:text-gold rounded-lg ${
                    isScrolled ? "text-foreground hover:bg-secondary" : "text-primary-foreground hover:bg-primary-foreground/10"
                  }`}
                >
                  Programs
                  <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${activeDropdown === "programs" ? "rotate-180" : ""}`} />
                </button>
                <AnimatePresence>
                  {activeDropdown === "programs" && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      transition={{ duration: 0.2 }}
                      className="absolute top-full left-0 mt-2 w-64 glass rounded-2xl shadow-lifted overflow-hidden"
                    >
                      <div className="p-2">
                        {programsDropdown.map((item) => (
                          <Link
                            key={item.name}
                            to={item.path}
                            className="flex flex-col p-3 rounded-xl hover:bg-secondary transition-colors"
                          >
                            <div className="font-medium text-foreground text-sm">{item.name}</div>
                            <div className="text-xs text-muted-foreground">{item.description}</div>
                          </Link>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              <Link
                to="/contact"
                className={`px-4 py-2 font-body text-sm font-medium tracking-wide transition-all duration-300 hover:text-gold rounded-lg ${
                  isScrolled ? "text-foreground hover:bg-secondary" : "text-primary-foreground hover:bg-primary-foreground/10"
                } ${location.pathname === "/contact" ? "text-gold" : ""}`}
              >
                Contact
              </Link>
            </div>

            {/* CTA Button */}
            <div className="hidden lg:flex items-center gap-4">
              <a href="tel:+447123456789" className={`flex items-center gap-2 text-sm transition-colors duration-300 ${
                isScrolled ? "text-muted-foreground hover:text-foreground" : "text-primary-foreground/80 hover:text-primary-foreground"
              }`}>
                <Phone className="w-4 h-4" />
                <span className="font-medium">+44 7123 456 789</span>
              </a>
              <Button variant={isScrolled ? "gold" : "white"} size="default" asChild>
                <Link to="/contact">Free Consultation</Link>
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={`lg:hidden p-2 rounded-lg transition-colors ${
                isScrolled ? "text-foreground hover:bg-secondary" : "text-primary-foreground hover:bg-primary-foreground/10"
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
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 lg:hidden"
          >
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className="absolute inset-y-0 right-0 w-full max-w-sm bg-background shadow-lifted"
            >
              <div className="flex flex-col h-full pt-24 pb-8 px-6">
                <div className="flex-1 space-y-2">
                  {mainNavLinks.map((link, index) => (
                    <motion.div
                      key={link.name}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.05 }}
                    >
                      <Link
                        to={link.path}
                        className={`block py-3 px-4 rounded-xl font-heading text-lg transition-colors ${
                          location.pathname === link.path
                            ? "text-gold bg-gold/10"
                            : "text-foreground hover:bg-secondary"
                        }`}
                      >
                        {link.name}
                      </Link>
                    </motion.div>
                  ))}

                  <div className="pt-4 pb-2">
                    <div className="text-xs font-medium text-muted-foreground uppercase tracking-wider px-4 mb-2">Visa Services</div>
                    {servicesDropdown.map((item, index) => (
                      <motion.div
                        key={item.name}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: (mainNavLinks.length + index) * 0.05 }}
                      >
                        <Link
                          to={item.path}
                          className="flex items-center gap-3 py-3 px-4 rounded-xl text-foreground hover:bg-secondary transition-colors"
                        >
                          <item.icon className="w-5 h-5 text-gold" />
                          <span className="font-medium">{item.name}</span>
                        </Link>
                      </motion.div>
                    ))}
                  </div>

                  <div className="pt-4 pb-2">
                    <div className="text-xs font-medium text-muted-foreground uppercase tracking-wider px-4 mb-2">Programs</div>
                    {programsDropdown.map((item, index) => (
                      <motion.div
                        key={item.name}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: (mainNavLinks.length + servicesDropdown.length + index) * 0.05 }}
                      >
                        <Link
                          to={item.path}
                          className="block py-3 px-4 rounded-xl text-foreground hover:bg-secondary transition-colors font-medium"
                        >
                          {item.name}
                        </Link>
                      </motion.div>
                    ))}
                  </div>

                  <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.4 }}
                  >
                    <Link
                      to="/contact"
                      className={`block py-3 px-4 rounded-xl font-heading text-lg transition-colors ${
                        location.pathname === "/contact"
                          ? "text-gold bg-gold/10"
                          : "text-foreground hover:bg-secondary"
                      }`}
                    >
                      Contact
                    </Link>
                  </motion.div>
                </div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                  className="pt-6 space-y-4"
                >
                  <a href="tel:+447123456789" className="flex items-center gap-3 text-muted-foreground">
                    <Phone className="w-5 h-5" />
                    <span>+44 7123 456 789</span>
                  </a>
                  <Button variant="gold" size="lg" className="w-full" asChild>
                    <Link to="/contact">Free Consultation</Link>
                  </Button>
                </motion.div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;