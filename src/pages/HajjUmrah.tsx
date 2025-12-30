import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { 
  Moon, 
  Star,
  CheckCircle2, 
  Plane,
  Hotel,
  Bus,
  Users,
  Shield,
  ArrowRight,
  Phone,
  Calendar,
  MapPin,
  Heart
} from "lucide-react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";

import moroccoImage from "@/assets/destination-morocco.jpg";

const packages = [
  {
    name: "Economy Umrah",
    duration: "10 Days / 9 Nights",
    price: "£1,299",
    priceNote: "per person sharing",
    hotel: "3-Star Hotels",
    distance: "Walking distance to Haram",
    features: [
      "Return flights from London",
      "Visa processing",
      "3-star accommodation",
      "Ground transportation",
      "Guided Ziyarat tours",
      "24/7 support",
    ],
  },
  {
    name: "Premium Umrah",
    duration: "12 Days / 11 Nights",
    price: "£1,899",
    priceNote: "per person sharing",
    hotel: "4-Star Hotels",
    distance: "5 min walk to Haram",
    popular: true,
    features: [
      "Return flights from London",
      "Visa processing",
      "4-star hotel accommodation",
      "Private AC transport",
      "Full Ziyarat program",
      "Group leader assistance",
      "Breakfast included",
      "Zamzam water",
    ],
  },
  {
    name: "Luxury Umrah",
    duration: "14 Days / 13 Nights",
    price: "£2,999",
    priceNote: "per person sharing",
    hotel: "5-Star Hotels",
    distance: "Haram view rooms",
    features: [
      "Premium airline flights",
      "Fast-track visa",
      "5-star luxury hotels",
      "Private vehicle transfers",
      "VIP Ziyarat tours",
      "Scholar-led sessions",
      "Full board meals",
      "Special Ihram kit",
      "Exclusive group size",
    ],
  },
];

const hajjPackages = [
  {
    name: "Standard Hajj",
    duration: "21 Days",
    price: "£5,999",
    features: ["Shared tent in Mina", "4-star Makkah hotel", "3-star Madinah hotel", "All transport", "Meals included"],
  },
  {
    name: "Premium Hajj",
    duration: "25 Days",
    price: "£8,499",
    popular: true,
    features: ["Private tent in Mina", "5-star Makkah hotel", "4-star Madinah hotel", "VIP transport", "Full board meals"],
  },
  {
    name: "VIP Hajj",
    duration: "28 Days",
    price: "£12,999",
    features: ["Luxury Aziziya camps", "5-star Haram view hotels", "Private transport", "Gourmet meals", "Personal guide"],
  },
];

const ramadanPackages = [
  {
    name: "First 10 Days",
    duration: "12 Days",
    price: "£2,199",
    features: ["4-star hotels", "Suhoor & Iftar", "Airport transfers", "Ziyarat included"],
  },
  {
    name: "Last 10 Days",
    duration: "14 Days",
    price: "£3,499",
    popular: true,
    features: ["5-star hotels", "All meals", "Laylatul Qadr special", "VIP transfers"],
  },
  {
    name: "Full Ramadan",
    duration: "30 Days",
    price: "£5,999",
    features: ["Premium hotels", "Complete meals", "Dedicated guide", "All Ziyarat"],
  },
];

const inclusions = [
  { icon: Plane, title: "Flights", desc: "Return flights from major UK airports" },
  { icon: Hotel, title: "Accommodation", desc: "Quality hotels near the Holy Sites" },
  { icon: Bus, title: "Transport", desc: "Air-conditioned ground transportation" },
  { icon: Shield, title: "Visa", desc: "Complete Umrah/Hajj visa processing" },
  { icon: Users, title: "Guidance", desc: "Experienced group leaders & scholars" },
  { icon: Heart, title: "Support", desc: "24/7 assistance throughout your journey" },
];

const ziyaratPlaces = [
  "Masjid al-Haram (Makkah)",
  "Masjid an-Nabawi (Madinah)", 
  "Mount Arafat",
  "Mina",
  "Muzdalifah",
  "Jannat al-Baqi",
  "Masjid Quba",
  "Jabal al-Noor (Cave Hira)",
  "Jabal Thawr",
  "Well of Zamzam",
];

