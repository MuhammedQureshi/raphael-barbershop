import { motion } from "framer-motion";
import { Scissors, Droplets, Sparkles, Clock, Brush, Flame, Zap, Crown, ArrowLeft, Phone } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const allServices = [
  {
    icon: Scissors,
    title: "Classic Haircut",
    description: "Traditional scissor cut with styling. Includes consultation, wash, cut, and finish.",
    price: "£15",
    duration: "30 mins"
  },
  {
    icon: Scissors,
    title: "Skin Fade",
    description: "Precision skin fade with seamless gradient blending from skin to desired length.",
    price: "£18",
    duration: "40 mins"
  },
  {
    icon: Scissors,
    title: "Scissor Fade",
    description: "Expert scissor work creating a soft, natural gradient fade effect.",
    price: "£20",
    duration: "45 mins"
  },
  {
    icon: Crown,
    title: "Executive Cut",
    description: "Premium haircut experience with hot towel, head massage, and precision styling.",
    price: "£30",
    duration: "50 mins"
  },
  {
    icon: Droplets,
    title: "Beard Trim",
    description: "Shape and trim your beard to perfection with clean lines and edges.",
    price: "£10",
    duration: "20 mins"
  },
  {
    icon: Droplets,
    title: "Beard Sculpting",
    description: "Full beard redesign with detailed shaping, conditioning, and styling.",
    price: "£15",
    duration: "30 mins"
  },
  {
    icon: Sparkles,
    title: "Traditional Shave",
    description: "Straight razor shave with hot towel prep, premium lather, and aftercare.",
    price: "£20",
    duration: "30 mins"
  },
  {
    icon: Flame,
    title: "Hot Towel Shave",
    description: "Luxury shave experience with multiple hot towels, oils, and soothing balms.",
    price: "£25",
    duration: "40 mins"
  },
  {
    icon: Scissors,
    title: "Hair & Beard Combo",
    description: "Complete grooming package with haircut and full beard service.",
    price: "£25",
    duration: "50 mins"
  },
  {
    icon: Zap,
    title: "Kids Cut",
    description: "Gentle and patient haircut service for children under 12.",
    price: "£12",
    duration: "25 mins"
  },
  {
    icon: Brush,
    title: "Grey Blending",
    description: "Subtle color service to blend grey hairs for a natural, youthful look.",
    price: "£20",
    duration: "40 mins"
  },
  {
    icon: Crown,
    title: "The Full Experience",
    description: "Ultimate grooming: haircut, hot towel shave, beard sculpt, and styling.",
    price: "£50",
    duration: "90 mins"
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.4 },
  },
};

const Services = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main className="pt-24 pb-16">
        {/* Hero Header */}
        <section className="py-16 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-secondary/30 via-background to-background" />
          
          <div className="container mx-auto px-6 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center"
            >
              <Link 
                to="/" 
                className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors mb-8"
              >
                <ArrowLeft className="w-4 h-4" />
                Back to Home
              </Link>
              
              <span className="text-primary text-sm tracking-[0.3em] uppercase mb-4 block">
                Our Menu
              </span>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6">
                <span className="text-gradient">Services</span> & Pricing
              </h1>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                From classic cuts to luxury grooming experiences, we offer a full range of 
                services tailored to the modern gentleman.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-8">
          <div className="container mx-auto px-6">
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto"
            >
              {allServices.map((service, index) => (
                <motion.div key={index} variants={itemVariants}>
                  <Card className="bg-card/50 backdrop-blur-sm elegant-border hover:border-primary/40 transition-all duration-500 group hover:-translate-y-1 h-full">
                    <CardContent className="p-6">
                      <div className="flex items-start gap-4">
                        <motion.div 
                          className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center shrink-0 group-hover:bg-primary/20 transition-colors"
                          whileHover={{ scale: 1.1, rotate: 5 }}
                          transition={{ type: "spring", stiffness: 300 }}
                        >
                          <service.icon className="w-6 h-6 text-primary" />
                        </motion.div>
                        
                        <div className="flex-1 min-w-0">
                          <div className="flex items-start justify-between gap-2 mb-2">
                            <h3 className="text-lg font-semibold">{service.title}</h3>
                            <span className="text-primary font-bold text-lg shrink-0">
                              {service.price}
                            </span>
                          </div>
                          <p className="text-muted-foreground text-sm leading-relaxed mb-3">
                            {service.description}
                          </p>
                          <div className="flex items-center gap-2 text-xs text-muted-foreground">
                            <Clock className="w-3 h-3" />
                            <span>{service.duration}</span>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </motion.div>

            {/* CTA */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.8 }}
              className="text-center mt-16"
            >
              <div className="bg-card/50 backdrop-blur-sm elegant-border rounded-lg p-8 max-w-2xl mx-auto">
                <h3 className="text-2xl font-bold mb-4">Ready to Book?</h3>
                <p className="text-muted-foreground mb-6">
                  Give us a call to schedule your appointment. Walk-ins are also welcome!
                </p>
                <a href="tel:07803687144">
                  <Button size="lg" className="gold-glow">
                    <Phone className="w-5 h-5 mr-2" />
                    Call 07803 687144
                  </Button>
                </a>
              </div>
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Services;
