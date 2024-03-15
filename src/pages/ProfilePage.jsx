import { useState, useEffect } from "react";
import ProfileIcon from "../assets/icons/profile.svg";
import ProfileSidebar from "../components/profileSidebar";
import Profile from "../components/userInfo/Profile";
import Purchase from "../components/userInfo/Purchase";
import Logout from "./Logout";
import WishList from "../components/userInfo/WishList";
import { useTranslation } from "react-i18next";
export default function ProfilePage() {
  const [selectedPage, setSelectedPage] = useState(
    localStorage.getItem("selectedPage") || null
  );
  const { t } = useTranslation("global");
  useEffect(() => {
    localStorage.setItem("selectedPage", selectedPage);
  }, [selectedPage]);
  return (
    <div className="dark:bg-white  bg-[#060814] dark:text-black text-white py-10">
      <div className="custom-container">
        <div className="flex flex-col">
          <div className="flex flex-row items-center gap-1 border-b border-gray-200 pb-4">
            <img src={ProfileIcon} alt="profile photo" />
            <h1 className="dark:text-black text-white font-bold text-2xl ">
              {" "}
              {t("modals.hello")}{" "}
            </h1>
          </div>
          <div className="flex flex-row justify-between">
            <div>
              <ProfileSidebar onItemClick={setSelectedPage} />
            </div>
            <div className="w-full h-full">
              {selectedPage === "Profile" && <Profile />}
              {selectedPage === "Purchase" && <Purchase />}
              {selectedPage === "Wishlist" && <WishList />}
              {selectedPage === "Logout" && <Logout />}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
