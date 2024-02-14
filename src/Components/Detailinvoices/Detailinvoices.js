import React from 'react'
import './Detailinvoices.css'
import logoimage from '../../Images/6.png'

function Detailinvoices() {
    return (
        <div>
            <div className='content invoice_main_div'>
                <div className='d-flex gap-3 mb-4 '>
                    <button type="button" class="btn btn-outline-primary btn-icon download_btn">
                        <i class="fa-solid fa-download icon_btn"></i>
                        Download
                    </button>
                    <button type="button" class="btn btn-outline-secondary btn-icon print_btn">
                        <i class="fa-solid fa-print icon_btn"></i>
                        Print
                    </button>
                    <button type="button" class="btn btn-outline-success btn-icon share_btn">
                        <i class="fa-solid fa-share-nodes icon_btn"></i>
                        Share
                    </button>
                </div>
                <div className='card'>
                    <div className='card-body'>
                        <div className='invoice'>
                            <div className='d-md-flex justify-content-between align-items-center mb-4'>
                                <div>Invoice No : #000756</div>
                                <div>Date: 	3/29/2021</div>
                            </div>
                            <div className='d-md-flex justify-content-between align-items-center'>
                                <h4>Invoice</h4>
                                <div>
                                    <img src={logoimage} className='logo_img_1'></img>
                                </div>
                            </div>
                            <hr class="my-4"></hr>
                            <div className='row'>
                                <div className='col-md-6'>
                                    <p>
                                        <strong>Bill form</strong>
                                    </p>
                                    <p>
                                        81 Fulton Park,
                                        <br />
                                        Brazil/Pedro Leopoldo
                                    </p>
                                </div>

                                <div className='col-md-6'>
                                    <p className='text-start text-md-end'>
                                        <strong>Bill to</strong>
                                    </p>
                                    <p>
                                        81 Fulton Park,
                                        <br />
                                        Brazil/Pedro Leopoldo
                                    </p>
                                </div>
                            </div>

                            <table class="table mb-4 mt-4">
                                <thead className='thead-light'>
                                    <tr>
                                        <th scope="col">#</th>
                                        <th>Description</th>
                                        <th class="text-end">Quantity</th>
                                        <th class="text-end">Price</th>
                                        <th class="text-end">Total</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr className='text-end'>
                                        <td className='text-start'>1</td>
                                        <td class="text-start">Digital clock</td>
                                        <td>1</td>
                                        <td>$1.190,90</td>
                                        <td>$1.190,90</td>
                                    </tr>
                                    <tr class="text-end">
                                        <td class="text-start">1</td>
                                        <td class="text-start">Toy Car</td>
                                        <td>1</td>
                                        <td>$139.58</td>
                                        <td>$139.58</td>
                                    </tr>
                                    <tr class="text-end">
                                        <td class="text-start">2</td>
                                        <td class="text-start">Sunglasses</td>
                                        <td>1</td>
                                        <td>$50,90</td>
                                        <td>$101,80</td>
                                    </tr>
                                    <tr class="text-end">
                                        <td class="text-start">3</td>
                                        <td class="text-start">Cake</td>
                                        <td>1</td>
                                        <td>$10,50</td>
                                        <td>$10,50</td>
                                    </tr>
                                </tbody>
                            </table>
                            <div className='text-end'>
                                <p>Sub Total: $1.442,78</p>
                                <p>shipping: free</p>
                                <p>Tax(18%): $259.70</p>
                                <h4 className='fw-bold'>Total:$1.702,48</h4>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Detailinvoices
