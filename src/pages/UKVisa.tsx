import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { 
  CheckCircle2, 
  Clock, 
  FileText, 
  Shield, 
  Users, 
  Briefcase,
  Plane,
  Heart,
  Baby,
  GraduationCap,
  Building2,
  ArrowRight,
  Phone,
  Star
} from "lucide-react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";

const visaTypes = [
  {
    icon: Plane,
    title: "Standard Visitor Visa",
    duration: "Up to 6 months",
    description: "For tourism, visiting family/friends, business meetings, or short courses",
    features: ["Single or multiple entries", "Valid for 6 months", "Can be extended in special circumstances"],
  },
  {
    icon: Briefcase,
    title: "Business Visitor Visa",
    duration: "Up to 6 months",
    description: "For business meetings, conferences, negotiations, and site visits",
    features: ["Attend meetings & conferences", "Negotiate & sign deals", "Site visits & training"],
  },
  {
    icon: Heart,
    title: "Family Visitor Visa",
    duration: "Up to 6 months",
    description: "Visit family members settled in the UK",
    features: ["Visit relatives", "Attend family events", "Support during illness"],
  },
  {
    icon: GraduationCap,
    title: "Short-Term Study Visa",
    duration: "Up to 11 months",
    description: "For English language courses or short academic programs",
    features: ["Study at accredited institutions", "English language courses", "No work permitted"],
  },
  {
    icon: Building2,
    title: "Medical Treatment Visa",
    duration: "Up to 11 months",
    description: "Receive private medical treatment in the UK",
    features: ["Private medical treatment", "Consultation with specialists", "Organ donation"],
  },
  {
    icon: Baby,
    title: "Parent of a Child Visa",
    duration: "Up to 12 months",
    description: "For parents of children at UK schools",
    features: ["Accompany child at school", "Multiple entries available", "Long-term options"],
  },
];

const ourServices = [
  {
    title: "Document Assessment",
    description: "We review your documents to ensure they meet UK Home Office requirements",
  },
  {
    title: "Application Preparation",
    description: "Complete form filling and document organization for a strong application",
  },
  {
    title: "Financial Documentation",
    description: "Guidance on bank statements, sponsorship letters, and proof of funds",
  },
  {
    title: "Interview Preparation",
    description: "Mock interviews and preparation for visa center appointments",
  },
  {
    title: "Appointment Booking",
    description: "We schedule your biometric appointment at your convenience",
  },
  {
    title: "Application Tracking",
    description: "Regular updates on your application status until decision",
  },
];

const documentChecklist = [
  "Valid passport (at least 6 months validity)",
  "Passport-sized photographs (recent)",
  "Bank statements (last 6 months)",
  "Employment letter or business documents",
  "Property documents (if applicable)",
  "Travel itinerary and accommodation details",
  "Invitation letter from UK sponsor (if visiting family)",
  "Previous travel history evidence",
  "Proof of ties to home country",
  "Travel insurance (recommended)",
];

const stats = [
  { number: "98%", label: "Approval Rate" },
  { number: "5,000+", label: "Visas Processed" },
  { number: "24-48hrs", label: "Document Review" },
  { number: "15+", label: "Years Experience" },
];

