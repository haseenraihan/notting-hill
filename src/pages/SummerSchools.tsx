import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { 
  GraduationCap, 
  CheckCircle2, 
  Calendar,
  Users,
  BookOpen,
  Globe,
  Shield,
  ArrowRight,
  Phone,
  Star,
  Clock,
  Building2,
  Utensils,
  Bus,
  MapPin
} from "lucide-react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";

import summerSchoolUK from "@/assets/summer-school-uk.jpg";
import summerSchoolUSA from "@/assets/summer-school-usa.jpg";
import summerSchoolOxford from "@/assets/summer-school-oxford.jpg";
import summerSchoolCalifornia from "@/assets/summer-school-california.jpg";
import summerSchoolEdinburgh from "@/assets/summer-school-edinburgh.jpg";
import summerSchoolNYC from "@/assets/summer-school-nyc.jpg";
import summerSchoolSanFrancisco from "@/assets/summer-school-sanfrancisco.jpg";
import summerSchoolCambridge from "@/assets/summer-school-cambridge.jpg";

const programs = [
  {
    location: "London, UK",
    flag: "🇬🇧",
    school: "Oxford International Education Group",
    ages: "8-17 years",
    duration: "2-6 weeks",
    price: "From £1,899/week",
    image: summerSchoolUK,
    highlights: [
      "Central London campus",
      "20 hours English/week",
      "Full activity program",
      "Thames river cruise",
      "West End show",
      "British Museum visit",
    ],
    accommodation: "Student residence or homestay",
    popular: true,
  },
  {
    location: "Edinburgh, Scotland",
    flag: "🏴󠁧󠁢󠁳󠁣󠁴󠁿",
    school: "Edinburgh Summer School",
    ages: "10-17 years",
    duration: "2-4 weeks",
    price: "From £1,699/week",
    image: summerSchoolEdinburgh,
    highlights: [
      "Historic university campus",
      "15-20 hours English/week",
      "Scottish Highland tours",
      "Edinburgh Castle visit",
      "Cultural activities",
      "Sports program",
    ],
    accommodation: "University halls",
    popular: false,
  },
  {
    location: "Boston, USA",
    flag: "🇺🇸",
    school: "Harvard Summer Programs",
    ages: "14-18 years",
    duration: "3-6 weeks",
    price: "From $3,499/week",
    image: summerSchoolUSA,
    highlights: [
      "Harvard campus experience",
      "Academic ESL courses",
      "College preparation",
      "Boston city tours",
      "Sports facilities",
      "University visits",
    ],
    accommodation: "Harvard dormitories",
    popular: true,
  },
  {
    location: "Los Angeles, USA",
    flag: "🇺🇸",
    school: "UCLA Extension",
    ages: "12-18 years",
    duration: "2-4 weeks",
    price: "From $2,999/week",
    image: summerSchoolCalifornia,
    highlights: [
      "UCLA campus",
      "American English focus",
      "Hollywood excursions",
      "Beach activities",
      "Universal Studios",
      "Celebrity homes tour",
    ],
    accommodation: "Campus residence",
    popular: false,
  },
  {
    location: "Cambridge, UK",
    flag: "🇬🇧",
    school: "Cambridge Academic English",
    ages: "13-17 years",
    duration: "2-4 weeks",
    price: "From £2,199/week",
    image: summerSchoolCambridge,
    highlights: [
      "Historic college setting",
      "Academic English",
      "Exam preparation (IELTS)",
      "Punting on the Cam",
      "London day trips",
      "Science museum visits",
    ],
    accommodation: "College residence",
    popular: false,
  },
  {
    location: "New York, USA",
    flag: "🇺🇸",
    school: "EF New York",
    ages: "14-18 years",
    duration: "2-6 weeks",
    price: "From $2,799/week",
    image: summerSchoolNYC,
    highlights: [
      "Manhattan location",
      "Intensive English",
      "Broadway shows",
      "Statue of Liberty",
      "Times Square",
      "Central Park activities",
    ],
    accommodation: "Student residence",
    popular: false,
  },
  {
    location: "Oxford, UK",
    flag: "🇬🇧",
    school: "St. Clare's Oxford",
    ages: "15-17 years",
    duration: "2-4 weeks",
    price: "From £2,399/week",
    image: summerSchoolOxford,
    highlights: [
      "University city experience",
      "IB preparation courses",
      "English + subject focus",
      "College tours",
      "Cultural excursions",
      "Academic enrichment",
    ],
    accommodation: "Residential college",
    popular: true,
  },
  {
    location: "San Francisco, USA",
    flag: "🇺🇸",
    school: "Berkeley Summer Programs",
    ages: "14-18 years",
    duration: "3-6 weeks",
    price: "From $3,299/week",
    image: summerSchoolSanFrancisco,
    highlights: [
      "UC Berkeley campus",
      "STEM programs",
      "Tech company visits",
      "Golden Gate tours",
      "Silicon Valley trips",
      "College prep",
    ],
    accommodation: "University dorms",
    popular: false,
  },
];

