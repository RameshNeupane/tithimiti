import NepaliDate from "nepali-date-converter";
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

  const [strDayOfWeek, setStrDayOfWeek] = useState();

  const [hour, setHour] = useState();
  const [minute, setMinute] = useState();
  const [second, setSecond] = useState();
  const [ampm, setAmPm] = useState();

  // let todayNP = new NepaliDate();
  // todayNP = todayNP.format("ddd DD MMMM YYYY", "np").split(" ");
  // console.log(todayNP);

  const [yearNP, setYearNP] = useState();
  const [monthNP, setMonthNP] = useState();
  const [dayOfMonthNP, setDayOfMonthNP] = useState();
  const [dayOfWeekNP, setDayOfWeekNP] = useState();

  const updateDateAndTime = async () => {
    const cDate = await new Date();
    updateSecond(cDate.getSeconds());
    updateMinute(cDate.getMinutes());
    updateHour(cDate.getHours());
    updateDayOfWeek(cDate.getDay());
    updateDayOfMonth(cDate.getDate());
    updateMonth(cDate.getMonth());
    updateYear(cDate.getFullYear());

    const dateNP = await new NepaliDate().format("ddd DD MMMM YYYY", "np");
    updateDateAndTimeNP(dateNP);
  };
  setInterval(updateDateAndTime, 1000);

  const updateDateAndTimeNP = (date) => {
    date = date.split(" ");
    setYearNP(date[3]);
    setMonthNP(date[2]);
    setDayOfMonthNP(date[1]);
    setDayOfWeekNP(date[0]);
  };

  const addZeroPrefix = (value) => {
    if (value < 10) {
      value = `0${value}`;
    }
    return value;
  };
  const updateSecond = (cSec) => {
    cSec = addZeroPrefix(cSec);
    setSecond(cSec);
  };

  const updateMinute = (cMin) => {
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

    cHour = addZeroPrefix(cHour);
    setAmPm(cAmPm);
    setHour(cHour);
  };

  const updateDayOfWeek = (cNumDayOfWeek) => {
    const cStrDayOfWeek = daysofWeek[cNumDayOfWeek];
    setStrDayOfWeek(cStrDayOfWeek);
  };

  const updateDayOfMonth = (cDayOfMonth) => {
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
          <div className="dateNpEn">
            <div className="dateNP">
              {dayOfMonthNP} {monthNP} {yearNP}
            </div>
            <div className="dateEN">
              {dayOfMonth} {strMonth} {year}
            </div>
          </div>
          <div className="time">
            {hour}:{minute}:{second} {ampm}
          </div>
          <div className="weekday">
            <div className="weekDayNP">{dayOfWeekNP}</div>
            <div className="weekdayEN">{strDayOfWeek}</div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Today;
