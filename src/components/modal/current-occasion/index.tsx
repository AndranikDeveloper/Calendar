import React, {
  MutableRefObject,
  SetStateAction,
  forwardRef,
  useContext,
  useState,
} from "react";
import { IOccasionState } from "../../month/hooks/useMonthDays";
import style from "../style.module.css";
import {
  deleteOccasion,
  editOccasionValue,
  saveOccasionValue,
} from "../../../utils/modal-services";
import { OccasionDays } from "../../month";

interface ICurrentOccasionProps {
  occasionValue: string;
  currentOccasionDate: IOccasionState | null;
  inputRef: MutableRefObject<HTMLInputElement | null>;
  setIsModal: React.Dispatch<SetStateAction<boolean>>;
}

const CurrentOccasion: React.FC<ICurrentOccasionProps> = forwardRef(
  ({ occasionValue, currentOccasionDate, inputRef, setIsModal }) => {
    const [isEdit, setIsEdit] = useState(false);
    const occasion = useContext(OccasionDays);

    return (
      <div className={style.buttons}>
        {isEdit ? (
          <button
            type="button"
            onClick={() =>
              saveOccasionValue(occasionValue, currentOccasionDate, setIsModal)
            }
          >
            Save
          </button>
        ) : (
          <>
            <button
              type="button"
              className={style["feature-button"]}
              onClick={() => editOccasionValue(setIsEdit, inputRef)}
            >
              Edit
            </button>
            <button
              type="button"
              className={style["feature-button"]}
              onClick={() =>
                deleteOccasion(
                  currentOccasionDate!.id as number,
                  setIsModal,
                  occasion?.occasionDays,
                  occasion?.currentDay
                )
              }
            >
              Delete
            </button>
          </>
        )}
      </div>
    );
  }
);

export default CurrentOccasion;
