import React from "react";
import { TOGGLE_PRODUCT, TOGGLE_CATEGORY, FETCH_PRODUCTS_LIST, FETCH_CATEGORIES_LIST } from "../constants";

export const toggleProduct = (id: number) => ({
    type: TOGGLE_PRODUCT,
    id
})

export const toggleCategory = (name: string) => ({
    type: TOGGLE_CATEGORY,
    name
})

export const fetchProductsList = (productList:Array<any>) => ({
    type: FETCH_PRODUCTS_LIST,
    productList
})

export const fetchCategoriesList = (categoriesList:Array<any>) => ({
    type: FETCH_CATEGORIES_LIST,
    categoriesList
})