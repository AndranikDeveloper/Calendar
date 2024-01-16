import React, { createContext } from 'react';
import { IDatesState } from '../../types/dates-types';
import useMonthDays, { IOccasionState } from './hooks/useMonthDays';
import style from './style.module.css';
import Modal from '../modal';
import { createPortal } from 'react-dom';

interface IMonthProps {
  date?: IDatesState;
}

interface IOccasionContext {
  currentDay: number | null;
  occasionDays: IOccasionState[] | undefined;
  setOccasionDays: (val: IOccasionState[] | undefined) => void;
}

export const OccasionDays = createContext<IOccasionContext | undefined>(
  undefined
);
export const Month: React.FC<IMonthProps> = ({ date }) => {
  const {
    days,
    currentDay,
    setCurrentDay,
    isModal,
    setIsModal,
    isOccasion,
    isExist,
    setIsExist,
    occasionDays,
    currentOccasionDate,
    setCurrentOccasionDate,
    setOccasionDays,
  } = useMonthDays({ date });

  function toggleModal(dayNumber: number) {
    const currentOccasion = occasionDays?.find(
      (el) => el.month === date?.month && el.day === dayNumber
    );
    console.log('NOR LOG', isOccasion);

    if (currentOccasion) {
      setIsExist((prev) => !prev);
      setIsModal((prev) => !prev);
      setCurrentOccasionDate(currentOccasion);
    } else {
      setIsModal((prev) => !prev);
      setCurrentDay(dayNumber);
    }
  }

  return (
    <>
      {days?.map((day, idx) => (
        <tr key={idx}>
          {day?.map((number, idx) => (
            <td
              key={idx}
              className={`${style.day}`}
              onClick={() => toggleModal(number as number)}
              style={
                isOccasion &&
                number === isOccasion.day &&
                isOccasion.month === date?.month
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
          <OccasionDays.Provider
            value={{ occasionDays, currentDay, setOccasionDays }}
          >
            <Modal
              setIsModal={setIsModal}
              date={date}
              isExist={isExist}
              setIsExist={setIsExist}
              currentOccasionDate={currentOccasionDate}
            />
          </OccasionDays.Provider>,
          document.getElementById('modal-root') as HTMLDivElement
        )}
    </>
  );
};