const inclusions = [
  { icon: BookOpen, title: "English Classes", desc: "15-25 hours per week with qualified native teachers" },
  { icon: Building2, title: "Accommodation", desc: "Safe, comfortable housing with meal plans" },
  { icon: Bus, title: "Transfers", desc: "Airport pickup and drop-off included" },
  { icon: Globe, title: "Excursions", desc: "Cultural trips and sightseeing activities" },
  { icon: Utensils, title: "Meals", desc: "Full board or half board options" },
  { icon: Shield, title: "Insurance", desc: "Comprehensive travel and medical insurance" },
];

const whyChoose = [
  {
    title: "Trusted Partners",
    description: "We work exclusively with accredited, British Council & CEA certified schools",
  },
  {
    title: "Complete Packages",
    description: "Flights, visa, transfers, accommodation, meals, and activities all included",
  },
  {
    title: "Age-Appropriate Programs",
    description: "Carefully designed curricula for different age groups and levels",
  },
  {
    title: "24/7 Support",
    description: "Emergency contact and support throughout your child's stay",
  },
  {
    title: "Cultural Immersion",
    description: "More than just English – experience life in a new country",
  },
  {
    title: "Progress Reports",
    description: "Regular updates and end-of-course certificates",
  },
];

const stats = [
  { number: "500+", label: "Students Enrolled" },
  { number: "25+", label: "Partner Schools" },
  { number: "98%", label: "Parent Satisfaction" },
  { number: "10+", label: "Years Experience" },
];

