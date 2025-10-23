import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { ChromeExtensionDemo } from "@/components/ChromeExtensionDemo";
import { Features } from "@/components/Features";
import { CTA } from "@/components/CTA";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <>
      {/* React 19: Document metadata rendered directly in components */}
      <title>Toklens - All-in-One Platform for TikTok Growth</title>
      <meta name="description" content="Create smarter, optimize faster. Get trending insights, engagement metrics, virality scores and more. Trusted by 100,000+ TikTok creators." />

      <div className="min-h-screen">
        <Navbar />
        <Hero />
        <ChromeExtensionDemo />
        <Features />
        <CTA />
        <Footer />
      </div>
    </>
  );
};

export default Index;
