import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { 
  Globe, 
  CheckCircle2, 
  Plane,
  Clock,
  Shield,
  ArrowRight,
  Phone,
  FileText,
  Users,
  Award,
  MapPin
} from "lucide-react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";

const regions = [
  {
    name: "Europe",
    countries: ["Schengen Countries", "Ireland", "Switzerland", "UK"],
    description: "Tourist, Business, and Family visas for European destinations",
    processingTime: "15-30 days",
    popular: true,
  },
  {
    name: "North America",
    countries: ["USA", "Canada", "Mexico"],
    description: "B1/B2, ESTA, eTA, and visitor visas",
    processingTime: "2-8 weeks",
    popular: true,
  },
  {
    name: "Middle East",
    countries: ["UAE", "Saudi Arabia", "Qatar", "Oman"],
    description: "Tourist, Business, and Transit visas",
    processingTime: "3-7 days",
    popular: false,
  },
  {
    name: "Asia Pacific",
    countries: ["Australia", "New Zealand", "Singapore", "Japan"],
    description: "Electronic and stamped visitor visas",
    processingTime: "5-20 days",
    popular: true,
  },
  {
    name: "Africa",
    countries: ["South Africa", "Kenya", "Egypt", "Morocco"],
    description: "Tourist and business visa services",
    processingTime: "5-15 days",
    popular: false,
  },
  {
    name: "South America",
    countries: ["Brazil", "Argentina", "Chile", "Peru"],
    description: "Tourist visas and travel documentation",
    processingTime: "7-21 days",
    popular: false,
  },
];

const visaTypes = [
  {
    icon: Plane,
    title: "Tourist Visas",
    description: "Holiday and leisure travel visas for worldwide destinations",
  },
  {
    icon: Users,
    title: "Business Visas",
    description: "For conferences, meetings, and short-term business activities",
  },
  {
    icon: Globe,
    title: "Transit Visas",
    description: "Connecting flights and stopovers requiring visa clearance",
  },
  {
    icon: FileText,
    title: "Work Permits",
    description: "Employment visas and work authorization documents",
  },
  {
    icon: Shield,
    title: "Residence Permits",
    description: "Long-term stay and settlement applications",
  },
  {
    icon: Award,
    title: "Special Categories",
    description: "Medical, sporting events, and cultural exchange visas",
  },
];

const services = [
  "Document preparation and verification",
  "Application form completion",
  "Appointment scheduling",
  "Embassy/Consulate liaison",
  "Travel insurance assistance",
  "Flight and hotel booking",
  "Interview preparation",
  "Application tracking",
  "Express processing available",
  "Refusal case handling",
];

const stats = [
  { number: "100+", label: "Countries Covered" },
  { number: "25,000+", label: "Visas Processed" },
  { number: "96%", label: "Success Rate" },
  { number: "24/7", label: "Support Available" },
];

