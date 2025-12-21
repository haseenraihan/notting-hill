import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

import africaImage from "@/assets/destination-africa.jpg";
import maldivesImage from "@/assets/destination-maldives.jpg";
import japanImage from "@/assets/destination-japan.jpg";
import italyImage from "@/assets/destination-italy.jpg";
import patagoniaImage from "@/assets/destination-patagonia.jpg";
import moroccoImage from "@/assets/destination-morocco.jpg";

const destinations = [
  {
    id: 1,
    name: "African Safari",
    location: "Kenya & Tanzania",
    image: africaImage,
    description: "Witness the majesty of the wild on an unforgettable safari adventure.",
    featured: true,
  },
  {
    id: 2,
    name: "Maldives Paradise",
    location: "Indian Ocean",
    image: maldivesImage,
    description: "Crystal waters and overwater villas for ultimate relaxation.",
  },
  {
    id: 3,
    name: "Ancient Japan",
    location: "Kyoto & Tokyo",
    image: japanImage,
    description: "Experience the harmony of tradition and modernity.",
  },
  {
    id: 4,
    name: "Italian Riviera",
    location: "Amalfi Coast",
    image: italyImage,
    description: "Mediterranean beauty along dramatic coastal cliffs.",
  },
  {
    id: 5,
    name: "Patagonia Wilderness",
    location: "Argentina & Chile",
    image: patagoniaImage,
    description: "Dramatic landscapes at the end of the world.",
  },
  {
    id: 6,
    name: "Moroccan Magic",
    location: "Marrakech",
    image: moroccoImage,
    description: "Ancient medinas and luxurious desert camps.",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

const DestinationsSection = () => {
  return (
    <section className="py-20 lg:py-32 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="font-body text-gold text-sm tracking-[0.3em] uppercase mb-4 block">
            Curated Destinations
          </span>
          <h2 className="font-heading text-3xl md:text-5xl text-foreground mb-6">
            Where Dreams <span className="italic font-light">Take Flight</span>
          </h2>
          <p className="font-body text-muted-foreground text-lg leading-relaxed">
            From sun-drenched beaches to snow-capped peaks, discover our handpicked 
            collection of the world's most captivating destinations.
          </p>
        </motion.div>

        {/* Destinations Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
        >
          {destinations.map((destination, index) => (
            <motion.div
              key={destination.id}
              variants={itemVariants}
              className={`group relative overflow-hidden rounded-xl ${
                index === 0 ? "md:col-span-2 md:row-span-2" : ""
              }`}
            >
              <Link to="/destinations" className="block">
                <div className={`relative overflow-hidden ${index === 0 ? "aspect-[4/3]" : "aspect-[4/5]"}`}>
                  <img
                    src={destination.image}
                    alt={`${destination.name} - luxury travel destination`}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/20 to-transparent" />
                  
                  {/* Content */}
                  <div className="absolute inset-0 flex flex-col justify-end p-6 lg:p-8">
                    <span className="font-body text-gold text-sm tracking-wider mb-2">
                      {destination.location}
                    </span>
                    <h3 className={`font-heading text-primary-foreground mb-2 ${
                      index === 0 ? "text-3xl lg:text-4xl" : "text-2xl"
                    }`}>
                      {destination.name}
                    </h3>
                    <p className="font-body text-primary-foreground/70 text-sm mb-4 line-clamp-2">
                      {destination.description}
                    </p>
                    <div className="flex items-center gap-2 text-gold font-body text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <span>Explore</span>
                      <ArrowRight className="w-4 h-4" />
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>

        {/* View All Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-12"
        >
          <Link
            to="/destinations"
            className="inline-flex items-center gap-2 font-body text-foreground border-b-2 border-gold pb-1 hover:text-gold transition-colors duration-300"
          >
            View All Destinations
            <ArrowRight className="w-4 h-4" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default DestinationsSection;