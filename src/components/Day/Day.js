import { useEffect } from "react";
import NepaliDate from "nepali-date-converter";
import "./Day.css";

const Day = ({ eventMain, extra1, extra2, dateNP, dateEN, tithi, weekday }) => {
  const weekdayObj = {
    Sun: 1,
    Mon: 2,
    Tue: 3,
    Wed: 4,
    Thu: 5,
    Fri: 6,
    Sat: 7,
  };

  const setDay1Pos = () => {
    const day1 = document.querySelectorAll(".day")[0];
    day1.style.gridColumnStart = weekdayObj[weekday];
  };

  const setTodayBackground = () => {
    const todayNP = new NepaliDate().getDate();
    const day = document.querySelectorAll(".day")[todayNP - 1];
    day.style.backgroundColor = `rgba(${50}, ${0}, ${0}, ${0.4})`;
  };

  useEffect(() => {
    setDay1Pos();
    setTodayBackground();
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
    </div>
  );
};

export default Day;
