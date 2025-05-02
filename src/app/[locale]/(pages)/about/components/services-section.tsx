"use client";

import { motion } from "framer-motion";

const faqsList = [
  {
    q: "Independence",
    a: "We develop artificial intelligence with a critical spirit and total autonomy, creating open, transparent and reliable solutions.",
    b: "We are part of a network of AI innovators, united by the belief that collaboration is the true driver of progress.",
  },
  {
    q: "Responsibility",
    a: "AI is ethical when it is responsibly integrated into society. ",
    b: "We build solutions that respect those who use them and protect those who suffer their impact.",
  },
  {
    q: "Impact",
    a: "We engage with AI innovators to anticipate the challenges of the future. ",
    b: "We design and implement models and solutions that are conscious, sustainable and of real value for those who adopt them.",
  },
  {
    q: "Transparency",
    a: "Machines do not distinguish between truth and lies. That's why we work with customers to develop concept models that allow them to verify what machines are thinking about.",
    b: "",
  },
  {
    q: "Safety",
    a: "We use open and self-manageable technologies to generate value without ever compromising confidentiality. ",
    b: "",
  },
  {
    q: "Experience",
    a: "Together we count more than 50 years of research and development in the field of Artificial Intelligence.  ",
    b: "",
  },
];

export const ServicesSection = () => {
  return (
    <div className="mt-12">
      <ul className="space-y-8 gap-12 grid-cols-2 sm:grid sm:space-y-0 lg:grid-cols-3">
        {faqsList.map((item, idx) => (
          <li key={idx} className="space-y-3">
            <motion.summary
              initial={{ scale: 0.8, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              viewport={{ once: false, amount: 0.3 }}
              className="flex items-center justify-between font-semibold text-[#86efac]"
            >
              {item.q}
            </motion.summary>
            <p
              dangerouslySetInnerHTML={{ __html: item.a }}
              className=" leading-relaxed"
            ></p>
            <p
              dangerouslySetInnerHTML={{ __html: item.b }}
              className=" leading-relaxed"
            ></p>
          </li>
        ))}
      </ul>
    </div>
  );
};
