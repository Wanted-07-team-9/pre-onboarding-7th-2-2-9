import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  startdate: null,
  enddate: null,
};

export const dateSlice = createSlice({
  name: 'dateSlice',
  initialState,
  reducers: {
    getStartDate(state, action) {
      state.startdate = action.payload;
    },
    getEndDate(state, action) {
      state.enddate = action.payload;
    },
  },
});

export const { getStartDate, getEndDate } = dateSlice.actions;

export default dateSlice.reducer;
