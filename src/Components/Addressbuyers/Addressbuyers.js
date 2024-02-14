import React from 'react'
import './Addressbuyers.css'
import buyersimage2 from '../../Images/13.jpg'

function Addressbuyers() {
    return (
        <div>
            <div className='content buyers_dashboard'>
                <div className='buyer_profile_cover mb-4'>
                    <div className='container d-flex align-items-center justify-content-center h-100 flex-column flex-md-row text-center text-md-start'>
                        <div className=' me-3'>
                            <img src={buyersimage2} className='rounded-circle buyers_img'></img>
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
                            <div className='col-md-6 col-sm-12'>
                                <div className='card'>
                                    <div className='card-body d-flex flex-column gap-3'>
                                        <div className='d-flex justify-content-between align-items-center'>
                                            <h5 class="mb-0">Home</h5>
                                            <a href="#" style={{ color: '#FF794E', textDecoration: 'none' }}>Edit</a>
                                        </div>
                                        <div>Josephin Villa</div>
                                        <div>81 Fulton Park, Brazil/Pedro Leopoldo</div>
                                        <div>
                                            <i class="fa-solid fa-phone me-2"></i> 408-963-7769
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='col-md-6 col-sm-12'>
                                <div className='card'>
                                    <div className='card-body d-flex flex-column gap-4'>
                                        <div className='d-flex justify-content-between align-items-center'>
                                            <h5 class="mb-0">Workplace</h5>
                                            <a href="#" style={{ color: '#FF794E', textDecoration: 'none' }}>Edit</a>
                                        </div>
                                        <div>Josephin Villa</div>
                                        <div>29543 South Plaza, Canada/Sydney Mines</div>
                                        <div>
                                            <i class="fa-solid fa-phone me-2"></i>  484-948-8535
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <button type="button" class="btn btn-outline-primary button_address">
                                    <i class="fa-solid fa-circle-plus"></i>    Add New Address
                                </button>
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

export default Addressbuyers
