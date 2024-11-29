"use client"

import { LANDING_PRODUCT_MOCK } from "@/app/constants/__mock__/landingMock";
import LandingProductCard from "@/components/shared/cards/LandingProductCard";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { FC, useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Products: FC = (): JSX.Element => {
    const sliderRef = useRef<Slider | null>(null);

    const settings = {
        speed: 400,
        slidesToScroll: 4,
        slidesToShow: 4,
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
                breakpoint: 500,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],
    };

    return (
        <section className="landing__products w-full overflow-hidden h-screen mt-16 px-6 lg:px-24">
            <div className="container mx-auto px-2 md:px-7 bg-white shadow-boxShadow1 rounded-lg">
                <div className="content px-10 py-8">
                    <header className="flex flex-col md:flex-row md:justify-between md:items-end gap-4">
                        <div>
                            <p className="text-primary-foreground">NOS PRODUITS</p>
                            <h2 className="text-secondary text-2xl md:text-3xl inter-tight max-w-[300px] mt-3 md:mt-5"><b>Explorez notre </b>sélection de produits</h2>
                        </div>
                        <Button variant="ghost" className="text-secondary w-max">
                            Afficher plus
                            <Image alt="arrow-up-svg" height={23} width={23} src="/icons/arrow-up.svg" />
                        </Button>
                    </header>
                    <div className="products-list mt-8 md:mt-14 w-full relative">
                        <Slider {...settings} ref={sliderRef}>
                            {
                                LANDING_PRODUCT_MOCK.map((product, index) => (
                                    <LandingProductCard key={index} {...product} className={`mx-3 md:mx-5 ${index === 0 ? "ml-0" : ""} ${index === LANDING_PRODUCT_MOCK.length - 1 ? "mr-0" : ""}`} />
                                ))
                            }
                        </Slider>
                        <div className="slider-buttons absolute top-1/2 -right-5 md:-right-3 transform -translate-y-1/2 flex space-x-2">
                            <div className="right border border-[#003E21] bg-white hover:bg-[#003E21]/25 w-max rounded-full p-[5px] cursor-pointer" onClick={() => sliderRef.current?.slickNext()}>
                                <img src="/icons/arrow-right.svg" alt="arrow-right-icon" className="w-[24px] md:w-[30px]" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Products;
