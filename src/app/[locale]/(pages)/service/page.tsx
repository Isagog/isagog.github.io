import { Button } from "@/app/_components/ui/button";
import { getScopedI18n } from "@/packages/locales/server";
import Link from "next/link";
import { ImageWithDescription } from "./components/image-with-description";
import { ImageWithTitle } from "./components/image-with-title";
import { TextCarousel } from "./components/text-carousel";

const ServicePage = async () => {
  const tImageWithDescription = await getScopedI18n(
    "service-page.image-with-description"
  );
  const tImageWithTitle = await getScopedI18n("service-page.image-with-title");
  const tWhyUs = await getScopedI18n("service-page.why-us");

  return (
    <div className="flex items-center flex-col gap-8 justify-center">
      <ImageWithDescription
        title={tImageWithDescription("1.title")}
        firstParagraph={tImageWithDescription("1.firstParagraph")}
        secondParagraph={tImageWithDescription("1.secondParagraph")}
        thirdParagraph={tImageWithDescription("1.thirdParagraph")}
        imageUrl="/images/service-images/tree.avif"
        imgClassName="w-1/2 h-80 object-contain"
        className="mt-16"
      />
      <ImageWithDescription
        title={tImageWithDescription("2.title")}
        firstParagraph={tImageWithDescription("2.firstParagraph")}
        secondParagraph={tImageWithDescription("2.secondParagraph")}
        imagePosition="right"
        imageUrl="/images/service-images/fruits.avif"
      />
      <ImageWithDescription
        title={tImageWithDescription("3.title")}
        firstParagraph={tImageWithDescription("3.firstParagraph")}
        secondParagraph={tImageWithDescription("3.secondParagraph")}
        thirdParagraph={tImageWithDescription("3.thirdParagraph")}
        imageUrl="/images/service-images/lolipop.avif"
        imgClassName="h-44 object-contain"
      />
      <ImageWithDescription
        title={tImageWithDescription("4.title")}
        firstParagraph={tImageWithDescription("4.firstParagraph")}
        secondParagraph={tImageWithDescription("4.secondParagraph")}
        thirdParagraph={tImageWithDescription("4.thirdParagraph")}
        imagePosition="right"
        imageUrl="/images/service-images/mogul.avif"
        imgClassName="h-64 object-contain"
      />
      <section className="flex flex-col items-center mx-[10%] space-y-16  justify-center h-[450px]">
        <h2 className="text-2xl font-sans font-normal">{tWhyUs("title")}</h2>
        <p className="text-center font-normal text-2xl">
          {tWhyUs("description")}
        </p>
        <Link href="https://cal.com/isagog" target="_blank" prefetch>
          <Button
            variant="ghost"
            className="uppercase border-t font-sans border-[#86efac] rounded-none text-[#86efac] hover:bg-transparent hover:underline cursor-pointer"
          >
            {tWhyUs("linkLabel")}
          </Button>
        </Link>
      </section>
      <ImageWithTitle
        title="Architettura della piattaforma neuro-simbolica"
        imageUrl="/images/service-images/mermaid-graph.svg"
      />
      <ImageWithTitle
        title={tImageWithTitle("2.title")}
        imageUrl="/images/service-images/mermaid-diagrame.avif"
      />
      <TextCarousel />
    </div>
  );
};
export default ServicePage;
