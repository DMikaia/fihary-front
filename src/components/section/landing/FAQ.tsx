"use client";

import { Accordion } from "@/components/ui/accordion";
import { ACCORDION_DATA } from "@/constants/constant";
import FAQItem from "./components/FAQItem";
import { FC, useState } from "react";

const FAQ: FC = (): JSX.Element => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const handleToggle = (index: number) => {
    setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <section className="landing__faq w-full overflow-hidden mt-20 px-6 md:px-24 lg:px-48">
      <header className="flex flex-col md:flex-row md:justify-between md:items-end gap-4">
        <div>
          <p className="text-primary-foreground">FAQ</p>
          <h2 className="text-secondary text-2xl md:text-3xl inter-tight max-w-[200px] mt-3 md:mt-4 dark:text-white">
            Les réponses à vos questions
          </h2>
        </div>
      </header>
      <div className="FAQ-content flex flex-col gap-10 mt-14">
        {ACCORDION_DATA.map((item, index) => (
          <FAQItem
            key={index}
            {...item}
            isActive={activeIndex === index}
            handleToggle={() => handleToggle(index)}
          />
        ))}
      </div>
    </section>
  );
};

export default FAQ;
