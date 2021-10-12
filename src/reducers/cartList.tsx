import { ADD_CART_ITEM, BUY_CART } from "../constants";

const cartList = (state = [], action:any) => {
    switch(action.type){
        case ADD_CART_ITEM:
            let cartItem  = action?.product?.id && state?.filter((item:any)=>{ return item.id === action.product.id});
            if(cartItem.length){
                const updateCartList = state.map((item:any) => {
                    if(item.id === action.product.id){
                        item.quantity++;
                    }
                    return item;
                });
                return updateCartList;
            }
            return [
                ...state,
                {
                    id: action.product.id,
                    name: action.product.name,
                    quantity: 1,
                    category: action.product.category,
                    price: action.product.price
                }
            ];
        case BUY_CART:
            return [];
        default:
            return state;
    }
}

export default cartList;