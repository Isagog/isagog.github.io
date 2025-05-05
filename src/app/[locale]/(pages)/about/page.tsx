import Image from "next/image";
import {
  Highlight,
  TeamCard,
  TextAnimate,
  ServicesSection,
} from "./components";
import { getScopedI18n } from "@/packages/locales/server";

const AboutPage = async () => {
  const t = await getScopedI18n("about-page");
  return (
    <div className="w-3/4 mx-auto flex flex-col gap-4 justify-center items-center ">
      <Image src="/image/trees.avif" alt="Tree" width={1000} height={1000} />
      <Highlight />
      <TextAnimate value={t("text-animate.1")} />
      <TeamCard />
      <ServicesSection />
      <TextAnimate value={t("text-animate.2")} />
    </div>
  );
};
export default AboutPage;
