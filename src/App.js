import Navbar from "./Components/navbar";
import { Routes, Route } from "react-router-dom";
import Science from "./pages/science";
import Controls from "./pages/controls";
import Home from "./pages/home";
import Panorama from "./pages/panoroma"                  

export default function App() {
  return (
    <div className="h-[100vh] overflow-y-hidden">
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/science" element={<Science />} />
        <Route exact path="/controls" element={<Controls />} />
        <Route exact path="/panorama" element={<Panorama />} />
        
      </Routes>
    </div>
  );
}
