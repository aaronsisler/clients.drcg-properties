import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";

import type { AppState } from "./store";
import { submitPayment } from "../utils/payment-utils";

export interface PaymentState {
  amount: number | string;
  paymentType: string;
}

const initialState: PaymentState = {
  amount: "",
  paymentType: "",
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

export const submitPaymentAsync = createAsyncThunk(
  "payment/submitPayment",
  async (token: string, { getState }: any) => {
    const appState: AppState = getState();
    const { customer, payment } = appState;
    const { firstName } = customer;
    const { amount, paymentType } = payment;

    return await submitPayment({
      sourceId: token,
      amount: Number(amount),
      note: paymentType,
      customerInfo: {
        ...customerInfo,
        firstName,
      },
    });
  }
);

export const paymentSlice = createSlice({
  name: "payment",
  initialState,
  reducers: {
    setAmount: (state, action: PayloadAction<number>) => {
      state.amount = action.payload;
    },
    setPaymentType: (state, action: PayloadAction<string>) => {
      state.paymentType = action.payload;
    },
  },
});

export const { setAmount, setPaymentType } = paymentSlice.actions;

export const selectAmount = (state: AppState) => state.payment.amount;
export const selectPaymentType = (state: AppState) => state.payment.paymentType;

export default paymentSlice.reducer;
