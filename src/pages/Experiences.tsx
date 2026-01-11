import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Clock, Users, Sparkles, ArrowRight, Star, MapPin } from "lucide-react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";

import africaImage from "@/assets/destination-africa.jpg";
import maldivesImage from "@/assets/destination-maldives.jpg";
import japanImage from "@/assets/destination-japan.jpg";
import italyImage from "@/assets/destination-italy.jpg";
import moroccoImage from "@/assets/destination-morocco.jpg";
import patagoniaImage from "@/assets/destination-patagonia.jpg";
import santoriniImage from "@/assets/destination-santorini.jpg";

const experiences = [
  {
    id: 1,
    title: "Private Safari & Bush Dining",
    category: "Wildlife",
    location: "Kenya",
    image: africaImage,
    description: "Experience an exclusive game drive followed by a magical candlelit dinner under the African stars, surrounded by the sounds of the wild.",
    duration: "Full Day",
    groupSize: "2-6 guests",
    price: "From £850",
    highlights: ["Private game vehicle", "Expert tracker", "Champagne sundowners", "Bush dinner"],
  },
  {
    id: 2,
    title: "Overwater Villa Experience",
    category: "Luxury Wellness",
    location: "Maldives",
    image: maldivesImage,
    description: "Complete privacy in your overwater sanctuary with personal butler service, spa treatments, and direct ocean access.",
    duration: "7 nights minimum",
    groupSize: "2 guests",
    price: "From £4,500",
    highlights: ["Private infinity pool", "In-villa dining", "Sunset cruises", "Underwater spa"],
  },
  {
    id: 3,
    title: "Traditional Geisha Experience",
    category: "Cultural Immersion",
    location: "Kyoto, Japan",
    image: japanImage,
    description: "An intimate evening with a real geisha in a historic Kyoto tea house, learning ancient arts and traditions.",
    duration: "3 hours",
    groupSize: "2-4 guests",
    price: "From £450",
    highlights: ["Private tea ceremony", "Traditional dance", "Sake pairing", "Photo session"],
  },
  {
    id: 4,
    title: "Amalfi Coast Yacht Charter",
    category: "Coastal Adventure",
    location: "Italy",
    image: italyImage,
    description: "Cruise the stunning Amalfi coastline on a private yacht with chef-prepared Italian cuisine and swimming in hidden coves.",
    duration: "Full Day",
    groupSize: "2-8 guests",
    price: "From £1,200",
    highlights: ["Private yacht", "Onboard chef", "Hidden cove swimming", "Limoncello tasting"],
  },
  {
    id: 5,
    title: "Desert Glamping Under Stars",
    category: "Adventure",
    location: "Morocco",
    image: moroccoImage,
    description: "Luxury desert camp experience in the Sahara with camel treks, traditional Berber cuisine, and stargazing.",
    duration: "2 nights",
    groupSize: "2-6 guests",
    price: "From £650",
    highlights: ["Luxury tented camp", "Camel caravan", "Stargazing", "Traditional music"],
  },
  {
    id: 6,
    title: "Patagonia Glacier Trek",
    category: "Expedition",
    location: "Argentina",
    image: patagoniaImage,
    description: "Trek across ancient glaciers with expert guides, explore ice caves, and witness the raw power of Patagonian wilderness.",
    duration: "Full Day",
    groupSize: "4-8 guests",
    price: "From £350",
    highlights: ["Glacier walk", "Ice cave exploration", "Expert guides", "Photography spots"],
  },
  {
    id: 7,
    title: "Santorini Wine & Sunset",
    category: "Gastronomy",
    location: "Greece",
    image: santoriniImage,
    description: "Private wine tasting at volcanic vineyards followed by a sunset dinner overlooking the caldera.",
    duration: "Evening",
    groupSize: "2-6 guests",
    price: "From £280",
    highlights: ["Private wine tour", "Caldera views", "Gourmet dinner", "Sunset views"],
  },
  {
    id: 8,
    title: "Hot Air Balloon Safari",
    category: "Adventure",
    location: "Tanzania",
    image: africaImage,
    description: "Float silently over the Serengeti at dawn, witnessing the great migration from above, followed by champagne breakfast.",
    duration: "Half Day",
    groupSize: "2-16 guests",
    price: "From £550",
    highlights: ["Sunrise flight", "Wildlife viewing", "Champagne breakfast", "Certificate"],
  },
];

