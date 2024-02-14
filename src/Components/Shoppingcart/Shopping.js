import React from 'react'
import './Shopping.css'
import carttable from '../../Images/8.png'
import carttable1 from '../../Images/16.jpg'
import carttable2 from '../../Images/9.png'
import carttable3 from '../../Images/10.png'

function Shopping() {
    return (
        <div>
            <div className='content shopping_main_div'>
                <div className='Shopping_first_div'>
                    <nav aria-label="breadcrumb">
                        <ol class="breadcrumb">
                            <li class="breadcrumb-item"><a href="#" className='dash_board'>Dashboard</a></li>
                            <li class="breadcrumb-item active" aria-current="page">Products</li>
                        </ol>
                    </nav>
                </div>
                <div className='row'>
                    <div className='col-md-8'>
                        <div className='card'>
                            <div className='card-body'>
                                <div className='table-responsive'>
                                    <table className='table'>
                                        <thead>
                                            <tr>
                                                <th>Photo</th>
                                                <th>Name</th>
                                                <th>Quantity</th>
                                                <th>Price</th>
                                                <th colSpan='2'>Total</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>
                                                    <a href='#'><img src={carttable} className='cart_image'></img></a>
                                                </td>
                                                <td>Digital Clock</td>
                                                <td width='100'>
                                                    <input type="text" class="form-control" value="1"></input>
                                                </td>
                                                <td>$1.190,90</td>
                                                <td>$1.190,90</td>
                                                <td class="text-end">
                                                    <button class="btn btn-outline-danger">
                                                        <i class="fa-solid fa-trash" style={{ color: 'red' }}></i>
                                                    </button>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <a href='#'><img src={carttable1} className='cart_image'></img></a>
                                                </td>
                                                <td>Toy car</td>
                                                <td width='100'>
                                                    <input type="text" class="form-control" value="1"></input>
                                                </td>
                                                <td>
                                                    <div className='d-flex gap-2'>
                                                        <del class='text-muted'>$322.53</del>
                                                        <span>$139.58</span>
                                                    </div>
                                                    <div class='text-success'>86% off</div>
                                                </td>
                                                <td>$139,58</td>
                                                <td class="text-end">
                                                    <button class="btn btn-outline-danger">
                                                        <i class="fa-solid fa-trash" style={{ color: 'red' }}></i>
                                                    </button>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <a href='#'><img src={carttable2} className='cart_image'></img></a>
                                                </td>
                                                <td>Sunglasses</td>
                                                <td width='100'>
                                                    <input type="text" class="form-control" value="2"></input>
                                                </td>
                                                <td>$50,90</td>
                                                <td>$101,80</td>
                                                <td class="text-end">
                                                    <button class="btn btn-outline-danger">
                                                        <i class="fa-solid fa-trash" style={{ color: 'red' }}></i>
                                                    </button>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <a href='#'><img src={carttable3} className='cart_image'></img></a>
                                                </td>
                                                <td>Cake</td>
                                                <td width='100'>
                                                    <input type="text" class="form-control" value="1"></input>
                                                </td>
                                                <td>$10,50</td>
                                                <td>$10,50</td>
                                                <td class="text-end">
                                                    <button class="btn btn-outline-danger">
                                                        <i class="fa-solid fa-trash" style={{ color: 'red' }}></i>
                                                    </button>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='col-md-4'>
                        <div className='card mb-4'>
                            <div className='card-body'>
                                <h6 className='card-title mb-4'>Price</h6>
                                <div className='row justify-content-center mb-3'>
                                    <div className='col-4 text-end'>Sub Total:</div>
                                    <div className='col-4'>$1.442,78</div>
                                </div>
                                <div className='row justify-content-center mb-3'>
                                    <div className='col-4 text-end'>Shipping:</div>
                                    <div className='col-4'>$1.442,78</div>
                                </div>
                                <div className='row justify-content-center mb-3'>
                                    <div className='col-4 text-end'>tax(18%):</div>
                                    <div className='col-4'>$259.70</div>
                                </div>
                                <div className='row justify-content-center mb-3'>
                                    <div className='col-4 text-end'>
                                        <strong>Total :</strong>
                                    </div>
                                    <div className='col-4'>
                                        <strong>$1.702,48</strong>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='card mb-4'>
                            <div className='card-body'>
                                <div className='input-group mb-3'>
                                    <input type="text" class="form-control order_notes" placeholder="Coupon Code" aria-label="Recipient's username" aria-describedby="basic-addon2"></input>
                                    <button class="btn btn-light" type="button" id="button-addon1">Apply</button>
                                </div>
                                <p>Order note:</p>
                                <textarea rows="2" class="form-control order_notes"></textarea>
                            </div>
                        </div>
                        <div class="d-flex gap-3 justify-content-end">
                            <a href="#" class="btn btn-danger">All Clear</a>
                            <a href="#" class="btn btn-primary" style={{ backgroundColor: '#ff470d', borderColor: '#ff470d' }}>Checkout</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Shopping
