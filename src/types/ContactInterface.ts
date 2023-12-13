// ContactInterface.ts

// Interface for the contacts phone number object
export interface PhoneNumber {
  id: string;
  label: string;
  number: string;
}

// Interface for the contacts object
export interface Contact {
  phoneNumbers: PhoneNumber[];
  isStarred: boolean;
  postalAddresses: any[];
  thumbnailPath: string;
  department: string;
  jobTitle: string;
  emailAddresses: any[];
  urlAddresses: any[];
  suffix: null | string;
  company: string;
  imAddresses: any[];
  note: string;
  middleName: string;
  displayName: string;
  familyName: string;
  givenName: string;
  prefix: null | string;
  hasThumbnail: boolean;
  rawContactId: string;
  recordID: string;
}
