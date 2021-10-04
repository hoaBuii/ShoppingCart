import React from "react";
import { NumberLiteralType } from "typescript";
import { ICart } from '../interfaces';

function CartItem({id, name, price, quantity}: ICart){
    return(
        <div style={{marginTop:'10px'}}>
            <span>{name}, {price}VND, {quantity}</span>
        </div>
    );
};

export default CartItem;