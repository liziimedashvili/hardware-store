/* eslint-disable react/no-children-prop */
/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React, { useState } from "react";
import Modal from "./Modal";
import Input from "../input";
import Button from "../button";
import axios from "axios";

const Registration = ({ onSuccess, showModal, handleClose }) => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [error, setError] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleRegistration = async () => {
    try {
      if (password !== confirmPassword) {
        setError("Passwords do not match");
        return;
      }

      const response = await axios.post(
        `${import.meta.env.VITE_API_BASE_URL}auth/register`,
        {
          first_name: firstName,
          last_name: lastName,
          email: email,
          password: password,
          phone_number: phoneNumber,
        }
      );

      onSuccess(true);

      handleClose();
    } catch (error) {
      console.error("Registration Error:", error);
    }
  };

  return (
    <Modal isModalOpen={showModal} onClose={handleClose}>
      <div className="flex justify-center flex-col gap-4">
        <h2 className="text-center text-2xl font-medium">რეგისტრაცია</h2>
        <div className="flex gap-4 flex-col items-center">
          <Input
            type="text"
            id="firstNameInput"
            placeholder="სახელი"
            value={firstName}
            onChange={(e) => setFirstName(e)}
          />
          <Input
            type="text"
            id="lastNameInput"
            placeholder="გვარი"
            value={lastName}
            onChange={(e) => setLastName(e)}
          />
          <Input
            type="email"
            id="emailInput"
            placeholder="ელ-ფოსტა"
            value={email}
            onChange={(e) => setEmail(e)}
          />
          <Input
            type="password"
            id="passwordInput"
            placeholder="პაროლი"
            value={password}
            onChange={(e) => setPassword(e)}
          />
          <Input
            type="password"
            id="confirmPasswordInput"
            placeholder="გაიმეორეთ პაროლი"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e)}
          />
          {error && <p className="text-red-500">{error}</p>}
          <Input
            type="tel"
            id="phoneNumberInput"
            placeholder="ტელეფონის ნომერი"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e)}
          />
        </div>
        <div className="flex justify-center">
          <Button
            onClick={handleRegistration}
            children="რეგისტრაცია"
            className="bg-orange-600 text-white w-full rounded-[12px] p-2"
          />
        </div>
      </div>
    </Modal>
  );
};

export default Registration;
