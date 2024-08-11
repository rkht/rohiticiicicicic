import "./App.css";
import { Route, Routes } from "react-router-dom";
import HomeComponents from "./Components/HomeComponents";
import IciciThanks from "./Components/IciciThanks";
import ContentICICI from "./Components/ContentICICI";
import { HashRouter } from "react-router-dom";

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<HomeComponents />} />
        <Route path="/IciciThanks" element={<IciciThanks />} />
        <Route path="/ContentICICI" element={<ContentICICI />} />

      </Routes>
    </HashRouter>
  );
}

export default App;
