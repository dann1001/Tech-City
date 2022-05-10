import { configureStore } from '@reduxjs/toolkit';

import cartSlice from './cart-slice';
import favoreSlice from './favorite-slice';

const store = configureStore({
  reducer: { cart: cartSlice.reducer, favore: favoreSlice.reducer },
});

export default store;
