export interface IProduct {
    id: string;
    name: string;
    price: number;
    quantity: number;
    category: string;
    image: string;
    onToggle: ()=>{};
}

export interface ICart {
    id: string;
    name: string;
    price: number;
    quantity: number;
    category: string;
    image: string;
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