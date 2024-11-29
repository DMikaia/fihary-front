import Slider from "react-slick";

export default function LoginSlider() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <div className="w-[64px] h-1 border-1 border-white"></div>,
    prevArrow: <div className="w-[64px] h-1 border border-white/25"></div>,
  };

  return (
    <Slider {...settings}>
      <div>
        <h1></h1>
        <p></p>
      </div>
    </Slider>
  );
}
