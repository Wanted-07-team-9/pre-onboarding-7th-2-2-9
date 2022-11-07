import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { apis } from '../../api/apis';

const initialState = {
  items: [],
  isLoading: false,
  isError: false,
  isPage: false,
  startDate: '',
  endDate: '',
  rangeDate: '',
};

// 마이 페이지 차트
export const __getDashBoardInfos = createAsyncThunk(
  'dash/__getDashBoardCharts',
  async (arg, thunkAPI) => {
    try {
      const res = await apis.getDashAdList();
      console.log(res);
      return thunkAPI.fulfillWithValue(res.data.report.daily);
    } catch (e) {
      return thunkAPI.rejectWithValue(e);
    }
  }
);

export const dashSlice = createSlice({
  name: 'dashSlice',
  initialState,
  reducers: {
    isDashPageOn: state => {
      state.isPage = true;
    },
    isDashPageOff: state => {
      state.isPage = false;
    },
    setStartDate: (state, action) => {
      state.startDate = new Date(action.payload.startDate);
      state.rangeDate = state.endDate.getDate() - state.startDate.getDate() + 1;
    },
    setEndDate: (state, action) => {
      state.startDate = new Date(action.payload.startDate);
      state.rangeDate = state.endDate.getDate() - state.startDate.getDate() + 1;
    },
  },
  extraReducers: builder => {
    builder
      .addCase(__getDashBoardInfos.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(__getDashBoardInfos.fulfilled, (state, action) => {
        state.isLoading = false;
        state.items = action.payload;
        state.startDate = new Date(action.payload[0].date);
        state.endDate = new Date(action.payload[6].date);
        state.rangeDate = state.endDate.getDate() - state.startDate.getDate() + 1;
        console.log(state.rangeDate + 1);
      })
      .addCase(__getDashBoardInfos.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = action.payload;
      });
  },
});

export const { isDashPageOn, isDashPageOff, setStartDate, setEndDate } = dashSlice.actions;
export default dashSlice.reducer;
