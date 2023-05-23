import React from 'react';
import './ProductItem.scss';
import Image from 'next/image';

export default function ProductItem(props) {
  const { productName, productPrice, imageSrc, handleOnClickProduct, productId } = props;

  const handleOnClick = () => {
    setTimeout(() => {
      handleOnClickProduct(productName, productId);
    }, 300);
  };

  return (
    
    
    <div className="card" onClick={handleOnClick}>
        <div className="card-image">
            <Image src={imageSrc} alt="" className="card-img" width={200} height={300} />
        </div>
        <div className="product-content">
        <h1 className="card-title">{productName}</h1>
            <div className="card-body">
                <p className="card-price">${productPrice}</p>
            </div>
          </div>
    </div>
    
  );
}
