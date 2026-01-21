import { Scissors, Droplets, Sparkles } from "lucide-react";
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

const ServicesSection = () => {
  return (
    <section className="py-24 relative">
      {/* Background accent */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/20 to-background" />
      
      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
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
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {services.map((service, index) => (
            <Card 
              key={index} 
              className="bg-card/50 backdrop-blur-sm elegant-border hover:border-primary/40 transition-all duration-500 group hover:-translate-y-2"
            >
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6 group-hover:bg-primary/20 transition-colors">
                  <service.icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  {service.description}
                </p>
                <span className="text-primary font-semibold text-lg">
                  {service.price}
                </span>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
