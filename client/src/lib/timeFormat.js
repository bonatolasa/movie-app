const timeFormat = (minutes) => {
  const mins = Number(minutes) || 0;
  const hours = Math.floor(mins / 60);
  const minutesRemainder = mins % 60;
  return `${hours}h ${minutesRemainder}m`;
};

export default timeFormat;
