import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Phone, MapPin, Navigation } from "lucide-react";

const ContactSection = () => {
  return (
    <section className="py-24 relative">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-t from-secondary/30 via-background to-background" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-primary text-sm tracking-[0.3em] uppercase mb-4 block">
            Find Us
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Visit Our Shop
          </h2>
          <div className="flex items-center justify-center gap-4">
            <div className="h-px w-12 bg-primary/50" />
            <MapPin className="w-6 h-6 text-primary" />
            <div className="h-px w-12 bg-primary/50" />
          </div>
        </motion.div>

        {/* Contact Cards */}
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* Address Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            whileHover={{ y: -5 }}
            className="bg-card/50 backdrop-blur-sm elegant-border rounded-lg p-8 text-center hover:border-primary/40 transition-all duration-300"
          >
            <motion.div 
              className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6"
              whileHover={{ scale: 1.1, rotate: 5 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <MapPin className="w-8 h-8 text-primary" />
            </motion.div>
            <h3 className="text-xl font-semibold mb-3">Address</h3>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              515 Etruria Rd<br />
              Basford, Stoke-on-Trent<br />
              ST4 6HT
            </p>
            <Button variant="outline" className="border-primary/30 hover:bg-primary/10" onClick={() => window.open("https://share.google/c0CqZzeUwp6mDIECU", "_blank")}>
              <Navigation className="w-4 h-4 mr-2" />
              Get Directions
            </Button>
          </motion.div>

          {/* Phone Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            whileHover={{ y: -5 }}
            className="bg-card/50 backdrop-blur-sm elegant-border rounded-lg p-8 text-center hover:border-primary/40 transition-all duration-300"
          >
            <motion.div 
              className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6"
              whileHover={{ scale: 1.1, rotate: -5 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <Phone className="w-8 h-8 text-primary" />
            </motion.div>
            <h3 className="text-xl font-semibold mb-3">Call Us</h3>
            <p className="text-muted-foreground mb-2">
              Ready to book your appointment?
            </p>
            <a 
              className="text-2xl font-semibold text-gradient block mb-6"
            >
              07803 687144
            </a>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.98 }}>
              <Button className="gold-glow" onClick={() => window.location.href = "tel:07803687144"}>
                <Phone className="w-4 h-4 mr-2" />
                Call Now
              </Button>
            </motion.div>
          </motion.div>
        </div>

        {/* Map Embed */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="mt-16 max-w-4xl mx-auto"
        >
          <div className="aspect-video rounded-lg elegant-border overflow-hidden bg-secondary/50 relative">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2399.5!2d-2.1897!3d53.0289!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2s515+Etruria+Rd%2C+Basford%2C+Stoke-on-Trent+ST4+6HT!5e0!3m2!1sen!2suk!4v1234567890"
              width="100%"
              height="100%"
              style={{ border: 0, filter: 'grayscale(100%) invert(92%) contrast(90%)' }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Raphael Barber Location"
            />
            <div className="absolute inset-0 pointer-events-none border border-primary/20 rounded-lg" />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;
