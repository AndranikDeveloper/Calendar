import { useEffect, useState } from "react";
import { IDatesState } from "../../../types/dates-types";
import { currentMonth, getDatesData } from "../../../utils/dates-services";

const useDates = () => {
  const [dates, setDates] = useState<IDatesState[]>();
  const [currentDate, setCurrentDate] = useState<IDatesState>();
  const [isDisabled, setIsDisabled] = useState({
    back: false,
    next: false,
  });

  useEffect(() => {
    if (currentDate?.month === "January") {
      setIsDisabled((prev) => ({ ...prev, back: true }));
    } else if (currentDate?.month === "December") {
      setIsDisabled((prev) => ({ ...prev, next: true }));
    } else {
      setIsDisabled((prev) => ({ ...prev, next: false, back: false }));
    }
  }, [currentDate?.month]);

  useEffect(() => {
    (async function getDates() {
      const data = await getDatesData();
      setDates(data);
    })();
  }, []);

  useEffect(() => {
    const current = dates?.find(
      (date) => date.month.toLowerCase() === currentMonth.toLowerCase()
    );

    setCurrentDate(current);
  }, [dates]);

  return { currentDate, isDisabled, setCurrentDate, dates, setIsDisabled };
};

export default useDates;
