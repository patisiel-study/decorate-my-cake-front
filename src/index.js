import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "../src/pages/index.css";
import Login from "./pages/member/LoginPage";
import SignUp from "./pages/member/SignUpPage";
import MyCakeMain from "./pages/Cake/MyCakeMain";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signUp" element={<SignUp />} />
        <Route path="/myCakeMain" element={<MyCakeMain />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
