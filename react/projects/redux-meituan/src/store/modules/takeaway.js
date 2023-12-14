import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
const foodsStore = createSlice({
  name: "foods",
  initialState: {
    foodsList: [],
    activeMenuIndex: 0,
    cartList: [],
    isCartOpen: false,
  },
  reducers: {
    setFoodsList(state, action) {
      state.foodsList = action.payload;
    },
    setActiveMenuIndex(state, action) {
      state.activeMenuIndex = action.payload;
    },
    addCart(state, action) {
      console.log("addCart");
      const item = state.cartList.find((item) => {
        return item.id === action.payload.id;
      });
      if (item) {
        item.count++;
      } else {
        action.payload.count = 1;
        state.cartList.push(action.payload);
      }
    },
    removeCart(state, action) {
      const index = state.cartList.findIndex((item) => {
        return item.id === action.payload.id;
      });
      const item = state.cartList[index];
      if (item) {
        item.count--;
        if (item.count === 0) state.cartList.splice(index, 1);
      }
    },
    toggleCart(state) {
      state.isCartOpen = !state.isCartOpen;
    },
    cleanCart(state) {
      state.cartList = [];
    },
  },
});
const {
  setFoodsList,
  setActiveMenuIndex,
  addCart,
  removeCart,
  toggleCart,
  cleanCart,
} = foodsStore.actions;

const fetchFoodsList = () => {
  return async (dispatch) => {
    const res = await axios.get("http://localhost:3004/takeaway");
    dispatch(setFoodsList(res.data));
  };
};

export {
  fetchFoodsList,
  setActiveMenuIndex,
  addCart,
  removeCart,
  toggleCart,
  cleanCart,
};
const reducer = foodsStore.reducer;
export default reducer;
