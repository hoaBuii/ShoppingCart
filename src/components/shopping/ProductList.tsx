import React from "react";
import Product from "./Product";
import { IProduct,IProductList } from '../../interfaces';
import {ProductListt} from '../../Data/productsData';

// function ProductList({productList, toggleProduct, addCartItem}: IProductList){
function ProductList(){
    const productList = ProductListt;
    const onClickProductItem:any = (product:IProduct) => {
        // toggleProduct(product.id);
        // addCartItem(product);
    }
    return(
        // <div style={{borderBottom: "1px solid black", marginBottom: "10px", paddingBottom: "10px"}}>
        //     { productList && productList.length 
        //       && productList.map((product,index) => {
        //         return(
        //             <Product key={index} {...product} onToggle={() => onClickProductItem(product)}/>
        //         );
        //     })}
        // </div>

        <div className="row">
            <div className="product__list another-product-style">
                <Product/>
            </div>
        </div>
    );
};

export default ProductList;