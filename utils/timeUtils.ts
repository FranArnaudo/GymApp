export const calculateDifferenceBetweenTimes = (date1:Date, date2:Date) => {
  const differenceInMilliseconds = date2.getTime() - date1.getTime();

// Convert milliseconds into hours, minutes, and seconds
const hours = Math.floor(differenceInMilliseconds / (1000 * 60 * 60));
const minutes = Math.floor((differenceInMilliseconds % (1000 * 60 * 60)) / (1000 * 60));
const seconds = Math.floor((differenceInMilliseconds % (1000 * 60)) / 1000);

// Format the time difference as HH:mm:ss
// Pad the hours, minutes, and seconds with leading zeros if they are less than 10
return  [
  hours.toString().padStart(2, '0'),
  minutes.toString().padStart(2, '0'),
  seconds.toString().padStart(2, '0'),
].join(':');
}