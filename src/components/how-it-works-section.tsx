import { Card } from "../components/ui/card";
import { Video, Mic, MessageCircle, ScanFace, LineChart } from "lucide-react";

const steps = [
  {
    number: "01",
    icon: Video,
    title: "Create",
    description: "Post natural video content"
  },
  {
    number: "02",
    icon: Mic,
    title: "Speak",
    description: "Talk freely; AI detects mentions"
  },
  {
    number: "03",
    icon: MessageCircle,
    title: "React",
    description: "Record live video reactions"
  },
  {
    number: "04",
    icon: ScanFace,
    title: "Analyze",
    description: "AI detects emotions in real time"
  },
  {
    number: "05",
    icon: LineChart,
    title: "Understand",
    description: "Revealing true audience sentiment"
  }
];

export function HowItWorksSection() {
  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-background relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent"></div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center space-y-3 mb-8 sm:mb-10 fade-in-scroll opacity-0 transition-all duration-700">
          <h2 
            className="text-3xl lg:text-4xl font-bold tracking-tight text-foreground"
            data-testid="text-how-it-works-headline"
          >
            How It Works
          </h2>
          <p className="text-base lg:text-lg text-muted-foreground max-w-2xl mx-auto" data-testid="text-how-it-works-subheadline">
            A simple, natural flow from creation to understanding
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 relative">
          {steps.map((step, index) => (
            <div 
              key={index} 
              className="relative fade-in-scroll opacity-0 transition-all duration-700"
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-16 left-full w-full h-0.5 bg-gradient-to-r from-primary/40 to-transparent z-0"></div>
              )}
              
              <Card className="relative z-10 p-6 text-center hover-elevate transition-all duration-300 bg-card/50 backdrop-blur-sm border-card-border" data-testid={`card-step-${index}`}>
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-br from-primary to-accent text-primary-foreground font-bold text-lg mb-4">
                  {step.number}
                </div>
                
                <div className="w-14 h-14 mx-auto rounded-xl bg-gradient-to-br from-chart-1/10 to-chart-2/10 flex items-center justify-center mb-4">
                  <step.icon className="w-7 h-7 text-primary" />
                </div>
                
                <h3 className="text-lg font-semibold text-card-foreground mb-2" data-testid={`text-step-title-${index}`}>
                  {step.title}
                </h3>
                
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {step.description}
                </p>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
