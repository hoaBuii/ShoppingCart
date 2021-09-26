import { TOGGLE_CATEGORY } from "../constants";

const selectedCategory = (state = 'FOOD', action:any) => {
    switch(action.type){
        case TOGGLE_CATEGORY:
            return action.name;
        default:
            return state;
    }
}

export default selectedCategory;