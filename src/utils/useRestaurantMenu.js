import { ResMenu_API } from "../utils/config";
import { useEffect, useState } from "react";

const useRestaurantMenu = (resId) => {
  const [resInfo, setResInfo] = useState(null);

  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    const menuData = await fetch(ResMenu_API + resId);
    const json = await menuData.json();
    setResInfo(json.data);
  };

  return resInfo;
};

export default useRestaurantMenu;
