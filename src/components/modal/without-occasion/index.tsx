import React, { SetStateAction } from "react";
import style from "../style.module.css";

interface IWithoutOccasionProps {
  colors: { color: string; value: string }[];
  setCurrentColor: React.Dispatch<
    SetStateAction<Record<string, string> | undefined>
  >;
}

const WithoutOccasion: React.FC<IWithoutOccasionProps> = ({
  colors,
  setCurrentColor,
}) => {
  return (
    <>
      <select className={style["modal-select"]}>
        {colors.map((i) => (
          <option key={i.color} onClick={() => setCurrentColor(i)}>
            {i.color} ---- {i.value}
          </option>
        ))}
      </select>

      <button className={style["modal-button"]}>Add Occasion</button>
    </>
  );
};

export default WithoutOccasion;
