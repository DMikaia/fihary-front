"use client"

import { FC } from "react";
import FAQAccordion from "./components/FAQAccordion";
import { ACCORDION_DATA } from "@/app/constants/constant";

const FAQ: FC = (): JSX.Element => {
    return (
        <section className="landing__faq w-full overflow-hidden mt-16 px-6 lg:px-24">
            <header className="flex flex-col md:flex-row md:justify-between md:items-end gap-4">
                <div>
                    <p className="text-primary-foreground">FAQ</p>
                    <h2 className="text-secondary text-2xl md:text-3xl inter-tight max-w-[200px] mt-3 md:mt-4">Les réponses à vos questions</h2>
                </div>
            </header>
            <div className="faq-content mt-14">
                {ACCORDION_DATA.map((accordion, index) => (
                    <FAQAccordion key={index} {...accordion} className={`${index === 0 ? "mt-0" : index === ACCORDION_DATA.length - 1 ? "mt-0" : "mt-5"}`} />
                ))}
            </div>
        </section>
    );
};

export default FAQ;