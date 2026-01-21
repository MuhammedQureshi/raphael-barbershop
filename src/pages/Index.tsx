import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ServicesSection from "@/components/ServicesSection";
import HoursSection from "@/components/HoursSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <HeroSection />
        <section id="services">
          <ServicesSection />
        </section>
        <section id="hours">
          <HoursSection />
        </section>
        <section id="location">
          <ContactSection />
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Index;
