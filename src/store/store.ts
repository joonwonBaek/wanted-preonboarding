import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { todoSlice } from "./reducer";
import session from "redux-persist/lib/storage/session";
import { persistReducer, persistStore } from "redux-persist";

const persistConfig = {
  key: "root",
  storage: session,
  whitelist: ["todos"],
};

const combineReducer = combineReducers({ todos: todoSlice.reducer });

const rootReducer = persistReducer(persistConfig, combineReducer);

const store = configureStore({
  reducer: rootReducer,
  devTools: true,
});

export const persistor = persistStore(store);

export default store;
