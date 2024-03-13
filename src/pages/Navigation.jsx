/* eslint-disable no-unused-vars */
import Category from "../components/categories/Category";
import { getCategories, getProducts } from "../services/services";
import { useNavigate } from "react-router-dom";
import React, { useState, useEffect, useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Product from "../components/products/Product";
import leftSliderImg from "../assets/icons/slider-left-btn.svg";
import rightSliderImg from "../assets/icons/slider-right-btn.svg";
import { useTranslation } from "react-i18next";
export default function Navigation() {
  const [categories, setCategories] = useState([]);
  const [products, setProducts] = useState([]);
  const navigate = useNavigate();
  const sliderRef = useRef(null);
  const { t } = useTranslation("global");
  const fetchCategories = async () => {
    try {
      const response = await getCategories();
      setCategories(response.data);
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    fetchCategories();
  }, []);
  const handleSelectCategory = async (categoryName) => {
    navigate(`/products?categoryName=${categoryName}`);
  };
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
    <div className="mt-10">
      <div className=" custom-container">
        <h1 className="text-2xl font-bold text-center mb-6 text-orange-600">
          {t("header.navigation")}
        </h1>
        <div className="flex flex-row bg-white shadow-md rounded-lg justify-between ">
          {categories.map((category) => (
            <Category
              key={category.id}
              category={category}
              onSelectCategory={handleSelectCategory}
            />
          ))}
        </div>
        <section className="mt-16">
          <h1 className="font-bold text-xl text-orange-600 mb-4">
            {t("navigation.findHere")}
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
    </div>
  );
}
