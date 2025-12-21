import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const CTASection = () => {
  return (
    <section className="py-20 lg:py-32 bg-background relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-gold/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-gold/5 rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />

      <div className="container mx-auto px-4 relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto text-center"
        >
          <span className="font-body text-gold text-sm tracking-[0.3em] uppercase mb-4 block">
            Start Your Journey
          </span>
          <h2 className="font-heading text-3xl md:text-5xl lg:text-6xl text-foreground mb-6">
            Ready to Create <br />
            <span className="italic font-light">Unforgettable Memories?</span>
          </h2>
          <p className="font-body text-muted-foreground text-lg md:text-xl leading-relaxed mb-10 max-w-2xl mx-auto">
            Let our expert travel designers craft your perfect journey. 
            Whether it's a romantic getaway, family adventure, or solo exploration, 
            we'll make it extraordinary.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="gold" size="xl" asChild>
              <Link to="/contact" className="gap-3">
                Plan Your Journey
                <ArrowRight className="w-5 h-5" />
              </Link>
            </Button>
            <Button variant="outline" size="xl" asChild>
              <Link to="/destinations">Explore Destinations</Link>
            </Button>
          </div>

          {/* Trust Badges */}
          <div className="mt-16 flex flex-wrap justify-center gap-8 text-muted-foreground">
            {["ASTA Member", "IATA Accredited", "Virtuoso Partner", "Travel + Leisure A-List"].map(
              (badge) => (
                <span key={badge} className="font-body text-sm tracking-wide">
                  {badge}
                </span>
              )
            )}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;