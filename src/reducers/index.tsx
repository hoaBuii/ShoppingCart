import { combineReducers } from "redux";
import productList from "./productList";
import selectedCategory from "./selectedCategory";
import categoryList from "./categoryList";
import cartList from "./cartList";

const rootReducer = combineReducers({
    productList,
    selectedCategory,
    categoryList,
    cartList
});

export default rootReducer;