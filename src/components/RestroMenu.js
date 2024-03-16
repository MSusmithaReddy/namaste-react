import { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import RestroMenuCard from './RestaurantMenuCard';
import { useRestaurantMenu } from "../utils/useRestaurantMenu";

const RestroMenu = () => {
//   const [menuData, onSaveMenuData] = useState();
  const params = useParams();
  const menuData = useRestaurantMenu(params.resId);
  debugger;
//   useEffect(() => {
//     fetchMenu(params.resId);
//   }, [params.resId]);

//   const fetchMenu = async (id) => {
//     const response = await axios.get(
//       `https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.9351929&lng=77.62448069999999&restaurantId=${id}&catalog_qa=undefined&submitAction=ENTER`
//     );
//     const { data } = response.data;
//     onSaveMenuData(data);
//   };

  return menuData?.cards?.map((eachCard) => {
    if (eachCard.groupedCard) {
      return (
        <div>
        {/* <h2>{eachCard}</h3> */}
          {eachCard.groupedCard.cardGroupMap.REGULAR.cards.map((value) => {
            if (value.card.card?.vegFilter) {
            } else {
              return (
                <div className='w-[100%] bg-blue-200 flex items-center justify-center flex-col'>
                  {value.card.card.itemCards ? <h3 className=' text-pink-600 font-bold mt-5'>{value?.card?.card?.title}</h3> : ''}
                  <div class='w-[50%]'>
                    {value.card.card.itemCards?.map((eachCard) => {
                      return <>
                         <RestroMenuCard data={eachCard.card} />
                      </>
                    })}
                  </div>
                </div>
              );
            }
          })}
        </div>
      );
    }
    <div></div>;
  });
};

export default RestroMenu;
