import { FETCH_DATA, FOOD } from "../constants";
import { ProductList } from "../Data";

const productList = (state = [], action:any) => {
    switch(action.type){
        case FETCH_DATA:
            return ProductList;
        default:
            return state;
    }
}

export default productList;