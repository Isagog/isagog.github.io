import Link from "next/link";

const ContactPage = () => {
  return (
    <div className="flex items-center justify-center h-[65vh]">
      <h1>
        Saremo felici di rispondere alle tue domande{" "}
        <Link href="mailto:info@isagog.com" className="text-[#86efac]">
          info@isagog.com
        </Link>
      </h1>
    </div>
  );
};
export default ContactPage;
