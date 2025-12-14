// import { FolderGit2, ExternalLink, Github } from "lucide-react";
// import { Card } from "@/components/ui/card";
// import { Button } from "@/components/ui/button";

// const Projects = () => {
//   const projects = [
//     {
//       title: "E-Commerce Platform",
//       description:
//         "Developed a full-stack e-commerce website using the MERN stack with secure JWT-based authentication and Cloudinary image hosting.",
//       technologies: ["React", "Node.js", "Next.js", " Tailwind CSS", "Express.js", "MongoDB", "Redis"],
//       // liveUrl: "https://example.com",
//       // githubUrl: "https://github.com",
//     },



//     {
//       title: "AI Content Generator",
//       description:
//         "LLM-powered content generation tool with custom prompts, content optimization, and multi-language support.",
//       technologies: ["TypeScript", "OpenAI", "React", "Tailwind CSS"],
//       // liveUrl: "https://example.com",
//       // githubUrl: "https://github.com",
//     },
//     {
//       title: "Project Management Tool",
//       description:
//         "Collaborative project management application with real-time updates, task tracking, and team communication features.",
//       technologies: ["React", "Socket.io", "MongoDB", "Express"],
//       liveUrl: "https://example.com",
//       githubUrl: "https://github.com",
//     },
//   ];
// //
//   return (
//     <section id="projects" className="min-h-screen py-20 px-6 bg-card/30">
//       <div className="max-w-6xl mx-auto">
//         <div className="flex items-center gap-3 mb-12">
//           <FolderGit2 className="w-8 h-8 text-primary" />
//           <h2 className="text-4xl font-bold gradient-text">Projects</h2>
//         </div>

//         <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
//           {projects.map((project, index) => (
//             <Card
//               key={index}
//               className="p-6 hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10 animate-fade-in flex flex-col"
//               style={{ animationDelay: `${index * 0.1}s` }}
//             >
//               <h3 className="text-xl font-semibold text-primary mb-3">{project.title}</h3>
//               <p className="text-muted-foreground mb-4 flex-grow">{project.description}</p>

//               <div className="flex flex-wrap gap-2 mb-4">
//                 {project.technologies.map((tech, techIndex) => (
//                   <span
//                     key={techIndex}
//                     className="px-2 py-1 text-xs rounded bg-primary/10 text-primary"
//                   >
//                     {tech}
//                   </span>
//                 ))}
//               </div>

//               <div className="flex gap-3">
//                 <Button
//                   size="sm"
//                   variant="outline"
//                   className="flex-1 border-primary text-primary hover:bg-primary hover:text-primary-foreground"
//                   onClick={() => window.open(project.liveUrl, "_blank")}
//                 >
//                   <ExternalLink className="w-4 h-4 mr-2" />
//                   Live
//                 </Button>
//                 <Button
//                   size="sm"
//                   variant="outline"
//                   className="flex-1"
//                   onClick={() => window.open(project.githubUrl, "_blank")}
//                 >
//                   <Github className="w-4 h-4 mr-2" />
//                   Code
//                 </Button>
//               </div>
//             </Card>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Projects;


import { FolderGit2 } from "lucide-react";
import { Card } from "@/components/ui/card";

const Projects = () => {
  const projects = [
    {
      title: "E-Commerce Platform",
      description:
        "Developed a full-stack e-commerce website using the MERN stack with secure JWT-based authentication and Cloudinary image hosting.",
      technologies: ["React", "Node.js", "Next.js", "Tailwind CSS", "Express.js", "MongoDB", "Redis"],
    },
    {
      title: "News Aggregator",
      description:
        "Developed a news aggregator web application using the MERN stack (MongoDB, Express, React, Node.js) integrated with the NewsAPI.org API.",
      technologies: ["TypeScript", " REST API", "React", "Tailwind CSS"],
    },
    {
      title: "Video and Chat Application Using Full Stack",
      description:
        "Collaborative project management application with real-time updates, task tracking, and team communication features.",
      technologies: ["React.js", "Socket.io", "MongoDB", "Express"],
    },
  ];//  
  return (
    <section id="projects" className="min-h-screen py-20 px-6 bg-card/30">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center gap-3 mb-12">
          <FolderGit2 className="w-8 h-8 text-primary" />
          <h2 className="text-4xl font-bold gradient-text">Projects</h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <Card
              key={index}
              className="p-6 hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10 animate-fade-in flex flex-col"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <h3 className="text-xl font-semibold text-primary mb-3">{project.title}</h3>
              <p className="text-muted-foreground mb-4 flex-grow">{project.description}</p>

              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech, techIndex) => (
                  <span
                    key={techIndex}
                    className="px-2 py-1 text-xs rounded bg-primary/10 text-primary"
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

export default Projects;
