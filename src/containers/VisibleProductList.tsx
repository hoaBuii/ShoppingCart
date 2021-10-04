import { connect } from "react-redux";
import React from "react";
import ProductList from "../components/ProductList";
import { toggleProduct, addCartItem } from "../actions";
import { IProduct } from "../interfaces";

function getVisibleProductList(productList?:any, filter?:any){
    switch(filter){
        case 'FOOD':
            return productList.filter((product:any) => {return product.category  === 'FOOD'});
        case 'CLOTHES':
            return productList.filter((product:any) => {return product.category  === 'CLOTHES'});
        case 'SHOES':
            return productList.filter((product:any) => {return product.category  === 'SHOES'});
        case 'ELECTRICS':
            return productList.filter((product:any) => {return product.category  === 'ELECTRICS'});
        default:
            return [];
    }
}

const mapStateToProps = (state:any) => ({
    productList: getVisibleProductList(state.productList,state.selectedCategory)
})

const mapDisptachToProps = (dispatch:any) => ({
    toggleProduct: (id:number) => dispatch(toggleProduct(id)),
    addCartItem: (product:IProduct) => dispatch(addCartItem(product))
})

export default connect(
    mapStateToProps,
    mapDisptachToProps
)(ProductList);