import { TextSection } from "./text-section";

type KnowledgeCardProps = {
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
    <div className="gap-8 flex flex-col bg-transparent border-none text-center text-primary w-96">
      <h2 className="text-4xl font-serif mb-2">{title}</h2>
      <p className="text-sm font-light">{subtitle}</p>
      <div className="bg-[#3a5e32] text-[#c7f5b4] text-xs uppercase py-4 px-6 font-semibold">
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
