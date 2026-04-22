import { Database, Server, Cloud, Users, ArrowRight } from 'lucide-react';

interface ArchitectureDiagramProps {
  type?: 'three-tier' | 'microservices' | 'serverless';
}

export function ArchitectureDiagram({ type = 'three-tier' }: ArchitectureDiagramProps) {
  if (type === 'three-tier') {
    return (
      <div className="bg-muted/20 border border-border rounded-lg p-8">
        <div className="flex items-center justify-between gap-4">
          {/* Client Tier */}
          <div className="flex flex-col items-center gap-2 flex-1">
            <div className="p-4 bg-accent/10 border-2 border-accent/40 rounded-lg">
              <Users className="w-8 h-8 text-accent" />
            </div>
            <span className="text-sm font-medium">Client</span>
            <span className="text-xs text-muted-foreground text-center">Web / Mobile</span>
          </div>

          <ArrowRight className="w-6 h-6 text-muted-foreground" />

          {/* Application Tier */}
          <div className="flex flex-col items-center gap-2 flex-1">
            <div className="p-4 bg-accent/10 border-2 border-accent/40 rounded-lg">
              <Server className="w-8 h-8 text-accent" />
            </div>
            <span className="text-sm font-medium">API</span>
            <span className="text-xs text-muted-foreground text-center">Business Logic</span>
          </div>

          <ArrowRight className="w-6 h-6 text-muted-foreground" />

          {/* Data Tier */}
          <div className="flex flex-col items-center gap-2 flex-1">
            <div className="p-4 bg-accent/10 border-2 border-accent/40 rounded-lg">
              <Database className="w-8 h-8 text-accent" />
            </div>
            <span className="text-sm font-medium">Database</span>
            <span className="text-xs text-muted-foreground text-center">Data Storage</span>
          </div>
        </div>
      </div>
    );
  }

  // AWS deployment example
  return (
    <div className="bg-muted/20 border border-border rounded-lg p-8">
      <div className="grid grid-cols-3 gap-4">
        <div className="col-span-3 flex items-center gap-2 mb-4">
          <Cloud className="w-5 h-5 text-accent" />
          <span className="text-sm font-medium">AWS Cloud</span>
        </div>

        <div className="flex flex-col items-center gap-2">
          <div className="p-3 bg-accent/10 border border-accent/40 rounded-lg w-full text-center">
            <Server className="w-6 h-6 text-accent mx-auto mb-1" />
            <span className="text-xs font-medium">EC2</span>
          </div>
        </div>

        <div className="flex flex-col items-center gap-2">
          <div className="p-3 bg-accent/10 border border-accent/40 rounded-lg w-full text-center">
            <Database className="w-6 h-6 text-accent mx-auto mb-1" />
            <span className="text-xs font-medium">RDS</span>
          </div>
        </div>

        <div className="flex flex-col items-center gap-2">
          <div className="p-3 bg-accent/10 border border-accent/40 rounded-lg w-full text-center">
            <Cloud className="w-6 h-6 text-accent mx-auto mb-1" />
            <span className="text-xs font-medium">S3</span>
          </div>
        </div>
      </div>
    </div>
  );
}
