import { Route, Routes } from "react-router-dom";
import "./App.css";
import Store from "./Components/Store";
import Team from "./Components/Team";

function App() {
  return (
    <>
      <div className="mainScreen">
        <Routes>
          <Route exact path="/teams" element={<Team />} />
          <Route exact path="/store" element={<Store />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
