import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";

import type { AppState } from "./store";
import {
  calculatePaymentAmount,
  formatPaymentAmount,
  submitPayment,
} from "../utils/payment-utils";

export interface PaymentState {
  calculatedPaymentAmount: string;
  customerInputAmount: string;
  isProcessing: boolean;
  paymentType: string;
}

const initialState: PaymentState = {
  calculatedPaymentAmount: "0.00",
  customerInputAmount: "",
  isProcessing: false,
  paymentType: "",
};

export const paymentSlice = createSlice({
  name: "payment",
  initialState,
  reducers: {
    setCustomerInputAmount: (state, action: PayloadAction<string>) => {
      state.customerInputAmount = action.payload;
    },
    setAmounts: (state, action: PayloadAction<string>) => {
      return {
        ...state,
        customerInputAmount: action.payload,
        calculatedPaymentAmount: calculatePaymentAmount(action.payload),
      };
    },
    setIsProcessing: (state, action: PayloadAction<boolean>) => {
      state.isProcessing = action.payload;
    },
    setPaymentType: (state, action: PayloadAction<string>) => {
      state.paymentType = action.payload;
    },
  },
});

export const {
  setAmounts,
  setCustomerInputAmount,
  setIsProcessing,
  setPaymentType,
} = paymentSlice.actions;

export const submitPaymentAsync = createAsyncThunk(
  "payment/submitPayment",
  async (token: string, { getState }: any) => {
    const appState: AppState = getState();
    const { customer, payment } = appState;
    const { calculatedPaymentAmount, paymentType } = payment;

    const amount = formatPaymentAmount(calculatedPaymentAmount);

    try {
      await submitPayment({
        amount: Number(amount),
        customerInfo: customer,
        note: paymentType,
        sourceId: token,
      });

      return true;
    } catch (e) {
      return false;
    }
  }
);

export const selectCalculatedPaymentAmount = (state: AppState) =>
  state.payment.calculatedPaymentAmount;
export const selectCustomerInputAmount = (state: AppState) =>
  state.payment.customerInputAmount;
export const selectIsProcessing = (state: AppState) =>
  state.payment.isProcessing;
export const selectPaymentType = (state: AppState) => state.payment.paymentType;

export default paymentSlice.reducer;
