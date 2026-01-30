import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export function Experience() {
  return (
    <section className="py-20 px-6 bg-white">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Text Content */}
        <div className="order-2 md:order-1 space-y-6">
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 leading-tight">
            Safe, Expert Moving with <span className="text-[var(--color-tomato)]">7+ Years</span> of Experience
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed">
            We've been moving people's beloved possessions to their new home with care and precision. Our team of professionals ensures that every item, from the smallest trinket to the largest furniture, arrives safely.
          </p>
          <Button asChild variant="outline" className="group border-[var(--color-tomato)] text-[var(--color-tomato)] hover:bg-[var(--color-tomato)] hover:text-white">
            <Link href="/schedule" className="flex items-center gap-2">
              Get a Quote <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </Button>
        </div>

        {/* Image */}
        <div className="order-1 md:order-2 relative h-[400px] rounded-2xl overflow-hidden shadow-2xl">
          <Image
            src="https://images.unsplash.com/photo-1600585152220-90363fe7e115?auto=format&fit=crop&q=80"
            alt="Professional movers carrying boxes"
            fill
            className="object-cover"
          />
        </div>
      </div>
    </section>
  );
}
