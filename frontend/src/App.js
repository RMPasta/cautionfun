import "./App.css";
import Ref from "./pages/ref-links/Ref";
import Home from "./pages/home/Home";
import Vault from "./pages/vault/Vault";
import { Route, Routes } from "react-router-dom";
import Header from "./components/header/Header";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/ref-links" element={<Ref />} />
        <Route path="/vault" element={<Vault />} />
      </Routes>
    </>
  );
}

export default App;
