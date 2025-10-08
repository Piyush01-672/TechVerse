import React, { useRef } from "react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const GallerySlider = ({ galleryItems }) => {
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    const { current } = scrollRef;
    if (current) {
      const scrollAmount =
        direction === "left" ? -current.offsetWidth : current.offsetWidth;
      current.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 relative group">
        <button
          onClick={() => scroll("left")}
          className="absolute left-3 top-1/2 -translate-y-1/2 z-10 bg-primary text-white w-12 h-12 rounded-full shadow-lg flex items-center justify-center text-2xl font-bold opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        >
          <span className="relative -top-[1px]">&lt;</span>
        </button>

        <div
          ref={scrollRef}
          className="flex gap-6 overflow-x-auto scrollbar-hide snap-x snap-mandatory"
        >
          {galleryItems.map(
            (
              item
              // index // Added index here
            ) => (
              <div
                key={item.id}
                className="snap-center min-w-[550px] flex-shrink-0"
              >
                <Card
                  className="group/card relative overflow-hidden cursor-pointer animate-scale-in border-primary/20"
                  // style={{ animationDelay: `${index * 0.05}s` }}
                >
                  <div className="aspect-video bg-gradient-to-br from-primary/10 to-accent/10 relative overflow-hidden">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="absolute inset-0 w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-primary to-primary-glow group-hover/card:opacity-80 opacity-100 transition-opacity">
                      <div className="text-center text-white p-6">
                        <h3 className="text-2xl font-bold mb-2">
                          {item.title}
                        </h3>
                        <Badge variant="secondary" className="mb-2">
                          {item.category}
                        </Badge>
                        <p className="text-sm text-white/80">{item.date}</p>
                      </div>
                    </div>
                    <div className="absolute inset-0 bg-black/20 group-hover/card:opacity-0 opacity-100 transition-opacity" />
                  </div>
                  <div className="absolute inset-0 flex items-center justify-center bg-black/50 text-white text-sm p-4 opacity-0 group-hover/card:opacity-100 transition-opacity duration-500 delay-200">
                    <p className="text-center">
                      {item.description ||
                        "Event description will appear here on hover"}
                    </p>
                  </div>
                </Card>
              </div>
            )
          )}
        </div>

        <button
          onClick={() => scroll("right")}
          className="absolute right-3 top-1/2 -translate-y-1/2 z-10 bg-primary text-white w-12 h-12 rounded-full shadow-lg flex items-center justify-center text-2xl font-bold opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        >
          <span className="relative -top-[1px]">&gt;</span>
        </button>
      </div>
    </section>
  );
};

export default GallerySlider;
