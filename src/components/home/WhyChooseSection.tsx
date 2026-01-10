import { motion } from "framer-motion";
import { Compass, Globe, Shield, HeartHandshake } from "lucide-react";

const features = [
  {
    icon: Compass,
    title: "Expert Travel Design",
    description:
      "Our seasoned travel designers craft bespoke itineraries tailored to your unique preferences and dreams.",
  },
  {
    icon: Globe,
    title: "Exclusive Access",
    description:
      "Unlock private experiences and hidden gems that most travellers never discover.",
  },
  {
    icon: Shield,
    title: "24/7 Concierge",
    description:
      "Round-the-clock support ensures every moment of your journey is seamless and stress-free.",
  },
  {
    icon: HeartHandshake,
    title: "Sustainable Luxury",
    description:
      "Travel responsibly with partners committed to preserving the destinations we love.",
  },
];

const WhyChooseSection = () => {
  return (
    <section className="py-20 lg:py-32 bg-secondary/50">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="font-body text-gold text-sm tracking-[0.3em] uppercase mb-4 block">
              Why Choose Us
            </span>
            <h2 className="font-heading text-3xl md:text-5xl text-foreground mb-6">
              Travel Beyond <br />
              <span className="italic font-light">The Ordinary</span>
            </h2>
            <p className="font-body text-muted-foreground text-lg leading-relaxed mb-8">
              At Notting Hill Voyages, we believe travel should be transformative. 
              With over 10 years of expertise, we've mastered the art of creating 
              journeys that exceed expectations and create lasting memories.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6">
              {[
                { value: "500+", label: "Destinations" },
                { value: "98%", label: "Client Satisfaction" },
                { value: "10+", label: "Years Experience" },
              ].map((stat) => (
                <div key={stat.label} className="text-center lg:text-left">
                  <div className="font-heading text-3xl md:text-4xl text-gold mb-1">
                    {stat.value}
                  </div>
                  <div className="font-body text-sm text-muted-foreground">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right Features Grid */}
          <div className="grid sm:grid-cols-2 gap-6">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-background p-6 rounded-xl shadow-elegant hover:shadow-lifted transition-shadow duration-300"
              >
                <div className="w-12 h-12 rounded-full bg-gold/10 flex items-center justify-center mb-4">
                  <feature.icon className="w-6 h-6 text-gold" />
                </div>
                <h3 className="font-heading text-xl text-foreground mb-2">
                  {feature.title}
                </h3>
                <p className="font-body text-muted-foreground text-sm leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseSection;