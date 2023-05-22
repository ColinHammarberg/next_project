import React, { useContext, useEffect, useState } from 'react';
import Cart from './components/Checkout/Cart';
import { ProductsContext } from '@/utils/ProductsContext';
import Header from './components/Header/Header';
import { useRouter } from 'next/router';
import './style/Checkout.scss';
import { Typography } from '@mui/material';
import CustomButton from './components/Buttons/CustomButton';

export default function CheckOut() {
  const { cartItems, cartValueTotal, handleRemoveFromCart } = useContext(ProductsContext);
  const [parsedData, setParsedData] = useState(null);
  const router = useRouter();
  const data = router.query.data;
  useEffect(() => {
    const fetchData = async () => {
      if (data) {
        try {
          const parsedDataObject = JSON.parse(data);
          setParsedData(parsedDataObject);
        } catch (error) {
          console.error('Error parsing data:', error);
        }
      }
    };

    fetchData();
  }, [data]);

  return (
    <div className="checkout">
        <Header data={parsedData} />
        <div className="w-full">
          <div>
            {cartItems.length > 0 ? (
              <>
                <div className="cart-heading-container">
                  <Typography className="cart-heading">Shopping Cart</Typography>
                </div>
                <div className="cart-content-container">
                  <div className="cart-items-container">
                    <Typography className="cart-items-heading">Cart Items</Typography>
                    {cartItems.map((item) => (
                      <Cart productName={item.name} imageSrc={item.productImage.url} productPrice={item.price} productId={item.productId} handleRemoveFromCart={handleRemoveFromCart} />
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
                      </Typography>
                    </div>
                    <CustomButton title="Checkout" onClick="" />
                  </div>
                </div>
              </>
            ) : (
              <>
                <div className="cart-empty-container">
                  <Typography className="cart-heading">Shopping cart is empty</Typography>
                </div>
              </>
            )}  
      </div>
    </div>
    </div>
  );
}


