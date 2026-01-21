import { motion } from "framer-motion";
import { Scissors, Droplets, Sparkles, Clock, Brush, Flame, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const services = [
  {
    icon: Scissors,
    title: "Precision Haircuts",
    description: "Classic and contemporary styles tailored to your unique look and personality.",
    price: "From £15"
  },
  {
    icon: Droplets,
    title: "Beard Grooming",
    description: "Expert beard shaping, trimming, and hot towel treatments for the perfect finish.",
    price: "From £10"
  },
  {
    icon: Sparkles,
    title: "Luxury Shaves",
    description: "Traditional straight razor shaves with premium oils and soothing aftercare.",
    price: "From £20"
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 },
  },
};

const ServicesSection = () => {
  return (
    <section className="py-24 relative">
      {/* Background accent */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/20 to-background" />
      
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
            Our Expertise
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Services
          </h2>
          <div className="flex items-center justify-center gap-4">
            <div className="h-px w-12 bg-primary/50" />
            <Scissors className="w-6 h-6 text-primary" />
            <div className="h-px w-12 bg-primary/50" />
          </div>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto"
        >
          {services.map((service, index) => (
            <motion.div key={index} variants={itemVariants}>
              <Card 
                className="bg-card/50 backdrop-blur-sm elegant-border hover:border-primary/40 transition-all duration-500 group hover:-translate-y-2 h-full"
              >
                <CardContent className="p-8 text-center">
                  <motion.div 
                    className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6 group-hover:bg-primary/20 transition-colors"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <service.icon className="w-8 h-8 text-primary" />
                  </motion.div>
                  <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    {service.description}
                  </p>
                  <span className="text-primary font-semibold text-lg">
                    {service.price}
                  </span>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* View All Services Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <a href="/services">
            <Button 
              variant="outline" 
              size="lg" 
              className="group border-primary/30 hover:bg-primary/10 px-8"
            >
              View All Services
              <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesSection;
