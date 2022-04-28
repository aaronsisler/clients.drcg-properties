import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import type { AppState } from "./store";

export interface CustomerState {
  givenName: string;
}

const initialState: CustomerState = {
  givenName: "",
};

const address = {
  addressLine1: "123 Main Street",
  locality: "Holly Springs",
  administrativeDistrictLevel1: "NC",
  postalCode: "27540",
};

const customerInfo = {
  givenName: "Johnny",
  familyName: "Appleseed",
  companyName: "Place on the third floor",
  emailAddress: "my.email.address@gmail.com",
  phoneNumber: "910-603-0099",
  address,
};

export const customerSlice = createSlice({
  name: "customer",
  initialState,
  reducers: {
    setGivenName: (state, action: PayloadAction<string>) => {
      state.givenName = action.payload;
    },
  },
});

export const { setGivenName } = customerSlice.actions;

export const selectGivenName = (state: AppState) => state.customer.givenName;

export default customerSlice.reducer;
