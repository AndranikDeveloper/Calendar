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

export function findDate(month: string, day: number) {
  console.log(month, day);
}

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
  const dayName = daysOfWeek[dayOfWeek];

  return dayName;
}

const month = 'January';
const day = 2;

const result = getDayOfWeek(month, day);
console.log(result);
