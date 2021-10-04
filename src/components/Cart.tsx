import React from "react";
import CartItem from "./CartItem";
import {ICartList} from '../interfaces';

function CartList({cartList, onBuyCart}: ICartList){
    let total: number = 0;

    cartList.length !== 0 && cartList.map(cart=>{
        total += (cart.price  * cart.quantity);
    })

    return(
        <div style={{display:'flex', flexDirection:'column'}}>
            { cartList && cartList.length!==0 
              && cartList.map((cart,index) => {
                return(
                    <CartItem key={index} {...cart}/>
                );
            })}
            <span>Total: {total}VND</span>
            <button onClick={onBuyCart} style={{width:'100px'}} disabled={cartList.length!==0 ? false : true}>Buy</button>
        </div>
    );
};

export default CartList;