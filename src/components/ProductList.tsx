import React from "react";
import Product from "./Product";

interface IProduct {
    name: string;
    price: number;
    quantity: number;
}

interface IProductList {
    productList?: Array<IProduct>;
    toggleProduct?: (id:number)  => {}
}

function ProductList({productList, toggleProduct}: IProductList){
    debugger;
    // const data = [{name:'a'},{name:'b'},{name:'c'}];
    const data = productList;
    return(
        <ul>
            { productList && productList.length 
              && productList.map((product,index) => {
                return(
                    <Product key={index} {...product}/>
                );
            })}
        </ul>
    );
};

export default ProductList;