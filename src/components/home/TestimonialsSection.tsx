import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    id: 1,
    name: "Sarah Thompson",
    location: "London, UK",
    rating: 5,
    text: "Notting Hill Voyages planned the most incredible honeymoon to the Maldives. Every detail was perfect, from the private sunset dinners to the surprise spa treatments. Truly unforgettable!",
    trip: "Maldives Honeymoon",
  },
  {
    id: 2,
    name: "James & Emma Wilson",
    location: "New York, USA",
    rating: 5,
    text: "Our African safari exceeded every expectation. The guides were exceptional, the lodges were luxurious, and the wildlife experiences were absolutely magical. We're already planning our next adventure!",
    trip: "Kenya Safari",
  },
  {
    id: 3,
    name: "Michael Chen",
    location: "Singapore",
    rating: 5,
    text: "The attention to detail and personalized service is unmatched. From our private jet transfers to exclusive restaurant reservations, every moment was curated to perfection.",
    trip: "Italian Riviera",
  },
];

const TestimonialsSection = () => {
  return (
    <section className="py-20 lg:py-32 bg-primary text-primary-foreground">
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
            Testimonials
          </span>
          <h2 className="font-heading text-3xl md:text-5xl mb-6">
            Stories From <span className="italic font-light">Our Travellers</span>
          </h2>
          <p className="font-body text-primary-foreground/70 text-lg leading-relaxed">
            Hear from those who've experienced the magic of travelling with Notting Hill Voyages.
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-primary-foreground/5 backdrop-blur-sm rounded-xl p-8 border border-primary-foreground/10 hover:border-gold/30 transition-colors duration-300"
            >
              {/* Quote Icon */}
              <Quote className="w-10 h-10 text-gold/30 mb-6" />

              {/* Rating */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-gold text-gold" />
                ))}
              </div>

              {/* Text */}
              <p className="font-body text-primary-foreground/80 leading-relaxed mb-6">
                "{testimonial.text}"
              </p>

              {/* Author */}
              <div className="border-t border-primary-foreground/10 pt-6">
                <p className="font-heading text-lg">{testimonial.name}</p>
                <p className="font-body text-sm text-primary-foreground/60 mb-1">
                  {testimonial.location}
                </p>
                <p className="font-body text-sm text-gold">{testimonial.trip}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;