import { IMG_CARD_LINK } from "../config";

function RestaurantCard({ cloudinaryImageId, name, cuisines, avgRating, areaName }) {
    if(cuisines.length > 5) {
        cuisines = cuisines.slice(0, 5);
    }
    return (
        <div className="card">
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