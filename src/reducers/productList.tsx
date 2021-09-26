import { FETCH_PRODUCTS_LIST, FOOD } from "../constants";

const productList = (state = [], action:any) => {
    switch(action.type){
        case FETCH_PRODUCTS_LIST:
            return action.productList;
        default:
            return state;
    }
}

export default productList;