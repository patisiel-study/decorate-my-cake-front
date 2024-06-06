import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "../src/pages/index.css";
import LoginPage from "./pages/member/LoginPage";
import SignUpPage from "./pages/member/SignUpPage";
import MyCakeMainPage from "./pages/Cake/MyCakeMainPage";
import SelectCakePage from "./pages/Cake/SelectCakePage";
import SetCakePage from "./pages/Cake/SetCakePage";
import FriendPage from "./pages/friend/FriendPage";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/myCakeMain" element={<MyCakeMainPage />} />
        <Route path="/selectCake" element={<SelectCakePage />} />
        <Route path="/setCake" element={<SetCakePage />} />
        <Route path="/friend" element={<FriendPage />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
