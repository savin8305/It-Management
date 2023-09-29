import React, { useEffect, useState } from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { LoginPage, SignupPage, HomePage } from "./Routes.js";
import Navbar from "./pages/Navbar/Navbar";
import Footer from "./pages/Footer";
const App = () => {
  return (
    <BrowserRouter>
    <Navbar/>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/sign-up" element={<SignupPage />} />
      </Routes>
    <Footer/>
    </BrowserRouter>
  );
};

export default App;
