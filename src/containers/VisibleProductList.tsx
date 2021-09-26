import { connect } from "react-redux";
import React from "react";
import ProductList from "../components/ProductList";
import { toggleProduct } from "../actions";

function getVisibleProductList(productList?:any, filter?:any){
    debugger;
    switch(filter){
        case 'FOOD':
            return productList.filter((product:any) => {return product.category  === 'FOOD'});
        default:
            return [];
    }
}

const mapStateToProps = (state:any) => ({
    productList: getVisibleProductList(state.productList,state.selectedCategory)
})

const mapDisptachToProps = (dispatch:any) => ({
    toggleProduct: (id:number) => dispatch(toggleProduct(id))
})

export default connect(
    mapStateToProps,
    mapDisptachToProps
)(ProductList);