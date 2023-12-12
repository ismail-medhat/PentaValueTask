// mySlice.ts

import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import Axios from '../../services/axiosInstance';

const initialState = {
  userData: null,
  userError: null,
  loading: false,
  isSkip: false,
  isLoggedIn: false,
};
// Example async thunk to fetch data
export const handleSignUp = createAsyncThunk(
  'auth/register',
  async (data, {rejectWithValue, getState}) => {
    console.log(data);
    try {
      const res = await Axios({method: 'POST', path: 'register', data});
      console.log(res?.data);
      return res.data;
    } catch (error) {
      console.log(
        'check mobile exist Axios Error: ' +
          JSON.stringify(error?.response?.data),
      );
      let err = error?.response?.data || error;
      err = err
        ? err
        : console.log('Something went wrong, please try again later');
      return rejectWithValue(err);
    }
  },
);

const authSlice = createSlice({
  name: 'auth',
  initialState: initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(handleSignUp.pending, state => {
      state.loading = true;
    });
    builder.addCase(handleSignUp.fulfilled, (state, action) => {
      state.loading = false;
      state.userData = action.payload;
    });
    builder.addCase(handleSignUp.rejected, (state, action) => {
      state.loading = false;
    });
  },
});

export default authSlice.reducer;
