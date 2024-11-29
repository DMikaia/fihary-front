"use client"

import { LANDING_PRODUCT_MOCK } from "@/app/constants/__mock__/landingMock";
import LandingProductCard from "@/components/shared/cards/LandingProductCard";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { FC } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const About: FC = (): JSX.Element => {
    const settings = {
        speed: 400,
        slidesToScroll: 3,
        slidesToShow: 3,
        infinite: false,
        responsive: [
            {
                breakpoint: 1689,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                },
            },
            {
                breakpoint: 640,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],
    };

    return (
        <section className="landing__about w-full overflow-hidde h-screen mt-16">
            <div className="container mx-auto px-7 bg-white shadow-boxShadow1 rounded-lg">
                <div className="content px-10 py-8">
                    <header className="flex justify-between items-end">
                        <div>
                            <p className="text-primary-foreground">NOS PRODUITS</p>
                            <h2 className="text-secondary text-3xl inter-tight max-w-[300px] mt-5"><b>Explorez notre </b>sélection de produits</h2>
                        </div>
                        <Button variant="ghost" className="text-secondary">
                            Afficher plus
                            <Image alt="arrow-up-svg" height={23} width={23} src="/icons/arrow-up.svg" />
                        </Button>
                    </header>
                    <div className="products-list mt-14 w-full">
                        <Slider {...settings}>
                            {
                                LANDING_PRODUCT_MOCK.map((product, index) => (
                                    <LandingProductCard key={index} {...product} className={`mx-4 ${index === 0 ? "ml-0" : ""} ${index === LANDING_PRODUCT_MOCK.length - 1 ? "mr-0" : ""
                                        }`} />
                                ))
                            }
                        </Slider>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;