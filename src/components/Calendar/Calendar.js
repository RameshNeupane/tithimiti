import { useState } from "react";

import CalendarBody from "../CalendarBody/CalendarBody";
import CalendarHeader from "../CalendarHeader/CalendarHeader";
import "./Calendar.css";

const Calendar = () => {
  const [data, setData] = useState([]);

  const fetchData = async (year, month) => {
    const response = await fetch(`./data/yearwise/${year}.json`, {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    });
    const data = await response.json();
    const monthArr = Object.values(data[month]);
    setData([...monthArr]);
  };

  return (
    <div className="calendar">
      <CalendarHeader fetchData={fetchData} />
      <hr />
      <CalendarBody data={data} />
    </div>
  );
};

export default Calendar;
