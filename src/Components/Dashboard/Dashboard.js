import React from 'react'
import './Dashboard.css'
import profileimage from '../../Images/4.jpg'
import stateimage from '../../Images/5.png'
import tableimage from '../../Images/12.png'
import tableimage1 from '../../Images/14.jpg'
import tableimage2 from '../../Images/7.png'
import tableimage3 from '../../Images/11.png'


// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation } from 'swiper/modules';
// import required modules
import Chart from 'react-apexcharts'



import { Divider, Radio, Table } from 'antd';


function Dashboard() {

    const users = [
        {
            img: profileimage,
            caption: 'I am very satisfied with this product.',
            name: 'David Berks',
        },
        {
            img: profileimage,
            caption: 'I love your products. It is very easy and fun to use this panel.',
            name: 'Amara Keel'
        },
        {
            img: profileimage,
            caption: 'Very nice glasses. I ordered for my friend.',
            name: 'Johnath Siddeley'
        },
        {
            img: profileimage,
            caption: 'I am very satisfied with this product.',
            name: 'David Berks',
        },
        {
            img: profileimage,
            caption: 'I love your products. It is very easy and fun to use this panel.',
            name: 'Amara Keel'
        },
        {
            img: profileimage,
            caption: 'Very nice glasses. I ordered for my friend.',
            name: 'Johnath Siddeley'
        },
    ]

    const state = [
        {
            image: stateimage,
            text: 'unitedstate',
            number: '$1.671,10',
        },
        {
            image: stateimage,
            text: 'unitedstate',
            number: '$1.671,10',
        },
        {
            image: stateimage,
            text: 'unitedstate',
            number: '$1.671,10',
        },
        {
            image: stateimage,
            text: 'unitedstate',
            number: '$1.671,10',
        },



    ]


    const options = { labels: ['Email', 'Google', 'Social Media'] };
    const series = [22.0, 30.0, 48.0];





    const columns = [
        {
            title: 'Name',
            dataIndex: 'name',
            render: (text) => <a>{text}</a>,
        },
        {
            title: 'Age',
            dataIndex: 'age',
        },
        {
            title: 'Address',
            dataIndex: 'address',
        },
    ];
    const data = [
        {
            key: '1',
            name: 'John Brown',
            age: 32,
            address: 'New York No. 1 Lake Park',
        },
        {
            key: '2',
            name: 'Jim Green',
            age: 42,
            address: 'London No. 1 Lake Park',
        },
        {
            key: '3',
            name: 'Joe Black',
            age: 32,
            address: 'Sydney No. 1 Lake Park',
        },
        {
            key: '4',
            name: 'Disabled User',
            age: 99,
            address: 'Sydney No. 1 Lake Park',
        },
    ];

    const rowSelection = {
        onChange: (selectedRowKeys, selectedRows) => {
            console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
        },
        getCheckboxProps: (record) => ({
            disabled: record.name === 'Disabled User',
            // Column configuration not to be checked
            name: record.name,
        }),
    };



    const seriesy = [

        {
            name: "sales",
            data: [78, 75, 73, 78, 75, 73, 77, 74, 75, 77, 71, 75]
        },
        {
            name: "order",
            data: [65, 60, 62, 69, 71, 65, 68, 67, 60, 61, 59, 64]
        }

    ];
    const optionsy = {
        stroke: {
            curve: "smooth",
        },
        xaxis: {
            categories: ["01may", "02may", "03may", "04may", "05may", "06may", "07may", "08may", "09may", "10may", "11may", "12may"]
        }
    };



    return (
        <div className='content dashboard_main_div'>
            <div className='row g-4'>
                <div className='col-lg-7 col-md-12'>
                    <div className='card-widget h-100'>
                        <div className='card-header d-flex'>
                            <h6 className='card-title' style={{ fontSize: '1.2rem' }}>
                                Sales chart
                                <a href='#'><i class="fa-solid fa-question" style={{ color: '#ff470d', marginLeft: '10px' }}></i></a>
                            </h6>
                            <div className='d-flex gap-3 align-items-center ms-auto'>
                                <div className='dropdown'>
                                    <a href='#' data-bs-toggle='dropdown' className='btn btn-sm' aria-haspopup='true' aria-expanded='false'>
                                        <i class="fa-solid fa-ellipsis"></i>
                                    </a>
                                    <div className='dropdown-menu dropdown-menu-end'>
                                        <a href='#' className='dropdown-item'>View Detail</a>
                                        <a href='#' className='dropdown-item'>Download</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='card-body first_main_div'>
                            <div className='d-md-flex align-items-center mb-3'>
                                <div className='d-flex align-items-center'>
                                    <div className='display-7 me-3 ' style={{ fontSize: '2rem', }}>
                                        <i class="fa-solid fa-bag-shopping me-2 text-success"></i>
                                        $10.552,40
                                    </div>
                                    <span className='text-success'>
                                        <i class="fa-solid fa-arrow-up me-1 small"></i>
                                        8.30%
                                    </span>
                                </div>
                                <div className='d-flex gap-4 align-items-center ms-auto mt-3 '>
                                    <select class="form-select">
                                        <optgroup label="2020">
                                            <option value="October">October</option>
                                            <option value="November">November</option>
                                            <option value="December">December</option>
                                        </optgroup>
                                        <optgroup label="2021">
                                            <option value="January">January</option>
                                            <option value="February">February</option>
                                            <option value="March">March</option>
                                            <option value="April">April</option>
                                            <option value="May" selected="">May</option>
                                            <option value="June">June</option>
                                            <option value="July">July</option>
                                            <option value="August">August</option>
                                            <option value="September">September</option>
                                            <option value="October">October</option>
                                            <option value="November">November</option>
                                            <option value="December">December</option>
                                        </optgroup>
                                    </select>
                                </div>
                            </div>
                            <div>
                                <Chart type="line" series={seriesy} options={optionsy} />
                            </div>
                            <div className='d-flex justify-content-center gap-4 align-items-center ms-auto mt-3'>
                                <div>
                                    <i class="fa-solid fa-circle mr-2 me-1 small" style={{ color: 'orange' }}></i>
                                    <span>Sales</span>
                                </div>
                                <div>
                                    <i class="fa-solid fa-circle mr-2 text-success me-1 small"></i>
                                    <span>Order</span>
                                </div>
                            </div>

                        </div>

                    </div>
                </div>
                <div className='col-lg-5 col-md-12'>
                    <div className='card-widget h-100'>
                        <div className='card-header d-flex'>
                            <h6 className='card-title' style={{ fontSize: '1.2rem' }}>
                                channels
                                <a href='#'><i class="fa-solid fa-question" style={{ color: '#ff470d', marginLeft: '10px' }}></i></a>
                            </h6>
                            <div className='d-flex gap-3 align-items-center ms-auto'>
                                <div className='dropdown'>
                                    <a href='#' data-bs-toggle='dropdown' className='btn btn-sm' aria-haspopup='true' aria-expanded='false'>
                                        <i class="fa-solid fa-ellipsis"></i>
                                    </a>
                                    <div className='dropdown-menu dropdown-menu-end'>
                                        <a href='#' className='dropdown-item'>View Detail</a>
                                        <a href='#' className='dropdown-item'>Download</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='card-body'>
                            <Chart options={options} series={series} type="donut" width="380" />
                            <div className='row text-center mb-5 mt-4'>
                                <div className='col-4'>
                                    <div className='display-7' style={{ fontSize: '2rem' }}>48%</div>
                                    <div className='text-success my-2 small'>
                                        <i class="fa-solid fa-arrow-up" style={{ marginRight: '4px' }}></i>
                                        30.50%
                                    </div>
                                    <div className='d-flex align-items-center justify-content-center'>
                                        <i class="fa-solid fa-circle me-2 small" style={{ color: 'orange' }}></i>
                                        <span class="text-muted">Social Media</span>
                                    </div>
                                </div>
                                <div className='col-4'>
                                    <div className='display-7' style={{ fontSize: '2rem' }}>30%</div>
                                    <div className='text-danger my-2 small'>
                                        <i class="fa-solid fa-arrow-up" style={{ marginRight: '4px' }}></i>
                                        15.20%
                                    </div>
                                    <div className='d-flex align-items-center justify-content-center'>
                                        <i class="fa-solid fa-circle me-2 small" style={{ color: 'cyan' }}></i>
                                        <span class="text-muted">Google</span>
                                    </div>
                                </div>
                                <div className='col-4'>
                                    <div className='display-7' style={{ fontSize: '2rem' }}>20%</div>
                                    <div className='text-success my-2 small'>
                                        <i class="fa-solid fa-arrow-up" style={{ marginRight: '4px' }}></i>
                                        1.80%
                                    </div>
                                    <div className='d-flex align-items-center justify-content-center'>
                                        <i class="fa-solid fa-circle me-2 small" style={{ color: 'indigo' }}></i>
                                        <span class="text-muted">Email</span>
                                    </div>
                                </div>
                            </div>
                            <div className='text-center'>
                                <button className='btn btn-outline-primary btn-icon button_card_1'>
                                    <i class="fa-solid fa-download" style={{ marginRight: '9px' }} ></i>
                                    Download Report
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='col-lg-4 col-md-12'>
                    <div className='card'>
                        <div className='card-body'>
                            <div className='d-flex mb-3 first_section'>
                                <div className='display-7' style={{ fontSize: '2rem' }}>
                                    <i class="fa-solid fa-basket-shopping"></i>
                                </div>
                                <div className='dropdown ms-auto'>
                                    <a href="#" data-bs-toggle="dropdown" class="btn btn-sm" aria-haspopup="true" aria-expanded="false"><i class="fa-solid fa-ellipsis"></i></a>
                                    <div className='dropdown-menu dropdown-menu-end'>
                                        <a href='#' class='dropdown-item'>View Detail</a>
                                        <a href='#' class='dropdown-item'>Download</a>
                                    </div>
                                </div>
                            </div>
                            <h4 class='mb-3'>Orders</h4>
                            <div className='d-flex mb-3 second_section'>
                                <div class='number_1'>310</div>
                            </div>
                            <div className='text-success third_section'>
                                Over last month 1.4%
                                <i class="fa-solid fa-arrow-up " style={{ marginLeft: '10px' }}></i>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='col-lg-4 col-md-12'>
                    <div className='card'>
                        <div className='card-body'>
                            <div className='d-flex mb-3 first_section'>
                                <div className='display-7' style={{ fontSize: '2rem' }}>
                                    <i class="fa-regular fa-credit-card"></i>
                                </div>
                                <div className='dropdown ms-auto'>
                                    <a href="#" data-bs-toggle="dropdown" class="btn btn-sm" aria-haspopup="true" aria-expanded="false"><i class="fa-solid fa-ellipsis"></i></a>
                                    <div className='dropdown-menu dropdown-menu-end'>
                                        <a href='#' class='dropdown-item'>View Detail</a>
                                        <a href='#' class='dropdown-item'>Download</a>
                                    </div>
                                </div>
                            </div>
                            <h4 class='mb-3'>Sales</h4>
                            <div className='d-flex mb-3 second_section'>
                                <div class='number_1'>$3.759,00</div>
                            </div>
                            <div className='text-danger third_section'>
                                Over last month 2.4%
                                <i class="fa-solid fa-arrow-down " style={{ marginLeft: '10px' }}></i>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='col-lg-4 col-md-12'>
                    <div className='card h-100'>
                        <div className='card-body'>
                            <div className='d-flex align-items-center mb-4'>
                                <h6 className='card-title' style={{ fontSize: '1.2rem' }}>Recent Reviews</h6>
                                <div class="dropdown ms-auto">
                                    <a href="#" style={{ color: '#ff6e40', textDecoration: 'none' }}>View All</a>
                                </div>
                            </div>
                            <Swiper
                                spaceBetween={30}
                                centeredSlides={true}
                                autoplay={{
                                    delay: 2500,
                                    disableOnInteraction: false,
                                }}
                                pagination={{
                                    clickable: true,
                                }}
                                // 0navigation={true}
                                modules={[Autoplay]}
                                className="mySwiper"
                            >
                                {
                                    users.map((data) => (
                                        <SwiperSlide>
                                            <div className='d-flex'>
                                                <div className='logo_1'>
                                                    <img src={data.img} className='logo_image'></img>
                                                </div>
                                                <div className='profile_name_main'>
                                                    <h5><div className='profile_name'>{data.name}</div></h5>
                                                    <div className='star_icon'>
                                                        <i class="fa-regular fa-star" style={{ marginRight: '3px' }}></i>
                                                        <i class="fa-regular fa-star" style={{ marginRight: '3px' }}></i>
                                                        <i class="fa-regular fa-star" style={{ marginRight: '3px' }}></i>
                                                        <i class="fa-regular fa-star" style={{ marginRight: '3px' }}></i>
                                                        <i class="fa-regular fa-star" style={{ marginRight: '3px' }}></i>
                                                        <div>(5)</div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div>
                                                {data.caption}
                                            </div>
                                        </SwiperSlide>
                                    ))
                                }
                            </Swiper>
                        </div>
                    </div>
                </div>
                <div className='col-lg-4 col-md-12'>
                    <div className='card'>
                        <div className='card-body'>
                            <div className='d-flex mb-4'>
                                <h6 class="card-title mb-0" style={{ fontSize: '1.2rem' }}>Customer Rating</h6>
                                <div class="dropdown ms-auto">
                                    <a href="#" data-bs-toggle="dropdown" class="btn btn-sm" aria-haspopup="true" aria-expanded="false"><i class="fa-solid fa-ellipsis"></i></a>
                                    <div class="dropdown-menu dropdown-menu-end">
                                        <a href="#" class="dropdown-item">View Detail</a>
                                        <a href="#" class="dropdown-item">Download</a>
                                    </div>
                                </div>
                            </div>
                            <div className='text-center'>
                                <div className='display-6' style={{ fontSize: '2.5rem', fontWeight: '400' }}>3.0</div>
                                <div className='d-flex justify-content-center gap-3 my-3'>
                                    <i class="fa-solid fa-star icon-lg text-warning"></i>
                                    <i class="fa-solid fa-star icon-lg text-warning"></i>
                                    <i class="fa-solid fa-star icon-lg text-warning"></i>
                                    <i class="fa-solid fa-star icon-lg text-muted"></i>
                                    <i class="fa-solid fa-star icon-lg text-muted"></i>
                                    <span>(318)</span>
                                </div>
                            </div>
                            <div className='text-muted d-flex align-items-center justify-content-center'>
                                <span className='text-success me-3 d-block'>
                                    <i class="fa-solid fa-arrow-up " style={{ marginRight: '4px' }}></i>
                                    +35
                                </span>
                                Point from last month
                            </div>
                            <div className='row my-4'>
                                <div className='col-md-6 m-auto'>
                                </div>
                            </div>
                            <div className='text-center'>
                                <button className='btn btn-outline-primary btn-icon button_card_1'>
                                    <i class="fa-solid fa-download" style={{ marginRight: '9px' }} ></i>
                                    Download Report
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='col-lg-4 col-md-6'>
                    <div className='card h-100' style={{ backgroundColor: 'purple' }}>
                        <div className='card-body text-center'>
                            <div className='text-white-50'>
                                <i class="fa-solid fa-box display-6 mb-3" style={{ fontSize: '2.5rem' }}></i>
                                <div className="display-8 mb-2">Products Sold</div>
                                <h5>89 Sold</h5>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='col-lg-4 col-md-6'>
                    <div className='card-widget h-100'>
                        <div className='card-header d-flex justify-content-between align-items-center'>
                            <h5 className='card-title' style={{ fontSize: '1.2rem' }}>
                                Your Top Countries
                                <a href='#'><i class="fa-solid fa-question" style={{ color: '#ff470d', marginLeft: '10px' }}></i></a>
                            </h5>
                            <a href="#">View All</a>
                        </div>
                        <div className='card-body'>
                            <div className='list-group list-group-flush'>

                                {
                                    state.map((data) => (
                                        <div className='state_name'>
                                            <div className='logo_us'>
                                                <img src={data.image} className='logo_image_1'></img>
                                                <span style={{ marginLeft: '10px' }}>{data.text}</span>
                                            </div>
                                            <span>{data.number}</span>
                                        </div>
                                    ))

                                }
                            </div>
                        </div>
                    </div>
                </div>
                <div className='col-lg-5 col-md-12'>
                    <div className='card-widget'>
                        <div class="card-header">
                            <h5 class="card-title" style={{ fontSize: '1.2rem,', marginBottom: '0.5rem' }}>Activity Overview</h5>
                        </div>
                        <div class="row g-4">
                            <div class="col-md-6">
                                <div class="card border-0">
                                    <div class="card-body text-center">
                                        <div class="display-5">
                                            <i class="fa-solid fa-truck" style={{ color: 'purple' }}></i>
                                        </div>
                                        <h5 class="my-3">Delivered</h5>
                                        <div class="text-muted">15 New Packages</div>
                                        <div class="progress mt-3" style={{ height: '5px' }}>
                                            <div class="progress-bar" role="progressbar" style={{ width: '25%', backgroundColor: 'purple' }} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-6">
                                <div class="card border-0">
                                    <div class="card-body text-center">
                                        <div class="display-5">
                                            <i class="fa-solid fa-receipt text-warning"></i>
                                        </div>
                                        <h5 class="my-3">Ordered</h5>
                                        <div class="text-muted">72 New Items</div>
                                        <div class="progress mt-3" style={{ height: '5px' }}>
                                            <div class="progress-bar bg-warning" role="progressbar" style={{ width: '67%' }} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-6">
                                <div class="card border-0">
                                    <div class="card-body text-center">
                                        <div class="display-5">
                                            <i class="fa-solid fa-chart-simple text-info"></i>
                                        </div>
                                        <h5 class="my-3">Reported</h5>
                                        <div class="text-muted">50 Support New Cases</div>
                                        <div class="progress mt-3" style={{ height: '5px' }}>
                                            <div class="progress-bar bg-info" role="progressbar" style={{ width: '80%' }} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-6">
                                <div class="card border-0">
                                    <div class="card-body text-center">
                                        <div class="display-5">
                                            <i class="fa-solid fa-arrow-pointer text-success"></i>
                                        </div>
                                        <h5 class="my-3">Arrived</h5>
                                        <div class="text-muted">34 Upgraded Boxed</div>
                                        <div class="progress mt-3" style={{ height: '5px' }}>
                                            <div class="progress-bar bg-success" role="progressbar" style={{ width: '55%' }} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='col-lg-7 col-md-12'>
                    <div className='card-widget'>
                        <div className='card-header d-flex align-items-center justify-content-between'>
                            <h5 className="card-title" style={{ fontSize: '1.2rem', marginBottom: '0.5rem' }}>Recent Products</h5>
                            <div className='dropdown ms-auto'>
                                <a href="#" data-bs-toggle="dropdown" class="btn btn-sm" aria-haspopup="true" aria-expanded="false"><i class="fa-solid fa-ellipsis"></i></a>
                                <div className='dropdown-menu dropdown-menu-end'>
                                    <a href='#' class='dropdown-item'>Action</a>
                                    <a href='#' class='dropdown-item'>Another action</a>
                                    <a href='#' class='dropdown-item'>Something else here</a>
                                </div>
                            </div>
                        </div>
                        <div className='card-body'>
                            <p className='text-muted'>
                                Products added today. Click
                                <a href="#" style={{ marginRight: '5px', marginLeft: '5px', textDecoration: 'none', color: '#ff6e40' }}>here</a>
                                for more details
                            </p>
                            <div class="table-responsive">
                                <table class="table">
                                    <thead>
                                        <tr>
                                            <th>
                                                <input class="form-check-input select-all" style={{ borderColor: '#ffb7a0' }} type="checkbox" data-select-all-target="#recent-products" id="defaultCheck1"></input>
                                            </th>
                                            <th>Photo</th>
                                            <th>Name</th>
                                            <th>Stock</th>
                                            <th>Price</th>
                                            <th className='text-end'>Actions</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr className='table_row'>
                                            <td>
                                                <input class="form-check-input" style={{ borderColor: '#ffb7a0' }} type="checkbox"></input>
                                            </td>
                                            <td>
                                                <a href='#'>
                                                    <img src={tableimage} className='table_image'></img>
                                                </a>
                                            </td>
                                            <td>Cookie</td>
                                            <td>
                                                <span className='text-danger'>Out of Stock</span>
                                            </td>
                                            <td>$10,50</td>
                                            <td className='text-end'>
                                                <div className='d-flex'>
                                                    <div className='dropdown ms-auto'>
                                                        <a href="#" data-bs-toggle="dropdown" class="btn btn-floating" aria-haspopup="true" aria-expanded="false">
                                                            <i class="fa-solid fa-ellipsis"></i>
                                                        </a>
                                                        <div className='dropdown-menu dropdown-menu-end'>
                                                            <a href='#' className="dropdown-item">Action</a>
                                                            <a href='#' className="dropdown-item">Another action</a>
                                                            <a href='#' className="dropdown-item">Something else here</a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <input class="form-check-input" style={{ borderColor: '#ffb7a0' }} type="checkbox"></input>
                                            </td>
                                            <td>
                                                <img src={tableimage1} className='table_image'></img>
                                            </td>
                                            <td>Glass</td>
                                            <td>
                                                <span className='text-success'>In Stock</span>
                                            </td>
                                            <td>$70,20</td>
                                            <td className='text-end'>
                                                <div className='d-flex'>
                                                    <div className='dropdown ms-auto'>
                                                        <a href='#' data-bs-toggle="dropdown" class="btn btn-floating" aria-haspopup="true" aria-expanded="false">
                                                            <i class="fa-solid fa-ellipsis"></i>
                                                        </a>
                                                        <div className='dropdown-menu dropdown-menu-end'>
                                                            <a href='#' className='dropdown-item'>Action</a>
                                                            <a href='#' className='dropdown-item'>Another action</a>
                                                            <a href='#' className='dropdown-item'>Something else here</a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <input class="form-check-input" style={{ borderColor: '#ffb7a0' }} type="checkbox"></input>
                                            </td>
                                            <td>
                                                <img src={tableimage2} className='table_image'></img>
                                            </td>
                                            <td>Headphone</td>
                                            <td>
                                                <span className='text-success'>In Stock</span>
                                            </td>
                                            <td>$870,50</td>
                                            <td className='text-end'>
                                                <div className='d-flex'>
                                                    <div className='dropdown ms-auto'>
                                                        <a href='#' data-bs-toggle="dropdown" class="btn btn-floating" aria-haspopup="true" aria-expanded="false">
                                                            <i class="fa-solid fa-ellipsis"></i>
                                                        </a>
                                                        <div className='dropdown-menu dropdown-menu-end'>
                                                            <a href='#' className='dropdown-item'>Action</a>
                                                            <a href='#' className='dropdown-item'>Another action</a>
                                                            <a href='#' className='dropdown-item'>Something else here</a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <input class="form-check-input" style={{ borderColor: '#ffb7a0' }} type="checkbox"></input>
                                            </td>
                                            <td>
                                                <img src={tableimage3} className='table_image'></img>
                                            </td>
                                            <td>Perfume</td>
                                            <td>
                                                <span className='text-success'>In Stock</span>
                                            </td>
                                            <td>$170,50</td>
                                            <td className='text-end'>
                                                <div className='d-flex'>
                                                    <div className='dropdown ms-auto'>
                                                        <a href='#' data-bs-toggle="dropdown" class="btn btn-floating" aria-haspopup="true" aria-expanded="false">
                                                            <i class="fa-solid fa-ellipsis"></i>
                                                        </a>
                                                        <div className='dropdown-menu dropdown-menu-end'>
                                                            <a href='#' className='dropdown-item'>Action</a>
                                                            <a href='#' className='dropdown-item'>Another action</a>
                                                            <a href='#' className='dropdown-item'>Something else here</a>
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
                </div>
            </div>
        </div>



    )
}

export default Dashboard
