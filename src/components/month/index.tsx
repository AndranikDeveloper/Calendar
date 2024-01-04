import React from 'react';
import { IDatesState } from '../../types/dates-types';

interface IMonthProps {
  date: IDatesState;
}

export const Month: React.FC<IMonthProps> = ({ date }) => {
  return (
    <>
      {Array(5)
        .fill(null)
        .map((_, rowIndex) => (
          <tr key={rowIndex}>
            {Array(7)
              .fill(null)
              .map((_, columnIndex) => {
                const dayIndex = rowIndex * 7 + columnIndex;
                const currentDay = date?.dates[dayIndex];
                const isFirstRow = rowIndex === 0 && columnIndex < 0;

                return (
                  <td key={currentDay}>
                    {isFirstRow ? '' : currentDay ? currentDay : ''}
                  </td>
                );
              })}
          </tr>
        ))}
    </>
  );
};
