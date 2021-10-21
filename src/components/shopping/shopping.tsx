import React from "react";
import Product from "./Product";
import VisibleProductList from "../../containers/VisibleProductList";
import Picker from "./Picker";
import CategortyList from '../../containers/CategoryList';

const Shopping = () => {
    return(
        <div className="wrapper fixed__footer">
            {/* <!-- Start Header Style --> */}
            <div id="header" className="htc-header header--3 bg__white">
                {/* <!-- Start Mainmenu Area --> */}
                <div id="sticky-header-with-topbar" className="mainmenu__area sticky__header">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-2 col-lg-2 col-sm-3 col-xs-3">
                                <div className="logo">
                                    <a href="index.html">
                                        {/* <img src="images/logo/logo.png" alt="logo"/> */}
                                        <img src={require("../../assets/images/logo/logo.png").default} alt="logo"/>
                                    </a>
                                </div>
                            </div>
                            {/* <!-- Start Mainmenu Ares --> */}
                            <div className="col-md-8 col-lg-8 col-sm-6 col-xs-6">
                                <nav className="mainmenu__nav hidden-xs hidden-sm">
                                    <ul className="main__menu">
                                        <li className="drop"><a href="index.html">Home</a></li>
                                        <li className="drop"><a href="portfolio-card-box-2.html">portfolio</a>
                                            <ul className="dropdown">
                                                <li><a href="portfolio-card-box-2.html">portfolio</a></li>
                                                <li><a href="single-portfolio.html">Single portfolio</a></li>
                                            </ul>
                                        </li>
                                        <li className="drop"><a href="blog.html">Blog</a>
                                            <ul className="dropdown">
                                                <li><a href="blog.html">blog 3 column</a></li>
                                                <li><a href="blog-details.html">Blog details</a></li>
                                            </ul>
                                        </li>
                                        <li className="drop"><a href="shop.html">Shop</a>
                                            <ul className="dropdown mega_dropdown">
                                                {/* <!-- Start Single Mega MEnu --> */}
                                                <li><a className="mega__title" href="shop.html">shop layout</a>
                                                    <ul className="mega__item">
                                                        <li><a href="shop.html">default shop</a></li>
                                                    </ul>
                                                </li>
                                                {/* <!-- End Single Mega MEnu --> */}
                                                {/* <!-- Start Single Mega MEnu --> */}
                                                <li><a className="mega__title" href="shop.html">product details layout</a>
                                                    <ul className="mega__item">
                                                        <li><a href="product-details.html">tab style 1</a></li>
                                                    </ul>
                                                </li>
                                                {/* <!-- End Single Mega MEnu --> */}
                                                {/* <!-- Start Single Mega MEnu --> */}
                                                <li>
                                                    <ul className="mega__item">
                                                        <li>
                                                            <div className="mega-item-img">
                                                                <a href="shop.html">
                                                                    <img src="images/feature-img/3.png" alt=""/>
                                                                </a>
                                                            </div>
                                                        </li>
                                                    </ul>
                                                </li>
                                                {/* <!-- End Single Mega MEnu --> */}
                                            </ul>
                                        </li>
                                        <li className="drop"><a href="#">pages</a>
                                            <ul className="dropdown">
                                                <li><a href="about.html">about</a></li>
                                                <li><a href="#">testimonials <span><i className="zmdi zmdi-chevron-right"></i></span></a>
                                                    <ul className="lavel-dropdown">
                                                        <li><a href="customer-review.html">customer review</a></li>
                                                    </ul>
                                                </li>
                                                <li><a href="shop.html">shop</a></li>
                                                <li><a href="shop-sidebar.html">shop sidebar</a></li>
                                                <li><a href="product-details.html">product details</a></li>
                                                <li><a href="cart.html">cart</a></li>
                                                <li><a href="wishlist.html">wishlist</a></li>
                                                <li><a href="checkout.html">checkout</a></li>
                                                <li><a href="team.html">team</a></li>
                                                <li><a href="login-register.html">login & register</a></li>
                                            </ul>
                                        </li>
                                        <li><a href="contact.html">contact</a></li>
                                    </ul>
                                </nav>
                                <div className="mobile-menu clearfix visible-xs visible-sm">
                                    <nav id="mobile_dropdown">
                                        <ul>
                                            <li><a href="index.html">Home</a></li>
                                            <li><a href="#">portfolio</a>
                                                <ul>
                                                    <li><a href="portfolio-card-box-2.html">portfolio</a></li>
                                                    <li><a href="single-portfolio.html">Single portfolio</a></li>
                                                </ul>
                                            </li>
                                            <li><a href="blog.html">blog</a>
                                                <ul>
                                                    <li><a href="blog.html">blog 3 column</a></li>
                                                    <li><a href="blog-details.html">Blog details</a></li>
                                                </ul>
                                            </li>
                                            <li><a href="#">pages</a>
                                                <ul>
                                                    <li><a href="about.html">about</a></li>
                                                    <li><a href="customer-review.html">customer review</a></li>
                                                    <li><a href="shop.html">shop</a></li>
                                                    <li><a href="shop-sidebar.html">shop sidebar</a></li>
                                                    <li><a href="product-details.html">product details</a></li>
                                                    <li><a href="cart.html">cart</a></li>
                                                    <li><a href="wishlist.html">wishlist</a></li>
                                                    <li><a href="checkout.html">checkout</a></li>
                                                    <li><a href="team.html">team</a></li>
                                                    <li><a href="login-register.html">login & register</a></li>
                                                </ul>
                                            </li>
                                            <li><a href="contact.html">contact</a></li>
                                        </ul>
                                    </nav>
                                </div>                         
                            </div>
                            {/* <!-- End MAinmenu Ares --> */}
                            <div className="col-md-2 col-sm-4 col-xs-3">  
                                <ul className="menu-extra">
                                    <li className="search search__open hidden-xs"><span className="ti-search"></span></li>
                                    <li><a href="login-register.html"><span className="ti-user"></span></a></li>
                                    <li className="cart__menu"><span className="ti-shopping-cart"></span></li>
                                    <li className="toggle__menu hidden-xs hidden-sm"><span className="ti-menu"></span></li>
                                </ul>
                            </div>
                        </div>
                        <div className="mobile-menu-area"></div>
                    </div>
                </div>
                {/* <!-- End Mainmenu Area --> */}
            </div>
            {/* <!-- End Header Style --> */}

            <div className="body__overlay"></div>
            {/* <!-- Start Offset Wrapper --> */}
            <div className="offset__wrapper">
                {/* <!-- Start Search Popap --> */}
                <div className="search__area">
                    <div className="container" >
                        <div className="row" >
                            <div className="col-md-12" >
                                <div className="search__inner">
                                    <form action="#" method="get">
                                        <input placeholder="Search here... " type="text"/>
                                        <button type="submit"></button>
                                    </form>
                                    <div className="search__close__btn">
                                        <span className="search__close__btn_icon"><i className="zmdi zmdi-close"></i></span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <!-- End Search Popap --> */}
                {/* <!-- Start Offset MEnu --> */}
                <div className="offsetmenu">
                    <div className="offsetmenu__inner">
                        <div className="offsetmenu__close__btn">
                            <a href="#"><i className="zmdi zmdi-close"></i></a>
                        </div>
                        <div className="off__contact">
                            <div className="logo">
                                <a href="index.html">
                                    {/* <img src="images/logo/logo.png" alt="logo"/> */}
                                    <img src={require("../../assets/images/logo/logo.png").default} alt="logo"/>
                                </a>
                            </div>
                            <p>Lorem ipsum dolor sit amet consectetu adipisicing elit sed do eiusmod tempor incididunt ut labore.</p>
                        </div>
                        <ul className="sidebar__thumd">
                            <li><a href="#"><img src={require("../../assets/images/sidebar-img/1.jpg").default} alt="sidebar images"/></a></li>
                            <li><a href="#"><img src={require("../../assets/images/sidebar-img/2.jpg").default} alt="sidebar images"/></a></li>
                            <li><a href="#"><img src={require("../../assets/images/sidebar-img/3.jpg").default} alt="sidebar images"/></a></li>
                            <li><a href="#"><img src={require("../../assets/images/sidebar-img/4.jpg").default} alt="sidebar images"/></a></li>
                            <li><a href="#"><img src={require("../../assets/images/sidebar-img/5.jpg").default} alt="sidebar images"/></a></li>
                            <li><a href="#"><img src={require("../../assets/images/sidebar-img/6.jpg").default} alt="sidebar images"/></a></li>
                            <li><a href="#"><img src={require("../../assets/images/sidebar-img/7.jpg").default} alt="sidebar images"/></a></li>
                            <li><a href="#"><img src={require("../../assets/images/sidebar-img/8.jpg").default} alt="sidebar images"/></a></li>
                            
                            {/* <li><a href="#"><img src="images/sidebar-img/1.jpg" alt="sidebar images"/></a></li>
                            <li><a href="#"><img src="images/sidebar-img/2.jpg" alt="sidebar images"/></a></li>
                            <li><a href="#"><img src="images/sidebar-img/3.jpg" alt="sidebar images"/></a></li>
                            <li><a href="#"><img src="images/sidebar-img/4.jpg" alt="sidebar images"/></a></li>
                            <li><a href="#"><img src="images/sidebar-img/5.jpg" alt="sidebar images"/></a></li>
                            <li><a href="#"><img src="images/sidebar-img/6.jpg" alt="sidebar images"/></a></li>
                            <li><a href="#"><img src="images/sidebar-img/7.jpg" alt="sidebar images"/></a></li>
                            <li><a href="#"><img src="images/sidebar-img/8.jpg" alt="sidebar images"/></a></li> */}
                        </ul>
                        <div className="offset__widget">
                            <div className="offset__single">
                                <h4 className="offset__title">Language</h4>
                                <ul>
                                    <li><a href="#"> Engish </a></li>
                                    <li><a href="#"> French </a></li>
                                    <li><a href="#"> German </a></li>
                                </ul>
                            </div>
                            <div className="offset__single">
                                <h4 className="offset__title">Currencies</h4>
                                <ul>
                                    <li><a href="#"> USD : Dollar </a></li>
                                    <li><a href="#"> EUR : Euro </a></li>
                                    <li><a href="#"> POU : Pound </a></li>
                                </ul>
                            </div>
                        </div>
                        <div className="offset__sosial__share">
                            <h4 className="offset__title">Follow Us On Social</h4>
                            <ul className="off__soaial__link">
                                <li><a className="bg--twitter" href="#"  title="Twitter"><i className="zmdi zmdi-twitter"></i></a></li>
                                
                                <li><a className="bg--instagram" href="#" title="Instagram"><i className="zmdi zmdi-instagram"></i></a></li>

                                <li><a className="bg--facebook" href="#" title="Facebook"><i className="zmdi zmdi-facebook"></i></a></li>

                                <li><a className="bg--googleplus" href="#" title="Google Plus"><i className="zmdi zmdi-google-plus"></i></a></li>

                                <li><a className="bg--google" href="#" title="Google"><i className="zmdi zmdi-google"></i></a></li>
                            </ul>
                        </div>
                    </div>
                </div>
                {/* <!-- End Offset MEnu --> */}
                {/* <!-- Start Cart Panel --> */}
                <div className="shopping__cart">
                    <div className="shopping__cart__inner">
                        <div className="offsetmenu__close__btn">
                            <a href="#"><i className="zmdi zmdi-close"></i></a>
                        </div>
                        <div className="shp__cart__wrap">
                            <div className="shp__single__product">
                                <div className="shp__pro__thumb">
                                    <a href="#">
                                        <img src="images/product/sm-img/1.jpg" alt="product images"/>
                                    </a>
                                </div>
                                <div className="shp__pro__details">
                                    <h2><a href="product-details.html">BO&Play Wireless Speaker</a></h2>
                                    <span className="quantity">QTY: 1</span>
                                    <span className="shp__price">$105.00</span>
                                </div>
                                <div className="remove__btn">
                                    <a href="#" title="Remove this item"><i className="zmdi zmdi-close"></i></a>
                                </div>
                            </div>
                            <div className="shp__single__product">
                                <div className="shp__pro__thumb">
                                    <a href="#">
                                        <img src="images/product/sm-img/2.jpg" alt="product images"/>
                                    </a>
                                </div>
                                <div className="shp__pro__details">
                                    <h2><a href="product-details.html">Brone Candle</a></h2>
                                    <span className="quantity">QTY: 1</span>
                                    <span className="shp__price">$25.00</span>
                                </div>
                                <div className="remove__btn">
                                    <a href="#" title="Remove this item"><i className="zmdi zmdi-close"></i></a>
                                </div>
                            </div>
                        </div>
                        <ul className="shoping__total">
                            <li className="subtotal">Subtotal:</li>
                            <li className="total__price">$130.00</li>
                        </ul>
                        <ul className="shopping__btn">
                            <li><a href="cart.html">View Cart</a></li>
                            <li className="shp__checkout"><a href="checkout.html">Checkout</a></li>
                        </ul>
                    </div>
                </div>
                {/* <!-- End Cart Panel --> */}
            </div>
            {/* <!-- End Offset Wrapper --> */}
            
            {/* <!-- Start Bradcaump area --> */}
            <div className="ht__bradcaump__area" style={{background: `rgba(0, 0, 0, 0) url(${require("../../assets/images/bg/2.jpg").default}) no-repeat scroll center center / cover` }}>
                <div className="ht__bradcaump__wrap">
                    <div className="container">
                        <div className="row">
                            <div className="col-xs-12">
                                <div className="bradcaump__inner text-center">
                                    <h2 className="bradcaump-title">Shop Page</h2>
                                    <nav className="bradcaump-inner">
                                    <a className="breadcrumb-item" href="index.html">Home</a>
                                    <span className="brd-separetor">/</span>
                                    <span className="breadcrumb-item active">Shop Page</span>
                                    </nav>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* <!-- End Bradcaump area -->  */}

            {/* Start Product Area */}
            <section className="htc__product__area shop__page ptb--130 bg__white">
                <div className="container">
                    <div className="htc__product__container">
                        {/* <div className="row">
                            <div className="col-md-12">
                                <div className="filter__menu__container">
                                    <div className="product__menu">
                                        <button data-filter="*"  className="is-checked">All</button>
                                        <button data-filter=".cat--1">T-Shirt</button>
                                        <button data-filter=".cat--2">Bags</button>
                                        <button data-filter=".cat--3">Decoration</button>
                                        <button data-filter=".cat--4">Accessories</button>
                                    </div>
                                </div>
                            </div>
                        </div> */}
                        <CategortyList/>

                        {/* <div className="row">
                            <div className="product__list another-product-style">
                                ProductItem
                                <Product/>
                            </div>
                        </div> */}
                        <VisibleProductList/>
                    </div>
                </div>

                {/* <!-- Start Load More BTn --> */}
                    {/* <div className="row mt--60">
                        <div className="col-md-12">
                            <div className="htc__loadmore__btn">
                                <a href="#">load more</a>
                            </div>
                        </div>
                    </div> */}
                {/* <!-- End Load More BTn --> */}
            </section>
            {/* End Product Area */}

            {/* <!-- Start Footer Area --> */}
            <footer className="htc__foooter__area gray-bg" style={{position:'static'}}>
                <div className="container">
                    <div className="row">
                        <div className="footer__container clearfix">
                            {/* <!-- Start Single Footer Widget --> */}
                            <div className="col-md-3 col-lg-3 col-sm-6">
                                <div className="ft__widget">
                                    <div className="ft__logo">
                                        <a href="index.html">
                                            <img src={require("../../assets/images/logo/logo.png").default} alt="footer logo"/>
                                        </a>
                                    </div>
                                    <div className="footer-address">
                                        <ul>
                                            <li>
                                                <div className="address-icon">
                                                    <i className="zmdi zmdi-pin"></i>
                                                </div>
                                                <div className="address-text">
                                                    <p>194 Main Rd T, FS Rayed <br/> VIC 3057, USA</p>
                                                </div>
                                            </li>
                                            <li>
                                                <div className="address-icon">
                                                    <i className="zmdi zmdi-email"></i>
                                                </div>
                                                <div className="address-text">
                                                    <a href="#"> info@example.com</a>
                                                </div>
                                            </li>
                                            <li>
                                                <div className="address-icon">
                                                    <i className="zmdi zmdi-phone-in-talk"></i>
                                                </div>
                                                <div className="address-text">
                                                    <p>+012 345 678 102 </p>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                    <ul className="social__icon">
                                        <li><a href="#"><i className="zmdi zmdi-twitter"></i></a></li>
                                        <li><a href="#"><i className="zmdi zmdi-instagram"></i></a></li>
                                        <li><a href="#"><i className="zmdi zmdi-facebook"></i></a></li>
                                        <li><a href="#"><i className="zmdi zmdi-google-plus"></i></a></li>
                                    </ul>
                                </div>
                            </div>
                            {/* <!-- End Single Footer Widget --> */}
                            {/* <!-- Start Single Footer Widget --> */}
                            <div className="col-md-3 col-lg-2 col-sm-6 smt-30 xmt-30">
                                <div className="ft__widget">
                                    <h2 className="ft__title">Categories</h2>
                                    <ul className="footer-categories">
                                        <li><a href="shop-sidebar.html">Men</a></li>
                                        <li><a href="shop-sidebar.html">Women</a></li>
                                        <li><a href="shop-sidebar.html">Accessories</a></li>
                                        <li><a href="shop-sidebar.html">Shoes</a></li>
                                        <li><a href="shop-sidebar.html">Dress</a></li>
                                        <li><a href="shop-sidebar.html">Denim</a></li>
                                    </ul>
                                </div>
                            </div>
                            {/* <!-- Start Single Footer Widget --> */}
                            <div className="col-md-3 col-lg-2 col-sm-6 smt-30 xmt-30">
                                <div className="ft__widget">
                                    <h2 className="ft__title">Infomation</h2>
                                    <ul className="footer-categories">
                                        <li><a href="about.html">About Us</a></li>
                                        <li><a href="contact.html">Contact Us</a></li>
                                        <li><a href="#">Terms & Conditions</a></li>
                                        <li><a href="#">Returns & Exchanges</a></li>
                                        <li><a href="#">Shipping & Delivery</a></li>
                                        <li><a href="#">Privacy Policy</a></li>
                                    </ul>
                                </div>
                            </div>
                            {/* <!-- Start Single Footer Widget --> */}
                            <div className="col-md-3 col-lg-3 col-lg-offset-1 col-sm-6 smt-30 xmt-30">
                                <div className="ft__widget">
                                    <h2 className="ft__title">Newsletter</h2>
                                    <div className="newsletter__form">
                                        <p>Subscribe to our newsletter and get 10% off your first purchase .</p>
                                        <div className="input__box">
                                            <div id="mc_embed_signup">
                                                <form action="#" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" className="validate" target="_blank" noValidate>
                                                    <div id="mc_embed_signup_scroll" className="htc__news__inner">
                                                        <div className="news__input">
                                                            <input type="email" value="" name="EMAIL" className="email" id="mce-EMAIL" placeholder="Email Address" required/>
                                                        </div>
                                                        {/* <!-- real people should not fill this in and expect good things - do not remove this or risk form bot signups--> */}
                                                        <div style={{position: 'absolute', left: '-5000px'}} aria-hidden="true"><input type="text" name="b_6bbb9b6f5827bd842d9640c82_05d85f18ef" tabIndex={-1} value=""/></div>
                                                        <div className="clearfix subscribe__btn"><input type="submit" value="Send" name="subscribe" id="mc-embedded-subscribe" className="bst__btn btn--white__color"/>
                                                            
                                                        </div>
                                                    </div>
                                                </form>
                                            </div>
                                        </div>        
                                    </div>
                                </div>
                            </div>
                            {/* <!-- End Single Footer Widget --> */}
                        </div>
                    </div>
                    {/* <!-- Start Copyright Area --> */}
                    <div className="htc__copyright__area">
                        <div className="row">
                            <div className="col-md-12 col-lg-12 col-sm-12 col-xs-12">
                                <div className="copyright__inner">
                                    <div className="copyright">
                                        <p>© 2017 <a href="https://freethemescloud.com/">Free themes Cloud</a>
                                        All Right Reserved.</p>
                                    </div>
                                    <ul className="footer__menu">
                                        <li><a href="index.html">Home</a></li>
                                        <li><a href="shop.html">Product</a></li>
                                        <li><a href="contact.html">Contact Us</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* <!-- End Copyright Area --> */}
                </div>
            </footer>
            {/* <!-- End Footer Area --> */}
        </div>
    );
}

export default Shopping;

