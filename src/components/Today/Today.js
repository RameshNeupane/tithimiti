import { useState } from "react";
import "./Today.css";

const Today = () => {
  const today = new Date();
  const [year, setYear] = useState(today.getFullYear());

  const monthList = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  // const numMonth = today.getMonth();
  const [strMonth, setStrMonth] = useState();
  const [dayOfMonth, setDayOfMonth] = useState();

  const daysofWeek = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  // const numDayOfWeek = today.getDay();
  const [strDayOfWeek, setStrDayOfWeek] = useState();

  const [hour, setHour] = useState();
  const [minute, setMinute] = useState();
  const [second, setSecond] =
    useState();
    // async () => await addZeroPrefix(today.getSeconds())
  const [ampm, setAmPm] = useState();

  const updateDateAndTime = () => {
    const cDate = new Date();
    updateSecond(cDate.getSeconds());
    updateMinute(cDate.getMinutes());
    updateHour(cDate.getHours());
    updateDayOfWeek(cDate.getDay());
    updateDayOfMonth(cDate.getDate());
    updateMonth(cDate.getMonth());
    updateYear(cDate.getFullYear());
  };
  setInterval(updateDateAndTime, 1000);

  const addZeroPrefix = (value) => {
    if (value < 10) {
      value = `0${value}`;
    }
    return value;
  };
  const updateSecond = (cSec) => {
    // if (cSec < 10) {
    //   cSec = `0${cSec}`;
    // }
    cSec = addZeroPrefix(cSec);
    setSecond(cSec);
  };

  const updateMinute = (cMin) => {
    // if (cMin < 10) {
    //   cMin = `0${cMin}`;
    // }
    cMin = addZeroPrefix(cMin);
    setMinute(cMin);
  };

  const updateHour = (cHour) => {
    let cAmPm = "";
    if (cHour < 12) {
      cAmPm = "AM";
    } else {
      cAmPm = "PM";
    }

    cHour = cHour % 12;
    if (cHour === 0) {
      cHour = 12;
    }

    // if (cHour < 10) {
    //   cHour = `0${cHour}`;
    // }
    cHour = addZeroPrefix(cHour);
    setAmPm(cAmPm);
    setHour(cHour);
  };

  const updateDayOfWeek = (cNumDayOfWeek) => {
    const cStrDayOfWeek = daysofWeek[cNumDayOfWeek];
    setStrDayOfWeek(cStrDayOfWeek);
  };

  const updateDayOfMonth = (cDayOfMonth) => {
    // if (cDayOfMonth < 10) {
    //   cDayOfMonth = `0${cDayOfMonth}`;
    // }
    cDayOfMonth = addZeroPrefix(cDayOfMonth);
    setDayOfMonth(cDayOfMonth);
  };

  const updateMonth = (cNumMonth) => {
    const cStrMonth = monthList[cNumMonth];
    setStrMonth(cStrMonth);
  };

  const updateYear = (cYear) => {
    setYear(cYear);
  };

  return (
    <div className="today">
      {second && (
        <div className="date-time">
          <div className="date">
            {dayOfMonth} {strMonth} {year}
          </div>
          <div className="time">
            {hour}:{minute}:{second} {ampm}
          </div>
          <div className="week-day">{strDayOfWeek}</div>
        </div>
      )}
    </div>
  );
};

export default Today;
