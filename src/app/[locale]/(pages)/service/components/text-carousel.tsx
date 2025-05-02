"use client";

import { useState } from "react";
import { Check } from "lucide-react";

export const TextCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      title: "Cosa facciamo",
      subtitle:
        "Semplifichiamo l’accesso alle informazioni Trasformiamo archivi testuali in intelligenza chiara e immediatamente fruibile",
      points: [
        "Recuperiamo e organizziamo informazioni in modo intelligente.",
        "Rendiamo consultabile in tempo reale la memoria digitale della tua azienda.",
      ],
    },
    {
      title: "Come lo facciamo",
      subtitle:
        "Costruiamo una base di conoscenza con ragionamento neuro-simbolico su misura ",
      points: [
        "La nostra piattaforma integra LLM (reti neurali) con sistemi di ragionamento simbolico.",
        "Progettiamo interazioni fluide con l’AI, capace di comprendere il linguaggio naturale.",
        "Disegniamo per ogni progetto la conoscenza di settore e le regole logiche, grazie alle quali eliminare allucinazioni e ambiguità.",
      ],
    },
    {
      title: "Chi siamo",
      subtitle: "Al tuo servizio",
      points: [
        "Team di esperti con anni di esperienza nel settore.",
        "Tecnologia all'avanguardia per garantire risultati affidabili.",
        "Supporto dedicato per ogni tua necessità.",
      ],
    },
  ];

  return (
    <div className="relative w-[80%] h-96 bg-transparent text-white flex items-center justify-center rounded-lg overflow-hidden">
      <div className="relative h-full w-full flex items-center justify-center">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute top-0 left-0 w-full h-full transition-opacity duration-500 ease-in-out p-8 ${
              currentSlide === index
                ? "opacity-100"
                : "opacity-0 pointer-events-none"
            }`}
          >
            <div className="space-y-6">
              <div>
                <h2 className="text-green-400 text-xl text-center font-bold">
                  {slide.title}
                </h2>
                <h3 className="text-2xl text-center font-light mt-2">
                  {slide.subtitle}
                </h3>
              </div>

              <ul className="space-y-6 pl-8">
                {slide.points.map((point, idx) => (
                  <li key={idx} className="flex items-start">
                    {index === slides.length - 1 && (
                      <span className="mr-2 mt-1 text-green-400">
                        <Check size={20} />
                      </span>
                    )}
                    <p className="text-lg">{point}</p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>

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
  );
};
