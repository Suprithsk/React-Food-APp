import React from 'react'
import { FirebaseContext } from '../context/FirebaseContext'
import { useContext } from 'react'
function CartItems({ cardDetails, amountDetails, resId }) {
    console.log(cardDetails, amountDetails)
    const firebaseCtx = useContext(FirebaseContext)
    const actualPrice = cardDetails.info.defaultPrice ? String(cardDetails.info.defaultPrice).slice(0, String(cardDetails.info.defaultPrice).length - 2) : String(cardDetails.info.price).slice(0, String(cardDetails.info.price).length - 2)
    console.log(actualPrice)
    return (
        <div className='cartItem'>
            <h2 className='cartItem-title'>{cardDetails.info.name}</h2>
            <p className='cartItem-desc'>{cardDetails.info.description}</p>
            <p className='cartItem-price'>₹ {actualPrice * amountDetails}</p>
            <div className="cartItem-items-container__right1">
                <span className="orange" onClick={() => {
                    firebaseCtx.removeFromCart({ card: cardDetails }, resId)
                }}>-</span>{amountDetails}<span className="orange" onClick={() => {
                    firebaseCtx.addToCart({ card: cardDetails }, resId)
                }}
                >+</span>
            </div>
        </div>
    )
}

export default CartItems