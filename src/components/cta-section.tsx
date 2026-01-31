import { Button } from "../components/ui/button";
import { Sparkles, Apple, Smartphone } from "lucide-react";
import { Link } from "wouter";

export function CTASection() {
  return (
    <section 
      id="download" 
      className="py-16 lg:py-20 bg-background relative overflow-hidden border-t border-border"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,hsl(var(--vibrant)/0.05),transparent_70%)]"></div>
      
      <div className="relative max-w-4xl mx-auto px-6 text-center">
        <div className="space-y-6 mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-card border-2 border-border shadow-sm" data-testid="badge-download-now">
            <Sparkles className="w-3.5 h-3.5 text-[hsl(var(--vibrant))]" />
            <span className="text-xs font-bold text-foreground">Download Now</span>
          </div>

          <h2 
            className="text-4xl lg:text-5xl font-bold tracking-tight text-foreground leading-[1.2]"
            data-testid="text-cta-headline"
          >
            Start Your Journey to{" "}
            <span className="text-[hsl(var(--vibrant))] drop-shadow-md brightness-90">
              Authentic Connection
            </span>
          </h2>

          <p className="text-base lg:text-lg text-foreground/70 max-w-2xl mx-auto font-medium" data-testid="text-cta-description">
            Download SceneApps and experience social media that actually understands how you feel.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-8">
          <Button
            size="lg"
            className="w-full sm:w-auto min-h-12 rounded-xl px-8 py-4 text-base font-bold bg-[hsl(var(--vibrant))] text-white hover:bg-[hsl(var(--vibrant))]/90 hover:scale-[1.05] active:scale-[0.95] transition-all shadow-lg shadow-[hsl(var(--vibrant)/0.25)]"
            data-testid="button-cta-app-store"
            onClick={() => window.open('https://apps.apple.com/us/app/sceneapps/id6741790777', '_blank')}
          >
            <div className="flex items-center gap-2">
              <Apple className="w-5 h-5" />
              <div className="text-left">
                <div className="text-[10px] font-bold leading-none mb-1">Download on the</div>
                <div className="text-base font-bold leading-none">App Store</div>
              </div>
            </div>
          </Button>
          
          <Button
            size="lg"
            variant="outline"
            className="w-full sm:w-auto min-h-12 rounded-xl px-8 py-4 text-base font-bold border-2 border-foreground text-foreground hover:bg-foreground hover:text-background hover:scale-[1.05] active:scale-[0.95] transition-all shadow-md"
            data-testid="button-cta-play-store"
            onClick={() => window.open('https://play.google.com/store/apps/details?id=com.sceneapps.africa&pcampaignid=web_share', '_blank')}
          >
            <div className="flex items-center gap-2">
              <Smartphone className="w-5 h-5" />
              <div className="text-left">
                <div className="text-[10px] font-bold leading-none mb-1">Get it on</div>
                <div className="text-base font-bold leading-none">Play Store</div>
              </div>
            </div>
          </Button>
        </div>

        <div className="mt-8 mb-10 bg-secondary/50 rounded-2xl p-6 border border-border/50 max-w-2xl mx-auto">
          <p className="text-base font-bold text-foreground mb-3">Built for Authenticity and Safety</p>
          <p className="text-sm text-foreground/70 font-medium leading-relaxed">
            We are committed to real human emotion and non-fake reactions. Your privacy and safety are our top priorities. 
            Read our <Link href="/privacy" className="text-[hsl(var(--vibrant))] hover:underline">Privacy Policy</Link> and <Link href="/child-safety" className="text-[hsl(var(--vibrant))] hover:underline">Child Safety Policy</Link> for more details on how we protect your video and voice data.
          </p>
        </div>

        <p className="text-center text-sm text-muted-foreground" data-testid="text-app-info">
          Available for iPhone, iPad, and Android. Requires iOS 14.0+ or Android 8.0+.
        </p>
      </div>
    </section>
  );
}
