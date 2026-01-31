
import { FeatureScreenshot } from "./feature-screenshot";
import { 
  Eye, 
  MessageSquare, 
  Heart, 
  Brain, 
  // BarChart3, 
  // Building2, 
  // Shield, 
  // Award,
  // Cpu,
  // Users
} from "lucide-react";

const features = [
  {
    icon: MessageSquare,
    title: "Verbal Mentions",
    subtitle: "Say a name to trigger a natural mention",
    description: "Trigger mentions naturally using your voice without tags or symbols. Our AI recognizes recipients within your conversation, making sharing as intuitive as speaking.",
    gradient: "from-primary to-[hsl(var(--vibrant))]",
    featured: true,
    screenshot: "Voice Interface",
    screenshotType: "mentions" as const
  },
  {
    icon: Heart,
    title: "Authentic Reactions",
    subtitle: "Spontaneous video reactions that value truth",
    description: "Capture and share real-time video reactions. SceneApps' AI prioritizes emotional truth over curated performances, ensuring every interaction is genuine.",
    gradient: "from-[hsl(var(--vibrant))] to-primary",
    screenshot: "Live Feed",
    screenshotType: "reactions" as const
  },
  {
    icon: Eye,
    title: "Emotion Analysis",
    subtitle: "Real-time facial and vocal sentiment detection",
    description: "Our AI processes facial expressions and vocal signals in real-time. This reveals deep engagement scores, helping you see the real emotion behind the screen.",
    gradient: "from-[hsl(var(--vibrant))] to-primary",
    screenshot: "Emotion Dashboard",
    screenshotType: "emotion" as const
  },
  {
    icon: Brain,
    title: "Insights",
    subtitle: "Transparent grading of interaction intensity",
    description: "Access a transparent view of authenticity and intensity across your digital interactions. Use AI-driven insights to better understand and grow your audience.",
    gradient: "from-primary to-[hsl(var(--vibrant))]",
    screenshot: "Grading View",
    screenshotType: "grading" as const
  }
];

export function FeaturesSection() {
  return (
    <section id="features" className="py-12 sm:py-16 lg:py-20 bg-secondary/30 border-y border-border/50">
      <div className="max-w-7xl mx-auto px-6 sm:px-6">
        <div className="text-center space-y-4 mb-12 sm:mb-12 fade-in-scroll transition-all duration-700">
          <h2 
            className="text-4xl lg:text-5xl font-bold tracking-tight text-foreground leading-[1.2]"
            data-testid="text-features-headline"
          >
            Core Features
          </h2>
          <p className="text-base lg:text-lg text-foreground/70 max-w-2xl mx-auto font-medium leading-relaxed" data-testid="text-features-subheadline">
            Advanced AI technology built for real human connection
          </p>
        </div>

        <div className="space-y-20 sm:space-y-20">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center fade-in-scroll transition-all duration-700"
              style={{ 
                animationDelay: `${index * 100}ms`,
                transitionDelay: `${index * 100}ms`
              }}
              data-testid={`feature-row-${index}`}
            >
              {/* Feature Content */}
              <div className={`space-y-4 sm:space-y-6 ${index % 2 === 1 ? 'lg:order-2 lg:pl-8' : 'lg:order-1 lg:pr-8'}`}>
                <div className={`inline-flex w-12 h-12 rounded-xl bg-gradient-to-br ${feature.gradient} items-center justify-center shadow-lg shadow-[hsl(var(--primary)/0.2)] border border-white/20`}>
                  <feature.icon className="w-6 h-6 text-white" />
                </div>
                
                <div className="space-y-3">
                  <h3 className="text-2xl lg:text-3xl font-bold text-foreground tracking-tight" data-testid={`text-feature-title-${index}`}>
                    {feature.title}
                    {feature.featured && (
                      <span className="ml-3 text-[10px] px-2 py-0.5 rounded-full bg-[hsl(var(--vibrant))] text-white font-bold align-middle shadow-sm">
                        BREAKTHROUGH
                      </span>
                    )}
                  </h3>
                  
                  <div className="space-y-2">
                    <p className="text-sm font-bold text-[hsl(var(--vibrant))] uppercase tracking-wider">{feature.subtitle}</p>
                    <p className="text-base lg:text-lg text-foreground/70 leading-relaxed font-medium">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </div>

              {/* Feature Screenshot */}
              <div className={`${index % 2 === 1 ? 'lg:order-1' : 'lg:order-2'} relative group px-4 sm:px-0`} data-testid={`screenshot-feature-${index}`}>
                <div className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} rounded-3xl blur-2xl opacity-5 group-hover:opacity-10 transition-opacity -z-10`}></div>
                <div className="shadow-xl shadow-black/5 rounded-[2rem] overflow-hidden max-w-[280px] lg:max-w-[320px] mx-auto">
                  {index === 0 ? (
                    <img 
                      src="/assets/Notification_1768373537752.png" 
                      alt={feature.screenshot} 
                      className="w-full aspect-[9/16] object-cover hover:scale-105 transition-transform duration-500"
                    />
                  ) : index === 1 ? (
                    <img 
                      src="/assets/Feed_(1)_1768373629976.jpg"
                      alt={feature.screenshot} 
                      className="w-full aspect-[9/16] object-cover hover:scale-105 transition-transform duration-500"
                    />
                  ) : index === 2 ? (
                    <img 
                      src="/assets/Rewards_for_Reactions_1768374848932.jpg"
                      alt={feature.screenshot} 
                      className="w-full aspect-[9/16] object-cover hover:scale-105 transition-transform duration-500"
                    />
                  ) : index === 3 ? (
                    <img 
                      src="/assets/Insight_1768374874532.jpg" 
                      alt={feature.screenshot} 
                      className="w-full aspect-[9/16] object-cover hover:scale-105 transition-transform duration-500"
                    />
                  ) : (
                    <FeatureScreenshot 
                      type={feature.screenshotType}
                      label={feature.screenshot}
                      gradient={feature.gradient}
                    />
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Removed Additional Features Grid for minimalism */}
      </div>
    </section>
  );
}
