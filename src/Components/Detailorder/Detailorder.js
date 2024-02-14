import React from 'react'
import './Detailorder.css'

function Detail() {
  return (
    <div>
      <div className='content detail_main_div'>
        <div className='detail_first_div '>
          <nav aria-label="breadcrumb">
            <ol class="breadcrumb">
              <li class="breadcrumb-item"><a href="#" className='dash_board'>Dashboard</a></li>
              <li class="breadcrumb-item active" aria-current="page">Order Detail</li>
            </ol>
          </nav>
        </div>
        <div className='row'>
          <div className='col-lg-8 col-md-12'>
            <div className='card mb-4'>
              <div className='card-body'>
                <div className='d-flex align-items-center justify-content-between detail_second_div'>
                  <span>
                    Order No:
                    <a href='#' className='order_no'>#5355619</a>
                  </span>
                  <span className='badge bg-success'>
                    Completed
                  </span>
                </div>
                <div className='row detail_list g-4'>
                  <div className='col-md-3 col-sm-6'>
                    <p className='address_1 '> <b>Order Created at</b></p>
                    16/06/2021 at 04:23 PM
                  </div>
                  <div class="col-md-3 col-sm-6">
                    <p class="address_2"><b>Name</b></p>
                    Sayres Seater
                  </div>
                  <div class="col-md-3 col-sm-6">
                    <p class="address_3"><b>Email</b></p>
                    sayres@sayres.com
                  </div>
                  <div class="col-md-3 col-sm-6">
                    <p class="adress_4"><b>Contact No</b></p>
                    767-251-8637
                  </div>
                </div>
                <div className='row'>
                  <div className='col-md-6 col-sm-12'>
                    <div className='card'>
                      <div className='card-body d-flex flex-column gap-3'>
                        <div className='d-flex justify-content-between'>
                          <h5 className='detail_text'>Delivery Address</h5>
                          <a href='#' className='edit_sec'>Edit</a>
                        </div>
                        <div>Nmae: Home</div>
                        <div>Josephin Villa</div>
                        <div>81 Fulton Park, Brazil/Pedro Leopoldo</div>
                        <div>
                          <i class="fa-solid fa-phone" style={{ marginRight: '10px' }}></i>
                          408-963-7769
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className='col-md-6 col-sm-12'>
                    <div className='card'>
                      <div className='card-body d-flex flex-column gap-3'>
                        <div className='d-flex justify-content-between'>
                          <h5 className='detail_text'>Billing Address</h5>
                          <a href='#' className='edit_sec'>Edit</a>
                        </div>
                        <div>Name:Workplace</div>
                        <div>Josephin Villa</div>
                        <div>29543 South plaza,canada/sydney mines</div>
                        <div>
                          <i class="fa-solid fa-phone" style={{ marginRight: '10px' }}></i>
                          484-948-8535
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='col-lg-4 col-md-12 '>
            <div className='card price_card'>
              <div className='card-body'>
                <h5 className='card-title price_title'>price</h5>
                <div className='row justify-content-center price_sub'>
                  <div className='col-4 text-end'>Sub Total:</div>
                  <div className='col-4'>$1.520,96</div>
                </div>
                <div className='row justify-content-center price_shipping'>
                  <div className='col-4 text-end'>Shipping:</div>
                  <div className='col-4'>Free</div>
                </div>
                <div className='row justify-content-center price_tax'>
                  <div className='col-4 text-end'>Tax(18%):</div>
                  <div className='col-4'>$273,77</div>
                </div>
                <div className='row justify-content-center price_total'>
                  <div className='col-4 text-end'>
                    <strong>Total:</strong>
                  </div>
                  <div className='col-4'>
                    <strong>$1.794,73</strong>
                  </div>
                </div>
              </div>
            </div>
            <div className='card Invoices_card'>
              <div className='card-body'>
                <h5 className='card-title invoices_title'>Invoice</h5>
                <div className='row justify-content-center Invoices_sub'>
                  <div className='col-6 text-end'>Invoice No:</div>
                  <div className='col-6 id_no'>#5355619</div>
                </div>
                <div className='row justify-content-center Invoices_shipping'>
                  <div className='col-6 text-end'>Seller GST:</div>
                  <div className='col-6'>2HY87072641Z0</div>
                </div>
                <div className='row justify-content-center Invoices_tax'>
                  <div className='col-6 text-end'>Purchase GST:</div>
                  <div className='col-6'>22HG9838964Z1</div>
                </div>
                <div className='text-center Invoices_button'>
                  <button className='btn btn-outline-primary button_hover'>Download PDF</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Detail
