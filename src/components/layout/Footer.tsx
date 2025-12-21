import { Link } from "react-router-dom";
import { Instagram, Facebook, Twitter, Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-16 lg:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2 mb-6">
              <span className="font-heading text-2xl font-semibold">Notting Hill</span>
              <span className="font-heading text-2xl font-light italic text-gold">Voyages</span>
            </div>
            <p className="font-body text-primary-foreground/70 leading-relaxed mb-6">
              Crafting extraordinary journeys for discerning travellers. Where every destination becomes an unforgettable story.
            </p>
            <div className="flex gap-4">
              <a href="#" className="p-2 rounded-full bg-primary-foreground/10 hover:bg-gold hover:text-primary transition-all duration-300">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="p-2 rounded-full bg-primary-foreground/10 hover:bg-gold hover:text-primary transition-all duration-300">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="p-2 rounded-full bg-primary-foreground/10 hover:bg-gold hover:text-primary transition-all duration-300">
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading text-lg font-medium mb-6">Explore</h4>
            <ul className="space-y-3">
              {["Destinations", "Experiences", "Luxury Villas", "Private Jets", "Yacht Charters"].map((item) => (
                <li key={item}>
                  <Link to="/destinations" className="font-body text-primary-foreground/70 hover:text-gold transition-colors duration-300">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-heading text-lg font-medium mb-6">Company</h4>
            <ul className="space-y-3">
              {[
                { name: "About Us", path: "/about" },
                { name: "Our Team", path: "/about" },
                { name: "Testimonials", path: "/about" },
                { name: "Press", path: "/about" },
                { name: "Careers", path: "/contact" },
              ].map((item) => (
                <li key={item.name}>
                  <Link to={item.path} className="font-body text-primary-foreground/70 hover:text-gold transition-colors duration-300">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-heading text-lg font-medium mb-6">Contact</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-gold mt-0.5 flex-shrink-0" />
                <span className="font-body text-primary-foreground/70">
                  123 Portobello Road<br />
                  Notting Hill, London W11 2QB
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-gold flex-shrink-0" />
                <a href="tel:+44123456789" className="font-body text-primary-foreground/70 hover:text-gold transition-colors">
                  +44 123 456 789
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-gold flex-shrink-0" />
                <a href="mailto:hello@nhvoyages.com" className="font-body text-primary-foreground/70 hover:text-gold transition-colors">
                  hello@nhvoyages.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-primary-foreground/10 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="font-body text-sm text-primary-foreground/50">
            © {new Date().getFullYear()} Notting Hill Voyages. All rights reserved.
          </p>
          <div className="flex gap-6">
            <Link to="/privacy" className="font-body text-sm text-primary-foreground/50 hover:text-gold transition-colors">
              Privacy Policy
            </Link>
            <Link to="/terms" className="font-body text-sm text-primary-foreground/50 hover:text-gold transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
