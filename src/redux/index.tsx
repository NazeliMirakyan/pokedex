import { configureStore, combineReducers } from "@reduxjs/toolkit";

import dataSlice from "./data/slice";

import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";

import localStorage from "redux-persist/lib/storage";

const persistConfig = {
  key: "root",
  version: 1,
  storage: localStorage,
};
const reducers = combineReducers({ data: dataSlice });
const persistedReducer = persistReducer(persistConfig, reducers);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export * from "./data";
export * from "../types/apiTypes";

export const persistor = persistStore(store);
