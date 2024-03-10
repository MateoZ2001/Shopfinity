
import React from 'react';

export default function Cart({ cart, removeFromCart }) {
  return (
    <div>
      <h1>Cart</h1>
      {cart.map((item, index) => (
        <div key={index}>
          <p>{item.title} - ${item.price}</p>
          <button onClick={() => removeFromCart(index)}>Remove</button>
        </div>
      ))}
      <button>Proceed to Checkout</button>
    </div>
  );
}
