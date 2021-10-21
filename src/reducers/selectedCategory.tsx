import { TOGGLE_CATEGORY } from "../constants";

const selectedCategory = (state = 'All', action:any) => {
    switch(action.type){
        case TOGGLE_CATEGORY:
            return action.name;
        default:
            return state;
    }
}

export default selectedCategory;