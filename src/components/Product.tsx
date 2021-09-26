import React from "react";
import { NumberLiteralType } from "typescript";

interface IProduct {
    name: string;
    price: number;
    quantity: number;
}

function Product({name, price, quantity}: IProduct){
    debugger;
    return(
        <li>{name}, {price}, {quantity}</li>
    );
};

export default Product;