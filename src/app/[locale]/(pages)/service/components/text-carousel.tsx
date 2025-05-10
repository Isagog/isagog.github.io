"use client";

import { useScopedI18n } from "@/packages/locales/client";
import { Check } from "lucide-react";
import { useState } from "react";

export const TextCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const t = useScopedI18n("service-page.text-carousel");

  const slides = [
    {
      title: t("1.title"),
      subtitle: t("1.subtitle"),
      points: [`${t("1.points.1")}`, `${t("1.points.2")}`],
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
      ],
    },
  ];

  return (
    <div className="relative w-[100%] xl:h-[450px] md:h-[70vh] h-[100vh] bg-transparent  flex items-center justify-center overflow-hidden">
      <div className="relative h-full w-full mx-[10%] flex items-center justify-center">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute top-0 left-0 w-full h-full transition-opacity duration-500 ease-in-out p-8 ${
              currentSlide === index
                ? "opacity-100"
                : "opacity-0 pointer-events-none"
            }`}
          >
            <div className="md:space-y-6 space-y-4">
              <div>
                <h2 className="text-[#A8FA87] text-xl font-sans font-normal text-start">
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
                    <p className="text-lg font-sans font-normal">{point}</p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
        <div className="absolute bottom-6 left-0 right-0 flex justify-center space-x-2">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full transition-colors cursor-pointer hover:bg-green-400 ${
                currentSlide === index ? "bg-white" : "bg-green-900"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
