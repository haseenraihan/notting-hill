import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Award, Heart, Globe, Users } from "lucide-react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";

import haseenImage from "@/assets/haseen-raihan.jpg";
import heroImage from "@/assets/hero-santorini.jpg";

const team = [
  {
    id: 1,
    name: "Haseen Raihan",
    role: "Founder & CEO",
    image: haseenImage,
    bio: "After completing his Bachelor's in Banking and Finance in 2025, Haseen founded Notting Hill Voyages to help people achieve their UK visit visa and travel dreams. With 10 years of experience in the travel industry, he brings expertise and passion to every client journey.",
  },
];

const values = [
  {
    icon: Heart,
    title: "Passion",
    description: "We travel because we love it, and that passion infuses everything we create.",
  },
  {
    icon: Award,
    title: "Excellence",
    description: "Only the finest service standards and attention to detail make our cut.",
  },
  {
    icon: Globe,
    title: "Global Reach",
    description: "From UK visas to worldwide travel, we connect you to destinations across the globe.",
  },
  {
    icon: Users,
    title: "Personal Touch",
    description: "Every client is unique, and every journey reflects their individual dreams.",
  },
];

const milestones = [
  { year: "2016", event: "Founded by Haseen Raihan in Sylhet, Bangladesh" },
  { year: "2018", event: "Launched UK Visit Visa consultation services" },
  { year: "2022", event: "Expanded to Student Visa and Travel Packages" },
  { year: "2026", event: "1,000+ visas processed with 98% success rate" },
];

const About = () => {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-28 bg-primary overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <img src={heroImage} alt="" className="w-full h-full object-cover" />
        </div>
        <div className="container mx-auto px-4 relative">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl"
          >
            <span className="font-body text-gold text-sm tracking-[0.3em] uppercase mb-4 block">
              Our Story
            </span>
            <h1 className="font-heading text-4xl md:text-6xl text-primary-foreground mb-6">
              About <span className="italic font-light">Notting Hill Voyages</span>
            </h1>
            <p className="font-body text-primary-foreground/80 text-lg leading-relaxed">
              Founded in 2025, we're dedicated to making travel dreams come true through 
              expert visa assistance and personalized travel experiences.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
            <h2 className="font-heading text-3xl md:text-4xl text-foreground mb-6">
                Our <span className="italic font-light">Story</span>
              </h2>
              <div className="space-y-4 font-body text-muted-foreground leading-relaxed">
                <p>
                  Notting Hill Voyages was founded in 2025 by Haseen Raihan, right after 
                  completing his Bachelor's degree in Banking and Finance. What started 
                  as a passion for helping friends and family navigate the UK visa process 
                  has grown into a full-service travel consultancy.
                </p>
                <p>
                  Based in Sylhet, Bangladesh, we specialize in UK visit visas, student visas, 
                  and comprehensive travel packages. Our founder's personal experience with 
                  the visa process gives us unique insight into what applicants need to succeed.
                </p>
                <p>
                  We believe that everyone deserves the chance to explore the world. Whether 
                  you're visiting family in the UK, pursuing education abroad, or embarking 
                  on a pilgrimage, we're here to make your journey smooth and stress-free.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <div className="aspect-square rounded-xl overflow-hidden">
                <img src={heroImage} alt="Notting Hill Voyages office" className="w-full h-full object-cover" />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-gold text-primary p-6 rounded-xl shadow-gold">
                <div className="font-heading text-4xl">100%</div>
                <div className="font-body text-sm">Dedication</div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 lg:py-24 bg-secondary/50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <span className="font-body text-gold text-sm tracking-[0.3em] uppercase mb-4 block">
              What Drives Us
            </span>
            <h2 className="font-heading text-3xl md:text-4xl text-foreground">
              Our <span className="italic font-light">Values</span>
            </h2>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-background p-6 rounded-xl text-center shadow-elegant"
              >
                <div className="w-14 h-14 rounded-full bg-gold/10 flex items-center justify-center mx-auto mb-4">
                  <value.icon className="w-7 h-7 text-gold" />
                </div>
                <h3 className="font-heading text-xl text-foreground mb-2">{value.title}</h3>
                <p className="font-body text-muted-foreground text-sm">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <span className="font-body text-gold text-sm tracking-[0.3em] uppercase mb-4 block">
              Meet The Team
            </span>
            <h2 className="font-heading text-3xl md:text-4xl text-foreground">
              Your Travel <span className="italic font-light">Experts</span>
            </h2>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <motion.div
                key={member.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group"
              >
                <div className="aspect-square rounded-xl overflow-hidden mb-4">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <h3 className="font-heading text-xl text-foreground">{member.name}</h3>
                <p className="font-body text-gold text-sm mb-2">{member.role}</p>
                <p className="font-body text-muted-foreground text-sm">{member.bio}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-16 lg:py-24 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <span className="font-body text-gold text-sm tracking-[0.3em] uppercase mb-4 block">
              Our Journey
            </span>
            <h2 className="font-heading text-3xl md:text-4xl">
              Key <span className="italic font-light">Milestones</span>
            </h2>
          </motion.div>

          <div className="max-w-3xl mx-auto">
            {milestones.map((milestone, index) => (
              <motion.div
                key={milestone.year}
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex items-center gap-6 py-6 border-b border-primary-foreground/10 last:border-0"
              >
                <div className="font-heading text-3xl text-gold w-24 flex-shrink-0">
                  {milestone.year}
                </div>
                <div className="font-body text-primary-foreground/80">
                  {milestone.event}
                </div>
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
          >
            <h2 className="font-heading text-3xl md:text-4xl text-foreground mb-4">
              Ready to Write Your Story?
            </h2>
            <p className="font-body text-muted-foreground mb-8 max-w-2xl mx-auto">
              Let's create your next extraordinary journey together.
            </p>
            <Button variant="gold" size="lg" asChild>
              <Link to="/contact">Get in Touch</Link>
            </Button>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default About;