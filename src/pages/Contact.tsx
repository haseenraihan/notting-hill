import { motion } from "framer-motion";
import { useState } from "react";
import { MapPin, Phone, Mail, Clock, Send } from "lucide-react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    destination: "",
    message: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500));

    toast({
      title: "Thank you for your enquiry!",
      description: "Our travel experts will be in touch within 24 hours.",
    });

    setFormData({ name: "", email: "", phone: "", destination: "", message: "" });
    setIsSubmitting(false);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

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
              Get in Touch
            </span>
            <h1 className="font-heading text-4xl md:text-6xl text-primary-foreground mb-6">
              Let's Plan Your <span className="italic font-light">Journey</span>
            </h1>
            <p className="font-body text-primary-foreground/80 text-lg leading-relaxed">
              Whether you have a destination in mind or need inspiration, 
              our travel experts are ready to craft your perfect adventure.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="font-heading text-2xl md:text-3xl text-foreground mb-6">
                Start Your <span className="italic font-light">Enquiry</span>
              </h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="font-body text-sm text-foreground mb-2 block">
                      Full Name *
                    </label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      placeholder="Your full name"
                      className="bg-secondary border-border focus:border-gold"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="font-body text-sm text-foreground mb-2 block">
                      Email Address *
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      placeholder="your@email.com"
                      className="bg-secondary border-border focus:border-gold"
                    />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="phone" className="font-body text-sm text-foreground mb-2 block">
                      Phone Number
                    </label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="+44 123 456 789"
                      className="bg-secondary border-border focus:border-gold"
                    />
                  </div>
                  <div>
                    <label htmlFor="destination" className="font-body text-sm text-foreground mb-2 block">
                      Dream Destination
                    </label>
                    <Input
                      id="destination"
                      name="destination"
                      value={formData.destination}
                      onChange={handleChange}
                      placeholder="Where do you want to go?"
                      className="bg-secondary border-border focus:border-gold"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="font-body text-sm text-foreground mb-2 block">
                    Tell Us About Your Dream Trip *
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    placeholder="Describe your ideal travel experience, dates, number of travellers, special interests..."
                    rows={6}
                    className="bg-secondary border-border focus:border-gold resize-none"
                  />
                </div>

                <Button
                  type="submit"
                  variant="gold"
                  size="lg"
                  className="w-full sm:w-auto"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    "Sending..."
                  ) : (
                    <>
                      Send Enquiry
                      <Send className="w-4 h-4 ml-2" />
                    </>
                  )}
                </Button>
              </form>
            </motion.div>

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="font-heading text-2xl md:text-3xl text-foreground mb-6">
                Visit <span className="italic font-light">Our Office</span>
              </h2>
              
              <div className="bg-secondary/50 rounded-xl p-8 mb-8">
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-gold/10 flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-5 h-5 text-gold" />
                    </div>
                    <div>
                      <h3 className="font-heading text-lg text-foreground mb-1">Address</h3>
                      <p className="font-body text-muted-foreground">
                        123 Portobello Road<br />
                        Notting Hill, London W11 2QB<br />
                        United Kingdom
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-gold/10 flex items-center justify-center flex-shrink-0">
                      <Phone className="w-5 h-5 text-gold" />
                    </div>
                    <div>
                      <h3 className="font-heading text-lg text-foreground mb-1">Phone</h3>
                      <a href="tel:+44123456789" className="font-body text-muted-foreground hover:text-gold transition-colors">
                        +44 123 456 789
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-gold/10 flex items-center justify-center flex-shrink-0">
                      <Mail className="w-5 h-5 text-gold" />
                    </div>
                    <div>
                      <h3 className="font-heading text-lg text-foreground mb-1">Email</h3>
                      <a href="mailto:hello@nhvoyages.com" className="font-body text-muted-foreground hover:text-gold transition-colors">
                        hello@nhvoyages.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-gold/10 flex items-center justify-center flex-shrink-0">
                      <Clock className="w-5 h-5 text-gold" />
                    </div>
                    <div>
                      <h3 className="font-heading text-lg text-foreground mb-1">Office Hours</h3>
                      <p className="font-body text-muted-foreground">
                        Monday - Friday: 9:00 AM - 6:00 PM<br />
                        Saturday: 10:00 AM - 4:00 PM<br />
                        Sunday: By appointment
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Map Placeholder */}
              <div className="aspect-video rounded-xl overflow-hidden bg-secondary">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2483.228894785!2d-0.20556!3d51.5173!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48761ab0d7a7b9b1%3A0x5e8e6c2a8c8b3f0!2sPortobello%20Rd%2C%20London!5e0!3m2!1sen!2suk!4v1600000000000!5m2!1sen!2suk"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Notting Hill Voyages location"
                  className="grayscale hover:grayscale-0 transition-all duration-500"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default Contact;