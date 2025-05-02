import Link from "next/link";

export const WorkWithUsPage = () => {
  return (
    <div className="flex items-center justify-center h-[65vh]">
      <h1>
        Se desideri lavorare con noi, inviaci una mail a{" "}
        <Link href="mailto:hiring@isagog.com" className="text-[#86efac]">
          hiring@isagog.com
        </Link>
      </h1>
    </div>
  );
};

export default WorkWithUsPage;
