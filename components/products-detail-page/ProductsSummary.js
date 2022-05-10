import { useState } from 'react';
import { useDispatch } from 'react-redux';
import SwitchButton from './SwitchButton';
import Image from 'next/image';
import * as React from 'react';

import Alert from '@mui/material/Alert';

import classes from './ProductSummary.module.css';
import { cartActions } from '../../store/cart-slice';

const ProductsSummary = (props) => {
  const [open, setOpen] = useState(false);
  const dispatch = useDispatch();

  const { title, price, description, id, cpu, gpu, ram, items, year, image } =
    props;

  const addToCartHandler = () => {
    dispatch(
      cartActions.addItemToCart({
        id,
        title,
        price,
      })
    );
    setOpen(true);
    setTimeout(setOpen, 3000);
  };

  return (
    <div className={classes.container}>
      <div className={classes.box}>
        <div className={classes.image}>
          <Image width='400' height='400' src={'/' + image} alt={title} />
        </div>
        <section className={classes.summary}>
          <h2>{title}</h2>
          <span className={classes.price}>{price}$</span>
          <p>{description}</p>
          <div className={classes.input}>
            <button className={classes.buy} onClick={addToCartHandler}>
              خرید
            </button>
            {open && (
              <Alert severity='success'>با موفقیت در سبد خرید اضافه شد .</Alert>
            )}
          </div>
        </section>
      </div>
      <SwitchButton cpu={cpu} ram={ram} gpu={gpu} items={items} year={year} />
    </div>
  );
};

export default ProductsSummary;
