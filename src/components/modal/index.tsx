import React, { SetStateAction, useState } from "react";
import style from "./style.module.css";
import { setOccasion } from "../../utils/month-services";
import { IDatesState } from "../../types/dates-types";

interface IModalProps {
  setIsModal: React.Dispatch<SetStateAction<boolean>>;
  date: IDatesState;
  currentDay: number | null;
}

const Modal: React.FC<IModalProps> = ({ setIsModal, date, currentDay }) => {
  const [nameValue, setNameValue] = useState("");
  const [currentColor, setCurrentColor] = useState<Record<string, string>>();
  const [colors, setColors] = useState([
    { color: "purple", value: "poor" },
    { color: "red", value: "important" },
    { color: "yellow", value: "not importance" },
  ]);
  return (
    <div className={style.modal}>
      <div className={style.background} onClick={() => setIsModal(false)}></div>
      <form className={style["modal-content"]}>
        <input
          type="text"
          value={nameValue}
          className={style["modal-input"]}
          onChange={(e) => setNameValue(e.target.value)}
          placeholder="Name of Occasion"
          required
        />
        <select className={style["modal-select"]}>
          {colors.map((i) => (
            <option key={i.color} onClick={() => setCurrentColor(i)}>
              {i.color}
            </option>
          ))}
        </select>

        <button
          className={style["modal-button"]}
          onClick={() => setOccasion(date, currentDay, nameValue, currentColor)}
        >
          Add Occasion
        </button>
      </form>
    </div>
  );
};

export default Modal;
