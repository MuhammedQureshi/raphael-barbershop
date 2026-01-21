import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Phone, MapPin, Star } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen  flex items-center justify-center overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23d4a846' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background/95 to-background" />

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 text-center">
        {/* Decorative Line */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex items-center justify-center gap-4 mb-8"
        >
          <div className="h-px w-16 bg-gradient-to-r from-transparent to-primary" />
          <span className="text-primary text-sm tracking-[0.3em] uppercase">Est. Stoke-on-Trent</span>
          <div className="h-px w-16 bg-gradient-to-l from-transparent to-primary" />
        </motion.div>

        {/* Main Title */}
        <motion.h1 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 tracking-tight"
        >
          <span className="text-gradient">Raphael</span>
          <br />
          <span className="text-foreground">Barber</span>
        </motion.h1>

        {/* Rating */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex items-center justify-center gap-2 mb-8"
        >
          <div className="flex">
            {[...Array(5)].map((_, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, rotate: -20 }}
                animate={{ opacity: 1, rotate: 0 }}
                transition={{ duration: 0.3, delay: 0.4 + i * 0.1 }}
              >
                <Star className="w-5 h-5 fill-primary text-primary" />
              </motion.div>
            ))}
          </div>
          <span className="text-primary font-semibold">5.0</span>
          <span className="text-muted-foreground">(37 reviews)</span>
        </motion.div>

        {/* Tagline */}
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-12 leading-relaxed"
        >
          Where tradition meets modern style. Experience the art of grooming 
          with precision cuts and timeless service.
        </motion.p>

        {/* CTAs */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16"
        >
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.98 }}>
            <Button size="lg" className="group px-8 py-6 text-lg gold-glow">
              <Phone className="w-5 h-5 mr-2 group-hover:animate-pulse" />
              Book Now
            </Button>
          </motion.div>
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.98 }}>
            <Button variant="outline" size="lg" className="px-8 py-6 text-lg border-primary/30 hover:bg-primary/10">
              <MapPin className="w-5 h-5 mr-2" />
              Get Directions
            </Button>
          </motion.div>
        </motion.div>

        {/* Quick Info */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="md:flex flex-col hidden md:flex-row items-center justify-center gap-8 text-sm text-muted-foreground"
        >
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
            <span>Open Now</span>
          </div>
          <div className="hidden md:block w-px h-4 bg-border" />
          <span>515 Etruria Rd, Basford, Stoke-on-Trent</span>
          <div className="hidden md:block w-px h-4 bg-border" />
          <a href="tel:07803687144" className="text-primary hover:underline">
            07803 687144
          </a>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <motion.span 
          animate={{ y: [0, 5, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="text-xs text-muted-foreground tracking-widest uppercase"
        >
          Scroll
        </motion.span>
        <motion.div 
          animate={{ scaleY: [1, 1.3, 1] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="w-px h-8 bg-gradient-to-b from-primary to-transparent origin-top" 
        />
      </motion.div>
    </section>
  );
};

export default HeroSection;
