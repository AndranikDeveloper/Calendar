import React, { SetStateAction } from 'react';
import style from './style.module.css';
import { setOccasion } from '../../utils/month-services';
import { IDatesState } from '../../types/dates-types';
import useModalData from './hooks/useModalData';

interface IModalProps {
  setIsModal: React.Dispatch<SetStateAction<boolean>>;
  date: IDatesState | undefined;
  currentDay: number | null;
}

const Modal: React.FC<IModalProps> = ({ setIsModal, date, currentDay }) => {
  const { colors, currentColor, nameValue, setCurrentColor, setNameValue } =
    useModalData();

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setOccasion(date, currentDay, nameValue, currentColor);
    setIsModal(false);
    setNameValue('');
  }
  return (
    <div className={style.modal}>
      <div className={style.background} onClick={() => setIsModal(false)}></div>
      <form className={style['modal-content']} onSubmit={handleSubmit}>
        <input
          type='text'
          value={nameValue}
          className={style['modal-input']}
          onChange={(e) => setNameValue(e.target.value)}
          placeholder='Name of Occasion'
          required
        />
        <select className={style['modal-select']}>
          {colors.map((i) => (
            <option key={i.color} onClick={() => setCurrentColor(i)}>
              {i.color} ---- {i.value}
            </option>
          ))}
        </select>

        <button className={style['modal-button']}>Add Occasion</button>
      </form>
    </div>
  );
};

export default Modal;
