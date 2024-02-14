import React from 'react'
import './Listinvoices.css'

function Listinvoices() {
  return (
    <div>
      <div className='content list_invoices_main_div'>
        <div className='card'>
          <div className='card-body'>
            <div className='d-md-flex'>
              <div className='d-md-flex gap-4 align-items-center'>
                <form className='mb-3'>
                  <div className='row g-3'>
                    <div className='col-md-3'>
                      <select class="form-select">
                        <option>Sort by</option>
                        <option value='desc'>Desc</option>
                        <option value='asc'>Asc</option>
                      </select>
                    </div>
                    <div class="col-md-3">
                      <select class="form-select">
                        <option value="10">10</option>
                        <option value="20">20</option>
                        <option value="30">30</option>
                        <option value="40">40</option>
                        <option value="50">50</option>
                      </select>
                    </div>
                    <div class="col-md-6">
                      <div class="input-group">
                        <input type="text" class="form-control" placeholder="Search">
                        </input>
                        <button class="btn btn-outline-light" type="button">
                          <i class="fa-solid fa-magnifying-glass text-black" style={{ borderColor: '#ced4da', color: 'white', marginLeft: '-1' }}></i>
                        </button>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
              <div className='dropdown ms-auto'>
                <a href="#" data-bs-toggle="dropdown" class="btn btn-primary dropdown-toggle button_list" aria-haspopup="true" aria-expanded="false">
                  Actions
                </a>
                <div class="dropdown-menu dropdown-menu-end" style={{ margin: '0px' }}>
                  <a href="#" class="dropdown-item">Action</a>
                  <a href="#" class="dropdown-item">Another action</a>
                  <a href="#" class="dropdown-item">Something else here</a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="table-responsive">
          <table class="table">
            <thead>
              <tr>
                <th>
                  <input class="form-check-input select-all" type="checkbox" data-select-all-target="#invoices" id="defaultCheck1"></input>
                </th>
                <th>Invoice</th>
                <th>Customer</th>
                <th>Total</th>
                <th>Status</th>
                <th>Date</th>
                <th class="text-end">Action</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <input class="form-check-input" type="checkbox"></input>
                </td>
                <td>
                  <a href='#' style={{ color: '#ff470d', textDecoration: 'none' }}>INV-3145</a>
                </td>
                <td>
                  <div className='d-flex align-items-center'>
                    <div className='me-2 rounded-circle bg-success cus_avtar'>D</div>
                    Dollie Bullock
                  </div>
                </td>
                <td>$230</td>
                <td>
                    <span class="badge" style={{backgroundColor:'#9932e7'}}>On pre-order (not paid)</span>
                </td>
                <td>1/11/2021</td>
                <td class='text-end'>
                    <div class='dropdown'>
                        <a href='#' data-bs-toggle='dropdown' class='btn btn-floating' aria-haspopup="true" aria-expanded="false">
                        <i class="fa-solid fa-ellipsis"></i>
                        </a>
                        <div class='dropdown-menu dropdown-menu-end'>
                            <a href='#' class='dropdown-item'>View Detail</a>
                            <a href='#' class='dropdown-item'>Send</a>
                            <a href='#' class='dropdown-item'>Download</a>
                            <a href='#' class='dropdown-item'>Print</a>
                            <a href='#' class='dropdown-item text-danger'>Delete</a>
                        </div>
                    </div>
                </td>
              </tr>
              <tr>
                <td>
                  <input class="form-check-input" type="checkbox"></input>
                </td>
                <td>
                  <a href='#' style={{ color: '#ff470d', textDecoration: 'none' }}>INV-3145</a>
                </td>
                <td>
                  <div className='d-flex align-items-center'>
                    <div className='me-2 rounded-circle bg-success cus_avtar'>D</div>
                    Dollie Bullock
                  </div>
                </td>
                <td>$230</td>
                <td>
                    <span class="badge" style={{backgroundColor:'#9932e7'}}>On pre-order (not paid)</span>
                </td>
                <td>1/11/2021</td>
                <td class='text-end'>
                    <div class='dropdown'>
                        <a href='#' data-bs-toggle='dropdown' class='btn btn-floating' aria-haspopup="true" aria-expanded="false">
                        <i class="fa-solid fa-ellipsis"></i>
                        </a>
                        <div class='dropdown-menu dropdown-menu-end'>
                            <a href='#' class='dropdown-item'>View Detail</a>
                            <a href='#' class='dropdown-item'>Send</a>
                            <a href='#' class='dropdown-item'>Download</a>
                            <a href='#' class='dropdown-item'>Print</a>
                            <a href='#' class='dropdown-item text-danger'>Delete</a>
                        </div>
                    </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>

  )
}

export default Listinvoices
