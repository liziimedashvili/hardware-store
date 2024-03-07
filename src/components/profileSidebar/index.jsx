/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";

const ProfileSidebar = ({ onItemClick }) => {
  const handleItemClick = (page) => {
    onItemClick(page);
  };

  return (
    <div>
      <ul className=" text-gray-600 flex justify-between border-r border-gray-300 flex-col gap-8 mt-10 w-56 p-4 cursor-pointer">
        <li onClick={() => handleItemClick("Profile")}>პროფილი</li>
        <li onClick={() => handleItemClick("Purchase")}>შეკვეთები</li>
        <li onClick={() => handleItemClick("Logout")}>გამოსვლა</li>
      </ul>
    </div>
  );
};

export default ProfileSidebar;
