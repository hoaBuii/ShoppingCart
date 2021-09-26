import { combineReducers } from "redux";
import productList from "./productList";
import visibilityFilter from "./visibilittyFilter";

const reducer = (state = {}, action:any) => {
    switch(action.type){
        default:
            return state;
    }
}

const rootReducer = combineReducers({
    productList,
    visibilityFilter
});

export default rootReducer;