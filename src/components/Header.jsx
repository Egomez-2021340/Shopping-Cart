// src/components/Header.jsx
import React, { useContext, useState } from 'react';
import { CartContext } from '../context/CartContext';
import Cart from './Cart';
import './Header.css';

const Header = () => {
  const [cartVisible, setCartVisible] = useState(false);
  const { cartItems } = useContext(CartContext);

  return (
    <div className="header-container">
      <h1>Shopping Cart</h1>
      <button onClick={() => setCartVisible(!cartVisible)}>
        Cart ({cartItems.length})
      </button>
      {cartVisible && <Cart />}
    </div>
  );
};

export default Header;
