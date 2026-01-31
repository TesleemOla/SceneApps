export function VisionSection() {
  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-primary/5 via-accent/5 to-background relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,hsl(145,70%,48%,0.1),transparent_50%)]"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_50%,hsl(160,65%,52%,0.1),transparent_50%)]"></div>
      
      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 text-center space-y-4 sm:space-y-6 fade-in-scroll opacity-0 transition-all duration-700">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-card backdrop-blur-sm border border-border shadow-sm mb-2" data-testid="badge-philosophy">
          <span className="text-xs font-medium text-foreground">Our Philosophy</span>
        </div>

        <h2 
          className="text-3xl lg:text-5xl font-bold tracking-tight"
          data-testid="text-vision-headline"
        >
          <span className="text-foreground">
            Technology That <span className="text-primary">Understands</span>
          </span>
        </h2>

        <p 
          className="text-lg lg:text-xl text-foreground/80 max-w-3xl mx-auto leading-relaxed font-medium"
          data-testid="text-vision-subtext"
        >
          We built AI to amplify human connection, not replace it.
        </p>

        <div className="pt-4 max-w-3xl mx-auto">
          <p className="text-base text-muted-foreground leading-relaxed" data-testid="text-vision-mission">
            Transforming emotion from invisible to visible. For the first time, technology doesn't just see you — it understands you, enabling authentic connection in a digital world.
          </p>
        </div>

        <div className="pt-6 grid grid-cols-1 md:grid-cols-3 gap-4 max-w-4xl mx-auto">
          <div className="p-4 rounded-xl bg-card backdrop-blur-sm border border-border" data-testid="stat-authentic">
            <div className="text-3xl font-bold text-primary mb-1">
              100%
            </div>
            <div className="text-xs font-medium text-foreground">Authentic Reactions</div>
          </div>
          
          <div className="p-4 rounded-xl bg-card backdrop-blur-sm border border-border" data-testid="stat-realtime">
            <div className="text-3xl font-bold text-primary mb-1">
              Real-Time
            </div>
            <div className="text-xs font-medium text-foreground">Emotion Analysis</div>
          </div>
          
          <div className="p-4 rounded-xl bg-card backdrop-blur-sm border border-border" data-testid="stat-zero-forced">
            <div className="text-3xl font-bold text-primary mb-1">
              Zero
            </div>
            <div className="text-xs font-medium text-foreground">Forced Interactions</div>
          </div>
        </div>
      </div>
    </section>
  );
}