const Experiences = () => {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-28 bg-primary overflow-hidden">
        <div className="absolute inset-0">
          <img src={maldivesImage} alt="" className="w-full h-full object-cover opacity-20" />
        </div>
        <div className="absolute inset-0 bg-gradient-hero" />
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
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <span className="section-label">Signature Experiences</span>
            <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl text-foreground mb-4">
              Once in a <span className="italic font-light">Lifetime</span>
            </h2>
            <p className="font-body text-muted-foreground max-w-2xl mx-auto">
              Handcrafted experiences that go beyond ordinary travel, creating memories that last forever.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {experiences.map((experience, index) => (
              <motion.article
                key={experience.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                className="group bg-card rounded-2xl overflow-hidden shadow-card hover:shadow-lifted transition-all duration-300 border border-border"
              >
                <div className="aspect-[4/3] relative overflow-hidden">
                  <img
                    src={experience.image}
                    alt={experience.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-gold text-primary font-body text-xs font-medium px-3 py-1 rounded-full">
                      {experience.category}
                    </span>
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-primary/90 to-transparent p-4">
                    <div className="flex items-center gap-1 text-primary-foreground">
                      <MapPin className="w-4 h-4" />
                      <span className="text-sm">{experience.location}</span>
                    </div>
                  </div>
                </div>

                <div className="p-5">
                  <h3 className="font-heading text-lg text-foreground mb-2 group-hover:text-gold transition-colors">
                    {experience.title}
                  </h3>
                  <p className="font-body text-muted-foreground text-sm leading-relaxed mb-4 line-clamp-2">
                    {experience.description}
                  </p>

                  <div className="flex flex-wrap gap-3 mb-4">
                    <div className="flex items-center gap-1 text-muted-foreground text-sm">
                      <Clock className="w-4 h-4 text-gold" />
                      {experience.duration}
                    </div>
                    <div className="flex items-center gap-1 text-muted-foreground text-sm">
                      <Users className="w-4 h-4 text-gold" />
                      {experience.groupSize}
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {experience.highlights.slice(0, 2).map((highlight) => (
                      <span
                        key={highlight}
                        className="font-body text-xs bg-secondary px-2 py-1 rounded-full text-muted-foreground"
                      >
                        {highlight}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center justify-between pt-4 border-t border-border">
                    <span className="font-heading text-lg text-gold">{experience.price}</span>
                    <Button variant="outline" size="sm" asChild>
                      <Link to="/contact" className="gap-1">
                        Book <ArrowRight className="w-3 h-3" />
                      </Link>
                    </Button>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Experience */}
      <section className="py-16 lg:py-24 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative aspect-[4/3] rounded-2xl overflow-hidden"
            >
              <img
                src={africaImage}
                alt="Safari Experience"
                className="w-full h-full object-cover"
              />
              <div className="absolute top-4 left-4">
                <span className="flex items-center gap-1 bg-gold text-primary px-3 py-1 rounded-full text-sm font-medium">
                  <Star className="w-4 h-4" /> Featured
                </span>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span className="text-gold text-sm tracking-[0.25em] uppercase mb-4 block">
                Ultimate Safari Experience
              </span>
              <h2 className="font-heading text-3xl md:text-4xl mb-6">
                The Great Migration <span className="italic font-light">Witnessed</span>
              </h2>
              <p className="text-primary-foreground/80 mb-6">
                Witness one of nature's most spectacular events – millions of wildebeest and zebra 
                crossing the Serengeti plains. Our exclusive safari package includes luxury tented 
                camps, private game drives, and expert naturalist guides.
              </p>
              <ul className="space-y-3 mb-8">
                {[
                  "Private luxury safari camp",
                  "Daily game drives with expert guides",
                  "Hot air balloon experience",
                  "Bush dinners under the stars",
                  "Masai village cultural visit",
                ].map((item) => (
                  <li key={item} className="flex items-center gap-3 text-primary-foreground/90">
                    <Sparkles className="w-5 h-5 text-gold" />
                    {item}
                  </li>
                ))}
              </ul>
              <Button variant="gold" size="lg" asChild>
                <Link to="/contact">
                  Enquire About This Experience
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
              </Button>
            </motion.div>
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
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button variant="gold" size="lg" asChild>
                <Link to="/contact">Start Planning</Link>
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

export default Experiences;