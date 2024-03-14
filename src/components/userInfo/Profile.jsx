/* eslint-disable react/no-children-prop */
/* eslint-disable no-unused-vars */
import { useState, useEffect } from "react";
import Button from "../button";
import ProfilePhoto from "../../assets/images/partner.png";
import { getUserinfo, updateUserinfo } from "../../services/services";
import { useTranslation } from "react-i18next";
export default function Profile() {
  const [userInfo, setUserInfo] = useState({
    first_name: "",
    last_name: "",
    phone_number: "",
  });
  const [updatedInfo, setUpdatedInfo] = useState(null);
  const { t } = useTranslation("global");
  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserInfo((prevUserInfo) => ({
      ...prevUserInfo,
      [name]: value,
    }));
  };

  const handleUpdateProfile = async () => {
    try {
      const response = await updateUserinfo(userInfo);
      setUpdatedInfo(response.data);
      setUserInfo(response.data);
      console.log("Profile updated successfully", response.data);
    } catch (error) {
      console.error("Error updating profile:", error.message);
    }
  };

  const fetchUpdatedUserInfo = async () => {
    try {
      const response = await getUserinfo();
      setUserInfo(response.data);
      console.log("User data fetched successfully", response.data);
    } catch (error) {
      console.error("Error fetching user data", error);
    }
  };

  useEffect(() => {
    if (updatedInfo === null) {
      fetchUpdatedUserInfo();
    }
  }, [updatedInfo]);

  return (
    <div className="mt-10 ml-10  flex flex-row justify-between">
      <div className="flex  flex-col  ">
        <h2 className="text-lg font-bold mb-5">
          {" "}
          {t("profile.profileUpdate")}
        </h2>
        <form className="flex flex-col gap-y-[20px]  dark:text-gray-600 text-black ">
          <input
            type="text"
            name="phone_number"
            placeholder={t("modals.phoneNumber")}
            value={userInfo.phone_number}
            onChange={handleChange}
            className="focus:outline-none font-serif text-md w-[400px] bg-gray-200 px-[13px] py-[13px] rounded-[13px]"
          />
          <input
            type="text"
            name="first_name"
            placeholder={t("modals.name")}
            value={userInfo.first_name}
            onChange={handleChange}
            className="focus:outline-none font-serif bg-gray-200 px-[13px] py-[13px] rounded-[13px]"
          />
          <input
            type="text"
            name="last_name"
            placeholder={t("modals.surname")}
            value={userInfo.last_name}
            onChange={handleChange}
            className="focus:outline-none font-serif  bg-gray-200 px-[13px] py-[13px] rounded-[13px]"
          />
          <Button
            type="button"
            onClick={handleUpdateProfile}
            children={t("profile.update")}
            className="text-white bg-orange-600 w-full p-[13px] rounded-[13px]"
          />
        </form>
      </div>
      <div>
        <img src={ProfilePhoto} width={350} />
      </div>
    </div>
  );
}
