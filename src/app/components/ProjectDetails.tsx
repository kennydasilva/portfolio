import { X, Github, ExternalLink, Check, AlertCircle } from 'lucide-react';
import { Badge } from './ui/badge';
import { Button } from './ui/button';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from './ui/dialog';
import { ScrollArea } from './ui/scroll-area';
import { Separator } from './ui/separator';
import type { Project } from '../data/projects';

interface ProjectDetailsProps {
  project: Project | null;
  open: boolean;
  onClose: () => void;
}

export function ProjectDetails({ project, open, onClose }: ProjectDetailsProps) {
  if (!project) return null;

  const allBackend = project.techStack.backend || [];
  const allFrontend = project.techStack.frontend || [];
  const allDevOps = project.techStack.devops || [];
  const allDatabase = project.techStack.database || [];

  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl max-h-[90vh] p-0">
        <DialogHeader className="p-6 pb-0">
          <div className="flex items-start justify-between gap-4">
            <div>
              <DialogTitle className="text-2xl font-bold mb-2">{project.title}</DialogTitle>
              <p className="text-muted-foreground">{project.shortDescription}</p>
            </div>
            <Button variant="ghost" size="icon" onClick={onClose}>
              <X className="w-5 h-5" />
            </Button>
          </div>
        </DialogHeader>

        <ScrollArea className="max-h-[calc(90vh-100px)] px-6 pb-6">
          <div className="space-y-8 pt-6">
            {/* Links */}
            {(project.githubUrl || project.liveUrl) && (
              <div className="flex gap-3">
                {project.githubUrl && (
                  <Button variant="outline" size="sm" asChild>
                    <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                      <Github className="w-4 h-4 mr-2" />
                      GitHub
                    </a>
                  </Button>
                )}
                {project.liveUrl && (
                  <Button variant="outline" size="sm" asChild>
                    <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Live Demo
                    </a>
                  </Button>
                )}
              </div>
            )}

            {/* Overview */}
            <section>
              <h3 className="text-lg font-semibold mb-3">Overview</h3>
              <div className="space-y-3">
                <div>
                  <h4 className="text-sm font-medium text-muted-foreground mb-1">Description</h4>
                  <p className="text-foreground">{project.fullDescription}</p>
                </div>
                <div>
                  <h4 className="text-sm font-medium text-muted-foreground mb-1">Problem</h4>
                  <p className="text-foreground">{project.problem}</p>
                </div>
              </div>
            </section>

            <Separator />

            {/* Architecture */}
            <section>
              <h3 className="text-lg font-semibold mb-3">Architecture</h3>
              <div className="space-y-3">
                <div className="bg-muted/30 p-4 rounded-lg border border-border">
                  <h4 className="text-sm font-medium mb-2">Backend Structure</h4>
                  <p className="text-sm text-muted-foreground font-mono">{project.architecture.structure}</p>
                </div>
                <div className="bg-muted/30 p-4 rounded-lg border border-border">
                  <h4 className="text-sm font-medium mb-2">API Design</h4>
                  <p className="text-sm text-muted-foreground font-mono">{project.architecture.apiDesign}</p>
                </div>
                <div className="bg-muted/30 p-4 rounded-lg border border-border">
                  <h4 className="text-sm font-medium mb-2">Database Design</h4>
                  <p className="text-sm text-muted-foreground font-mono">{project.architecture.databaseDesign}</p>
                </div>
              </div>
            </section>

            <Separator />

            {/* Features */}
            <section>
              <h3 className="text-lg font-semibold mb-3">Key Features</h3>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                {project.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-accent shrink-0 mt-0.5" />
                    <span className="text-sm">{feature}</span>
                  </li>
                ))}
              </ul>
            </section>

            <Separator />

            {/* Tech Stack */}
            <section>
              <h3 className="text-lg font-semibold mb-3">Tech Stack</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {allBackend.length > 0 && (
                  <div>
                    <h4 className="text-sm font-medium mb-2">Backend</h4>
                    <div className="flex flex-wrap gap-2">
                      {allBackend.map((tech) => (
                        <Badge key={tech} variant="secondary">{tech}</Badge>
                      ))}
                    </div>
                  </div>
                )}
                {allFrontend.length > 0 && (
                  <div>
                    <h4 className="text-sm font-medium mb-2">Frontend</h4>
                    <div className="flex flex-wrap gap-2">
                      {allFrontend.map((tech) => (
                        <Badge key={tech} variant="secondary">{tech}</Badge>
                      ))}
                    </div>
                  </div>
                )}
                {allDevOps.length > 0 && (
                  <div>
                    <h4 className="text-sm font-medium mb-2">DevOps & Cloud</h4>
                    <div className="flex flex-wrap gap-2">
                      {allDevOps.map((tech) => (
                        <Badge key={tech} variant="secondary">{tech}</Badge>
                      ))}
                    </div>
                  </div>
                )}
                {allDatabase.length > 0 && (
                  <div>
                    <h4 className="text-sm font-medium mb-2">Database</h4>
                    <div className="flex flex-wrap gap-2">
                      {allDatabase.map((tech) => (
                        <Badge key={tech} variant="secondary">{tech}</Badge>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </section>

            {/* Deployment */}
            {project.deployment && (
              <>
                <Separator />
                <section>
                  <h3 className="text-lg font-semibold mb-3">DevOps & Deployment</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    <div className="bg-muted/30 p-3 rounded-lg border border-border">
                      <h4 className="text-sm font-medium mb-1">Infrastructure</h4>
                      <p className="text-sm text-muted-foreground">{project.deployment.infrastructure}</p>
                    </div>
                    {project.deployment.containerization && (
                      <div className="bg-muted/30 p-3 rounded-lg border border-border">
                        <h4 className="text-sm font-medium mb-1">Containerization</h4>
                        <p className="text-sm text-muted-foreground">{project.deployment.containerization}</p>
                      </div>
                    )}
                    {project.deployment.cicd && (
                      <div className="bg-muted/30 p-3 rounded-lg border border-border">
                        <h4 className="text-sm font-medium mb-1">CI/CD</h4>
                        <p className="text-sm text-muted-foreground">{project.deployment.cicd}</p>
                      </div>
                    )}
                    {project.deployment.server && (
                      <div className="bg-muted/30 p-3 rounded-lg border border-border">
                        <h4 className="text-sm font-medium mb-1">Server</h4>
                        <p className="text-sm text-muted-foreground">{project.deployment.server}</p>
                      </div>
                    )}
                  </div>
                </section>
              </>
            )}

            {/* Challenges & Solutions */}
            <Separator />
            <section>
              <h3 className="text-lg font-semibold mb-3">Challenges & Solutions</h3>
              <div className="space-y-4">
                {project.challenges.map((item, idx) => (
                  <div key={idx} className="border border-border rounded-lg p-4 space-y-2">
                    <div className="flex items-start gap-2">
                      <AlertCircle className="w-4 h-4 text-yellow-500 shrink-0 mt-0.5" />
                      <div>
                        <h4 className="text-sm font-medium">Challenge</h4>
                        <p className="text-sm text-muted-foreground">{item.challenge}</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-2 ml-6">
                      <div>
                        <h4 className="text-sm font-medium text-accent">Solution</h4>
                        <p className="text-sm text-muted-foreground">{item.solution}</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-2 ml-6">
                      <div>
                        <h4 className="text-sm font-medium text-green-500">Result</h4>
                        <p className="text-sm text-muted-foreground">{item.result}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Project Evolution */}
            {project.evolution && project.evolution.length > 0 && (
              <>
                <Separator />
                <section>
                  <h3 className="text-lg font-semibold mb-3">Project Evolution</h3>
                  <div className="space-y-3">
                    {project.evolution.map((version, idx) => (
                      <div key={idx} className="flex gap-4">
                        <div className="flex flex-col items-center">
                          <div className="w-8 h-8 rounded-full bg-accent/20 border-2 border-accent flex items-center justify-center">
                            <span className="text-xs font-mono text-accent">{idx + 1}</span>
                          </div>
                          {idx < project.evolution!.length - 1 && (
                            <div className="w-0.5 h-full bg-border my-1" />
                          )}
                        </div>
                        <div className="flex-1 pb-4">
                          <h4 className="text-sm font-semibold font-mono">{version.version}</h4>
                          <p className="text-sm text-muted-foreground">{version.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </section>
              </>
            )}

            {/* Future Improvements */}
            <Separator />
            <section>
              <h3 className="text-lg font-semibold mb-3">Future Improvements</h3>
              <ul className="space-y-2">
                {project.futureImprovements.map((improvement, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <span className="text-accent">🚀</span>
                    <span className="text-sm">{improvement}</span>
                  </li>
                ))}
              </ul>
            </section>
          </div>
        </ScrollArea>
      </DialogContent>
    </Dialog>
  );
}
