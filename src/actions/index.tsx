import React from "react";
import { TOGGLE_TODO, FETCH_DATA } from "../constants";

export const toggleProduct = (id: Number) => ({
    type: TOGGLE_TODO,
    id
})

export const fetchData = (productList:Array<any>) => ({
    type: FETCH_DATA,
    productList
})