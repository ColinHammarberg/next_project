import React, { useContext, useEffect, useState } from 'react';
import LoopIcon from '@mui/icons-material/Loop';
import { Typography } from '@mui/material';
import { useRouter } from 'next/router';
import Cart from './components/Checkout/Cart';
import { ProductsContext } from '@/utils/ProductsContext';
import Header from './components/Header/Header';
import './style/Checkout.scss';
import CustomButton from './components/Buttons/CustomButton';
import ConfirmOrder from './components/Checkout/ConfirmOrder';
import { useLocalStorage } from '@/utils/CustomHooks';

export default function CheckOut() {
  const { cartItems, setCartItems, cartValueTotal, handleRemoveFromCart } = useContext(
    ProductsContext
  );
  const [parsedData, setParsedData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [orderDetails, setOrderDetails] = useLocalStorage(`orderDetails`, {});
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

  async function handleOnClickCheckOut() {
    const { isConfirmed } = await ConfirmOrder.show();
    if (!isConfirmed) {
      return;
    } else {
      setIsLoading(true);
      setOrderDetails({ cartItems, cartValueTotal });
      await new Promise((resolve) => setTimeout(resolve, 3500));
      router.push({
        pathname: '/Confirmation',
      });
      setCartItems([]);
      setIsLoading(false);
    }
  }

  if (isLoading) {
    return (
      <div className="checkout">
        <div className="w-full">
          <div className="loading-screen">
            <LoopIcon />
          </div>
        </div>
      </div>
    );
  }

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
                    <Cart
                      productName={item.name}
                      imageSrc={item.productImage.url}
                      productPrice={item.price}
                      productId={item.productId}
                      key={item.productId}
                      handleRemoveFromCart={handleRemoveFromCart}
                    />
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
                      The subtotal reflects the total price of your order. You will pay the order
                      once it has arrived.
                    </Typography>
                  </div>
                  <CustomButton title="Checkout" onClick={handleOnClickCheckOut} />
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
