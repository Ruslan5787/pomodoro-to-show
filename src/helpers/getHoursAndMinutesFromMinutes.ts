export const getHoursAndMinutesFromMinutes = (time: number) => {
  if (time >= 75) {
    const hours = Math.trunc(time / 60);
    const minutes = time % 60;

    return `${hours}ч ${minutes}мин`;
  }

  return `${time} мин`;
};
