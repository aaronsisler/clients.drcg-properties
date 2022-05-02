import axios from "axios";

import {
  SERVICES_GATEWAY_URL,
  PAYMENT_CONFIG_TOKEN_CLIENT_NAME,
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
