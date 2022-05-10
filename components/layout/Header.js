//material imports
import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { Container } from '@mui/material';

import Link from 'next/link';
import DrawerMenu from './DrawerMenu';
import CartModal from './CartModal';
import classes from './Header.module.css';

//materia ui

const Header = () => {
  return (
    <AppBar position='static' sx={{ backgroundColor: '#737373' }}>
      <Container maxWidth='lg'>
        <Toolbar
          sx={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
          }}>
          <Box sx={{ display: 'flex' }}>
            <div className={classes.logo}>
              <Link href='/'>
                <a style={{ color: 'whitesmoke', textDecoration: 'none' }}>
                  TECH <span style={{ color: 'yellow' }}>CITY</span>
                </a>
              </Link>
            </div>
          </Box>
          <Box sx={{ display: 'flex' }}>
            <Typography sx={{ margin: '1rem', color: 'whitesmoke' }}>
              <Link href='/products'>
                <a style={{ color: 'whitesmoke', textDecoration: 'none' }}>
                  تمامی محصولات
                </a>
              </Link>
            </Typography>
            <CartModal />
            <DrawerMenu />
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Header;
