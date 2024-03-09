/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import Product from "../products/Product";
import "swiper/css";

export default function SimilarProductsSlider({ similarProducts }) {
  return (
    <Swiper spaceBetween={32} slidesPerView={4}>
      {similarProducts.map((product) => (
        <SwiperSlide key={product.id}>
          <Product product={product} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
