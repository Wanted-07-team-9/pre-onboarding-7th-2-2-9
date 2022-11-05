import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const initialState = {
  item: [],
  isLoading: false,
  isError: false,
};

// 마이 페이지 차트
export const __DashBoardCharts = createAsyncThunk(
  'dash/__DashBoardCharts',
  async (arg, thunkAPI) => {
    try {
      // const { data } = await apis.my_page_chart();
      return thunkAPI.fulfillWithValue(data);
    } catch (e) {
      return thunkAPI.rejectWithValue(e);
    }
  }
);

export const dashSlice = createSlice({
  name: 'dashSlice',
  initialState,
  reducers: {},
  extraReducers: {
    [__DashBoardCharts.pending]: state => {
      state.isLoading = true;
    },
    [__DashBoardCharts.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.item = action.payload;
    },
    [__DashBoardCharts.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

export const {} = dashSlice.actions;
export default dashSlice.reducer;
