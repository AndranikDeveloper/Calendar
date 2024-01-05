export function helper(dates: number[] | null[], day: number) {
  console.log('helper', dates, day);
  try {
    dates?.splice(0, 0, ...Array(day - 1).fill(null));

    const result = [];
    for (let i = 0; i < dates?.length; i += 7) {
      const weekDaysArr = dates?.slice(i, i + 7);
      result.push(weekDaysArr);
    }

    return result;
  } catch (error: unknown) {
    throw new Error(error as string);
  }
}
