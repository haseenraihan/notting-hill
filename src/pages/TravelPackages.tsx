import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { 
  Plane, 
  MapPin,
  CheckCircle2, 
  Calendar,
  Star,
  ArrowRight,
  Phone,
  Sun,
  Mountain,
  Heart,
  Palmtree,
  Building,
  Compass
} from "lucide-react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";

import africaImage from "@/assets/destination-africa.jpg";
import maldivesImage from "@/assets/destination-maldives.jpg";
import japanImage from "@/assets/destination-japan.jpg";
import italyImage from "@/assets/destination-italy.jpg";
import moroccoImage from "@/assets/destination-morocco.jpg";
import patagoniaImage from "@/assets/destination-patagonia.jpg";
import santoriniImage from "@/assets/hero-santorini.jpg";

const destinations = [
  {
    name: "Turkish Delight",
    location: "Istanbul & Cappadocia",
    flag: "🇹🇷",
    duration: "7 Days / 6 Nights",
    price: "£899",
    priceNote: "per person",
    rating: 4.9,
    image: italyImage,
    highlights: ["Hot air balloon ride", "Hagia Sophia", "Blue Mosque", "Grand Bazaar", "Cave hotels"],
    includes: ["Flights", "4-star hotels", "Breakfast", "Transfers", "Tours"],
    category: "Cultural",
  },
  {
    name: "Dubai Extravaganza",
    location: "Dubai & Abu Dhabi",
    flag: "🇦🇪",
    duration: "5 Days / 4 Nights",
    price: "£699",
    priceNote: "per person",
    rating: 4.8,
    image: santoriniImage,
    highlights: ["Burj Khalifa", "Desert safari", "Dubai Mall", "Palm Jumeirah", "Ferrari World"],
    includes: ["Flights", "4-star hotels", "Breakfast", "Desert safari", "City tour"],
    category: "Luxury",
    popular: true,
  },
  {
    name: "Egyptian Wonders",
    location: "Cairo, Luxor & Hurghada",
    flag: "🇪🇬",
    duration: "8 Days / 7 Nights",
    price: "£1,099",
    priceNote: "per person",
    rating: 4.7,
    image: africaImage,
    highlights: ["Pyramids of Giza", "Nile cruise", "Valley of Kings", "Red Sea beach", "Temple of Karnak"],
    includes: ["Flights", "Hotels & cruise", "Full board on cruise", "All transfers", "Entrance fees"],
    category: "Adventure",
  },
  {
    name: "Maldives Paradise",
    location: "Maldives Islands",
    flag: "🇲🇻",
    duration: "5 Days / 4 Nights",
    price: "£1,499",
    priceNote: "per person",
    rating: 5.0,
    image: maldivesImage,
    highlights: ["Water villa", "Snorkeling", "Sunset cruise", "Spa treatments", "Private beaches"],
    includes: ["Flights", "Resort stay", "Half board", "Speedboat transfers", "Water sports"],
    category: "Beach",
    popular: true,
  },
  {
    name: "Swiss Alps Adventure",
    location: "Zurich, Lucerne & Interlaken",
    flag: "🇨🇭",
    duration: "6 Days / 5 Nights",
    price: "£1,299",
    priceNote: "per person",
    rating: 4.9,
    image: patagoniaImage,
    highlights: ["Jungfrau peak", "Lake Lucerne cruise", "Swiss chocolate tour", "Mountain railways", "Alpine villages"],
    includes: ["Flights", "3-star hotels", "Swiss Travel Pass", "Breakfast", "Guided tours"],
    category: "Scenic",
  },
  {
    name: "Moroccan Magic",
    location: "Marrakech, Fes & Sahara",
    flag: "🇲🇦",
    duration: "7 Days / 6 Nights",
    price: "£799",
    priceNote: "per person",
    rating: 4.8,
    image: moroccoImage,
    highlights: ["Sahara desert camp", "Medina tours", "Berber villages", "Camel trekking", "Traditional riads"],
    includes: ["Flights", "Riad & desert camp", "Breakfast", "Desert experience", "Private transfers"],
    category: "Cultural",
  },
  {
    name: "Thai Treasures",
    location: "Bangkok, Phuket & Phi Phi",
    flag: "🇹🇭",
    duration: "10 Days / 9 Nights",
    price: "£1,199",
    priceNote: "per person",
    rating: 4.8,
    image: japanImage,
    highlights: ["Grand Palace", "Island hopping", "Thai cooking class", "Temple tours", "Beach relaxation"],
    includes: ["Flights", "4-star hotels", "Breakfast", "Island tours", "Cooking class"],
    category: "Beach",
  },
  {
    name: "Bali Bliss",
    location: "Bali, Indonesia",
    flag: "🇮🇩",
    duration: "8 Days / 7 Nights",
    price: "£999",
    priceNote: "per person",
    rating: 4.9,
    image: maldivesImage,
    highlights: ["Rice terraces", "Temple visits", "Ubud arts", "Beach clubs", "Spa retreats"],
    includes: ["Flights", "Villa stay", "Breakfast", "Tours", "Spa session"],
    category: "Wellness",
  },
  {
    name: "Greek Island Escape",
    location: "Santorini & Mykonos",
    flag: "🇬🇷",
    duration: "7 Days / 6 Nights",
    price: "£1,099",
    priceNote: "per person",
    rating: 4.9,
    image: santoriniImage,
    highlights: ["Sunset in Oia", "Wine tasting", "Beach hopping", "Ferry cruise", "Greek cuisine"],
    includes: ["Flights", "Boutique hotels", "Breakfast", "Ferry tickets", "Wine tour"],
    category: "Beach",
  },
  {
    name: "Vietnam Explorer",
    location: "Hanoi, Ha Long & Hoi An",
    flag: "🇻🇳",
    duration: "12 Days / 11 Nights",
    price: "£1,299",
    priceNote: "per person",
    rating: 4.7,
    image: japanImage,
    highlights: ["Ha Long Bay cruise", "Hoi An lanterns", "Cu Chi tunnels", "Street food tours", "Rice paddies"],
    includes: ["Flights", "4-star hotels", "Cruise cabin", "Tours", "Cooking class"],
    category: "Adventure",
  },
  {
    name: "Safari & Zanzibar",
    location: "Tanzania & Zanzibar",
    flag: "🇹🇿",
    duration: "10 Days / 9 Nights",
    price: "£2,499",
    priceNote: "per person",
    rating: 5.0,
    image: africaImage,
    highlights: ["Serengeti safari", "Ngorongoro Crater", "Big Five", "Zanzibar beaches", "Stone Town"],
    includes: ["Flights", "Safari lodges", "Beach resort", "Game drives", "All meals on safari"],
    category: "Adventure",
    popular: true,
  },
  {
    name: "Japan Discovery",
    location: "Tokyo, Kyoto & Osaka",
    flag: "🇯🇵",
    duration: "10 Days / 9 Nights",
    price: "£1,899",
    priceNote: "per person",
    rating: 4.9,
    image: japanImage,
    highlights: ["Mt. Fuji views", "Geisha district", "Bullet train", "Tea ceremony", "Anime culture"],
    includes: ["Flights", "Hotels", "JR Pass", "Tours", "Breakfast"],
    category: "Cultural",
  },
];

