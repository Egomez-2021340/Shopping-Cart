
import React from 'react';
import styled from 'styled-components';
import ProductCard from './ProductCard.jsx';
import { products } from '../../data.js';

const ProductGrid = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
`;

const ProductList = () => {
    return (
        <ProductGrid>
            {products.map(product => (
                <ProductCard key={product.id} product={product} />
            ))}
        </ProductGrid>
    );
};

export default ProductList;
