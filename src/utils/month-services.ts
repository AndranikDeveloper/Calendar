export function helper(dates: number[] | null[], day: number) {
  try {
    dates?.splice(0, 0, ...Array(day - 1).fill(null));

    const result = [];
    for (let i = 0; i < dates?.length; i += 7) {
      const weekDaysArr = dates?.slice(i, i + 7);
      result.push(weekDaysArr);
    }

    return result;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (error: any) {
    throw new Error(error);
  }
}
