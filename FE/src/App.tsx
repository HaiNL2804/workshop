import React from "react";
import { Navigate, Routes, Route } from "react-router-dom";
import LayoutWebsite from "./pages/(website)/layout";
import HomePage from "./pages/(website)/home/page";
import SignPage from "./pages/(auth)/signup/page";
import LayoutAdmin from "./pages/(admin)/layout";
import DashboardPage from "./pages/(admin)/dashboard/page";
import "./App.css";
import NotFoundPage from "./pages/(website)/404/page";
import ShopPage from "./pages/(website)/shop/page";
import ContactPage from "./pages/(website)/contact/page";
import ProductDetailpage from "./pages/(website)/product_detail/page";
import CartPage from "./pages/(website)/cart/page";
import PaymentPage from "./pages/(website)/payment/page";
import AboutPage from "./pages/(website)/about/page";

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<LayoutWebsite />}>
          <Route index element={<HomePage />} />
          <Route path="shop" element={<ShopPage />} />
          <Route path="contact" element={<ContactPage />} />
          <Route path="product_detail" element={<ProductDetailpage />} />
          <Route path="cart" element={<CartPage />} />
          <Route path="payment" element={<PaymentPage />} />
          <Route path="about" element={<AboutPage />} />
          <Route path="signup" element={<SignPage />} />
        </Route>

        <Route path="admin" element={<LayoutAdmin />}>
          <Route index element={<Navigate to="dashboard" />} />
          <Route path="dashboard" element={<DashboardPage />} />
        </Route>
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </div>
  );
};

export default App;
