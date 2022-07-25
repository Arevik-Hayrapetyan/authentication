import { useEffect, useState } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import SignIn from "./components/SignIn";
import Dashboard from "./components/Dashboard";
import { checkIsAuth } from "./helpers/api";
import "./App.css";

function App() {
  const navigate = useNavigate();

  useEffect(() => {
    checkIsAuth()
      .then((data) => data.json())
      .then((res) => {
        if (res.isAuth) {
          navigate("/dashboard", { state: { data: res.score.data[0] } });
        } else {
          navigate("/signIn");
        }
      });
  }, []);

  return (
    <div className="App">
      <Routes>
        <Route index path="/signIn" element={<SignIn />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </div>
  );
}

export default App;
