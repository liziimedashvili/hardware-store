/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import React from "react";
import { useTranslation } from "react-i18next";
export default function TradePolicy() {
  const { t } = useTranslation("global");
  return (
    <div className="dark:bg-white bg-[#060814] dark:text-black text-white">
      <div className="custom-container pb-10 ">
        <div className="border-b-2 pt-8  border-white-400">
          <h1 className="font-semibold text-base leading-6 ">
            {t("tradePolicy.text1")}
          </h1>
        </div>
        <h3 className="font-bold text-center mt-4">{t("tradePolicy.text2")}</h3>
        <div className="flex items-start flex-col justify-between gap-4">
          <span className=" text-base text-gray-500">
            {t("tradePolicy.text3")}
          </span>

          <span>{t("tradePolicy.text4")}</span>

          <span>{t("tradePolicy.text5")}</span>
          <span className=" text-base text-gray-500">
            {t("tradePolicy.text6")}
          </span>
          <span>{t("tradePolicy.text7")}</span>
          <span>{t("tradePolicy.text8")}</span>
          <span>{t("tradePolicy.text9")}</span>
          <span>{t("tradePolicy.text10")}</span>
          <span>{t("tradePolicy.text11")}</span>
          <span>{t("tradePolicy.text12")}</span>
          <span>{t("tradePolicy.text13")}</span>
          <span>{t("tradePolicy.text14")}</span>
          <span className=" text-base text-gray-500">
            {t("tradePolicy.text15")}
          </span>
          <span>{t("tradePolicy.text16")}</span>
          <span className=" text-base text-gray-500">
            {t("tradePolicy.text17")}
          </span>
          <span>{t("tradePolicy.text18")}</span>
          <span className=" text-base text-gray-500">
            {t("tradePolicy.text19")}
          </span>
          <span>{t("tradePolicy.text20")}</span>
          <span className=" text-base text-gray-500">
            {t("tradePolicy.text21")}
          </span>
          <span>{t("tradePolicy.text22")}</span>
        </div>
      </div>
    </div>
  );
}
