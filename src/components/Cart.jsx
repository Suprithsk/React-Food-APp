import React, { useEffect, useState } from 'react'
import CartItems from './CartItems';
import { FirebaseContext } from '../context/FirebaseContext';
import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
function Cart() {
    const firebaseCtx = useContext(FirebaseContext)
    const navigate=useNavigate()
    const [totalItems,setTotalItems]=useState(0)
    const [totalAmount,setTotalAmount]=useState(0)
    useEffect(()=>{
        setTotalItems(firebaseCtx?.cart.items.reduce((total, item) => total + item.amount, 0));
        setTotalAmount(firebaseCtx?.cart.items.reduce((total, item) => total + Number(getAcutualPrice(item))*item.amount, 0))
        
    },[firebaseCtx?.cart.items])

    const getAcutualPrice=(item)=>{
        console.log('item',item)
        return item.card.info.defaultPrice ? String(item.card.info.defaultPrice).slice(0, String(item.card.info.defaultPrice).length - 2) : String(item.card.info.price).slice(0, String(item.card.info.price).length - 2)
    }
    
    console.log(firebaseCtx?.cart)
    const dummyAddresses = [
        // {
        //     id: 1,
        //     street: '123 Main St',
        //     city: 'New York',
        //     state: 'NY',
        //     zip: '10001',
        //     country: 'USA'
        // },
        // {
        //     id: 2,
        //     street: '456 Elm St',
        //     city: 'Los Angeles',
        //     state: 'CA',
        //     zip: '90001',
        //     country: 'USA'
        // },
        // {
        //     id: 3,
        //     street: '789 Oak St',
        //     city: 'Chicago',
        //     state: 'IL',
        //     zip: '60601',
        //     country: 'USA'
        // }
    ];
    
    
    return (
        <div className="mainCartDiv">
            {firebaseCtx?.cart.items.length>0 && <div className='mainCartContainer'>
                <div className="cartItems">
                {firebaseCtx?.cart.items.map((item)=>{
                    return <CartItems key={item.card.info.id} cardDetails={item.card} amountDetails={item.amount} resId={item.resId}/>
                })}
                </div>
                <div className="cartDetails">
                    <p>Total Items: {totalItems}</p>
                    <p>Total amount: {totalAmount}</p>
                    <p>Platform fee: 100</p>
                    <hr />
                    <h2>Total amount: {totalAmount+100}</h2>
                </div>
                <div className="buttons">
                    <button onClick={()=>{
                        navigate(`/menu/${firebaseCtx.cart.resId}`)
                    }}>Restaurant menu</button>
                    <button onClick={()=>{
                        navigate('/')
                    }}>Cancel</button>
                    <button onClick={()=>{

                    }}>Clear cart</button>
                    <button>Order</button>
                </div>
                
            </div>}
            {firebaseCtx?.cart.items.length<=0 && 
                <div className='mainCartContainer1'>
                    <h3>Your cart is empty</h3>
                    <h6>You can go to home page to view more restaurants</h6>
                    <button onClick={()=>{
                        navigate('/')
                    }}>View restaurants</button>
                </div>
            }
        </div>
    )
}

export default Cart