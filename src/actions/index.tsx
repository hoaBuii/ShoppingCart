import axios from "axios";
import React from "react";
import { useDispatch } from "react-redux";
import { TOGGLE_PRODUCT, TOGGLE_CATEGORY, FETCH_PRODUCTS_LIST, FETCH_CATEGORIES_LIST, ADD_CART_ITEM, BUY_CART } from "../constants";
import { IProduct } from "../interfaces";

export const toggleProduct = (id: number) => ({
    type: TOGGLE_PRODUCT,
    id
})

export const toggleCategory = (name: string) => ({
    type: TOGGLE_CATEGORY,
    name
})

export const toggleCart = (name: string) => ({
    type: TOGGLE_CATEGORY,
    name
})

export const buyCart = () => ({
    type: BUY_CART
})

export const fetchProductsList = (productList:Array<any>) => ({
    type: FETCH_PRODUCTS_LIST,
    productList
})

export const fetchCategoriesList = (categoriesList:Array<any>) => ({
    type: FETCH_CATEGORIES_LIST,
    categoriesList
})

export const addCartItem = (product:IProduct) =>  ({
    type: ADD_CART_ITEM,
    product
})

export const fetchAPIProductsList = () => (dispatch:any) => {
    return axios.get('https://616517e809a29d0017c88f52.mockapi.io/Products')
        .then(function(response){
            let productList = response.data;
            dispatch(fetchProductsList(productList));
            console.log(productList);
        })
        .catch(function(error){
            console.log(error);
    })
}