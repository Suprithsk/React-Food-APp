import RestaurantCard from "./RestaurantCard";
import { JSON_DATA } from "../config";
import { useState } from "react";

function Body() {
    const [search, setSearch] = useState(''); 
    //functions
    searchInputHandler = (value) => {
        setSearch(value);
    }
    const clearSearch = () => {
        setSearch('');
    };
    //jsx
    return (
        <div className="body">
            <div className="search-bar">
                <div className="input-container">
                    <input
                        type="text"
                        placeholder="Search for restaurants"
                        value={search}
                        onChange={(e) => {
                            searchInputHandler(e.target.value);
                        }}
                    />
                    {search && (
                        <span className="clear-button" onClick={clearSearch}>
                            &#x2715;
                        </span>
                    )}
                </div>
                <button>Search</button>
            </div>
            <div className="cards-container">
                {JSON_DATA.map((restaurant) => {
                    return (
                        <RestaurantCard
                            {...restaurant.info}
                            key={restaurant.info.id}
                        />
                    );
                })}
            </div>
        </div>
    );
}
export default Body;