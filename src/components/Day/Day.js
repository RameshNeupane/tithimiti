import "./Day.css";

// const Day = ({ eventMain, extra1, extra2, dateNP, dateEN, tithi }) => {
//   return (
//     <>
//       <div>dateNP: {dateNP}</div>
//       <div>dateEN: {dateEN}</div>
//       <div>tithi: {tithi}</div>
//       <div>eventMain: {eventMain}</div>
//       <div>extra1: {extra1}</div>
//       <div>extra2 : {extra2}</div>
//       <br />
//     </>
//   );
// };

const Day = ({ eventMain, extra1, extra2, dateNP, dateEN, tithi }) => {
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
