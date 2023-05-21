import React from 'react';
import { useContext } from 'react';
import './components/CheckoutPage.scss';
import { ProductsContext } from '@/utils/ProductsContext';
import Image from 'next/image';
import CustomButton from './components/CustomButton';

const CheckoutPage = () => {
  const { cartItems, cartSubTotal } = useContext(ProductsContext);

  return (
    <div className="checkout-page">
      <h1>Checkout</h1>
      <div className="cart-items">
        {cartItems.map((item) => (
          <div className="cart-item" key={item.productId}>
            <Image src={item.productImage.url} alt={item.name} />
            <div className="item-details">
              <h3>{item.name}</h3>
              <p>Quantity: {cartItems.length}</p>
              <p>Price: ${item.price}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="total">Total: ${cartSubTotal}</div>
      <CustomButton title="Checkout" onClick={""}  />
    </div>
  );
};

export default CheckoutPage;
