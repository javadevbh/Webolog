import { createSlice } from "@reduxjs/toolkit";

//Helpers
import { getStorageValue, setStorageValue } from "../../helpers/helper";

const initialState = {
  selectedItems: [],
};

const bookmarksSlice = createSlice({
  name: "bookmarks",
  initialState: getStorageValue("BOOKMARKS", initialState),
  reducers: {
    addItem: (state, action) => {
      if (!state.selectedItems.find((item) => item.id == action.payload.id)) {
        state.selectedItems.push({ ...action.payload });
      }
      setStorageValue(state);
    },
    removeItem: (state, action) => {
      const newSelectedItems = state.selectedItems.filter(
        (item) => item.id !== action.payload.id
      );
      state.selectedItems = newSelectedItems;
      setStorageValue(state);
    },
  },
});

export default bookmarksSlice.reducer;
export const { addItem, removeItem } = bookmarksSlice.actions;
