import RestaurantCard from "./RestaurantCard";
import { JSON_DATA } from "../config";
import { useState, useEffect,useContext } from "react";
import Loading from "./Loading";
import HeaderComponent from "./Header";
import { FirebaseContext } from "../context/FirebaseContext";
function Body() {
    const firebaseCtx = useContext(FirebaseContext);
    console.log(firebaseCtx)
    const [search, setSearch] = useState(''); 
    const [restaurants, setRestaurants] = useState([]);
    const [filteredRestaurants, setFilteredRestaurants] = useState([]);
    useEffect(() => {
        getRestaurants();
    },[])
    //api call
    const getRestaurants = async () => {
        const response = await fetch('https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9715987&lng=77.5945627&page_type=DESKTOP_WEB_LISTING');
        const data = await response.json();
        console.log(data)
        setRestaurants(data.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
        setFilteredRestaurants(data.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
        console.log(data.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
    }
    //functions
    const clearSearch = () => {
        setSearch('');
        setFilteredRestaurants(restaurants);
    };
    const searchButtonClick = () => {
        if (search === '') {
            alert('Please enter a search term');
            return;
        }
        const filters = restaurants.filter((restaurant) => {
            return restaurant.info.name.toLowerCase().includes(search.toLowerCase());
        });
        if(filters.length === 0) {
            alert('No restaurants found');
            return;
        }else{
            setFilteredRestaurants(filters);
        }
    }
    //jsx
    if(!filteredRestaurants) return <h1>no restaurants found</h1>
    return ((filteredRestaurants?.length === 0) ? <Loading /> : (
        <div>

        {/* <HeaderComponent /> */}
        <div className="body">
            
            <div className="search-bar">
                <div className="input-container">
                    <input
                        type="text"
                        placeholder="Search for restaurants"
                        value={search}
                        onChange={(e) => {
                            if(e.target.value === '') {
                                setFilteredRestaurants(restaurants)
                            }
                            setSearch(e.target.value);
                        }}
                    />
                    {search && (
                        <span className="clear-button" onClick={clearSearch}>
                            &#x2715;
                        </span>
                    )}
                    
                </div>
                <button onClick={searchButtonClick}>Search</button>
            </div>
            <div className="cards-container">
                {filteredRestaurants?.map((restaurant) => {
                    return (
                        <RestaurantCard
                            {...restaurant.info}
                            key={restaurant.info.id}
                        />
                    );
                })}
            </div>
        </div>
        </div>
    ) ) 
}
export default Body;