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
import Cart from "./pages/Cart";
import Navigation from "./pages/Navigation";
import SingleProductPage from "./pages/SingleProductPage";
import { CartProvider } from "./context/CartContext";
import SingleCategoryPage from "./pages/SingleCategoryPage";
import PaymentPage from "./pages/PaymentPage";
export default function App() {
  return (
    <CartProvider>
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
          <Route path="/cart" element={<Cart />} />
          <Route path="/product/:productId" element={<SingleProductPage />} />
          <Route
            path="/category/:categoryId"
            element={<SingleCategoryPage />}
          />
          <Route path="/navigation" element={<Navigation />} />
          <Route path="/payment" element={<PaymentPage />} />
        </Routes>
        <Footer />
      </Router>
    </CartProvider>
  );
}
