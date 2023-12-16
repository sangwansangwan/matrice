import {combineReducers} from 'redux';
import authSlice from '../components/auth/auth.slice';
import productSlice from '../components/product/product.slice';


const rootReducer = combineReducers({
  auth: authSlice,
  product:productSlice
});

export default rootReducer;
