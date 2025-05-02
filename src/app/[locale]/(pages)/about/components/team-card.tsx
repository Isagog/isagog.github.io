import Image from "next/image";
const team = [
  {
    avatar: "/teamPictures/Guido.avif",
    name: "Guido Vetere",
    title: "Direttore Generale",
    desc: "Ex Direttore Ricerca, IBM Italia, Prof. di AI, Università G. Marconi, Fondatore di ISAGOG",
  },
  {
    avatar: "/teamPictures/Robert.avif",
    name: "Rober J. Alexander",
    title: "Direttore scientifico",
    desc: "Business Dev. Executive Salute e ricerca, IBM, Design Thinking coach, Distinguished Architect, Open Group",
  },
  {
    avatar: "/teamPictures/David.avif",
    name: "David Valente",
    title: "Direttore tecnico",
    desc: "Automation Engineer, HCLSoftware Data Scientist BSc Mathematics & Philosophy",
  },
  {
    avatar: "/teamPictures/Lucas.avif",
    name: "Luca De Biase",
    title: "",
    desc: "Journalist and writer Professor of History of the Future, LUISS Prof. Knowledge Management, The Sant'Anna School of Advanced Studies and Stanford University",
  },
];
export const TeamCard = () => {
  return (
    <div className="mt-20">
      <ul className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
        {team.map((member, idx) => (
          <li
            key={idx}
            className="bg-transparent overflow-hidden transform transition duration-500 hover:scale-105"
          >
            <div className="relative h-56">
              <Image
                src={member.avatar ?? "/placeholder.png"}
                alt={member.name}
                width={1000}
                height={1000}
                className="absolute h-full w-full object-cover transition duration-300 transform hover:scale-110"
              />
            </div>
            <div className="p-4">
              <h3 className="text-xl font-bold">{member.name}</h3>
              <p className="text-[#86efac] font-medium mt-1 text-sm">
                {member.title}
              </p>
              <p className="mt-4 text-sm">{member.desc}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};
