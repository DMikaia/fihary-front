import { loginSliders } from "@/constants/constant";
import Slider from "react-slick";
import { cn } from "../../../lib/utils";

export default function LoginSlider() {
  const settings = {
    infinite: true,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 3000,
    slidesToShow: 1,
  };

  return (
    <Slider {...settings} className="w-full h-full">
      {loginSliders.map((slide, index) => (
        <div
          key={index}
          className={cn(
            `slide__${index + 1} ${index + 1 === 1 ? "bg-slider-1" : "bg-slider-2"
            }  bg-cover bg-center min-h-screen w-full`
          )}
        >
          <div className="min-h-screen py-8 w-full flex flex-col items-center justify-end gap-4">
            <h1 className="text-3xl text-white font-bold w-fit">
              {slide.title}
            </h1>
            <p className="text-white w-[480px] text-center">
              {slide.description}
            </p>
          </div>
        </div>
      ))}
    </Slider>
  );
}
