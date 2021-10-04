import { FETCH_PRODUCTS_LIST, FOOD, TOGGLE_PRODUCT } from "../constants";
import { IProduct } from '../interfaces';

const productList = (state: Array<IProduct> = [], action:any) => {
    switch(action.type){
        case FETCH_PRODUCTS_LIST:
            return action.productList;
        case TOGGLE_PRODUCT:
            let result = state.map(product=>{
                if(product.id === action.id){
                    product.quantity--;
                }
                return product;
            });
            return result;
        default:
            return state;
    }
}

export default productList;