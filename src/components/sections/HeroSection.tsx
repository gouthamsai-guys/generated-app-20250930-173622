import { motion } from 'framer-motion';
import { portfolioData } from '@/data/portfolioData';
import { Button } from '@/components/ui/button';
import { AnimatedText } from '@/components/AnimatedText';
export function HeroSection() {
  const { hero } = portfolioData;
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <motion.div
          className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-background"
          animate={{
            backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
          }}
          transition={{
            duration: 20,
            ease: "linear" as const,
            repeat: Infinity,
          }}
          style={{
            backgroundSize: '400% 400%',
          }}
        />
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          <p className="text-lg md:text-xl text-primary font-medium mb-4">{hero.greeting}</p>
          <AnimatedText
            el="h1"
            text={hero.mainLine}
            className="text-4xl sm:text-6xl lg:text-7xl font-bold font-display text-foreground tracking-tight"
          />
          <p className="mt-6 max-w-3xl mx-auto text-lg md:text-xl text-foreground/70">
            {hero.subLine}
          </p>
          <div className="mt-10">
            <a href="#contact">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-6 text-lg font-semibold rounded-full shadow-lg shadow-primary/20 hover:shadow-primary/40 transition-all duration-300 transform hover:-translate-y-1">
                {hero.cta}
              </Button>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}