/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
/* eslint-disable react/no-children-prop */
import React, { useState } from "react";
import Modal from "./Modal";
import Input from "../input";
import Button from "../button";
import Registration from "./Registration";
import { login } from "../../services/services";
import { useTranslation } from "react-i18next";
const Login = ({ showModal, handleClose, onLoggedIn }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showRegistration, setShowRegistration] = useState(false);
  const [error, setError] = useState("");
  const { t } = useTranslation("global");
  const handleLogin = async () => {
    if (!email || !password) {
      setError("გთხოვთ შეავსოთ ყველა ველი");
      return;
    } else {
      try {
        const response = await login({
          email: email,
          password: password,
        });

        console.log(response);
        const { access_token, refresh_token } = response.data;
        localStorage.setItem("accessToken", access_token);
        localStorage.setItem("refreshToken", refresh_token);
        onLoggedIn(true);
        handleClose(true);
        setEmail("");
        setPassword("");
      } catch (error) {
        console.error("Login Error:", error);
      }
    }
  };

  const handleToggleRegistration = () => {
    setShowRegistration(!showRegistration);
  };

  return (
    <Modal isModalOpen={showModal} onClose={handleClose}>
      <div className="flex justify-center flex-col gap-4">
        <h2 className="text-center text-2xl font-medium">
          {" "}
          {t("modals.autheticationn")}
        </h2>
        <div className="flex gap-4 flex-col items-center">
          <Input
            type="email"
            id="emailInput"
            placeholder={t("modals.email")}
            value={email}
            onChange={(e) => setEmail(e)}
          />
          <Input
            type="password"
            placeholder={t("modals.password")}
            id="passwordInput"
            value={password}
            onChange={(e) => setPassword(e)}
          />
          {error && <p className="text-red-500">{error}</p>}
        </div>

        {!showRegistration && (
          <div className="flex justify-end">
            <Button
              onClick={handleToggleRegistration}
              children={t("modals.registration")}
            />
          </div>
        )}

        {showRegistration && (
          <Registration showModal={showModal} handleClose={handleClose} />
        )}

        {!showRegistration && (
          <div onClick={handleLogin} className="flex justify-center">
            <Button
              children={t("header.enter")}
              className="bg-orange-600 text-white w-full rounded-[12px] p-2"
            />
          </div>
        )}
      </div>
    </Modal>
  );
};

export default Login;
