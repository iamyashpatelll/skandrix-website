import { useEffect } from "react";
import "@/App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Technology from "./pages/Technology";
import Startups from "./pages/Startups";
import Connect from "./pages/Connect";
import ServiceDetail from "./pages/ServiceDetail";
import AdminLogin from "./pages/admin/Login";
import AdminDashboard from "./pages/admin/Dashboard";

function App() {
  useEffect(() => {
    // Smooth scroll behavior
    document.documentElement.style.scrollBehavior = 'smooth';
  }, []);

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          {/* Public Routes */}
          <Route path="/" element={<><Header /><Home /><Footer /></>} />
          <Route path="/technology" element={<><Header /><Technology /><Footer /></>} />
          <Route path="/startups" element={<><Header /><Startups /><Footer /></>} />
          <Route path="/services/:slug" element={<><Header /><ServiceDetail /><Footer /></>} />
          <Route path="/connect" element={<><Header /><Connect /><Footer /></>} />
          
          {/* Admin Routes */}
          <Route path="/admin/login" element={<AdminLogin />} />
          <Route path="/admin/dashboard" element={<AdminDashboard />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
