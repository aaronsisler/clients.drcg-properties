import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { CustomerAddress } from "../models/customer";

import type { AppState } from "./store";

export interface CustomerState {
  firstName: string;
  lastName: string;
  companyName: string;
  emailAddress: string;
  phoneNumber: string;
  address: CustomerAddress;
}

const initialState: CustomerState = {
  firstName: "",
  lastName: "",
  companyName: "123",
  emailAddress: "",
  phoneNumber: "",
  address: {
    addressLine1: "123",
    addressLine2: "",
    city: "123",
    state: "NC",
    postalCode: "123",
  },
};

export const customerSlice = createSlice({
  name: "customer",
  initialState,
  reducers: {
    setFirstName: (state, action: PayloadAction<string>) => {
      state.firstName = action.payload;
    },
    setLastName: (state, action: PayloadAction<string>) => {
      state.lastName = action.payload;
    },
    setCompanyName: (state, action: PayloadAction<string>) => {
      state.companyName = action.payload;
    },
    setEmailAddress: (state, action: PayloadAction<string>) => {
      state.emailAddress = action.payload;
    },
    setPhoneNumber: (state, action: PayloadAction<string>) => {
      state.phoneNumber = action.payload;
    },
    setAddressLine1: (state, action: PayloadAction<string>) => {
      state.address.addressLine1 = action.payload;
    },
    setAddressLine2: (state, action: PayloadAction<string>) => {
      state.address.addressLine2 = action.payload;
    },
    setCity: (state, action: PayloadAction<string>) => {
      state.address.city = action.payload;
    },
    setState: (state, action: PayloadAction<string>) => {
      state.address.state = action.payload;
    },
    setPostalCode: (state, action: PayloadAction<string>) => {
      state.address.postalCode = action.payload;
    },
  },
});

export const {
  setFirstName,
  setLastName,
  setCompanyName,
  setEmailAddress,
  setPhoneNumber,
  setAddressLine1,
  setAddressLine2,
  setCity,
  setState,
  setPostalCode,
} = customerSlice.actions;

export const selectFirstName = (state: AppState) => state.customer.firstName;
export const selectLastName = (state: AppState) => state.customer.lastName;
export const selectCompanyName = (state: AppState) =>
  state.customer.companyName;
export const selectEmailAddress = (state: AppState) =>
  state.customer.emailAddress;
export const selectPhoneNumber = (state: AppState) =>
  state.customer.phoneNumber;
export const selectAddressLine1 = (state: AppState) =>
  state.customer.address.addressLine1;
export const selectAddressLine2 = (state: AppState) =>
  state.customer.address.addressLine2;
export const selectCity = (state: AppState) => state.customer.address.city;
export const selectState = (state: AppState) => state.customer.address.state;
export const selectPostalCode = (state: AppState) =>
  state.customer.address.postalCode;

export default customerSlice.reducer;
