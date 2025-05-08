"use client";

import { Button } from "@/app/_components/ui/button";
import { Skeleton } from "@/app/_components/ui/skeleton";
import { fetchProjects } from "@/packages/projects/project.action";
import { useQuery } from "@tanstack/react-query";
import Image from "next/image";
import Link from "next/link";

export const ProjectSection = () => {
  const { data: projects, isLoading } = useQuery({
    queryKey: ["projects"],
    queryFn: fetchProjects,
  });

  return (
    <div className="flex flex-col gap-4 min-h-[75vh]">
      {isLoading
        ? Array.from({ length: 2 }).map((_, idx) => (
            <div
              key={idx}
              className="flex flex-col md:flex-row items-center w-[80%] mx-auto justify-between gap-8 mb-16"
            >
              <Skeleton className="w-full md:w-60 h-72 md:h-96" />
              <div className="flex flex-col gap-4 w-full md:w-1/2">
                <Skeleton className="h-6 w-3/4" />
                <div className="flex justify-between text-sm">
                  <Skeleton className="h-4 w-1/3" />
                  <Skeleton className="h-4 w-1/4" />
                </div>
                <div className="flex justify-between text-sm">
                  <Skeleton className="h-4 w-1/3" />
                  <Skeleton className="h-4 w-1/4" />
                </div>
                <div className="flex flex-col gap-4">
                  <Skeleton className="h-6 w-2/3" />
                  <Skeleton className="h-16 w-full" />
                  <Skeleton className="h-10 w-32" />
                </div>
              </div>
            </div>
          ))
        : projects?.map((project) => (
            <div
              key={project.slug}
              className="flex flex-col md:flex-row items-center w-[80%] mx-auto justify-between gap-8 mb-16"
            >
              <Image
                src={project.image}
                alt={project.title}
                width={1000}
                height={1000}
                className="w-full md:w-60 h-72 md:h-96 object-cover"
              />
              <div className="flex flex-col gap-4 w-full md:w-1/2">
                <h1 className="text-2xl font-bold">{project.title}</h1>
                <div className="flex justify-between text-sm">
                  <span>{project.valueName}</span>
                  <span>{project.value}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span>{project.name}</span>
                  <span>{project.sector}</span>
                </div>
                <div className="flex flex-col gap-4">
                  <h2 className="text-2xl font-bold">{project.secondTitle}</h2>
                  <p className="text-sm">{project.description}</p>
                  <Link href={`/project/${project.slug}`}>
                    <Button className="cursor-pointer">Scopri di più</Button>
                  </Link>
                </div>
              </div>
            </div>
          ))}
    </div>
  );
};
