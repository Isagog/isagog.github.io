"use client";
import { Button } from "@/app/_components/ui/button";
import { useEffect, useRef, useState } from "react";
import type { KnowledgeCardProps } from ".";
import { KnowledgeCard } from ".";

type KnowledgeCarouselProps = {
  data: KnowledgeCardProps[];
};

export const KnowledgeCarousel = ({ data }: KnowledgeCarouselProps) => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const [canScrollPrev, setCanScrollPrev] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(false);

  const updateScrollButtons = () => {
    const container = scrollRef.current;
    if (!container) return;

    const { scrollLeft, scrollWidth, clientWidth } = container;

    const maxScrollLeft = scrollWidth - clientWidth;

    setCanScrollPrev(scrollLeft > 0);
    setCanScrollNext(scrollLeft < maxScrollLeft - 5);
  };

  useEffect(() => {
    const container = scrollRef.current;
    if (!container) return;

    updateScrollButtons();

    container.addEventListener("scroll", updateScrollButtons);
    window.addEventListener("resize", updateScrollButtons);

    return () => {
      container.removeEventListener("scroll", updateScrollButtons);
      window.removeEventListener("resize", updateScrollButtons);
    };
  }, []);

  const scrollTo = (direction: "next" | "prev") => {
    const container = scrollRef.current;
    if (!container) return;

    const cardWidth = container.firstElementChild?.clientWidth || 0;
    const scrollAmount =
      direction === "next" ? cardWidth + 26 : -(cardWidth + 26);

    container.scrollBy({ left: scrollAmount, behavior: "smooth" });

    setTimeout(updateScrollButtons, 300);
  };

  return (
    <div className="w-full sm:max-w-6/7 flex flex-col items-center gap-4 px-4 overflow-hidden">
      <div className="xl:hidden w-full flex items-center gap-2 justify-center relative">
        {canScrollPrev && (
          <Button
            onClick={() => scrollTo("prev")}
            className="absolute left-0 top-60 z-10 rounded-full h-8 w-8 flex items-center justify-center opacity-50"
          >
            ←
          </Button>
        )}
        <div
          ref={scrollRef}
          className={`flex overflow-x-auto snap-x snap-mandatory gap-12 sm:gap-32 scrollbar-hide px-4`}
        >
          {data.map((item, index) => (
            <div
              key={item.title}
              className={`shrink-0 snap-center ${index === 0 && "pl-4"} ${
                index === data.length - 1 && "mr-8"
              }`}
            >
              <KnowledgeCard {...item} />
            </div>
          ))}
        </div>
        {canScrollNext && (
          <Button
            onClick={() => scrollTo("next")}
            className="absolute right-0 top-60 z-10 rounded-full h-8 w-8 flex items-center justify-center opacity-50"
          >
            →
          </Button>
        )}
      </div>
      <div className="hidden xl:flex justify-center items-center gap-4">
        {data.map((item) => (
          <KnowledgeCard key={item.title} {...item} />
        ))}
      </div>
    </div>
  );
};
