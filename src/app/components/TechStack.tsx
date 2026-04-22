import { Database, Server, Cloud, Code2, Box, Wrench } from 'lucide-react';
import { motion } from 'motion/react';

const techCategories = [
  {
    title: 'Backend',
    icon: Server,
    technologies: ['Spring Boot', 'Django', 'Node.js', 'JPA/Hibernate']
  },
  {
    title: 'Frontend',
    icon: Code2,
    technologies: ['React', 'Angular', 'TypeScript', 'Material-UI']
  },
  {
    title: 'DevOps & Cloud',
    icon: Cloud,
    technologies: ['AWS (EC2, RDS, S3, VPC)', 'Docker', 'CI/CD', 'Nginx', 'Gunicorn']
  },
  {
    title: 'Databases',
    icon: Database,
    technologies: ['PostgreSQL', 'MongoDB', 'MySQL', 'Redis']
  },
  {
    title: 'Tools & Platforms',
    icon: Wrench,
    technologies: ['Git', 'Postman', 'Swagger', 'Ubuntu Server', 'Amazon Linux']
  },
  {
    title: 'Testing & Methods',
    icon: Box,
    technologies: ['JUnit', 'Unit Testing', 'Integration Testing', 'Scrum']
  }
];

export function TechStack() {
  return (
    <section className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Tech Stack</h2>
          <p className="text-muted-foreground max-w-2xl">
            Technologies and tools I use to build scalable, production-ready systems
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {techCategories.map((category, idx) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="border border-border bg-card p-6 rounded-lg hover:border-accent/40 transition-colors"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-accent/10 rounded-lg">
                  <category.icon className="w-5 h-5 text-accent" />
                </div>
                <h3 className="font-semibold">{category.title}</h3>
              </div>
              <ul className="space-y-2">
                {category.technologies.map((tech) => (
                  <li key={tech} className="text-sm text-muted-foreground flex items-start gap-2">
                    <span className="text-accent mt-1">▹</span>
                    <span>{tech}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
