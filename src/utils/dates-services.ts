import { IDatesState } from "../types/dates-types";

export const url = "http://localhost:9999";

const date = new Date();
export const currentMonth = date.toLocaleString("default", { month: "long" });

export const daysOfWeek = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday",
];

export const getDatesData = async () => {
  const resp = await fetch(`${url}/months`);
  const data = await resp.json();
  return data;
};

export const getCurrentDate = async () => {
  const resp = await fetch(
    `http://localhost:9999/months?month=${currentMonth}`
  );
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

const result = getDayOfWeek("January", 3);
console.log(result);

// ---------NEXT-AND-PREV-MONTH-----------------------------------------------------------------------------------------------------------------------

export function nextMonth(
  setCurrentDate: React.Dispatch<React.SetStateAction<IDatesState | undefined>>,
  dates: IDatesState[] | undefined,
  currentDate: IDatesState | undefined
) {
  try {
    if (dates && currentDate) {
      const nextMonthData = dates.indexOf(currentDate) + 1;
      setCurrentDate(dates[nextMonthData]);
    }
  } catch (error: unknown) {
    throw new Error(error as string);
  }
}

export function prevMonth(
  setCurrentDate: React.Dispatch<React.SetStateAction<IDatesState | undefined>>,
  dates: IDatesState[] | undefined,
  currentDate: IDatesState | undefined
) {
  try {
    if (dates && currentDate) {
      const nextMonthData = dates.indexOf(currentDate) - 1;
      setCurrentDate(dates[nextMonthData]);
    }
  } catch (error: unknown) {
    throw new Error(error as string);
  }
}
