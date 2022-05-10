import { useRef } from 'react';

import classes from './ProductSearch.module.css';

function ProductsSearch(props) {
  const { onSearch } = props;

  const PriceInputRef = useRef();
  const monthInputRef = useRef();

  function submitHandler(event) {
    event.preventDefault();

    const selectedPrice = PriceInputRef.current.value;
    const selectedMonth = monthInputRef.current.value;

    onSearch(selectedPrice, selectedMonth);
  }

  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <div className={classes.controls}>
        <div className={classes.control}>
          <label htmlFor='price'> قیمت </label>
          <select id='price' ref={PriceInputRef}>
            <option value='1000'>999$ تا</option>
            <option value='1299'>1299$ تا</option>
            <option value='1499'>1499$ تا</option>
            <option value='1999'>1999$ تا</option>
          </select>
        </div>
        <div className={classes.control}>
          <label htmlFor='month'>برند</label>
          <select id='month' ref={monthInputRef}>
            <option value='Apple'>Apple</option>
            <option value='Lenovo'>Lenovo</option>
            <option value='Acer'>Acer</option>
            <option value='Asus'>Asus</option>
            <option value='Msi'>Msi</option>
          </select>
        </div>
      </div>
      <button>انتخاب</button>
    </form>
  );
}

export default ProductsSearch;
