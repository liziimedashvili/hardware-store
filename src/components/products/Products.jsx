/* eslint-disable no-unused-vars */
import React, { useState, useEffect, useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Product from "./Product";
import { getProducts } from "../../services/services";
import leftSlider from "../../assets/slider-left-btn.svg";
import rightSlider from "../../assets/slider-right-btn.svg";

const Products = () => {
  const [discountedProducts, setDiscountedProducts] = useState([]);
  const [regularProducts, setRegularProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await getProducts();
        const { products } = response.data;

        if (products) {
          const discounted = products.filter((product) => product.salePrice);
          const regular = products.filter((product) => !product.salePrice);

          setDiscountedProducts(discounted);
          setRegularProducts(regular);
        }
      } catch (error) {
        console.log(error);
      }
    };

    fetchProducts();
  }, []);

  const discountedSliderRef = useRef(null);
  const regularSliderRef = useRef(null);

  const sliderSettings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
    ],
  };

  const handleDiscountedPrev = () => {
    discountedSliderRef.current.slickPrev();
  };

  const handleDiscountedNext = () => {
    discountedSliderRef.current.slickNext();
  };

  const handleRegularPrev = () => {
    regularSliderRef.current.slickPrev();
  };

  const handleRegularNext = () => {
    regularSliderRef.current.slickNext();
  };

  return (
    <div className="flex flex-col gap-10 mt-[100px] relative">
      <div className="flex items-center justify-between">
        <h1 className="font-bold text-xl text-orange-600">
          ფასდაკლებული პროდუქცია
        </h1>
        <div>
          <button onClick={handleDiscountedPrev}>
            <img
              src={leftSlider}
              alt="Left"
              className="shadow-lg rounded-full"
            />
          </button>
          <button onClick={handleDiscountedNext}>
            <img
              src={rightSlider}
              alt="Right"
              className="shadow-lg rounded-full"
            />
          </button>
        </div>
      </div>
      <Slider ref={discountedSliderRef} {...sliderSettings}>
        {discountedProducts.map((product) => (
          <Product key={product.id} product={product} showDescription={false} />
        ))}
      </Slider>

      <div className="flex items-center justify-between">
        <h1 className="font-bold text-xl text-orange-600">ყველა პროდუქცია</h1>
        <div>
          <button onClick={handleRegularPrev}>
            <img
              src={leftSlider}
              alt="Left"
              className="shadow-lg rounded-full"
            />
          </button>
          <button onClick={handleRegularNext}>
            <img
              src={rightSlider}
              alt="Right"
              className="shadow-lg rounded-full"
            />
          </button>
        </div>
      </div>
      <Slider ref={regularSliderRef} {...sliderSettings}>
        {regularProducts.map((product) => (
          <Product key={product.id} product={product} showDescription={false} />
        ))}
      </Slider>
    </div>
  );
};

export default Products;
