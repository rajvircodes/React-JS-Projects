import ProductCard from "./ProductCard";
import { products } from '../data/products'

import React from 'react'

const ProductList = () => {
  return (
    <div className="product-list-container">
        <div className="product-list-header">
            <h2>Our Products</h2>
            <p>showing {products.length}</p>
        </div>

        <div className="product-grid">
            {products.map((product)=>(
                <ProductCard 
                    key={product.id}
                    name={product.name}
                    price={product.price}
                    image={product.image}
                    catogory={product.category}
                    rating={product.rating}
                    inStock={product.inStock}
                />

            ))}
        </div>
    </div>
  );
}

export default ProductList