const UKVisa = () => {
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
              <Shield className="w-4 h-4" />
              Expert UK Visa Services
            </span>
            <h1 className="font-heading text-4xl md:text-6xl lg:text-7xl text-primary-foreground mb-6 leading-tight">
              UK Visit Visa <span className="italic font-light text-gold">Made Simple</span>
            </h1>
            <p className="font-body text-primary-foreground/80 text-lg md:text-xl leading-relaxed mb-8 max-w-2xl">
              With our 98% approval rate and 15+ years of expertise, we handle everything 
              from documentation to submission, ensuring your UK visa journey is seamless.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="gold" size="lg" className="text-base" asChild>
                <Link to="/contact">
                  Start Your Application
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
              </Button>
              <Button variant="heroOutline" size="lg" className="text-base" asChild>
                <a href="tel:+447123456789">
                  <Phone className="w-5 h-5 mr-2" />
                  Free Consultation
                </a>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
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

      {/* Visa Types */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <span className="section-label">Visa Categories</span>
            <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl text-foreground mb-4">
              Types of <span className="italic font-light">UK Visit Visas</span>
            </h2>
            <p className="font-body text-muted-foreground max-w-2xl mx-auto">
              We handle all categories of UK visitor visas, ensuring the right application for your specific needs.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {visaTypes.map((visa, index) => (
              <motion.div
                key={visa.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="feature-card group"
              >
                <div className="w-14 h-14 rounded-2xl bg-gold/10 flex items-center justify-center mb-6 group-hover:bg-gold/20 transition-colors">
                  <visa.icon className="w-7 h-7 text-gold" />
                </div>
                <h3 className="font-heading text-xl text-foreground mb-2">{visa.title}</h3>
                <div className="inline-flex items-center gap-1 text-sm text-gold mb-3">
                  <Clock className="w-4 h-4" />
                  {visa.duration}
                </div>
                <p className="font-body text-muted-foreground text-sm mb-4">{visa.description}</p>
                <ul className="space-y-2">
                  {visa.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-2 text-sm text-muted-foreground">
                      <CheckCircle2 className="w-4 h-4 text-gold flex-shrink-0 mt-0.5" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Services */}
      <section className="py-16 lg:py-24 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span className="section-label">Our Process</span>
              <h2 className="font-heading text-3xl md:text-4xl text-foreground mb-6">
                Complete Visa <span className="italic font-light">Support Services</span>
              </h2>
              <p className="font-body text-muted-foreground mb-8">
                From the initial consultation to receiving your visa, we guide you through 
                every step of the UK visa application process with personalized attention.
              </p>
              
              <div className="grid sm:grid-cols-2 gap-4">
                {ourServices.map((service, index) => (
                  <motion.div
                    key={service.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    className="p-4 rounded-xl bg-background shadow-soft"
                  >
                    <h4 className="font-heading text-sm font-medium text-foreground mb-1">{service.title}</h4>
                    <p className="text-xs text-muted-foreground">{service.description}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <div className="bg-background rounded-2xl shadow-lifted p-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 rounded-xl bg-gold/10 flex items-center justify-center">
                    <FileText className="w-6 h-6 text-gold" />
                  </div>
                  <div>
                    <h3 className="font-heading text-xl text-foreground">Document Checklist</h3>
                    <p className="text-sm text-muted-foreground">Essential documents for your application</p>
                  </div>
                </div>
                <ul className="space-y-3">
                  {documentChecklist.map((doc, index) => (
                    <li key={index} className="flex items-start gap-3 text-sm">
                      <CheckCircle2 className="w-5 h-5 text-gold flex-shrink-0" />
                      <span className="text-muted-foreground">{doc}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <span className="section-label">Transparent Pricing</span>
            <h2 className="font-heading text-3xl md:text-4xl text-foreground mb-4">
              Our <span className="italic font-light">Service Packages</span>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {[
              {
                name: "Essential",
                price: "£149",
                description: "Perfect for straightforward applications",
                features: [
                  "Document checklist & review",
                  "Application form filling",
                  "Basic submission support",
                  "Email support",
                ],
              },
              {
                name: "Premium",
                price: "£299",
                description: "Most popular for family visits",
                popular: true,
                features: [
                  "Everything in Essential",
                  "Priority document review",
                  "Interview preparation",
                  "Appointment booking",
                  "Application tracking",
                  "Phone support",
                ],
              },
              {
                name: "Platinum",
                price: "£499",
                description: "VIP end-to-end service",
                features: [
                  "Everything in Premium",
                  "Home document collection",
                  "Biometric appointment escort",
                  "Expedited processing",
                  "Dedicated consultant",
                  "24/7 support",
                ],
              },
            ].map((pkg, index) => (
              <motion.div
                key={pkg.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`relative p-8 rounded-2xl ${
                  pkg.popular
                    ? "bg-primary text-primary-foreground shadow-lifted"
                    : "bg-card border border-border shadow-card"
                }`}
              >
                {pkg.popular && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                    <span className="px-4 py-1 rounded-full bg-gold text-primary text-xs font-medium flex items-center gap-1">
                      <Star className="w-3 h-3" /> Most Popular
                    </span>
                  </div>
                )}
                <h3 className="font-heading text-xl mb-2">{pkg.name}</h3>
                <div className="flex items-baseline gap-1 mb-2">
                  <span className="font-heading text-4xl">{pkg.price}</span>
                  <span className={`text-sm ${pkg.popular ? "text-primary-foreground/70" : "text-muted-foreground"}`}>
                    per application
                  </span>
                </div>
                <p className={`text-sm mb-6 ${pkg.popular ? "text-primary-foreground/80" : "text-muted-foreground"}`}>
                  {pkg.description}
                </p>
                <ul className="space-y-3 mb-8">
                  {pkg.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-2 text-sm">
                      <CheckCircle2 className={`w-4 h-4 flex-shrink-0 mt-0.5 ${pkg.popular ? "text-gold" : "text-gold"}`} />
                      <span className={pkg.popular ? "text-primary-foreground/90" : "text-muted-foreground"}>
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>
                <Button
                  variant={pkg.popular ? "gold" : "outline"}
                  className="w-full"
                  asChild
                >
                  <Link to="/contact">Get Started</Link>
                </Button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 lg:py-24 bg-secondary/30">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <span className="section-label">FAQ</span>
            <h2 className="font-heading text-3xl md:text-4xl text-foreground">
              Frequently Asked <span className="italic font-light">Questions</span>
            </h2>
          </motion.div>

          <div className="max-w-3xl mx-auto space-y-4">
            {[
              {
                q: "How long does the UK visit visa application process take?",
                a: "Standard processing takes 3-4 weeks from the date of your biometric appointment. Priority services (5-7 working days) and Super Priority (24-48 hours) are available for an additional fee.",
              },
              {
                q: "What are the financial requirements for a UK visit visa?",
                a: "You must show you can support yourself during your stay. Generally, bank statements for the last 6 months showing consistent balance and income are required. The exact amount depends on your trip duration and accommodation plans.",
              },
              {
                q: "Can I work on a UK visit visa?",
                a: "No, work is not permitted on a Standard Visitor Visa. You may attend business meetings, conferences, or training, but you cannot be employed or receive payment from a UK source.",
              },
              {
                q: "How long can I stay in the UK on a visit visa?",
                a: "A Standard Visitor Visa allows stays of up to 6 months per visit. However, you cannot live in the UK through frequent visits. Immigration may question your intent if you spend more time in the UK than your home country.",
              },
              {
                q: "What happens if my visa application is refused?",
                a: "You can reapply immediately with a stronger application addressing the refusal reasons. We offer specialized support for refused applications and can assess your case to improve your chances on reapplication.",
              },
            ].map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="bg-background rounded-xl p-6 shadow-soft"
              >
                <h4 className="font-heading text-lg text-foreground mb-2">{faq.q}</h4>
                <p className="font-body text-sm text-muted-foreground">{faq.a}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 lg:py-24 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto"
          >
            <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl mb-6">
              Ready to Start Your <span className="italic font-light text-gold">UK Journey?</span>
            </h2>
            <p className="font-body text-primary-foreground/80 text-lg mb-8">
              Book a free consultation with our UK visa experts today. We'll assess your 
              case and guide you towards a successful application.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button variant="gold" size="lg" asChild>
                <Link to="/contact">Book Free Consultation</Link>
              </Button>
              <Button variant="heroOutline" size="lg" asChild>
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

export default UKVisa;
