import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomeComponents from "./Components/HomeComponents";
import IciciThanks from "./Components/IciciThanks";
import ContentICICI from "./Components/ContentICICI";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomeComponents />} />
        <Route path="/IciciThanks" element={<IciciThanks />} />
        <Route path="/ContentICICI" element={<ContentICICI />} />

      </Routes>
    </Router>
  );
}

export default App;
