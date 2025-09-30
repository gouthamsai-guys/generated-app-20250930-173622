import { motion, Variants } from 'framer-motion';
import { portfolioData } from '@/data/portfolioData';
import { Button } from '@/components/ui/button';
import { Mail } from 'lucide-react';
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
export function ContactSection() {
  const { contactSection } = portfolioData;
  return (
    <motion.section
      id="contact"
      className="py-24 md:py-32 bg-primary/5"
      variants={sectionVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <motion.h2 variants={itemVariants} className="text-3xl md:text-4xl font-bold font-display text-primary mb-4">
            {contactSection.title}
          </motion.h2>
          <motion.p variants={itemVariants} className="text-lg md:text-xl text-foreground/80 leading-relaxed mb-8">
            {contactSection.description}
          </motion.p>
          <motion.div variants={itemVariants}>
            <a href={`mailto:${contactSection.email}`}>
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-6 text-lg font-semibold rounded-full shadow-lg shadow-primary/20 hover:shadow-primary/40 transition-all duration-300 transform hover:-translate-y-1">
                <Mail className="mr-2 h-5 w-5" />
                {contactSection.cta}
              </Button>
            </a>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}