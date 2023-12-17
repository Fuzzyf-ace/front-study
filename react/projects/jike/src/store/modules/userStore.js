import { http } from "@/utils";
import { createSlice } from "@reduxjs/toolkit";

const userStore = createSlice({
  name: "user",
  initialState: {
    token: localStorage.getItem("token") || "",
  },
  reducers: {
    setToken(state, action) {
      state.token = action.payload;
      // token persistence
      localStorage.setItem("token", action.payload);
    },
  },
});

const { setToken } = userStore.actions;

const sendLoginRequest = (data) => {
  return async (dispatch) => {
    const res = await http.post("/authorizations", data);
    dispatch(setToken(res.data.token));
  };
};
const userReducer = userStore.reducer;

// import as demand
export { setToken, sendLoginRequest };

export default userReducer;
