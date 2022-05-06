import { createSlice } from "@reduxjs/toolkit";

import type { AppState } from "./store";

// Must match the below for stepper label ordering
export enum WorkflowStep {
  CUSTOMER_CONTACT_INFO,
  CUSTOMER_ADDRESS_INFO,
  PAYMENT_CREDIT_CARD_INFO,
  PAYMENT_SUCCESS,
}

// Must match the above for stepper label ordering
export enum WorkflowStepOrder {
  CUSTOMER_CONTACT_INFO = "Contact",
  CUSTOMER_ADDRESS_INFO = "Address",
  PAYMENT_CREDIT_CARD_INFO = "Payment",
  PAYMENT_SUCCESS = "Success",
}

export interface WorkflowState {
  currentStep: WorkflowStep;
}

const initialState: WorkflowState = {
  currentStep: WorkflowStep.CUSTOMER_CONTACT_INFO,
};

export const workflowSlice = createSlice({
  name: "workflow",
  initialState,
  reducers: {
    decrementCurrentStep: (state) => {
      state.currentStep--;
    },
    incrementCurrentStep: (state) => {
      state.currentStep++;
    },
  },
});

export const { decrementCurrentStep, incrementCurrentStep } =
  workflowSlice.actions;

export const selectCurrentStep = (state: AppState) =>
  state.workflow.currentStep;

export default workflowSlice.reducer;
