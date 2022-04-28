export interface CustomerAddress {
  addressLine1: string;
  locality: string;
  administrativeDistrictLevel1: string;
  postalCode: string;
}

export interface CustomerInfo {
  givenName: string;
  familyName: string;
  companyName: string;
  emailAddress: string;
  phoneNumber: string;
  address: CustomerAddress;
}
