"use client";

import { useScopedI18n } from "@/packages/locales/client";
import { Check } from "lucide-react";
import { useEffect, useRef, useState } from "react";

export const TextCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [height, setHeight] = useState<number>();
  const activeSlideRef = useRef<HTMLDivElement>(null);
  const t = useScopedI18n("platform-page.text-carousel");

  // Track the active slide's own height so the section never reserves room for
  // the longest one; ResizeObserver also covers rewraps on resize/font load.
  useEffect(() => {
    const slide = activeSlideRef.current;
    if (!slide) return;

    const measure = () => setHeight(slide.getBoundingClientRect().height);
    measure();

    const observer = new ResizeObserver(measure);
    observer.observe(slide);
    return () => observer.disconnect();
  }, [currentSlide]);

  const slides = [
    {
      title: t("1.title"),
      subtitle: t("1.subtitle"),
      points: [
        `${t("1.points.1")}`,
        `${t("1.points.2")}`,
        `${t("1.points.3")}`,
      ],
    },
    {
      title: t("2.title"),
      subtitle: t("2.subtitle"),
      points: [
        `${t("2.points.1")}`,
        `${t("2.points.2")}`,
        `${t("2.points.3")}`,
      ],
    },
    {
      title: t("3.title"),
      subtitle: t("3.subtitle"),
      points: [
        `${t("3.points.1")}`,
        `${t("3.points.2")}`,
        `${t("3.points.3")}`,
        `${t("3.points.4")}`,
      ],
    },
  ];

  return (
    <div className="relative w-[100%] bg-transparent  flex items-center justify-center">
      <div
        className="relative sm:w-2/3 w-full mx-5 overflow-hidden transition-[height] duration-500 ease-in-out"
        style={{ height }}
      >
        {slides.map((slide, index) => (
          <div
            key={index}
            ref={currentSlide === index ? activeSlideRef : undefined}
            className={`w-full pt-8 sm:p-8 transition-opacity duration-500 ease-in-out ${
              currentSlide === index
                ? "relative opacity-100"
                : "absolute inset-x-0 top-0 opacity-0 pointer-events-none"
            }`}
          >
            <div className="md:space-y-6">
              <div>
                <h2 className="text-terracotta text-xl font-sans font-[500] text-start">
                  {slide.title}
                </h2>
                <h3 className="text-2xl text-start font-serif md:mt-2">
                  {slide.subtitle}
                </h3>
              </div>

              <ul className="md:space-y-6 space-y-4 md:pl-8">
                {slide.points.map((point, idx) => (
                  <li key={idx} className="flex items-start">
                    {index === slides.length - 1 && (
                      <span className="mr-2 mt-1">
                        <Check size={20} />
                      </span>
                    )}
                    <p className="text-lg font-sans font-[300]">{point}</p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
        <div className="absolute top-1 right-0  sm:space-x-2 space-x-6">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full transition-colors cursor-pointer hover:bg-forest/60 ${
                currentSlide === index ? "bg-forest" : "bg-forest/25"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
