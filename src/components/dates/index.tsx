import { useEffect, useState } from "react";
import style from "./days.module.css";
import { IDatesState } from "../../types/dates-types";
import { currentMonth, daysOfWeek, getDatesData } from "./services";

export const Dates = () => {
  const [dates, setDates] = useState<IDatesState[]>();
  useEffect(() => {
    (async function getDates() {
      const data = await getDatesData();
      setDates(data);
    })();
  }, []);

  console.log(dates);

  return (
    <div className={style.dates}>
      <h1>{currentMonth}</h1>
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
          {Array(5)
            .fill("0")
            .map((_) => (
              <tr>
                {Array(7)
                  .fill("0")
                  .map((i) => (
                    <td>{i}</td>
                  ))}
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
};
