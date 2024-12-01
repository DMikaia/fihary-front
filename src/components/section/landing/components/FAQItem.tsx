"use client";

import { useState } from "react";

interface FAQCardProps {
  question: string;
  answer: string;
  isActive?: boolean;
  handleToggle?: () => void;
}

export default function ({
  question,
  answer,
  isActive,
  handleToggle,
}: FAQCardProps) {
  const [isRotating, setIsRotating] = useState<boolean>(false);

  //fonction pour la rotation de l' icone
  const handleImageClick = () => {
    setTimeout(() => {
      setIsRotating(true);
      console.log("rotating");
    }, 100);
  };

  return (
    <article
      className={`faq__card bg-white dark:bg-darkBackground shadow flex w-full rounded-xl cursor-pointer ${
        isActive ? "sticky-open" : "sticky-close"
      }  ${
        isActive
          ? "border-2 border-primary-foreground items-start gap-12 p-10"
          : "items-center justify-between py-5 md:py-6 px-8 md:px-10"
      }`}
      onClick={() => {
        handleToggle && handleToggle();
        handleImageClick();
      }}
    >
      <div
        className={`header w-11/12	md:w-full ${
          isActive && "flex flex-col gap-5"
        }`}
      >
        <h3 className="text-lg text-blue01 calSans">{question}</h3>
        <p className={`${isActive ? "flex" : "hidden"} dark:text-darkGray`}>
          {answer}
        </p>
      </div>
      <img
        src={
          isActive
            ? "/icons/chevron-circle-down.svg"
            : "/icons/chevron-circle-right.svg"
        }
        className={`w-12 md:w-auto cursor-pointer absolute right-0  md:relative hidden md:flex ${
          isRotating && "rotate"
        }`}
      />
      <img
        src="/icons/chevron-circle-right.svg"
        className={`w-12 md:w-auto cursor-pointer absolute right-0 mr-8 md:relative md:hidden ${
          isActive && "md:hidden"
        }  ${isActive && "rotate-respons"}`}
      />
    </article>
  );
}
