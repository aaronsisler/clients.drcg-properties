import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import type { AppState } from "./store";

export interface CustomerState {
  firstName: string;
}

const initialState: CustomerState = {
  firstName: "",
};

const address = {
  addressLine1: "123 Main Street",
  addressLine2: "Suite 456",
  city: "Holly Springs",
  state: "NC",
  postalCode: "27540",
};

const customerInfo = {
  firstName: "Johnny",
  lastName: "Appleseed",
  companyName: "Place on the third floor",
  emailAddress: "my.email.address@gmail.com",
  phoneNumber: "910-603-0099",
  address,
};

export const customerSlice = createSlice({
  name: "customer",
  initialState,
  reducers: {
    setFirstName: (state, action: PayloadAction<string>) => {
      state.firstName = action.payload;
    },
  },
});

export const { setFirstName } = customerSlice.actions;

export const selectFirstName = (state: AppState) => state.customer.firstName;

export default customerSlice.reducer;
