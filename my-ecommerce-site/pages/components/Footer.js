import React from 'react';
import { Typography } from '@mui/material';

export default function Footer({ data }) {
  const headerDetails = data?.allBoutiques[0];
  console.log('data', data);

  if (!headerDetails) {
    // Handle the case when headerDetails is undefined or null
    return null; // Or you can display a loading state or an error message
  }

  return (
    <footer className="footer">
        <Typography variant="body2" color="textSecondary">
        &copy; 2023 Your E-commerce Store. All rights reserved.
        </Typography>
    </footer>
  );
}