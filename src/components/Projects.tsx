import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ExternalLink, Github } from 'lucide-react';

const projects = [
  {
    title: "College Management System",
    description: "Comprehensive management system with authentication, student records, course management, and attendance tracking. Built with transaction-based architecture for data integrity.",
    tech: ["Django", "REST API", "PostgreSQL", "Authentication", "React"],
    github: "#",
    demo: "#",
    color: "primary"
  },
  {
    title: "Job Bidding Platform",
    description: "Full-stack bidding platform connecting clients with freelancers. Features include real-time bidding, user profiles, payment integration, and project management.",
    tech: ["Django", "React", "WebSockets", "REST API", "MySQL"],
    github: "#",
    demo: "#",
    color: "secondary"
  },
  {
    title: "Inventory Management System",
    description: "Robust inventory tracking system with transaction management, stock alerts, reporting, and multi-user access control. Optimized for high-volume operations.",
    tech: ["Django", "PostgreSQL", "REST API", "Redis", "React"],
    github: "#",
    demo: "#",
    color: "primary"
  },
  {
    title: "DNS & Web Server Configuration",
    description: "Enterprise-level DNS configuration and web server setup with load balancing, SSL/TLS implementation, and automated deployment pipelines.",
    tech: ["Linux", "BIND", "Nginx", "Apache", "SSL/TLS"],
    github: "#",
    demo: "#",
    color: "secondary"
  },
  {
    title: "Q&A Module",
    description: "Interactive question and answer platform with voting system, user reputation, tagging, and search functionality. Features real-time updates using Ajax.",
    tech: ["Django", "Ajax", "PostgreSQL", "CSS3", "jQuery"],
    github: "#",
    demo: "#",
    color: "primary"
  },
  {
    title: "API Gateway Service",
    description: "Microservices API gateway with rate limiting, authentication, request routing, and comprehensive logging for distributed systems.",
    tech: ["Django", "REST Framework", "Redis", "Docker", "Nginx"],
    github: "#",
    demo: "#",
    color: "secondary"
  }
];

const Projects = () => {
  return (
    <section id="projects" className="py-20 relative bg-gradient-to-b from-background to-card">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 gradient-text">Featured Projects</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto mb-4"></div>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            A showcase of my recent work in full-stack development, demonstrating expertise in building scalable applications
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card 
              key={index}
              className={`group bg-card transition-all duration-300 overflow-hidden animate-fade-in ${
                project.color === 'primary' 
                  ? 'border-primary/20 hover:border-primary hover:glow-cyan' 
                  : 'border-secondary/20 hover:border-secondary hover:glow-purple'
              }`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="p-6 space-y-4">
                <div className="flex items-start justify-between">
                  <h3 className={`text-xl font-semibold transition-all duration-300 ${
                    project.color === 'primary' 
                      ? 'text-primary group-hover:glow-text-cyan' 
                      : 'text-secondary group-hover:glow-text-purple'
                  }`}>
                    {project.title}
                  </h3>
                  <div className={`w-3 h-3 rounded-full animate-pulse ${
                    project.color === 'primary' ? 'bg-primary' : 'bg-secondary'
                  }`}></div>
                </div>

                <p className="text-muted-foreground text-sm leading-relaxed min-h-[80px]">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, techIndex) => (
                    <span 
                      key={techIndex}
                      className="px-3 py-1 text-xs bg-muted rounded-full border border-border hover:border-primary transition-colors duration-200"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex gap-3 pt-4 border-t border-border">
                  <Button 
                    size="sm"
                    variant="outline"
                    className="flex-1 border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                    asChild
                  >
                    <a href={project.github} target="_blank" rel="noopener noreferrer">
                      <Github className="w-4 h-4 mr-2" />
                      Code
                    </a>
                  </Button>
                  <Button 
                    size="sm"
                    className={`flex-1 transition-all duration-300 ${
                      project.color === 'primary' 
                        ? 'bg-primary hover:bg-primary/90' 
                        : 'bg-secondary hover:bg-secondary/90'
                    }`}
                    asChild
                  >
                    <a href={project.demo} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Demo
                    </a>
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
