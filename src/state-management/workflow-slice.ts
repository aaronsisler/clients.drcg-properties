import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import type { AppState } from "./store";

export enum WorkflowStep {
  CUSTOMER_CONTACT_INFO,
  CUSTOMER_ADDRESS_INFO,
  // PAYMENT_AMOUNT_INFO,
  PAYMENT_CREDIT_CARD_INFO,
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
