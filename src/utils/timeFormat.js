export const timeFormat = (minutes) => {
  const min = minutes % 60;
  const hour = Math.floor(minutes / 60);
  return hour ? `${hour}ч ${min}м` : `${min}м`;
};