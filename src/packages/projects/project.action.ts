import { ProjectType, zProjectsSchema } from "./project.model";

export const fetchProjects = async (): Promise<ProjectType[]> => {
  const res = await fetch("/projects-data/list.json");

  if (!res.ok) throw new Error("Failed to fetch projects");

  const json = await res.json();

  const parsed = zProjectsSchema.safeParse(json);
  if (!parsed.success) {
    console.error(parsed.error.format());
    throw new Error("Invalid project data format");
  }

  return parsed.data;
}