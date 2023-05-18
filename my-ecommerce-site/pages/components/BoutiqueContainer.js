import React from 'react';
import { Typography, Container, Button } from '@mui/material';

export default function BoutiqueContainer({ data }) {
  const headerDetails = data?.allBoutiques[0];
  console.log('data', data);

  if (!headerDetails) {
    // Handle the case when headerDetails is undefined or null
    return null; // Or you can display a loading state or an error message
  }

  return (
    <div className="content-container">
        <Container>
          <Typography variant="h4" component="h1" gutterBottom>
            Welcome to our E-commerce Store!
            <Button>Shop</Button>
          </Typography>
          <Typography variant="body1" gutterBottom>
            Explore our wide range of products and find the perfect one for you.
          </Typography>
        </Container>
      </div>
  );
}