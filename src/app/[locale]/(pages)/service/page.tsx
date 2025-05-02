import Link from "next/link";
import { ImageWithDescription } from "./components/image-with-description";
import { Button } from "@/app/_components/ui/button";
import { ImageWithTitle } from "./components/image-with-title";
import { TextCarousel } from "./components/text-carousel";

const ServicePage = () => {
  return (
    <div className="flex items-center flex-col gap-8 justify-center">
      <ImageWithDescription
        title="Accedi alla tua conoscenza"
        firstParagraph="Struttura i tuoi dati in un archivio intelligente. "
        secondParagraph="Ottieni una mappa dinamica dei tuoi dati e della tua conoscenza di settore."
        thirdParagraph="Trova nuovi significati e connessioni in grandi volumi di dati."
        imageUrl="/picturesService/tree.avif"
      />
      <ImageWithDescription
        title="Produci contenuti"
        firstParagraph="Automatizza sintesi o report conformi agli  standard della tua azienda."
        secondParagraph="Genera nuove narrazioni e nuovi modi per raccontare la tua impresa. "
        imagePosition="right"
        imageUrl="/picturesService/fruits.avif"
      />
      <ImageWithDescription
        title="Personalizza la tua offerta"
        firstParagraph="Immagina nuove personalizzazioni per ogni utente."
        secondParagraph="Comunica in linguaggio naturale con il tuo pubblico. "
        thirdParagraph="Costruisci un'offerta mirata."
        imageUrl="/picturesService/lolipop.avif"
      />
      <ImageWithDescription
        title="Costruisci la tua comunità"
        firstParagraph="Interagisci con i tuoi utenti tramite agenti AI."
        secondParagraph="Coinvolgi gli utenti grazie ad una ricca conoscenza di settore e fluide interazioni con l'AI. "
        thirdParagraph="Monitora soddisfazione e richieste emergenti."
        imagePosition="right"
        imageUrl="/picturesService/mogul.avif"
      />
      <section className="flex flex-col gap-4 items-center justify-center h-96">
        <h2 className="text-2xl font-bold">PERCHÈ ISAGOG?</h2>
        <p className="text-center">
          Le nostre soluzioni si basano su una piattaforma aperta di AI neuro-
          <br />
          simbolica, che unisce creatività e logica per offrire risultati più
          <br />
          affidabili e intelligenti.
        </p>
        <Link href="https://cal.com/isagog" target="_blank" prefetch>
          <Button
            variant="ghost"
            className="uppercase border-t border-[#86efac] rounded-none text-[#86efac] hover:bg-transparent hover:underline cursor-pointer"
          >
            PRENOTA UNA DEMO
          </Button>
        </Link>
      </section>
      <ImageWithTitle
        title="Architettura della piattaforma neuro-simbolica"
        imageUrl="/picturesService/mermaid.avif"
      />
      <ImageWithTitle
        title="Pipeline di estrazione"
        imageUrl="/picturesService/mermaid-diagrame.avif"
      />
      <TextCarousel />
    </div>
  );
};
export default ServicePage;
