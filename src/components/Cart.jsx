import React, { useContext } from 'react';
import { CartContext } from '../context/CartContext';
import './Cart.css';

const Cart = () => {
  const { cartItems, removeFromCart, clearCart } = useContext(CartContext);

  return (
    <div className="cart-container">
      <h2>Carrito</h2>
      {cartItems.length === 0 ? (
        <p>No hay productos en el carrito</p>
      ) : (
        <>
          {cartItems.map(item => (
            <div className="cart-item" key={item.id}>
              <span>{item.name}</span>
              <button onClick={() => removeFromCart(item.id)}>Delete</button>
            </div>
          ))}
          <button className="clear-cart" onClick={clearCart}>Delete all</button>
        </>
      )}
    </div>
  );
};

export default Cart;
