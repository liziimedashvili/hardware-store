/* eslint-disable no-unused-vars */
import React from "react";
import { useTranslation } from "react-i18next";
export default function TradeIn() {
  const { t } = useTranslation("global");
  return (
    <div className="dark:bg-white  bg-[#060814] dark:text-black text-white">
      <div className="custom-container py-10">
        <div className="border-b border-gray-200">
          <h4 className="font-semibold text-base leading-6  ">
            {t("tradeIn.text1")}
          </h4>
        </div>
        <div className="mt-4">
          <h4 className="font-semibold text-base leading-6 ">
            {t("tradeIn.text2")}
          </h4>
          <span>{t("tradeIn.text3")}</span>
        </div>
        <div className="mt-4">
          <h4 className="font-semibold text-base leading-6 ">
            {t("tradeIn.text4")}
          </h4>
          <span>{t("tradeIn.text5")}</span>
        </div>
        <div className="mt-4">
          <h4 className="font-semibold text-base leading-6 ">
            {t("tradeIn.text6")}
          </h4>
          <span>{t("tradeIn.text7")}</span>
        </div>
        <div className="mt-4">
          <h4 className="font-semibold text-base leading-6 ">
            {t("tradeIn.text8")}
          </h4>
          <span>{t("tradeIn.text9")}</span>
        </div>
        <div className="mt-4">
          <h4 className="font-semibold text-base leading-6 ">
            {t("tradeIn.text10")}
          </h4>
          <span>{t("tradeIn.text11")}</span>
        </div>
        <div className="mt-4">
          <h4 className="font-semibold text-base leading-6 ">
            {t("tradeIn.text12")}
          </h4>
          <span>{t("tradeIn.text13")}</span>
        </div>
        <div className="mt-4">
          <h4 className="font-semibold text-base leading-6 ">
            {t("tradeIn.text14")}
          </h4>
          <span>{t("tradeIn.text15")}</span>
        </div>
        <div className="mt-4">
          <h4 className="font-semibold text-base leading-6 ">
            {t("tradeIn.text16")}
          </h4>
          <span>{t("tradeIn.text17")}</span>
        </div>
        <div className="mt-4">
          <h4 className="font-semibold text-base leading-6 ">
            {t("tradeIn.text18")}
          </h4>
          <span>{t("tradeIn.text19")}</span>
        </div>
      </div>
    </div>
  );
}
