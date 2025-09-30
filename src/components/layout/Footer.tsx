import { portfolioData } from '@/data/portfolioData';
import { Button } from '@/components/ui/button';
export function Footer() {
  const { copyright } = portfolioData.footer;
  const { socials } = portfolioData.contact;
  return (
    <footer className="bg-background border-t">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-center space-y-6">
          <div className="flex space-x-6">
            {socials.map((social) => (
              <a key={social.name} href={social.url} target="_blank" rel="noopener noreferrer">
                <Button variant="ghost" size="icon" className="text-foreground/60 hover:text-primary hover:bg-primary/10">
                  <social.icon className="h-6 w-6" />
                  <span className="sr-only">{social.name}</span>
                </Button>
              </a>
            ))}
          </div>
          <p className="text-center text-base text-foreground/60">
            {copyright}
          </p>
        </div>
      </div>
    </footer>
  );
}