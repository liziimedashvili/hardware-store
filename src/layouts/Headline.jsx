/* eslint-disable no-unused-vars */
import React from "react";
import PhoneIcon from "../assets/icons/header-phone.svg";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
export default function Headline() {
  const { t } = useTranslation("global");
  return (
    <div className="bg-[#ec5e2a] ">
      <div className="custom-container  py-[10px] flex flex-col md:flex-row  sm:flex-row justify-between">
        <div className="flex flex-row items-center justify-center md:justify-start gap-4 cursor-pointer">
          <img src={PhoneIcon} />
          <a
            href="tel:+995322603060"
            className="text-white  font-medium text-xs opacity-90 leading-4 hover:opacity-100"
          >
            *7007 / +995 (32) 2 60 30 60
          </a>
        </div>
        <div className="flex flex-col md:flex-row sm:flex-row items-center gap-5">
          <Link
            to="/tradepolicy"
            className="text-white  font-medium text-xs leading-4 opacity-70 cursor-pointer hover:opacity-100 md:mr-4"
          >
            {t("headline.tradepolicy")}
          </Link>

          <Link
            to="/career"
            className="text-white  font-medium text-xs leading-4 opacity-70 cursor-pointer hover:opacity-100 md:mr-4"
          >
            {t("headline.career")}
          </Link>

          <Link
            to="/installment"
            className="text-white  font-medium text-xs leading-4 opacity-70 cursor-pointer hover:opacity-100 md:mr-4"
          >
            {t("headline.installment")}
          </Link>

          <Link
            to="/tradein"
            className="text-white  font-medium text-xs leading-4 opacity-70 cursor-pointer hover:opacity-100"
          >
            {t("headline.tradein")}
          </Link>
        </div>
      </div>
    </div>
  );
}
