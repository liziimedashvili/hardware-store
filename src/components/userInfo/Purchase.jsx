import { useEffect, useState } from "react";
import { getFromPurchases } from "../../services/services";
import Button from "../button";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
export default function Purchase() {
  const [purchases, setPurchases] = useState([]);
  const navigate = useNavigate();
  const fetchData = async () => {
    try {
      const response = await getFromPurchases();
      setPurchases(response.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };
  const { t } = useTranslation("global");
  useEffect(() => {
    fetchData();
  }, []);
  const navigateHomePageClick = () => {
    navigate(`/`);
  };

  return (
    <div className="mt-10 ml-5">
      <h2 className="border-b-2 text-lg font-bold w-60 border-orange-600">
        {t("purchases.currentOrders")}
      </h2>

      <div className="flex items-center  gap-4 mt-5">
        <div className="flex flex-wrap gap-[40px]">
          {purchases.map((purchase) => (
            <div key={purchase.id} className="bg-white font-bold text-lg ">
              <p>
                {" "}
                <span className="text-orange-600">
                  {" "}
                  {t("purchases.toalPrice")}{" "}
                </span>
                {purchase.totalPrice} ₾
              </p>
              <p>
                <span className="text-orange-600">
                  {t("purchases.totalItems")}{" "}
                </span>
                {purchase.totalItems}
              </p>
            </div>
          ))}
          <Button
            className="bg-orange-600 text-white px-[10px] py-2 rounded-[4px] w-full font-bold text-sm leading-5 gap-1 "
            onClick={navigateHomePageClick}
          >
            {t("purchases.startSearching")}
          </Button>
        </div>
      </div>
    </div>
  );
}
