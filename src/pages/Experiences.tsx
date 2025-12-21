import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Clock, Users, Sparkles, ArrowRight } from "lucide-react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";

import africaImage from "@/assets/destination-africa.jpg";
import maldivesImage from "@/assets/destination-maldives.jpg";
import japanImage from "@/assets/destination-japan.jpg";
import italyImage from "@/assets/destination-italy.jpg";
import moroccoImage from "@/assets/destination-morocco.jpg";

const experiences = [
  {
    id: 1,
    title: "Private Safari & Bush Dining",
    category: "Wildlife",
    image: africaImage,
    description: "Experience an exclusive game drive followed by a magical candlelit dinner under the African stars.",
    duration: "Full Day",
    groupSize: "2-6 guests",
    highlights: ["Private game vehicle", "Expert tracker", "Champagne sundowners", "Bush dinner"],
  },
  {
    id: 2,
    title: "Overwater Villa Experience",
    category: "Luxury Wellness",
    image: maldivesImage,
    description: "Complete privacy in your overwater sanctuary with personal butler service and spa treatments.",
    duration: "7 nights minimum",
    groupSize: "2 guests",
    highlights: ["Private infinity pool", "In-villa dining", "Sunset cruises", "Underwater spa"],
  },
  {
    id: 3,
    title: "Traditional Geisha Experience",
    category: "Cultural Immersion",
    image: japanImage,
    description: "An intimate evening with a real geisha in a historic Kyoto tea house, learning ancient arts.",
    duration: "3 hours",
    groupSize: "2-4 guests",
    highlights: ["Private tea ceremony", "Traditional dance", "Sake pairing", "Photo session"],
  },
  {
    id: 4,
    title: "Amalfi Coast Yacht Charter",
    category: "Coastal Adventure",
    image: italyImage,
    description: "Cruise the stunning Amalfi coastline on a private yacht with chef-prepared Italian cuisine.",
    duration: "Full Day",
    groupSize: "2-8 guests",
    highlights: ["Private yacht", "Onboard chef", "Hidden cove swimming", "Limoncello tasting"],
  },
  {
    id: 5,
    title: "Desert Glamping Under Stars",
    category: "Adventure",
    image: moroccoImage,
    description: "Luxury desert camp experience in the Sahara with camel treks and traditional Berber cuisine.",
    duration: "2 nights",
    groupSize: "2-6 guests",
    highlights: ["Luxury tented camp", "Camel caravan", "Stargazing", "Traditional music"],
  },
];

const Experiences = () => {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-28 bg-primary">
        <div className="container mx-auto px-4 relative">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl"
          >
            <span className="font-body text-gold text-sm tracking-[0.3em] uppercase mb-4 block">
              Curated Experiences
            </span>
            <h1 className="font-heading text-4xl md:text-6xl text-primary-foreground mb-6">
              Unforgettable <span className="italic font-light">Moments</span>
            </h1>
            <p className="font-body text-primary-foreground/80 text-lg leading-relaxed">
              Beyond destinations, we craft extraordinary experiences that transform 
              travel into lasting memories. Each moment is designed exclusively for you.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Experiences Grid */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="space-y-16">
            {experiences.map((experience, index) => (
              <motion.article
                key={experience.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className={`grid lg:grid-cols-2 gap-8 lg:gap-12 items-center ${
                  index % 2 === 1 ? "lg:flex-row-reverse" : ""
                }`}
              >
                <div className={`${index % 2 === 1 ? "lg:order-2" : ""}`}>
                  <div className="relative aspect-[4/3] rounded-xl overflow-hidden group">
                    <img
                      src={experience.image}
                      alt={experience.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="bg-gold text-primary font-body text-xs font-medium px-3 py-1 rounded-full">
                        {experience.category}
                      </span>
                    </div>
                  </div>
                </div>

                <div className={`${index % 2 === 1 ? "lg:order-1" : ""}`}>
                  <h2 className="font-heading text-2xl md:text-4xl text-foreground mb-4">
                    {experience.title}
                  </h2>
                  <p className="font-body text-muted-foreground text-lg leading-relaxed mb-6">
                    {experience.description}
                  </p>

                  <div className="flex flex-wrap gap-4 mb-6">
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <Clock className="w-4 h-4 text-gold" />
                      <span className="font-body text-sm">{experience.duration}</span>
                    </div>
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <Users className="w-4 h-4 text-gold" />
                      <span className="font-body text-sm">{experience.groupSize}</span>
                    </div>
                  </div>

                  <div className="mb-8">
                    <h3 className="font-body text-sm font-medium text-foreground mb-3 flex items-center gap-2">
                      <Sparkles className="w-4 h-4 text-gold" />
                      Experience Highlights
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {experience.highlights.map((highlight) => (
                        <span
                          key={highlight}
                          className="font-body text-sm bg-secondary px-3 py-1 rounded-full text-muted-foreground"
                        >
                          {highlight}
                        </span>
                      ))}
                    </div>
                  </div>

                  <Button variant="gold" asChild>
                    <Link to="/contact" className="gap-2">
                      Book This Experience
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </Button>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 lg:py-24 bg-secondary/50">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="font-heading text-3xl md:text-4xl text-foreground mb-4">
              Create Your Own Experience
            </h2>
            <p className="font-body text-muted-foreground mb-8 max-w-2xl mx-auto">
              Have something special in mind? Our travel designers can craft completely 
              bespoke experiences tailored to your wildest dreams.
            </p>
            <Button variant="gold" size="lg" asChild>
              <Link to="/contact">Start Planning</Link>
            </Button>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default Experiences;