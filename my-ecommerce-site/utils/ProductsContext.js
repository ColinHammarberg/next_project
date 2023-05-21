import { useRouter } from "next/router";
import { useEffect, createContext, useState } from "react";

export const ProductsContext = createContext();

const ProductsContextProvider = ({ children }) => {
  const [products, setProducts] = useState();
  const [cartItems, setCartItems] = useState([]);
  const [cartCount, setCartCount] = useState(0);
  const [cartValueTotal, setCartValueTotal] = useState(0);
  const location = useRouter();

  useEffect(() => {
    let count = cartItems.length;
    setCartCount(count);
  
    let subTotal = null;
    cartItems.forEach((item) => {
      subTotal += item.price;
    });
    setCartValueTotal(subTotal);
  }, [cartItems]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  const handleAddToCart = (productId, allProducts) => {
    const foundProducts = allProducts.filter((p) => p.productId === productId);
    if (foundProducts.length > 0) {
      setCartItems((prevCartItems) => [...prevCartItems, ...foundProducts]);
    }
  };

  const handleRemoveFromCart = (productId) => {
    let items = [...cartItems];
    items = items?.filter((p) => p.id !== productId);
    setCartItems(items);
  };

  return (
    <ProductsContext.Provider
      value={{
        products,
        setProducts,
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
