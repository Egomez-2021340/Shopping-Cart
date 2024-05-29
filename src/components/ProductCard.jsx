// src/components/ProductCard.jsx
import React, { useContext } from 'react';
import { CartContext } from '../context/CartContext';
import './ProductCard.css';

const ProductCard = ({ product }) => {
  const { addToCart } = useContext(CartContext);

  return (
    <div className="card">
      <img src={product.urlImage || '/src/assets/default-product-image.jpg'} alt={product.name} />
      <h2>{product.name}</h2>
      <p>{product.description}</p>
      <p>Q{product.price}</p>
      <button onClick={() => addToCart(product)}>Add to the cart</button>
    </div>
  );
};

export default ProductCard;