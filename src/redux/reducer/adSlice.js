import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const initialState = {
  item: [],
  isLoading: false,
  isError: false,
  isPage: false,
};

// 마이 페이지 차트
export const __adItems = createAsyncThunk('dash/__DashBoardCharts', async (arg, thunkAPI) => {
  try {
    // const { data } = await apis.my_page_chart();
    return thunkAPI.fulfillWithValue();
  } catch (e) {
    return thunkAPI.rejectWithValue(e);
  }
});

export const adSlice = createSlice({
  name: 'adSlice',
  initialState,
  reducers: {
    isAdPageOn: state => {
      state.isPage = true;
    },
    isAdPageOff: state => {
      state.isPage = false;
    },
  },
  extraReducers: {
    [__adItems.pending]: state => {
      state.isLoading = true;
    },
    [__adItems.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.item = action.payload;
    },
    [__adItems.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

export const { isAdPageOn, isAdPageOff } = adSlice.actions;
export default adSlice.reducer;
