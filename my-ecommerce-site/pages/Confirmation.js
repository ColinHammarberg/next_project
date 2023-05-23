import { ProductsContext } from '@/utils/ProductsContext';
import { Typography } from '@mui/material';
import React, { useContext } from 'react';
import Cart from './components/Checkout/Cart';
import { useLocalStorage } from '@/utils/CustomHooks';


export default function Confirmation() {
  const { cartValueTotal } = useContext(ProductsContext);
  const confirmedOrder = useLocalStorage('orderDetails', []);
  return (
    <div className="checkout">
        <div className="w-full">
          <div>
              <>
                <div className="cart-heading-container">
                  <Typography className="cart-heading">Thank you for your order!</Typography>
                </div>
                <div className="cart-content-container">
                  <div className="cart-items-container">
                    <Typography className="cart-items-heading">See your order confirmation below</Typography>
                    {confirmedOrder[0].cartItems.map((item) => (
                      <Cart productName={item.name} imageSrc={item.productImage.url} productPrice={item.price} productId={item.productId} confirmationPage />
                    ))}
                  </div>
                  <div className="cart-summary">
                    <Typography className="cart-summary-header">Summary</Typography>
                    <div className="cart-summary-details">
                      <div className="cart-summary-row">
                        <Typography className="cart-summary-label">Subtotal</Typography>
                        <div className="cart-summary-value">${cartValueTotal}</div>
                      </div>
                      <Typography className="cart-summary-description">
                        The subtotal reflects the total price of your order.
                        You will pay the order once it has arrived.
                      </Typography>
                    </div>
                  </div>
                </div>
              </>
      </div>
    </div>
    </div>
  );
}


