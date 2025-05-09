import type { ProjectType } from "./project.model";
import { zProjectsSchema } from "./project.model";

export const fetchProjects = async (): Promise<ProjectType[]> => {
  const res = await fetch("/projects-data/list.json");

  if (!res.ok) throw new Error("Failed to fetch projects");

  const json = await res.json();

  const parsed = zProjectsSchema.safeParse(json);
  if (!parsed.success) {
    throw new Error("Invalid project data format");
  }

  return parsed.data;
};
