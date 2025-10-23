import { useEffect, useRef, useState } from "react";
import { Flame, Heart, Eye, BarChart3, Calendar, MessageCircle, Share2, Bookmark } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";

type PerformanceType = "viral" | "trending" | "below";

const performanceBadges = {
  viral: {
    text: "🔥 Viral",
    className: "bg-gradient-viral text-white border-0"
  },
  trending: {
    text: "📈 Trending Up",
    className: "bg-success text-white border-0"
  },
  below: {
    text: "📉 Below Average",
    className: "bg-muted text-muted-foreground border-0"
  }
};

export const ChromeExtensionDemo = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [performance] = useState<PerformanceType>("viral");

  const videoRef = useRef(null);
  const observerRef = useRef(null);

  useEffect(() => {
    const videoEl = videoRef.current;
    if (!videoEl) return;

    // Prefer muted autoplay for cross-browser reliability
    videoEl.muted = true;
    videoEl.playsInline = true; // iOS Safari

    const handleIntersect = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const playPromise = videoEl.play();
          if (playPromise !== undefined) {
            playPromise.catch((err) => {
              // Silently ignore or log. Common reasons: autoplay blocked, not muted
              console.debug("Video play() failed:", err);
            });
          }
        } else {
          // pause when out of view
          videoEl.pause();
          // optional: reset to start
          // videoEl.currentTime = 0;
        }
      });
    };

    observerRef.current = new IntersectionObserver(handleIntersect, {
      root: null,
      rootMargin: "0px",
      threshold: 0.5, // play when 50% visible by default
    });

    observerRef.current.observe(videoEl);

    return () => {
      observerRef.current?.disconnect();
      // ensure video is paused
      try { videoEl.pause(); } catch (e) { }
    };
  }, []);

  return (
    <section className="relative py-24 bg-gradient-to-b from-card/30 to-background">
      <div className="container px-4">
        <div className="mx-auto max-w-7xl">
          {/* Section Header */}
          <div className="mb-12 text-center">
            <Badge className="mb-4 bg-accent/10 text-accent hover:bg-accent/20">
              Live Demo
            </Badge>
            <h2 className="mb-4 text-4xl font-bold tracking-tight sm:text-5xl">
              See It In Action
            </h2>
            <p className="text-xl text-muted-foreground">
              Hover over the video to reveal powerful analytics
            </p>
          </div>

          {/* Demo Container - TikTok Interface Mockup */}
          <div className="relative mx-auto max-w-4xl">
            {/* TikTok-style Interface */}
            <div className="relative overflow-hidden rounded-3xl border border-border/50 bg-black shadow-2xl">
              {/* Video Container */}
              <div
                className="relative mx-auto aspect-[9/16] max-w-md cursor-pointer"
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
              >
                {/* Video Thumbnail */}
                <video
                  ref={videoRef}
                  // controls
                  width="100%"
                  preload="metadata"
                >
                  <source src="/tik-video-demo.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>

                {/* Hover Glow Effect */}
                {isHovered && (
                  <div className="absolute inset-0 bg-primary/5 ring-2 ring-inset ring-primary/30" />
                )}

                {/* TikTok UI Elements - Right Side Actions */}
                <div className="absolute bottom-20 right-3 flex flex-col items-center gap-6">
                  <div className="flex flex-col items-center">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white/10 backdrop-blur-sm">
                      <Heart className="h-6 w-6 text-white" />
                    </div>
                    <span className="mt-1 text-xs font-semibold text-white">263.9K</span>
                  </div>

                  <div className="flex flex-col items-center">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white/10 backdrop-blur-sm">
                      <MessageCircle className="h-6 w-6 text-white" />
                    </div>
                    <span className="mt-1 text-xs font-semibold text-white">4126</span>
                  </div>

                  <div className="flex flex-col items-center">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white/10 backdrop-blur-sm">
                      <Bookmark className="h-6 w-6 text-white" />
                    </div>
                    <span className="mt-1 text-xs font-semibold text-white">19.6K</span>
                  </div>

                  <div className="flex flex-col items-center">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white/10 backdrop-blur-sm">
                      <Share2 className="h-6 w-6 text-white" />
                    </div>
                    <span className="mt-1 text-xs font-semibold text-white">4959</span>
                  </div>
                </div>

                {/* Video Info - Bottom Left */}
                <div className="absolute bottom-4 left-4 right-20">
                  <p className="mb-2 font-semibold text-white">@fitnesscreator</p>
                  <p className="text-sm text-white/90">Morning workout motivation 💪 #fitness #gym</p>
                </div>

                {/* Analytics Overlay Card - Top Right */}
                {isHovered && (
                  <Card
                    className="absolute right-3 top-3 z-10 w-56 animate-in fade-in-0 zoom-in-95 slide-in-from-top-2 border border-primary/20 p-3.5 backdrop-blur-xl duration-300"
                    style={{
                      borderRadius: "8px",
                      backgroundColor: "rgba(18, 18, 18, 0.95)"
                    }}
                  >
                    {/* Top Section - Performance Badge */}
                    <div className="mb-3 flex items-center justify-between">
                      <Badge className={performanceBadges[performance].className} style={{ fontSize: "10px", padding: "2px 8px" }}>
                        {performanceBadges[performance].text}
                      </Badge>
                      <span className="text-[10px] text-muted-foreground">3d ago</span>
                    </div>

                    {/* Middle Section - Metrics */}
                    <div className="space-y-2.5">
                      {/* Engagement Rate */}
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-1.5">
                          <Heart className="h-3 w-3 text-muted-foreground" />
                          <span className="text-[11px] text-muted-foreground">Engagement Rate</span>
                        </div>
                        <span className="text-xs font-bold text-foreground">12.5%</span>
                      </div>

                      {/* View-to-Like Ratio */}
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-1.5">
                          <Eye className="h-3 w-3 text-muted-foreground" />
                          <span className="text-[11px] text-muted-foreground">View-to-Like</span>
                        </div>
                        <span className="text-xs font-bold text-foreground">8:1</span>
                      </div>

                      {/* Virality Score */}
                      <div className="pt-1">
                        <div className="mb-1.5 flex items-center justify-between">
                          <div className="flex items-center gap-1.5">
                            <BarChart3 className="h-3 w-3 text-muted-foreground" />
                            <span className="text-[11px] text-muted-foreground">Virality Score</span>
                          </div>
                          <span className="text-xs font-bold text-primary">8/10</span>
                        </div>
                        <Progress value={80} className="h-1.5 bg-muted/50" />
                      </div>
                    </div>

                    {/* Footer Section - Post Date */}
                    <div className="mt-3 flex items-center gap-1.5 border-t border-border/30 pt-2.5">
                      <Calendar className="h-2.5 w-2.5 text-muted-foreground" />
                      <span className="text-[9px] text-muted-foreground">
                        Posted: 3 days ago
                      </span>
                    </div>
                  </Card>
                )}
              </div>

              {/* Hover Instruction */}
              {!isHovered && (
                <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 animate-pulse">
                  <div className="rounded-full border-2 border-primary/40 bg-background/95 px-8 py-4 backdrop-blur-sm">
                    <p className="text-base font-semibold text-primary">
                      👆 Hover over the video
                    </p>
                  </div>
                </div>
              )}
            </div>

            {/* Feature Callouts */}
            <div className="mt-12 grid gap-4 md:grid-cols-3">
              <div className="flex items-start gap-3 rounded-lg border border-border/50 bg-card/50 p-4">
                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary/10">
                  <Eye className="h-4 w-4 text-primary" />
                </div>
                <div>
                  <h4 className="mb-1 text-sm font-semibold">Non-Intrusive</h4>
                  <p className="text-xs text-muted-foreground">
                    Only appears on hover, never blocks content
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3 rounded-lg border border-border/50 bg-card/50 p-4">
                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-success/10">
                  <BarChart3 className="h-4 w-4 text-success" />
                </div>
                <div>
                  <h4 className="mb-1 text-sm font-semibold">Instant Insights</h4>
                  <p className="text-xs text-muted-foreground">
                    All metrics calculated in real-time
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3 rounded-lg border border-border/50 bg-card/50 p-4">
                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-accent/10">
                  <Flame className="h-4 w-4 text-accent" />
                </div>
                <div>
                  <h4 className="mb-1 text-sm font-semibold">Smart Analysis</h4>
                  <p className="text-xs text-muted-foreground">
                    AI-powered performance classification
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
