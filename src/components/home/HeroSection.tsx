import { motion } from "framer-motion";
import { ArrowRight, Plane, GraduationCap, Globe, Moon, Shield, Star } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-santorini.jpg";

const HeroSection = () => {
  const services = [
    { icon: Globe, label: "UK Visa", path: "/uk-visa" },
    { icon: GraduationCap, label: "Student Visa", path: "/student-visa" },
    { icon: Moon, label: "Hajj & Umrah", path: "/hajj-umrah" },
    { icon: Plane, label: "Travel Packages", path: "/travel-packages" },
  ];

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Parallax Effect */}
      <div className="absolute inset-0">
        <motion.img
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          src={heroImage}
          alt="Luxury travel destination"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-primary/60 via-primary/40 to-primary/90" />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/70 via-transparent to-transparent" />
      </div>

      {/* Floating decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{ y: [-20, 20, -20] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/4 right-1/4 w-64 h-64 bg-gold/10 rounded-full blur-3xl"
        />
        <motion.div
          animate={{ y: [20, -20, 20] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-primary-foreground/5 rounded-full blur-3xl"
        />
      </div>

      {/* Content */}
      <div className="relative container mx-auto px-4 pt-32 pb-20 lg:pt-40 lg:pb-32">
        <div className="max-w-4xl">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-dark text-primary-foreground/90 text-sm mb-8">
              <Shield className="w-4 h-4 text-gold" />
              <span>Trusted by 5,000+ Clients Worldwide</span>
              <div className="flex -space-x-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3 h-3 fill-gold text-gold" />
                ))}
              </div>
            </div>
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="font-heading text-4xl md:text-6xl lg:text-7xl text-primary-foreground leading-[1.1] mb-6"
          >
            Your Journey to the
            <br />
            <span className="text-gold">UK Starts Here</span>
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="font-body text-lg md:text-xl text-primary-foreground/80 max-w-2xl mb-10 leading-relaxed"
          >
            Expert UK visit visa assistance, student visas, Hajj & Umrah packages, 
            summer school programs, and worldwide travel experiences. 
            <span className="text-gold font-medium"> We handle everything, you just enjoy.</span>
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="flex flex-col sm:flex-row gap-4 mb-16"
          >
            <Button variant="gold" size="xl" asChild className="group">
              <a href="https://calendly.com/nottinghillvoyages" target="_blank" rel="noopener noreferrer">
                Book a Consultation
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
            </Button>
            <Button variant="heroOutline" size="xl" asChild>
              <Link to="/uk-visa">Explore UK Visa Services</Link>
            </Button>
          </motion.div>

          {/* Quick Service Links */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-wrap gap-3"
          >
            {services.map((service, index) => (
              <Link
                key={service.label}
                to={service.path}
                className="flex items-center gap-2 px-4 py-2 rounded-full glass-dark text-primary-foreground/90 hover:bg-gold hover:text-primary transition-all duration-300 text-sm font-medium"
              >
                <service.icon className="w-4 h-4" />
                {service.label}
              </Link>
            ))}
          </motion.div>
        </div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="absolute bottom-10 right-4 lg:right-10 hidden lg:flex gap-8"
        >
          {[
            { value: "98%", label: "Success Rate" },
            { value: "5,000+", label: "Happy Clients" },
            { value: "50+", label: "Countries Served" },
          ].map((stat) => (
            <div key={stat.label} className="text-center glass-dark rounded-2xl px-6 py-4">
              <div className="font-heading text-3xl text-gold mb-1">{stat.value}</div>
              <div className="font-body text-sm text-primary-foreground/70">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="font-body text-xs text-primary-foreground/60 tracking-widest uppercase">Scroll</span>
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
          className="w-px h-10 bg-gradient-to-b from-gold to-transparent"
        />
      </motion.div>
    </section>
  );
};

export default HeroSection;