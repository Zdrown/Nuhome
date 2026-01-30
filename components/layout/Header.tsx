import Link from "next/link";
import { Button } from "@/components/ui/button";

export function Header() {
  return (
    <header className="w-full py-4 px-6 flex items-center justify-between bg-white border-b border-gray-100 sticky top-0 z-50">
      <Link href="/" className="text-2xl font-bold text-gray-900 tracking-tight">
        NuHome Movers
      </Link>
      <Button asChild className="bg-[var(--color-tomato)] hover:bg-[var(--color-tomato)]/90 text-white font-semibold shadow-md transition-all hover:scale-105">
        <Link href="/schedule">Schedule Now</Link>
      </Button>
    </header>
  );
}
