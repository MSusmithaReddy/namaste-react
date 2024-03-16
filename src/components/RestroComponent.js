
import { CDN_URL } from '../utils/constants';
import { Link } from 'react-router-dom';

const RestroComponent = (props) => {
    const { data } = props;
    const {
        cloudinaryImageId,
        name,
        cuisines, 
        costForTwo,
        avgRating,
        deliveryTime,
        id,
        totalRatingsString
    } = data.info;
    debugger;
    return (
        <div className='w-80 m-5 bg-blue-100 p-4 rounded-lg relative'>
          <Link to={'/restaurants/'+''+id}>
            {avgRating > 4.2 ? <div className='absolute rounded-lg p-2 bg-black text-white'> Highly Recommended</div>  : ''}
          <img className="w-80 h-60 border rounded-2xl bg-blue-400 mb-2" src={CDN_URL + cloudinaryImageId} />
          <h3 className=" text-black font-bold">{name}</h3>
          <h4 className=" text-black">{cuisines.join(', ')}</h4>
          <h4 className=" text-black">{costForTwo}</h4>
          <h5 className=" text-green-600">{avgRating} stars</h5>
          <h5 className=" text-orange-500">{deliveryTime}</h5>
          </Link>
         </div>
    )
}

export default RestroComponent; 