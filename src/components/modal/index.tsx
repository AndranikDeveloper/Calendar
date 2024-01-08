import React, { SetStateAction, useContext } from "react";
import style from "./style.module.css";
import { setOccasion } from "../../utils/month-services";
import { IDatesState } from "../../types/dates-types";
import useModalData from "./hooks/useModalData";
import { IOccasionState } from "../month/hooks/useMonthDays";
import WithoutOccasion from "./without-occasion";
import CurrentOccasion from "./current-occasion";
import { OccasionDays } from "../month";

interface IModalProps {
  setIsModal: React.Dispatch<SetStateAction<boolean>>;
  date: IDatesState | undefined;
  isExist: boolean;
  setIsExist: React.Dispatch<SetStateAction<boolean>>;
  currentOccasionDate: IOccasionState | null;
}

const Modal: React.FC<IModalProps> = ({
  setIsModal,
  date,
  isExist,
  setIsExist,
  currentOccasionDate,
}) => {
  const {
    colors,
    currentColor,
    occasionValue,
    setCurrentColor,
    setOccasionValue,
    inputRef,
  } = useModalData(isExist, currentOccasionDate);

  const occasion = useContext(OccasionDays);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setOccasion(
      date,
      occasion?.currentDay as number,
      occasionValue as string,
      currentColor
    );
    setIsModal(false);
    setOccasionValue("");
  }

  function handleModal() {
    setIsModal(false);
    setIsExist(false);
  }

  return (
    <div className={style.modal}>
      <div className={style.background} onClick={handleModal}></div>
      <form className={style["modal-content"]} onSubmit={handleSubmit}>
        <input
          ref={inputRef}
          type="text"
          value={occasionValue}
          className={style["modal-input"]}
          onChange={(e) => setOccasionValue(e.target.value)}
          placeholder="Name of Occasion"
          required
        />
        {isExist ? (
          <CurrentOccasion
            occasionValue={occasionValue as string}
            currentOccasionDate={currentOccasionDate}
            inputRef={inputRef}
            setIsModal={setIsModal}
          />
        ) : (
          <WithoutOccasion colors={colors} setCurrentColor={setCurrentColor} />
        )}
      </form>
    </div>
  );
};

export default Modal;
