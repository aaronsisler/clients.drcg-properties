export interface CustomerAddress {
  addressLine1: string;
  addressLine2: string;
  city: string; // locality
  state: string; // administrativeDistrictLevel1
  postalCode: string;
}

export interface Customer {
  firstName: string; // givenName
  lastName: string; // familyName
  companyName: string;
  emailAddress: string;
  phoneNumber: string;
  address: CustomerAddress;
}
