import "./App.css";
import Merch from "./pages/merch/Merch";
import Ref from "./pages/ref-links/Ref";
import Home from "./pages/home/Home";
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
