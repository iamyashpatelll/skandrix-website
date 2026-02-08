import { useEffect } from "react";
import "@/App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Technology from "./pages/Technology";
import Startups from "./pages/Startups";
import Videos from "./pages/Videos";
import Connect from "./pages/Connect";

function App() {
  useEffect(() => {
    // Smooth scroll behavior
    document.documentElement.style.scrollBehavior = 'smooth';
  }, []);

  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/technology" element={<Technology />} />
          <Route path="/startups" element={<Startups />} />
          <Route path="/videos" element={<Videos />} />
          <Route path="/connect" element={<Connect />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
