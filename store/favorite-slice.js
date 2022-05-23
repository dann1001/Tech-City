import { createSlice } from "@reduxjs/toolkit";

const favoreSlice = createSlice({
  name: "favore",
  initialState: { items: [] },
  reducers: {
    addItemToFavorite(state, action) {
      const newFavore = action.payload;
      const existingFavore = state.items.find(
        (product) => product.id === action.payload.id
      );

      if (!existingFavore)
        state.items.push({
          id: newFavore.id,
          image: newFavore.image,
          price: newFavore.price,
          title: newFavore.title,
        });
    },
    removeItemFromFavorite(state, action) {
      const nextFavores = state.items.filter(
        (favoriteItem) => favoriteItem.id !== action.payload.id
      );
      state.items = nextFavores;
    },
  },
});

export const uiActions = favoreSlice.actions;

export default favoreSlice;
