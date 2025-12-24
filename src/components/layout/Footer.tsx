import { Link } from "react-router-dom";
import { Instagram, Facebook, Twitter, Mail, Phone, MapPin, ArrowUpRight, Linkedin, MessageCircle } from "lucide-react";
import { motion } from "framer-motion";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-primary text-primary-foreground overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-gold/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-navy-light/30 rounded-full blur-3xl" />
      </div>

      <div className="relative container mx-auto px-4 py-16 lg:py-24">
        {/* Top Section - CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16 lg:mb-24"
        >
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl mb-6">
            Ready to Start Your Journey?
          </h2>
          <p className="text-primary-foreground/70 max-w-2xl mx-auto mb-8 text-lg">
            Let us help you make your travel dreams a reality. Contact us today for a free consultation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center gap-2 px-6 sm:px-8 py-3 sm:py-4 bg-gold text-primary font-semibold rounded-xl hover:bg-gold-dark transition-colors group text-sm sm:text-base"
            >
              Get Free Consultation
              <ArrowUpRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </Link>
            <a
              href="https://wa.me/447385608114"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-6 sm:px-8 py-3 sm:py-4 bg-green-600 text-white font-semibold rounded-xl hover:bg-green-700 transition-colors group text-sm sm:text-base"
            >
              <MessageCircle className="w-4 h-4 sm:w-5 sm:h-5" />
              WhatsApp Us
            </a>
          </div>
        </motion.div>

        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 lg:gap-8 mb-16">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2 mb-6">
              <span className="font-heading text-2xl font-bold">Notting Hill</span>
              <span className="font-heading text-2xl font-light italic text-gold">Voyages</span>
            </div>
            <p className="font-body text-primary-foreground/70 leading-relaxed mb-8 max-w-sm">
              Your trusted partner for UK visit visas, student visas, Hajj & Umrah packages, summer school programs, and worldwide travel experiences. We handle everything, you just enjoy.
            </p>
            <div className="flex gap-3">
              {[
                { icon: Instagram, href: "#" },
                { icon: Facebook, href: "#" },
                { icon: Twitter, href: "#" },
                { icon: Linkedin, href: "#" },
              ].map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  className="p-3 rounded-xl bg-primary-foreground/10 hover:bg-gold hover:text-primary transition-all duration-300 group"
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Visa Services */}
          <div>
            <h4 className="font-heading text-lg font-medium mb-6">Visa Services</h4>
            <ul className="space-y-3">
              {[
                { name: "UK Visit Visa", path: "/uk-visa" },
                { name: "Student Visa", path: "/student-visa" },
                { name: "Other Countries", path: "/visa-services" },
                { name: "Document Assistance", path: "/uk-visa" },
                { name: "Visa Consultation", path: "/contact" },
              ].map((item) => (
                <li key={item.name}>
                  <Link
                    to={item.path}
                    className="font-body text-primary-foreground/70 hover:text-gold transition-colors duration-300 link-underline"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Programs */}
          <div>
            <h4 className="font-heading text-lg font-medium mb-6">Programs</h4>
            <ul className="space-y-3">
              {[
                { name: "Hajj Packages", path: "/hajj-umrah" },
                { name: "Umrah Packages", path: "/hajj-umrah" },
                { name: "Summer Schools", path: "/summer-schools" },
                { name: "ESL Programs", path: "/summer-schools" },
                { name: "Travel Packages", path: "/travel-packages" },
              ].map((item) => (
                <li key={item.name}>
                  <Link
                    to={item.path}
                    className="font-body text-primary-foreground/70 hover:text-gold transition-colors duration-300 link-underline"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-heading text-lg font-medium mb-6">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-gold mt-0.5 flex-shrink-0" />
                <span className="font-body text-primary-foreground/70">
                  Sylhet, Bangladesh
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-gold flex-shrink-0" />
                <a href="tel:+447385608114" className="font-body text-primary-foreground/70 hover:text-gold transition-colors">
                  +44 7385 608 114
                </a>
              </li>
              <li className="flex items-center gap-3">
                <MessageCircle className="w-5 h-5 text-gold flex-shrink-0" />
                <a href="https://wa.me/447385608114" target="_blank" rel="noopener noreferrer" className="font-body text-primary-foreground/70 hover:text-gold transition-colors">
                  WhatsApp
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-gold flex-shrink-0" />
                <a href="mailto:info@nottinghillvoyages.com" className="font-body text-primary-foreground/70 hover:text-gold transition-colors text-sm">
                  info@nottinghillvoyages.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-primary-foreground/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="font-body text-sm text-primary-foreground/50">
            © {currentYear} Notting Hill Voyages. All rights reserved.
          </p>
          <div className="flex flex-wrap justify-center gap-6">
            <Link to="/privacy" className="font-body text-sm text-primary-foreground/50 hover:text-gold transition-colors">
              Privacy Policy
            </Link>
            <Link to="/terms" className="font-body text-sm text-primary-foreground/50 hover:text-gold transition-colors">
              Terms of Service
            </Link>
            <Link to="/about" className="font-body text-sm text-primary-foreground/50 hover:text-gold transition-colors">
              About Us
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;