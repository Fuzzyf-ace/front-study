import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const billStore = createSlice({
  name: "bill",
  initialState: {
    billList: [],
  },
  reducers: {
    setBillList(state, action) {
      state.billList = action.payload;
    },
    addBill(state, action) {
      state.billList.push(action.payload);
    },
  },
});

const { setBillList, addBill } = billStore.actions;

const fetchBillList = () => {
  return async (dispatch) => {
    const res = await axios.get("http://localhost:3004/ka");
    dispatch(setBillList(res.data));
  };
};

const addBillRequest = (data) => {
  return async (dispatch) => {
    const res = await axios.post("http://localhost:3004/ka", data);
    dispatch(addBill(res.data));
  };
};

export { fetchBillList, addBillRequest };

const billReducer = billStore.reducer;

export default billReducer;
