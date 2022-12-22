import "./App.css";
import Merch from "./Merch";
import Ref from "./Ref";
import Home from "./Home";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/merch" element={<Merch />} />
      <Route path="/ref-links" element={<Ref />} />
    </Routes>
  );
}

export default App;
