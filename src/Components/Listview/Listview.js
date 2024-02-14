import React from 'react'
import './Listview.css'
import viewtable from '../../Images/7.png'
import viewtable1 from '../../Images/15.jpg'
import viewtable2 from '../../Images/8.png'
import viewtable3 from '../../Images/16.jpg'
import viewtable4 from '../../Images/9.png'

function Listview() {
  return (
    <div>
      <div className='content list_view_main_div'>
        <div className='list_view_first_div'>
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
                <div className='d-md-flex gap-4 align-items-center'>
                  <div className="d-md-flex">All Products</div>
                  <div className='d-md-flex gap-4 align-items-center'>
                    <form className='mb-3'>
                      <div className='row g-3'>
                        <div className='col-md-6'>
                          <select className='form-select'>
                            <option>Sort by</option>
                            <option value='desc'>Desc</option>
                            <option value='asc'>Asc</option>
                          </select>
                        </div>
                        <div className='col-md-6'>
                          <select className='form-select'>
                            <option value='10'>10</option>
                            <option value='20'>20</option>
                            <option value='30'>30</option>
                            <option value='40'>40</option>
                            <option value='50'>50</option>
                          </select>
                        </div>
                      </div>
                    </form>
                  </div>
                  <div className='dropdown ms-auto'>
                    <a href="#" data-bs-toggle="dropdown" class="btn btn-primary dropdown-toggle" style={{ backgroundColor: ' #ff6e40', borderColor: ' #ff6e40' }} aria-haspopup="true" aria-expanded="false">Actions</a>
                    <div className='dropdown-menu dropdown-menu-end'>
                      <a href='#' className='dropdown-item'>Actions</a>
                      <a href='#' className='dropdown-item'>Another action</a>
                      <a href='#' className='dropdown-item'>Something else here</a>
                    </div>
                  </div>
                </div>
              </div>

            </div>
            <div className='table-responsive'>
              <table className='table'>
                <thead>
                  <tr>
                    <th>
                      <input class="form-check-input select-all" type="checkbox" data-select-all-target="#products" id="defaultCheck1"></input>
                    </th>
                    <th>ID</th>
                    <th>Photo</th>
                    <th>Name</th>
                    <th>Stock</th>
                    <th>Price</th>
                    <th>Created At</th>
                    <th class="text-end">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      <input class="form-check-input" type="checkbox"></input>
                    </td>
                    <td>
                      <a href="#" style={{ color: '#ff6e40' }}>#1</a>
                    </td>
                    <td>
                      <a href='#'><img src={viewtable} className='view_image'></img></a>
                    </td>
                    <td>Headphone</td>
                    <td>
                      <span className="text-success">In Stock</span>
                    </td>
                    <td>$499,90</td>
                    <td>02/03/2021</td>
                    <td class='text-end'>
                      <div class='d-flex'>
                        <div class='dropdown ms-auto'>
                          <a href='#' data-bs-toggle="dropdown" class="btn btn-floating" aria-haspopup="true" aria-expanded="false">
                            <i class="fa-solid fa-ellipsis"></i>
                          </a>
                          <div class='dropdown-menu dropdown-menu-end'>
                            <a href='#' class='dropdown-item'>Action</a>
                            <a href='#' class='dropdown-item'>Another action</a>
                            <a href='#' class='dropdown-item'>Something else here</a>
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
                      <a href="#" style={{ color: '#ff6e40' }}>#2</a>
                    </td>
                    <td>
                      <a href='#'>
                        <img src={viewtable1} className='view_image'></img>
                      </a>
                    </td>
                    <td>Shoe</td>
                    <td>
                      <span class="text-success">In Stock</span>
                    </td>
                    <td>$500,30</td>
                    <td>19/04/2021</td>
                    <td class='text-end'>
                      <div class='d-flex'>
                        <div class='dropdown ms-auto'>
                          <a href='#' data-bs-toggle="dropdown" class="btn btn-floating" aria-haspopup="true" aria-expanded="false">
                            <i class="fa-solid fa-ellipsis"></i>
                          </a>
                          <div class='dropdown-menu dropdown-menu-end'>
                            <a href='#' class='dropdown-item'>Action</a>
                            <a href='#' class='dropdown-item'>Another action</a>
                            <a href='#' class='dropdown-item'>Something else here</a>
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
                      <a href="#" style={{ color: '#ff6e40' }}>#3</a>
                    </td>
                    <td>
                      <a href='#'> <img src={viewtable2} className='table_image'></img></a>
                    </td>
                    <td>Digital clock</td>
                    <td>
                      <span class='text-danger'>Out of Stock</span>
                    </td>
                    <td>$1.190,90</td>
                    <td>30/05/2021</td>
                    <td class='text-end'>
                      <div class='d-flex'>
                        <div class='dropdown ms-auto'>
                          <a href='#' data-bs-toggle="dropdown" class="btn btn-floating" aria-haspopup="true" aria-expanded="false">
                            <i class="fa-solid fa-ellipsis"></i>
                          </a>
                          <div class='dropdown-menu dropdown-menu-end'>
                            <a href='#' class='dropdown-item'>Action</a>
                            <a href='#' class='dropdown-item'>Another action</a>
                            <a href='#' class='dropdown-item'>Something else here</a>
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
                      <a href="#" style={{ color: '#ff6e40' }}>#4</a>
                    </td>
                    <td>
                      <a href='#'><img src={viewtable3} className='view_image'></img></a>
                    </td>
                    <td>Toy car</td>
                    <td>
                      <span class="text-success">In Stock</span>
                    </td><td>$50,90</td>
                    <td>25/03/2021</td>
                    <td class='text-end'>
                      <div class='d-flex'>
                        <div class='dropdown ms-auto'>
                          <a href='#' data-bs-toggle="dropdown" class="btn btn-floating" aria-haspopup="true" aria-expanded="false">
                            <i class="fa-solid fa-ellipsis"></i>
                          </a>
                          <div class='dropdown-menu dropdown-menu-end'>
                            <a href='#' class='dropdown-item'>Action</a>
                            <a href='#' class='dropdown-item'>Another action</a>
                            <a href='#' class='dropdown-item'>Something else here</a>
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
                            <a href="#"style={{ color: '#ff6e40' }}>#5</a>
                        </td>
                        <td>
                          <a href='#'><img src={viewtable4} className='view_image'></img> </a>
                        </td>
                        <td>Sunglasses</td>
                        <td>
                            <span class="text-success">In Stock</span>
                        </td>
                        <td>$50,90</td>
                        <td>28/03/2021</td>
                        <td class='text-end'>
                      <div class='d-flex'>
                        <div class='dropdown ms-auto'>
                          <a href='#' data-bs-toggle="dropdown" class="btn btn-floating" aria-haspopup="true" aria-expanded="false">
                            <i class="fa-solid fa-ellipsis"></i>
                          </a>
                          <div class='dropdown-menu dropdown-menu-end'>
                            <a href='#' class='dropdown-item'>Action</a>
                            <a href='#' class='dropdown-item'>Another action</a>
                            <a href='#' class='dropdown-item'>Something else here</a>
                          </div>
                        </div>
                      </div>
                    </td>
                    </tr>
        
                </tbody>
              </table>
            </div>
          </div>
          <div className='col-md-4'>
            <h5 className="mb-4">Filter Products</h5>
            <div className='card mb-4'>
              <div className='card-body'>
                <div className='d-flex justify-content-between align-items-center' data-bs-toggle='collapse' aria-expanded='true' data-bs-target='#keywordsCollapseExample' role='button'>
                  <div>Keywords</div>
                  <i class="fa-solid fa-chevron-down"></i>
                </div>
                <div className='collapse show mt-4' id='keywordsCollapseExample'>
                  <div className='input-group'>
                    <input type='text' className='form-control' placeholder='Phone, Headphone, Shoe ...'></input>
                    <button className='btn btn-outline-light' type='button'>
                      <i class="fa-solid fa-magnifying-glass"></i>
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className='card mb-4'>
              <div className='card-body'>
                <div className='d-flex justify-content-between align-items-center' data-bs-toggle='collapse' aria-expanded='true' data-bs-target='#categoriesCollapseExample' role='button'>
                  <div>Categories</div>
                  <i class="fa-solid fa-chevron-down"></i>
                </div>
                <div className='collapse show mt-4' id='categoriesCollapseExample'>
                  <div className='d-flex flex-column gap-3'>
                    <div className='form-check'>
                      <input className='form-check-input' type='checkbox' id='categoryCheck1'></input>
                      <label className='form-check-label' for='categoryCheck1'>
                        All
                      </label>
                    </div>
                    <div className='form-check'>
                      <input className='form-check-input' type='checkbox' id='categoryCheck1'></input>
                      <label className='form-check-label' for='categoryCheck1'>
                        Accessories
                      </label>
                    </div>
                    <div className='form-check'>
                      <input className='form-check-input' type='checkbox' id='categoryCheck1'></input>
                      <label className='form-check-label' for='categoryCheck1'>
                        Phone
                      </label>
                    </div>
                    <div className='form-check'>
                      <input className='form-check-input' type='checkbox' id='categoryCheck1'></input>
                      <label className='form-check-label' for='categoryCheck1'>
                        Headphone
                      </label>
                    </div>
                    <div className='form-check'>
                      <input className='form-check-input' type='checkbox' id='categoryCheck1'></input>
                      <label className='form-check-label' for='categoryCheck1'>
                        Camera
                      </label>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className='card mb-4'>
              <div className='card-body'>
                <div className='d-flex justify-content-between align-items-center' data-bs-toggle='collapse' aria-expanded='true' data-bs-target='#categoriesCollapseExample' role='button'>
                  <div>price</div>
                  <i class="fa-solid fa-chevron-down"></i>
                </div>
              </div>
            </div>
            <div className='card mb-4'>
              <div className='card-body'>
                <div className='d-flex justify-content-between align-items-center' data-bs-toggle='collapse' aria-expanded='true' data-bs-target='#colorsCollapseExample' role='button'>
                  <div>Colors</div>
                  <i class="fa-solid fa-chevron-down"></i>
                </div>
                <div className='collapse show mt-4' id='colorsCollapseExample'>
                  <div className='color-filter-group d-flex gap-3'>
                    <input className='form-check-input input_1' type='checkbox' value="#1fa0c6" aria-label="..." ></input>
                    <input className='form-check-input input_2' type='checkbox' checked="" value="green" aria-label="..." ></input>
                    <input className='form-check-input input_3' type='checkbox' checked="" value="#c61faa" aria-label="..." ></input>
                    <input className='form-check-input input_4' type='checkbox' value="#1fc662" aria-label="..." ></input>
                    <input className='form-check-input input_5' type='checkbox' value="#9dc61f" aria-label="..." ></input>
                    <input className='form-check-input input_6' type='checkbox' checked="" value="#c67b1f" aria-label="..."></input>
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

export default Listview
