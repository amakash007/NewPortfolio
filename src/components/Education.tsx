import { GraduationCap } from "lucide-react";
import { Card } from "@/components/ui/card";

const Education = () => {
  const education = [
    {
      degree: "B.Tech in Computer Science and Engineering",
      institution: "Sandip University, Nashik ",
      period: "2023 - 2026",
      description: "Specialized in Software Engineering ",
    },
    {
      degree: " Computer Diploma",
      institution: "Guru Gobind Singh Polytechnic College Nashik.", 
      period: "2021 - 2023",
      description: "Focus on core concepts of computer science and practical applications.",
    },
  ];

  return (
    <section id="education" className="min-h-screen py-20 px-6 bg-card/30">
      <div className="max-w-5xl mx-auto">
        <div className="flex items-center gap-3 mb-12">
          <GraduationCap className="w-8 h-8 text-primary" />
          <h2 className="text-4xl font-bold gradient-text">Education</h2>
        </div>

        <div className="space-y-6">
          {education.map((edu, index) => (
            <Card
              key={index}
              className="p-6 hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10 animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-3">
                <h3 className="text-xl font-semibold text-primary">{edu.degree}</h3>
                <span className="text-sm text-muted-foreground mt-2 md:mt-0">{edu.period}</span>
              </div>
              <p className="text-muted-foreground font-medium mb-2">{edu.institution}</p>
              <p className="text-muted-foreground text-sm">{edu.description}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
