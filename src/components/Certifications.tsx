import { Award } from "lucide-react";
import { Card } from "@/components/ui/card";

const Certifications = () => {
  const certifications = [
    {
      title: "Accenture Nordics - Software Engineering Job Simulation",
      issuer: "Forage",
      date: "2025",
    },
    {
      title: " AI Foundations Associate certification!",
      issuer: "Oracle",
      date: "2025",
    },
    {
      title: "Generative AI ",
      issuer: "Simplilearn",
      date: "2025",
    },
    {
      title: " AI for Beginners",
      issuer: "HP Foundation",
      date: "2025",
    },
  ];

  return (
    <section id="certifications" className="min-h-screen py-20 px-6">
      <div className="max-w-5xl mx-auto">
        <div className="flex items-center gap-3 mb-12">
          <Award className="w-8 h-8 text-primary" />
          <h2 className="text-4xl font-bold gradient-text">Certifications</h2>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {certifications.map((cert, index) => (
            <Card
              key={index}
              className="p-6 hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10 animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <h3 className="text-lg font-semibold text-primary mb-2">{cert.title}</h3>
              <p className="text-muted-foreground text-sm mb-1">{cert.issuer}</p>
              <p className="text-muted-foreground text-xs">{cert.date}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
