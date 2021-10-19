import React from "react";

const Shopping = () => {
    return(
        <div className="wrapper fixed__footer">
        <section className="htc__product__area shop__page ptb--130 bg__white">
            <div className="container">
                <div className="htc__product__container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="filter__menu__container">
                                <div className="product__menu">
                                    <button data-filter="*"  className="is-checked">All</button>
                                    <button data-filter=".cat--1">Furnitures</button>
                                    <button data-filter=".cat--2">Bags</button>
                                    <button data-filter=".cat--3">Decoration</button>
                                    <button data-filter=".cat--4">Accessories</button>
                                </div>
                                <div className="filter__box">
                                    <a className="filter__menu" href="#">filter</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="filter__wrap">
                        <div className="filter__cart">
                            <div className="filter__cart__inner">
                                <div className="filter__menu__close__btn">
                                    <a href="#"><i className="zmdi zmdi-close"></i></a>
                                </div>
                                <div className="filter__content">
                                    <div className="fiter__content__inner">
                                        <div className="single__filter">
                                            <h2>Sort By</h2>
                                            <ul className="filter__list">
                                                <li><a href="#default">Default</a></li>
                                                <li><a href="#accessories">Accessories</a></li>
                                                <li><a href="#bags">Bags</a></li>
                                                <li><a href="#chair">Chair</a></li>
                                                <li><a href="#decoration">Decoration</a></li>
                                                <li><a href="#fashion">Fashion</a></li>
                                            </ul>
                                        </div>
                                        <div className="single__filter">
                                            <h2>Size</h2>
                                            <ul className="filter__list">
                                                <li><a href="#xxl">XXL</a></li>
                                                <li><a href="#xl">XL</a></li>
                                                <li><a href="#x">X</a></li>
                                                <li><a href="#l">L</a></li>
                                                <li><a href="#m">M</a></li>
                                                <li><a href="#s">S</a></li>
                                            </ul>
                                        </div>
                                        <div className="single__filter">
                                            <h2>Tags</h2>
                                            <ul className="filter__list">
                                                <li><a href="#">All</a></li>
                                                <li><a href="#">Accessories</a></li>
                                                <li><a href="#">Bags</a></li>
                                                <li><a href="#">Chair</a></li>
                                                <li><a href="#">Decoration</a></li>
                                                <li><a href="#">Fashion</a></li>
                                            </ul>
                                        </div>
                                        <div className="single__filter">
                                            <h2>Price</h2>
                                            <ul className="filter__list">
                                                <li><a href="#">$0.00 - $50.00</a></li>
                                                <li><a href="#">$50.00 - $100.00</a></li>
                                                <li><a href="#">$100.00 - $150.00</a></li>
                                                <li><a href="#">$150.00 - $200.00</a></li>
                                                <li><a href="#">$300.00 - $500.00</a></li>
                                                <li><a href="#">$500.00 - $700.00</a></li>
                                            </ul>
                                        </div>
                                        <div className="single__filter">
                                            <h2>Color</h2>
                                            <ul className="filter__list sidebar__list">
                                                <li className="black"><a href="#"><i className="zmdi zmdi-circle"></i>Black</a></li>
                                                <li className="blue"><a href="#"><i className="zmdi zmdi-circle"></i>Blue</a></li>
                                                <li className="brown"><a href="#"><i className="zmdi zmdi-circle"></i>Brown</a></li>
                                                <li className="red"><a href="#"><i className="zmdi zmdi-circle"></i>Red</a></li>
                                                <li className="orange"><a href="#"><i className="zmdi zmdi-circle"></i>Orange</a></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="product__list another-product-style">
                            <div className="col-md-3 single__pro col-lg-3 cat--1 col-sm-4 col-xs-12">
                                <div className="product foo">
                                    <div className="product__inner">
                                        <div className="pro__thumb">
                                            <a href="#">
                                                <img src={require("../../assets/images/product/1.png").default} alt="product images"/>
                                                {/* <img src={Image} alt="product images"/> */}
                                            </a>
                                        </div>
                                        <div className="product__hover__info">
                                            <ul className="product__action">
                                                <li><a data-toggle="modal" data-target="#productModal" title="Quick View" className="quick-view modal-view detail-link" href="#"><span className="ti-plus"></span></a></li>
                                                <li><a title="Add TO Cart" href="cart.html"><span className="ti-shopping-cart"></span></a></li>
                                                <li><a title="Wishlist" href="wishlist.html"><span className="ti-heart"></span></a></li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="product__details">
                                        <h2><a href="product-details.html">Simple Black Clock</a></h2>
                                        <ul className="product__price">
                                            <li className="old__price">$16.00</li>
                                            <li className="new__price">$10.00</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-3 single__pro col-lg-3 cat--1 col-sm-4 col-xs-12">
                                <div className="product foo">
                                    <div className="product__inner">
                                        <div className="pro__thumb">
                                            
                                            <a href="#">
                                                <img src={require("../../assets/images/product/2.png").default} alt="product images"/>
                                            </a>
                                        </div>
                                        <div className="product__hover__info">
                                            <ul className="product__action">
                                                <li><a data-toggle="modal" data-target="#productModal" title="Quick View" className="quick-view modal-view detail-link" href="#"><span className="ti-plus"></span></a></li>
                                                <li><a title="Add TO Cart" href="cart.html"><span className="ti-shopping-cart"></span></a></li>
                                                <li><a title="Wishlist" href="wishlist.html"><span className="ti-heart"></span></a></li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="product__details">
                                        <h2><a href="product-details.html">BO&Play Wireless Speaker</a></h2>
                                        <ul className="product__price">
                                            <li className="old__price">$16.00</li>
                                            <li className="new__price">$10.00</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-3 single__pro col-lg-3 col-sm-4 col-xs-12 cat--2">
                                <div className="product foo">
                                    <div className="product__inner">
                                        <div className="pro__thumb">
                                            <a href="#">
                                            <img src={require("../../assets/images/product/3.png").default} alt="product images"/>
                                            </a>
                                        </div>
                                        <div className="product__hover__info">
                                            <ul className="product__action">
                                                <li><a data-toggle="modal" data-target="#productModal" title="Quick View" className="quick-view modal-view detail-link" href="#"><span className="ti-plus"></span></a></li>
                                                <li><a title="Add TO Cart" href="cart.html"><span className="ti-shopping-cart"></span></a></li>
                                                <li><a title="Wishlist" href="wishlist.html"><span className="ti-heart"></span></a></li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="product__details">
                                        <h2><a href="product-details.html">Brone Candle</a></h2>
                                        <ul className="product__price">
                                            <li className="old__price">$16.00</li>
                                            <li className="new__price">$10.00</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-3 single__pro col-lg-3 col-sm-4 col-xs-12 cat--4">
                                <div className="product foo">
                                    <div className="product__inner">
                                        <div className="pro__thumb">
                                            <a href="#">
                                            <img src={require("../../assets/images/product/4.png").default} alt="product images"/>
                                            </a>
                                        </div>
                                        <div className="product__hover__info">
                                            <ul className="product__action">
                                                <li><a data-toggle="modal" data-target="#productModal" title="Quick View" className="quick-view modal-view detail-link" href="#"><span className="ti-plus"></span></a></li>
                                                <li><a title="Add TO Cart" href="cart.html"><span className="ti-shopping-cart"></span></a></li>
                                                <li><a title="Wishlist" href="wishlist.html"><span className="ti-heart"></span></a></li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="product__details">
                                        <h2><a href="product-details.html">Brone Lamp Glasses</a></h2>
                                        <ul className="product__price">
                                            <li className="old__price">$16.00</li>
                                            <li className="new__price">$10.00</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-3 single__pro col-lg-3 cat--1 col-sm-4 col-xs-12 cat--2">
                                <div className="product foo">
                                    <div className="product__inner">
                                        <div className="pro__thumb">
                                            <a href="#">
                                            <img src={require("../../assets/images/product/5.png").default} alt="product images"/>
                                            </a>
                                        </div>
                                        <div className="product__hover__info">
                                            <ul className="product__action">
                                                <li><a data-toggle="modal" data-target="#productModal" title="Quick View" className="quick-view modal-view detail-link" href="#"><span className="ti-plus"></span></a></li>
                                                <li><a title="Add TO Cart" href="cart.html"><span className="ti-shopping-cart"></span></a></li>
                                                <li><a title="Wishlist" href="wishlist.html"><span className="ti-heart"></span></a></li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="product__details">
                                        <h2><a href="product-details.html">Clothes Boxed</a></h2>
                                        <ul className="product__price">
                                            <li className="old__price">$16.00</li>
                                            <li className="new__price">$10.00</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-3 single__pro col-lg-3 col-sm-4 col-xs-12 cat--3">
                                <div className="product foo">
                                    <div className="product__inner">
                                        <div className="pro__thumb">
                                            <a href="#">
                                            <img src={require("../../assets/images/product/6.png").default} alt="product images"/>
                                            </a>
                                        </div>
                                        <div className="product__hover__info">
                                            <ul className="product__action">
                                                <li><a data-toggle="modal" data-target="#productModal" title="Quick View" className="quick-view modal-view detail-link" href="#"><span className="ti-plus"></span></a></li>
                                                <li><a title="Add TO Cart" href="cart.html"><span className="ti-shopping-cart"></span></a></li>
                                                <li><a title="Wishlist" href="wishlist.html"><span className="ti-heart"></span></a></li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="product__details">
                                        <h2><a href="product-details.html">Liquid Unero Ginger Lily</a></h2>
                                        <ul className="product__price">
                                            <li className="old__price">$16.00</li>
                                            <li className="new__price">$10.00</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-3 single__pro col-lg-3 col-sm-4 col-xs-12 cat--2">
                                <div className="product foo">
                                    <div className="product__inner">
                                        <div className="pro__thumb">
                                            <a href="#">
                                            <img src={require("../../assets/images/product/7.png").default} alt="product images"/>
                                            </a>
                                        </div>
                                        <div className="product__hover__info">
                                            <ul className="product__action">
                                                <li><a data-toggle="modal" data-target="#productModal" title="Quick View" className="quick-view modal-view detail-link" href="#"><span className="ti-plus"></span></a></li>
                                                <li><a title="Add TO Cart" href="cart.html"><span className="ti-shopping-cart"></span></a></li>
                                                <li><a title="Wishlist" href="wishlist.html"><span className="ti-heart"></span></a></li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="product__details">
                                        <h2><a href="product-details.html">Miliraty Backpack</a></h2>
                                        <ul className="product__price">
                                            <li className="old__price">$16.00</li>
                                            <li className="new__price">$10.00</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-3 single__pro col-lg-3 col-sm-4 col-xs-12 cat--2">
                                <div className="product foo">
                                    <div className="product__inner">
                                        <div className="pro__thumb">
                                            <a href="#">
                                            <img src={require("../../assets/images/product/8.png").default} alt="product images"/>
                                            </a>
                                        </div>
                                        <div className="product__hover__info">
                                            <ul className="product__action">
                                                <li><a data-toggle="modal" data-target="#productModal" title="Quick View" className="quick-view modal-view detail-link" href="#"><span className="ti-plus"></span></a></li>
                                                <li><a title="Add TO Cart" href="cart.html"><span className="ti-shopping-cart"></span></a></li>
                                                <li><a title="Wishlist" href="wishlist.html"><span className="ti-heart"></span></a></li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="product__details">
                                        <h2><a href="product-details.html">Saved Wines Corkscrew</a></h2>
                                        <ul className="product__price">
                                            <li className="old__price">$16.00</li>
                                            <li className="new__price">$10.00</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-3 single__pro col-lg-3 col-sm-4 col-xs-12 cat--4">
                                <div className="product foo">
                                    <div className="product__inner">
                                        <div className="pro__thumb">
                                            <a href="#">
                                                <img src={require("../../assets/images/product/9.png").default} alt="product images"/>
                                            </a>
                                        </div>
                                        <div className="product__hover__info">
                                            <ul className="product__action">
                                                <li><a data-toggle="modal" data-target="#productModal" title="Quick View" className="quick-view modal-view detail-link" href="#"><span className="ti-plus"></span></a></li>
                                                <li><a title="Add TO Cart" href="cart.html"><span className="ti-shopping-cart"></span></a></li>
                                                <li><a title="Wishlist" href="wishlist.html"><span className="ti-heart"></span></a></li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="product__details">
                                        <h2><a href="product-details.html">Simple Fabric Bags</a></h2>
                                        <ul className="product__price">
                                            <li className="old__price">$16.00</li>
                                            <li className="new__price">$10.00</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-3 single__pro col-lg-3 col-sm-4 col-xs-12 cat--3">
                                <div className="product foo">
                                    <div className="product__inner">
                                        <div className="pro__thumb">
                                            <a href="#">
                                                <img src={require("../../assets/images/product/10.png").default} alt="product images"/>
                                            </a>
                                        </div>
                                        <div className="product__hover__info">
                                            <ul className="product__action">
                                                <li><a data-toggle="modal" data-target="#productModal" title="Quick View" className="quick-view modal-view detail-link" href="#"><span className="ti-plus"></span></a></li>
                                                <li><a title="Add TO Cart" href="cart.html"><span className="ti-shopping-cart"></span></a></li>
                                                <li><a title="Wishlist" href="wishlist.html"><span className="ti-heart"></span></a></li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="product__details">
                                        <h2><a href="product-details.html">Simple Fabric Chair</a></h2>
                                        <ul className="product__price">
                                            <li className="old__price">$16.00</li>
                                            <li className="new__price">$10.00</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-3 single__pro col-lg-3 col-sm-4 col-xs-12 cat--4">
                                <div className="product foo">
                                    <div className="product__inner">
                                        <div className="pro__thumb">
                                            <a href="#">
                                            <img src={require("../../assets/images/product/11.png").default} alt="product images"/>
                                            </a>
                                        </div>
                                        <div className="product__hover__info">
                                            <ul className="product__action">
                                                <li><a data-toggle="modal" data-target="#productModal" title="Quick View" className="quick-view modal-view detail-link" href="#"><span className="ti-plus"></span></a></li>
                                                <li><a title="Add TO Cart" href="cart.html"><span className="ti-shopping-cart"></span></a></li>
                                                <li><a title="Wishlist" href="wishlist.html"><span className="ti-heart"></span></a></li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="product__details">
                                        <h2><a href="product-details.html">Unero Round Sunglass</a></h2>
                                        <ul className="product__price">
                                            <li className="old__price">$16.00</li>
                                            <li className="new__price">$10.00</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-3 single__pro col-lg-3 col-sm-4 col-xs-12 cat--3">
                                <div className="product foo">
                                    <div className="product__inner">
                                        <div className="pro__thumb">
                                            <a href="#">
                                            <img src={require("../../assets/images/product/12.png").default} alt="product images"/>
                                            </a>
                                        </div>
                                        <div className="product__hover__info">
                                            <ul className="product__action">
                                                <li><a data-toggle="modal" data-target="#productModal" title="Quick View" className="quick-view modal-view detail-link" href="#"><span className="ti-plus"></span></a></li>
                                                <li><a title="Add TO Cart" href="cart.html"><span className="ti-shopping-cart"></span></a></li>
                                                <li><a title="Wishlist" href="wishlist.html"><span className="ti-heart"></span></a></li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="product__details">
                                        <h2><a href="product-details.html">Unero Small Bag</a></h2>
                                        <ul className="product__price">
                                            <li className="old__price">$16.00</li>
                                            <li className="new__price">$10.00</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-3 single__pro col-lg-3 col-sm-4 col-xs-12 cat--3">
                                <div className="product foo">
                                    <div className="product__inner">
                                        <div className="pro__thumb">
                                            <a href="#">
                                            <img src={require("../../assets/images/product/13.png").default} alt="product images"/>
                                            </a>
                                        </div>
                                        <div className="product__hover__info">
                                            <ul className="product__action">
                                                <li><a data-toggle="modal" data-target="#productModal" title="Quick View" className="quick-view modal-view detail-link" href="#"><span className="ti-plus"></span></a></li>
                                                <li><a title="Add TO Cart" href="cart.html"><span className="ti-shopping-cart"></span></a></li>
                                                <li><a title="Wishlist" href="wishlist.html"><span className="ti-heart"></span></a></li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="product__details">
                                        <h2><a href="product-details.html">Wood Complex Lamp Box</a></h2>
                                        <ul className="product__price">
                                            <li className="old__price">$16.00</li>
                                            <li className="new__price">$10.00</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-3 single__pro col-lg-3 col-sm-4 col-xs-12 cat--4">
                                <div className="product foo">
                                    <div className="product__inner">
                                        <div className="pro__thumb">
                                            <a href="#">
                                            <img src={require("../../assets/images/product/14.png").default} alt="product images"/>
                                            </a>
                                        </div>
                                        <div className="product__hover__info">
                                            <ul className="product__action">
                                                <li><a data-toggle="modal" data-target="#productModal" title="Quick View" className="quick-view modal-view detail-link" href="#"><span className="ti-plus"></span></a></li>
                                                <li><a title="Add TO Cart" href="cart.html"><span className="ti-shopping-cart"></span></a></li>
                                                <li><a title="Wishlist" href="wishlist.html"><span className="ti-heart"></span></a></li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="product__details">
                                        <h2><a href="product-details.html">Wood Long TV Board</a></h2>
                                        <ul className="product__price">
                                            <li className="old__price">$16.00</li>
                                            <li className="new__price">$10.00</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-3 single__pro col-lg-3 col-sm-4 col-xs-12 cat--4">
                                <div className="product foo">
                                    <div className="product__inner">
                                        <div className="pro__thumb">
                                            <a href="#">
                                            <img src={require("../../assets/images/product/15.png").default} alt="product images"/>
                                            </a>
                                        </div>
                                        <div className="product__hover__info">
                                            <ul className="product__action">
                                                <li><a data-toggle="modal" data-target="#productModal" title="Quick View" className="quick-view modal-view detail-link" href="#"><span className="ti-plus"></span></a></li>
                                                <li><a title="Add TO Cart" href="cart.html"><span className="ti-shopping-cart"></span></a></li>
                                                <li><a title="Wishlist" href="wishlist.html"><span className="ti-heart"></span></a></li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="product__details">
                                        <h2><a href="product-details.html">Wood Simple Chair V2</a></h2>
                                        <ul className="product__price">
                                            <li className="old__price">$16.00</li>
                                            <li className="new__price">$10.00</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-3 single__pro col-lg-3 hidden-sm col-xs-12 cat--3">
                                <div className="product foo">
                                    <div className="product__inner">
                                        <div className="pro__thumb">
                                            <a href="#">
                                            <img src={require("../../assets/images/product/16.png").default} alt="product images"/>
                                            </a>
                                        </div>
                                        <div className="product__hover__info">
                                            <ul className="product__action">
                                                <li><a data-toggle="modal" data-target="#productModal" title="Quick View" className="quick-view modal-view detail-link" href="#"><span className="ti-plus"></span></a></li>
                                                <li><a title="Add TO Cart" href="cart.html"><span className="ti-shopping-cart"></span></a></li>
                                                <li><a title="Wishlist" href="wishlist.html"><span className="ti-heart"></span></a></li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="product__details">
                                        <h2><a href="product-details.html">Wood Simple Clock</a></h2>
                                        <ul className="product__price">
                                            <li className="old__price">$16.00</li>
                                            <li className="new__price">$10.00</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row mt--60">
                        <div className="col-md-12">
                            <div className="htc__loadmore__btn">
                                <a href="#">load more</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        </div>
    );
}

export default Shopping;

