import React from 'react'
import './Checkout.css'
import checkout2 from '../../Images/7.png'
import checkout1 from '../../Images/8.png'
import checkout3 from '../../Images/9.png'
import checkout4 from '../../Images/10.png'

function Checkout() {

    const checkout = [

        {
            img: checkout1,
            product: 'Digital clock',
            quantity: '1 x $1.190,90',
            total: '$1.190,90',
        },
        {
            img: checkout2,
            product: 'Headphone',
            quantity: '1 x $139.58',
            total: '$139.58',
        },


        {
            img: checkout3,
            product: 'Sunglasses',
            quantity: '2 x $50,90',
            total: '$101,80',
        },
        {
            img: checkout4,
            product: 'Cake',
            quantity: '1 x $10,50',
            total: '$10,50',
        },
    ]
    return (
        <div>
            <div className='content checkout_main_div'>
                <div className='checkout_first_div'>
                    <nav aria-label="breadcrumb">
                        <ol class="breadcrumb">
                            <li class="breadcrumb-item"><a href="#" className='dash_board'>Dashboard</a></li>
                            <li class="breadcrumb-item active" aria-current="page">Products</li>
                        </ol>
                    </nav>
                </div>
                <div className='row'>
                    <div className='col-md-8'>
                        <h1>Heloooo</h1>
                    </div>
                    <div className='col-md-4'>
                        <h5 class="order_sum">Order Summary</h5>
                        <div className='card products_check'>
                            <div className='card-body'>
                                <h6 className='card-title mb-4'>Products</h6>
                                <div className='list-group list-group-flush'>
                                    {
                                        checkout.map((data) => (
                                            <div className='list-group-item d-flex px-0'>
                                                <a href='#' className='me-3'>
                                                    <img src={data.img} className="checkout_img"></img>
                                                </a>
                                                <div>
                                                    <h6>{data.product}</h6>
                                                    <div>{data.quantity}</div>
                                                </div>
                                                <div class="text-end ms-auto">{data.total}</div>
                                            </div>
                                        ))
                                    }

                                </div>
                            </div>
                        </div>
                        <div className='card price_check'>
                            <div className='card-body'>
                                <h6 className='card-title mb-4'>Price</h6>
                                <div className='row justify-content-center mb-3'>
                                    <div className='col-4 text-end'>Sub Total :</div>
                                    <div className='col-4'>$1.442,78</div>
                                </div>
                                <div className='row justify-content-center mb-3'>
                                    <div className='col-4 text-end'>Shipping :</div>
                                    <div className='col-4'>Free</div>
                                </div>
                                <div className='row justify-content-center mb-3'>
                                    <div className='col-4 text-end'>Tax(18%)</div>
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
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Checkout
