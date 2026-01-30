import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Star } from "lucide-react";

const reviews = [
  {
    id: 1,
    name: "Sarah M.",
    rating: 5,
    text: "NuHome Movers made our move so easy! They were professional, fast, and handled everything with care. Highly recommended!",
  },
  {
    id: 2,
    name: "James P.",
    rating: 5,
    text: "Best moving company I've ever used. The team was friendly and efficient. They beat the competitor's price just like they promised.",
  },
  {
    id: 3,
    name: "Emily R.",
    rating: 5,
    text: "I was stressed about moving, but NuHome took all the worry away. Great communication and excellent service.",
  },
  {
    id: 4,
    name: "Michael T.",
    rating: 5,
    text: "Professional, punctual, and polite. They packed everything securely and nothing was damaged. 10/10 service.",
  },
];

export function Reviews() {
  return (
    <section className="py-20 px-6 bg-[var(--color-pale-sky)]/30">
      <div className="container mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900">
          What Our Customers Say
        </h2>
        
        <div className="max-w-5xl mx-auto px-4 md:px-12">
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent className="-ml-4">
              {reviews.map((review) => (
                <CarouselItem key={review.id} className="pl-4 md:basis-1/2 lg:basis-1/3">
                  <div className="h-full">
                    <Card className="border-none shadow-lg h-full bg-white">
                      <CardContent className="flex flex-col items-start p-8 h-full">
                        <div className="flex mb-4 space-x-1">
                          {[...Array(5)].map((_, i) => (
                            <Star
                              key={i}
                              className={`w-4 h-4 ${
                                i < review.rating
                                  ? "text-[var(--color-tomato)] fill-[var(--color-tomato)]"
                                  : "text-gray-300"
                              }`}
                            />
                          ))}
                        </div>
                        <p className="text-gray-600 mb-6 flex-grow leading-relaxed">"{review.text}"</p>
                        <div className="mt-auto pt-4 border-t border-gray-100 w-full">
                          <p className="font-bold text-gray-900">{review.name}</p>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="hidden md:flex -left-12 bg-white border-gray-200 text-gray-700 hover:bg-[var(--color-tomato)] hover:text-white hover:border-[var(--color-tomato)]" />
            <CarouselNext className="hidden md:flex -right-12 bg-white border-gray-200 text-gray-700 hover:bg-[var(--color-tomato)] hover:text-white hover:border-[var(--color-tomato)]" />
          </Carousel>
        </div>
      </div>
    </section>
  );
}
