import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { 
  GraduationCap, 
  Globe, 
  CheckCircle2, 
  BookOpen, 
  Building2,
  Briefcase,
  Shield,
  ArrowRight,
  Phone,
  Users,
  Award,
  Star
} from "lucide-react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";

import japanImage from "@/assets/destination-japan.jpg";

const countries = [
  {
    name: "United Kingdom",
    flag: "🇬🇧",
    universities: "150+ Partner Universities",
    highlight: "Post-study work visa available",
    description: "World-renowned education system with diverse course options",
  },
  {
    name: "United States",
    flag: "🇺🇸",
    universities: "200+ Partner Institutions",
    highlight: "OPT work opportunities",
    description: "Home to Ivy League and top research universities",
  },
  {
    name: "Canada",
    flag: "🇨🇦",
    universities: "80+ Partner Colleges",
    highlight: "PR pathway available",
    description: "Affordable education with immigration opportunities",
  },
  {
    name: "Australia",
    flag: "🇦🇺",
    universities: "60+ Partner Universities",
    highlight: "Work while studying",
    description: "High quality of life and strong job market",
  },
  {
    name: "Ireland",
    flag: "🇮🇪",
    universities: "40+ Partner Institutions",
    highlight: "Stay back option",
    description: "Gateway to Europe with English-medium education",
  },
  {
    name: "New Zealand",
    flag: "🇳🇿",
    universities: "30+ Partner Universities",
    highlight: "Work visa post-study",
    description: "Safe, welcoming environment for students",
  },
  {
    name: "Germany",
    flag: "🇩🇪",
    universities: "50+ Partner Universities",
    highlight: "Low/No tuition fees",
    description: "World-class engineering and technology programs",
  },
  {
    name: "Netherlands",
    flag: "🇳🇱",
    universities: "25+ Partner Universities",
    highlight: "Orientation year visa",
    description: "English-taught programs in innovative environment",
  },
];

const services = [
  {
    icon: BookOpen,
    title: "Course Selection",
    description: "Expert guidance to find the perfect program matching your career goals and academic profile",
  },
  {
    icon: Building2,
    title: "University Applications",
    description: "Complete assistance with applications to multiple universities, maximizing your acceptance chances",
  },
  {
    icon: Shield,
    title: "Visa Application",
    description: "End-to-end visa support including documentation, financial planning, and interview preparation",
  },
  {
    icon: Briefcase,
    title: "Scholarship Guidance",
    description: "Identify and apply for scholarships, grants, and financial aid opportunities",
  },
  {
    icon: Globe,
    title: "Pre-Departure Support",
    description: "Accommodation, travel arrangements, and essential guidance before you leave",
  },
  {
    icon: Users,
    title: "Post-Arrival Assistance",
    description: "Airport pickup, settling-in support, and ongoing guidance during your studies",
  },
];

const process = [
  { step: "01", title: "Free Counselling", description: "Discuss your goals, budget, and preferences" },
  { step: "02", title: "Profile Assessment", description: "Evaluate academic background and eligibility" },
  { step: "03", title: "Course & Uni Selection", description: "Shortlist best-fit programs and universities" },
  { step: "04", title: "Application Submission", description: "Prepare and submit strong applications" },
  { step: "05", title: "Offer & Visa Process", description: "Accept offers and process student visa" },
  { step: "06", title: "Pre-Departure", description: "Travel booking, accommodation, and orientation" },
];

const stats = [
  { number: "10,000+", label: "Students Placed" },
  { number: "500+", label: "University Partners" },
  { number: "50+", label: "Countries Covered" },
  { number: "95%", label: "Visa Success Rate" },
];

const popularPrograms = [
  "Business & Management",
  "Engineering & Technology",
  "Medicine & Healthcare",
  "Computer Science & IT",
  "Law & Legal Studies",
  "Arts & Design",
  "Hospitality & Tourism",
  "Science & Research",
  "Psychology & Social Sciences",
  "Finance & Accounting",
  "Architecture",
  "Media & Communications",
];

