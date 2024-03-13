/* eslint-disable no-unused-vars */
import React, { useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import main1 from "../../assets/images/main-logo1.webp";
import main2 from "../../assets/images/main-logo2.webp";
import main3 from "../../assets/images/main-logo3.webp";
import main4 from "../../assets/images/main-logo4.webp";
import main5 from "../../assets/images/main-logo5.webp";
import leftSlider from "../../assets/icons/slider-left-btn.svg";
import rightSlider from "../../assets/icons/slider-right-btn.svg";

const SimpleSlider = () => {
  const sliderRef = useRef(null);

  const settings = {
    arrows: false,
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
          dots: false,
        },
      },
    ],
  };
  const handlePrev = () => {
    sliderRef.current.slickPrev();
  };

  const handleNext = () => {
    sliderRef.current.slickNext();
  };

  return (
    <div className="relative lg:max-w-[800px] md:max-w-[450px] mt-7">
      <Slider ref={sliderRef} {...settings}>
        <div>
          <img
            src={main1}
            alt="Image 1"
            style={{ width: "895px", height: "350px" }}
            className="rounded-lg md:w-[200px]"
          />
        </div>
        <div>
          <img
            src={main2}
            alt="Image 2"
            style={{ width: "895px", height: "350px" }}
            className="rounded-lg md:w-[200px]"
          />
        </div>
        <div>
          <img
            src={main3}
            alt="Image 3"
            style={{ width: "895px", height: "350px" }}
            className="rounded-lg md:w-[200px]"
          />
        </div>
        <div>
          <img
            src={main4}
            alt="Image 4"
            style={{ width: "895px", height: "350px" }}
            className="rounded-lg md:w-[200px]"
          />
        </div>
        <div>
          <img
            src={main5}
            alt="Image 5"
            style={{ width: "895px", height: "350px" }}
            className="rounded-lg md:w-[200px] md:h-[200px]"
          />
        </div>
      </Slider>
      <button
        className="absolute top-1/2 left-0 transform m-2 -translate-y-1/2"
        onClick={handlePrev}
      >
        <img src={leftSlider} alt="Left" />
      </button>
      <button
        className="absolute top-1/2 right-0 transform m-2  -translate-y-1/2"
        onClick={handleNext}
      >
        <img src={rightSlider} alt="Right" />
      </button>
    </div>
  );
};

export default SimpleSlider;
