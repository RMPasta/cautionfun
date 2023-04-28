import "./App.css";
import Ref from "./pages/ref-links/Ref";
import Home from "./pages/home/Home";
import Vault from "./pages/vault/Vault";
import VerusTest from "./pages/verustest/VerusTest";
import IMX from "./components/imx/IMX";
import { Route, Routes } from "react-router-dom";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/ref-links" element={<Ref />} />
        <Route path="/vault" element={<Vault />} />
        <Route path="/verus" element={<VerusTest />} />
        <Route path="/imx" element={<IMX />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
