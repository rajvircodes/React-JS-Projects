import React from 'react'

const ProductCard = (props) => {
  return (
    <div className='product-card'>
        <div className="product-image-container">
            <img src={props.image} 
            alt={props.name} 
            className='product-image'/>
            {!props.inStock && (
                <span className='out-of-stock-badge'>Out of Stock</span>
            )}
        </div>

        <div className="product-info">
            <span className='product-catogary'>{props.catogary}</span>
            <h1 className='product-naem'>{props.name}</h1>

            <div className='product-rating'>
                <span className='stars'>{"⭐".repeat(Math.floor(props.rating))}</span>
                <span className='rating-number'>{props.rating}</span>
            </div>

            <div className='product-footer'>
                <span className='product-price'>${props.price}</span>
                <button 
                className='add-to-cart-btn'
                disabled={!props.inStock}
                >
                {props.inStock ? "Add to Cart" : "Unavailable"} 
                </button>
            </div>
        </div>
    </div>
  );
}

export default ProductCard