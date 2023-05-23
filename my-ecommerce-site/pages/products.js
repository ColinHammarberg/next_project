import React, { useContext, useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import './style/Products.scss';
import Header from './components/Header/Header';
import { ProductsContext } from '../utils/ProductsContext';
import SingleProduct from './components/Product/SingleProduct';
import ProductItem from './components/Product/ProductItem';

export default function Products() {
  const router = useRouter();
  const data = router.query.data;
  const [isLoading, setIsLoading] = useState(true);
  const [parsedData, setParsedData] = useState(null);
  const { handleAddToCart, handleRemoveFromCart } = useContext(ProductsContext);
  const [showSingleProduct, setShowSingleProduct] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      if (data) {
        try {
          const parsedDataObject = JSON.parse(data);
          setParsedData(parsedDataObject);
        } catch (error) {
          console.error('Error parsing data:', error);
        }
        setIsLoading(false);
      }
    };

    fetchData();
  }, [data]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  const productDetails = parsedData?.allBoutiques[0]?.products;

  const handleOnClickProduct = (productName, productId) => {
    setShowSingleProduct({ productName, productId });
  };

  const handleOnClose = () => {
    setShowSingleProduct(null);
  };

  return (
    <>
      <Header data={parsedData} />
      <section className="products">
        {productDetails.map((item) => (
          <ProductItem
            key={item.productId}
            productName={item.name}
            productPrice={item.price}
            imageSrc={item.productImage.url}
            productId={item.productId}
            productDetails={productDetails}
            handleOnClickProduct={handleOnClickProduct}
            handleRemoveFromCart={handleRemoveFromCart}
          />
        ))}
        {showSingleProduct && (
          <SingleProduct
            showSingleProduct={showSingleProduct}
            allProducts={productDetails}
            handleAddToCart={handleAddToCart}
            handleOnClose={handleOnClose}
          />
        )}
      </section>
    </>
  );
}
