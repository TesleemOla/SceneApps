import { Button } from "../components/ui/button";


export function Header() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3 sm:py-4">
        <div className="flex items-center justify-between gap-2 sm:gap-4">
          <div className="flex items-center gap-1.5 sm:gap-2 shrink-0">
            <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full overflow-hidden flex items-center justify-center bg-transparent no-default-hover-elevate">
              <img 
                src="/assets/WhatsApp_Image_2026-01-14_at_08.04.16_1768375383852.jpeg"
                alt="SceneApps Logo" 
                className="w-full h-full object-cover" 
              />
            </div>
            <span className="text-base sm:text-lg font-extrabold tracking-tight text-foreground">SceneApps</span>
          </div>

          <nav className="flex items-center gap-0 sm:gap-1" data-testid="nav-main">
            <Button
              variant="ghost"
              size="sm"
              className="px-3 sm:px-4 min-h-10 sm:min-h-9 text-xs sm:text-sm font-semibold hover:text-[hsl(var(--vibrant))] transition-colors"
              onClick={() => scrollToSection('features')}
              data-testid="button-nav-features"
            >
              Features
            </Button>
            <Button
              variant="default"
              size="sm"
              className="px-4 sm:px-6 min-h-10 sm:min-h-9 text-xs sm:text-sm font-bold bg-black text-white rounded-full hover-elevate active-elevate-2 transition-all"
              onClick={() => scrollToSection('download')}
              data-testid="button-nav-download"
            >
              Download
            </Button>
          </nav>
        </div>
      </div>
    </header>
  );
}
