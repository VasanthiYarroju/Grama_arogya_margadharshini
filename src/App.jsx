import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";

import { LangProvider } from "./contexts/LangContext";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ScrollProgress from "./components/ScrollProgress";
import BackToTop from "./components/BackToTop";

import Home from "./pages/Home";
import Hospitals from "./pages/Hospitals";
import HealthCamps from "./pages/HealthCamps";
import HealthGuides from "./pages/HealthGuides";
import Schemes from "./pages/Schemes";
import Emergency from "./pages/Emergency";
import FirstAid from "./pages/FirstAid";

export default function App() {
  return (
    <LangProvider>
    <BrowserRouter>
      <ScrollProgress />
      <Navbar />
      <main style={{ flex: 1 }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/hospitals" element={<Hospitals />} />
          <Route path="/health-camps" element={<HealthCamps />} />
          <Route path="/health-guides" element={<HealthGuides />} />
          <Route path="/schemes" element={<Schemes />} />
          <Route path="/emergency" element={<Emergency />} />
          <Route path="/first-aid" element={<FirstAid />} />
        </Routes>
      </main>
      <Footer />
      <BackToTop />
    </BrowserRouter>
    </LangProvider>
  );
}
