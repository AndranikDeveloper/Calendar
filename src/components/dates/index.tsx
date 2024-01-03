import { useEffect, useState } from 'react';
import style from './days.module.css';
import { IDatesState } from '../../types/dates-types';
import { currentMonth, daysOfWeek, getDatesData } from './services';
import { Month } from '../month';

export const Dates = () => {
  const [dates, setDates] = useState<IDatesState[]>();
  const [currentDate, setCurrentDate] = useState<IDatesState>();
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

  console.log(dates, currentDate);

  return (
    <div className={style.dates}>
      <h1>{currentMonth}</h1>
      <table className={style.table}>
        <thead className={style.title}>
          <tr className={style.row}>
            {daysOfWeek.map((day, idx) => (
              <th className={style.day} key={idx}>
                {day}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className={style['table-body']}>
          <Month date={currentDate!} />
        </tbody>
      </table>
    </div>
  );
};
