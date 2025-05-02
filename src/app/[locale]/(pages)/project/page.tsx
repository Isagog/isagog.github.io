import { ProjectSection } from "./components/project-section";

const ProjectPage = () => {
  return (
    <div className="flex flex-col gap-4">
      <ProjectSection
        title="il Manifesto"
        secondTitle="MEMA: Memoria Manifesta"
        imageUrl="/ilManifesto.avif"
        description="Un patrimonio di testi e dati che oggi è diventato esplorabile grazie alla intelligenza artificiale"
        value="800.000 articoli"
        sector="media"
        name="settore"
        valueName="archivio storico"
      />
      <ProjectSection
        title="Teleperformance"
        secondTitle="Voice First"
        imageUrl="/placeholder.png"
        description="Un cobot per migliorare l’assistenza clienti, grazie all'integrazione dell’intelligenza artificiale nel supporto vocale"
        value="450,000 persone"
        sector="telecomunicazioni"
        name="settore"
        valueName="dimensione aziendale"
      />
    </div>
  );
};

export default ProjectPage;
