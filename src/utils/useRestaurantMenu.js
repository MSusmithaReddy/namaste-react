import axios from "axios";
import { useState, useEffect } from "react";

// Creating custom hook
export const useRestaurantMenu = (id) => {
  const [menuRes, onUpdateMenuRes] = useState({});
  useEffect(() => {
    fetchData();
  }, []);
  const fetchData = async () => {
    const response = await axios.get(
      `https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.9351929&lng=77.62448069999999&restaurantId=${id}&catalog_qa=undefined&submitAction=ENTER`
    );
    const { data } = response.data;
    onUpdateMenuRes(data);
  };
  return menuRes;
};
