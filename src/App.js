// src/App.js
import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Dashboard from "./pages/Dashboard";
import Deliveries from "./pages/Deliveries";
import Sales from "./pages/Sales";
import Reports from "./pages/Reports";
import Inventory from "./pages/Inventory"; // ✅ new import

import "./index.css";

function App() {
  return (
    <div className="app-container">
      <Navbar />
      <main className="main-content">
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/deliveries" element={<Deliveries />} />
          <Route path="/sales" element={<Sales />} />
          <Route path="/reports" element={<Reports />} />
          <Route path="/inventory" element={<Inventory />} /> {/* ✅ new route */}
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
