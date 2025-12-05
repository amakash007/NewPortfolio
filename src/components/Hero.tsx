import { Mail, Linkedin, Github, Twitter } from "lucide-react";
import developerPortrait from "@/assets/developer-portrait.jpg";

const Hero = () => {
  const socialLinks = [
    { icon: Mail, href: "mailto:your.email@example.com", label: "Email" },
    { icon: Linkedin, href: "https://linkedin.com", label: "LinkedIn" },
    { icon: Github, href: "https://github.com", label: "GitHub" },
    { icon: Twitter, href: "https://twitter.com", label: "Twitter" },
  ];

  return (
    <section
      id="about"
      className="min-h-screen flex items-center justify-center px-6 pt-20 relative overflow-hidden"
    >
      {/* Decorative floating dots */}
      <div className="absolute top-20 right-[20%] w-3 h-3 rounded-full bg-[hsl(var(--dot-cyan))] animate-float" />
      <div className="absolute top-40 right-[15%] w-2 h-2 rounded-full bg-[hsl(var(--dot-purple))] animate-float-slow" />
      <div className="absolute bottom-40 left-[10%] w-2 h-2 rounded-full bg-[hsl(var(--dot-cyan))] animate-float" />

      <div className="max-w-7xl w-full mx-auto grid md:grid-cols-2 gap-12 items-center">
        {/* Left content */}
        <div className="space-y-6 animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-bold leading-tight">
            <span className="text-gradient-cyan-purple">Full Stack</span>
            <br />
            <span className="text-gradient-cyan-purple">Developer</span>
          </h1>



          <p className="text-lg text-muted-foreground max-w-xl">
            I build scalable, high-performance applications using TypeScript, JavaScript,
            React.Js, Next.js, Node.js.
          </p>

          <p className="text-base text-muted-foreground max-w-xl">
            From crafting intuitive frontends to designing robust APIs, cloud architecture,
            and intelligent AI workflows, I deliver quality code that drives real impact.
          </p>

          <p className="text-base text-muted-foreground max-w-xl">
            Passionate about solving complex challenges in fast-paced, collaborative
            environments. Ready to build something exceptional together.
          </p>
        </div>

        {/* Right content - Image and social links */}
        <div className="flex flex-col items-center space-y-6 animate-fade-in-up">
          <div className="relative">
            <div className="w-[400px] h-[500px] rounded-2xl overflow-hidden border-2 border-primary/20">
              <img
                src={developerPortrait}
                alt="Full Stack Developer"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Social links */}
          <div className="flex gap-4">
            {socialLinks.map((social, index) => {
              const Icon = social.icon;
              return (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="w-12 h-12 rounded-lg bg-card border border-border flex items-center justify-center hover:border-primary hover:bg-primary/10 transition-all duration-300 hover:scale-110"
                >
                  <Icon className="w-5 h-5" />
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;






