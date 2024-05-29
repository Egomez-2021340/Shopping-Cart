// src/App.jsx
import React from 'react';
import Header from './components/Header';
import ProductList from './components/ProductList';
import { CartProvider } from './context/CartContext';

const App = () => {
  return (
    <CartProvider>
      <Header />
      <ProductList />
    </CartProvider>
  );
};

export default App;
