import { Card } from "../components/ui/card";
import { TrendingUp, BarChart2, PieChart } from "lucide-react";

export function BusinessSection() {
  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-gradient-to-b from-card/30 to-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10 items-center">
          <div className="space-y-4 fade-in-scroll opacity-0 transition-all duration-700">
            <h2 
              className="text-3xl lg:text-4xl font-bold tracking-tight text-foreground"
              data-testid="text-business-headline"
            >
              Understand What They{" "}
              <span className="text-primary">
                Actually Feel
              </span>
            </h2>
            
            <p className="text-base text-muted-foreground leading-relaxed" data-testid="text-business-description">
              Access performance data that reveals how audiences genuinely feel about your content, moving beyond surface-level clicks.
            </p>

            <div className="space-y-4 pt-4">
              <div className="flex items-start gap-3" data-testid="item-authentic-insights">
                <div className="w-6 h-6 rounded-full bg-chart-3/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <div className="w-2 h-2 rounded-full bg-chart-3"></div>
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-1">Authentic Insights</h4>
                  <p className="text-sm text-muted-foreground">See genuine emotional responses, not manipulated engagement metrics</p>
                </div>
              </div>

              <div className="flex items-start gap-3" data-testid="item-filter-context">
                <div className="w-6 h-6 rounded-full bg-chart-1/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <div className="w-2 h-2 rounded-full bg-chart-1"></div>
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-1">Filter by Context</h4>
                  <p className="text-sm text-muted-foreground">Analyze by keywords, emotional categories, or demographics</p>
                </div>
              </div>

              <div className="flex items-start gap-3" data-testid="item-realtime-data">
                <div className="w-6 h-6 rounded-full bg-chart-2/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <div className="w-2 h-2 rounded-full bg-chart-2"></div>
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-1">Real-Time Data</h4>
                  <p className="text-sm text-muted-foreground">Track sentiment and emotion trends as they happen</p>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-4 fade-in-scroll opacity-0 transition-all duration-700" style={{ transitionDelay: '200ms' }}>
            <Card className="p-6 bg-gradient-to-br from-card to-card/50 border-card-border" data-testid="card-emotion-distribution">
              <div className="flex items-center justify-between mb-4">
                <h4 className="font-semibold text-card-foreground">Emotion Distribution</h4>
                <PieChart className="w-5 h-5 text-muted-foreground" />
              </div>
              <div className="space-y-3">
                <div data-testid="metric-joy">
                  <div className="flex items-center justify-between text-sm mb-1">
                    <span className="text-muted-foreground">Joy</span>
                    <span className="font-medium text-foreground">68%</span>
                  </div>
                  <div className="h-2 bg-muted rounded-full overflow-hidden">
                    <div className="h-full bg-gradient-to-r from-chart-3 to-chart-3/80 rounded-full" style={{ width: '68%' }}></div>
                  </div>
                </div>
                <div data-testid="metric-surprise">
                  <div className="flex items-center justify-between text-sm mb-1">
                    <span className="text-muted-foreground">Surprise</span>
                    <span className="font-medium text-foreground">45%</span>
                  </div>
                  <div className="h-2 bg-muted rounded-full overflow-hidden">
                    <div className="h-full bg-gradient-to-r from-chart-1 to-chart-1/80 rounded-full" style={{ width: '45%' }}></div>
                  </div>
                </div>
                <div data-testid="metric-empathy">
                  <div className="flex items-center justify-between text-sm mb-1">
                    <span className="text-muted-foreground">Empathy</span>
                    <span className="font-medium text-foreground">52%</span>
                  </div>
                  <div className="h-2 bg-muted rounded-full overflow-hidden">
                    <div className="h-full bg-gradient-to-r from-chart-2 to-chart-2/80 rounded-full" style={{ width: '52%' }}></div>
                  </div>
                </div>
                <div data-testid="metric-excitement">
                  <div className="flex items-center justify-between text-sm mb-1">
                    <span className="text-muted-foreground">Excitement</span>
                    <span className="font-medium text-foreground">38%</span>
                  </div>
                  <div className="h-2 bg-muted rounded-full overflow-hidden">
                    <div className="h-full bg-gradient-to-r from-chart-4 to-chart-4/80 rounded-full" style={{ width: '38%' }}></div>
                  </div>
                </div>
              </div>
            </Card>

            <div className="grid grid-cols-2 gap-4">
              <Card className="p-6 hover-elevate transition-all duration-300 border-card-border" data-testid="card-positive-sentiment">
                <TrendingUp className="w-8 h-8 text-primary mb-3" />
                <div className="text-3xl font-bold text-primary mb-1">+23%</div>
                <div className="text-sm text-muted-foreground">Positive Sentiment</div>
              </Card>
              
              <Card className="p-6 hover-elevate transition-all duration-300 border-card-border" data-testid="card-engagement-depth">
                <BarChart2 className="w-8 h-8 text-primary mb-3" />
                <div className="text-3xl font-bold text-primary mb-1">4.2x</div>
                <div className="text-sm text-muted-foreground">Engagement Depth</div>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
