import { IMG_CARD_LINK } from "../config";
import { useNavigate } from "react-router-dom";

function RestaurantCard({ cloudinaryImageId, name, cuisines, avgRating, areaName, id }) {
    const navigate=useNavigate();
    if(cuisines.length > 5) {
        cuisines = cuisines.slice(0, 5);
    }
    const cardOnClickHandler = () => {
        navigate(`/menu/${id}`);
    }
    return (
        <div className="card" onClick={cardOnClickHandler}>
            <div className="card-content">
                <div className="card-image">
                    <img
                        src={`${IMG_CARD_LINK}${cloudinaryImageId}`}
                        alt=""
                    />
                </div>
                <h2>{name}</h2>
                <h3>{cuisines.join(', ')}</h3>
                <h3>{areaName}</h3>
                <h4>{avgRating} stars</h4>
            </div>
        </div>
    )
}
export default RestaurantCard;