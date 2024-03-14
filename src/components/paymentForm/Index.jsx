/* eslint-disable react/no-children-prop */
/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React, { useState } from "react";
import Cards from "react-credit-cards-2";
import "react-credit-cards-2/dist/es/styles-compiled.css";
import Button from "../button";
import Success from "../modals/Success";
import { useNavigate } from "react-router-dom";
import { purchaseProducts } from "../../services/services";
import { useTranslation } from "react-i18next";

const PaymentForm = ({ paymentParams }) => {
  const [showLocationForm, setShowLocationForm] = useState(true);
  const [showCardForm, setShowCardForm] = useState(false);
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [userLocation, setUserLocation] = useState("");
  const [userLocationError, setUserLocationError] = useState("");
  const { t } = useTranslation("global");
  const [state, setState] = useState({
    number: "",
    expiry: "",
    cvc: "",
    name: "",
    focus: "",
  });
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [errors, setErrors] = useState({});
  const nav = useNavigate();

  const handleLocationSubmit = (evt) => {
    evt.preventDefault();

    if (!userLocation) {
      setUserLocationError("შეიყვანეთ თქვენი ლოკაცია");
      return;
    }

    setShowLocationForm(false);
    setShowCardForm(true);
  };

  const handleInputChange = (evt) => {
    const { name, value } = evt.target;

    setState((prev) => ({ ...prev, [name]: value }));
    setErrors({ ...errors, [name]: null });
  };

  const handleInputFocus = (evt) => {
    setState((prev) => ({ ...prev, focus: evt.target.name }));
  };

  const handleSubmit = async (evt) => {
    evt.preventDefault();

    const validationErrors = validateForm();

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    try {
      const response = await purchaseProducts(paymentParams);

      console.log("Purchase data:", response.data);
      setShowSuccessModal(true);

      setState({
        number: "",
        expiry: "",
        cvc: "",
        name: "",
        focus: "",
      });

      setTimeout(() => {
        nav("/");
      }, 3000);
    } catch (error) {
      console.error("Error processing payment:", error);
      setErrorMessage(
        "An error occurred while processing your payment. Please try again later."
      );
    }
  };

  const validateForm = () => {
    const errors = {};

    if (!state.number) {
      errors.number = "Card number is required";
    } else if (!/^\d{16}$/.test(state.number)) {
      errors.number = "Invalid card number";
    }

    if (!state.name) {
      errors.name = "Name is required";
    }

    if (!state.expiry) {
      errors.expiry = "Expiry date is required";
    } else if (!/^(0[1-9]|1[0-2])\/\d{2}$/.test(state.expiry)) {
      errors.expiry = "Invalid expiry date";
    } else {
      const [month, year] = state.expiry.split("/");
      const currentDate = new Date();
      const currentYear = currentDate.getFullYear() % 100;

      if (
        parseInt(year, 10) < currentYear ||
        parseInt(year, 10) > currentYear + 10
      ) {
        errors.expiry =
          "Expiry year should be between " +
          currentYear +
          " and " +
          (currentYear + 10);
      }
      if (parseInt(month, 10) < 1 || parseInt(month, 10) > 12) {
        errors.expiry = "Expiry month should be between 01 and 12";
      }
    }

    if (!state.cvc) {
      errors.cvc = "CVC is required";
    } else if (!/^\d{3,4}$/.test(state.cvc)) {
      errors.cvc = "Invalid CVC";
    }

    return errors;
  };
  return (
    <div className="dark:bg-white  bg-[#060814] dark:text-black text-white">
      <div className="custom-container py-10">
        <div className="flex items-center justify-center">
          {showLocationForm && (
            <form
              onSubmit={handleLocationSubmit}
              className="flex flex-col gap-y-[10px] items-center w-[500px] h-[37vh]"
            >
              <label htmlFor="location" className="font-bold text-[18px]">
                {t("input.fillInput")}
              </label>
              <input
                type="text"
                id="location"
                value={userLocation}
                onChange={(e) => {
                  setUserLocation(e.target.value);
                  setUserLocationError("");
                }}
                className="focus:outline-none font-bold text-base w-full bg-gray-300 dark:text-white text-gray-500 px-[16px] py-[16px] rounded-[16px]"
              />
              {userLocationError && (
                <div className="border-red-600">{userLocationError}</div>
              )}
              <Button
                type="submit"
                children={t("input.submit")}
                className="bg-orange-600 text-white w-full cursor-pointer rounded-lg p-2"
              />
            </form>
          )}
        </div>
        {showCardForm && (
          <div className="flex flex-col gap-5 items-center">
            <>
              <Cards
                number={state.number}
                expiry={state.expiry}
                cvc={state.cvc}
                name={state.name}
                focused={state.focus}
              />
              <form
                onSubmit={handleSubmit}
                className="flex flex-col gap-y-[10px] w-[400px] dark:text-white text-gray-500"
              >
                <input
                  type="number"
                  name="number"
                  placeholder="Card Number"
                  value={state.number}
                  onChange={handleInputChange}
                  onFocus={handleInputFocus}
                  className={`border ${
                    errors.number ? "border-red-500" : "border-gray-500"
                  } px-4 py-2 rounded-md`}
                />

                {errors.number && (
                  <div className="border-red-600">{errors.number}</div>
                )}
                <input
                  type="text"
                  name="name"
                  placeholder="Name"
                  value={state.name}
                  onChange={handleInputChange}
                  onFocus={handleInputFocus}
                  className={`border ${
                    errors.number ? "border-red-500" : "border-gray-500"
                  } px-4 py-2 rounded-md`}
                />
                {errors.name && (
                  <div className="border-red-600">{errors.name}</div>
                )}
                <input
                  type="text"
                  name="expiry"
                  placeholder="MM/YY Expiry"
                  value={state.expiry}
                  onChange={handleInputChange}
                  onFocus={handleInputFocus}
                  className={`border ${
                    errors.number ? "border-red-500" : "border-gray-500"
                  } px-4 py-2 rounded-md`}
                />
                {errors.expiry && (
                  <div className="border-red-600">{errors.expiry}</div>
                )}
                <input
                  type="number"
                  name="cvc"
                  placeholder="CVC"
                  value={state.cvc}
                  onChange={handleInputChange}
                  onFocus={handleInputFocus}
                  className={`border ${
                    errors.number ? "border-red-500" : "border-gray-500"
                  } px-4 py-2 rounded-md`}
                />
                {errors.cvc && <div className="text-red-900">{errors.cvc}</div>}
                <Button
                  type="submit"
                  children={t("input.submit")}
                  className="bg-orange-600 text-white w-full p-2 rounded-lg"
                />
              </form>
              {successMessage && (
                <div className="text-green-900">{successMessage}</div>
              )}
              {errorMessage && (
                <div className="text-red-900">{errorMessage}</div>
              )}
            </>
          </div>
        )}
        {showSuccessModal && (
          <Success
            title={t("input.successfulPayment")}
            showModal={showSuccessModal}
            handleClose={() => setShowSuccessModal(false)}
          />
        )}
      </div>
    </div>
  );
};

export default PaymentForm;
