import { IDatesState } from "../types/dates-types";

export function helper(date: IDatesState) {
  const day = new Date(`${date?.month} 1 2024`).getDay();
  try {
    const newArr = structuredClone(date?.dates);
    newArr?.splice(0, 0, ...Array(day ? day - 1 : 6).fill(null));

    const result = [];
    for (let i = 0; i <= newArr?.length; i += 7) {
      const weekDaysArr = newArr?.slice(i, i + 7);
      result.push(weekDaysArr);
    }

    return result;
  } catch (error: unknown) {
    throw new Error(error as string);
  }
}

export async function setOccasion(
  date: IDatesState,
  day: number | null,
  name: string,
  currentColor: Record<string, string> | undefined
) {
  const month = date.month;
  const occasionDate = {
    month,
    day,
    name,
    currentColor,
  };
  await fetch("http://localhost:9999/specialDays", {
    method: "POST",
    body: JSON.stringify(occasionDate),
    headers: {
      "Content-Type": "application/json",
    },
  });
}
