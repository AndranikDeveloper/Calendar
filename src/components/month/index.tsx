import React from 'react';
import { IDatesState } from '../../types/dates-types';
import useMonthDays from './hooks/useMonthDays';
import style from './style.module.css';
import Modal from '../modal';
import { createPortal } from 'react-dom';

interface IMonthProps {
  date?: IDatesState;
}

export const Month: React.FC<IMonthProps> = ({ date }) => {
  const { days, currentDay, setCurrentDay, isModal, setIsModal, occasionDays } =
    useMonthDays({ date });

  function toggleModal(dayNumber: number | null) {
    setIsModal((prev) => !prev);
    setCurrentDay(dayNumber!);
  }

  const isOccasion = occasionDays?.find((el) => el.month === date?.month);

  return (
    <>
      {days?.map((day, idx) => (
        <tr key={idx}>
          {day?.map((number, idx) => (
            <td
              key={idx}
              className={`${style.day}`}
              onClick={() => toggleModal(number)}
              style={
                isOccasion && number === isOccasion.day
                  ? {
                      backgroundColor: isOccasion.occasionState.color,
                    }
                  : {}
              }
            >
              {number}
            </td>
          ))}
        </tr>
      ))}
      {isModal &&
        createPortal(
          <Modal setIsModal={setIsModal} date={date} currentDay={currentDay} />,
          document.getElementById('modal-root') as HTMLDivElement
        )}
    </>
  );
};
