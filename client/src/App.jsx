import { useState, useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Landing from "./pages/Landing";
import Startup from "./pages/Startup";
import Loader from '@/usables/Loader'
import "./App.css";
import Investor from "./pages/Investor";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate page load
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div>
      {loading ? (
        <Loader/> // Show loader
      ) : (
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Landing />} />
            <Route path="/startup" element={<Startup />} />
            <Route path="/investor" element={<Investor />} />
          </Routes>
        </BrowserRouter>
      )}
    </div>
  );
}

export default App;
