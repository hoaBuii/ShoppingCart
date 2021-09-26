import { CategoriesList } from "../Data/categoriesData";
import { FETCH_CATEGORIES_LIST } from "../constants";

const categoryList = (state = {}, action:any) => {
    switch(action.type){
        case FETCH_CATEGORIES_LIST:
            return action.categoriesList;
        default:
            return state;
    }
}

export default categoryList;