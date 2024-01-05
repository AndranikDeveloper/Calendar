import React from 'react';
import { IDatesState } from '../../types/dates-types';
import useMonthDays from './hooks/useMonthDays';
import style from './month.module.css';

interface IMonthProps {
  date?: IDatesState;
}

export const Month: React.FC<IMonthProps> = ({ date }) => {
  const { days } = useMonthDays({ date });

  return (
    <>
      {days?.map((day, idx) => (
        <tr key={idx}>
          {day?.map((number, idx) => (
            <td key={idx} className={style.day}>
              {number}
            </td>
          ))}
        </tr>
      ))}
    </>
  );
};
