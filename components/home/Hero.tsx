import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";

export function Hero() {
  return (
    <section className="relative w-full h-[600px] md:h-[700px] flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&q=80"
          alt="Happy family moving"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/40 md:bg-black/30" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 text-center text-white">
        <h2 className="text-xl md:text-2xl font-medium mb-4 tracking-wide uppercase text-[var(--color-apricot-cream-light)]">
          Stress-free moving
        </h2>
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-8 leading-tight max-w-4xl mx-auto drop-shadow-lg">
          We'll Beat Any Competitor's Price by <span className="text-[var(--color-tomato)]">20%</span>.
        </h1>
        <Button 
          asChild 
          size="lg" 
          className="bg-[var(--color-tomato)] hover:bg-[var(--color-tomato)]/90 text-white text-lg px-8 py-6 h-auto rounded-full shadow-xl transition-transform hover:scale-105"
        >
          <Link href="/schedule">Schedule the Move Now</Link>
        </Button>
      </div>
    </section>
  );
}
