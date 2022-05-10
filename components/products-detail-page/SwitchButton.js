import { useState } from 'react';
import ProductInformation from './ProductInformation';
import Review from './Review';

import * as React from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

import classes from './Button.module.css';

const SwitchButton = (props) => {
  const [information, setInformation] = useState(true);
  const [review, setReview] = useState(false);

  const { cpu, ram, gpu, items, year } = props;

  function infoHandler() {
    setInformation(false);
    setReview(true);
  }

  function reviewHandler() {
    setInformation(true);
    setReview(false);
  }

  return (
    <div>
      <Stack
        spacing={2}
        direction='row'
        sx={{ display: 'flex', justifyContent: 'center', marginTop: '2rem' }}>
        <button
          variant='outlined'
          onClick={reviewHandler}
          sx={{ color: 'black', borderColor: 'black' }}
          className={`${information && classes.btn} ${classes.btn2}`}>
          مشخصات قنی
        </button>
        <button
          variant='outlined'
          onClick={infoHandler}
          sx={{ color: 'black', borderColor: 'black' }}
          className={`${review && classes.btn} ${classes.btn2}`}>
          نقد و بررسی
        </button>
      </Stack>
      {information && (
        <ProductInformation
          cpu={cpu}
          ram={ram}
          gpu={gpu}
          items={items}
          year={year}
        />
      )}

      {review && !information && <Review />}
    </div>
  );
};

export default SwitchButton;
