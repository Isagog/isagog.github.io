import {
  KnowledgeCard,
  TextSection,
  Hero,
  NavWithDescriptionSection,
  Highlight,
  AnimateImage,
} from "@/app/_components/custom";
import { getScopedI18n } from "@/packages/locales/server";
import Link from "next/link";
import { Button } from "../_components/ui/button";

export default async function Home() {
  const t = await getScopedI18n("home-page.knowledge");
  const tNav = await getScopedI18n("home-page.navigation");
  const tTextSection = await getScopedI18n("home-page.text-section");
  const tIntroHighlight = await getScopedI18n("home-page.intro-highlight");

  const data = [
    {
      title: t("1.title"),
      subtitle: t("1.subtitle"),
      description: t("1.description"),
    },
    {
      title: t("2.title"),
      subtitle: t("2.subtitle"),
      description: t("2.description"),
    },
    {
      title: t("3.title"),
      subtitle: t("3.subtitle"),
      description: t("3.description"),
    },
  ];

  return (
    <main className="flex min-h-screen flex-col justify-center items-center relative isolate">
      <Hero />
      <div className="w-full flex justify-center items-center gap-4 mt-12">
        {data.map((item) => (
          <KnowledgeCard key={item.title} {...item} />
        ))}
      </div>
      <div className="w-full flex justify-center items-center gap-4 mt-12 animate-fade-in-up">
        <TextSection
          firstParagraph={tTextSection("1.firstParagraph")}
          secondParagraph={tTextSection("1.secondParagraph")}
          thirdParagraph={tTextSection("1.thirdParagraph")}
        />
        <TextSection
          firstParagraph={tTextSection("2.firstParagraph")}
          secondParagraph={tTextSection("2.secondParagraph")}
          thirdParagraph={tTextSection("2.thirdParagraph")}
        />
        <TextSection
          firstParagraph={tTextSection("3.firstParagraph")}
          secondParagraph={tTextSection("3.secondParagraph")}
          thirdParagraph={tTextSection("3.thirdParagraph")}
        />
      </div>
      <div className="w-full flex flex-col gap-4 mt-12">
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
      <section
        className="relative w-full bg-[#3a5e32] bg-cover bg-center text-center text-[#86efac] py-24 px-6 mt-12"
        style={{
          backgroundImage: "url('/image/tree.avif')",
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
      </section>
      <Highlight />
      <AnimateImage />
    </main>
  );
}
