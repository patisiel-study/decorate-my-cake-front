import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "../src/pages/index.css";
import Login from "./pages/member/login";
import SignUp from "./pages/member/signUp";
import MyCakeMain from "./pages/Cake/MyCakeMain";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signUp" element={<SignUp />} />
        <Route path="/MyCakeMain" element={<MyCakeMain />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
