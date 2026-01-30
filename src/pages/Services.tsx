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
    title: "Normal Haircut",
    description: "Clean, classic haircut finished neatly to your preference.",
    price: "£12",
    duration: "30 mins"
  },
  {
    icon: Scissors,
    title: "Skin Fade",
    description: "Sharp skin fade with smooth blending and crisp edges.",
    price: "£14",
    duration: "40 mins"
  },
  {
    icon: Scissors,
    title: "Haircut & Beard Trim",
    description: "Normal haircut combined with a tidy beard trim and shape.",
    price: "£23",
    duration: "45 mins"
  },
  {
    icon: Scissors,
    title: "Skin Fade & Beard Trim",
    description: "Skin fade haircut paired with a clean beard trim.",
    price: "£25",
    duration: "55 mins"
  },
  {
    icon: Zap,
    title: "Kids Cut (Under 10)",
    description: "Simple and comfortable haircut for children under 10.",
    price: "£10",
    duration: "25 mins"
  },
  {
    icon: Zap,
    title: "Kids Skin Fade",
    description: "Skin fade haircut tailored for kids.",
    price: "£12",
    duration: "30 mins"
  },
  {
    icon: Droplets,
    title: "Beard Trim, Shape & Hot Towel",
    description: "Beard shaping with relaxing hot towel treatment.",
    price: "£10",
    duration: "25 mins"
  },
  {
    icon: Sparkles,
    title: "Wet Shave & Hot Towel",
    description: "Traditional wet shave with hot towel preparation.",
    price: "£14",
    duration: "30 mins"
  },
  {
    icon: Sparkles,
    title: "OAP Cut",
    description: "Classic haircut for senior clients.",
    price: "£10",
    duration: "25 mins"
  },
  {
    icon: Flame,
    title: "Nose & Ear Wax",
    description: "Quick and effective nose and ear waxing service.",
    price: "£5",
    duration: "10 mins"
  },
  {
    icon: Brush,
    title: "Face Mask",
    description: "Refreshing facial mask to cleanse and rejuvenate skin.",
    price: "£5",
    duration: "10 mins"
  },
  {
    icon: Crown,
    title: "Full Service",
    description: "Complete grooming experience including hair, beard, and treatments.",
    price: "£40",
    duration: "90 mins"
  }
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
