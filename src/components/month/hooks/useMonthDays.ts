import { useEffect, useState } from 'react';
import { helper } from '../../../utils/month-services';
import { IDatesState } from '../../../types/dates-types';
// import { ISpecialDays } from '../../../types/server-types/special-days-types';

interface IUseMonthDays {
  date: IDatesState | undefined;
}
interface IOccasionState {
  month: string;
  day: number;
  id: number;
  name: string;
  occasionState: {
    color: string;
    value: string;
  };
}

const useMonthDays = ({ date }: IUseMonthDays) => {
  const [days, setDays] = useState<(number[] | null[])[]>();
  const [isModal, setIsModal] = useState(false);
  const [currentDay, setCurrentDay] = useState<number | null>(-1);
  const [occasionDays, setOccasionDays] = useState<IOccasionState[]>();

  useEffect(() => {
    const result = helper(date);
    if (result) {
      setDays(result);
    }
  }, [date]);

  useEffect(() => {
    const getOccasions = async () => {
      const resp = await fetch(`http://localhost:9999/specialDays`);
      const occasionData = await resp.json();
      setOccasionDays(occasionData);
    };
    getOccasions();
  }, []);

  return { days, isModal, setIsModal, currentDay, setCurrentDay, occasionDays };
};

export default useMonthDays;
