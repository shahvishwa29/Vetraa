import React from 'react'
import './Dashboardbuyers.css'
import buyersimage from '../../Images/13.jpg'

function Dashboardbuyers() {
    return (
        <div>
            <div className='content buyers_dashboard'>
                <div className='buyer_profile_cover mb-4'>
                    <div className='container d-flex align-items-center justify-content-center h-100 flex-column flex-md-row text-center text-md-start'>
                        <div className='me-3'>
                            <img src={buyersimage} className='rounded-circle buyers_img'></img>
                        </div>
                        <div className='my-4 my-md-0'>
                            <h3 className='mb-1'>Wendell Dikes</h3>
                            <small>Buyer</small>
                        </div>
                        <div class="ms-md-auto">
                            <a href="#" class="btn btn-primary btn-lg btn-icon buyers_btn">
                                <i class="fa-solid fa-pencil"></i> Edit Account
                            </a>
                        </div>
                    </div>
                </div>
                <div className='row'>
                    <div className='col-md-8'>
                        <div className='row g-4 mb-4'>
                            <div className='col-md-4'>
                                <div className='card order_buyers'>
                                    <div className='card-body d-flex align-items-center'>
                                        <i class="fa-solid fa-box display-7 me-3"></i>
                                        <div>
                                            <h4 className='mb-0'>45</h4>
                                            <span>My orders</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='col-md-4'>
                                <div className='card order_buyers_1'>
                                    <div className='card-body d-flex align-items-center'>
                                        <i class="fa-regular fa-heart display-7 me-3"></i>
                                        <div>
                                            <h4 className='mb-0'>5</h4>
                                            <span>My whislist</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='col-md-4'>
                                <div className='card order_buyers_2'>
                                    <div className='card-body d-flex align-items-center'>
                                        <i class="fa-solid fa-wallet display-7 me-3"></i>
                                        <div>
                                            <h4 className='mb-0'>$9,000</h4>
                                            <span>My profit </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='card mb-4'>
                            <div className='card-body'>
                                <h6 class="card-title mb-4">Recent Activities</h6>
                                <ul className='list-group list-group-flush'>
                                    <li className='px-0 list-group-item d-flex align-items-center'>

                                        <div className='avatar_buyers me-3 rounded-circle'>
                                            <div>
                                                <i class="fa-regular fa-file-lines"></i>
                                            </div>
                                        </div>
                                        <div className='flex-grow-1 d-flex'>
                                            <div className='flex-fill'>
                                                <p class="mb-1">Your billing information is not active.</p>
                                                <div class="text-muted small">
                                                    <i class="fa-regular fa-clock me-1"></i> Yesterday
                                                </div>
                                            </div>
                                            <a href="#" style={{ color: '#FF794E', textDecoration: 'none' }}>Show</a>
                                        </div>
                                    </li>

                                    <li class="px-0 list-group-item d-flex align-items-center">
                                        <div className='avatar_buyers me-3 rounded-circle'>
                                            <div>
                                                <i class="fa-regular fa-user"></i>
                                            </div>
                                        </div>
                                        <div className='flex-grow-1 d-flex'>
                                            <div className='flex-fill'>
                                                <p class="mb-1">Your subscription has expired</p>
                                                <div class="text-muted small">
                                                    <i class="fa-regular fa-clock me-1"></i> Today
                                                </div>
                                            </div>
                                            <a href="#" style={{ color: '#FF794E', textDecoration: 'none' }}>Show</a>
                                        </div>
                                    </li>

                                    <li class="px-0 list-group-item d-flex align-items-center">
                                        <div className='avatar_buyers me-3 rounded-circle'>
                                            <div>
                                                <i class="fa-regular fa-hard-drive"></i>
                                            </div>
                                        </div>
                                        <div className='flex-grow-1 d-flex'>
                                            <div className='flex-fill'>
                                                <p class="mb-1">Your storage space is running low</p>
                                                <div class="text-muted small">
                                                    <i class="fa-regular fa-clock me-1"></i> Last week
                                                </div>
                                            </div>
                                            <a href="#" style={{ color: '#FF794E', textDecoration: 'none' }}>Show</a>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className='col-md-4'>
                        <div className='card'>
                            <div className='card-body'>
                                <ul className='nav nav-pills flex-column gap-2'>
                                    <li className='nav-item'>
                                        <a className='nav-link  link_color ' href='#'>Dashboard</a>
                                    </li>

                                    <li className='nav-item'>
                                        <a className='nav-link link_color ' href='#'>My order</a>
                                    </li>

                                    <li className='nav-item'>
                                        <a className='nav-link  link_color' href='#'>My address</a>
                                    </li>

                                    <li className='nav-item'>
                                        <a className='nav-link link_color ' href='#'>Whistlist</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Dashboardbuyers
