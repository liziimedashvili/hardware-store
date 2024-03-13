/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import searchIcon from "../../assets/icons/search-icon.svg";
import { getProducts } from "../../services/services";
import { useTranslation } from "react-i18next";
export default function SearchBar() {
  const [input, setInput] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const navigate = useNavigate();
  const { t } = useTranslation("global");
  useEffect(() => {
    const timerId = setTimeout(() => {
      if (input.trim() !== "") {
        fetchData(input);
      } else {
        setSearchResults([]);
      }
    }, 300);

    return () => clearTimeout(timerId);
  }, [input]);

  const handleChange = (event) => {
    setInput(event.target.value);
  };

  const fetchData = async (query) => {
    try {
      const response = await getProducts({ search: query }, false);
      setSearchResults(response.data.products);

      const filteredResults = response.data.products.filter((product) =>
        product.title.toLowerCase().includes(query.toLowerCase())
      );
      setSearchResults(filteredResults);
    } catch (error) {
      console.error("Error fetching search results:", error);
    }
  };

  const handleResultClick = (productId) => {
    navigate(`/product/${productId}`);
    setSearchResults([]);
  };

  return (
    <div className="relative">
      <div className="items-center border border-orange-500 border-opacity-50 rounded-lg shadow-md p-3 cursor-pointer flex gap-4 lg:w-[440px] lg:h-[44px] md:w-[250px] md:h-[40px] bg-[#fff]">
        <img src={searchIcon} alt="Search" />
        <input
          type="text"
          value={input}
          onChange={handleChange}
          className="outline-none w-full h-[17px] text-sm font-medium text-gray-600"
          placeholder={t("header.search")}
        />
      </div>
      {searchResults.length > 0 && (
        <ul className="absolute z-10 lg:left-0 md:left-[-20] mt-1 lg:w-[440px] md:w-[250px] bg-white border  border-gray-200 rounded-md shadow-lg">
          {searchResults.map((result) => (
            <li
              key={result.id}
              className="flex items-start p-2 hover:bg-gray-100 cursor-pointer shadow-md"
              onClick={() => handleResultClick(result.id)}
            >
              <img
                src={result.image}
                alt={result.title}
                className="w-16 h-16 object-cover mr-4"
              />
              <div>
                <div className="text-sm font-medium text-gray-500">
                  {result.title}
                </div>
                <p className="text-gray-700 mt-2 text-md font-bold ">
                  {result.salePrice ? (
                    <>
                      <span className="line-through mr-2 text-sm text-orange-600">
                        ₾{result.price}
                      </span>{" "}
                      ₾{result.salePrice}
                    </>
                  ) : (
                    `₾${result.price}`
                  )}
                </p>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
