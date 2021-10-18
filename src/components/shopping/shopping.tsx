import React from "react";

const Shopping = () => {
    return(
        <div id="quickview-wrapper">
            <div className="modal fade" id="productModal" tabIndex = {1} role="dialog">
                <div className="modal-dialog modal__container" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
                        </div>
                        <div className="modal-body">
                            <div className="modal-product">
                                <div className="product-images">
                                    <div className="main-image images">
                                        <img alt="big images" src="images/product/big-img/1.jpg"/>
                                        <img alt="big images" src='../../images/product/big-img/1.jpg'/>
                                    </div>
                                </div>
                                <div className="product-info">
                                    <h1>Simple Fabric Bags</h1>
                                    <div className="rating__and__review">
                                        <ul className="rating">
                                            <li><span className="ti-star"></span></li>
                                            <li><span className="ti-star"></span></li>
                                            <li><span className="ti-star"></span></li>
                                            <li><span className="ti-star"></span></li>
                                            <li><span className="ti-star"></span></li>
                                        </ul>
                                        <div className="review">
                                            <a href="#">4 customer reviews</a>
                                        </div>
                                    </div>
                                    <div className="price-box-3">
                                        <div className="s-price-box">
                                            <span className="new-price">$17.20</span>
                                            <span className="old-price">$45.00</span>
                                        </div>
                                    </div>
                                    <div className="quick-desc">
                                        Designed for simplicity and made from high quality materials. Its sleek geometry and material combinations creates a modern look.
                                    </div>
                                    <div className="select__color">
                                        <h2>Select color</h2>
                                        <ul className="color__list">
                                            <li className="red"><a title="Red" href="#">Red</a></li>
                                            <li className="gold"><a title="Gold" href="#">Gold</a></li>
                                            <li className="orange"><a title="Orange" href="#">Orange</a></li>
                                            <li className="orange"><a title="Orange" href="#">Orange</a></li>
                                        </ul>
                                    </div>
                                    <div className="select__size">
                                        <h2>Select size</h2>
                                        <ul className="color__list">
                                            <li className="l__size"><a title="L" href="#">L</a></li>
                                            <li className="m__size"><a title="M" href="#">M</a></li>
                                            <li className="s__size"><a title="S" href="#">S</a></li>
                                            <li className="xl__size"><a title="XL" href="#">XL</a></li>
                                            <li className="xxl__size"><a title="XXL" href="#">XXL</a></li>
                                        </ul>
                                    </div>
                                    <div className="social-sharing">
                                        <div className="widget widget_socialsharing_widget">
                                            <h3 className="widget-title-modal">Share this product</h3>
                                            <ul className="social-icons">
                                                <li><a target="_blank" title="rss" href="#" className="rss social-icon"><i className="zmdi zmdi-rss"></i></a></li>
                                                <li><a target="_blank" title="Linkedin" href="#" className="linkedin social-icon"><i className="zmdi zmdi-linkedin"></i></a></li>
                                                <li><a target="_blank" title="Pinterest" href="#" className="pinterest social-icon"><i className="zmdi zmdi-pinterest"></i></a></li>
                                                <li><a target="_blank" title="Tumblr" href="#" className="tumblr social-icon"><i className="zmdi zmdi-tumblr"></i></a></li>
                                                <li><a target="_blank" title="Pinterest" href="#" className="pinterest social-icon"><i className="zmdi zmdi-pinterest"></i></a></li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="addtocart-btn">
                                        <a href="#">Add to cart</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Shopping;
