import { ArrowRight } from 'lucide-react';
import { Badge } from './ui/badge';
import { Button } from './ui/button';
import { motion } from 'motion/react';
import type { Project } from '../data/projects';

interface ProjectCardProps {
  project: Project;
  onViewDetails: () => void;
}

const statusColors = {
  'In Progress': 'bg-yellow-500/10 text-yellow-500 border-yellow-500/20',
  'Completed': 'bg-blue-500/10 text-blue-500 border-blue-500/20',
  'Production': 'bg-accent/10 text-accent border-accent/20'
};

export function ProjectCard({ project, onViewDetails }: ProjectCardProps) {
  const allTech = [
    ...(project.techStack.backend || []),
    ...(project.techStack.frontend || []),
    ...(project.techStack.devops || []),
    ...(project.techStack.database || [])
  ].slice(0, 4);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-100px' }}
      transition={{ duration: 0.5 }}
      className="group relative border border-border bg-card hover:border-accent/40 transition-all duration-300 p-6 rounded-lg"
    >
      <div className="flex flex-col h-full">
        <div className="flex items-start justify-between gap-4 mb-4">
          <h3 className="text-xl font-semibold text-foreground group-hover:text-accent transition-colors">
            {project.title}
          </h3>
          <Badge className={`${statusColors[project.status]} shrink-0`}>
            {project.status}
          </Badge>
        </div>

        <p className="text-muted-foreground mb-4 line-clamp-2">
          {project.shortDescription}
        </p>

        <div className="flex flex-wrap gap-2 mb-6">
          {allTech.map((tech) => (
            <Badge key={tech} variant="outline" className="text-xs">
              {tech}
            </Badge>
          ))}
        </div>

        <Button
          onClick={onViewDetails}
          variant="ghost"
          className="mt-auto justify-start gap-2 text-accent hover:text-accent hover:bg-accent/10 px-0"
        >
          View Details
          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
        </Button>
      </div>
    </motion.div>
  );
}
