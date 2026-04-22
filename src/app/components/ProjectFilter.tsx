import { Badge } from './ui/badge';
import type { ProjectStatus } from '../data/projects';

interface ProjectFilterProps {
  activeFilter: 'All' | 'Backend' | 'Full-Stack' | 'DevOps' | ProjectStatus;
  onFilterChange: (filter: 'All' | 'Backend' | 'Full-Stack' | 'DevOps' | ProjectStatus) => void;
}

const filters = [
  'All',
  'Backend',
  'Full-Stack',
  'DevOps',
  'In Progress',
  'Completed',
  'Production'
] as const;

export function ProjectFilter({ activeFilter, onFilterChange }: ProjectFilterProps) {
  return (
    <div className="flex flex-wrap gap-2 mb-8">
      {filters.map((filter) => (
        <Badge
          key={filter}
          variant={activeFilter === filter ? 'default' : 'outline'}
          className={`cursor-pointer transition-all ${
            activeFilter === filter
              ? 'bg-accent text-accent-foreground hover:bg-accent/90'
              : 'hover:bg-accent/10 hover:text-accent hover:border-accent/40'
          }`}
          onClick={() => onFilterChange(filter)}
        >
          {filter}
        </Badge>
      ))}
    </div>
  );
}
