import { motion } from 'framer-motion';
import { portfolioData } from '@/data/portfolioData';
import { Card } from '@/components/ui/card';
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};
const itemVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1 },
};
export function SkillsSection() {
  const { skills } = portfolioData;
  return (
    <section id="skills" className="py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold font-display text-primary">My Tech Stack</h2>
          <p className="mt-4 text-lg md:text-xl text-foreground/80 max-w-2xl mx-auto">
            Technologies I'm proficient with and enjoy working with.
          </p>
        </div>
        <motion.div
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              variants={itemVariants}
              className="animate-float"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <Card className="p-6 flex flex-col items-center justify-center gap-4 bg-card/50 backdrop-blur-sm border-border/50 shadow-sm hover:shadow-md hover:border-primary/50 transition-all duration-300">
                <skill.icon className="h-10 w-10 text-primary" />
                <span className="font-semibold text-foreground">{skill.name}</span>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}