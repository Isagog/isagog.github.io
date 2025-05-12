import { TextSection } from "./text-section";

export type KnowledgeCardProps = {
  title: string;
  subtitle: string;
  description: string;
  firstParagraph: string;
  secondParagraph: string;
  thirdParagraph: string;
};

export const KnowledgeCard = ({
  title,
  subtitle,
  description,
  firstParagraph,
  secondParagraph,
  thirdParagraph,
}: KnowledgeCardProps) => {
  return (
    <div className="gap-8 flex w-94 flex-col bg-transparent border-none text-center text-primary">
      <h2 className="text-4xl font-serif mb-1">{title}</h2>
      <p className="text-lg font-serif font-[500]">{subtitle}</p>
      <div className="bg-[#3a5e32] text-[#a7f986] text uppercase py-8 px-8 font-sans font-[400]">
        {description.split("\n").map((line, i) => (
          <p key={i}>{line}</p>
        ))}
      </div>
      <TextSection
        firstParagraph={firstParagraph}
        secondParagraph={secondParagraph}
        thirdParagraph={thirdParagraph}
      />
    </div>
  );
};
