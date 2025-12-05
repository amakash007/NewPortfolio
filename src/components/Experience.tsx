import { Briefcase } from "lucide-react";
import { Card } from "@/components/ui/card";

const Experience = () => {
  const experiences = [
    {
      title: "Full-Stack Developer Intern",
      company: "BigHost India Private Limited, Nashik, Maharashtra, India",
      period: "June 2024-Dec 2025 ",
      description:
        "Led development of scalable web applications using React.js, Node.js, . Implemented RESTful APIs and optimized database queries for better performance.",
      technologies: ["React", "TypeScript", "Node.js", "Html", "MongoDB","JavaScript","Express"],
    },
    // {
    //   title: "Full Stack Developer",
    //   company: "Startup Inc",
    //   period: "2020 - 2022",
    //   description:
    //     "Built and maintained multiple client-facing applications. Collaborated with design team to create intuitive user interfaces and RESTful APIs.",
    //   technologies: ["JavaScript", "React", "Express", "MongoDB"],
    // },
    {
      title: "Web Developer Intern                     ",
      company: "Calibers-InfoTech, Nashik",
      period: "Aug 2022 – Sep 2022 ",
      description:
        "Developed responsive websites and web applications.Improved UI/UX of existing pages for better accessibility and user engagement. ",
      technologies: ["HTML", "CSS", "JavaScript", "Php"],
    },
  ];

  return (
    <section id="experience" className="min-h-screen py-20 px-6">
      <div className="max-w-5xl mx-auto">
        <div className="flex items-center gap-3 mb-12">
          <Briefcase className="w-8 h-8 text-primary" />
          <h2 className="text-4xl font-bold gradient-text">Experience</h2>
        </div>

        <div className="space-y-6">
          {experiences.map((exp, index) => (
            <Card
              key={index}
              className="p-6 hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10 animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                <div>
                  <h3 className="text-xl font-semibold text-primary">{exp.title}</h3>
                  <p className="text-muted-foreground">{exp.company}</p>
                </div>
                <span className="text-sm text-muted-foreground mt-2 md:mt-0">{exp.period}</span>
              </div>

              <p className="text-muted-foreground mb-4">{exp.description}</p>

              <div className="flex flex-wrap gap-2">
                {exp.technologies.map((tech, techIndex) => (
                  <span
                    key={techIndex}
                    className="px-3 py-1 text-xs rounded-full bg-primary/10 text-primary border border-primary/20"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
