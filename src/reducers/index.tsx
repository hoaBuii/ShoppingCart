import { combineReducers } from "redux";
import productList from "./productList";
import selectedCategory from "./selectedCategory";
import categoryList from "./categoryList";

const reducer = (state = {}, action:any) => {
    switch(action.type){
        default:
            return state;
    }
}

const rootReducer = combineReducers({
    productList,
    selectedCategory,
    categoryList
});

export default rootReducer;