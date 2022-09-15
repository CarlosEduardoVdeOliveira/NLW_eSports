//1200 -> 12:00

export function convertMinutesToHoursString(minutesAmount: number) {
  const hours = Math.floor(minutesAmount / 60);
  const minutes = minutesAmount % 60;
  return `${hours}:${minutes}`;
}
