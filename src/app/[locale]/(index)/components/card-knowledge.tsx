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
      <p className="text-lg font-normal">{subtitle}</p>
      <div className="bg-[#3a5e32] text-[#c7f5b4] text uppercase py-4 px-6 font-medium">
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
