/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import Button from "../components/button";

const CardSimulation = () => {
  const [cardInfo, setCardInfo] = useState({
    number: "",
    name: "",
    expiry: "",
    cvc: "",
  });

  const [errors, setErrors] = useState({
    number: "",
    expiry: "",
    cvc: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    let newValue = value;

    if (name === "number") {
      newValue = value.replace(/\D/g, "").slice(0, 16);
      if (!/^\d{16}$/.test(newValue)) {
        setErrors({ ...errors, [name]: "Invalid card number" });
      } else {
        setErrors({ ...errors, [name]: "" });
      }
    } else if (name === "cvc") {
      newValue = value.replace(/\D/g, "").slice(0, 3);
      if (!/^\d{3}$/.test(newValue)) {
        setErrors({ ...errors, [name]: "Invalid CVC" });
      } else {
        setErrors({ ...errors, [name]: "" });
      }
    } else if (name === "expiry") {
      newValue = validateExpiry(value);
      if (!/^\d{2}\/\d{2}$/.test(newValue)) {
        setErrors({ ...errors, [name]: "Invalid expiry date" });
      } else {
        setErrors({ ...errors, [name]: "" });
      }
    }

    setCardInfo({ ...cardInfo, [name]: newValue });
  };

  function validateExpiry(value) {
    let newValue = value.replace(/[^\d/]/g, "").slice(0, 5);

    const parts = newValue.split("/");
    if (parts[0]) {
      if (parseInt(parts[0], 10) > 12) {
        parts[0] = "12";
      }
    }
    if (parts.length === 2) {
      parts[1] = parts[1].slice(0, 2);
    }

    return parts.join("/").slice(0, 5);
  }

  return (
    <div className="custom-container">
      <div>
        <h1 className="text-orange-600 font-bold text-2xl border-b border-gray-200 p-2">
          გადაიხადე აქ
        </h1>
      </div>
      <div className="max-w-sm mx-auto mt-10 p-4 bg-black rounded shadow-md">
        <div className="mb-8">
          <label
            className="block text-white text-sm font-bold mb-2"
            htmlFor="number"
          >
            Card Number
          </label>
          <input
            className="shadow appearance-none bg-[#131313] rounded w-full py-2 px-3 text-[#606060] leading-tight focus:outline-none focus:shadow-outline"
            id="number"
            type="text"
            name="number"
            value={cardInfo.number}
            placeholder="XXXX XXXX XXXX XXXX"
            onChange={handleInputChange}
          />
          {errors.number && (
            <p className="text-red-500 text-xs italic">{errors.number}</p>
          )}
        </div>
        <div className="mb-8">
          <label
            className="block text-white text-sm font-bold mb-2"
            htmlFor="name"
          >
            Cardholder Name
          </label>
          <input
            className="shadow appearance-none bg-[#131313] rounded w-full py-2 px-3 text-[#606060] leading-tight focus:outline-none focus:shadow-outline"
            id="name"
            type="text"
            name="name"
            value={cardInfo.name}
            placeholder="Full Name"
            onChange={handleInputChange}
          />
        </div>
        <div className="flex">
          <div className="w-1/2 mr-2">
            <label
              className="block text-white text-sm font-bold mb-2"
              htmlFor="expiry"
            >
              Expiry Date
            </label>
            <input
              className="shadow appearance-none bg-[#131313] rounded w-full py-2 px-3 text-[#606060] leading-tight focus:outline-none focus:shadow-outline"
              id="expiry"
              type="text"
              name="expiry"
              value={cardInfo.expiry}
              placeholder="MM"
              onChange={handleInputChange}
            />
            {errors.expiry && (
              <p className="text-red-500 text-xs italic">{errors.expiry}</p>
            )}
          </div>
          <div className="w-1/2 ml-2">
            <label
              className="block text-white text-sm font-bold mb-2"
              htmlFor="cvc"
            >
              CVC
            </label>
            <input
              className="shadow appearance-none bg-[#131313] rounded w-full py-2 px-3 text-[#606060] leading-tight focus:outline-none focus:shadow-outline"
              id="cvc"
              type="text"
              name="cvc"
              value={cardInfo.cvc}
              placeholder="XXX"
              onChange={handleInputChange}
            />
            {errors.cvc && (
              <p className="text-red-500 text-xs italic">{errors.cvc}</p>
            )}
          </div>
        </div>
        <div>
          <Button className="w-full rounded text-white mt-8 p-3 bg-[#131313]">
            გადახდა
          </Button>
        </div>
      </div>
    </div>
  );
};

export default CardSimulation;
