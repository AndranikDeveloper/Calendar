import { IDatesState } from '../types/dates-types';
import { v4 } from 'uuid';

export function helper(date: IDatesState | undefined) {
  const day = new Date(`${date?.month} 1 2024`).getDay();
  try {
    if (date) {
      const newArr = structuredClone(date?.dates);
      newArr.splice(0, 0, ...Array(day ? day - 1 : 6).fill(null));

      const result = [];
      for (let i = 0; i <= newArr.length; i += 7) {
        const weekDaysArr = newArr.slice(i, i + 7);
        result.push(weekDaysArr);
      }

      return result;
    }
  } catch (error: unknown) {
    throw new Error(error as string);
  }
}

export async function setOccasion(
  date: IDatesState | undefined,
  day: number | null,
  name: string,
  currentColor: Record<string, string> | undefined = {
    color: 'yellow',
    value: 'poor',
  }
) {
  const occasionDate = {
    id: v4(),
    name: name,
    day: day,
    month: date?.month,
    occasionState: currentColor,
  };

  await fetch('http://localhost:9999/specialDays', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(occasionDate),
  });
}
