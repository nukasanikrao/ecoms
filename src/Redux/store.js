import { configureStore } from "@reduxjs/toolkit";
import logger from "redux-logger";
import thunkMiddleware from "redux-thunk";
import ProductSlice from "./Slice/ProductSlice";
import UserSlice from "./Slice/UserSlice";

const middleware = [logger, thunkMiddleware];

const store = configureStore({
  reducer: {
    user: UserSlice,
    product: ProductSlice,
  },
  middleware,
});

export default store;
