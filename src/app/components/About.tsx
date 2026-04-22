import { motion } from 'motion/react';

export function About() {
  return (
    <section className="py-20 px-6 bg-card/50">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-8">About Me</h2>

          <div className="space-y-4 text-lg text-muted-foreground leading-relaxed">
            <p>
              I'm a Full-Stack Developer with a strong focus on backend engineering and DevOps.
              My expertise lies in building scalable, production-ready systems using modern technologies
              like <span className="text-accent font-medium">Spring Boot</span>, <span className="text-accent font-medium">Django</span>,
              and <span className="text-accent font-medium">AWS</span>.
            </p>

            <p>
              With hands-on experience in REST API design, system architecture, and cloud deployment,
              I approach every project with an engineering mindset focused on scalability, security,
              and performance. My work spans from designing database schemas to implementing CI/CD
              pipelines and managing production infrastructure.
            </p>

            <p>
              Currently advancing my skills through the <span className="text-accent font-medium">ALX Backend Pro Developer Program</span>,
              I'm committed to continuous learning and staying current with industry best practices.
              I believe in writing clean, maintainable code and building systems that solve real-world problems.
            </p>

            <p>
              Whether it's architecting a multi-tier AWS deployment, optimizing database queries,
              or implementing complex business logic, I thrive on the challenges that come with
              building robust backend systems.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
