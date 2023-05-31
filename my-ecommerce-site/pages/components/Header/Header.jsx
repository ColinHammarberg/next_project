import React, { useContext } from 'react';
import PropTypes from 'prop-types';
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
      text: 'Home',
      href: '/',
    },
    {
      text: 'Shop Wines',
      href: '/products',
    },
    // {
    //   text: 'About Us',
    //   href: '/About',
    // },
  ];

  const handleNavigation = (href) => {
    router.push({
      pathname: href,
      query: { data: JSON.stringify(data) }, // Pass the data as a plain JavaScript object
    });
  };

  return (
    <div>
      <AppBar position="static" className="header">
        <Toolbar>
          <Typography sx={{ flexGrow: 1 }}>Seasoned Cellars</Typography>
          {headerItems.map((item) => (
            <Button key={item.text} onClick={() => handleNavigation(item.href)} color="inherit">
              {item.text}
            </Button>
          ))}
          <div className="cart">
            <IconButton
              disabled={cartItems?.length <= 0}
              onClick={() => handleNavigation('/checkout')}
              className={cartItems?.length > 0 && 'active'}
            >
              <ShoppingCartIcon />
              <span className="cart-items">{cartItems?.length}</span>
            </IconButton>
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
}

Header.propTypes = {
  data: PropTypes.instanceOf(Object),
};
