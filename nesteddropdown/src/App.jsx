import "./App.css";
import DropDown from "./components/DropDown/DropDown";
import { data } from "./data/content.json";

function App() {
  return (
    <>
      <div className="main">
        <DropDown data={data} />
      </div>
    </>
  );
}

export default App;
