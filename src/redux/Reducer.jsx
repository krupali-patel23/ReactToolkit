import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  userInfo: [],
  cnt:0,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    addItem: (state, action) => {
      state.userInfo.push(action.payload);
    },
    deleteItem: (state, action) => {
            state.userInfo = state.userInfo.filter((item, index) => index !== action.payload);
      },
    updateItem: (state, action) => {
          state.userInfo = state.userInfo.map((i,index) =>
            index === action.payload.id ? action.payload : i
          ) 
    },
    IncrementValue:(state) => {
        state.cnt = state.cnt + 1;
    },
    DecrementValue:(state) => {
        state.cnt = state.cnt - 1;
    }
        
  },
});

export const { addItem,deleteItem,updateItem,IncrementValue,DecrementValue } = userSlice.actions;
export default userSlice.reducer;