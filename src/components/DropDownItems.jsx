import React from 'react'
import { FirebaseContext } from '../context/FirebaseContext'
import { useContext, useState,useEffect } from 'react'

function DropDownItems({ items, open, resId }) {
    const [contains, setContains] = useState(false)
    const [amount, setAmount] = useState(0)
    const firebaseCtx = useContext(FirebaseContext)

    useEffect(() => {
        const cartIdInfo = firebaseCtx.cart?.items?.map((item) => item?.card?.info?.id);
        setContains(cartIdInfo.includes(items?.card?.info?.id));
        setAmount(firebaseCtx.cart?.items?.find((item) => item?.card?.info?.id === items?.card?.info?.id)?.amount);
    }, [firebaseCtx.cart?.items]);

    
    return (
        <>
            {open && (
                <div className='dropdown-items-container'>
                    <div className="dropdown-items-container__left">
                        <span className='span-dropdown'>{items?.card?.info?.isVeg ? "veg" : "non-veg"}</span>
                        <span className='span-dropdown-name'>{items?.card?.info?.name}</span>
                        <span className='span-dropdown-price'>
                            ₹ {items?.card?.info?.price
                                ? Number(items?.card?.info?.price).toFixed(2).slice(0, 3)
                                : Number(items?.card?.info?.defaultPrice).toFixed(2).slice(0, 3)
                            }
                        </span>
                        <span className='span-dropdown'>{items?.card?.info?.description}</span>
                    </div>
                    {!contains && <div className="dropdown-items-container__right" onClick={() => {
                        firebaseCtx.addToCart({ ...items, amount: 1 }, resId)
                    }}>
                        <button>Add</button>
                    </div>}
                    {contains && <div className="dropdown-items-container__right1">
                        <span className="orange" onClick={()=>{
                            firebaseCtx.removeFromCart(items, resId)
                        }}>-</span>{amount}<span className="orange" onClick={()=>{
                            firebaseCtx.addToCart(items, resId)
                        
                        }}>+</span>
                    </div>}

                </div>
            )}
        </>
    )
}

export default DropDownItems