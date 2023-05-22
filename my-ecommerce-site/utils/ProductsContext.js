import { useRouter } from "next/router";
import { useEffect, createContext, useState } from "react";
import { toast } from "react-toastify";

export const ProductsContext = createContext();

const ProductsContextProvider = ({ children }) => {
  const [datoCmsData, setDatoCmsData] = useState();
  const [cartItems, setCartItems] = useState([]);
  const [cartCount, setCartCount] = useState(0);
  const [cartValueTotal, setCartValueTotal] = useState();
  const location = useRouter();

  useEffect(() => {
    let count = cartItems.length;
    setCartCount(count);
  
    let subTotal = 0;
  
    cartItems.forEach((item) => {
      subTotal += parseFloat(item.price); // Convert item price to a number
    });
  
    setCartValueTotal(subTotal);
  }, [cartItems]);
  

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  const handleAddToCart = (productId, allProducts) => {
    const foundProducts = allProducts.filter((p) => p.productId === productId);
    if (cartItems.some((item) => item.productId === productId)) {
      toast.error('Only 1 bottle per wine allowed per person');
    } else if (foundProducts.length > 0) {
      setCartItems((prevCartItems) => [...prevCartItems, ...foundProducts]);
      toast.success('Item added to cart');
    }
  };

  const handleRemoveFromCart = (productId) => {
    const updatedItems = cartItems.filter((item) => item.productId !== productId);
    setCartItems(updatedItems);
    toast.success('Item was successfully removed from cart');
    console.log('cartItems', cartItems);
  };

  return (
    <ProductsContext.Provider
      value={{
        datoCmsData,
        setDatoCmsData,
        cartItems,
        setCartItems,
        handleAddToCart,
        cartCount,
        handleRemoveFromCart,
        cartValueTotal,
      }}
    >
      {children}
    </ProductsContext.Provider>
  );
};

export default ProductsContextProvider;
