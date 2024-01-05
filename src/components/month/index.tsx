import React, { useState } from "react";
import { IDatesState } from "../../types/dates-types";
import useMonthDays from "./hooks/useMonthDays";
import style from "./style.module.css";
import Modal from "../modal";
import { createPortal } from "react-dom";

interface IMonthProps {
  date: IDatesState;
}

export const Month: React.FC<IMonthProps> = ({ date }) => {
  const [isModal, setIsModal] = useState(false);
  const [currentDay, setCurrentDay] = useState<number | null>(-1);
  const { days } = useMonthDays({ date });

  function toggleModal(dayNumber: number | null) {
    setIsModal((prev) => !prev);
    setCurrentDay(dayNumber!);
  }

  return (
    <>
      {days?.map((day, idx) => (
        <tr key={idx}>
          {day?.map((number, idx) => (
            <td
              key={idx}
              className={style.day}
              onClick={() => toggleModal(number)}
            >
              {number}
            </td>
          ))}
        </tr>
      ))}
      {isModal &&
        createPortal(
          <Modal setIsModal={setIsModal} date={date} currentDay={currentDay} />,
          document.getElementById("modal-root") as HTMLDivElement
        )}
    </>
  );
};
