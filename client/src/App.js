import React from 'react';
import {BrowserRouter,Switch,Route} from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Cart from './components/Cart';
import Signup from './components/Signup';
import Signin from './components/Signin';
import home from './components/home/home'
import CreateProduct from './components/seller/CreateProduct';
import Signinseller from './components/seller/Signinseller';
import Signupseller from './components/seller/Signupseller';
import Product from './components/Product';
import ReactNotification from 'react-notifications-component'
import ProductDetail from './components/Product/ProductDetail'


function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <ReactNotification />
      <Switch>
        <Route exact path="/" component={home} />
        <Route exact path="/signin" component={Signin} />
        <Route exact path="/signup" component={Signup} />
        <Route exact path="/cart" component={Cart} />
        <Route exact path="/products" component={Product} />
        <Route exact path="/productdetail" component={ProductDetail} />
        <Route exact path="/createproduct" component={CreateProduct} />
        <Route exact path="/signinseller" component={Signinseller} />
        <Route exact path="/signupseller" component={Signupseller} />
        
      </Switch>
    </BrowserRouter>
      );
}

export default App;
