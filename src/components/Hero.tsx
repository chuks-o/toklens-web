import { Button } from "@/components/ui/button";
import { Chrome, TrendingUp, BarChart3 } from "lucide-react";

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-accent/10" />

      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:64px_64px]" />

      <div className="container relative z-10 px-4 py-20">
        <div className="mx-auto max-w-5xl text-center">
          {/* Badge */}
          <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-4 py-2 backdrop-blur-sm">
            <Chrome className="h-4 w-4 text-primary" />
            <span className="text-sm font-medium text-primary">Chrome Extension</span>
          </div>

          {/* Main Heading */}
          <h1 className="mb-6 text-5xl font-bold leading-tight tracking-tight sm:text-6xl lg:text-7xl">
            All-in-One Platform
            <span className="bg-gradient-primary bg-clip-text text-transparent"> for TikTok Growth</span>
          </h1>

          <p className="mb-12 text-xl text-muted-foreground sm:text-2xl">
            Create <strong>smarter</strong>, optimize <strong>faster</strong>: trending insights, engagement metrics, virality scores and more all in one place.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button size="lg" className="group h-14 bg-gradient-primary px-8 text-lg font-semibold hover:opacity-90">
              <Chrome className="mr-2 h-5 w-5 transition-transform group-hover:scale-110" />
              Install for FREE
            </Button>
            <Button size="lg" variant="outline" className="h-14 border-border/50 px-8 text-lg font-semibold hover:bg-card">
              <BarChart3 className="mr-2 h-5 w-5" />
              See How it Works
            </Button>
          </div>

          {/* Stats */}
          <div className="mt-16 grid grid-cols-3 gap-8 border-t border-border/50 pt-12">
            <div>
              <div className="mb-2 text-3xl font-bold text-primary">100K+</div>
              <div className="text-sm text-muted-foreground">TikTok Creators</div>
            </div>
            <div>
              <div className="mb-2 text-3xl font-bold text-success">50M+</div>
              <div className="text-sm text-muted-foreground">Videos Analyzed</div>
            </div>
            <div>
              <div className="mb-2 text-3xl font-bold text-accent">10k+</div>
              <div className="text-sm text-muted-foreground">5 Star Reviews</div>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Elements */}
      <div className="absolute right-10 top-20 h-32 w-32 rounded-full bg-primary/20 blur-3xl" />
      <div className="absolute bottom-20 left-10 h-40 w-40 rounded-full bg-accent/20 blur-3xl" />
    </section>
  );
};
