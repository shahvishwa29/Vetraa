import React from 'react'
import './Header.css'


function Header() {
    return (
        <div className='header_main_div'>
            <div className='header_title'>
                Overview
            </div>
            <div className='header_search'>
                <i class="fa-solid fa-magnifying-glass" style={{ marginRight: '10px' }}></i>
                <input class="form-control search_bar" type="text" placeholder="search..." aria-label="default input example"></input>
            </div>
            <div className='header_notify_bar'>
                <div className='notification_icon'>
                    <i class="fa-regular fa-bell" style={{ marginRight: '15px' }}></i>
                </div>
                <div className='cart_icon'>
                    <i class="fa-solid fa-cart-shopping"></i>
                </div>
            </div>
            <div className='header_button'>
                <button type="button" class="btn button_icon">+ Add Products</button>
            </div>
        </div>
    )
}

export default Header
