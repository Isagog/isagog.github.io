"use client";
import { useRef } from "react";
import type { KnowledgeCardProps } from "./card-knowledge";
import { KnowledgeCard } from "./card-knowledge";
import { Button } from "../ui/button";

type KnowledgeCarouselProps = {
  data: KnowledgeCardProps[];
};

export const KnowledgeCarousel = ({ data }: KnowledgeCarouselProps) => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scrollTo = (direction: "next" | "prev") => {
    const container = scrollRef.current;
    if (!container) return;

    const cardWidth = container.firstElementChild?.clientWidth || 0;
    const scrollAmount =
      direction === "next" ? cardWidth + 26 : -(cardWidth + 26);
    container.scrollBy({ left: scrollAmount, behavior: "smooth" });
  };

  return (
    <div className="w-full min-h-screen flex flex-col items-center gap-4 px-4">
      <div className="xl:hidden w-full flex items-center gap-2 justify-center relative">
        <Button
          onClick={() => scrollTo("prev")}
          className="absolute left-0 top-60 z-10 rounded-full h-8 w-8 flex items-center justify-center opacity-50"
        >
          ←
        </Button>
        <div
          ref={scrollRef}
          className="flex overflow-x-auto snap-x snap-mandatory gap-4 scrollbar-hide px-4"
        >
          {data.map((item) => (
            <KnowledgeCard key={item.title} {...item} />
          ))}
        </div>
        <Button
          onClick={() => scrollTo("next")}
          className="absolute right-0 top-60 z-10 rounded-full h-8 w-8 flex items-center justify-center opacity-50"
        >
          →
        </Button>
      </div>
      <div className="hidden xl:flex justify-center items-center gap-4">
        {data.map((item) => (
          <KnowledgeCard key={item.title} {...item} />
        ))}
      </div>
    </div>
  );
};
