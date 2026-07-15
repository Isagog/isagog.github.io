import { Button } from "@/app/_components/ui/button";
import { getScopedI18n, setStaticParamsLocale } from "@/packages/locales/server";
import Link from "next/link";
import { ImageWithDescription } from "./components/image-with-description";

const ServicePage = async ({
  params,
}: {
  params: Promise<{ locale: string }>;
}) => {
  const { locale } = await params;
  setStaticParamsLocale(locale);

  const tIntro = await getScopedI18n("service-page.intro");
  const tImageWithDescription = await getScopedI18n(
    "service-page.image-with-description"
  );
  const tWhyUs = await getScopedI18n("service-page.why-us");

  return (
    <div className="flex items-center flex-col gap-8 justify-center">
      <section className="flex flex-col items-center text-center gap-8 mt-24 sm:mx-[10%]">
        <h1 className="text-3xl font-sans font-[400]">{tIntro("title")}</h1>
        <p className="text-2xl font-serif font-[300]">
          {tIntro("description")}
        </p>
      </section>
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
      <ImageWithDescription
        title={tImageWithDescription("5.title")}
        firstParagraph={tImageWithDescription("5.firstParagraph")}
        secondParagraph={tImageWithDescription("5.secondParagraph")}
        thirdParagraph={tImageWithDescription("5.thirdParagraph")}
        imageUrl="/images/trees.avif"
        imgClassName="w-1/2 h-80 object-contain"
      />
      <section className="flex flex-col items-center mx-[10%] space-y-16  justify-center h-[450px]">
        <h2 className="text-2xl font-sans font-[400]">{tWhyUs("title")}</h2>
        <p className="text-center font-[400] text-2xl">
          {tWhyUs("description")}
        </p>
        <Link href="https://cal.com/isagog" target="_blank" prefetch>
          <Button
            variant="ghost"
            className="uppercase border-t font-sans border-[#a8fa87] rounded-none text-[#a8fa87] hover:bg-transparent hover:underline cursor-pointer"
          >
            {tWhyUs("linkLabel")}
          </Button>
        </Link>
      </section>
    </div>
  );
};
export default ServicePage;
