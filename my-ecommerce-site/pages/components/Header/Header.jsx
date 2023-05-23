import React, { useContext } from 'react';
import { AppBar, Toolbar, Typography, Button, IconButton } from '@mui/material';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { useRouter } from 'next/router';
import './Header.scss';
import { ProductsContext } from '@/utils/ProductsContext';

export default function Header({ data }) {
  const router = useRouter();
  const { cartItems } = useContext(ProductsContext);

  const headerItems = [
    {
      text: 'Products',
      href: '/Products'
    },
    {
      text: 'Contact Us',
      href: '/Contact'
    },
    {
      text: 'About Us',
      href: '/About'
    },
  ]

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
          <Typography sx={{ flexGrow: 1 }} onClick={() => handleNavigation('/')}>
            Seasoned Cellars 
          </Typography>
          {headerItems.map((item) => (
            <Button
              key={item.text}
              onClick={() => handleNavigation(item.href)}
              color="inherit"
          >
            {item.text}
          </Button>
          ))}
          <div className="cart">
          <IconButton disabled={cartItems?.length <= 0} onClick={() => handleNavigation('/Checkout')} className={cartItems?.length > 0 && 'active'}>
              <ShoppingCartIcon />
              <span className="cart-items">{cartItems?.length}</span>
          </IconButton>
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
}
