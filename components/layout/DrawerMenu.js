import * as React from 'react';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';

import Link from 'next/link';
import classes from './Menu.module.css';

//
import { useState } from 'react';

const DrawerMenu = () => {
  const [draw, setDraw] = useState(false);

  const toggleHandler = () => {
    setDraw(true);
  };

  const closeHandler = () => {
    setDraw(false);
  };

  return (
    <div>
      <Button onClick={toggleHandler}>
        <IconButton
          size='large'
          edge='end'
          aria-label='open drawer'
          sx={{ mr: 2 }}>
          <MenuIcon sx={{ color: 'white', size: '10rem' }} />
        </IconButton>
      </Button>
      <Drawer anchor='right' open={draw} onClose={closeHandler}>
        <ul className={classes.menu}>
          <Link href='/user'>
            <li>حساب کاربری</li>
          </Link>
          <Link href='/products/favorite'>
            <li>کالاهای مورد علاقه شما </li>
          </Link>
          <Link href='/products/9999/Apple'>
            <li>لپ تاپ های اپل </li>
          </Link>
          <Link href='/products/9999/Lenovo'>
            <li>لپ تاپ های لنوو </li>
          </Link>

          <Link href='/products/9999/Msi'>
            <li>لپ تاپ های ام اس آی </li>
          </Link>
          <Link href='/products/9999/Asus'>
            <li>لپ تاپ های ایسوس </li>
          </Link>
        </ul>
      </Drawer>
    </div>
  );
};

export default DrawerMenu;
