/* eslint-disable no-unused-vars */
import React, { useState, useEffect, useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Product from "./Product";
import { getProducts } from "../../services/services";
import leftSliderImg from "../../assets/icons/slider-left-btn.svg";
import rightSliderImg from "../../assets/icons/slider-right-btn.svg";

const Products = () => {
  const [products, setProducts] = useState([]);

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
  const saleSliderRef = useRef(null);
  const smartphoneSliderRef = useRef(null);
  const tabSliderRef = useRef(null);
  const audioSliderRef = useRef(null);
  const sliderSettings = {
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

  const saleProducts = products.filter((product) => product.salePrice);
  const smartphoneProducts = products.filter(
    (product) => product.category_name === "სმარტფონები"
  );
  const tabProducts = products.filter(
    (product) => product.category_name === "ტაბები"
  );
  const audioProducts = products.filter(
    (product) => product.category_name === "აუდიო"
  );

  return (
    <div className="mt-[100px]">
      <section>
        <h1 className="font-bold text-xl text-orange-600 mb-4">
          ყველა პროდუქტი
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

      {saleProducts.length > 0 && (
        <section className="mt-24">
          <h1 className="font-bold text-xl text-orange-600 mb-4">
            ფასდაკლებული პროდუქტები
          </h1>
          <div className="relative ">
            <div className="flex justify-end mb-3">
              <button
                className="relative shadow-lg rounded-full"
                onClick={() => saleSliderRef.current.slickPrev()}
              >
                <img src={leftSliderImg} alt="Previous" />
              </button>
              <button
                className="relative shadow-lg rounded-full"
                onClick={() => saleSliderRef.current.slickNext()}
              >
                <img src={rightSliderImg} alt="Next" />
              </button>
            </div>
            <div>
              <Slider ref={saleSliderRef} {...sliderSettings}>
                {saleProducts.map((product) => (
                  <Product
                    key={product.id}
                    product={product}
                    showDescription={false}
                  />
                ))}
              </Slider>
            </div>
          </div>
        </section>
      )}

      <section className="mt-24">
        <h1 className="font-bold text-xl text-orange-600 mb-4">სმარტფონები</h1>
        <div className="relative ">
          <div className="flex justify-end mb-3">
            <button
              className="relative shadow-lg rounded-full"
              onClick={() => smartphoneSliderRef.current.slickPrev()}
            >
              <img src={leftSliderImg} alt="Previous" />
            </button>
            <button
              className="relative shadow-lg rounded-full"
              onClick={() => smartphoneSliderRef.current.slickNext()}
            >
              <img src={rightSliderImg} alt="Next" />
            </button>
          </div>
          <div>
            <Slider ref={smartphoneSliderRef} {...sliderSettings}>
              {smartphoneProducts.map((product) => (
                <Product key={product.id} product={product} />
              ))}
            </Slider>
          </div>
        </div>
      </section>
      <section className="mt-24">
        <h1 className="font-bold text-xl text-orange-600 mb-4">ტაბები</h1>
        <div className="relative ">
          <div className="flex justify-end mb-3">
            <button
              className="relative shadow-lg rounded-full"
              onClick={() => tabSliderRef.current.slickPrev()}
            >
              <img src={leftSliderImg} alt="Previous" />
            </button>
            <button
              className="relative shadow-lg rounded-full"
              onClick={() => tabSliderRef.current.slickNext()}
            >
              <img src={rightSliderImg} alt="Next" />
            </button>
          </div>
          <div>
            <Slider ref={tabSliderRef} {...sliderSettings}>
              {tabProducts.map((product) => (
                <Product key={product.id} product={product} />
              ))}
            </Slider>
          </div>
        </div>
      </section>
      <section className="mt-24">
        <h1 className="font-bold text-xl text-orange-600 mb-4">აუდიო</h1>
        <div className="relative ">
          <div className="flex justify-end mb-3">
            <button
              className="relative shadow-lg rounded-full"
              onClick={() => audioSliderRef.current.slickPrev()}
            >
              <img src={leftSliderImg} alt="Previous" />
            </button>
            <button
              className="relative shadow-lg rounded-full"
              onClick={() => audioSliderRef.current.slickNext()}
            >
              <img src={rightSliderImg} alt="Next" />
            </button>
          </div>
          <div>
            <Slider ref={audioSliderRef} {...sliderSettings}>
              {audioProducts.map((product) => (
                <Product key={product.id} product={product} />
              ))}
            </Slider>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Products;
