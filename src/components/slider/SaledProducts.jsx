/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React, { useState, useEffect, useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Product from "../products/Product";
import leftSliderImg from "../../assets/icons/slider-left-btn.svg";
import rightSliderImg from "../../assets/icons/slider-right-btn.svg";
import { getProducts } from "../../services/services";

const SaleProducts = ({ onlySales }) => {
  const [products, setProducts] = useState([]);
  const sliderRef = useRef(null);
  useEffect(() => {
    const fetchSaleProducts = async () => {
      try {
        const response = await getProducts({ onlySales });
        if (response.data.products) {
          setProducts(response.data.products);
        }
      } catch (error) {
        console.error(error);
      }
    };

    fetchSaleProducts();
  }, [onlySales]);

  const sliderSettings = {
    arrows: false,
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
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

  return (
    <div>
      <section className="mt-16">
        <h1 className="font-bold text-xl text-orange-600 mb-4">
          ფასდაკლებული პროდუქტები
        </h1>
        <div className="relative">
          <div className="flex justify-end mb-3">
            <button
              className="absolute top-1/2 left-0 transform -translate-y-1/2 z-10 flex justify-center items-center cursor-pointer rounded-full shadow-md"
              onClick={() => sliderRef.current.slickPrev()}
            >
              <img src={leftSliderImg} alt="Previous" />
            </button>
            <button
              className="absolute top-1/2 right-0 transform -translate-y-1/2 z-10 flex justify-center items-center cursor-pointer rounded-full shadow-md"
              onClick={() => sliderRef.current.slickNext()}
            >
              <img src={rightSliderImg} alt="Next" />
            </button>
          </div>
          <div>
            <Slider ref={sliderRef} {...sliderSettings}>
              {products.map((product) => (
                <Product key={product.id} product={product} />
              ))}
            </Slider>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SaleProducts;