const categories = [
  { name: "All", icon: Plane },
  { name: "Beach", icon: Palmtree },
  { name: "Cultural", icon: Building },
  { name: "Adventure", icon: Compass },
  { name: "Luxury", icon: Star },
  { name: "Wellness", icon: Heart },
  { name: "Scenic", icon: Mountain },
];

const whyBook = [
  {
    title: "Best Price Guarantee",
    description: "We match or beat any comparable package price",
  },
  {
    title: "Expert Planning",
    description: "Itineraries crafted by travel specialists",
  },
  {
    title: "24/7 Support",
    description: "Assistance before, during, and after your trip",
  },
  {
    title: "Flexible Booking",
    description: "Free changes up to 30 days before departure",
  },
  {
    title: "ATOL Protected",
    description: "Your money is fully protected",
  },
  {
    title: "Trusted Reviews",
    description: "4.9/5 rating from verified travelers",
  },
];

const TravelPackages = () => {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-28 bg-primary overflow-hidden">
        <div className="absolute inset-0">
          <img src={santoriniImage} alt="" className="w-full h-full object-cover opacity-20" />
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
              <Plane className="w-4 h-4" />
              Curated Travel Experiences
            </span>
            <h1 className="font-heading text-4xl md:text-6xl lg:text-7xl text-primary-foreground mb-6 leading-tight">
              Worldwide <span className="italic font-light text-gold">Travel Packages</span>
            </h1>
            <p className="font-body text-primary-foreground/80 text-lg md:text-xl leading-relaxed mb-8 max-w-2xl">
              From beach escapes to cultural adventures, discover our handpicked travel packages. 
              Everything included – flights, hotels, tours, and unforgettable experiences.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="gold" size="lg" className="text-base" asChild>
                <Link to="/contact">
                  Plan Your Trip
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

      {/* Categories */}
      <section className="py-8 bg-secondary/50 border-b border-border">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((category) => (
              <button
                key={category.name}
                className="flex items-center gap-2 px-4 py-2 rounded-full bg-background shadow-soft hover:shadow-card transition-all text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-gold/10"
              >
                <category.icon className="w-4 h-4" />
                {category.name}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Packages Grid */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <span className="section-label">Featured Packages</span>
            <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl text-foreground mb-4">
              Explore Our <span className="italic font-light">Destinations</span>
            </h2>
            <p className="font-body text-muted-foreground max-w-2xl mx-auto">
              Each package is carefully designed to offer the perfect balance of exploration, 
              relaxation, and authentic experiences.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {destinations.map((dest, index) => (
              <motion.div
                key={dest.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                className={`relative rounded-2xl overflow-hidden bg-card shadow-card hover:shadow-lifted transition-all duration-300 group ${
                  dest.popular ? "ring-2 ring-gold" : "border border-border"
                }`}
              >
                {dest.popular && (
                  <div className="absolute top-4 right-4 z-10">
                    <span className="px-3 py-1 rounded-full bg-gold text-primary text-xs font-medium">
                      Popular
                    </span>
                  </div>
                )}
                
                <div className="aspect-[4/3] relative overflow-hidden">
                  <img 
                    src={dest.image} 
                    alt={dest.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="text-3xl drop-shadow-lg">{dest.flag}</span>
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-primary/90 to-transparent p-4">
                    <div className="flex items-center gap-1 text-primary-foreground">
                      <MapPin className="w-4 h-4" />
                      <span className="text-sm">{dest.location}</span>
                    </div>
                  </div>
                </div>

                <div className="p-5">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="font-heading text-lg text-foreground">{dest.name}</h3>
                    <div className="flex items-center gap-1 text-sm">
                      <Star className="w-4 h-4 text-gold fill-gold" />
                      <span className="text-muted-foreground">{dest.rating}</span>
                    </div>
                  </div>

                  <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
                    <div className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      {dest.duration}
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-1 mb-4">
                    {dest.includes.slice(0, 3).map((item) => (
                      <span key={item} className="px-2 py-1 text-xs rounded-full bg-secondary text-muted-foreground">
                        {item}
                      </span>
                    ))}
                    {dest.includes.length > 3 && (
                      <span className="px-2 py-1 text-xs rounded-full bg-secondary text-muted-foreground">
                        +{dest.includes.length - 3} more
                      </span>
                    )}
                  </div>

                  <div className="flex items-end justify-between">
                    <div>
                      <span className="text-xs text-muted-foreground">From</span>
                      <div className="font-heading text-2xl text-gold">{dest.price}</div>
                      <span className="text-xs text-muted-foreground">{dest.priceNote}</span>
                    </div>
                    <Button variant="outline" size="sm" asChild>
                      <Link to="/contact">View</Link>
                    </Button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Custom Packages */}
      <section className="py-16 lg:py-24 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span className="text-gold text-sm tracking-[0.25em] uppercase mb-4 block">Bespoke Travel</span>
              <h2 className="font-heading text-3xl md:text-4xl mb-6">
                Can't Find Your <span className="italic font-light">Perfect Trip?</span>
              </h2>
              <p className="text-primary-foreground/80 mb-8">
                Our travel designers can create a completely customized itinerary based on your 
                preferences, budget, and travel dates. Whether it's a honeymoon, family reunion, 
                or adventure of a lifetime – we'll make it happen.
              </p>
              <ul className="space-y-3 mb-8">
                {[
                  "Choose your own destinations",
                  "Flexible dates and duration",
                  "Select your preferred hotels",
                  "Add unique experiences",
                  "Group discounts available",
                ].map((item) => (
                  <li key={item} className="flex items-center gap-3 text-primary-foreground/90">
                    <CheckCircle2 className="w-5 h-5 text-gold" />
                    {item}
                  </li>
                ))}
              </ul>
              <Button variant="gold" size="lg" asChild>
                <Link to="/contact">
                  Create Custom Package
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
              </Button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="grid grid-cols-2 gap-4"
            >
              {[
                { label: "Honeymoons", icon: Heart },
                { label: "Family Holidays", icon: Sun },
                { label: "Adventure Trips", icon: Mountain },
                { label: "Beach Getaways", icon: Palmtree },
                { label: "City Breaks", icon: Building },
                { label: "Luxury Escapes", icon: Star },
              ].map((item) => (
                <div
                  key={item.label}
                  className="p-6 rounded-xl bg-primary-foreground/5 border border-primary-foreground/10 text-center hover:bg-primary-foreground/10 transition-colors cursor-pointer"
                >
                  <item.icon className="w-8 h-8 text-gold mx-auto mb-3" />
                  <span className="text-sm font-medium">{item.label}</span>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Why Book With Us */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <span className="section-label">Why Book With Us</span>
            <h2 className="font-heading text-3xl md:text-4xl text-foreground mb-4">
              The Notting Hill <span className="italic font-light">Promise</span>
            </h2>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {whyBook.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="p-6 rounded-xl bg-card shadow-card text-center"
              >
                <CheckCircle2 className="w-10 h-10 text-gold mx-auto mb-4" />
                <h3 className="font-heading text-lg text-foreground mb-2">{item.title}</h3>
                <p className="font-body text-sm text-muted-foreground">{item.description}</p>
              </motion.div>
            ))}
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
              Ready for Your <span className="italic font-light">Dream Holiday?</span>
            </h2>
            <p className="font-body text-muted-foreground text-lg mb-8">
              Let us plan your perfect getaway. Contact us today for a free consultation.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button variant="gold" size="lg" asChild>
                <Link to="/contact">
                  Start Planning
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

export default TravelPackages;