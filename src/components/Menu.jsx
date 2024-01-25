import React, { useState } from 'react'
import { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import Loading from './Loading'
import MainItem from './MainItem'

function Menu() {
    const { restaurantId } = useParams()
    const [menuItems, setMenuItems] = useState([])
    const [restaurantDetails, setRestaurantDetails] = useState({})
    const [cuisines, setCuisines] = useState('')
    useEffect(() => {
        getMenu()
    }, [])
    const getMenu = async () => {
        const response = await fetch(`https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=28.6126255&lng=77.04108959999999&restaurantId=${restaurantId}`)
        const data = await response.json()
        setRestaurantDetails(data.data?.cards[0]?.card?.card?.info)
        console.log('restautrant details', data.data?.cards[0]?.card?.card?.info)
        const menuItems = data.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards
        console.log('menuitems', menuItems)
        const actualMenuItems = menuItems.slice(1, menuItems.length - 1)
        const realMenuItems = actualMenuItems.filter((item) => {
            if (item.card?.card?.itemCards !== undefined && item.card?.card?.title !== undefined) {
                return true
            }
        })
        setCuisines(data.data?.cards[0]?.card?.card?.info?.cuisines?.join(', '))
        console.log('realmenuitems', realMenuItems)
        setMenuItems(realMenuItems)
    }
    return (
        (menuItems?.length === 0) ? <Loading /> : (
            <div className="container-main">
                <div className="menu-upper-container">
                    <div className='menu-container'>
                        <div className="menu-container__left">
                            <h3>{restaurantDetails?.name}</h3>
                            <p className='menu-container__p'>{cuisines}</p>
                            <p className='menu-container__p locality'>{restaurantDetails?.locality}</p>
                        </div>
                        <div className="menu-container__right">
                            <div className="ratings-container">
                                <div className="ratings-container__left">
                                    <p>⭐{restaurantDetails?.avgRatingString}</p>
                                    <hr />
                                </div>
                                <div className="ratings-container__right">
                                    <p>{restaurantDetails?.totalRatingsString}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='menu-items-container'>
                        {menuItems.map((item) => {
                            return (
                                <MainItem menuItem={item}/>
                            )
                        })}
                    </div>
                </div>

            </div>
        )

    )
}

export default Menu