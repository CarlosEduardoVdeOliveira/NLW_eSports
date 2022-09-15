// "12:00" -> ["12", "00"] -> [12, 0]
export function convertHoursStringToMinutes(hourString: string) {
  const [hours, minutes] = hourString.split(":").map(Number);
}
