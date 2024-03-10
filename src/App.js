
import React, { useState } from 'react';
import './App.css';
import Home from './components/Home';
import Navbar from './components/Navbar';
import { Switch, Route } from 'react-router-dom';
import Products from './components/Products';
import Product from './components/Product';
import Cart from './components/Cart';
import { Authentication } from './components/Authentication'; 

function App() {
  const [cart, setCart] = useState([]);

  const removeFromCart = (index) => {
    setCart((prevCart) => {
      const newCart = [...prevCart];
      newCart.splice(index, 1);
      return newCart;
    });
  };

  return (
    <>
      <Navbar cartItemCount={cart.length} />
      <Switch>
        <Route
          path='/products/:id'
          render={(props) => <Product {...props} addToCart={setCart} />}
        />
        <Route
          path='/products'
          render={(props) => <Products {...props} addToCart={setCart} />}
        />
        <Route path='/cart' render={() => <Cart cart={cart} removeFromCart={removeFromCart} />} />
        <Route path='/authentication' component={Authentication} /> {Authentication}
        <Route path='/' component={Home} />
      </Switch>
    </>
  );
}

export default App;
