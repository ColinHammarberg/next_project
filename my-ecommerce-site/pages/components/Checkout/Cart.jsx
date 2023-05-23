import React from 'react';
import Image from 'next/image';
import './Cart.scss';
import CustomButton from '../Buttons/CustomButton';
import { Typography } from '@mui/material';
export default function Cart(props) {
  const {
    imageSrc,
    productName,
    productPrice,
    productId,
    handleRemoveFromCart,
    confirmationPage,
  } = props;
  const handleOnRemoveItem = () => {
    setTimeout(() => {
      handleRemoveFromCart(productId);
    }, 300);
  };

  return (
    <>
      <div className="product-item-container">
        <Image
          className="product-image"
          src={imageSrc}
          alt={productName}
          width={120}
          height={120}
        />
        <div className="w-full">
          <div className="flex">
            <Typography className="product-title">{productName}</Typography>
            <Typography className="product-price">${productPrice}</Typography>
          </div>
          {!confirmationPage && (
            <div className="remove-btn">
              <CustomButton title="Remove" onClick={handleOnRemoveItem} />
            </div>
          )}
          {!confirmationPage && (
            <Typography className="remove-helper-text">
              Item can be removed by clicking the remove button
            </Typography>
          )}
        </div>
      </div>
    </>
  );
}
