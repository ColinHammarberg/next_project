import React, { useEffect, useState } from 'react';
import { Typography, Container } from '@mui/material';
// import ProductItem from './components/ProductItem';
import { useRouter } from 'next/router';
import ProductItem from './components/ProductItem';

  export default function Products() {
    const router = useRouter();
    const data = router.query.data;
    const [isLoading, setIsLoading] = useState(true);
    const [parsedData, setParsedData] = useState(null);

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
  
    return (
      <div className="content-container">
        <Container>
          <Typography variant="h4" component="h1" gutterBottom>
            Welcome to our E-commerce Store!
          </Typography>
          {productDetails.map((item) => {
            return (
                <ProductItem productName={item.name} productPrice={item.price} key={item.name}/>
            )
          })}
        </Container>
      </div>
    );
  }