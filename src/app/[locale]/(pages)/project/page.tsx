import { ProjectSection } from "./components/project-section";

const ProjectPage = async () => {
  return (
    <div className="flex flex-col gap-4">
      <ProjectSection />
    </div>
  );
};

export default ProjectPage;
