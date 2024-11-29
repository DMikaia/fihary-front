import { Button } from "@/components/ui/button";
import Image from "next/image";
import { FC } from "react";

const Formations: FC = (): JSX.Element => {
    return (
        <section className="landing__formations w-full overflow-hidden mt-16 px-6 lg:px-24 bg-primary py-10">
            <header className="flex flex-col md:flex-row md:justify-between md:items-end gap-4">
                <div>
                    <p className="text-primary-foreground">NOS PRODUITS</p>
                    <h2 className="text-white text-2xl md:text-3xl inter-tight max-w-[300px] mt-3 md:mt-4">Notre sélection de formation</h2>
                </div>
                <Button variant="ghost" className="text-white w-max">
                    Afficher plus
                    <Image alt="arrow-up-svg" height={23} width={23} src="/icons/arrow-up-2.svg" />
                </Button>
            </header>
            <div className="formations-preview mt-14">
                <div className="video-preview h-[350px] rounded-lg bg-gray-400"></div>
                <p className="text-white mt-4 max-w-[750px]">Apprenez à gérer vos cultures de manière éco-responsable en utilisant des techniques agricoles durables qui respectent l’environnement et augmentent la rentabilité.</p>
            </div>
        </section>
    );
};

export default Formations;