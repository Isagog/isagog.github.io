import { getScopedI18n, setStaticParamsLocale } from "@/packages/locales/server";
import { ImageWithTitle } from "./components/image-with-title";
import { TextCarousel } from "./components/text-carousel";

const PlatformPage = async ({
  params,
}: {
  params: Promise<{ locale: string }>;
}) => {
  const { locale } = await params;
  setStaticParamsLocale(locale);

  const tHero = await getScopedI18n("platform-page.hero");
  const tImageWithTitle = await getScopedI18n(
    "platform-page.image-with-title"
  );

  return (
    <div className="flex items-center flex-col gap-8 justify-center">
      <section className="flex flex-col items-center text-center gap-8 mt-24 sm:mx-[10%]">
        <h1 className="text-3xl font-sans font-[400]">{tHero("title")}</h1>
        <p className="text-2xl font-serif font-[300]">
          {tHero("description")}
        </p>
      </section>
      <TextCarousel />
      <ImageWithTitle
        title={tImageWithTitle("1.title")}
        imageUrl="/images/service-images/mermaid-graph.svg"
      />
      <ImageWithTitle
        title={tImageWithTitle("2.title")}
        imageUrl="/images/service-images/mermaid-diagrame.avif"
      />
    </div>
  );
};
export default PlatformPage;
