import { SectionTitle } from "@/app/_components/custom/section-title";
import { getScopedI18n, setStaticParamsLocale } from "@/packages/locales/server";
import { TextCarousel } from "./components/text-carousel";

const PlatformPage = async ({
  params,
}: {
  params: Promise<{ locale: string }>;
}) => {
  const { locale } = await params;
  setStaticParamsLocale(locale);

  const tHero = await getScopedI18n("platform-page.hero");

  return (
    <div className="flex items-center flex-col gap-8 justify-center">
      <section className="flex flex-col items-center text-center gap-8 mt-24 sm:mx-[10%]">
        <SectionTitle as="h1" accent className="text-3xl font-[400]">
          {tHero("title")}
        </SectionTitle>
        <p className="text-2xl font-serif font-[300]">
          {tHero("description")}
        </p>
      </section>
      <TextCarousel />
      <iframe
        src={`/platform-explorer/${locale === "it" ? "it" : "en"}.html`}
        title={
          locale === "it"
            ? "Esplora la piattaforma Isagog"
            : "Explore the Isagog platform"
        }
        className="sm:block hidden w-full aspect-[1280/886] border-0"
      />
    </div>
  );
};
export default PlatformPage;
