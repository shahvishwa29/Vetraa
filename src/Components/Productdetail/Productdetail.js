import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './Productdetail.css'
import productdetail from '../../Images/7.png'
import productdetail1 from '../../Images/8.png'
import productdetail2 from '../../Images/9.png'
import productdetail3 from '../../Images/10.png'
import productdetail4 from '../../Images/11.png'
import Togglelist from "./Togglelist";




export default class AsNavFor extends Component {



    constructor(props) {
        super(props);
        this.state = {
            nav1: null,
            nav2: null
        };
    }

    componentDidMount() {
        this.setState({
            nav1: this.slider1,
            nav2: this.slider2
        });
    }



    render() {

        return (
            <div>
                <div className='content product_detail_main_div'>
                    <div className='product_detail_first_div'>
                        <nav aria-label="breadcrumb">
                            <ol class="breadcrumb">
                                <li class="breadcrumb-item"><a href="#" className='dash_board'>Dashboard</a></li>
                                <li class="breadcrumb-item active" aria-current="page">Products</li>
                            </ol>
                        </nav>
                    </div>
                    <div className="row">
                        <div className="col-md-12">
                            <div className="card mb-4">
                                <div className="card-body">
                                    <div className="row">
                                        <div className="col-md-5">
                                            <div className="slik_wapper">
                                                <Slider
                                                    asNavFor={this.state.nav2}
                                                    ref={slider => (this.slider1 = slider)}
                                                >
                                                    <img src={productdetail} className="product_detail_img"></img>
                                                    <img src={productdetail1} className="product_detail_img"></img>
                                                    <img src={productdetail2} className="product_detail_img"></img>
                                                    <img src={productdetail3} className="product_detail_img"></img>
                                                    <img src={productdetail4} className="product_detail_img"></img>
                                                </Slider>
                                                <div>
                                                    <Slider
                                                        asNavFor={this.state.nav1}
                                                        ref={slider => (this.slider2 = slider)}
                                                        slidesToShow={3}
                                                        swipeToSlide={true}
                                                        focusOnSelect={true}
                                                    >
                                                        <img src={productdetail} className="product_detail_img_1"></img>
                                                        <img src={productdetail1} className="product_detail_img_1"></img>
                                                        <img src={productdetail2} className="product_detail_img_1"></img>
                                                        <img src={productdetail3} className="product_detail_img_1"></img>
                                                        <img src={productdetail4} className="product_detail_img_1"></img>
                                                    </Slider>
                                                </div>
                                            </div>

                                        </div>
                                        <div className="col-md-7">
                                            <div className="d-flex justify-content-between align-items-start mt-4 mt-md-0">
                                                <div>
                                                    <div className="small text-muted mb-2">Technology Products</div>
                                                    <h2>Ultimate Ears wonderboom</h2>
                                                    <p><span className="badge bg-success">In stock</span></p>
                                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad assumenda
                                                        autem eaque error explicabo fugiat iusto necessitatibus, temporibus. Laudantium,
                                                        voluptate?</p>
                                                    <div className="d-flex gap-3 mb-3 align-items-center">
                                                        <h4 className="text-muted mb-0">
                                                            <del>$699,99</del>
                                                        </h4>
                                                        <h4 className="mb-0">$499,90</h4>
                                                    </div>
                                                    <div className="d-flex gap-2 mb-3">
                                                        <i class="fa-solid fa-star text-warning"></i>
                                                        <i class="fa-solid fa-star text-warning"></i>
                                                        <i class="fa-solid fa-star text-warning"></i>
                                                        <i class="fa-solid fa-star text-warning"></i>
                                                        <i class="fa-solid fa-star text-muted"></i>
                                                        <span>(3)</span>
                                                    </div>
                                                    <p>Features:</p>
                                                    <p>It is a long established fact that a reader will be distracted.
                                                        Contrary to popular belief, Lorem Ipsum is not text.
                                                        There are many variations of passages of Lorem.</p>
                                                    <form className="mt-4">
                                                        <div className="row row-cols-lg-auto">
                                                            <div className="col-12">
                                                                <div className="input-group">
                                                                    <input type="number" className="form-control input_product" value={'1'}></input>
                                                                    <button className="btn btn-primary button_product" type="button">Add To Cart</button>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </form>
                                                </div>
                                                <a href="#" className="btn btn-icon flex-shrink-0">
                                                    <i class="fa-solid fa-heart text-danger" style={{ marginRight: '10px' }}></i>
                                                    50
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div> <Togglelist /></div>

                    </div>
                </div>
            </div>
        );
    }
}