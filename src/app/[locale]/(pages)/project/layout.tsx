const ProjectLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="mx-5 sm:mx-auto sm:max-w-3/4 max-w-full flex flex-col gap-8 sm:gap-16">
      {children}
    </div>
  );
};

export default ProjectLayout;
