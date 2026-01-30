import { Hero } from "@/components/home/Hero";
import { Experience } from "@/components/home/Experience";
import { Reviews } from "@/components/home/Reviews";
import { MoveYourWay } from "@/components/home/MoveYourWay";

export default function Home() {
  return (
    <div className="flex flex-col w-full">
      <Hero />
      <Experience />
      <Reviews />
      <MoveYourWay />
    </div>
  );
}
