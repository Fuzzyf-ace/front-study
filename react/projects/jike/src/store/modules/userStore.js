import { getToken, http, setToken as persistToken, removeToken } from "@/utils";
import { createSlice } from "@reduxjs/toolkit";

const userStore = createSlice({
  name: "user",
  initialState: {
    token: getToken() || "",
    userInfo: {},
  },
  reducers: {
    setToken(state, action) {
      state.token = action.payload;
      // token persistence
      persistToken(action.payload);
    },
    setUserInfo(state, action) {
      state.userInfo = action.payload;
    },
    logOut(state) {
      state.token = "";
      removeToken();
      state.userInfo = {};
    },
  },
});

const { setToken, setUserInfo, logOut } = userStore.actions;

const sendLoginRequest = (data) => {
  return async (dispatch) => {
    const res = await http.post("/authorizations", data);
    dispatch(setToken(res.data.token));
  };
};

const sendUserInfoRequest = () => {
  return async (dispatch) => {
    const res = await http.get("/user/profile");
    dispatch(setUserInfo(res.data));
  };
};

const userReducer = userStore.reducer;

// import as demand
export { sendLoginRequest, sendUserInfoRequest, logOut };

export default userReducer;
