
/* eslint-disable no-unused-vars */
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./layouts/Header";
import HomePage from "./pages/HomePage";
import Headline from "./layouts/Headline";
import ProfilePage from "./pages/ProfilePage";
import Footer from "./layouts/Footer";
export default function App() {
  return (
    <Router>
    <Headline/>
    <Header/>
      <Routes>
      <Route path="/" element={<HomePage />} /> 
      <Route path="/profile" element={<ProfilePage />} />
      </Routes>
      <Footer/>
    </Router>
  );
}