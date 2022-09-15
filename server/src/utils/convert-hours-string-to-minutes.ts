// "12:00" -> ["12", "00"] -> [12, 0]
export function convertHoursStringToMinutes(hourString: string) {
  const [hours, minutes] = hourString.split(":").map(Number);
  const minutesAmount = hours * 60 + minutes;
  return minutesAmount;
}
