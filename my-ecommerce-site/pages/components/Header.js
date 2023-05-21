import React, { useContext } from 'react';
import { AppBar, Toolbar, Typography, Button, IconButton } from '@mui/material';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { useRouter } from 'next/router';
import './Header.scss';
import { ProductsContext } from '@/utils/ProductsContext';
import CustomButton from './CustomButton';

export default function Header({ data }) {
  const headerDetails = data?.allBoutiques[0]?.header;
  const router = useRouter();
  const { cartItems } = useContext(ProductsContext);

  if (!headerDetails) {
    return null;
  }

  const handleNavigation = (href) => {
    router.push({
      pathname: href,
      query: { data: JSON.stringify(data) } // Pass the data as a plain JavaScript object
    });
  };

  return (
    <div>
      <AppBar position="static" className="header">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }} onClick={() => handleNavigation('/')}>
            Seasoned Cellars 
          </Typography>
          {headerDetails.map((item) => (
            <Button
              key={item.text}
              onClick={() => handleNavigation(item.href)}
              color="inherit"
          >
            {item.text}
          </Button>
          ))}
          <IconButton disabled={cartItems.length <= 0} onClick={() => handleNavigation('/Checkout')}><ShoppingCartIcon className={cartItems.length > 0 && 'active'} /></IconButton>
        </Toolbar>
      </AppBar>
    </div>
  );
}
