import React from 'react';
import './App.css';
import MainRoutes from './components/Routes';
import {Provider} from 'react-redux';
import {store} from './common/store';

function App() {
  return (
    <Provider store={store}>
    
        <div className='App'>
          <MainRoutes />
        </div>
    </Provider>
  );
}

export default App;
