/* eslint-disable no-unused-vars */
import React, { useState, useEffect, useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Product from "./Product";
import { getProducts } from "../../services/services";
import leftSliderImg from "../../assets/icons/slider-left-btn.svg";
import rightSliderImg from "../../assets/icons/slider-right-btn.svg";
import SaleProducts from "../slider/SaledProducts";

const Products = () => {
  const [smartphoneProducts, setSmartphoneProducts] = useState([]);
  const [audioProducts, setAudioProducts] = useState([]);
  const [tabletProducts, setTabletProducts] = useState([]);

  const fetchProducts = async (categoryName) => {
    try {
      const response = await getProducts({ categoryName });
      if (response.data.products) {
        switch (categoryName) {
          case "სმარტფონები":
            setSmartphoneProducts(response.data.products);
            break;
          case "აუდიო":
            setAudioProducts(response.data.products);
            break;
          case "ტაბები":
            setTabletProducts(response.data.products);
            break;
          default:
            break;
        }
      }
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchProducts("სმარტფონები");
    fetchProducts("აუდიო");
    fetchProducts("ტაბები");
  }, []);

  const sliderSettings = {
    arrows: false,
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
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

  const sliderRef = useRef(null);
  const audioSliderRef = useRef(null);
  const tabletSliderRef = useRef(null);

  const handlePrevious = (sliderRef) => {
    sliderRef.current.slickPrev();
  };

  const handleNext = (sliderRef) => {
    sliderRef.current.slickNext();
  };

  return (
    <div className="mt-[100px]">
      <SaleProducts onlySales={true} />

      <section className="mt-24">
        <h1 className="font-bold text-xl text-orange-600 mb-4">სმარტფონები</h1>
        <div className="relative">
          <div className="flex justify-end mb-3">
            <button
              className="absolute left-0 top-1/2 transform -translate-y-1/2 z-10 flex justify-center items-center cursor-pointer rounded-full shadow-lg"
              onClick={() => handlePrevious(sliderRef)}
            >
              <img src={leftSliderImg} alt="Previous" />
            </button>
            <button
              className="absolute right-0 top-1/2 transform -translate-y-1/2 z-10 flex justify-center items-center cursor-pointer rounded-full shadow-lg"
              onClick={() => handleNext(sliderRef)}
            >
              <img src={rightSliderImg} alt="Next" />
            </button>
          </div>
          <Slider ref={sliderRef} {...sliderSettings}>
            {smartphoneProducts.map((product) => (
              <Product key={product.id} product={product} />
            ))}
          </Slider>
        </div>
      </section>

      <section className="mt-24">
        <h1 className="font-bold text-xl text-orange-600 mb-4">აუდიო</h1>
        <div className="relative">
          <div className="flex justify-end mb-3">
            <button
              className="absolute left-0 top-1/2 transform -translate-y-1/2 z-10 flex justify-center items-center cursor-pointer rounded-full shadow-lg"
              onClick={() => handlePrevious(audioSliderRef)}
            >
              <img src={leftSliderImg} alt="Previous" />
            </button>
            <button
              className="absolute right-0 top-1/2 transform -translate-y-1/2 z-10 flex justify-center items-center cursor-pointer rounded-full shadow-lg"
              onClick={() => handleNext(audioSliderRef)}
            >
              <img src={rightSliderImg} alt="Next" />
            </button>
          </div>
          <Slider ref={audioSliderRef} {...sliderSettings}>
            {audioProducts.map((product) => (
              <Product key={product.id} product={product} />
            ))}
          </Slider>
        </div>
      </section>

      <section className="mt-24">
        <h1 className="font-bold text-xl text-orange-600 mb-4">ტაბები</h1>
        <div className="relative">
          <div className="flex justify-end mb-3">
            <button
              className="absolute left-0 top-1/2 transform -translate-y-1/2 z-10 flex justify-center items-center cursor-pointer rounded-full shadow-lg"
              onClick={() => handlePrevious(tabletSliderRef)}
            >
              <img src={leftSliderImg} alt="Previous" />
            </button>
            <button
              className="absolute right-0 top-1/2 transform -translate-y-1/2 z-10 flex justify-center items-center cursor-pointer rounded-full shadow-lg"
              onClick={() => handleNext(tabletSliderRef)}
            >
              <img src={rightSliderImg} alt="Next" />
            </button>
          </div>
          <Slider ref={tabletSliderRef} {...sliderSettings}>
            {tabletProducts.map((product) => (
              <Product key={product.id} product={product} />
            ))}
          </Slider>
        </div>
      </section>
    </div>
  );
};

export default Products;
