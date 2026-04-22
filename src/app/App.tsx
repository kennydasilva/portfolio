import { useState, useRef, useEffect } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { TechStack } from './components/TechStack';
import { ProjectCard } from './components/ProjectCard';
import { ProjectDetails } from './components/ProjectDetails';
import { ProjectFilter } from './components/ProjectFilter';
import { Experience } from './components/Experience';
import { Contact } from './components/Contact';
import { projects, type Project, type ProjectStatus } from './data/projects';
import { motion } from 'motion/react';

export default function App() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [activeFilter, setActiveFilter] = useState<'All' | 'Backend' | 'Full-Stack' | 'DevOps' | ProjectStatus>('All');
  const [isDark, setIsDark] = useState(true);

  const projectsRef = useRef<HTMLElement>(null);
  const contactRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDark]);

  const toggleTheme = () => {
    setIsDark(!isDark);
  };

  const scrollToProjects = () => {
    projectsRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToContact = () => {
    contactRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const filteredProjects = projects.filter((project) => {
    if (activeFilter === 'All') return true;
    if (activeFilter === 'In Progress' || activeFilter === 'Completed' || activeFilter === 'Production') {
      return project.status === activeFilter;
    }
    if (activeFilter === 'Backend') {
      return project.techStack.backend && project.techStack.backend.length > 0;
    }
    if (activeFilter === 'Full-Stack') {
      return (
        project.techStack.backend &&
        project.techStack.frontend &&
        project.techStack.backend.length > 0 &&
        project.techStack.frontend.length > 0
      );
    }
    if (activeFilter === 'DevOps') {
      return project.techStack.devops && project.techStack.devops.length > 0;
    }
    return true;
  });

  const handleNavigate = (section: 'projects' | 'contact') => {
    if (section === 'projects') {
      scrollToProjects();
    } else {
      scrollToContact();
    }
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Header */}
      <Header isDark={isDark} onToggleTheme={toggleTheme} onNavigate={handleNavigate} />

      {/* Hero Section */}
      <Hero onViewProjects={scrollToProjects} onContact={scrollToContact} />

      {/* About Section */}
      <About />

      {/* Tech Stack Section */}
      <TechStack />

      {/* Projects Section */}
      <section ref={projectsRef} className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured Projects</h2>
            <p className="text-muted-foreground max-w-2xl mb-8">
              Real-world systems showcasing backend engineering, cloud deployment, and scalable architecture
            </p>

            <ProjectFilter activeFilter={activeFilter} onFilterChange={setActiveFilter} />
          </motion.div>

          {filteredProjects.length === 0 ? (
            <div className="text-center py-12 text-muted-foreground">
              No projects found for the selected filter.
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredProjects.map((project) => (
                <ProjectCard
                  key={project.id}
                  project={project}
                  onViewDetails={() => setSelectedProject(project)}
                />
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Experience Section */}
      <Experience />

      {/* Contact Section */}
      <div ref={contactRef}>
        <Contact />
      </div>

      {/* Footer */}
      <footer className="py-8 px-6 border-t border-border">
        <div className="max-w-6xl mx-auto text-center text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} Kenny Mangue. Built with React, TypeScript, and Tailwind CSS.</p>
        </div>
      </footer>

      {/* Project Details Dialog */}
      <ProjectDetails
        project={selectedProject}
        open={!!selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </div>
  );
}