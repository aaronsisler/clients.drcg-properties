import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import type { AppState } from "./store";

export interface WorkflowState {
  currentStep: number;
}

const initialState: WorkflowState = {
  currentStep: 1,
};

export const workflowSlice = createSlice({
  name: "workflow",
  initialState,
  reducers: {
    setCurrentStep: (state, action: PayloadAction<number>) => {
      state.currentStep = action.payload;
    },
  },
});

export const { setCurrentStep } = workflowSlice.actions;

export const selectCurrentStep = (state: AppState) =>
  state.workflow.currentStep;

export default workflowSlice.reducer;
