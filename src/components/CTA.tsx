import { Button } from "@/components/ui/button";
import { Chrome, ArrowRight } from "lucide-react";

export const CTA = () => {
  return (
    <section className="relative py-24">
      <div className="container px-4">
        <div className="mx-auto max-w-4xl">
          <div className="relative overflow-hidden rounded-3xl border border-primary/20 bg-gradient-to-br from-primary/10 via-accent/5 to-background p-12 text-center">
            {/* Background Pattern */}
            <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:32px_32px]" />

            {/* Content */}
            <div className="relative z-10">
              <h2 className="mb-4 text-4xl font-bold tracking-tight sm:text-5xl">
                Start Growing Your TikTok Creators Page Today
              </h2>
              <p className="mb-8 text-xl text-muted-foreground">
                Join 100,000+ creators using Toklens to optimize their content and grow faster
              </p>

              <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
                <Button size="lg" className="group h-14 bg-gradient-primary px-8 text-lg font-semibold hover:opacity-90">
                  <Chrome className="mr-2 h-5 w-5 transition-transform group-hover:scale-110" />
                  Install for FREE
                  <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                </Button>
              </div>

              <p className="mt-6 text-sm text-muted-foreground">
                Free forever • No credit card required • Installs in 30 seconds
              </p>
            </div>

            {/* Decorative Elements */}
            <div className="absolute -left-20 -top-20 h-40 w-40 rounded-full bg-primary/20 blur-3xl" />
            <div className="absolute -bottom-20 -right-20 h-40 w-40 rounded-full bg-accent/20 blur-3xl" />
          </div>
        </div>
      </div>
    </section>
  );
};
