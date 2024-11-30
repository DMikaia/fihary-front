"use client";

import LandingProductCard from "@/components/shared/cards/LandingProductCard";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { FC, useEffect, useRef, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { LANDING_PRODUCT_MOCK } from "@/constants/__mock__/landingMock";
import AnimatedElement from "@/components/shared/animations/AnimatedElements";
import { useTheme } from "next-themes";

const Products: FC = (): JSX.Element => {
  const sliderRef = useRef<Slider | null>(null);
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);

  const settings = {
    speed: 400,
    slidesToScroll: 4,
    slidesToShow: 4,
    arrows: false,
    infinite: false,
    responsive: [
      {
        breakpoint: 1689,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        },
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 450,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    //@ts-ignore
    return null;
  }

  return (
    <section className="landing__products w-full overflow-hidden mt-24 px-6 md:px-24 lg:px-48">
      <div className="container mx-auto px-1 md:px-7 bg-white dark:bg-darkBackground shadow-boxShadow1 rounded-lg">
        <div className="content px-5 md:px-7 lg:px-10 py-8">
          <header className="flex flex-col md:flex-row md:justify-between md:items-end gap-4">
            <div>
              <AnimatedElement
                duration={0.5}
                delay={0.1}
                from={{ opacity: 0, x: -180 }}
                to={{ opacity: 1, x: 0 }}
              >
                <p className="text-primary-foreground">NOS PRODUITS</p>
              </AnimatedElement>
              <AnimatedElement
                duration={0.5}
                delay={0.4}
                from={{ opacity: 0, x: -180 }}
                to={{ opacity: 1, x: 0 }}
              >
                <h2 className="text-secondary dark:text-white text-2xl lg:text-3xl inter-tight max-w-[250px] lg:max-w-[300px] mt-3 md:mt-5">
                  <b>Explorez notre </b>sélection de produits
                </h2>
              </AnimatedElement>
            </div>
            <AnimatedElement
              duration={0.5}
              delay={1}
              from={{ opacity: 0, x: -180 }}
              to={{ opacity: 1, x: 0 }}
            >
              <Button
                variant="ghost"
                className="text-secondary dark:text-white w-max"
              >
                Afficher plus
                <Image
                  alt={theme === "dark" ? "arrow-up-2.svg" : "arrow-up.svg"}
                  height={23}
                  width={23}
                  src="/icons/arrow-up.svg"
                />
              </Button>
            </AnimatedElement>
          </header>
          <div className="products-list mt-8 md:mt-14 w-full relative">
            <Slider {...settings} ref={sliderRef}>
              {LANDING_PRODUCT_MOCK.map((product, index) => (
                <AnimatedElement
                  key={index}
                  duration={0.5}
                  delay={(index + 0.03) * 0.25}
                  from={{ opacity: 0, y: 180 }}
                  to={{ opacity: 1, y: 0 }}
                >
                  <LandingProductCard
                    key={index}
                    {...product}
                    className={`sm1:mx-3 md:mx-5 ${
                      index === 0 ? "ml-0" : ""
                    } ${
                      index === LANDING_PRODUCT_MOCK.length - 1 ? "mr-0" : ""
                    }`}
                  />
                </AnimatedElement>
              ))}
            </Slider>
            <div className="slider-buttons absolute top-1/2 -right-5 md:-right-3 transform -translate-y-1/2 flex space-x-2">
              <div
                className="right border border-[#003E21] dark:border-white hover:dark:bg-primary-foreground bg-white dark:bg-darkBackground hover:bg-[#003E21]/25 w-max rounded-full p-[5px] cursor-pointer"
                onClick={() => sliderRef.current?.slickNext()}
              >
                <img
                  src={
                    theme === "dark"
                      ? "/icons/arrow-right-white.svg"
                      : "/icons/arrow-right.svg"
                  }
                  alt="arrow-right-icon"
                  className="w-[24px] md:w-[30px]"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Products;
