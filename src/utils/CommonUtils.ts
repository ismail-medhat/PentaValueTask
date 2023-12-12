// CommonUtils.ts

// Function to check if a value is empty (null, undefined, or an empty string)
export const isEmpty = (value: any): boolean => {
  return value === null || value === undefined || value === "";
};

// Function to capitalize the first letter of a string
export const capitalizeFirstLetter = (text: string): string => {
  return text.charAt(0).toUpperCase() + text.slice(1);
};

// Function to format a number with commas (e.g., 1000 -> 1,000)
export const formatNumberWithCommas = (number: number): string => {
  return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
};
