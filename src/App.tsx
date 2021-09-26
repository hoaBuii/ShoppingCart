import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import VisibleProductList from './containers/VisibleProductList';
import { ProductList } from './Data';
import { fetchData } from './actions';

function App() {
  let hasInitialData: boolean = false;
  const dispatch = useDispatch();
  
  useEffect(() => {
    if(hasInitialData) {
      return;
    }
    
    hasInitialData = !hasInitialData;
    dispatch(fetchData(ProductList));
  }, []);

  return (
    <div>
      <VisibleProductList/>
    </div>
  );
}

export default App;
