/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
/* eslint-disable react/no-children-prop */
import React, { useState } from "react";
import Modal from "./Modal";
import Input from "../input";
import Button from "../button";
import axios from "axios";
import Registration from "./Registration";

const Login = ({ showModal, handleClose, onLoggedIn }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showRegistration, setShowRegistration] = useState(false);

  const handleLogin = async () => {
    try {
      const response = await axios.post(
        `${import.meta.env.VITE_API_BASE_URL}auth/login`,
        {
          email: email,
          password: password,
        }
      );

      onLoggedIn(true);
      handleClose(true);
      setEmail("");
      setPassword("");
    } catch (error) {
      console.error("Login Error:", error);
    }
  };

  const handleToggleRegistration = () => {
    setShowRegistration(!showRegistration);
  };

  return (
    <Modal isModalOpen={showModal} onClose={handleClose}>
      <div className="flex justify-center flex-col gap-4">
        <h2 className="text-center text-2xl font-medium">ავტორიზაცია</h2>
        <div className="flex gap-4 flex-col items-center">
          <Input
            type="email"
            id="emailInput"
            placeholder="ელ-ფოსტა"
            value={email}
            onChange={(e) => setEmail(e)}
          />
          <Input
            type="password"
            placeholder="პაროლი"
            id="passwordInput"
            value={password}
            onChange={(e) => setPassword(e)}
          />
        </div>

        {!showRegistration && (
          <div className="flex justify-end">
            <Button onClick={handleToggleRegistration} children="რეგისტრაცია" />
          </div>
        )}
        
        {showRegistration && (
          <Registration showModal={showModal} handleClose={handleClose} />
        )}

        {!showRegistration && (
          <div className="flex justify-center">
            <Button onClick={handleLogin} children="შესვლა" className="bg-orange-600 text-white w-full rounded-[12px] p-2" />
          </div>
        )}
      </div>
    </Modal>
  );
};

export default Login;
