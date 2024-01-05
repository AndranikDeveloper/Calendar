import { useEffect, useState } from "react";
import { IDatesState } from "../../../types/dates-types";
import { getCurrentDate, getDatesData } from "../../../utils/dates-services";

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
    async function getDates() {
      const data = await getDatesData();
      setDates(data);
    }
    getDates();
  }, []);

  useEffect(() => {
    async function getCurrent() {
      const data = await getCurrentDate();
      setCurrentDate(data[0]);
    }
    getCurrent();
  }, []);

  return {
    currentDate,
    isDisabled,
    setCurrentDate,
    dates,
    setIsDisabled,
    setDates,
  };
};

export default useDates;
