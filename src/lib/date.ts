const MONTH_NAMES = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];

function formatMonthYear(date: string): string {
  const [year, month] = date.split("-");
  return `${MONTH_NAMES[Number(month) - 1]} ${year}`;
}

export function formatDateRange(startDate: string, endDate: string | null): string {
  const start = formatMonthYear(startDate);
  const end = endDate ? formatMonthYear(endDate) : "Present";
  return start === end ? start : `${start} – ${end}`;
}
