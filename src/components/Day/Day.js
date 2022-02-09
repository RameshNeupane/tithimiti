import { useEffect, useState } from "react";
import "./Day.css";

const Day = ({ eventMain, extra1, extra2, dateNP, dateEN, tithi, weekday }) => {
  const [weekdayObj, setWeekdayObj] = useState({
    Sun: 1,
    Mon: 2,
    Tue: 3,
    Wed: 4,
    Thu: 5,
    Fri: 6,
    Sat: 7,
  });

  const setDay1Pos = () => {
    if (dateNP === "1") {
      const day1 = document.querySelector(".day");
      day1.style.gridColumnStart = weekdayObj[weekday];
      setWeekdayObj((weekdayObj) => weekdayObj);
    }
  };

  useEffect(() => {
    setDay1Pos();
  });

  return (
    <div className="day">
      <div className="event-main">{eventMain}</div>
      <div className="">{tithi}</div>
      <div className="date">
        <div className="date-np">{dateNP}</div>
        <div className="date-en">{dateEN}</div>
      </div>
      <div className="extra">{extra1}</div>
      <div className="extra">{extra2}</div>
      <div>{weekday}</div>
    </div>
  );
};

export default Day;
