import { motion } from 'motion/react';
import { GraduationCap, Code, Rocket } from 'lucide-react';

const timeline = [
  {
    icon: GraduationCap,
    title: 'Software Development Degree',
    organization: 'University',
    period: '2020 - 2024',
    description: 'Foundation in computer science, algorithms, data structures, and software engineering principles',
    color: 'text-blue-500'
  },
  {
    icon: Code,
    title: 'ALX Backend Pro Developer Program',
    organization: 'ALX Africa',
    period: '2024 - Present',
    description: 'Advanced backend engineering training focusing on scalable architectures, cloud deployment, and production systems',
    color: 'text-accent'
  },
  {
    icon: Rocket,
    title: 'Full-Stack Development',
    organization: 'Independent Projects',
    period: '2023 - Present',
    description: 'Building production-ready systems with Spring Boot, Django, React, and AWS infrastructure',
    color: 'text-purple-500'
  }
];

export function Experience() {
  return (
    <section className="py-20 px-6">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Experience & Journey</h2>
          <p className="text-muted-foreground">
            My path in software engineering and continuous learning
          </p>
        </motion.div>

        <div className="space-y-8">
          {timeline.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="flex gap-6"
            >
              <div className="flex flex-col items-center">
                <div className={`p-3 bg-card border-2 border-border rounded-full ${item.color}`}>
                  <item.icon className="w-6 h-6" />
                </div>
                {idx < timeline.length - 1 && (
                  <div className="w-0.5 h-full bg-border mt-2" />
                )}
              </div>

              <div className="flex-1 pb-8">
                <div className="bg-card border border-border rounded-lg p-6 hover:border-accent/40 transition-colors">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                    <h3 className="text-xl font-semibold">{item.title}</h3>
                    <span className="text-sm text-muted-foreground">{item.period}</span>
                  </div>
                  <p className="text-accent font-medium mb-2">{item.organization}</p>
                  <p className="text-muted-foreground">{item.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
