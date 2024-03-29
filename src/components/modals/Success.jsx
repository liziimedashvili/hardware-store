/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from "react";
import Modal from "./Modal";
import Button from "../button";
import SuccessIcon from "../Icons/SuccessIcon";
import { useTranslation } from "react-i18next";
export default function Success({ title, showModal, handleClose }) {
  const { t } = useTranslation("global");
  return (
    <Modal isModalOpen={showModal} onClose={handleClose}>
      <div>
        <div className="flex justify-center items-center">
          <SuccessIcon />
        </div>
        <h2 className="text-center text-2xl font-bold mt-4 mb-12">{title}</h2>
        <div className="flex justify-center w-100">
          <Button title={t("modals.okey")} onClick={handleClose} width="100%" />
        </div>
      </div>
    </Modal>
  );
}
