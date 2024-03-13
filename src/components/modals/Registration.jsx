/* eslint-disable react/no-children-prop */
/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React, { useState } from "react";
import Modal from "./Modal";
import Input from "../input";
import Button from "../button";
import { registration } from "../../services/services";
import { useTranslation } from "react-i18next";
const Registration = ({ onSuccess, showModal, handleClose }) => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [error, setError] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const { t } = useTranslation("global");
  const handleRegistration = async () => {
    setError("");
    if (password !== confirmPassword) {
      setError("პაროლი არ ემთხვევა");
      return;
    }
    if (phoneNumber.length !== 9) {
      setError("ტელეფონის ნომერი უნდა იყოს 9 ციფრიანი");
      return;
    }
    if (password.length < 8) {
      setError("პაროლი უნდა იყოს 8 სიმბოლოზე მეტი ან ტოლი");
      return;
    }
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
      setError("ელფოსტა უნდა იყოს მოქმედი ელფოსტის მისამართი");
      return;
    }

    try {
      const response = await registration({
        first_name: firstName,
        last_name: lastName,
        email: email,
        password: password,
        phone_number: phoneNumber,
      });
      console.log(response);
      onSuccess(true);
      handleClose();
    } catch (error) {
      console.error("Registration Error:", error);
      setError("An error occurred during registration. Please try again.");
    }
  };

  return (
    <Modal isModalOpen={showModal} onClose={handleClose}>
      <div className="flex justify-center flex-col gap-4">
        <h2 className="text-center text-2xl font-medium">
          {t("modals.registration")}
        </h2>
        <div className="flex gap-4 flex-col items-center">
          <Input
            type="text"
            id="firstNameInput"
            placeholder={t("modals.name")}
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />
          <Input
            type="text"
            id="lastNameInput"
            placeholder={t("modals.surName")}
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          />
          <Input
            type="email"
            id="emailInput"
            placeholder={t("modals.email")}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <Input
            type="password"
            id="passwordInput"
            placeholder={t("modals.password")}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <Input
            type="password"
            id="confirmPasswordInput"
            placeholder={t("modals.repeatPassword")}
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
          {error && <p className="text-red-500">{error}</p>}
          <Input
            type="tel"
            id="phoneNumberInput"
            placeholder={t("modals.phoneNumber")}
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
          />
        </div>
        <div className="flex justify-center">
          <Button
            onClick={handleRegistration}
            className="bg-orange-600 text-white w-full rounded-[12px] p-2"
          >
            {t("modals.registration")}
          </Button>
        </div>
      </div>
    </Modal>
  );
};

export default Registration;
