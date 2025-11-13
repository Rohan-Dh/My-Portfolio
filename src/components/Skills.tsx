import { Card } from '@/components/ui/card';
import { Code2, Database, Server, Network } from 'lucide-react';

const skillCategories = [
  {
    title: "Frontend Development",
    icon: Code2,
    skills: ["React", "TypeScript", "JavaScript", "HTML5", "CSS3", "Tailwind CSS", "Responsive Design"],
    color: "primary"
  },
  {
    title: "Backend Development",
    icon: Server,
    skills: ["Django", "Python", "REST APIs", "Django REST Framework", "Authentication", "WebSockets"],
    color: "secondary"
  },
  {
    title: "Database Management",
    icon: Database,
    skills: ["PostgreSQL", "MySQL", "SQL", "Database Design", "Query Optimization", "Redis"],
    color: "primary"
  },
  {
    title: "Networking & DevOps",
    icon: Network,
    skills: ["DNS Configuration", "Web Servers", "Linux", "Nginx", "Apache", "SSL/TLS", "Docker"],
    color: "secondary"
  }
];

const Skills = () => {
  return (
    <section id="skills" className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 gradient-text">Skills & Expertise</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto mb-4"></div>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            A comprehensive toolkit for building robust, scalable applications from frontend to backend
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {skillCategories.map((category, index) => {
            const Icon = category.icon;
            const isPrimary = category.color === 'primary';
            return (
              <Card 
                key={index}
                className={`group p-8 bg-card transition-all duration-300 animate-fade-in ${
                  isPrimary 
                    ? 'border-primary/20 hover:border-primary hover:glow-cyan' 
                    : 'border-secondary/20 hover:border-secondary hover:glow-purple'
                }`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className={`p-3 rounded-lg border ${
                    isPrimary 
                      ? 'bg-primary/10 border-primary/30' 
                      : 'bg-secondary/10 border-secondary/30'
                  }`}>
                    <Icon className={`w-8 h-8 ${isPrimary ? 'text-primary' : 'text-secondary'}`} />
                  </div>
                  <h3 className={`text-2xl font-semibold ${isPrimary ? 'text-primary' : 'text-secondary'}`}>
                    {category.title}
                  </h3>
                </div>

                <div className="flex flex-wrap gap-3">
                  {category.skills.map((skill, skillIndex) => (
                    <div 
                      key={skillIndex}
                      className={`px-4 py-2 bg-muted rounded-lg border border-border transition-all duration-300 cursor-default ${
                        isPrimary 
                          ? 'hover:border-primary hover:bg-primary/10' 
                          : 'hover:border-secondary hover:bg-secondary/10'
                      }`}
                    >
                      <span className="text-sm font-medium">{skill}</span>
                    </div>
                  ))}
                </div>
              </Card>
            );
          })}
        </div>

        {/* Additional Tech Stack Icons */}
        <div className="mt-16 text-center">
          <h3 className="text-2xl font-semibold mb-8 text-foreground">Also Experienced With</h3>
          <div className="flex flex-wrap justify-center gap-6">
            {["Git", "GitHub", "API Integration", "AJAX", "jQuery", "Bootstrap", "Microservices", "Load Balancing"].map((tech, index) => (
              <div 
                key={index}
                className="px-6 py-3 bg-card border border-primary/30 rounded-full hover:border-primary hover:glow-cyan transition-all duration-300 animate-fade-in"
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                <span className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
                  {tech}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
