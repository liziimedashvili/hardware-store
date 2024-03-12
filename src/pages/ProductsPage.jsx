/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
import Product from "../components/products/Product";
import { getProducts } from "../services/services";
import { useLocation, Link } from "react-router-dom";
import InputRange from "react-input-range";
import "react-input-range/lib/css/index.css";
import NotFound from "../assets/images/NotFound.jpg";
import ReactPaginate from "react-paginate";

export default function ProductsPage() {
  const [productsData, setProductsData] = useState([]);
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);

  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(5000);
  const [page, setPage] = useState(0);
  const [pageSize, setPageSize] = useState(10);

  const categoryName = queryParams.get("categoryName");

  const handleFetchProducts = () => {
    getProducts({ categoryName, minPrice, maxPrice, page, pageSize })
      .then((response) => {
        const { products } = response.data;
        setProductsData(products);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  useEffect(() => {
    handleFetchProducts();
  }, [location.search, minPrice, maxPrice, page, pageSize]);

  const breadcrumbs = [
    {
      label: "<",
      path: "/",
    },
    {
      label: categoryName ? categoryName : "product category",
      path: "/",
    },
  ];

  const handleMinPriceChange = (e) => {
    setMinPrice(parseInt(e.target.value));
  };

  const handleMaxPriceChange = (e) => {
    setMaxPrice(parseInt(e.target.value));
  };

  const handlePageClick = (data) => {
    const selectedPage = data.selected + 1;
    setPage(selectedPage);
  };

  return (
    <div className="mt-10">
      <div className="custom-container">
        <nav>
          <ul className="flex flex-row gap-2 text-xl font-mono font-bold">
            {breadcrumbs.map((breadcrumb, index) => (
              <li key={index}>
                <Link to={breadcrumb.path}>{breadcrumb.label}</Link>
              </li>
            ))}
          </ul>
        </nav>
        <div className="flex flex-row mt-10 gap-10">
          <div className="w-1/4 pr-4 mt-10">
            <InputRange
              minValue={0}
              maxValue={5000}
              value={{ min: minPrice, max: maxPrice }}
              onChange={(value) => {
                setMinPrice(value.min);
                setMaxPrice(value.max);
              }}
            />
            <div className="flex flex-row mt-9 gap-2">
              <div className="mb-4">
                <label htmlFor="minPrice">Min Price:</label>
                <input
                  className="w-24 border border-orange-600"
                  type="number"
                  id="minPrice"
                  value={minPrice}
                  onChange={handleMinPriceChange}
                />
              </div>
              <div className="mb-4">
                <label htmlFor="maxPrice">Max Price:</label>
                <input
                  className="w-24 border border-orange-600"
                  type="number"
                  id="maxPrice"
                  value={maxPrice}
                  onChange={handleMaxPriceChange}
                />
              </div>
            </div>
          </div>

          <div className="flex flex-col w-3/4 items-center">
            <div className="flex flex-wrap gap-16">
              {productsData?.length > 0 ? (
                productsData.map((product) => (
                  <Product key={product.id} product={product} />
                ))
              ) : (
                <div className="flex flex-col items-center  mt-8">
                  <p className="text-lg font-bold">
                    გაფილტრული პროდუქტი ვერ მოიძებნა
                  </p>
                  <img src={NotFound} width={400} alt="Not Found" />
                </div>
              )}
            </div>
            <div className="mt-10 flex items-center">
              <div className="pagination rounded-md py-2 px-1 ">
                <ReactPaginate
                  previousLabel={`<`}
                  nextLabel={`>`}
                  pageCount={2}
                  pageRangeDisplayed={8}
                  onPageChange={handlePageClick}
                  containerClassName="flex"
                  pageClassName="px-4 py-2 mx-1"
                  activeClassName="bg-gray-300"
                  previousClassName="px-4 py-2 border border-grey-300"
                  nextClassName="px-4 py-2 border border-grey-300"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
