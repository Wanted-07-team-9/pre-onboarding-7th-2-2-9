import { combineReducers, configureStore } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';
import adManager from './reducer/adSlice';
import dashBoard from './reducer/dashSlice';

// 리듀서 통합
const rootReducer = combineReducers({
  adManager,
  dashBoard,
});

// 스토어 연결
const store = configureStore({
  reducer: rootReducer,
  middleware: [thunk],
});

export default store;
