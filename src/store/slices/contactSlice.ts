// mySlice.ts

import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
  contactGranted: false,
  deviceContacts: [],
  favoriteContacts: [],
};

const contactSlice = createSlice({
  name: "contact",
  initialState: initialState,
  reducers: {
    setContactGranted: (state, action) => {
      state.contactGranted = action.payload;
    },
    setDeviceContact: (state, action) => {
      state.deviceContacts = action.payload;
    },
    setFavoriteContacts: (state, action) => {
      state.favoriteContacts = action.payload;
    },
  },
  extraReducers: (builder) => {},
});

export const { setContactGranted, setDeviceContact, setFavoriteContacts } =
  contactSlice.actions;

export default contactSlice.reducer;
