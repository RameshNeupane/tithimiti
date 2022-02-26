import { useEffect, useState } from "react";
import NepaliDate from "nepali-date-converter";

import {
  FaAngleDoubleLeft,
  FaAngleDoubleRight,
  FaAngleLeft,
  FaAngleRight,
  FaCalendarAlt,
  FaSearch,
} from "react-icons/fa";

const CalendarHeader = ({ fetchData }) => {
  const years = [
    2000, 2001, 2002, 2003, 2004, 2005, 2006, 2007, 2008, 2009, 2010, 2011,
    2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020, 2021, 2022, 2023,
    2024, 2025, 2026, 2027, 2028, 2029, 2030, 2031, 2032, 2033, 2034, 2035,
    2036, 2037, 2038, 2039, 2040, 2041, 2042, 2043, 2044, 2045, 2046, 2047,
    2048, 2049, 2050, 2051, 2052, 2053, 2054, 2055, 2056, 2057, 2058, 2059,
    2060, 2061, 2062, 2063, 2064, 2065, 2066, 2067, 2068, 2069, 2070, 2071,
    2072, 2073, 2074, 2075, 2076, 2077, 2078, 2079,
  ];

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

  const monthMap = {
    Baishakh: "Apr-May",
    Jestha: "May-Jun",
    Ashadh: "Jun-Jul",
    Shrawan: "Jul-Aug",
    Bhadra: "Aug-Sep",
    Ashwin: "Sep-Oct",
    Kartik: "Oct-Nov",
    Mangsir: "Nov-Dec",
    Poush: "Dec-Jan",
    Magh: "Jan-Feb",
    Falgun: "Feb-Mar",
    Chaitra: "Mar-Apr",
  };

  const dateNP = new NepaliDate();
  const currentYear = dateNP.getYear();
  const currentMonth = months[dateNP.getMonth()];

  const [year, setYear] = useState(currentYear);
  const [month, setMonth] = useState(currentMonth);

  const [selectedYear, setSelectedYear] = useState(year);
  const [selectedMonth, setSelectedMonth] = useState(month);

  const dateEN = new NepaliDate(year, months.indexOf(month), 18).getAD();

  useEffect(() => {
    fetchData(year, month);
    setSelectedYear(year);
    setSelectedMonth(month);
    // eslint-disable-next-line
  }, [year, month]);

  const getPrevMonth = () => {
    if (String(year) === String(years[0]) && month === "Baishakh") {
      setMonth(month);
      setYear((year) => parseInt(year));
    } else if (month === "Baishakh") {
      setMonth("Chaitra");
      setYear((year) => year - 1);
    } else {
      const m = months.indexOf(month);
      setMonth(months[m - 1]);
      setYear(year);
    }
    setSelectedYear(year);
    setSelectedMonth(month);
  };

  const getNextMonth = () => {
    if (
      String(year) === String(years[years.length - 1]) &&
      month === "Chaitra"
    ) {
      setMonth(month);
      setYear((year) => parseInt(year));
    } else if (month === "Chaitra") {
      setMonth("Baishakh");
      setYear((year) => year + 1);
    } else {
      const m = months.indexOf(month);
      setMonth(months[m + 1]);
      setYear(year);
    }
    setSelectedYear(year);
    setSelectedMonth(month);
  };

  const handlePrevYear = () => {
    if (String(year) === String(years[0])) {
      setYear(parseInt(year));
    } else {
      setYear(parseInt(year) - 1);
    }
  };

  const hanldePrevMonth = () => {
    getPrevMonth();
  };

  const handleToday = () => {
    setYear(currentYear);
    setMonth(currentMonth);
  };

  const handleNextMonth = () => {
    getNextMonth();
  };

  const handleNextYear = () => {
    if (String(year) === String(years[years.length - 1])) {
      setYear(parseInt(year));
    } else {
      setYear(parseInt(year) + 1);
    }
  };

  const getYearDropdown = () => {
    const options = [];
    for (const year of years) {
      options.push(
        <option key={year} value={year}>
          {year}
        </option>
      );
    }
    return options;
  };

  const getMonthsDropdown = () => {
    const options = [];
    for (const month of months) {
      options.push(
        <option key={month} value={month}>
          {month}
        </option>
      );
    }
    return options;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setYear(selectedYear);
    setMonth(selectedMonth);
  };

  return (
    <div className="cal-header">
      <div className="header-left">
        {month} {year}
      </div>

      <div className="header-middle">
        <div className="prev-today-next">
          <div
            className="cal-prev-year"
            onClick={handlePrevYear}
            title="Previous Year"
          >
            <FaAngleDoubleLeft />
          </div>

          <div
            className="cal-prev-month"
            onClick={hanldePrevMonth}
            title="Previous Month"
          >
            <FaAngleLeft />
          </div>

          <div
            className="cal-today"
            onClick={handleToday}
            title={`${currentMonth} ${currentYear}`}
          >
            <FaCalendarAlt />
          </div>

          <div
            className="cal-next-month"
            onClick={handleNextMonth}
            title="Next Month"
          >
            <FaAngleRight />
          </div>

          <div
            className="cal-next-year"
            onClick={handleNextYear}
            title="Next Year"
          >
            <FaAngleDoubleRight />
          </div>
        </div>

        <div className="select-date">
          <form action="/" method="post" onSubmit={handleSubmit}>
            <select
              name="year"
              id="year"
              value={selectedYear}
              onChange={(e) => setSelectedYear(e.target.value)}
            >
              {years.length > 0 && getYearDropdown()}
            </select>

            <select
              name="month"
              id="month"
              value={selectedMonth}
              onChange={(e) => setSelectedMonth(e.target.value)}
            >
              {months.length > 0 && getMonthsDropdown()}
            </select>

            <button type="submit" className="btn-submit">
              <FaSearch />
            </button>
          </form>
        </div>
      </div>

      <div className="header-right">
        {monthMap[month]} {dateEN.year}
      </div>
    </div>
  );
};

export default CalendarHeader;
