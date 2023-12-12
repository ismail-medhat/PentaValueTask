import moment from "moment";

// Function to get the current date in a specified format (default: YYYY-MM-DD)
export const getCurrentDate = (format: string = "YYYY-MM-DD"): string => {
  return moment().format(format);
};

// Function to format a date string into a different format
export const formatDate = (date: string, format: string): string => {
  return moment(date).format(format);
};

// Function to calculate the difference between two dates in days
export const calculateDateDifference = (
  startDate: string,
  endDate: string
): number => {
  const startMoment = moment(startDate);
  const endMoment = moment(endDate);
  return endMoment.diff(startMoment, "days");
};

// Function to add days to a given date
export const addDaysToDate = (date: string, daysToAdd: number): string => {
  return moment(date).add(daysToAdd, "days").format("YYYY-MM-DD");
};
