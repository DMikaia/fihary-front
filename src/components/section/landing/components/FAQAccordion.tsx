"use client"

import { AccordionTypes } from "@/app/constants/types";
import { Accordion, AccordionContent, AccordionItem } from "@/components/ui/accordion";
import { cn } from "@/lib/utils";
import { AccordionTrigger } from "@radix-ui/react-accordion";
import { FC } from "react";

const FAQAccordion: FC<AccordionTypes> = ({ question, response, index, className }): JSX.Element => {
    return (
        <Accordion type="single" collapsible className={cn(`w-full`, className)}>
            <AccordionItem value={`item-${index}`} className="p-6 shadow-boxShadow1 rounded-xl">
                <AccordionTrigger className="text-secondary text-lg">
                    {question}
                </AccordionTrigger>
                <AccordionContent className="text-secondary/70 mt-2">
                    {response}
                </AccordionContent>
            </AccordionItem>
        </Accordion>
    );
};

export default FAQAccordion;