import { Card, CardContent } from "../ui/card";

type KnowledgeCardProps = {
  title: string;
  subtitle: string;
  description: string;
};

export const KnowledgeCard = ({
  title,
  subtitle,
  description,
}: KnowledgeCardProps) => {
  return (
    <Card className="bg-transparent border-none text-center text-black w-96 h-72">
      <CardContent className="py-12">
        <h2 className="text-2xl font-serif mb-2">{title}</h2>
        <p className="text-sm font-light">{subtitle}</p>
      </CardContent>
      <div className="bg-[#3a5e32] text-[#c7f5b4] text-xs uppercase tracking-widest py-4 px-6 font-semibold">
        {description.split("\n").map((line, i) => (
          <p key={i}>{line}</p>
        ))}
      </div>
    </Card>
  );
};
