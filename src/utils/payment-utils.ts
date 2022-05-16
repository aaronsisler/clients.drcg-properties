import axios from "axios";

import {
  SERVICES_GATEWAY_URL,
  PAYMENT_CONFIG_TOKEN_CLIENT_NAME,
  PAYMENT_CONFIG_TRANSACTION_PERCENTAGE,
  PAYMENT_CONFIG_TRANSACTION_FEE,
} from "../config";
import { Customer } from "../models/customer";

interface PaymentPayload {
  sourceId: string;
  amount: number;
  customerInfo: Customer;
  note: string;
}

const headers = {
  "Content-Type": "application/json",
  "X-Access-Token-Client": PAYMENT_CONFIG_TOKEN_CLIENT_NAME,
};

const options = { headers };

export const submitPayment = async (paymentPayload: PaymentPayload) => {
  await axios.post(`${SERVICES_GATEWAY_URL}/payment`, paymentPayload, options);
};

export const formatPaymentAmount = (amount: string): string => {
  const containsDecimal = amount.includes(".");

  if (containsDecimal) {
    return amount.replace(".", "");
  }

  return amount.concat("00");
};

export const calculatePaymentAmount = (rawAmount: string): string => {
  if (!rawAmount) {
    return "0.00";
  }

  let calculatedAmount: number;

  const amount: number = Number(rawAmount);
  const percAmount: number =
    amount * (1 + PAYMENT_CONFIG_TRANSACTION_PERCENTAGE);
  calculatedAmount = percAmount + PAYMENT_CONFIG_TRANSACTION_FEE;
  calculatedAmount = roundToTwoDecimals(calculatedAmount);

  return String(calculatedAmount);
};

const roundToTwoDecimals = (value: number): number => {
  const power = 10 ** 2;
  return Math.ceil(Number((value * power).toPrecision(15))) / power;
};
