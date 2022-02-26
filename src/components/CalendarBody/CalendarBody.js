import Day from "../Day/Day";

const CalendarBody = ({ data }) => {
  const weekDayEN = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  const displayWeekDay = () => {
    const divs = [];
    for (const day of weekDayEN) {
      divs.push(
        <div key={day} className="dayname">
          {day}
        </div>
      );
    }
    return divs;
  };

  return (
    <>
      <div className="daynames-grid">
        {weekDayEN.length > 0 && displayWeekDay()}
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
    </>
  );
};

export default CalendarBody;
