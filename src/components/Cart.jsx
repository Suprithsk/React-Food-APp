import React from 'react'

function Cart() {
    const dummyAddresses = [
        {
            id: 1,
            street: '123 Main St',
            city: 'New York',
            state: 'NY',
            zip: '10001',
            country: 'USA'
        },
        {
            id: 2,
            street: '456 Elm St',
            city: 'Los Angeles',
            state: 'CA',
            zip: '90001',
            country: 'USA'
        },
        {
            id: 3,
            street: '789 Oak St',
            city: 'Chicago',
            state: 'IL',
            zip: '60601',
            country: 'USA'
        }
    ];
    
    
    return (
        <div className="mainCartDiv">
            <div className='mainCartContainer'>
                <div className="addressCartContainer">

                        <div className="addressCard">
                            <h3>Address</h3>
                            <p>Street: 123 Main St</p>
                            <p>City: New York</p>
                            <p>State: NY</p>
                            <p>Zip: 10001</p>
                            <p>Country: USA</p>
                            <button className='button-cart-address'>deliver here</button>
                        </div>
                        <div className="addressCard">
                            <h3>Address</h3>
                            <p>Street: 123 Main St</p>
                            <p>City: New York</p>
                            <p>State: NY</p>
                            <p>Zip: 10001</p>
                            <p>Country: USA</p>
                            <button className='button-cart-address'>deliver here</button>
                        </div>
                        <div className="addressCard">
                            <h3>Address</h3>
                            <p>Street: 123 Main St</p>
                            <p>City: New York</p>
                            <p>State: NY</p>
                            <p>Zip: 10001</p>
                            <p>Country: USA</p>
                            <button className='button-cart-address'>deliver here</button>
                        </div>
                </div>
                <div className="itemsCartContainer">
                    <div className="itemCart">
                        <div className="itemCartImage">
                            <img src="" alt="" />
                        </div>
                        <div className="itemCartDetails">
                            <h3>Item Name</h3>
                            <p>Item Description</p>
                            <p>Price: $</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Cart