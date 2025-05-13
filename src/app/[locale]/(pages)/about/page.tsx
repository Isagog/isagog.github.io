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
    <div className="mx-5 sm:mx-auto sm:max-w-2/4 max-w-full flex flex-col sm:gap-16 gap-8 justify-center items-center ">
      <div className="justify-center items-center hidden sm:flex">
        <Image src="/images/trees.avif" alt="Tree" width={1000} height={1000} />
      </div>
      <Highlight />
      <div className="flex flex-col items-center justify-center gap-16">
        <TextAnimate value={t("text-animate.1")} />
      </div>
      <div className="flex flex-col items-center justify-center gap-16">
        <TeamCard />
      </div>
      <div className="flex flex-col items-center justify-center gap-16">
        <ServicesSection />
      </div>
      <div className="flex flex-col items-center justify-center gap-16">
        <TextAnimate
          value={t("text-animate.2")}
          subValue={t("text-animate.3")}
        />
      </div>
      <div className="block sm:hidden justify-center items-center">
        <Image src="/images/trees.avif" alt="Tree" width={1000} height={1000} />
      </div>
    </div>
  );
};
export default AboutPage;
