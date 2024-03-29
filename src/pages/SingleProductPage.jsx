/* eslint-disable no-unused-vars */
/* eslint-disable react/no-children-prop */
import React, { useEffect, useState } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import {
  getProduct,
  purchaseProducts,
  getProducts,
} from "../services/services";
import Button from "../components/button/index";
import CartIcon from "../assets/icons/header-cart.svg";
import { useCart } from "../context/CartContext";
import LoginModal from "../components/modals/Login";
import SimilarProductsSlider from "../components/slider/SimilarProductsSlider";
import { useWishlist } from "../context/LikedProductsContext";
import LikeIcon from "../components/icons/LikeIcon";
import { useTranslation } from "react-i18next";
export default function SingleProductPage() {
  const { productId } = useParams();
  const { t } = useTranslation("global");
  const [productData, setProductData] = useState(null);
  const { addToCart } = useCart();
  const navigate = useNavigate();
  const [similarProducts, setSimilarProducts] = useState([]);
  const [categoryName, setCategoryName] = useState("");
  const [showLoginModal, setShowLoginModal] = useState(false);
  const isAuthenticated = localStorage.getItem("accessToken");
  const { addToWishlist, likedProducts, removeFromWishlist } = useWishlist();

  const fetchData = async (productId) => {
    try {
      const response = await getProduct(productId);
      setProductData(response.data);
      setCategoryName(response.data.category_name);
      const similarResponse = await getProducts({
        categoryName: response.data.category_name,
        data: {},
      });

      const filteredSimilarProducts = similarResponse.data.products.filter(
        (product) => product.id !== productId
      );
      setSimilarProducts(filteredSimilarProducts);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchData(productId);
  }, [productId]);

  const breadcrumbs = [
    { label: t("product.main"), path: "/" },
    {
      label: categoryName ? categoryName : "product category",
      path: `/products?categoryName=${categoryName}`,
    },
    { label: productData?.title || "Product title" },
  ];

  const handlePurchase = async () => {
    try {
      if (!isAuthenticated) {
        setShowLoginModal(true);

        return;
      }

      navigate(`/payment`, { state: { productData } });
    } catch (error) {
      console.error(error);
    }
  };
  const isProductLiked = likedProducts.some(
    (likedProduct) => likedProduct.likedProduct.id === productId
  );

  return (
    <div className="bg-[#060814] dark:bg-white p-10">
      <div className="custom-container">
        <nav>
          <ul className="flex flex-row gap-5 dark:text-black text-white pt-16  text-lg font-bold">
            {breadcrumbs.map((breadcrumb, index) => (
              <li key={index}>
                <Link to={breadcrumb.path}>{breadcrumb.label}</Link>
              </li>
            ))}
          </ul>
        </nav>

        {productData ? (
          <div className="flex flex-row justify-between p-6 items-center">
            <div className=" flex flex-col gap-2 w-[400px] cursor-pointer rounded-md h-[400px] items-center justify-between bg-[#060814]   dark:bg-white mr">
              <div
                className="relative m-2"
                style={{ left: 250, top: 70 }}
                onClick={() =>
                  isProductLiked
                    ? removeFromWishlist(likedProducts[0].id)
                    : addToWishlist(productData)
                }
              >
                <LikeIcon color={isProductLiked ? "red" : "grey"} />
              </div>

              <div className="rounded-lg  overflow-hidden mt-16  flex items-center">
                <img
                  src={productData.image}
                  className="w-full h-full object-contain"
                  alt={productData.title}
                />
              </div>
              <div className="flex flex-col items-start ">
                <h2 className="font-bold text-2xl dark:text-dark text-white ">
                  {productData.title}
                </h2>
                <p className="text-sm dark:text-gray-700 text-white mt-2 ">
                  {productData.description}
                </p>
              </div>
            </div>
            <div className="flex flex-col w-[350px] p-6">
              <div>
                <p className="dark:text-black text-white mt-2 text-lg font-bold ">
                  {productData.salePrice ? (
                    <>
                      <span className="line-through mr-2 text-orange-500">
                        ₾{productData.price}
                      </span>{" "}
                      ₾{productData.salePrice}
                    </>
                  ) : (
                    `₾${productData.price}`
                  )}
                </p>
              </div>
              <div className="flex flex-col gap-[10px]">
                <div>
                  <Button
                    children={t("product.buy")}
                    className="w-full bg-orange-600 text-white px-[10px] py-2 rounded-[4px] font-bold text-sm leading-5"
                    onClick={handlePurchase}
                  />
                </div>

                <Button
                  children={t("product.addToCart")}
                  className="bg-[#f4855d] text-black px-[10px] py-3 rounded-[4px] w-full font-bold text-sm leading-5 gap-1 "
                  icon={
                    <img
                      src={CartIcon}
                      width={14}
                      height={14}
                      alt="Cart Icon"
                    />
                  }
                  onClick={() => addToCart(productData)}
                />
              </div>
            </div>
          </div>
        ) : (
          <div>Loading...</div>
        )}

        {similarProducts.length > 0 && (
          <div className="mt-10">
            <h3 className=" text-xl text-orange-600 font-bold">
              {t("sliderNames.similarProducts")}
            </h3>
            <div className="similar-products">
              <SimilarProductsSlider similarProducts={similarProducts} />
            </div>
          </div>
        )}
        {showLoginModal && (
          <LoginModal
            showModal={showLoginModal}
            handleClose={() => setShowLoginModal(false)}
          />
        )}
      </div>
    </div>
  );
}
