import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import VisibleProductList from './containers/VisibleProductList';
// import { ProductList} from './Data/productsData';
import { fetchProductsList, fetchCategoriesList, fetchAPIProductsList } from './actions';
import { CategoriesList } from './Data/categoriesData';
import CategoryList from './containers/CategoryList';
import CartList from './containers/CartList';

// ADD FOLDER CSS
import './css/bootstrap.min.css';
import './css/owl.carousel.min.css';
import './css/owl.theme.default.min.css';
import './css/core.css';
import './css/shortcode/shortcodes.css';
import './style.css';
import './css/responsive.css';
import './css/custom.css';

import Shopping from './components/shopping/shopping';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAPIProductsList());
    dispatch(fetchCategoriesList(CategoriesList));
  }, []);

  return (
    <div style={{margin:'0 auto'}}>
      {/* <CategoryList/>
      <VisibleProductList/>
      <CartList/> */}

      <Shopping/>
    </div>
  );
}

export default App;
