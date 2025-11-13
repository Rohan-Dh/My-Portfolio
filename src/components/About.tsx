import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Download } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 gradient-text">About Me</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="animate-fade-in">
            <Card className="p-8 bg-card border-primary/20 hover:border-primary transition-all duration-300 glow-cyan">
              <div className="space-y-4">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-2 h-2 bg-primary rounded-full animate-pulse"></div>
                  <h3 className="text-2xl font-semibold text-primary">Developer Profile</h3>
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  I'm a passionate full-stack developer with expertise in building robust, scalable applications. 
                  My journey in software development has equipped me with strong skills in both frontend and backend technologies.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  I specialize in creating efficient backend systems using Django and REST APIs, designing 
                  optimized database architectures with SQL, and crafting responsive user interfaces with React. 
                  My experience extends to complex networking configurations and server management.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  I love solving complex problems, implementing innovative ideas, and turning requirements into 
                  elegant, maintainable code. Each project is an opportunity to learn and push the boundaries 
                  of what's possible.
                </p>
              </div>
            </Card>
          </div>

          <div className="animate-fade-in space-y-6" style={{ animationDelay: '0.2s' }}>
            <Card className="p-6 bg-card border-secondary/20 hover:border-secondary transition-all duration-300 glow-purple">
              <h4 className="text-xl font-semibold mb-4 text-secondary">What I Do</h4>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-start gap-3">
                  <span className="text-primary mt-1">▹</span>
                  <span>Design and develop full-stack web applications</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary mt-1">▹</span>
                  <span>Build RESTful APIs with authentication and authorization</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary mt-1">▹</span>
                  <span>Create efficient database schemas and optimize queries</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary mt-1">▹</span>
                  <span>Configure and manage web servers and networking</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary mt-1">▹</span>
                  <span>Implement responsive UI/UX designs</span>
                </li>
              </ul>
            </Card>

            <Button 
              size="lg" 
              className="w-full bg-gradient-to-r from-primary to-secondary hover:opacity-90 text-white font-semibold transition-all duration-300 glow-cyan"
            >
              <Download className="mr-2 h-5 w-5" />
              Download Resume
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
