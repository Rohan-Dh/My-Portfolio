import { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Github, Linkedin, Mail, MapPin, Send } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <section id="contact" className="py-20 relative bg-gradient-to-b from-card to-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 gradient-text">Get In Touch</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto mb-4"></div>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Have a project in mind or just want to chat? Feel free to reach out!
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Form */}
          <Card className="p-8 bg-card border-primary/20 hover:border-primary transition-all duration-300 glow-cyan animate-fade-in">
            <form method='POST' action="https://formspree.io/f/xgvrvndy" className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2 text-foreground">
                  Name
                </label>
                <Input
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="bg-muted border-border focus:border-primary transition-colors"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2 text-foreground">
                  Email
                </label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="bg-muted border-border focus:border-primary transition-colors"
                  placeholder="your.email@example.com"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2 text-foreground">
                  Message
                </label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="bg-muted border-border focus:border-primary transition-colors resize-none"
                  placeholder="Tell me about your project..."
                />
              </div>

              <Button 
                type="submit"
                size="lg"
                className="w-full bg-gradient-to-r from-primary to-secondary hover:opacity-90 text-white font-semibold transition-all duration-300 glow-cyan"
              >
                <Send className="w-5 h-5 mr-2" />
                Send Message
              </Button>
            </form>
          </Card>

          {/* Contact Information */}
          <div className="space-y-8 animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <Card className="p-6 bg-card border-secondary/20 hover:border-secondary transition-all duration-300 glow-purple">
              <h3 className="text-2xl font-semibold mb-6 text-secondary">Let's Connect</h3>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                I'm always open to discussing new projects, creative ideas, or opportunities to be part of your visions.
              </p>

              <div className="space-y-4">
                <a 
                  href="mailto:rohandhungana2002@gmail.com"
                  className="flex items-center gap-4 p-4 bg-muted rounded-lg hover:bg-primary/10 hover:border-primary border border-transparent transition-all duration-300 group"
                >
                  <Mail className="w-6 h-6 text-primary group-hover:glow-text-cyan" />
                  <div>
                    <p className="text-sm text-muted-foreground">Email</p>
                    <p className="font-medium">rohandhungana2002@gmail.com</p>
                  </div>
                </a>

                <div className="flex items-center gap-4 p-4 bg-muted rounded-lg border border-transparent">
                  <MapPin className="w-6 h-6 text-secondary" />
                  <div>
                    <p className="text-sm text-muted-foreground">Location</p>
                    <p className="font-medium">Available for Remote Work</p>
                  </div>
                </div>
              </div>
            </Card>

            <Card className="p-6 bg-card border-primary/20 hover:border-primary transition-all duration-300 glow-cyan">
              <h3 className="text-xl font-semibold mb-4 text-primary">Social Profiles</h3>
              <div className="grid grid-cols-3 gap-4">
                <a 
                  href="https://github.com/Rohan-Dh"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-col items-center gap-2 p-4 bg-muted rounded-lg hover:bg-primary/10 hover:border-primary border border-transparent transition-all duration-300 group"
                >
                  <Github className="w-8 h-8 text-primary group-hover:scale-110 transition-transform" />
                  <span className="text-xs font-medium">GitHub</span>
                </a>

                <a 
                  href="https://linkedin.com/in/rohan-dhungana"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-col items-center gap-2 p-4 bg-muted rounded-lg hover:bg-primary/10 hover:border-primary border border-transparent transition-all duration-300 group"
                >
                  <Linkedin className="w-8 h-8 text-primary group-hover:scale-110 transition-transform" />
                  <span className="text-xs font-medium">LinkedIn</span>
                </a>

                <a 
                  href="mailto:rohandhungana2002@gmail.com"
                  className="flex flex-col items-center gap-2 p-4 bg-muted rounded-lg hover:bg-primary/10 hover:border-primary border border-transparent transition-all duration-300 group"
                >
                  <Mail className="w-8 h-8 text-primary group-hover:scale-110 transition-transform" />
                  <span className="text-xs font-medium">Email</span>
                </a>
              </div>
            </Card>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="mt-20 pt-8 border-t border-border text-center">
        <p className="text-muted-foreground">
          © 2024 Rohan Dhungana. Built with React & Tailwind CSS
        </p>
      </div>
    </section>
  );
};

export default Contact;
