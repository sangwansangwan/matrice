import {BrowserRouter, Navigate, Route, Routes} from 'react-router-dom';
import Home from '../components/home'
import { useAppSelector } from '../common/hooks';
import Product from './product/Product';

export default function MainRoutes() {
  const isAuthenticated = useAppSelector(state=>state.auth.userId)

  return (
    <BrowserRouter>
      <Routes>
        
        <Route
          path='/'
          element= {isAuthenticated !== '' ? <Navigate to={'/product'} />:<Home/>  
        }
        />
        <Route
          path='/product'
          
            element={isAuthenticated !== '' ?  <Product />:<Navigate to={'/'} /> }

          
        />

      </Routes>
    </BrowserRouter>
  );
}
