import React from 'react';
import './ProductLayout.scss';
import Image from 'next/image';
import CustomButton from './CustomButton';

export default function ProductItem(props) {
  const { productName, productPrice, imageSrc, productDetails, handleOnClickProduct, productId, handleAddToCart } = props;

  const handleOnClick = () => {
    setTimeout(() => {
      handleOnClickProduct(productName, productId);
    }, 300);
  };

  const handleOnClickAddToCart = () => {
    handleAddToCart(productId, productDetails)
  };

  return (
    
    
    <div className="card">
        <div className="card-content">
            <Image src={imageSrc} alt="" className="card-img" />
            <h1 className="card-title">{productName}</h1>
            <div className="card-body">
                <div className="card-star">
                    <span className="rating-value">4.5</span>
                    <span className="star">&#9733;</span>
                </div>
                <p className="card-price">${productPrice}</p>
            </div>
            <div className="card-footer">
              <CustomButton onClick={handleOnClickAddToCart} title="Add to cart" />
              <CustomButton onClick={handleOnClick} title="Read more" />
            </div>
        </div>
    </div>
    
  );
}
