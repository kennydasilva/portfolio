import { ArrowRight, Github, Linkedin, Mail } from 'lucide-react';
import { Button } from './ui/button';
import { motion } from 'motion/react';

interface HeroProps {
  onViewProjects: () => void;
  onContact: () => void;
}

export function Hero({ onViewProjects, onContact }: HeroProps) {
  return (
    <section className="min-h-screen flex items-center justify-center px-6 relative overflow-hidden pt-20">
      {/* Background code pattern */}
      <div className="absolute inset-0 opacity-[0.02] pointer-events-none">
        <pre className="text-xs leading-relaxed">
          {`class BackendEngineer {
  constructor() {
    this.focus = ['Spring Boot', 'Django', 'AWS'];
    this.expertise = ['REST APIs', 'System Architecture', 'DevOps'];
  }

  deploy() {
    return 'Scalable production systems';
  }
}`.repeat(50)}
        </pre>
      </div>

      <div className="max-w-4xl mx-auto text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight">
            Kenny Mangue
          </h1>
          <p className="text-2xl md:text-3xl text-muted-foreground mb-4">
            Full-Stack Developer || Cloud Enthusiast || Backend Specialist
          </p>
          <p className="text-xl md:text-2xl text-accent font-medium mb-8">
            Building scalable backend systems and cloud-ready applications
          </p>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-lg text-muted-foreground mb-12 max-w-2xl mx-auto"
        >
          Backend engineer specializing in Spring Boot, Django, and AWS infrastructure.
          Focused on REST API design, system architecture, and production deployments.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex flex-col sm:flex-row gap-4 justify-center mb-12"
        >
          <Button size="lg" onClick={onViewProjects} className="bg-accent text-accent-foreground hover:bg-accent/90">
            View Projects
            <ArrowRight className="ml-2 w-5 h-5" />
          </Button>
          <Button size="lg" variant="outline" onClick={onContact}>
            Contact Me
          </Button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex gap-6 justify-center"
        >
          <a
            href="https://github.com/kennymangue"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-accent transition-colors"
          >
            <Github className="w-6 h-6" />
          </a>
          <a
            href="https://linkedin.com/in/kennymangue"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-accent transition-colors"
          >
            <Linkedin className="w-6 h-6" />
          </a>
          <a
            href="mailto:kenny.mangue@example.com"
            className="text-muted-foreground hover:text-accent transition-colors"
          >
            <Mail className="w-6 h-6" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
