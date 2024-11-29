import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { LandingProductTypes } from "@/constants/type";
import useResponsive from "@/hooks/useResponsive";
import { cn } from "@/lib/utils";
import { FC } from "react";

interface LandingCardProps extends LandingProductTypes {
    className: string
}

const LandingProductCard: FC<LandingCardProps> = ({ img, price, price_type, title, className }): JSX.Element => {
    const { elementRef, width } = useResponsive();
    const widthResized = width / 10;
    return (
        <Card className={cn("landing-product__card relative border-none rounded-lg overflow-hidden shadow-none bg-white h-fit flex flex-col gap-6", className)}>
            <div className={`h-[${widthResized}px] sm1:h-[140px] md:h-[154px] 2xl:h-[186px] rounded-xl overflow-hidden w-full`}>
                <img src={img} alt="landing-product" className="w-full object-cover transition-all duration-100 hover:scale-125 h-full" ref={elementRef} />
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