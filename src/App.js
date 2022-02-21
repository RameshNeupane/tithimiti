import "./App.css";
import Calendar from "./components/Calendar/Calendar";
import Today from "./components/Today/Today";

function App() {
  return (
    <div className="App">
      <h1 className="title">
        <span className="title-np">तिथिमिती</span> | <span>tithimiti</span>
      </h1>

      <Today />
      <Calendar />

      <div className="source-link">
        <a
          rel="noreferrer"
          href="https://github.com/RameshNeupane/tithimiti"
          target="_blank"
        >
          <h1>Source code in Github</h1>
        </a>
      </div>
    </div>
  );
}

export default App;
