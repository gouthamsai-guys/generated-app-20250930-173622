import { motion } from 'framer-motion';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import type { LucideIcon } from 'lucide-react';
type ProjectLink = {
  type: 'live' | 'code';
  url: string;
  icon: LucideIcon;
};
type ProjectCardProps = {
  title: string;
  description: string;
  tags: readonly string[];
  image: string;
  links: ProjectLink[];
};
const cardVariants = {
  hidden: { opacity: 0, y: 50, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.5,
      ease: 'easeOut' as const,
    },
  },
};
export function ProjectCard({ title, description, tags, image, links }: ProjectCardProps) {
  return (
    <motion.div
      variants={cardVariants}
      whileHover={{ y: -8, scale: 1.02 }}
      transition={{ duration: 0.3 }}
    >
      <Card className="h-full flex flex-col overflow-hidden bg-card/50 backdrop-blur-sm border-border/50 shadow-sm hover:shadow-lg hover:shadow-primary/10 transition-shadow duration-300">
        <div className="aspect-[16/9] overflow-hidden">
          <img src={image} alt={title} className="object-cover w-full h-full" />
        </div>
        <CardHeader>
          <CardTitle className="text-2xl font-bold font-display">{title}</CardTitle>
        </CardHeader>
        <CardContent className="flex-grow">
          <p className="text-foreground/80">{description}</p>
          <div className="mt-4 flex flex-wrap gap-2">
            {tags.map((tag) => (
              <Badge key={tag} variant="secondary" className="bg-primary/10 text-primary border-primary/20">
                {tag}
              </Badge>
            ))}
          </div>
        </CardContent>
        <CardFooter className="flex justify-end space-x-4">
          {links.map((link) => (
            <a key={link.type} href={link.url} target="_blank" rel="noopener noreferrer">
              <Button variant="outline" className="capitalize">
                <link.icon className="mr-2 h-4 w-4" />
                {link.type}
              </Button>
            </a>
          ))}
        </CardFooter>
      </Card>
    </motion.div>
  );
}