import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import VisibleProductList from './containers/VisibleProductList';
import { ProductList} from './Data/productsData';
import { fetchProductsList, fetchCategoriesList } from './actions';
import { CategoriesList } from './Data/categoriesData';
import CategoryList from './containers/CategoryList';

function App() {
  let hasInitialData: boolean = false;
  const dispatch = useDispatch();
  
  useEffect(() => {
    if(hasInitialData) {
      return;
    }
    
    hasInitialData = !hasInitialData;
    dispatch(fetchProductsList(ProductList));
    dispatch(fetchCategoriesList(CategoriesList));
  }, []);

  return (
    <div>
      <CategoryList/>
      <VisibleProductList/>
    </div>
  );
}

export default App;
