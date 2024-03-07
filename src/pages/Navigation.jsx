/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */

import React, { useState, useEffect, useRef } from "react";
import { getCategories, getProducts } from "../services/services";
import leftSliderImg from "../assets/icons/slider-left-btn.svg";
import rightSliderImg from "../assets/icons/slider-right-btn.svg";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Product from "../components/products/Product";
import { Category } from "../components/categories/Category";
const Navigation = () => {
  const [categories, setCategories] = useState([]);
  const [products, setProducts] = useState([]);

  const fetchData = async () => {
    try {
      const response = await getCategories();
      setCategories(response.data);
    } catch (error) {
      console.error("Error fetching categories:", error);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);

  const fetchProducts = async () => {
    try {
      const response = await getProducts();
      if (response.data.products) {
        setProducts(response.data.products);
      }
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    fetchProducts();
  }, []);

  const sliderRef = useRef(null);
  const sliderSettings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
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
  return (
    <div className="custom-container">
      <div className="mt-10">
        <div>
          <h1 className="font-bold text-xl text-center">
            იპოვე მარტივად სასურველი ნივთი კატეგორიაზე ერთი დაკლიკვით
          </h1>
        </div>
        <div className="bg-gray-100 shadow-lg mt-20 rounded-lg w-full flex-row flex justify-between items-center border-none px-2">
          {categories.map((category) => (
            <Category key={category.id} category={category} />
          ))}
        </div>
        <section className="mt-28">
          <h1 className="font-bold text-xl text-black mb-4">
            იქნებ აქაც მოგეძებნა სასურველი პროდუქტი?
          </h1>
          <div className="relative">
            <div className="flex justify-end mb-3">
              <button
                className="relative shadow-lg rounded-full"
                onClick={() => sliderRef.current.slickPrev()}
              >
                <img src={leftSliderImg} alt="Previous" />
              </button>
              <button
                className="relative shadow-lg rounded-full"
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
    </div>
  );
};

export default Navigation;
