import style from "./style.module.css";
import { daysOfWeek, nextMonth, prevMonth } from "../../utils/dates-services";
import { Month } from "../month";
import { MdKeyboardArrowRight } from "react-icons/md";
import { MdKeyboardArrowLeft } from "react-icons/md";
import useDates from "./hooks/useDates";

export const Dates = () => {
  const { currentDate, isDisabled, setCurrentDate, dates } = useDates();

  return (
    <>
      <div className={style.arrows}>
        <button
          className={style.wrrapButton}
          disabled={isDisabled.back}
          onClick={() => prevMonth(setCurrentDate, dates, currentDate)}
        >
          <MdKeyboardArrowLeft className={style.arrow} />
        </button>
        <button
          className={style.wrrapButton}
          disabled={isDisabled.next}
          onClick={() => nextMonth(setCurrentDate, dates, currentDate)}
        >
          <MdKeyboardArrowRight className={style.arrow} />
        </button>
      </div>
      <div className={style.dates}>
        <h1>{currentDate?.month}</h1>
        <table className={style.table}>
          <thead className={style.title}>
            <tr className={style.row}>
              {daysOfWeek.map((day, idx) => (
                <th className={style.day} key={idx}>
                  {day}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className={style["table-body"]}>
            {currentDate && <Month date={currentDate} />}
          </tbody>
        </table>
      </div>
    </>
  );
};
