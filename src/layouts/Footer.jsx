/* eslint-disable no-unused-vars */
import React from "react";
import facebook from "../assets/icons/fb.svg";
import instagram from "../assets/icons/instagram.svg";
import youtube from "../assets/icons/youtube.svg";
import tiktok from "../assets/icons/tiktok.svg";
import Phone from "../assets/icons/header-phone.svg";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import LanguageSwitcher from "../components/LanguageSwitcherButtons";
export default function Footer() {
  const { t } = useTranslation("global");
  return (
    <div className="dark:bg-[#f2f2f2] bg-gray-300 ">
      <div className="custom-container py-5 px-0 flex justify-between">
        <div className="flex flex-col  gap-5">
          <span className="text-black font-bold text-sm leading-5 pb-[15px] mb-[5px] border-b border-orange-600 ">
            {t("header.navigation")}
          </span>
          <Link
            to="/tradepolicy"
            className="text-black font-medium text-xs leading-4 opacity-70 cursor-pointer hover:opacity-100"
          >
            {t("headline.tradepolicy")}
          </Link>

          <Link
            to="/installment"
            className="text-black font-medium text-xs leading-4 opacity-70 cursor-pointer hover:opacity-100"
          >
            {t("headline.installment")}
          </Link>
          <Link
            to="/career"
            className="text-black font-medium text-xs leading-4 opacity-70 cursor-pointer hover:opacity-100"
          >
            {t("headline.career")}
          </Link>
          <Link
            to="/tradein"
            className="text-black font-medium text-xs leading-4 opacity-70 cursor-pointer hover:opacity-100"
          >
            {t("headline.tradein")}
          </Link>
        </div>

        <div className="flex flex-col  gap-5">
          <span className="text-black font-bold text-sm leading-5 pb-[15px] mb-[5px] border-b border-orange-600 ">
            {t("footer.follow")}
          </span>
          <Link
            to="https://www.facebook.com/zoommerge/?ref=page_internal"
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-row items-center gap-2"
          >
            <img src={facebook} alt="Facebook" />
            <span className="text-black font-medium text-xs leading-4 opacity-70 cursor-pointer hover:opacity-100">
              Facebook
            </span>
          </Link>
          <Link
            to="https://www.instagram.com/zoommer.ge/?hl=en"
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-row items-center gap-2"
          >
            <img src={instagram} alt="Instagram" />
            <span className="text-black font-medium text-xs leading-4 opacity-70 cursor-pointer hover:opacity-100">
              Instagram
            </span>
          </Link>

          <Link
            to="https://www.youtube.com/user/WwwZoommerGe"
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-row items-center gap-2"
          >
            <img src={youtube} alt="YouTube" />
            <span className="text-black font-medium text-xs leading-4 opacity-70 cursor-pointer hover:opacity-100">
              YouTube
            </span>
          </Link>

          <Link
            to="https://www.tiktok.com/@zoommer.ge"
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-row items-center gap-2"
          >
            <img src={tiktok} alt="Tiktok" />
            <span className="text-black font-medium text-xs leading-4 opacity-70 cursor-pointer hover:opacity-100">
              Tiktok
            </span>
          </Link>
        </div>
        <div className="flex flex-col  gap-5">
          <span className="text-black font-bold text-sm leading-5 pb-[15px] mb-[5px] border-b border-orange-600 ">
            {t("footer.contact")}
          </span>

          <span className="text-black font-medium text-xs  leading-4 opacity-70 cursor-pointer hover:opacity-100">
            Info@zoommer.ge
          </span>

          <div className="flex flex-row items-center gap-2">
            <img src={Phone} />

            <a
              href="tel:+995322603060"
              className="text-black font-medium text-xs  leading-4 opacity-70 cursor-pointer hover:opacity-100"
            >
              *7007 / +995 (32) 2 60 30 60
            </a>
          </div>
        </div>
        <div className="flex flex-col  gap-5">
          <span className="text-black font-bold text-sm leading-5 pb-[15px] mb-[5px] border-b border-orange-600 ">
            {t("footer.about")}
          </span>

          <span className="text-black font-medium text-xs  leading-4 opacity-70 cursor-pointer hover:opacity-100">
            Zoommer
          </span>

          <LanguageSwitcher />
        </div>
      </div>
    </div>
  );
}
