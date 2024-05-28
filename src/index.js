import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "../src/pages/index.css";
import LoginPage from "./pages/member/LoginPage";
import SignUpPage from "./pages/member/SignUpPage";
import Main from "./pages/friend/Main";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
   

    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginPage/>} />
        <Route path="/login" element={<LoginPage/>} />
        <Route path="/signup" element={<SignUpPage/>} />
        <Route path="/friend" element={<Main/>} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

