/* eslint-disable no-unused-vars */
import React from "react";
import CareerLogo from "../../assets/images/zoommercarrerlogo.png";
import CareerPhoto from "../../assets/images/zoommerccareer.png";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
export default function Career() {
  const { t } = useTranslation("global");
  return (
    <div className="custom-container">
      <div className=" mt-9">
        <div className="border-b border-gray-200">
          <h4 className="font-semibold text-base leading-6 text-black ">
            {t("career.text1")}
          </h4>
        </div>
        <div>
          <h3 className="font-bold text-center mt-4 mb-3">
            {" "}
            {t("career.text2")}
          </h3>
        </div>
        <div className="flex flex-row gap-6">
          <div className="flex items-items center flex-col justify-between gap-5">
            <span className="font-bold text-sm">{t("career.text3")}</span>
            <span>{t("career.text4")}</span>
            <span>{t("career.text5")}</span>
            <span>{t("career.text6")}</span>
            <span>{t("career.text7")}</span>
          </div>
          <div>
            <img src={CareerLogo} />
          </div>
        </div>
        <div className="flex flex-row gap-6 mt-5">
          <div className="flex items-items center flex-col justify-between gap-5">
            <span className="font-bold text-sm">{t("career.text8")}</span>
            <span>{t("career.text9")}</span>
            <span>{t("career.text10")}</span>
            <span>{t("career.text11")}</span>
            <span>{t("career.text12")}</span>
          </div>
          <div>
            <img src={CareerPhoto} />
          </div>
        </div>

        <div className="mt-8">
          <Link
            to="https://jobs.ge/?view=client&client=zoommer-georgia"
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-row items-center gap-2"
          >
            <span className="text-blue-700 font-bold text-md  cursor-pointer hover:opacity-100 underline">
              {t("career.text13")}
            </span>
          </Link>
        </div>
        <div className="mt-5">
          <h4 className="font-semibold text-base leading-6 text-black ">
            {t("career.text14")}
          </h4>
        </div>
        <div className="mt-5">
          <h4 className="font-semibold text-base leading-6 text-black ">
            {t("career.text15")}
          </h4>
          <span>{t("career.text16")}.</span>
        </div>
        <div className="mt-5">
          <h4 className="font-semibold text-base leading-6 text-black ">
            {t("career.text17")}
          </h4>
          <span>{t("career.text18")}</span>
        </div>
        <div className="mt-5">
          <h4 className="font-semibold text-base leading-6 text-black ">
            {t("career.text19")}
          </h4>
          <span>{t("career.text20")}</span>
        </div>
        <div className="mt-5">
          <h4 className="font-semibold text-base leading-6 text-black ">
            {t("career.text21")}
          </h4>
          <span>
            {t("career.text22")}
            <span className="text-blue-700 text-sm font-medium">
              vacancy@zoommer.ge;
            </span>
          </span>
        </div>
      </div>
    </div>
  );
}
