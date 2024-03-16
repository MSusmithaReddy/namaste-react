
import { useState, useEffect } from 'react';
import axios from 'axios';
import RestroComponent from "./RestroComponent";
import SearchBar from "./SearchBar";
import Shimmer from './Shimmer';
// import { resData } from "../utils/mockdata";

const Body = () => {
  let APIData = [];
  const [resStateData, onResStateData] = useState([]);
  const [saveAllData, onSaveAllData] = useState([]);
  const onTopRatedBtnClick = () => {
    const data = saveAllData.filter(value => {
        return value.info.avgRating >= 4.2
    });
    onResStateData(data);
  };
  const onClearTopRatedInfo = () => {
    onResStateData(saveAllData);
  }

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const response = await axios.get('https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING');
    const { data } = response.data;
    APIData = data.cards.filter(card => card.card.card.id == 'restaurant_grid_listing')
    const stateData = data.cards.filter(card => card.card.card.id == 'restaurant_grid_listing')[0];
    const restaurantsInfo = stateData?.card?.card?.gridElements?.infoWithStyle.restaurants;
    onResStateData(restaurantsInfo);
    onSaveAllData(restaurantsInfo);
  }

  if(saveAllData.length == 0) {
    return <Shimmer />
  }

  const onSerachInputChange = (e) => {
   let searchData = saveAllData.filter(res => res.info.name.toLowerCase().includes(e.target.value.toLowerCase()));
   console.log('searchData', searchData);
   onResStateData(searchData);
}

   return (
    <div className="">
      <div className="ml-[180px]">
      <button className="border border-green-500 rounded-2xl bg-green-100 m-4 p-2" onClick={onTopRatedBtnClick}>
        Top Rated Restaurant
      </button>
      <button className="border border-green-500 rounded-2xl bg-green-100 m-4 p-2" onClick={onClearTopRatedInfo}>
        Clear
      </button>
      <SearchBar onSerachInputChange={onSerachInputChange} />
      </div>
      <div className="flex flex-wrap ml-32 mr-20">
        {resStateData.map(value => 
            <RestroComponent key={value.widgetId} data={value} />)}
      </div>
    </div>
  );
};

export default Body;
