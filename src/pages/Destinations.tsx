import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { MapPin, Calendar, Star, ArrowRight, Filter } from "lucide-react";
import { useState } from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";

import africaImage from "@/assets/destination-africa.jpg";
import maldivesImage from "@/assets/destination-maldives.jpg";
import japanImage from "@/assets/destination-japan.jpg";
import italyImage from "@/assets/destination-italy.jpg";
import patagoniaImage from "@/assets/destination-patagonia.jpg";
import moroccoImage from "@/assets/destination-morocco.jpg";
import heroImage from "@/assets/hero-santorini.jpg";

const destinations = [
  {
    id: 1,
    name: "African Safari Adventure",
    location: "Kenya & Tanzania",
    image: africaImage,
    description: "Witness the majesty of the wild on an unforgettable safari adventure through the Serengeti and Masai Mara.",
    duration: "10-14 days",
    bestTime: "June - October",
    rating: 4.9,
    category: "Adventure",
    price: "From £8,500",
  },
  {
    id: 2,
    name: "Maldives Island Paradise",
    location: "Indian Ocean",
    image: maldivesImage,
    description: "Crystal-clear waters, overwater villas, and pristine beaches for the ultimate tropical escape.",
    duration: "7-10 days",
    bestTime: "November - April",
    rating: 5.0,
    category: "Beach & Relaxation",
    price: "From £6,800",
  },
  {
    id: 3,
    name: "Cultural Japan",
    location: "Tokyo, Kyoto & Beyond",
    image: japanImage,
    description: "Experience the perfect harmony of ancient traditions and cutting-edge modernity.",
    duration: "12-16 days",
    bestTime: "March - May, Sept - Nov",
    rating: 4.8,
    category: "Cultural",
    price: "From £7,200",
  },
  {
    id: 4,
    name: "Italian Riviera",
    location: "Amalfi Coast & Positano",
    image: italyImage,
    description: "Mediterranean beauty along dramatic coastal cliffs, charming villages, and world-class cuisine.",
    duration: "8-12 days",
    bestTime: "May - September",
    rating: 4.9,
    category: "Coastal",
    price: "From £5,500",
  },
  {
    id: 5,
    name: "Patagonia Expedition",
    location: "Argentina & Chile",
    image: patagoniaImage,
    description: "Dramatic landscapes, ancient glaciers, and pristine wilderness at the end of the world.",
    duration: "14-18 days",
    bestTime: "October - March",
    rating: 4.9,
    category: "Adventure",
    price: "From £9,800",
  },
  {
    id: 6,
    name: "Moroccan Magic",
    location: "Marrakech & Beyond",
    image: moroccoImage,
    description: "Ancient medinas, luxurious riads, and magical desert camps under starlit skies.",
    duration: "7-10 days",
    bestTime: "March - May, Sept - Nov",
    rating: 4.7,
    category: "Cultural",
    price: "From £4,200",
  },
  {
    id: 7,
    name: "Greek Island Hopping",
    location: "Santorini & Cyclades",
    image: heroImage,
    description: "Iconic whitewashed villages, azure waters, and legendary Greek hospitality.",
    duration: "10-14 days",
    bestTime: "May - October",
    rating: 4.8,
    category: "Beach & Relaxation",
    price: "From £5,800",
  },
];

const categories = ["All", "Adventure", "Beach & Relaxation", "Cultural", "Coastal"];

const Destinations = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  
  const filteredDestinations = activeCategory === "All" 
    ? destinations 
    : destinations.filter(d => d.category === activeCategory);

  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-28 bg-primary">
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
              Explore the World
            </span>
            <h1 className="font-heading text-4xl md:text-6xl text-primary-foreground mb-6">
              Our <span className="italic font-light">Destinations</span>
            </h1>
            <p className="font-body text-primary-foreground/80 text-lg leading-relaxed">
              Discover handpicked destinations where luxury meets adventure. 
              Each journey is crafted to create memories that last a lifetime.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filter Bar */}
      <section className="py-8 bg-secondary/50 border-b border-border sticky top-0 z-30">
        <div className="container mx-auto px-4">
          <div className="flex items-center gap-4 overflow-x-auto pb-2">
            <Filter className="w-5 h-5 text-muted-foreground flex-shrink-0" />
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`font-body text-sm whitespace-nowrap px-4 py-2 rounded-full transition-all duration-300 ${
                  activeCategory === category
                    ? "bg-gold text-primary font-medium"
                    : "bg-background text-muted-foreground hover:text-foreground"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Destinations Grid */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredDestinations.map((destination, index) => (
              <motion.article
                key={destination.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group bg-card rounded-xl overflow-hidden shadow-elegant hover:shadow-lifted transition-shadow duration-300"
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img
                    src={destination.image}
                    alt={destination.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute top-4 right-4 bg-background/90 backdrop-blur-sm rounded-full px-3 py-1 flex items-center gap-1">
                    <Star className="w-4 h-4 fill-gold text-gold" />
                    <span className="font-body text-sm font-medium">{destination.rating}</span>
                  </div>
                  <div className="absolute top-4 left-4">
                    <span className="bg-gold/90 text-primary font-body text-xs font-medium px-3 py-1 rounded-full">
                      {destination.category}
                    </span>
                  </div>
                </div>

                <div className="p-6">
                  <div className="flex items-center gap-2 text-muted-foreground mb-2">
                    <MapPin className="w-4 h-4" />
                    <span className="font-body text-sm">{destination.location}</span>
                  </div>

                  <h2 className="font-heading text-xl text-foreground mb-3 group-hover:text-gold transition-colors">
                    {destination.name}
                  </h2>

                  <p className="font-body text-muted-foreground text-sm leading-relaxed mb-4 line-clamp-2">
                    {destination.description}
                  </p>

                  <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
                    <div className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      <span>{destination.duration}</span>
                    </div>
                  </div>

                  <div className="flex items-center justify-between pt-4 border-t border-border">
                    <span className="font-heading text-lg text-gold">{destination.price}</span>
                    <Button variant="ghost" size="sm" className="text-foreground hover:text-gold gap-2" asChild>
                      <Link to="/contact">
                        Enquire <ArrowRight className="w-4 h-4" />
                      </Link>
                    </Button>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-secondary/50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-heading text-3xl md:text-4xl text-foreground mb-4">
            Can't Find Your Dream Destination?
          </h2>
          <p className="font-body text-muted-foreground mb-8 max-w-2xl mx-auto">
            Let our travel experts create a bespoke itinerary tailored to your desires.
          </p>
          <Button variant="gold" size="lg" asChild>
            <Link to="/contact">Speak to an Expert</Link>
          </Button>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default Destinations;