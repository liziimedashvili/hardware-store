/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { useState } from "react";
import { useTranslation } from "react-i18next";
const ProfileSidebar = ({ onItemClick }) => {
  const [selectedItem, setSelectedItem] = useState(null);
  const handleItemClick = (page) => {
    onItemClick(page);
    setSelectedItem(page);
  };
  const { t } = useTranslation("global");
  return (
    <div className="py-10">
      <ul className="ext-grey-600 flex flex-col border-r-2 h-full gap-5 p-4 cursor-pointer">
        <li
          onClick={() => handleItemClick("Profile")}
          style={{ fontWeight: selectedItem === "Profile" ? "bold" : "normal" }}
        >
          {t("header.profile")}
        </li>
        <li
          onClick={() => handleItemClick("Purchase")}
          style={{
            fontWeight: selectedItem === "Purchase" ? "bold" : "normal",
          }}
        >
          {t("profile.purchases")}
        </li>
        <li
          onClick={() => handleItemClick("Wishlist")}
          style={{
            fontWeight: selectedItem === "Wishlist" ? "bold" : "normal",
          }}
        >
          {t("profile.wishlist")}
        </li>
        <li
          onClick={() => handleItemClick("Logout")}
          style={{ fontWeight: selectedItem === "Logout" ? "bold" : "normal" }}
        >
          {t("profile.exit")}
        </li>
      </ul>
    </div>
  );
};

export default ProfileSidebar;
