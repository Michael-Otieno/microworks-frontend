import Details from "./components/Details";
import "./App.css";
import { Routes, Route, Navigate } from "react-router-dom";
import Home from "./components/Home";
import Admin from "./components/Admin";
// import PrivateRoute from "./components/PrivateRoute";

import { DataProvider } from "./context/DataContext";
import { useEffect, useState } from "react";
import axios from "axios";

import jwt_decode from "jwt-decode";
import { useNavigate } from "react-router-dom";

function App() {
  let [authTokens, setAuthToken] = useState(() =>
    localStorage.getItem("authTokens")
      ? JSON.parse(localStorage.getItem("authTokens"))
      : null
  );
  let [user, setUser] = useState(() =>
    localStorage.getItem("authTokens")
      ? jwt_decode(localStorage.getItem("authTokens"))
      : null
  );

  const history = useNavigate();

  let loginUser = async (e) => {
    e.preventDefault();
    let response = await fetch(
      `    https://microworks-backend-production.up.railway.app/api/token/`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username: e.target.username.value,
          password: e.target.password.value,
        }),
      }
    );

    let data = await response.json();
    if (response.status === 200) {
      setAuthToken(data);
      setUser(jwt_decode(data.access));
      localStorage.setItem("authTokens", JSON.stringify(data));
      history("/details");
    } else {
      alert("Something went wrong");
    }
  };

  let logoutUser = () => {
    setAuthToken(null);
    setUser(null);
    localStorage.removeItem("authTokens");
    history("/admin");
  };

  return (
    <div className="font-['Inter'] w-screen">
      <DataProvider>
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route
            exact
            path="/details"
            element={<Details user={user} logoutUser={logoutUser} />}
          />

          <Route path="/admin" element={<Admin loginUser={loginUser} />} />
          <Route path="*" element={<Navigate to="/home" replace />} />
        </Routes>
      </DataProvider>
    </div>
  );
}

export default App;
