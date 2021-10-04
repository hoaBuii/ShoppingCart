export interface IProduct {
    id: number;
    name: string;
    price: number;
    quantity: number;
    category: string;
    onToggle: ()=>{};
}

export interface ICart {
    id: number;
    name: string;
    price: number;
    quantity: number;
    category: string;
}

export interface ICartList {
    cartList: Array<ICart>;
    onBuyCart: () => {}
}

export interface IProductList {
    productList?: Array<IProduct>;
    toggleProduct: (id:any)  => {};
    addCartItem: (product:IProduct) => {}
}