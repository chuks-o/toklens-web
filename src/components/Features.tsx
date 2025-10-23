import {
  BarChart3,
  Users,
  Target,
  Sparkles,
  Clock,
  Shield
} from "lucide-react";
import { Card } from "@/components/ui/card";

const features = [
  {
    icon: BarChart3,
    title: "In-Depth Analytics",
    description: "Track engagement rates, view-to-like ratios, and performance metrics to optimize your content strategy.",
    color: "text-primary",
    bgColor: "bg-primary/10"
  },
  {
    icon: Users,
    title: "Audience Insights",
    description: "Discover what your audience loves and create content that drives views and engagement.",
    color: "text-success",
    bgColor: "bg-success/10"
  },
  {
    icon: Target,
    title: "Trending Keywords",
    description: "Discover trending keywords and topics relevant to your niche to boost views and engagement.",
    color: "text-accent",
    bgColor: "bg-accent/10"
  },
  {
    icon: Sparkles,
    title: "Virality Score",
    description: "Get instant predictions on content performance with AI-powered virality scoring.",
    color: "text-warning",
    bgColor: "bg-warning/10"
  },
  {
    icon: Clock,
    title: "Real-Time Data",
    description: "Access live performance data as it happens with instant synchronization.",
    color: "text-primary",
    bgColor: "bg-primary/10"
  },
  {
    icon: Shield,
    title: "Privacy Protected",
    description: "Your data stays private. We never store or share your TikTok information.",
    color: "text-success",
    bgColor: "bg-success/10"
  }
];

export const Features = () => {
  return (
    <section className="relative py-24 bg-gradient-to-b from-background to-card/30">
      <div className="container px-4">
        <div className="mx-auto max-w-6xl">
          {/* Section Header */}
          <div className="mb-16 text-center">
            <h2 className="mb-4 text-4xl font-bold tracking-tight sm:text-5xl">
              The Ultimate TikTok
              <span className="bg-gradient-primary bg-clip-text text-transparent"> Growth Toolkit</span>
            </h2>
            <p className="text-xl text-muted-foreground">
              Everything you need to create viral content and grow your channel
            </p>
          </div>

          {/* Features Grid */}
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <Card
                  key={index}
                  className="group relative overflow-hidden border-border/50 bg-card/50 p-6 backdrop-blur-sm transition-all hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5"
                >
                  {/* Hover Gradient Effect */}
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />

                  <div className="relative">
                    <div className={`mb-4 flex h-12 w-12 items-center justify-center rounded-lg ${feature.bgColor} transition-transform group-hover:scale-110`}>
                      <Icon className={`h-6 w-6 ${feature.color}`} />
                    </div>

                    <h3 className="mb-2 text-xl font-semibold">{feature.title}</h3>
                    <p className="text-sm leading-relaxed text-muted-foreground">
                      {feature.description}
                    </p>
                  </div>
                </Card>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
