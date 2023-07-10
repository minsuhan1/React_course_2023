import { configureStore } from "@reduxjs/toolkit";

import counterReducer from "./counter";
import AuthReducer from "./auth";

// configureStore: 여러 리듀서를 하나의 리듀서로 결합
const store = configureStore({
  reducer: { counter: counterReducer, auth: AuthReducer },
});

export default store;
