import { Scissors, Phone, MapPin } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 border-t border-border">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
              <Scissors className="w-5 h-5 text-primary" />
            </div>
            <div>
              <span className="text-xl font-bold">Raphael</span>
              <span className="text-primary ml-1">Barber</span>
            </div>
          </div>

          {/* Quick Contact */}
          <div className="flex flex-col sm:flex-row items-center gap-6 text-sm text-muted-foreground">
            <a href="tel:07803687144" className="flex items-center gap-2 hover:text-primary transition-colors">
              <Phone className="w-4 h-4" />
              07803 687144
            </a>
            <div className="hidden sm:block w-px h-4 bg-border" />
            <div className="flex items-center gap-2">
              <MapPin className="w-4 h-4" />
              Stoke-on-Trent
            </div>
          </div>

          {/* Copyright */}
          <p className="text-sm text-muted-foreground">
            © {currentYear} Raphael Barber. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