const HajjUmrah = () => {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-28 bg-primary overflow-hidden">
        <div className="absolute inset-0">
          <img src={moroccoImage} alt="" className="w-full h-full object-cover opacity-20" />
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
              <Moon className="w-4 h-4" />
              Sacred Journey Specialists
            </span>
            <h1 className="font-heading text-4xl md:text-6xl lg:text-7xl text-primary-foreground mb-6 leading-tight">
              Hajj & Umrah <span className="italic font-light text-gold">Packages</span>
            </h1>
            <p className="font-body text-primary-foreground/80 text-lg md:text-xl leading-relaxed mb-8 max-w-2xl">
              Embark on the journey of a lifetime with our carefully curated Hajj and Umrah packages. 
              We handle everything, so you can focus on your spiritual devotion.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="gold" size="lg" className="text-base" asChild>
                <Link to="/contact">
                  Book Your Package
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
              </Button>
              <Button variant="heroOutline" size="lg" className="text-base" asChild>
                <a href="tel:+447385608114">
                  <Phone className="w-5 h-5 mr-2" />
                  Speak to an Advisor
                </a>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Trust Banner */}
      <section className="py-8 bg-gold text-primary">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 text-sm font-medium">
            <div className="flex items-center gap-2">
              <Shield className="w-5 h-5" />
              ATOL Protected
            </div>
            <div className="flex items-center gap-2">
              <Star className="w-5 h-5" />
              5-Star Rated
            </div>
            <div className="flex items-center gap-2">
              <Users className="w-5 h-5" />
              10,000+ Pilgrims Served
            </div>
            <div className="flex items-center gap-2">
              <Heart className="w-5 h-5" />
              15+ Years Experience
            </div>
          </div>
        </div>
      </section>

      {/* Umrah Packages */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <span className="section-label">Umrah Packages</span>
            <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl text-foreground mb-4">
              Choose Your <span className="italic font-light">Umrah Journey</span>
            </h2>
            <p className="font-body text-muted-foreground max-w-2xl mx-auto">
              We offer departures throughout the year with packages to suit every budget and preference.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {packages.map((pkg, index) => (
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
                <div className="flex items-center gap-2 text-sm mb-4">
                  <Calendar className={`w-4 h-4 text-gold`} />
                  <span className={pkg.popular ? "text-primary-foreground/80" : "text-muted-foreground"}>
                    {pkg.duration}
                  </span>
                </div>
                <div className="mb-2">
                  <span className="font-heading text-4xl">{pkg.price}</span>
                </div>
                <p className={`text-sm mb-4 ${pkg.popular ? "text-primary-foreground/70" : "text-muted-foreground"}`}>
                  {pkg.priceNote}
                </p>
                <div className={`p-3 rounded-lg mb-6 ${pkg.popular ? "bg-primary-foreground/10" : "bg-secondary"}`}>
                  <div className="flex items-center gap-2 mb-1">
                    <Hotel className="w-4 h-4 text-gold" />
                    <span className="text-sm font-medium">{pkg.hotel}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin className="w-4 h-4 text-gold" />
                    <span className={`text-xs ${pkg.popular ? "text-primary-foreground/70" : "text-muted-foreground"}`}>
                      {pkg.distance}
                    </span>
                  </div>
                </div>
                <ul className="space-y-2 mb-8">
                  {pkg.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-2 text-sm">
                      <CheckCircle2 className="w-4 h-4 flex-shrink-0 mt-0.5 text-gold" />
                      <span className={pkg.popular ? "text-primary-foreground/90" : "text-muted-foreground"}>
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>
                <Button variant={pkg.popular ? "gold" : "outline"} className="w-full" asChild>
                  <Link to="/contact">Book Now</Link>
                </Button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Hajj Section */}
      <section className="py-16 lg:py-24 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <span className="text-gold text-sm tracking-[0.25em] uppercase mb-4 block">Hajj 2025</span>
            <h2 className="font-heading text-3xl md:text-4xl">
              Complete Your <span className="italic font-light">Fifth Pillar</span>
            </h2>
            <p className="font-body text-primary-foreground/70 max-w-2xl mx-auto mt-4">
              Limited spaces available for Hajj 2025. Book early to secure your place on this sacred journey.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {hajjPackages.map((pkg, index) => (
              <motion.div
                key={pkg.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`p-6 rounded-xl border ${pkg.popular ? 'bg-primary-foreground/10 border-gold' : 'bg-primary-foreground/5 border-primary-foreground/10'}`}
              >
                {pkg.popular && (
                  <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-gold text-primary text-xs font-medium mb-3">
                    <Star className="w-3 h-3" /> Best Value
                  </span>
                )}
                <h3 className="font-heading text-lg mb-1">{pkg.name}</h3>
                <div className="text-sm text-primary-foreground/60 mb-3">{pkg.duration}</div>
                <div className="font-heading text-3xl text-gold mb-4">{pkg.price}</div>
                <ul className="space-y-2">
                  {pkg.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-2 text-sm text-primary-foreground/80">
                      <CheckCircle2 className="w-4 h-4 text-gold flex-shrink-0 mt-0.5" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <Button variant="gold" className="w-full mt-6" asChild>
                  <Link to="/contact">Enquire Now</Link>
                </Button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Ramadan Packages */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <span className="section-label">Ramadan 2025</span>
            <h2 className="font-heading text-3xl md:text-4xl text-foreground mb-4">
              Ramadan Umrah <span className="italic font-light">Packages</span>
            </h2>
            <p className="font-body text-muted-foreground max-w-2xl mx-auto">
              Experience the blessed month in the Holy cities. Special packages for the first 10, last 10, or full Ramadan.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {ramadanPackages.map((pkg, index) => (
              <motion.div
                key={pkg.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`p-6 rounded-xl ${pkg.popular ? 'bg-gold/10 border-2 border-gold' : 'bg-card border border-border'} shadow-card`}
              >
                {pkg.popular && (
                  <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-gold text-primary text-xs font-medium mb-3">
                    <Star className="w-3 h-3" /> Most Booked
                  </span>
                )}
                <h3 className="font-heading text-lg text-foreground mb-1">{pkg.name}</h3>
                <div className="text-sm text-muted-foreground mb-3">{pkg.duration}</div>
                <div className="font-heading text-3xl text-gold mb-4">{pkg.price}</div>
                <ul className="space-y-2">
                  {pkg.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-2 text-sm text-muted-foreground">
                      <CheckCircle2 className="w-4 h-4 text-gold flex-shrink-0 mt-0.5" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <Button variant={pkg.popular ? "gold" : "outline"} className="w-full mt-6" asChild>
                  <Link to="/contact">Book Now</Link>
                </Button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* What's Included */}
      <section className="py-16 lg:py-24 bg-secondary/30">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <span className="section-label">What's Included</span>
            <h2 className="font-heading text-3xl md:text-4xl text-foreground">
              Everything You <span className="italic font-light">Need</span>
            </h2>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {inclusions.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex items-start gap-4 p-6 rounded-xl bg-card shadow-card"
              >
                <div className="w-12 h-12 rounded-xl bg-gold/10 flex items-center justify-center flex-shrink-0">
                  <item.icon className="w-6 h-6 text-gold" />
                </div>
                <div>
                  <h3 className="font-heading text-lg text-foreground mb-1">{item.title}</h3>
                  <p className="font-body text-sm text-muted-foreground">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Ziyarat */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span className="section-label">Sacred Sites</span>
              <h2 className="font-heading text-3xl md:text-4xl text-foreground mb-6">
                Ziyarat <span className="italic font-light">Tours Included</span>
              </h2>
              <p className="font-body text-muted-foreground mb-8">
                All our packages include comprehensive Ziyarat tours to the sacred sites in 
                Makkah and Madinah, guided by knowledgeable scholars who explain the historical 
                and spiritual significance of each location.
              </p>
              <div className="grid sm:grid-cols-2 gap-3">
                {ziyaratPlaces.map((place, index) => (
                  <div key={index} className="flex items-center gap-2">
                    <MapPin className="w-4 h-4 text-gold" />
                    <span className="text-sm text-muted-foreground">{place}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-background p-8 rounded-2xl shadow-lifted"
            >
              <h3 className="font-heading text-2xl text-foreground mb-6">Upcoming Departures</h3>
              <div className="space-y-4">
                {[
                  { date: "January 2025", type: "Umrah", availability: "Limited" },
                  { date: "February 2025", type: "Umrah", availability: "Available" },
                  { date: "March 2025", type: "Umrah (Ramadan)", availability: "Limited" },
                  { date: "April 2025", type: "Umrah (Ramadan)", availability: "Almost Full" },
                  { date: "June 2025", type: "Hajj", availability: "Booking Open" },
                ].map((departure, index) => (
                  <div key={index} className="flex items-center justify-between py-3 border-b border-border last:border-0">
                    <div className="flex items-center gap-3">
                      <Calendar className="w-5 h-5 text-gold" />
                      <div>
                        <div className="font-medium text-foreground text-sm">{departure.date}</div>
                        <div className="text-xs text-muted-foreground">{departure.type}</div>
                      </div>
                    </div>
                    <span className={`text-xs px-2 py-1 rounded-full ${
                      departure.availability === "Almost Full" 
                        ? "bg-destructive/10 text-destructive"
                        : departure.availability === "Limited"
                        ? "bg-gold/10 text-gold"
                        : "bg-sage-light text-sage"
                    }`}>
                      {departure.availability}
                    </span>
                  </div>
                ))}
              </div>
              <Button variant="gold" className="w-full mt-6" asChild>
                <Link to="/contact">Check Availability</Link>
              </Button>
            </motion.div>
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
            <h2 className="font-heading text-3xl md:text-4xl mb-6">
              Begin Your Sacred <span className="italic font-light">Journey</span>
            </h2>
            <p className="text-primary-foreground/80 text-lg mb-8">
              Contact us today to discuss your pilgrimage plans. Our experienced team is here 
              to guide you every step of the way.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button variant="gold" size="lg" asChild>
                <Link to="/contact">
                  Book Now
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
              </Button>
              <Button variant="heroOutline" size="lg" asChild>
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

export default HajjUmrah;