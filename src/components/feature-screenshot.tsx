import { Smartphone, Heart, MessageCircle, BarChart3, Eye, Brain, Building2 } from "lucide-react";

interface FeatureScreenshotProps {
  type: "emotion" | "mentions" | "reactions" | "grading" | "insights" | "business";
  label: string;
  gradient: string;
}

export function FeatureScreenshot({ type, label, gradient }: FeatureScreenshotProps) {
  const renderContent = () => {
    switch (type) {
      case "emotion":
        return (
          <div className="w-full h-full p-6 flex flex-col items-center justify-center">
            <div className="relative w-32 h-32 mb-6">
              <div className={`absolute inset-0 rounded-full bg-gradient-to-br ${gradient} opacity-20`}></div>
              <Eye className="absolute inset-0 m-auto w-16 h-16 text-primary" />
            </div>
            <div className="space-y-2 w-full">
              <div className="h-2 bg-gradient-to-r from-chart-3/60 to-chart-3/20 rounded-full w-3/4 mx-auto"></div>
              <div className="h-2 bg-gradient-to-r from-chart-1/60 to-chart-1/20 rounded-full w-2/3 mx-auto"></div>
              <div className="h-2 bg-gradient-to-r from-chart-2/60 to-chart-2/20 rounded-full w-1/2 mx-auto"></div>
            </div>
            <p className="text-xs text-muted-foreground mt-4">{label}</p>
          </div>
        );
      
      case "mentions":
        return (
          <div className="w-full h-full p-6 flex flex-col items-center justify-center bg-gradient-to-b from-primary/5 to-transparent">
            <div className="relative mb-6">
              <MessageCircle className="w-20 h-20 text-primary" />
              <div className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-gradient-to-br from-chart-1 to-chart-3 flex items-center justify-center">
                <span className="text-[10px] text-white font-bold">@</span>
              </div>
            </div>
            <div className="space-y-3 w-full">
              <div className="flex items-center gap-2 bg-muted/30 rounded-lg p-2">
                <div className="w-8 h-8 rounded-full bg-gradient-to-br from-primary/40 to-accent/40"></div>
                <div className="h-3 bg-muted rounded w-24"></div>
              </div>
              <div className="flex items-center gap-2 bg-muted/30 rounded-lg p-2">
                <div className="w-8 h-8 rounded-full bg-gradient-to-br from-accent/40 to-primary/40"></div>
                <div className="h-3 bg-muted rounded w-20"></div>
              </div>
            </div>
            <p className="text-xs text-muted-foreground mt-4">{label}</p>
          </div>
        );
      
      case "reactions":
        return (
          <div className="w-full h-full p-6 flex flex-col items-center justify-center">
            <div className="grid grid-cols-2 gap-3 mb-6">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-chart-3/60 to-chart-3/20 flex items-center justify-center">
                <Heart className="w-8 h-8 text-chart-3" />
              </div>
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-chart-1/60 to-chart-1/20 flex items-center justify-center">
                <Eye className="w-8 h-8 text-chart-1" />
              </div>
            </div>
            <div className="w-full space-y-2">
              <div className="flex gap-2">
                <div className="h-2 bg-chart-3/40 rounded-full flex-1"></div>
                <div className="h-2 bg-chart-1/40 rounded-full flex-1"></div>
              </div>
              <div className="h-1 bg-muted/50 rounded-full w-full"></div>
            </div>
            <p className="text-xs text-muted-foreground mt-4">{label}</p>
          </div>
        );
      
      case "grading":
        return (
          <div className="w-full h-full p-6 flex flex-col items-center justify-center bg-gradient-to-br from-primary/5 via-transparent to-accent/5">
            <Brain className="w-16 h-16 text-primary mb-6" />
            <div className="w-full space-y-3">
              <div className="flex items-center gap-2">
                <div className="text-xs font-medium text-muted-foreground w-16">Auth</div>
                <div className="flex-1 h-2 bg-muted/30 rounded-full overflow-hidden">
                  <div className="h-full w-4/5 bg-gradient-to-r from-chart-3 to-chart-3/60"></div>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <div className="text-xs font-medium text-muted-foreground w-16">Tone</div>
                <div className="flex-1 h-2 bg-muted/30 rounded-full overflow-hidden">
                  <div className="h-full w-3/5 bg-gradient-to-r from-chart-1 to-chart-1/60"></div>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <div className="text-xs font-medium text-muted-foreground w-16">Engage</div>
                <div className="flex-1 h-2 bg-muted/30 rounded-full overflow-hidden">
                  <div className="h-full w-2/3 bg-gradient-to-r from-chart-2 to-chart-2/60"></div>
                </div>
              </div>
            </div>
            <p className="text-xs text-muted-foreground mt-4">{label}</p>
          </div>
        );
      
      case "insights":
        return (
          <div className="w-full h-full p-6 flex flex-col items-center justify-center">
            <BarChart3 className="w-16 h-16 text-primary mb-4" />
            <div className="w-full flex items-end justify-center gap-2 mb-4">
              <div className="w-8 h-16 bg-gradient-to-t from-chart-3 to-chart-3/60 rounded-t"></div>
              <div className="w-8 h-24 bg-gradient-to-t from-chart-1 to-chart-1/60 rounded-t"></div>
              <div className="w-8 h-20 bg-gradient-to-t from-chart-2 to-chart-2/60 rounded-t"></div>
              <div className="w-8 h-28 bg-gradient-to-t from-primary to-primary/60 rounded-t"></div>
            </div>
            <div className="flex gap-4">
              <div className="text-center">
                <div className="text-lg font-bold bg-gradient-to-r from-chart-3 to-chart-1 bg-clip-text text-transparent">75%</div>
                <div className="text-[10px] text-muted-foreground">Happy</div>
              </div>
              <div className="text-center">
                <div className="text-lg font-bold bg-gradient-to-r from-chart-1 to-chart-2 bg-clip-text text-transparent">82%</div>
                <div className="text-[10px] text-muted-foreground">Engaged</div>
              </div>
            </div>
            <p className="text-xs text-muted-foreground mt-4">{label}</p>
          </div>
        );
      
      case "business":
        return (
          <div className="w-full h-full p-6 flex flex-col items-center justify-center bg-gradient-to-b from-accent/5 to-transparent">
            <Building2 className="w-16 h-16 text-primary mb-6" />
            <div className="w-full space-y-2 mb-4">
              <div className="flex items-center justify-between p-2 bg-muted/20 rounded-lg">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-chart-3"></div>
                  <div className="h-2 w-16 bg-muted rounded"></div>
                </div>
                <div className="text-xs font-bold text-chart-3">+12%</div>
              </div>
              <div className="flex items-center justify-between p-2 bg-muted/20 rounded-lg">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-chart-1"></div>
                  <div className="h-2 w-20 bg-muted rounded"></div>
                </div>
                <div className="text-xs font-bold text-chart-1">+8%</div>
              </div>
            </div>
            <p className="text-xs text-muted-foreground mt-2">{label}</p>
          </div>
        );
      
      default:
        return (
          <div className="flex flex-col items-center justify-center h-full p-8 text-center">
            <Smartphone className="w-16 h-16 text-muted-foreground/50 mb-4" />
            <p className="text-sm font-medium text-muted-foreground">{label}</p>
          </div>
        );
    }
  };

  return (
    <div className="relative max-w-sm mx-auto">
      <div className="aspect-[9/16] rounded-3xl bg-gradient-to-br from-muted/60 to-muted border-2 border-border overflow-hidden shadow-2xl hover:shadow-3xl transition-all duration-300 hover:scale-105">
        {renderContent()}
      </div>
      <div className={`absolute -top-6 -right-6 w-24 h-24 bg-gradient-to-br ${gradient} opacity-20 rounded-full blur-3xl -z-10`}></div>
    </div>
  );
}
