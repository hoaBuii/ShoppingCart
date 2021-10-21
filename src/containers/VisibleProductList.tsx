import { connect } from "react-redux";
import React from "react";
import ProductList from "../components/shopping/ProductList";
import { toggleProduct, addCartItem } from "../actions";
import { IProduct } from "../interfaces";

function getVisibleProductList(productList?:any, filter?:any){
    switch(filter){
        case 'All':
            return productList;
        case 'T-Shirt':
            return productList.filter((product:any) => {return product.category  === 'T-Shirt'});
        case 'Polo-Shirt':
            return productList.filter((product:any) => {return product.category  === 'Polo-Shirt'});
        case 'Kaki-Pants':
            return productList.filter((product:any) => {return product.category  === 'Kaki-Pants'});
        case 'Jeans-Pants':
            return productList.filter((product:any) => {return product.category  === 'Jeans-Pants'});
        default:
            return [];
    }
}

const mapStateToProps = (state:any) => ({
    productList: getVisibleProductList(state.productList, state.selectedCategory)
})

const mapDisptachToProps = (dispatch:any) => ({
    toggleProduct: (id:number) => dispatch(toggleProduct(id)),
    addCartItem: (product:IProduct) => dispatch(addCartItem(product))
})

export default connect(
    mapStateToProps,
    mapDisptachToProps
)(ProductList);