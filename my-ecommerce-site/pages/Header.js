import React from 'react';
import { AppBar, Toolbar, Typography, Button } from '@mui/material';
import { useRouter } from 'next/router';

export default function Header({ data }) {
  const headerDetails = data?.allBoutiques[0]?.header;
  const router = useRouter();

  console.log('data', data);

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
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Your E-commerce Store
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
        </Toolbar>
      </AppBar>
    </div>
  );
}
