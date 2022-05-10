import { createSlice } from '@reduxjs/toolkit';

const favoreSlice = createSlice({
  name: 'favore',
  initialState: { items: [] },
  reducers: {
    addItemToFavorite(state, action) {
      const newFavore = action.payload;

      state.items.push({
        id: newFavore.id,
        image: newFavore.image,
        price: newFavore.price,
        title: newFavore.title,
      });
    },
  },
});

export const uiActions = favoreSlice.actions;

export default favoreSlice;
