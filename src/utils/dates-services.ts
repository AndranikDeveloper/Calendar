import { IDatesState } from '../types/dates-types';

export const url = 'https://62efc7d557311485d128298d.mockapi.io';

const date = new Date();
export const currentMonth = date.toLocaleString('default', { month: 'long' });

export const daysOfWeek = [
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday',
  'Sunday',
];

export const getDatesData = async () => {
  const resp = await fetch(`${url}/months`);
  const data = await resp.json();
  return data;
};

function getDayOfWeek(monthName: string, day: number) {
  const currentDate = new Date(
    `${monthName} ${day}, ${new Date().getFullYear()}`
  );

  const dayOfWeek = currentDate.getDay();
  const dayName = daysOfWeek[dayOfWeek - 1];

  return dayName;
}

const result = getDayOfWeek('January', 4);
console.log(result);

// ---------NEXT-AND-PREV-MONTH-----------------------------------------------------------------------------------------------------------------------

export function nextMonth(
  setCurrentDate: React.Dispatch<React.SetStateAction<IDatesState | undefined>>,
  dates: IDatesState[] | undefined,
  currentDate: IDatesState | undefined
) {
  if (dates && currentDate) {
    const nextMonthData = dates.indexOf(currentDate) + 1;
    setCurrentDate(dates[nextMonthData]);
  }
}

export function prevMonth(
  setCurrentDate: React.Dispatch<React.SetStateAction<IDatesState | undefined>>,
  dates: IDatesState[] | undefined,
  currentDate: IDatesState | undefined
) {
  if (dates && currentDate) {
    const nextMonthData = dates.indexOf(currentDate) - 1;
    setCurrentDate(dates[nextMonthData]);
  }
}
