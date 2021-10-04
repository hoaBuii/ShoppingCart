import React from "react";
import { NumberLiteralType } from "typescript";
import { IProduct } from '../interfaces';

function Product({id, name, price, quantity, onToggle}: IProduct){
    return(
        <div style={{marginTop:'10px'}}>
            <span>{name}, {price}VND, {quantity}</span>
            
            <button style={{marginLeft:'10px'}} onClick={onToggle} disabled={quantity <= 0 ? true : false}>Add to cart</button>
        </div>
    );
};

export default Product;