const SummerSchools = () => {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-28 bg-primary overflow-hidden">
        <div className="absolute inset-0">
          <img src={summerSchoolUK} alt="" className="w-full h-full object-cover opacity-20" />
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
              ESL Summer Programs
            </span>
            <h1 className="font-heading text-4xl md:text-6xl lg:text-7xl text-primary-foreground mb-6 leading-tight">
              Summer Schools <span className="italic font-light text-gold">Abroad</span>
            </h1>
            <p className="font-body text-primary-foreground/80 text-lg md:text-xl leading-relaxed mb-8 max-w-2xl">
              Give your child an unforgettable summer learning English at world-class schools 
              in London, Scotland, and the USA. We handle everything – you just enjoy the results.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="gold" size="lg" className="text-base" asChild>
                <Link to="/contact">
                  Explore Programs
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
              </Button>
              <Button variant="heroOutline" size="lg" className="text-base" asChild>
                <a href="tel:+447385608114">
                  <Phone className="w-5 h-5 mr-2" />
                  Free Consultation
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

      {/* Programs */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <span className="section-label">Summer 2025</span>
            <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl text-foreground mb-4">
              Our <span className="italic font-light">Programs</span>
            </h2>
            <p className="font-body text-muted-foreground max-w-2xl mx-auto">
              Carefully selected partner schools offering the perfect blend of English learning, 
              cultural activities, and unforgettable experiences.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {programs.map((program, index) => (
              <motion.div
                key={program.location}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`relative rounded-2xl overflow-hidden bg-card shadow-card group ${
                  program.popular ? "ring-2 ring-gold" : "border border-border"
                }`}
              >
                {program.popular && (
                  <div className="absolute top-4 right-4 z-10">
                    <span className="px-3 py-1 rounded-full bg-gold text-primary text-xs font-medium flex items-center gap-1">
                      <Star className="w-3 h-3" /> Popular
                    </span>
                  </div>
                )}
                
                <div className="aspect-[4/3] relative overflow-hidden">
                  <img 
                    src={program.image} 
                    alt={program.location}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="text-3xl drop-shadow-lg">{program.flag}</span>
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-primary/90 to-transparent p-4">
                    <div className="flex items-center gap-1 text-primary-foreground">
                      <MapPin className="w-4 h-4" />
                      <span className="text-sm font-medium">{program.location}</span>
                    </div>
                  </div>
                </div>

                <div className="p-5">
                  <p className="text-sm text-muted-foreground mb-3">{program.school}</p>
                  
                  <div className="grid grid-cols-2 gap-3 mb-4">
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Users className="w-4 h-4 text-gold" />
                      {program.ages}
                    </div>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Calendar className="w-4 h-4 text-gold" />
                      {program.duration}
                    </div>
                  </div>

                  <div className="font-heading text-xl text-gold mb-4">{program.price}</div>

                  <div className="space-y-2 mb-4">
                    {program.highlights.slice(0, 3).map((highlight) => (
                      <div key={highlight} className="flex items-center gap-2 text-sm text-muted-foreground">
                        <CheckCircle2 className="w-4 h-4 text-gold flex-shrink-0" />
                        {highlight}
                      </div>
                    ))}
                  </div>

                  <div className="p-3 rounded-lg bg-secondary mb-4">
                    <div className="flex items-center gap-2 text-sm">
                      <Building2 className="w-4 h-4 text-gold" />
                      <span className="text-muted-foreground text-xs">{program.accommodation}</span>
                    </div>
                  </div>

                  <Button variant={program.popular ? "gold" : "outline"} className="w-full" asChild>
                    <Link to="/contact">Enquire Now</Link>
                  </Button>
                </div>
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
            <span className="section-label">All-Inclusive</span>
            <h2 className="font-heading text-3xl md:text-4xl text-foreground mb-4">
              What's <span className="italic font-light">Included</span>
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
                className="flex items-start gap-4 p-6 rounded-xl bg-background shadow-card"
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

      {/* Why Choose Us */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span className="section-label">Why Choose Us</span>
              <h2 className="font-heading text-3xl md:text-4xl text-foreground mb-6">
                The Notting Hill <span className="italic font-light">Difference</span>
              </h2>
              <p className="font-body text-muted-foreground mb-8">
                We don't just book schools – we create transformative experiences. Our team has 
                personally visited every partner school and maintains ongoing relationships to 
                ensure the highest standards.
              </p>
              
              <div className="grid sm:grid-cols-2 gap-4">
                {whyChoose.map((item, index) => (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    className="p-4 rounded-xl bg-secondary/50"
                  >
                    <h4 className="font-heading text-sm font-medium text-foreground mb-1">{item.title}</h4>
                    <p className="text-xs text-muted-foreground">{item.description}</p>
                  </motion.div>
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
              <h3 className="font-heading text-2xl mb-6">Typical Week Schedule</h3>
              <div className="space-y-4">
                {[
                  { time: "08:00 - 09:00", activity: "Breakfast" },
                  { time: "09:00 - 12:30", activity: "English Classes" },
                  { time: "12:30 - 13:30", activity: "Lunch" },
                  { time: "14:00 - 17:00", activity: "Activities & Sports" },
                  { time: "17:00 - 18:30", activity: "Free Time" },
                  { time: "18:30 - 19:30", activity: "Dinner" },
                  { time: "20:00 - 21:30", activity: "Evening Entertainment" },
                ].map((item, index) => (
                  <div key={index} className="flex items-center gap-4 py-2 border-b border-primary-foreground/10 last:border-0">
                    <div className="flex items-center gap-2 w-32">
                      <Clock className="w-4 h-4 text-gold" />
                      <span className="text-sm text-primary-foreground/70">{item.time}</span>
                    </div>
                    <span className="text-sm font-medium">{item.activity}</span>
                  </div>
                ))}
              </div>
              <p className="text-xs text-primary-foreground/50 mt-4">
                * Weekend excursions and day trips replace regular activities
              </p>
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
              Invest in Your Child's <span className="italic font-light">Future</span>
            </h2>
            <p className="text-primary-foreground/80 text-lg mb-8">
              Book a free consultation to discuss the best summer program for your child. 
              Early bookings receive priority placement and special discounts.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button variant="gold" size="lg" asChild>
                <Link to="/contact">
                  Book Free Consultation
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

export default SummerSchools;