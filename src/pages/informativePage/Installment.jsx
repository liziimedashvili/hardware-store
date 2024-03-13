/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import React from "react";
import buy1 from "../../assets/images/1buy.png";
import buy2 from "../../assets/images/2buy.png";
import buy3 from "../../assets/images/3buy.png";
import buy4 from "../../assets/images/4buy.png";
import { useTranslation } from "react-i18next";
export default function Installment() {
  const { t } = useTranslation("global");
  return (
    <div className="custom-container">
      <div className="pb-6 mb-8 border-b-2 mt-8 border-white-400">
        <h1 className="font-semibold text-base leading-6 text-black">
          {t("installment.text1")}
        </h1>
      </div>
      <h3 className="font-bold text-center mt-4 mb-3">
        {t("installment.text2")}
      </h3>
      <div className="flex items-center flex-col justify-between gap-4">
        <span className="font-bold text-sm ">{t("installment.text3")}</span>
        <span>{t("installment.text4")}</span>
        <span>{t("installment.text5")}</span>
        <span>{t("installment.text6")}</span>
        <img src={buy1} width={602} height={197} />
        <span>{t("installment.text7")}</span>
        <img src={buy2} width={602} height={197} />
        <span>{t("installment.text8")}</span>
        <img src={buy3} width={450} height={130} />
        <span>{t("installment.text9")}</span>
        <img src={buy4} width={450} height={130} />
        <span>{t("installment.text10")}</span>
        <span>{t("installment.text11")}</span>
        <span>{t("installment.text12")}</span>
        <span>{t("installment.text13")}</span>
        <span>{t("installment.text14")}</span>
      </div>
      <div />
    </div>
  );
}
