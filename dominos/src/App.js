import React from 'react';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Menu from './components/Menu/Menu';
import {BrowserRouter,Route} from 'react-router-dom';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Header></Header>
        <Route component={Home} exact path='/'></Route>
        <Route component={Menu} path='/menu'></Route>
      </BrowserRouter>
    </div>
  );
}

export default App;
