import React from 'react'

function DropDownItems({items, open}) {
    console.log('dropdownitems', items)
    return (
        <div className=''>
            {open && (
                <div>hi</div>
            )}
        </div>
    )
}

export default DropDownItems