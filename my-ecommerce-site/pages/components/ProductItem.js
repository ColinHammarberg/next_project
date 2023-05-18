import React from 'react';
import { Typography, Button, Box } from '@mui/material';

export default function ProductItem(props) {
  const { productName, productPrice } = props;

  return (
    <div>
      <Box>
        <Typography>{productName}</Typography>
        <Typography>${productPrice}</Typography>
        <Button>Add to cart</Button>
      </Box>
    </div>
  );
}
