import { getScopedI18n } from "@/packages/locales/server";
import Image from "next/image";
import {
  Highlight,
  ServicesSection,
  TeamCard,
  TextAnimate,
} from "./components";

const AboutPage = async () => {
  const t = await getScopedI18n("about-page");
  return (
    <div className="mx-[10%] flex flex-col gap-16 justify-center items-center ">
      <div className="min-h-screen flex justify-center items-center">
        <Image src="/images/trees.avif" alt="Tree" width={1000} height={1000} />
      </div>
      <Highlight />
      <div className="flex flex-col items-center justify-center gap-16 my-32">
        <TextAnimate value={t("text-animate.1")} />
      </div>
      <div className="flex flex-col items-center justify-center gap-16 my-32">
        <TeamCard />
      </div>
      <div className="flex flex-col items-center justify-center gap-16 my-32">
        <ServicesSection />
      </div>
      <div className="flex flex-col items-center justify-center gap-16 my-32">
        <TextAnimate value={t("text-animate.2")} />
      </div>
    </div>
  );
};
export default AboutPage;
