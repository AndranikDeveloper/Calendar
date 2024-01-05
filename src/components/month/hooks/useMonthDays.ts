import { useEffect, useState } from "react";
import { helper } from "../../../utils/month-services";
import { IDatesState } from "../../../types/dates-types";

interface IUseMonthDays {
  date: IDatesState;
}

const useMonthDays = ({ date }: IUseMonthDays) => {
  const [days, setDays] = useState<(number[] | null[])[]>();

  useEffect(() => {
    const result = helper(date);
    if (result) {
      setDays(result);
    }
  }, [date]);

  return { days };
};

export default useMonthDays;
