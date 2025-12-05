import { Mail, MapPin, Phone } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const Contact = () => {
  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "dhageakash2004@gmail.com",
      href: "mailto:dhageakash2004@gmail.com",
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+19 8378877496",
      href: "tel:8378877496",
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Nashik, Maharashtra, India",
      href: null,
    },
  ];

  return (
    <section id="contact" className="min-h-screen py-20 px-6 bg-card/30">
      <div className="max-w-5xl mx-auto">
        <div className="flex items-center gap-3 mb-12">
          <Mail className="w-8 h-8 text-primary" />
          <h2 className="text-4xl font-bold gradient-text">Get In Touch</h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Contact Info */}
          <div className="space-y-6">
            <p className="text-muted-foreground text-lg mb-6">
              I'm always open to discussing new projects, creative ideas, or opportunities to be
              part of your visions.
            </p>

            {contactInfo.map((info, index) => {
              const Icon = info.icon;
              return (
                <Card
                  key={index}
                  className="p-4 hover:border-primary/50 transition-all duration-300 animate-fade-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                      <Icon className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">{info.label}</p>
                      {info.href ? (
                        <a
                          href={info.href}
                          className="text-foreground hover:text-primary transition-colors"
                        >
                          {info.value}
                        </a>
                      ) : (
                        <p className="text-foreground">{info.value}</p>
                      )}
                    </div>
                  </div>
                </Card>
              );
            })}
          </div>

          {/* Contact Form */}
          <Card className="p-6 animate-fade-in" style={{ animationDelay: "0.3s" }}>
            <form className="space-y-4">
              <div>
                <Input placeholder="Your Name" className="bg-background" />
              </div>
              <div>
                <Input type="email" placeholder="Your Email" className="bg-background" />
              </div>
              <div>
                <Input placeholder="Subject" className="bg-background" />
              </div>
              <div>
                <Textarea
                  placeholder="Your Message"
                  className="bg-background min-h-[150px]"
                />
              </div>
              <Button
                type="submit"
                className="w-full bg-primary text-primary-foreground hover:bg-primary/90"
              >
                Send Message
              </Button>
            </form>
          </Card>
        </div>
      </div>

      {/* Footer */}
      <div className="mt-20 text-center text-muted-foreground text-sm">
        <p>© 2024 Your Name. All rights reserved.</p>
      </div>
    </section>
  );
};

export default Contact;
