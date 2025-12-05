import { Code2 } from "lucide-react";
import { Card } from "@/components/ui/card";

const Skills = () => {
  const skillCategories = [
    {
      category: "Frontend",
      skills: ["React.js", "TypeScript", "Next.js", "Tailwind CSS", "Bootstrap", "HTML/CSS"],
    },
    {
      category: "Backend",
      skills: ["Node.js", "Express", "Mongoose", "PostgreSQL", "MongoDB", " REST API"],
    },
    {
      category: "Developer Tools & Platforms",
      skills: ["Git", "Docker", "GitHub", " VS Code", "Vercel", "Firebase"],
    },
    {
      category: "AI & CS Fundamentals",
      skills: ["OpenAI API", "Generative Ai", ,"DSA" ,"Java", "DBMS", "Operating System"],
    },
  ];
//logical part of skills component ends here
  return (
    <section id="skills" className="min-h-screen py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center gap-3 mb-12">
          <Code2 className="w-8 h-8 text-primary" />
          <h2 className="text-4xl font-bold gradient-text">Skills</h2>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {skillCategories.map((category, index) => (
            <Card
              key={index}
              className="p-6 hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10 animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <h3 className="text-xl font-semibold text-primary mb-4">{category.category}</h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <span
                    key={skillIndex}
                    className="px-4 py-2 rounded-lg bg-primary/10 text-primary border border-primary/20 hover:bg-primary/20 transition-colors duration-300"
                  >
                    {skill}
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

export default Skills;
