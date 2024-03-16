
import { CDN_URL } from '../utils/constants';
import { Link } from 'react-router-dom';

const RestroMenuCard = (props) => {
    const { data } = props;
    const {
        imageId,
        name,
        price,
        deliveryTime,
        id,
        promoted,
        ratings,
        itemAttribute,
        isVeg,
        description,
        inStock,
    } = data.info;
    debugger;
    return (
        <div className='m-10 flex w-[100%]'>
          <div className='w-[80%] mr-4'>
            <p>promoted</p>
          <h3 className=" text-black font-bold">{name}</h3>
          <div>{description}</div>
          <h4>{price / 100}.00</h4>
          <h5 className=" text-green-600">{ratings.aggregatedRating.rating} stars</h5>
          <h5>{deliveryTime}</h5>
          </div>
          <img className="w-40 h-40 border rounded-2xl bg-blue-400 mb-2"  src={CDN_URL + imageId} />
         </div>
    )
}

export default RestroMenuCard; 