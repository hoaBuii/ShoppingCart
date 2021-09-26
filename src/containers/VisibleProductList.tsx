import { connect } from "react-redux";
import React from "react";
import ProductList from "../components/ProductList";
import { toggleProduct } from "../actions";

function getVisibleProductList(productList?:any, filter?:any){
    switch(filter){
        default:
            return productList;
    }
}

const mapStateToProps = (state:any) => ({
    productList: getVisibleProductList(state.productList,state.filter)
})

const mapDisptachToProps = (dispatch:any) => ({
    toggleProduct: (id:Number) => dispatch(toggleProduct(id))
})

export default connect(
    mapStateToProps,
    mapDisptachToProps
)(ProductList);