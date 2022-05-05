import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";

import type { AppState } from "./store";
import { formatPaymentAmount, submitPayment } from "../utils/payment-utils";

export interface PaymentState {
  amount: string;
  paymentType: string;
  isProcessing: boolean;
}

const initialState: PaymentState = {
  amount: "",
  paymentType: "",
  isProcessing: false,
};

export const submitPaymentAsync = createAsyncThunk(
  "payment/submitPayment",
  async (token: string, { getState }: any) => {
    const appState: AppState = getState();
    const { customer, payment } = appState;
    const { amount: rawAmount, paymentType } = payment;

    const amount = formatPaymentAmount(rawAmount);

    try {
      await submitPayment({
        sourceId: token,
        amount: Number(amount),
        note: paymentType,
        customerInfo: customer,
      });

      return true;
    } catch (e) {
      return false;
    }
  }
);

export const paymentSlice = createSlice({
  name: "payment",
  initialState,
  reducers: {
    setAmount: (state, action: PayloadAction<string>) => {
      state.amount = action.payload;
    },
    setIsProcessing: (state, action: PayloadAction<boolean>) => {
      state.isProcessing = action.payload;
    },
    setPaymentType: (state, action: PayloadAction<string>) => {
      state.paymentType = action.payload;
    },
  },
});

export const { setAmount, setIsProcessing, setPaymentType } =
  paymentSlice.actions;

export const selectAmount = (state: AppState) => state.payment.amount;
export const selectPaymentType = (state: AppState) => state.payment.paymentType;
export const selectIsProcessing = (state: AppState) =>
  state.payment.isProcessing;

export default paymentSlice.reducer;
