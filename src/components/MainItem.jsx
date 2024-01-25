import React from 'react'
import { useState } from 'react'
import DropDownItems from './DropDownItems'

function MainItem({ menuItem }) {
    const [open, setOpen] = useState(true)
    console.log('mainitem', menuItem)
    const openButtonHandler = () => {
        setOpen(!open)
    }
    return (
        <div className='main-item'>
            <div className="main-item-header" onClick={openButtonHandler}>
                <h3>{menuItem?.card?.card?.title} ({menuItem?.card?.card?.itemCards?.length})</h3>
                {(open ? <span>˄</span>:<span>˅</span> )}
            </div>
            <div className="actual-menu-items-container">
                {menuItem?.card?.card?.itemCards?.map((item) => {
                    return (
                        <DropDownItems items={item} open={open}/>
                    )
                })}
            </div>
        </div>
    )
}

export default MainItem