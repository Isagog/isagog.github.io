import { Button } from "@/app/_components/ui/button";
import Image from "next/image";

export const ProjectSection = ({
  title,
  secondTitle,
  imageUrl,
  description,
  value,
  name,
  sector,
  valueName,
}: {
  title: string;
  secondTitle: string;
  imageUrl: string;
  description: string;
  value: string;
  name: string;
  sector: string;
  valueName: string;
}) => {
  return (
    <div className="flex items-center w-[60%] mx-auto justify-between ">
      <Image
        src={imageUrl}
        alt="ilManifesto"
        width={1000}
        height={1000}
        className="w-60 h-96 object-cover"
      />
      <div className="flex flex-col gap-4 w-1/2">
        <h1 className="text-2xl font-bold">{title}</h1>
        <div className="flex justify-between">
          <span>{valueName}</span>
          <span>{value}</span>
        </div>
        <div className="flex justify-between">
          <span>{name}</span>
          <span>{sector}</span>
        </div>
        <div className="flex flex-col gap-4">
          <h2 className="text-2xl font-bold">{secondTitle}</h2>
          <p>{description}</p>
          <Button>Scopri di più</Button>
        </div>
      </div>
    </div>
  );
};
