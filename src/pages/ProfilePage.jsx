import { useState } from "react";
import ProfileIcon from "../assets/icons/profile.svg";
import ProfileSidebar from "../components/profileSidebar";
import Profile from "../components/userInfo/Profile";
import Purchase from "../components/userInfo/Purchase";
import Logout from "./Logout";
export default function ProfilePage() {
  const [selectedPage, setSelectedPage] = useState(null);

  return (
    <div className="custom-container">
      <div className="mt-10 flex flex-col">
        <div className="flex flex-row items-center gap-1 border-b border-gray-200 pb-4">
          <img src={ProfileIcon} alt="profile photo" />
          <h1 className="text-black font-bold text-2xl ">გამარჯობა </h1>
        </div>
        <div className="flex flex-row justify-between">
          <div>
            <ProfileSidebar onItemClick={setSelectedPage} />
          </div>
          <div className="w-full h-full">
            {selectedPage === "Profile" && <Profile />}
            {selectedPage === "Purchase" && <Purchase />}
            {selectedPage === "Logout" && <Logout />}
          </div>
        </div>
      </div>
    </div>
  );
}
