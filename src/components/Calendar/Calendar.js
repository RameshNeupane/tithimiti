import { useEffect, useState } from "react";
import Day from "../Day/Day";
import "./Calendar.css";

const Calendar = () => {
  const [data, setData] = useState([]);

  const getData = async () => {
    const response = await fetch("./data/yearwise/2078.json", {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    });
    const { Magh } = await response.json();
    const maghArr = Object.values(Magh);
    // console.log(maghArr.length, typeof maghArr);
    // console.log(maghArr);
    // for (let i of maghArr) {
    //   console.log(i);
    // }
    setData([...maghArr]);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="calendar">
      <div className="cal-header">
        <div className="header-left">Magh 2078</div>
        <div className="header-middle">
          <div>prev next</div>
          <div>Syear Smonth</div>
        </div>
        <div className="header-right">Jan-Feb 2022</div>
      </div>
      <div className="daynames-grid">
        <div className="dayname">Sunday</div>
        <div className="dayname">Monday</div>
        <div className="dayname">Tuesday</div>
        <div className="dayname">Wednesday</div>
        <div className="dayname">Thursday</div>
        <div className="dayname">Friday</div>
        <div className="dayname">Saturday</div>
      </div>
      <div className="day-grid">
        {data.length > 0 &&
          data.map((day) => (
            <Day
              key={day.date_np}
              eventMain={day.event_main}
              extra1={day.extra_1}
              extra2={day.extra_2}
              dateNP={day.date_np}
              dateEN={day.date_en}
              tithi={day.tithi}
              weekday={day.week_day}
            />
          ))}
      </div>
      {/* <Day /> */}
    </div>
  );
};

export default Calendar;
