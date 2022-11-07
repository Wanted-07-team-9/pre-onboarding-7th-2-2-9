import { configureStore } from '@reduxjs/toolkit';
import dateReducer from '../Slice/dataSlice';

export const store = configureStore({
  reducer: { dateReducer },
});
console.log(store.getState());
