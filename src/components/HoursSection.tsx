import { Clock } from "lucide-react";

const hours = [
  { day: "Monday", time: "9 am – 7 pm" },
  { day: "Tuesday", time: "9 am – 7 pm" },
  { day: "Wednesday", time: "9 am – 7 pm" },
  { day: "Thursday", time: "9 am – 7 pm" },
  { day: "Friday", time: "9 am – 7 pm" },
  { day: "Saturday", time: "9 am – 7 pm" },
  { day: "Sunday", time: "10 am – 5 pm" },
];

const HoursSection = () => {
  const today = new Date().toLocaleDateString('en-US', { weekday: 'long' });

  return (
    <section className="py-24 relative">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left - Image/Decorative */}
            <div className="relative">
              <div className="aspect-square rounded-lg bg-gradient-to-br from-secondary to-card elegant-border overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <Clock className="w-24 h-24 text-primary/30 mx-auto mb-4" />
                    <p className="text-6xl font-bold text-gradient">7</p>
                    <p className="text-muted-foreground text-lg mt-2">Days a Week</p>
                  </div>
                </div>
                {/* Corner accents */}
                <div className="absolute top-4 left-4 w-8 h-8 border-l-2 border-t-2 border-primary/40" />
                <div className="absolute top-4 right-4 w-8 h-8 border-r-2 border-t-2 border-primary/40" />
                <div className="absolute bottom-4 left-4 w-8 h-8 border-l-2 border-b-2 border-primary/40" />
                <div className="absolute bottom-4 right-4 w-8 h-8 border-r-2 border-b-2 border-primary/40" />
              </div>
            </div>

            {/* Right - Hours */}
            <div>
              <span className="text-primary text-sm tracking-[0.3em] uppercase mb-4 block">
                When to Visit
              </span>
              <h2 className="text-4xl md:text-5xl font-bold mb-8">
                Opening Hours
              </h2>

              <div className="space-y-4">
                {hours.map((item, index) => (
                  <div 
                    key={index}
                    className={`flex justify-between items-center py-3 px-4 rounded-lg transition-colors ${
                      item.day === today 
                        ? 'bg-primary/10 border border-primary/30' 
                        : 'hover:bg-secondary/50'
                    }`}
                  >
                    <span className={`font-medium ${item.day === today ? 'text-primary' : ''}`}>
                      {item.day}
                      {item.day === today && (
                        <span className="ml-2 text-xs bg-primary text-primary-foreground px-2 py-0.5 rounded-full">
                          Today
                        </span>
                      )}
                    </span>
                    <span className="text-muted-foreground">{item.time}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HoursSection;
