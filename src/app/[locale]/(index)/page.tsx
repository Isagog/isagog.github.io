import { Button } from "@/app/_components/ui/button";
import { getScopedI18n } from "@/packages/locales/server";
import Link from "next/link";
import {
  AnimateImage,
  Hero,
  Highlight,
  KnowledgeCarousel,
  NavWithDescriptionSection,
} from "./components";

const HomePage = async () => {
  const t = await getScopedI18n("home-page.knowledge");
  const tNav = await getScopedI18n("home-page.navigation");
  const tTextSection = await getScopedI18n("home-page.text-section");
  const tIntroHighlight = await getScopedI18n("home-page.intro-highlight");

  const data = [
    {
      title: t("1.title"),
      subtitle: t("1.subtitle"),
      description: t("1.description"),
      firstParagraph: tTextSection("1.firstParagraph"),
      secondParagraph: tTextSection("1.secondParagraph"),
      thirdParagraph: tTextSection("1.thirdParagraph"),
    },
    {
      title: t("2.title"),
      subtitle: t("2.subtitle"),
      description: t("2.description"),
      firstParagraph: tTextSection("2.firstParagraph"),
      secondParagraph: tTextSection("2.secondParagraph"),
      thirdParagraph: tTextSection("2.thirdParagraph"),
    },
    {
      title: t("3.title"),
      subtitle: t("3.subtitle"),
      description: t("3.description"),
      firstParagraph: tTextSection("3.firstParagraph"),
      secondParagraph: tTextSection("3.secondParagraph"),
      thirdParagraph: tTextSection("3.thirdParagraph"),
    },
  ];

  return (
    <main className="flex min-h-screen flex-col justify-center items-center relative isolate mx-3">
      <Hero />
      <KnowledgeCarousel data={data} />
      <div className="w-full flex flex-col justify-evenly min-h-screen">
        <NavWithDescriptionSection
          title={tNav("about.title")}
          description={tNav("about.description")}
          href="/about"
        />
        <NavWithDescriptionSection
          title={tNav("solution.title")}
          description={tNav("solution.description")}
          href="/informs"
        />
        <NavWithDescriptionSection
          title={tNav("project.title")}
          description={tNav("project.description")}
          href="/project"
        />
        <NavWithDescriptionSection
          title={tNav("blog.title")}
          description={tNav("blog.description")}
          href="/blog"
        />
      </div>
      <div
        className="relative w-full bg-[#3a5e32] bg-cover bg-center text-center text-[#86efac] py-24 px-6 mt-12"
        style={{
          backgroundImage: "url('/images/tree.avif')",
          backgroundBlendMode: "multiply",
        }}
      >
        <div className="max-w-3xl mx-auto space-y-6">
          <p className="uppercase tracking-widest text-lg font-light">
            {tIntroHighlight("title")}
            <br />
            {tIntroHighlight("description")}
          </p>
          <p className="uppercase tracking-wide text-xl font-semibold">
            {tIntroHighlight("subtitle")}
          </p>
          <div className="pt-6">
            <Link href="https://cal.com/isagog" target="_blank" prefetch>
              <Button
                variant="ghost"
                className="uppercase border-b border-[#86efac] rounded-none text-[#86efac] hover:bg-transparent hover:underline cursor-pointer"
              >
                {tIntroHighlight("button")}
              </Button>
            </Link>
          </div>
        </div>
      </div>
      <Highlight />
      <AnimateImage />
    </main>
  );
};

export default HomePage;
