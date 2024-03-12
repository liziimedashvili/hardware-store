/* eslint-disable no-unused-vars */
/* eslint-disable react/no-children-prop */
import React, { useEffect, useState } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import {
  getProduct,
  purchaseProducts,
  getProducts,
} from "../services/services";
import compereIcon from "../assets/icons/compare-card.svg";
import Button from "../components/button/index";
import CartIcon from "../assets/icons/header-cart.svg";
import { useCart } from "../context/CartContext";
import LoginModal from "../components/modals/Login";
import SimilarProductsSlider from "../components/slider/SimilarProductsSlider";

export default function SingleProductPage() {
  const { productId } = useParams();
  const [productData, setProductData] = useState(null);
  const { addToCart } = useCart();
  const navigate = useNavigate();
  const [similarProducts, setSimilarProducts] = useState([]);
  const [categoryName, setCategoryName] = useState("");
  const [showLoginModal, setShowLoginModal] = useState(false);
  const isAuthenticated = localStorage.getItem("accessToken");
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
    { label: "მთავარი >", path: "/" },
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

  return (
    <div className="custom-container">
      <div className="mt-10">
        <nav>
          <ul className="flex flex-row gap-5  text-lg font-bold">
            {breadcrumbs.map((breadcrumb, index) => (
              <li key={index}>
                <Link to={breadcrumb.path}>{breadcrumb.label}</Link>
              </li>
            ))}
          </ul>
        </nav>

        {productData ? (
          <div className="flex flex-row justify-between p-6">
            <div className=" flex flex-col gap-2 w-[400px] cursor-pointer rounded-md h-[400px] items-start justify-between bg-white mr">
              <div className="rounded-lg bg-white overflow-hidden mt-16  flex items-center">
                <img
                  src={productData.image}
                  className="w-full h-full object-contain"
                  alt={productData.title}
                />
              </div>
              <div className="flex flex-col items-start ">
                <h2 className="font-bold text-2xl ">{productData.title}</h2>
                <p className="text-sm text-gray-700 mt-2 ">
                  {productData.description}
                </p>
              </div>
            </div>
            <div className="flex flex-col w-[350px] p-6">
              <div>
                <p className="text-black  mt-2 text-lg font-bold ">
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
                    children="ყიდვა"
                    className="w-full bg-orange-600 text-white px-[10px] py-2 rounded-[4px] font-bold text-sm leading-5"
                    onClick={handlePurchase}
                  />
                </div>
                <div className="flex flex-row  gap-[10px]">
                  <div className="bg-[#f2f2f2] h-11 p-[14px] rounded-[4px] w-full flex flex-row items-center justify-around text-gray-600">
                    <img src={compereIcon} alt="Compare Icon" />
                    <p>შედარება</p>
                  </div>
                  <Button
                    children="დამატება"
                    className="bg-[#f4855d] text-black px-[10px] py-2 rounded-[4px] w-full font-bold text-sm leading-5 gap-1 "
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
          </div>
        ) : (
          <div>Loading...</div>
        )}
      </div>
      {similarProducts.length > 0 && (
        <div className="mt-10">
          <h3 className=" text-xl text-orange-600 font-bold">
            მსგავსი პროდუქტები{" "}
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
  );
}
