import { Smartphone } from "lucide-react";

export function AppScreenshots() {
  return (
    <section className="py-24 lg:py-32 bg-background">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground" data-testid="text-screenshots-headline">
            Experience the Future of{" "}
            <span className="bg-gradient-to-r from-[hsl(240,60%,65%)] to-[hsl(270,50%,70%)] bg-clip-text text-transparent">
              Social Connection
            </span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto" data-testid="text-screenshots-description">
            See how our platform brings authentic emotional understanding to your social interactions
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          {/* Screenshot 1 */}
          <div className="group relative" data-testid="screenshot-1">
            <div className="aspect-[9/16] rounded-3xl bg-gradient-to-br from-muted/50 to-muted border-2 border-border overflow-hidden shadow-2xl hover:shadow-3xl transition-all duration-300 hover:scale-105">
              <div className="flex flex-col items-center justify-center h-full p-8 text-center">
                <Smartphone className="w-16 h-16 text-muted-foreground/50 mb-4" />
                <p className="text-sm font-medium text-muted-foreground">App Screenshot Placeholder</p>
                <p className="text-xs text-muted-foreground/60 mt-2">Feed & Reactions</p>
              </div>
            </div>
          </div>

          {/* Screenshot 2 - Featured */}
          <div className="group relative md:-mt-8" data-testid="screenshot-2">
            <div className="aspect-[9/16] rounded-3xl bg-gradient-to-br from-primary/10 to-accent/10 border-2 border-primary/30 overflow-hidden shadow-2xl hover:shadow-3xl transition-all duration-300 hover:scale-105">
              <div className="flex flex-col items-center justify-center h-full p-8 text-center">
                <Smartphone className="w-16 h-16 text-primary/50 mb-4" />
                <p className="text-sm font-medium text-foreground">App Screenshot Placeholder</p>
                <p className="text-xs text-muted-foreground mt-2">Emotion Analysis</p>
              </div>
            </div>
          </div>

          {/* Screenshot 3 */}
          <div className="group relative" data-testid="screenshot-3">
            <div className="aspect-[9/16] rounded-3xl bg-gradient-to-br from-muted/50 to-muted border-2 border-border overflow-hidden shadow-2xl hover:shadow-3xl transition-all duration-300 hover:scale-105">
              <div className="flex flex-col items-center justify-center h-full p-8 text-center">
                <Smartphone className="w-16 h-16 text-muted-foreground/50 mb-4" />
                <p className="text-sm font-medium text-muted-foreground">App Screenshot Placeholder</p>
                <p className="text-xs text-muted-foreground/60 mt-2">Insights Dashboard</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
