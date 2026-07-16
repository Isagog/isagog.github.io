import { SectionTitle } from "@/app/_components/custom/section-title";
import { TextSection } from "./text-section";

export type KnowledgeCardProps = {
  title: string;
  subtitle: string;
  description: string;
  firstParagraph: string;
  secondParagraph: string;
  thirdParagraph: string;
  linkToExample?: string;
};

export const KnowledgeCard = ({
  title,
  subtitle,
  description,
  firstParagraph,
  secondParagraph,
  thirdParagraph,
  linkToExample,
}: KnowledgeCardProps) => {
  return (
    <div className="gap-8 flex w-[260px] sm:w-[300px] md:w-96 flex-col bg-transparent border-none text-center text-primary">
      <SectionTitle as="h2" className="text-4xl mb-1">
        {title}
      </SectionTitle>
      <p className="text-lg font-serif font-[500]">{subtitle}</p>
      <div className="bg-sage text-paper text uppercase py-8 px-8 font-sans font-[500]">
        {description.split("\n").map((line, i) => (
          <p key={i}>{line}</p>
        ))}
      </div>
      <TextSection
        firstParagraph={firstParagraph}
        secondParagraph={secondParagraph}
        thirdParagraph={thirdParagraph}
        linkToExample={linkToExample}
      />
    </div>
  );
};
