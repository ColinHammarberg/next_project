import { Typography } from '@mui/material';
import React from 'react';
import Cart from './components/Checkout/Cart';
import { useLocalStorage } from '@/utils/CustomHooks';
import './style/Confirmation.scss';

export default function Confirmation() {
  const confirmedOrder = useLocalStorage('orderDetails', []);
  return (
    <div className="confirmation">
      <div className="w-full">
        <>
          <div className="confirmation-heading-container">
            <Typography className="confirmation-heading">Thank you for your order!</Typography>
          </div>
          <div className="confirmation-content-container">
            <div className="confirmation-items-container">
              <Typography className="confirmation-items-heading">
                See your order confirmation below
              </Typography>
              {confirmedOrder?.length > 0 && confirmedOrder[0]?.cartItems.map((item) => (
                <Cart
                  productName={item.name}
                  imageSrc={item.productImage.url}
                  productPrice={item.price}
                  productId={item.productId}
                  key={item.productId}
                  confirmationPage
                />
              ))}
            </div>
            <div className="confirmation-summary">
              <Typography className="confirmation-summary-header">Summary</Typography>
              <div className="confirmation-summary-details">
                <div className="confirmation-summary-row">
                  <Typography className="confirmation-summary-label">Subtotal</Typography>
                  <div className="confirmation-summary-value">${confirmedOrder[0]?.cartValueTotal}</div>
                </div>
                <Typography className="confirmation-summary-description">
                  The subtotal reflects the total price of your order. You will pay the order once
                  it has arrived.
                </Typography>
              </div>
            </div>
          </div>
        </>
      </div>
    </div>
  );
}
