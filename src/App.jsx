import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import CapitalRaiseDigest from "@/pages/portal/CapitalRaiseDigest";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="*" element={<CapitalRaiseDigest />} />
      </Routes>
    </Router>
  );
}