const VisaServices = () => {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-28 bg-primary overflow-hidden">
        <div className="absolute inset-0 bg-gradient-mesh opacity-30" />
        <div className="absolute inset-0 bg-gradient-hero" />
        <div className="container mx-auto px-4 relative">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl"
          >
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-gold text-sm font-medium tracking-wide mb-6">
              <Globe className="w-4 h-4" />
              Worldwide Visa Services
            </span>
            <h1 className="font-heading text-4xl md:text-6xl lg:text-7xl text-primary-foreground mb-6 leading-tight">
              Visa Solutions for <span className="italic font-light text-gold">Every Destination</span>
            </h1>
            <p className="font-body text-primary-foreground/80 text-lg md:text-xl leading-relaxed mb-8 max-w-2xl">
              From Schengen to USA, Australia to Dubai – we process visas for over 100 countries 
              with a 96% success rate. Your global travel partner.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="gold" size="lg" className="text-base" asChild>
                <Link to="/contact">
                  Get Free Assessment
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
              </Button>
              <Button variant="heroOutline" size="lg" className="text-base" asChild>
                <a href="tel:+447123456789">
                  <Phone className="w-5 h-5 mr-2" />
                  Quick Enquiry
                </a>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-12 bg-secondary/50 border-y border-border">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="font-heading text-3xl md:text-4xl text-gold mb-1">{stat.number}</div>
                <div className="font-body text-sm text-muted-foreground">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Regions */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <span className="section-label">Global Coverage</span>
            <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl text-foreground mb-4">
              Visas by <span className="italic font-light">Region</span>
            </h2>
            <p className="font-body text-muted-foreground max-w-2xl mx-auto">
              We cover all major travel destinations worldwide with expert knowledge of each country's visa requirements.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {regions.map((region, index) => (
              <motion.div
                key={region.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`feature-card ${region.popular ? 'border-gold/30' : ''}`}
              >
                <div className="flex items-center justify-between mb-4">
                  <h3 className="font-heading text-xl text-foreground">{region.name}</h3>
                  {region.popular && (
                    <span className="px-2 py-1 text-xs rounded-full bg-gold/10 text-gold">Popular</span>
                  )}
                </div>
                <p className="font-body text-muted-foreground text-sm mb-4">{region.description}</p>
                <div className="flex items-center gap-2 text-sm text-muted-foreground mb-4">
                  <Clock className="w-4 h-4 text-gold" />
                  Processing: {region.processingTime}
                </div>
                <div className="flex flex-wrap gap-2">
                  {region.countries.map((country) => (
                    <span key={country} className="px-2 py-1 text-xs rounded-lg bg-secondary text-muted-foreground">
                      {country}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Visa Types */}
      <section className="py-16 lg:py-24 bg-secondary/30">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <span className="section-label">Visa Categories</span>
            <h2 className="font-heading text-3xl md:text-4xl text-foreground mb-4">
              Types of <span className="italic font-light">Visas We Process</span>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {visaTypes.map((type, index) => (
              <motion.div
                key={type.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-background p-6 rounded-xl shadow-card flex items-start gap-4"
              >
                <div className="w-12 h-12 rounded-xl bg-gold/10 flex items-center justify-center flex-shrink-0">
                  <type.icon className="w-6 h-6 text-gold" />
                </div>
                <div>
                  <h3 className="font-heading text-lg text-foreground mb-1">{type.title}</h3>
                  <p className="font-body text-sm text-muted-foreground">{type.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span className="section-label">What We Offer</span>
              <h2 className="font-heading text-3xl md:text-4xl text-foreground mb-6">
                Complete Visa <span className="italic font-light">Assistance</span>
              </h2>
              <p className="font-body text-muted-foreground mb-8">
                Our comprehensive visa services cover everything from initial consultation to 
                successful visa stamping. We handle the complexities so you can focus on your travel plans.
              </p>
              <div className="grid sm:grid-cols-2 gap-3">
                {services.map((service, index) => (
                  <div key={index} className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-gold flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-muted-foreground">{service}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-primary text-primary-foreground p-8 rounded-2xl shadow-lifted"
            >
              <h3 className="font-heading text-2xl mb-6">Popular Visa Packages</h3>
              <div className="space-y-4">
                {[
                  { dest: "Schengen Tourist Visa", price: "From £199", time: "15-20 days" },
                  { dest: "USA B1/B2 Visa", price: "From £349", time: "Interview based" },
                  { dest: "Canada Tourist Visa", price: "From £249", time: "20-30 days" },
                  { dest: "Australia Visitor Visa", price: "From £279", time: "15-25 days" },
                  { dest: "Dubai Tourist Visa", price: "From £99", time: "3-5 days" },
                ].map((pkg, index) => (
                  <div key={index} className="flex items-center justify-between py-3 border-b border-primary-foreground/10 last:border-0">
                    <div className="flex items-center gap-3">
                      <MapPin className="w-4 h-4 text-gold" />
                      <span className="text-sm">{pkg.dest}</span>
                    </div>
                    <div className="text-right">
                      <div className="text-gold text-sm font-medium">{pkg.price}</div>
                      <div className="text-xs text-primary-foreground/60">{pkg.time}</div>
                    </div>
                  </div>
                ))}
              </div>
              <Button variant="gold" className="w-full mt-6" asChild>
                <Link to="/contact">Get a Quote</Link>
              </Button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 lg:py-24 bg-secondary/30">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto"
          >
            <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl text-foreground mb-6">
              Ready to <span className="italic font-light">Travel the World?</span>
            </h2>
            <p className="font-body text-muted-foreground text-lg mb-8">
              Tell us your destination and we'll handle the rest. Free consultation for all visa enquiries.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button variant="gold" size="lg" asChild>
                <Link to="/contact">
                  Start Your Application
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <a href="tel:+447123456789">
                  <Phone className="w-5 h-5 mr-2" />
                  Call Now
                </a>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default VisaServices;
