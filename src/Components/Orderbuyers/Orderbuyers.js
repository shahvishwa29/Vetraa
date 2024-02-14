import React from 'react'
import './Orderbuyers.css'
import buyersimage1 from '../../Images/13.jpg'

function Orderbuyers() {
    return (
        <div>
            <div className='content buyers_dashboard'>
                <div className='buyer_profile_cover mb-4'>
                    <div className='container d-flex align-items-center justify-content-center h-100 flex-column flex-md-row text-center text-md-start'>
                        <div className='avatar avatar-xl me-3'>
                            <img src={buyersimage1} className='rounded-circle buyers_img'></img>
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
                    <h1>
                        heloooo world
                    </h1>
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

export default Orderbuyers
