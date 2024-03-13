import { configureStore } from '@reduxjs/toolkit';
import  useReducer  from './Reducer';

const store = configureStore({
  reducer: {
    user:useReducer
  },
});

export default store;