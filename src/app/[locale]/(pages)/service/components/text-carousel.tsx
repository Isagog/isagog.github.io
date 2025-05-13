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
      <div className="relative h-full sm:w-2/3 w-full mx-5 flex items-center justify-center ">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute top-8 sm:top-0 left-0 w-full h-full transition-opacity duration-500 ease-in-out sm:p-8 ${
              currentSlide === index
                ? "opacity-100"
                : "opacity-0 pointer-events-none"
            }`}
          >
            <div className="md:space-y-6">
              <div>
                <h2 className="text-[#A8FA87] text-xl font-sans font-[500] text-start">
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
