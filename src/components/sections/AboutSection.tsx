import { motion, Variants } from 'framer-motion';
import { portfolioData } from '@/data/portfolioData';
const sectionVariants: Variants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: 'easeOut',
      staggerChildren: 0.2,
    },
  },
};
const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
};
export function AboutSection() {
  const { about } = portfolioData;
  return (
    <motion.section
      id="about"
      className="py-24 md:py-32"
      variants={sectionVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <motion.h2 variants={itemVariants} className="text-3xl md:text-4xl font-bold font-display text-primary mb-4">
            {about.title}
          </motion.h2>
          <motion.p variants={itemVariants} className="text-lg md:text-xl text-foreground/80 leading-relaxed">
            {about.description}
          </motion.p>
        </div>
      </div>
    </motion.section>
  );
}