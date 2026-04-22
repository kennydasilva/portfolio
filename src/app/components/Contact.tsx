import { motion } from 'motion/react';
import { Github, Linkedin, Mail } from 'lucide-react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { Label } from './ui/label';

export function Contact() {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Form submission logic would go here
    alert('Thank you for your message! I will get back to you soon.');
  };

  return (
    <section id="contact" className="py-20 px-6 bg-card/50">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12 text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Get In Touch</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            I'm always open to discussing new projects, opportunities, or collaborations.
            Feel free to reach out!
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <div>
              <h3 className="text-xl font-semibold mb-4">Connect With Me</h3>
              <div className="space-y-4">
                <a
                  href="https://mail.google.com/mail/?view=cm&fs=1&to=kennydasilva542@gmail.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-muted-foreground hover:text-accent transition-colors group"
                >
                  <div className="p-2 bg-accent/10 rounded-lg group-hover:bg-accent/20 transition-colors">
                    <Mail className="w-5 h-5 text-accent" />
                  </div>
                  <span>kennydasilva542@gmail.com</span>
                </a>

                <a
                  href="https://github.com/kennydasilva"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-muted-foreground hover:text-accent transition-colors group"
                >
                  <div className="p-2 bg-accent/10 rounded-lg group-hover:bg-accent/20 transition-colors">
                    <Github className="w-5 h-5 text-accent" />
                  </div>
                  <span>github.com/kennydasilva</span>
                </a>

                <a
                  href="https://www.linkedin.com/in/kenny-dasilva/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-muted-foreground hover:text-accent transition-colors group"
                >
                  <div className="p-2 bg-accent/10 rounded-lg group-hover:bg-accent/20 transition-colors">
                    <Linkedin className="w-5 h-5 text-accent" />
                  </div>
                  <span>linkedin.com/in/kenny-dasilva</span>
                </a>
              </div>
            </div>

            <div className="pt-6">
              <h3 className="text-xl font-semibold mb-2">Location</h3>
              <p className="text-muted-foreground">Available for remote opportunities worldwide</p>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <Label htmlFor="name">Name</Label>
                <Input
                  id="name"
                  type="text"
                  placeholder="Your name"
                  required
                  className="mt-1"
                />
              </div>

              <div>
                <Label htmlFor="email">Name</Label>
                <Input
                  id="nome"
                  type="text"
                  placeholder="your.name"
                  required
                  className="mt-1"
                />
              </div>

              <div>
                <Label htmlFor="message">Comment</Label>
                <Textarea
                  id="message"
                  placeholder="Tell me about your project or opportunity..."
                  rows={5}
                  required
                  className="mt-1"
                />
              </div>

              <Button type="submit" className="w-full bg-accent text-accent-foreground hover:bg-accent/90">
                Send Comment
              </Button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
