import React from 'react';
import { Route , Switch } from 'react-router-dom';

import './App.css';
import ShopPage from './pages/shop/shop.component';
import CheckoutPage from './pages/checkout/checkout.component';

import Header from './components/header/header.component';



class App extends React.Component {
  render(){  
    return (
      <div>
        <Header />  
        <Switch>
          <Route  exact path='/Gebhalytask' component={ShopPage}/>
          <Route path='/checkout' component={CheckoutPage}/>
        </Switch>
      </div>
    );
  }
}


export default App;
