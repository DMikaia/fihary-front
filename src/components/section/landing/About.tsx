"use client"

import { Button } from "@/components/ui/button";
import Image from "next/image";
import { FC } from "react";

const About: FC = (): JSX.Element => {
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
                    <div className="products-list">
                        
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;