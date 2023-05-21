import React from 'react';
import { Typography, Container } from '@mui/material';
import CustomButton from './components/CustomButton';

export default function About({ data }) {
  const headerDetails = data?.allBoutiques[0];

  if (!headerDetails) {
    // Handle the case when headerDetails is undefined or null
    return null; // Or you can display a loading state or an error message
  }

  return (
    <div className="content-container">
      <Container className="container">
        <Typography variant="h4" component="h1" gutterBottom className="heading">
          Welcome to our E-commerce Store!
          <CustomButton title="Shop" href="/Products"  />
        </Typography>
        <Typography variant="body1" gutterBottom className="description">
          Explore our wide range of products and find the perfect one for you.
        </Typography>
      </Container>
    </div>
  );
}
