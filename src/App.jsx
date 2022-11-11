import Details from "./components/Details";
import "./App.css";
import { Routes, Route, Navigate } from "react-router-dom";
import Home from "./components/Home";

function App() {
  return (
    <div className="font-['Inter']">
      <Routes>
        <Route path="/home" element={<Home/>} />
        <Route path="/details" element={<Details />} />
        <Route path="*" element={<Navigate to="/home" replace />} />
      </Routes>
    </div>
  );
}

export default App;
