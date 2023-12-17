import { configureStore } from "@reduxjs/toolkit";

import userReducer from "./modules/userStore";
const store = configureStore({
  reducer: {
    use: userReducer,
  },
});

export default store;
