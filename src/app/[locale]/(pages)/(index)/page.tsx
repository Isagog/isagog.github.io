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
      linkToExample: tTextSection("3.linkToExample"),
    },
  ];

  return (
    <main className="flex min-h-screen flex-col justify-center items-center relative isolate ">
      <Hero />
      <KnowledgeCarousel data={data} />
      <div className="w-full flex flex-col justify-evenly  my-18 mx-5 sm:mx-auto sm:max-w-2/3">
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
        className="relative w-full bg-[#3a5e32] flex flex-col justify-center items-center  bg-cover bg-center text-center text-[#a8fa87] h-[498px] mt-12"
        style={{
          backgroundImage: "url('/images/tree.webp')",
          backgroundBlendMode: "multiply",
        }}
      >
        <div className="space-y-6 flex flex-col justify-center items-center">
          <p className="uppercase tracking-widests text-[22px] font-sans font-[400] leading-12">
            {tIntroHighlight("title")}
            <br />
            {tIntroHighlight("description")}
          </p>
          <p className="uppercase tracking-wide text-[22px] font-sans font-[400]">
            {tIntroHighlight("subtitle")}
          </p>
          <div className="border-t border-[#a8fa87]">
            <Link
              href="https://cal.com/isagog"
              target="_blank"
              className="inline-block pt-2 uppercase text-[15px] rounded-none text-[#a8fa87] hover:bg-transparent cursor-pointer transition-transform duration-300 ease-in-out transform hover:scale-105 hover:shadow-[0_6px_6px_-2px_#223319]"
            >
              {tIntroHighlight("button")}
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
