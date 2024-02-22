/* eslint-disable no-unused-vars */
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./layouts/Header";
import HomePage from "./pages/HomePage";
import Headline from "./layouts/Headline";
import ProfilePage from "./pages/ProfilePage";
import Footer from "./layouts/Footer";
import TradePolicy from "./pages/informativePage/TradePolicy";
import Installment from "./pages/informativePage/Installment";
import Career from "./pages/informativePage/Career";
import TradeIn from "./pages/informativePage/TradeIn";
export default function App() {
  return (
    <Router>
      <Headline />
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/tradepolicy" element={<TradePolicy />} />
        <Route path="/installment" element={<Installment />} />
        <Route path="/career" element={<Career />} />
        <Route path="/tradein" element={<TradeIn />} />
      </Routes>
      <Footer />
    </Router>
  );
}
