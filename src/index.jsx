import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import AgentsPage from "./pages/AgentsPage";
import WeaponsPage from "./pages/WeaponsPage";
import MapsPage from "./pages/MapsPage";
import Home from "./pages/Home";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Router>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/agents" element={<AgentsPage />} />
      <Route path="/weapons" element={<WeaponsPage />} />
      <Route path="/maps" element={<MapsPage />} />
    </Routes>
  </Router>
);
