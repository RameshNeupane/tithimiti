import "./App.css";
import Calendar from "./components/Calendar/Calendar";
import Today from "./components/Today/Today";

function App() {
  return (
    <div className="App">
      <h1 className="title">tithimiti</h1>
      <Today />
      <Calendar />
    </div>
  );
}

export default App;
