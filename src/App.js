import "./App.css";
import Ref from "./pages/ref-links/Ref";
import Home from "./pages/home/Home";
import { Route, Routes, BrowserRouter } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/ref-links" element={<Ref />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
