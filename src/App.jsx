
/* eslint-disable no-unused-vars */
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./layouts/Header";
import HomePage from "./pages/HomePage";
import Headline from "./layouts/Headline";
export default function App() {
  return (
    <Router>
    <Headline/>
    <Header/>
      <Routes>
      <Route path="/" element={<HomePage />} /> 
      </Routes>
    </Router>
  );
}