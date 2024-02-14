import React from 'react'
import './Listorder.css'

function Listorder() {
    return (
        <div>
            <div className='content list_main_div'>
                <div className='list_first_div '>
                    <nav aria-label="breadcrumb">
                        <ol class="breadcrumb">
                            <li class="breadcrumb-item"><a href="#" className='dash_board'>Dashboard</a></li>
                            <li class="breadcrumb-item active" aria-current="page">Order Detail</li>
                        </ol>
                    </nav>
                </div>
                <div className='card'>
                    <div className='card-body'>
                        <div className='d-md-flex gap-4 align-items-center'>
                            <div className='d-md-flex'>All Orders</div>
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
                                    <input class="form-check-input select-all" type="checkbox" data-select-all-target="#orders" id="defaultCheck1"></input>
                                </th>
                                <th>ID</th>
                                <th>Name</th>
                                <th>Date</th>
                                <th>Total</th>
                                <th>Status</th>
                                <th class="text-end">Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>
                                    <input class="form-check-input" type="checkbox"></input>
                                </td>
                                <td>
                                    <a href="#" style={{ color: '#ff6e40' }}>#3210</a>
                                </td>
                                <td>Cortie Gemson</td>
                                <td>May 23, 2021</td>
                                <td>$239,00</td>
                                <td>
                                    <span className="badge" style={{ backgroundColor: '#ff6e40' }}>Processing</span>
                                </td>
                                <td class="text-end">
                                    <div class="d-flex">
                                        <div class="dropdown ms-auto">
                                            <a href="#" data-bs-toggle="dropdown" class="btn btn-floating" aria-haspopup="true" aria-expanded="false">
                                                <i class="fa-solid fa-ellipsis"></i>
                                            </a>
                                            <div class="dropdown-menu dropdown-menu-end">
                                                <a href="#" class="dropdown-item">Show</a>
                                                <a href="#" class="dropdown-item">Edit</a>
                                                <a href="#" class="dropdown-item">Delete</a>
                                            </div>
                                        </div>
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <input class="form-check-input" type="checkbox"></input>
                                </td>
                                <td>
                                    <a href="#" style={{ color: '#ff6e40' }}>#3210</a>
                                </td>
                                <td>Mathilde Tumilson</td>
                                <td>May 15, 2021</td>
                                <td>$650,50</td>
                                <td>
                                    <span class="badge bg-dark">Shipped</span>
                                </td>
                                <td class="text-end">
                                    <div class="d-flex">
                                        <div class="dropdown ms-auto">
                                            <a href="#" data-bs-toggle="dropdown" class="btn btn-floating" aria-haspopup="true" aria-expanded="false">
                                                <i class="fa-solid fa-ellipsis"></i>
                                            </a>
                                            <div class="dropdown-menu dropdown-menu-end">
                                                <a href="#" class="dropdown-item">Show</a>
                                                <a href="#" class="dropdown-item">Edit</a>
                                                <a href="#" class="dropdown-item">Delete</a>
                                            </div>
                                        </div>
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <input class="form-check-input" type="checkbox"></input>
                                </td>
                                <td>
                                    <a href="#" style={{ color: '#ff6e40' }}>#3210</a>
                                </td>
                                <td>Audrye Heaford</td>
                                <td>Apr 24, 2021</td>
                                <td>$100,00</td>
                                <td>
                                    <span class="badge bg-success">Completed</span>
                                </td>
                                <td class="text-end">
                                    <div class="d-flex">
                                        <div class="dropdown ms-auto">
                                            <a href="#" data-bs-toggle="dropdown" class="btn btn-floating" aria-haspopup="true" aria-expanded="false">
                                                <i class="fa-solid fa-ellipsis"></i>
                                            </a>
                                            <div class="dropdown-menu dropdown-menu-end">
                                                <a href="#" class="dropdown-item">Show</a>
                                                <a href="#" class="dropdown-item">Edit</a>
                                                <a href="#" class="dropdown-item">Delete</a>
                                            </div>
                                        </div>
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <input class="form-check-input" type="checkbox"></input>
                                </td>
                                <td>
                                    <a href="#" style={{ color: '#ff6e40' }}>#3210</a>
                                </td>
                                <td>Brantley Mell</td>
                                <td>Apr 10, 2021</td>
                                <td>$19</td>
                                <td>
                                    <span class="badge bg-warning">Refunded</span>
                                </td>
                                <td class="text-end">
                                    <div class="d-flex">
                                        <div class="dropdown ms-auto">
                                            <a href="#" data-bs-toggle="dropdown" class="btn btn-floating" aria-haspopup="true" aria-expanded="false">
                                                <i class="fa-solid fa-ellipsis"></i>
                                            </a>
                                            <div class="dropdown-menu dropdown-menu-end">
                                                <a href="#" class="dropdown-item">Show</a>
                                                <a href="#" class="dropdown-item">Edit</a>
                                                <a href="#" class="dropdown-item">Delete</a>
                                            </div>
                                        </div>
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <input class="form-check-input" type="checkbox"></input>
                                </td>
                                <td>
                                    <a href="#" style={{ color: '#ff6e40' }}>#3210</a>
                                </td>
                                <td>Dominique Enriques</td>
                                <td>March 5, 2021</td>
                                <td>$150,00</td>
                                <td>
                                    <span class="badge bg-danger">Cancelled</span>
                                </td>
                                <td class="text-end">
                                    <div class="d-flex">
                                        <div class="dropdown ms-auto">
                                            <a href="#" data-bs-toggle="dropdown" class="btn btn-floating" aria-haspopup="true" aria-expanded="false">
                                                <i class="fa-solid fa-ellipsis"></i>
                                            </a>
                                            <div class="dropdown-menu dropdown-menu-end">
                                                <a href="#" class="dropdown-item">Show</a>
                                                <a href="#" class="dropdown-item">Edit</a>
                                                <a href="#" class="dropdown-item">Delete</a>
                                            </div>
                                        </div>
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <input class="form-check-input" type="checkbox"></input>
                                </td>
                                <td>
                                    <a href="#" style={{ color: '#ff6e40' }}>#3210</a>
                                </td>
                                <td>Cortie Gemson</td>
                                <td>May 23, 2021</td>
                                <td>$239,00</td>
                                <td>
                                    <span class="badge " style={{ backgroundColor: '#ff6e40' }}>Processing</span>
                                </td>
                                <td class="text-end">
                                    <div class="d-flex">
                                        <div class="dropdown ms-auto">
                                            <a href="#" data-bs-toggle="dropdown" class="btn btn-floating" aria-haspopup="true" aria-expanded="false">
                                                <i class="fa-solid fa-ellipsis"></i>
                                            </a>
                                            <div class="dropdown-menu dropdown-menu-end">
                                                <a href="#" class="dropdown-item">Show</a>
                                                <a href="#" class="dropdown-item">Edit</a>
                                                <a href="#" class="dropdown-item">Delete</a>
                                            </div>
                                        </div>
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <input class="form-check-input" type="checkbox"></input>
                                </td>
                                <td>
                                    <a href="#" style={{ color: '#ff6e40' }}>#3210</a>
                                </td>
                                <td>Mathilde Tumilson</td>
                                <td>May 15, 2021</td>
                                <td>$650,50</td>
                                <td>
                                    <span class="badge bg-dark">Shipped</span>
                                </td>
                                <td class="text-end">
                                    <div class="d-flex">
                                        <div class="dropdown ms-auto">
                                            <a href="#" data-bs-toggle="dropdown" class="btn btn-floating" aria-haspopup="true" aria-expanded="false">
                                                <i class="fa-solid fa-ellipsis"></i>
                                            </a>
                                            <div class="dropdown-menu dropdown-menu-end">
                                                <a href="#" class="dropdown-item">Show</a>
                                                <a href="#" class="dropdown-item">Edit</a>
                                                <a href="#" class="dropdown-item">Delete</a>
                                            </div>
                                        </div>
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <input class="form-check-input" type="checkbox"></input>
                                </td>
                                <td>
                                    <a href="#" style={{ color: '#ff6e40' }}>#3210</a>
                                </td>
                                <td>Audrye Heaford</td>
                                <td>Apr 24, 2021</td>
                                <td>$100,00</td>
                                <td>
                                    <span class="badge bg-success">Completed</span>
                                </td>
                                <td class="text-end">
                                    <div class="d-flex">
                                        <div class="dropdown ms-auto">
                                            <a href="#" data-bs-toggle="dropdown" class="btn btn-floating" aria-haspopup="true" aria-expanded="false">
                                                <i class="fa-solid fa-ellipsis"></i>
                                            </a>
                                            <div class="dropdown-menu dropdown-menu-end">
                                                <a href="#" class="dropdown-item">Show</a>
                                                <a href="#" class="dropdown-item">Edit</a>
                                                <a href="#" class="dropdown-item">Delete</a>
                                            </div>
                                        </div>
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <input class="form-check-input" type="checkbox"></input>
                                </td>
                                <td>
                                    <a href="#" style={{ color: '#ff6e40' }}>#3210</a>
                                </td>
                                <td>Brantley Mell</td>
                                <td>Apr 10, 2021</td>
                                <td>$19</td>
                                <td>
                                    <span class="badge bg-warning">Refunded</span>
                                </td>
                                <td class="text-end">
                                    <div class="d-flex">
                                        <div class="dropdown ms-auto">
                                            <a href="#" data-bs-toggle="dropdown" class="btn btn-floating" aria-haspopup="true" aria-expanded="false">
                                                <i class="fa-solid fa-ellipsis"></i>
                                            </a>
                                            <div class="dropdown-menu dropdown-menu-end">
                                                <a href="#" class="dropdown-item">Show</a>
                                                <a href="#" class="dropdown-item">Edit</a>
                                                <a href="#" class="dropdown-item">Delete</a>
                                            </div>
                                        </div>
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <input class="form-check-input" type="checkbox"></input>
                                </td>
                                <td>
                                    <a href="#" style={{ color: '#ff6e40' }}>#3210</a>
                                </td>
                                <td>Dominique Enriques</td>
                                <td>March 5, 2021</td>
                                <td>$150,00</td>
                                <td>
                                    <span class="badge bg-danger">Cancelled</span>
                                </td>
                                <td class="text-end">
                                    <div class="d-flex">
                                        <div class="dropdown ms-auto">
                                            <a href="#" data-bs-toggle="dropdown" class="btn btn-floating" aria-haspopup="true" aria-expanded="false">
                                                <i class="bi bi-three-dots"></i>
                                            </a>
                                            <div class="dropdown-menu dropdown-menu-end">
                                                <a href="#" class="dropdown-item">Show</a>
                                                <a href="#" class="dropdown-item">Edit</a>
                                                <a href="#" class="dropdown-item">Delete</a>
                                            </div>
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

export default Listorder
