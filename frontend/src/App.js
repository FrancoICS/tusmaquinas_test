import React from 'react';
import './App.css';
import {Provider} from 'react-redux'
import Header from './components/header';
import store from './store/store'
import Table from './components/table';
import BarraLateralr from './components/barraLateral';

function App() {
  return (
    <> 
      <Provider store={store}> 
          <div className="App">
              <Header/>
              <BarraLateralr/>
              <Table/>
          </div>
      </Provider>
    </>
  )
   
}

export default App;
