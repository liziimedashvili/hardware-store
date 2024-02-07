/* eslint-disable react/no-children-prop */
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */

import Button from "../button";
import Input from "../input";
import React, { useState } from "react";
import axios from "axios";
import Modal from "./Modal";
export default function Login({ showModal, handleClose, onLoggedIn }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleLogin = async () => {
    try {
      const response = await axios.post(
        `${import.meta.env.VITE_API_BASE_URL}auth/login`,
        {
          email,
          password,
        }
      );
      onLoggedIn(true);
      handleClose(true);
      setEmail("");
      setPassword("");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Modal isModalOpen={showModal} onClose={handleClose}>
        <div className="flex justify-center flex-col gap-4">
          <h2 className="text-center text-2xl font-bold">ავტორიზაცია</h2>
          <div className="flex gap-4 flex-col items-center">
            <Input
              type="email"
              id="emailInput"
              placeholder="ელ.ფოსტა"
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
          <div className="flex justify-center">
            <Button
              onClick={handleLogin}
              children="შესვლა"
              className="bg-primary text-white w-full"
            />
          </div>
        </div>
      </Modal>
  );
}
