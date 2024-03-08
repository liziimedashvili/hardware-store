/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { useState } from "react";

const ProfileSidebar = ({ onItemClick }) => {
  const [selectedItem, setSelectedItem] = useState(null);
  const handleItemClick = (page) => {
    onItemClick(page);
    setSelectedItem(page);
  };

  return (
    <div>
      <ul className="ext-grey-600 flex flex-col border-r-2 h-full gap-5 p-4 cursor-pointer">
        <li
          onClick={() => handleItemClick("Profile")}
          style={{ fontWeight: selectedItem === "Profile" ? "bold" : "normal" }}
        >
          პროფილი
        </li>
        <li
          onClick={() => handleItemClick("Purchase")}
          style={{
            fontWeight: selectedItem === "Purchase" ? "bold" : "normal",
          }}
        >
          შეკვეთები
        </li>
        <li
          onClick={() => handleItemClick("Logout")}
          style={{ fontWeight: selectedItem === "Logout" ? "bold" : "normal" }}
        >
          გამოსვლა
        </li>
      </ul>
    </div>
  );
};

export default ProfileSidebar;
