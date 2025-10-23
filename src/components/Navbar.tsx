import { Button } from "@/components/ui/button";

export const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-b from-background/60 to-transparent backdrop-blur-sm">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary to-accent flex items-center justify-center">
            <span className="text-white font-bold text-lg">T</span>
          </div>
          <span className="text-xl font-bold text-foreground">Toklens</span>
        </div>

        <div className="flex items-center gap-3">
          <Button variant="ghost">Login</Button>
          <Button className="bg-gradient-to-r from-primary to-accent hover:opacity-90">
            Install for FREE
          </Button>
        </div>
      </div>
    </nav>
  );
};
