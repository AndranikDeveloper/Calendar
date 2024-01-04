import { useEffect, useState } from "react";
import { helper } from "../../../utils/month-services";
import { IDatesState } from "../../../types/dates-types";

interface IUseMonthDays {
  date: IDatesState;
}

const useMonthDays = ({ date }: IUseMonthDays) => {
  const [days, setDays] = useState<(number[] | null[])[]>();

  const day = new Date(`${date?.month} 1 2024`).getDay();
  console.log(date?.dates);

  useEffect(() => {
    const result = helper(date?.dates, day);
    if (result) {
      setDays(result);
    }
  }, [date?.dates, day]);

  return { days };
};

export default useMonthDays;
