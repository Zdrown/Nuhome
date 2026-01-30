import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";

export function MoveYourWay() {
  return (
    <section className="py-20 px-6 bg-white">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
        {/* Image */}
        <div className="relative h-[400px] md:h-[500px] rounded-2xl overflow-hidden shadow-2xl order-1">
          <Image
            src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80"
            alt="Moving supplies and boxes"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-60" />
        </div>

        {/* Content */}
        <div className="order-2 space-y-8">
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 leading-tight">
            Move the Way <span className="text-[var(--color-tomato)]">You Want To</span>
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed">
            Leave your home exactly the way it is and we can pack up everything for you, or simply pack up and we can take it from there. Either way, we can provide boxes and any moving materials needed.
          </p>
          
          <div className="space-y-4">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-full bg-[var(--color-apricot-cream-light)] flex items-center justify-center flex-shrink-0 text-[var(--color-tomato)] font-bold text-xl">
                1
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900">Full Service Packing</h3>
                <p className="text-gray-600">We handle everything from wrapping to boxing.</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-full bg-[var(--color-apricot-cream-light)] flex items-center justify-center flex-shrink-0 text-[var(--color-tomato)] font-bold text-xl">
                2
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900">You Pack, We Move</h3>
                <p className="text-gray-600">You box it up, we do the heavy lifting.</p>
              </div>
            </div>
          </div>

          <Button asChild size="lg" className="bg-[var(--color-tomato)] hover:bg-[var(--color-tomato)]/90 text-white px-8 py-6 h-auto text-lg shadow-lg transition-transform hover:scale-105">
            <Link href="/schedule">Schedule Now</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
