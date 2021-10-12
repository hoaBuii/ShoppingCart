import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import VisibleProductList from './containers/VisibleProductList';
import { ProductList} from './Data/productsData';
import { fetchProductsList, fetchCategoriesList, fetchAPIProductsList } from './actions';
import { CategoriesList } from './Data/categoriesData';
import CategoryList from './containers/CategoryList';
import CartList from './containers/CartList';

function App() {
  // let hasInitialData: boolean = false;
  const dispatch = useDispatch();
  
  useEffect(() => {
    // if(hasInitialData) {
    //   return;
    // }
    
    // hasInitialData = !hasInitialData;
    dispatch(fetchAPIProductsList());
    // dispatch(fetchProductsList(ProductList));
    dispatch(fetchCategoriesList(CategoriesList));
  }, []);

  return (
    <div style={{margin:'0 auto'}}>
      <CategoryList/>
      <VisibleProductList/>
      <CartList/>
    </div>
  );
}

export default App;
