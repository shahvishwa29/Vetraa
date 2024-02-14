import React, { Component, useState } from 'react'
import './Sidebar.css'
import sidebarimage from '../../Images/4.jpg'
import { Navigate, useNavigate } from 'react-router-dom'
import headerimage from '../../Images/6.svg'

function Sidebar() {

    let Navigate = useNavigate();

    const [order, setorder] = useState(false)
    const [products, setproducts] = useState(false)
    const [buyers, setbuyers] = useState(false)
    const [invoices, setinvoices] = useState(false)
    const [customer, setcustomer] = useState(false)
    const [email, setemail] = useState(false)
    const [todoapp, settodoapp] = useState(false)
    const [profile, setprofile] = useState(false)
    const [users, setusers] = useState(false)
    const [authentication, setauthentication] = useState(false)
    const [error, seterror] = useState(false)
    // const [component, setcomponent] = useState(false)
    // const [forms, setforms] = useState(false)
    // const [formelements, setformelements] = useState(false)
    // const [content, setcontent] = useState(false)
    // const [chart, setchart] = useState(false)
    // const [extension, setextension] = useState(false)
    // const [menu, setmenu] = useState(false)

    return (




        <div class="menu_body">
            <div className='header_logo'>
                <img src={headerimage} className='logo_img'></img>
            </div>


            <div class="profile">
                <div class="logo_1">
                    <img src={sidebarimage} className='logo_image'></img>
                </div>
                <div class="logo_name">
                    <div class="first_name">Timotheus Bendan</div>
                    <div class="second_name">sales manager</div>
                </div>
            </div>
            <div class="scroll_bar">
                <div class="drop_down_1">
                    E-Commerce
                </div>
                <div class="Dash_board">
                    <div className={window.location.pathname.includes('/') ? "icon_1" : "icon_1"}>
                        <div>
                            <i class="fa-solid fa-signal" style={{ marginRight: '10px' }}></i>
                            <span class="Link" onClick={(() => {
                                Navigate('/')
                                setorder(false)
                                setproducts(false)
                                setbuyers(false)
                                setcustomer(false)
                                setinvoices(false)
                            })}>Dashboard</span>
                        </div>
                    </div>

                    <div class="icon_1" onClick={() => {
                        setorder(!order)
                        setbuyers(false)
                        setproducts(false)
                        setinvoices(false)
                    }}>
                        <div >
                            <i class="fa-solid fa-receipt" style={{ marginRight: '16px' }}></i>
                            <span class="Link" style={{ marginRight: '10px' }}>Orders</span>
                            <i class="fa-solid fa-arrow-right"></i>
                        </div>
                    </div>


                    {
                        order ?
                            <ul>
                                <li
                                    className={window.location.pathname.includes('/listorder') ? "sub_list_active" : "sub_list"}
                                    onClick={(() => {
                                        Navigate('/listorder')
                                    })}>List</li>
                                <li className={window.location.pathname.includes('/detailorder') ? "sub_list_active" : "sub_list"}
                                    onClick={(() => {
                                        Navigate('/detailorder')
                                    })}>Detail</li>
                            </ul>
                            : null
                    }

                    <div class="icon_1" onClick={() => {
                        setproducts(!products)
                        setbuyers(false)
                        setinvoices(false)
                        setorder(false)
                    }}>
                        <div>
                            <i class="fa-solid fa-truck" style={{ marginRight: '12px' }}></i>
                            <span class="Link" style={{ marginRight: '10px' }}>Products</span>
                            <i class="fa-solid fa-arrow-right"></i>
                        </div>
                    </div>
                    {
                        products ?
                            <ul>
                                <li className={window.location.pathname.includes('/listview') ? "sub_list_active" : "sub_list"}
                                    onClick={(() => {
                                        Navigate('/listview')
                                    })}>List view</li>
                                <li className={window.location.pathname.includes('/gridview') ? "sub_list_active" : "sub_list"}
                                    onClick={(() => {
                                        Navigate('/gridview')
                                    })}>Grid view</li>
                                <li className={window.location.pathname.includes('/productdetail') ? "sub_list_active" : "sub_list"} onClick={(() => {
                                    Navigate('/productdetail')
                                })}>Product Detail</li>
                                <li className={window.location.pathname.includes('/shoppingcart') ? "sub_list_active" : "sub_list"}
                                    onClick={(() => {
                                        Navigate('/shoppingcart')
                                    })}>Shopping Cart</li>
                                <li className={window.location.pathname.includes('/checkout') ? "sub_list_active" : "sub_list"}
                                    onClick={(() => {
                                        Navigate('/checkout')
                                    })}>Checkout</li>
                            </ul>
                            : null
                    }


                    <div class="icon_1" onClick={() => {
                        setbuyers(!buyers)
                        setorder(false)
                        setproducts(false)
                        setinvoices(false)
                    }}>
                        <div>
                            <i class="fa-solid fa-wallet" style={{ marginRight: '10px' }}></i>
                            <span class="Link" style={{ marginRight: '10px' }}>Buyers</span>
                            <i class="fa-solid fa-arrow-right"></i>
                        </div>
                    </div>
                    {
                        buyers ?
                            <ul>
                                <li className={window.location.pathname.includes('/dashboardbuyers') ? "sub_list_active" : "sub_list"}
                                    onClick={(() => {
                                        Navigate('/dashboardbuyers')
                                    })}>Dashboard</li>
                                <li className={window.location.pathname.includes('/orderbuyers') ? "sub_list_active" : "sub_list"}
                                    onClick={(() => {
                                        Navigate('/orderbuyers')
                                    })}>Orders</li>
                                <li className={window.location.pathname.includes('/addressbuyers') ? "sub_list_active" : "sub_list"}
                                    onClick={(() => {
                                        Navigate('/addressbuyers')
                                    })}>Adresses</li>
                                <li className={window.location.pathname.includes('/whistlist') ? "sub_list_active" : "sub_list"}
                                    onClick={(() => {
                                        Navigate('/whistlist')
                                    })}>Whislist</li>
                            </ul>
                            : null
                    }

                    <div class="icon_1" onClick={() => {
                        setcustomer(!customer)
                        setorder(false)
                        setproducts(false)
                        setbuyers(false)
                        setinvoices(false)
                    }}>
                        <div>
                            <i class="fa-solid fa-address-book" style={{ marginRight: '10px' }}></i>
                            <span class="Link" style={{ marginRight: '10px' }}>Customers</span>
                        </div>
                    </div>
                    <div class="icon_1" onClick={() => {
                        setinvoices(!invoices)
                        setorder(false)
                        setbuyers(false)
                        setproducts(false)
                    }}>
                        <div>
                            <i class="fa-solid fa-receipt" style={{ marginRight: '10px' }}></i>
                            <span class="Link" style={{ marginRight: '10px' }}>Invoices</span>
                            <i class="fa-solid fa-arrow-right"></i>
                        </div>
                    </div>
                    {
                        invoices ?
                            <ul>
                                <li className={window.location.pathname.includes('/listinvoices') ? "sub_list_active" : "sub_list"}
                                    onClick={(() => {
                                        Navigate('/listinvoices')
                                    })}>List</li>
                                <li className={window.location.pathname.includes('/detailinvoices') ? "sub_list_active" : "sub_list"}
                                    onClick={(() => {
                                        Navigate('/detailinvoices')
                                    })}>Detail</li>
                            </ul>
                            : null
                    }
                </div>
            </div>
            <div class="scroll_bar">
                <div class="drop_down_1">
                    APPS
                </div>
                <div class="Dash_board">
                    <div class="icon_1">
                        <div>
                            <i class="fa-regular fa-message" style={{ marginRight: '10px' }}></i>
                            <span class="Link">Chats</span>
                        </div>
                    </div>
                    <div class="icon_1" onClick={() => {
                        setemail(!email)
                    }}>
                        <div>
                            <i class="fa-regular fa-envelope" style={{ marginRight: '10px' }}></i>
                            <span class="Link" style={{ marginRight: '10px' }}>Email</span>
                            <i class="fa-solid fa-arrow-right"></i>
                        </div>
                    </div>
                    {
                        email ?
                            <ul>
                                <li class="sub_list">Inbox</li>
                                <li class="sub_list">Detail</li>
                                <li class="sub_list">Email Template</li>
                            </ul>
                            : null
                    }

                    <div class="icon_1" onClick={() => {
                        settodoapp(!todoapp)
                    }}>
                        <div>
                            <i class="fa-regular fa-circle-check" style={{ marginRight: '10px' }}></i>
                            <span class="Link" style={{ marginRight: '10px' }}>Todo App</span>
                            <i class="fa-solid fa-arrow-right"></i>
                        </div>
                    </div>
                    {
                        todoapp ?
                            <ul>
                                <li class="sub_list">List</li>
                                <li class="sub_list">Detail</li>
                            </ul>
                            : null
                    }
                </div>
            </div>
            <div class="scroll_bar">
                <div class="drop_down_1">
                    PAGES
                </div>
                <div class="Dash_board">
                    <div class="icon_1" onClick={() => {
                        setprofile(!profile)
                    }}>
                        <div>
                            <i class="fa-solid fa-user" style={{ marginRight: '10px' }}></i>
                            <span class="Link" style={{ marginRight: '10px' }}>Profile</span>
                            <i class="fa-solid fa-arrow-right"></i>
                        </div>
                    </div>
                    {
                        profile ?
                            <ul>
                                <li class="sub_list">Posts</li>
                                <li class="sub_list">Connections</li>
                            </ul>

                            : null
                    }

                    <div class="icon_1" onClick={() => {
                        setusers(!users)
                    }}>
                        <div>
                            <i class="fa-solid fa-image-portrait" style={{ marginRight: '10px' }}></i>
                            <span class="Link" style={{ marginRight: '10px' }}>Users</span>
                            <i class="fa-solid fa-arrow-right"></i>
                        </div>
                    </div>
                    {
                        users ?
                            <ul>
                                <li class="sub_list">List View</li>
                                <li class="sub_list">Grid View</li>
                            </ul>
                            : null
                    }

                    <div class="icon_1" onClick={() => {
                        setauthentication(!authentication)
                    }}>
                        <div>
                            <i class="fa-solid fa-lock" style={{ marginRight: '10px' }}></i>
                            <span class="Link" style={{ marginRight: '10px' }}>Authentication</span>
                            <i class="fa-solid fa-arrow-right"></i>
                        </div>
                    </div>
                    {
                        authentication ?
                            <ul>
                                <li class="sub_list">Login</li>
                                <li class="sub_list">Register</li>
                                <li class="sub_list">Reset Password</li>
                                <li class="sub_list">Lock screen</li>
                                <li class="sub_list">Account verified</li>
                            </ul>
                            : null
                    }

                    <div class="icon_1" onClick={() => {
                        seterror(!error)
                    }}>
                        <div>
                            <i class="fa-solid fa-circle-exclamation" style={{ marginRight: '10px' }}></i>
                            <span class="Link" style={{ marginRight: '10px' }}>Error</span>
                            <i class="fa-solid fa-arrow-right"></i>
                        </div>
                    </div>
                    {
                        error ?
                            <ul>
                                <li class="sub_list">404</li>
                                <li class="sub_list">Access Denied</li>
                                <li class="sub_list">Under Construction</li>
                            </ul>
                            : null
                    }

                    <div class="icon_1">
                        <div>
                            <i class="fa-solid fa-gear" style={{ marginRight: '10px' }}></i>
                            <span class="Link">Settings</span>
                        </div>
                    </div>
                    <div class="icon_1">
                        <div>
                            <i class="fa-solid fa-wallet" style={{ marginRight: '10px' }}></i>
                            <span class="Link">Pricing Tables</span>
                        </div>
                    </div>
                    <div class="icon_1">
                        <div>
                            <i class="fa-solid fa-magnifying-glass" style={{ marginRight: '10px' }}></i>
                            <span class="Link">Search Page</span>
                        </div>
                    </div>
                    <div class="icon_1">
                        <div>
                            <i class="fa-solid fa-question" style={{ marginRight: '10px' }}></i>
                            <span class="Link">FAQ</span>
                        </div>
                    </div>
                </div>
            </div>
            {/* <div class="scroll_bar">
                                <div class="drop_down_1">
                                    USER INTERFACE
                                </div>
                                <div class="Dash_board">
                                    <div class="icon_1" onClick={() => {
                                        setcomponent(!component)
                                    }}>
                                        <div>
                                            <i class="fa-solid fa-file-contract" style={{ marginRight: '10px' }}></i>
                                            <span class="Link" style={{ marginRight: '10px' }}>Components</span>
                                            <i class="fa-solid fa-arrow-right"></i>
                                        </div>
                                    </div>
                                    {
                                        component ?
                                            <ul>
                                                <li class="sub_list">accordion</li>
                                                <li class="sub_list">Alerts</li>
                                                <li class="sub_list">Badge</li>
                                                <li class="sub_list">Breadcrumb</li>
                                                <li class="sub_list">Buttons</li>
                                                <li class="sub_list">Bbutton groups</li>
                                                <li class="sub_list">Card</li>
                                                <li class="sub_list">Card masonry</li>
                                                <li class="sub_list">Carousel</li>
                                                <li class="sub_list">Collapse</li>
                                                <li class="sub_list">Dropdowns</li>
                                                <li class="sub_list">Modal</li>
                                                <li class="sub_list">Navs and Tabs</li>
                                                <li class="sub_list">Pagination</li>
                                                <li class="sub_list">popovers</li>
                                                <li class="sub_list">Progress</li>
                                                <li class="sub_list">Spinners</li>
                                                <li class="sub_list">Toasts</li>
                                                <li class="sub_list">Tables</li>
                                                <li class="sub_list">Tooltip</li>
                                            </ul>
                                            : null
                                    }

                                    <div class="icon_1" onClick={() => {
                                        setforms(!forms)
                                    }}>
                                        <div>
                                            <i class="fa-solid fa-file-contract" style={{ marginRight: '10px' }}></i>
                                            <span class="Link" style={{ marginRight: '10px' }}>Forms</span>
                                            <i class="fa-solid fa-arrow-right"></i>
                                        </div>
                                    </div>
                                    <div class="icon_1" onClick={() => {
                                        setformelements(!formelements)
                                    }}>

                                        <span class="Link" style={{ marginRight: '10px' }}>Form element</span>
                                        <i class="fa-solid fa-arrow-right"></i>


                                    </div>

                                    {
                                        formelements ?
                                            <ul>
                                                <li class="sub_list">Overview</li>
                                                <li class="sub_list">Form controls</li>
                                                <li class="sub_list">Select</li>
                                                <li class="sub_list">Checks and Radios</li>
                                                <li class="sub_list">Range</li>
                                                <li class="sub_list">Input Group</li>
                                                <li class="sub_list">Floating line</li>
                                                <li class="sub_list">Form layout</li>
                                                <li class="sub_list">Validation</li>
                                                <li class="sub_list">Wizard</li>
                                                <li class="sub_list">Repeater</li>
                                                <li class="sub_list">file upload</li>
                                                <li class="sub_list">CKEditor</li>
                                                <li class="sub_list">Range Slider</li>
                                                <li class="sub_list">select2</li>
                                                <li class="sub_list">Tags input</li>
                                                <li class="sub_list">Input mask</li>
                                                <li class="sub_list">Date picker </li>
                                                <li class="sub_list">Clock picker</li>
                                            </ul>
                                            : null
                                    }

                                    <div class="icon_1" onClick={() => {
                                        setcontent(!content)
                                    }}>
                                        <div>
                                            <i class="fa-regular fa-heart" style={{ marginRight: '10px' }}></i>
                                            <span class="Link" style={{ marginRight: '10px' }}>Content</span>
                                            <i class="fa-solid fa-arrow-right"></i>
                                        </div>
                                    </div>
                                    {
                                        content ?
                                            <ul>
                                                <li class="sub_list">typography</li>
                                                <li class="sub_list">images</li>
                                                <li class="sub_list">figures</li>
                                                <li class="sub_list">avatar</li>
                                                <li class="sub_list">icon</li>
                                                <li class="sub_list">color</li>
                                            </ul>
                                            : null
                                    }

                                    <div class="icon_1" onClick={() => {
                                        setchart(!chart)
                                    }}>
                                        <div>
                                            <i class="fa-solid fa-signal" style={{ marginRight: '10px' }}></i>
                                            <span class="Link" style={{ marginRight: '10px' }}>Chart</span>
                                            <i class="fa-solid fa-arrow-right"></i>
                                        </div>
                                    </div>
                                    {
                                        chart ?
                                            <ul>
                                                <li class="sub_list">Apex chart</li>
                                                <li class="sub_list">Chartjs</li>
                                                <li class="sub_list">Justgage</li>
                                                <li class="sub_list">morsis</li>
                                            </ul>
                                            : null
                                    }

                                    <div class="icon_1" onClick={() => {
                                        setextension(!extension)
                                    }}>
                                        <div>
                                            <i class="fa-solid fa-paperclip" style={{ marginRight: '10px' }}></i>
                                            <span class="Link" style={{ marginRight: '10px' }}>Extensions</span>
                                            <i class="fa-solid fa-arrow-right"></i>
                                        </div>
                                    </div>
                                    {
                                        extension ?
                                            <ul>
                                                <li class="sub_list">vectormap</li>
                                                <li class="sub_list">datacable</li>
                                                <li class="sub_list">sweer alert</li>
                                                <li class="sub_list">light box</li>
                                                <li class="sub_list">introjs</li>
                                                <li class="sub_list">nestable</li>
                                                <li class="sub_list">rating</li>
                                                <li class="sub_list">code highlighter</li>
                                            </ul>
                                            : null
                                    }

                                </div>
                            </div> 
                 <div class="scroll_bar">
                                <div class="drop_down_1">
                                    OTHERS
                                </div>
                                <div class="Dash_board">
                                    <div class="icon_1" onClick={() => {
                                        setmenu(!menu)
                                    }}>
                                        <div>
                                            <i class="fa-solid fa-bars" style={{ marginRight: '10px' }}></i>
                                            <span class="Link" style={{ marginRight: '10px' }}>Menu</span>
                                            <i class="fa-solid fa-arrow-right"></i>
                                        </div>
                                    </div>
                                    {
                                        menu ?
                                            <ul>
                                                <li class="sub_list">Menu item 1</li>
                                                <li class="sub_list">Menu item 2</li>
                                            </ul>
                                            : null
                                    }

                                    <div class="icon_1">
                                        <div>
                                            <i class="fa-regular fa-hand-point-up" style={{ marginRight: '10px' }}></i>
                                            <span class="Link">disabled</span>
                                        </div>
                                    </div>
                                </div>
                            </div>  */}

        </div>



    )
}
export default Sidebar
