"use client";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function SlickDemo() {
  const settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3, // 3 slides on desktop
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024, // tablets
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768, // mobile
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div className="max-w-[1200px] mx-auto px-4">
      <Slider {...settings}>
        {[1, 2, 3, 4].map((num) => (
          <div key={num} className="px-2">
            <div className="bg-gray-800 h-52 flex items-center justify-center text-white text-lg rounded-lg">
              Slide {num}
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}
