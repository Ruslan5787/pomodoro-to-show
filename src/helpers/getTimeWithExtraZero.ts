export const getTimeWithExtraZero = (time: number): string => {
  return time.toString().padStart(2, "0");
};
