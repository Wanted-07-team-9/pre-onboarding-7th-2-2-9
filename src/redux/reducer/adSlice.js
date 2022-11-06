import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { apis } from '../../api/apis';

const initialState = {
  adList: [],
  activeAdList: [],
  endedAdList: [],
  resultAdList: [],
  isLoading: false,
  isError: false,
  isPage: false,
  adFilterStatus: 'all',
};

// get adList
export const __getAdList = createAsyncThunk('dash/__DashBoardCharts', async (arg, thunkAPI) => {
  try {
    const res = await apis.getAdList();
    return thunkAPI.fulfillWithValue(res.data.ads);
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
    setAdStatus: (state, action) => {
      state.adFilterStatus = action.payload.status;
      switch (state.adFilterStatus) {
        case 'active':
          state.activeAdList = state.adList.filter(ad => ad.status === 'active');
          state.resultAdList = state.activeAdList;
          break;
        case 'ended':
          state.endedAdList = state.adList.filter(ad => ad.status === 'ended');
          state.resultAdList = state.endedAdList;
          break;
      }
    },
  },
  extraReducers: builder => {
    builder
      .addCase(__getAdList.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(__getAdList.fulfilled, (state, action) => {
        state.isLoading = false;
        state.adList = action.payload;
        state.resultAdList = action.payload;
        state.adFilterStatus = action.payload.status;
      })
      .addCase(__getAdList.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = action.payload;
      });
  },
});

export const { isAdPageOn, isAdPageOff, setAdStatus } = adSlice.actions;
export default adSlice.reducer;