const StudentVisa = () => {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-28 bg-primary overflow-hidden">
        <div className="absolute inset-0">
          <img src={japanImage} alt="" className="w-full h-full object-cover opacity-20" />
        </div>
        <div className="absolute inset-0 bg-gradient-hero" />
        <div className="container mx-auto px-4 relative">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl"
          >
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-gold text-sm font-medium tracking-wide mb-6">
              <GraduationCap className="w-4 h-4" />
              Study Abroad Experts
            </span>
            <h1 className="font-heading text-4xl md:text-6xl lg:text-7xl text-primary-foreground mb-6 leading-tight">
              Your Global <span className="italic font-light text-gold">Education Journey</span>
            </h1>
            <p className="font-body text-primary-foreground/80 text-lg md:text-xl leading-relaxed mb-8 max-w-2xl">
              From university selection to visa approval, we guide you through every step 
              of studying abroad. Over 10,000 students placed in top universities worldwide.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="gold" size="lg" className="text-base" asChild>
                <Link to="/contact">
                  Free Counselling Session
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
              </Button>
              <Button variant="heroOutline" size="lg" className="text-base" asChild>
                <a href="tel:+447385608114">
                  <Phone className="w-5 h-5 mr-2" />
                  Speak to an Expert
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

      {/* Countries */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <span className="section-label">Study Destinations</span>
            <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl text-foreground mb-4">
              Study in <span className="italic font-light">World-Class Destinations</span>
            </h2>
            <p className="font-body text-muted-foreground max-w-2xl mx-auto">
              We have partnerships with leading universities across the globe, ensuring you get the best education and opportunities.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {countries.map((country, index) => (
              <motion.div
                key={country.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                className="p-6 rounded-xl bg-card shadow-card border border-border hover:border-gold/30 transition-colors group"
              >
                <div className="flex items-center gap-4 mb-4">
                  <span className="text-4xl">{country.flag}</span>
                  <div>
                    <h3 className="font-heading text-lg text-foreground group-hover:text-gold transition-colors">{country.name}</h3>
                    <p className="text-xs text-gold">{country.universities}</p>
                  </div>
                </div>
                <p className="font-body text-muted-foreground text-sm mb-4">{country.description}</p>
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-gold/10 text-gold text-xs">
                  <Award className="w-3 h-3" />
                  {country.highlight}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-16 lg:py-24 bg-secondary/30">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <span className="section-label">Our Services</span>
            <h2 className="font-heading text-3xl md:text-4xl text-foreground mb-4">
              Comprehensive <span className="italic font-light">Student Support</span>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-background p-6 rounded-xl shadow-card"
              >
                <div className="w-12 h-12 rounded-xl bg-gold/10 flex items-center justify-center mb-4">
                  <service.icon className="w-6 h-6 text-gold" />
                </div>
                <h3 className="font-heading text-lg text-foreground mb-2">{service.title}</h3>
                <p className="font-body text-sm text-muted-foreground">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <span className="section-label">How It Works</span>
            <h2 className="font-heading text-3xl md:text-4xl text-foreground mb-4">
              Your Path to <span className="italic font-light">Studying Abroad</span>
            </h2>
          </motion.div>

          <div className="max-w-5xl mx-auto">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {process.map((item, index) => (
                <motion.div
                  key={item.step}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="relative p-6 rounded-xl bg-card border border-border"
                >
                  <div className="font-heading text-5xl text-gold/20 absolute top-4 right-4">
                    {item.step}
                  </div>
                  <div className="relative">
                    <h3 className="font-heading text-lg text-foreground mb-2">{item.title}</h3>
                    <p className="font-body text-sm text-muted-foreground">{item.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Programs */}
      <section className="py-16 lg:py-24 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <span className="text-gold text-sm tracking-[0.25em] uppercase mb-4 block">Popular Programs</span>
            <h2 className="font-heading text-3xl md:text-4xl">
              Study Programs We <span className="italic font-light">Specialize In</span>
            </h2>
          </motion.div>

          <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 max-w-5xl mx-auto">
            {popularPrograms.map((program, index) => (
              <motion.div
                key={program}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className="p-4 rounded-xl bg-primary-foreground/5 border border-primary-foreground/10 text-center hover:bg-primary-foreground/10 transition-colors"
              >
                <span className="font-body text-sm text-primary-foreground/90">{program}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto"
          >
            <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl text-foreground mb-6">
              Start Your <span className="italic font-light">Academic Adventure</span>
            </h2>
            <p className="font-body text-muted-foreground text-lg mb-8">
              Book a free counselling session with our education experts. We'll help you 
              find the perfect course, university, and country for your future.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button variant="gold" size="lg" asChild>
                <Link to="/contact">
                  Book Free Counselling
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <a href="https://wa.me/447385608114" target="_blank" rel="noopener noreferrer">
                  WhatsApp Us
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

export default StudentVisa;