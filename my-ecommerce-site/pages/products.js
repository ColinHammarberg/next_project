import React, { useContext, useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import './components/ProductLayout.scss';
import Header from './components/Header';
import { ProductsContext } from '../utils/ProductsContext';
import SingleProduct from './SingleProduct';
import ProductItem from './components/ProductItem';

export default function Products() {
  const router = useRouter();
  const data = router.query.data;
  const [isLoading, setIsLoading] = useState(true);
  const [parsedData, setParsedData] = useState(null);
  const { handleAddToCart } = useContext(ProductsContext);
  const [showSingleProduct, setShowSingleProduct] = useState(null);

  useEffect(() => {
    if (data) {
      try {
        const parsedDataObject = JSON.parse(data);
        setParsedData(parsedDataObject);
      } catch (error) {
        console.error('Error parsing data:', error);
      }
      setIsLoading(false);
    }
  }, [data]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  const productDetails = parsedData?.allBoutiques[0]?.products;

  const handleOnClickProduct = (productName, productId) => {
    setShowSingleProduct({ productName: productName, productId: productId });
  };

  const handleOnClose = () => {
    setShowSingleProduct(null);
  };

  return (
    <>
        <Header data={parsedData} />
        <section className="slider">
            {productDetails.map((item) => (
                <ProductItem
                  key={item.productId}
                  productName={item.name}
                  productPrice={item.price}
                  imageSrc={item.productImage.url}
                  productId={item.productId}
                  productDetails={productDetails}
                  handleOnClickProduct={handleOnClickProduct}
                  handleAddToCart={handleAddToCart}
                />
            ))}
          {showSingleProduct && (
            <SingleProduct showSingleProduct={showSingleProduct} allProducts={productDetails} handleOnClose={handleOnClose} />
          )}
        </section>
    </>
  );
}
