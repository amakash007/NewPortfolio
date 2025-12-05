  // import { useState, useEffect } from "react";
  // import { Button } from "@/components/ui/button";

  // const Navigation = () => {
  //   const [activeSection, setActiveSection] = useState("about");
  //   const [scrolled, setScrolled] = useState(false);

  //   const navItems = [
  //     { name: "About", id: "about" },
  //     { name: "Experience", id: "experience" },
  //     { name: "Projects", id: "projects" },
  //     { name: "Skills", id: "skills" },
  //     { name: "Education", id: "education" },
  //     { name: "Certifications", id: "certifications" },
  //     { name: "Contact", id: "contact" },
  //   ];

  //   useEffect(() => {
  //     const handleScroll = () => {
  //       setScrolled(window.scrollY > 50);

  //       // Update active section based on scroll position
  //       const sections = navItems.map((item) => document.getElementById(item.id));
  //       const scrollPosition = window.scrollY + 100;

  //       sections.forEach((section, index) => {
  //         if (section) {
  //           const top = section.offsetTop;
  //           const height = section.offsetHeight;
  //           if (scrollPosition >= top && scrollPosition < top + height) {
  //             setActiveSection(navItems[index].id);
  //           }
  //         }
  //       });
  //     };

  //     window.addEventListener("scroll", handleScroll);
  //     return () => window.removeEventListener("scroll", handleScroll);
  //   }, []);

  //   const scrollToSection = (id: string) => {
  //     const element = document.getElementById(id);
  //     if (element) {
  //       element.scrollIntoView({ behavior: "smooth" });
  //     }
  //   };

  //   return (
  //     <nav
  //       className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
  //         scrolled ? "bg-background/90 backdrop-blur-md border-b border-border" : "bg-transparent"
  //       }`}
  //     >
  //       <div className="max-w-7xl mx-auto px-6 py-4">
  //         <div className="flex items-center justify-between">
  //           <h1 className="text-xl font-bold gradient-text">Your Name</h1>

  //           <div className="hidden md:flex items-center gap-6">
  //             {navItems.map((item) => (
  //               <button
  //                 key={item.id}
  //                 onClick={() => scrollToSection(item.id)}
  //                 className={`text-sm transition-colors duration-300 hover:text-primary ${
  //                   activeSection === item.id ? "text-primary" : "text-muted-foreground"
  //                 }`}
  //               >
  //                 {item.name}
  //               </button>
  //             ))}
  //             {/* <Button
  //               variant="outline"
  //               className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
  //               onClick={() => window.open("/resume.pdf", "_blank")}
  //             >
  //               Resume
  //             </Button> */}
  //             {/* <Button
  //                 variant="outline"
  //                 className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
  //                 onClick={() => window.open("/Akash_Dhage_Resume.pdf", "_blank")}
  //                   >
  //                 Resume
  //               </Button> */}

  // <Button
  //   variant="outline"
  //   className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
  //   onClick={() => window.open("/Akash_Dhage_Resume.pdf", "_blank")}
  // >
  //   Resume
  // </Button>

  //           </div>
  //         </div>
  //       </div>
  //     </nav>
  //   );
  // };

  // export default Navigation;


  import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";

const Navigation = () => {
  const [activeSection, setActiveSection] = useState("about");
  const [scrolled, setScrolled] = useState(false);

  const navItems = [
    { name: "About", id: "about" },
    { name: "Experience", id: "experience" },
    { name: "Projects", id: "projects" },
    { name: "Skills", id: "skills" },
    { name: "Education", id: "education" },
    { name: "Certifications", id: "certifications" },
    { name: "Contact", id: "contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      const sections = navItems.map((item) => document.getElementById(item.id));
      const scrollPosition = window.scrollY + 100;

      sections.forEach((section, index) => {
        if (section) {
          const top = section.offsetTop;
          const height = section.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(navItems[index].id);
          }
        }
      });
    };
///
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-background/90 backdrop-blur-md border-b border-border"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Click name to go to top */}
          <h1
            className="text-xl font-bold gradient-text cursor-pointer"
            onClick={scrollToTop}
          >
            Akash Dhage
          </h1>
            
          <div className="hidden md:flex items-center gap-6">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`text-sm transition-colors duration-300 hover:text-primary ${
                  activeSection === item.id
                    ? "text-primary"
                    : "text-muted-foreground"
                }`}
              >
                {item.name}
              </button>
            ))}

            <Button
              variant="outline"
              className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
              onClick={() => window.open("/Akash_Dhage_Resume.pdf", "_blank")}
            >
              Resume
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;

