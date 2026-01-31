import { Button } from "../components/ui/button";
import { Apple, Smartphone } from "lucide-react";


export function AboutSection() {
  return (
    <section id="about" className="min-h-[70vh] flex items-center justify-center py-12 sm:py-12 lg:py-16 pt-24 sm:pt-20 bg-background relative overflow-hidden">
      {/* Background Glows - Reduced Intensity */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-[120px] -z-10"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[hsl(var(--vibrant)/0.08)] rounded-full blur-[120px] -z-10"></div>
      
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent"></div>
      
      <div className="max-w-7xl mx-auto px-6 sm:px-6 relative">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="text-center lg:text-left space-y-8 sm:space-y-8 fade-in-scroll transition-all duration-700">
            <h1 
              className="text-4xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold tracking-tight leading-[1.1]"
              data-testid="text-about-headline"
            >
              <span className="text-foreground">
                A More <span className="text-[hsl(var(--vibrant))] drop-shadow-md brightness-90">Human</span> Way
              </span>
              <br />
              <span className="text-foreground">to React, Share, and Connect</span>
            </h1>

            <p 
              className="text-sm sm:text-base lg:text-lg text-foreground/80 leading-relaxed max-w-2xl mx-auto lg:mx-0 font-medium"
              data-testid="text-about-description"
            >
              Capture spontaneous video reactions as our AI reads emotion from your voice and expressions. 
              SceneApps helps you understand how people truly feel, giving creators honest, insight-rich feedback that makes every connection real.
            </p>

            <div className="flex flex-col gap-4 py-2">
              <div className="flex items-start gap-3">
                <div className="mt-1 w-5 h-5 rounded-full bg-[hsl(var(--vibrant))] flex items-center justify-center shrink-0">
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                </div>
                <p className="text-sm sm:text-base text-foreground/80 font-medium">Capture real reactions to any content instantly.</p>
              </div>
              <div className="flex items-start gap-3">
                <div className="mt-1 w-5 h-5 rounded-full bg-[hsl(var(--vibrant))] flex items-center justify-center shrink-0">
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                </div>
                <p className="text-sm sm:text-base text-foreground/80 font-medium">AI analysis that prioritizes emotional truth over likes.</p>
              </div>
              <div className="flex items-start gap-3">
                <div className="mt-1 w-5 h-5 rounded-full bg-[hsl(var(--vibrant))] flex items-center justify-center shrink-0">
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                </div>
                <p className="text-sm sm:text-base text-foreground/80 font-medium">Deep insights for creators to truly understand their audience.</p>
              </div>
            </div>

            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-2 sm:gap-3" data-testid="list-about-principles">
              <div className="px-4 sm:px-5 py-1.5 sm:py-2 rounded-full bg-card border-2 border-border shadow-sm hover:shadow-md transition-shadow" data-testid="badge-no-fakes">
                <span className="text-xs sm:text-sm font-bold text-foreground">No fakes</span>
              </div>
              <div className="px-4 sm:px-5 py-1.5 sm:py-2 rounded-full bg-card border-2 border-border shadow-sm hover:shadow-md transition-shadow" data-testid="badge-authentic">
                <span className="text-xs sm:text-sm font-bold text-foreground">Purely authentic</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-4 sm:pt-6">
              <Button
                size="sm"
                className="w-full sm:w-auto min-h-12 rounded-xl px-6 py-3 text-sm font-bold bg-[hsl(var(--vibrant))] text-white hover:bg-[hsl(var(--vibrant))]/90 hover:scale-[1.02] active:scale-[0.98] transition-all shadow-lg shadow-[hsl(var(--vibrant)/0.25)]"
                data-testid="button-about-app-store"
                onClick={() => window.open('https://apps.apple.com/us/app/sceneapps/id6741790777', '_blank')}
              >
                <div className="flex items-center gap-2">
                  <Apple className="w-5 h-5" />
                  <div className="text-left">
                    <div className="text-[10px] font-bold leading-none mb-1">Download on the</div>
                    <div className="text-sm font-bold leading-none">App Store</div>
                  </div>
                </div>
              </Button>
              
              <Button
                size="sm"
                variant="outline"
                className="w-full sm:w-auto min-h-12 rounded-xl px-6 py-3 text-sm font-bold border-2 border-foreground text-foreground hover:bg-foreground hover:text-background hover:scale-[1.02] active:scale-[0.98] transition-all shadow-md"
                data-testid="button-about-play-store"
                onClick={() => window.open('https://play.google.com/store/apps/details?id=com.sceneapps.africa&pcampaignid=web_share', '_blank')}
              >
                <div className="flex items-center gap-2">
                  <Smartphone className="w-5 h-5" />
                  <div className="text-left">
                    <div className="text-[10px] font-bold leading-none mb-1">Get it on</div>
                    <div className="text-sm font-bold leading-none">Play Store</div>
                  </div>
                </div>
              </Button>
            </div>
          </div>

          <div className="block lg:block animate-slow-bounce sm:animate-slow-bounce-sm hover:animate-none px-4 sm:px-0 mt-8 lg:mt-0" data-testid="container-about-screenshot">
            <div className="max-w-[240px] sm:max-w-[280px] lg:max-w-[320px] mx-auto relative group">
              <div className="absolute inset-0 bg-[hsl(var(--vibrant))] rounded-3xl blur-2xl opacity-20 group-hover:opacity-30 transition-opacity -z-10"></div>
              <div className="shadow-2xl shadow-black/10 rounded-[2.5rem] overflow-hidden border-4 border-white/10">
                <img 
                  src="/assets/Dashboard_for_Posts_1768372936977.jpg" 
                  alt="SceneApps Dashboard" 
                  className="w-full h-auto object-contain bg-white"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
