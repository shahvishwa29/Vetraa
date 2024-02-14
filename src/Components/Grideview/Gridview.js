import React from 'react'
import './Gridview.css'
import productsimage from '../../Images/7.png'
import productsimage1 from '../../Images/8.png'
import productsimage2 from '../../Images/9.png'
import productsimage3 from '../../Images/10.png'
import productimage4 from '../../Images/11.png'
import productimage5 from '../../Images/12.png'

function Gridview() {

  const product = [
    {
      img: productsimage,
      title: 'Headphone',
      del: '$800',
      price: '$499,90',
      star: <i class="fa-regular fa-star"></i>,
      no: '(25)',
      button: 'Add To cart',
      heart: <i class="fa-regular fa-heart"></i>
    },

    {
      img: productsimage1,
      title: 'Digital clock',
      price: '$1.190,90',
      star: <i class="fa-regular fa-star"></i>,
      no: '(10)',
      button: 'Add To cart',
      heart: <i class="fa-regular fa-heart"></i>,
    },

    {
      img: productsimage2,
      title: 'Glasses',
      price: '$499,90',
      button: 'In cart (2)',
      heart: <i class="fa-regular fa-heart"></i>,
    },

    {
      img: productsimage3,
      title: 'cake',
      price: '$10,00',
      button: 'Add To cart',
      heart: <i class="fa-regular fa-heart"></i>
    },

    {
      img: productimage4,
      title: 'Perfume',
      price: '$30,00',
      star: <i class="fa-regular fa-star"></i>,
      no: '(5)',
      button: 'Add To cart',
      heart: <i class="fa-regular fa-heart"></i>
    },

    {
      img: productimage5,
      title: 'cookie',
      price: '$25,00',
      star: <i class="fa-regular fa-star"></i>,
      no: '(8)',
      button: 'Add To cart',
      heart: <i class="fa-regular fa-heart"></i>
    },

  ]
  return (
    <div>
      <div className='content grid_view_main_div'>
        <div className='grid_view_first_div'>
          <nav aria-label="breadcrumb">
            <ol class="breadcrumb">
              <li class="breadcrumb-item"><a href="#" className='dash_board'>Dashboard</a></li>
              <li class="breadcrumb-item active" aria-current="page">Products</li>
            </ol>
          </nav>
        </div>
        <div className='row'>
          <div className='col-md-8'>
            <div class="card all_products">
              <div className='card-body'>
                <div className='d-md-flex gap-4 align-items-center'>
                  <div className='d-none d-md-flex'>All Products</div>
                  <div className='d-md-flex gap-4 align-items-center'>
                    <form className='mb-3 mb-md-0'>
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
                    <div class='dropdown ms-auto'>
                      <a href='#' data-bs-toggle='dropdown' class='btn btn-primary dropdown-toggle action_button' aria-haspopup='true' aria-expanded='false'>Actions</a>
                      <div className='dropdown-menu dropdown-menu-end'>
                        <a href='#' className='dropdown-item'>Action</a>
                        <a href='#' className='dropdown-item'>Another action</a>
                        <a href='#' className='dropdown-item'>Something else here</a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className=' products_main'>

              <div className=' products_div2'>
                {
                  product.map((data) => (
                    <div className='card card-hover 
                    '>
                      <a href='#'>
                        <img src={data.img} className=' card-img-top product_image'></img>
                      </a>
                      <div className='card-body'>
                        <a href='#' className='headphone_div'>
                          <h5 className='card-title mb-3'>{data.title}</h5>
                        </a>
                        <div className='d-flex gap-3 mb-3 align-items-center'>
                          <del className='text-muted no_1'>{data.del}</del>
                          <h4 className='mb-0'>{data.price}</h4>
                        </div>
                        <div className='d-flex gap-2 mb-3'>
                          {data.star}
                          {/* <i class="fa-regular fa-star"></i>
                          <i class="fa-regular fa-star"></i>
                          <i class="fa-regular fa-star"></i>
                          <i class="fa-regular fa-star"></i>
                          <i class="fa-regular fa-star"></i> */}
                          <span>{data.no}</span>
                        </div>
                        <div className='d-flex'>
                          <a href='#' className='btn btn-primary add_to'>{data.button}</a>
                          <a href='#' className='btn ms-auto'>
                            {data.heart}
                            {/* <i class="fa-regular fa-heart"></i> */}
                          </a>
                        </div>
                      </div>
                    </div>
                  ))
                }
              </div>

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

export default Gridview
