import { useEffect, useState } from "react";
import Day from "../Day/Day";
import "./Calendar.css";

const Calendar = () => {
  const [data, setData] = useState([]);

  // const start_year = 1970;
  // const end_year = 2079;
  const years = [
    1970, 1971, 1972, 1973, 1974, 1975, 1976, 1977, 1978, 1979, 1980, 1981,
    1982, 1983, 1984, 1985, 1986, 1987, 1988, 1989, 1990, 1991, 1992, 1993,
    1994, 1995, 1996, 1997, 1998, 1999, 2000, 2001, 2002, 2003, 2004, 2005,
    2006, 2007, 2008, 2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017,
    2018, 2019, 2020, 2021, 2022, 2023, 2024, 2025, 2026, 2027, 2028, 2029,
    2030, 2031, 2032, 2033, 2034, 2035, 2036, 2037, 2038, 2039, 2040, 2041,
    2042, 2043, 2044, 2045, 2046, 2047, 2048, 2049, 2050, 2051, 2052, 2053,
    2054, 2055, 2056, 2057, 2058, 2059, 2060, 2061, 2062, 2063, 2064, 2065,
    2066, 2067, 2068, 2069, 2070, 2071, 2072, 2073, 2074, 2075, 2076, 2077,
    2078, 2079,
  ];
  const currentYear = 2078;
  const getYearDropdown = () => {
    const options = [];
    for (const year of years) {
      if (year === currentYear) {
        options.push(
          <option key={year} value={year} selected>
            {year}
          </option>
        );
      } else {
        options.push(
          <option key={year} value={year}>
            {year}
          </option>
        );
      }
    }
    return options;
  };

  const months = [
    "Baishakh",
    "Jestha",
    "Ashadh",
    "Shrawan",
    "Bhadra",
    "Ashwin",
    "Kartik",
    "Mangsir",
    "Poush",
    "Magh",
    "Falgun",
    "Chaitra",
  ];
  const currentMonth = "Magh";
  const getMonthsDropdown = () => {
    const options = [];
    for (const month of months) {
      if (month === currentMonth) {
        options.push(
          <option key={month} value={month} selected>
            {month}
          </option>
        );
      } else {
        options.push(
          <option key={month} value={month}>
            {month}
          </option>
        );
      }
    }
    return options;
  };

  const [year, setYear] = useState(currentYear);
  const [month, setMonth] = useState(currentMonth);

  const getData = async (year = 2078, month = "Magh") => {
    const response = await fetch(`./data/yearwise/${year}.json`, {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    });
    const data = await response.json();
    const monthArr = Object.values(data[month]);
    // console.log(maghArr.length, typeof maghArr);
    // console.log(maghArr);
    // for (let i of maghArr) {
    //   console.log(i);
    // }
    setData([...monthArr]);
  };

  useEffect(() => {
    getData(currentYear, currentMonth);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    getData(year, month);
  };

  return (
    <div className="calendar">
      <div className="cal-header">
        <div className="header-left">Magh 2078</div>
        <div className="header-middle">
          <div className="prev-today-next">
            <div>prev</div>
            <div>today</div>
            <div>next</div>
          </div>
          <div className="select-date">
            <form method="post" onSubmit={handleSubmit}>
              <select
                name="year"
                id="year"
                value={year}
                onChange={(e) => setYear(e.target.value)}
              >
                {years.length > 0 && getYearDropdown()}
              </select>
              <select
                name="month"
                id="month"
                value={month}
                onChange={(e) => setMonth(e.target.value)}
              >
                {months.length > 0 && getMonthsDropdown()}
              </select>
              <button type="submit">Search</button>
            </form>

            <div></div>
          </div>
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
