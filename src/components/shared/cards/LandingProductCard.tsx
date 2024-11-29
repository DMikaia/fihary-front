import { LandingProductTypes } from "@/app/constants/types";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { FC } from "react";

interface LandingCardProps extends LandingProductTypes {
    className: string
}

const LandingProductCard: FC<LandingCardProps> = ({ img, price, price_type, title, className }): JSX.Element => {
    return (
        <Card className={cn("landing-product__card relative border-none rounded-lg overflow-hidden shadow-none bg-white h-fit flex flex-col gap-6", className)}>
            <div className="h-[180px] rounded-xl overflow-hidden w-full">
                <img src={img} alt="landing-product" className="w-full object-cover transition-all duration-100 hover:scale-125 h-full" />
            </div>
            <CardContent className="p-0">
                <h3 className="text-secondary text-xl">
                    {title}
                </h3>
                <p>{price}Ar/{price_type}</p>
            </CardContent>
        </Card>
    );
};

export default LandingProductCard;