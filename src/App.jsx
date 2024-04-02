import React from "react";
import { HashRouter as Router, Route, Routes } from "react-router-dom";
import AgentsPage from "./pages/AgentsPage";
import WeaponsPage from "./pages/WeaponsPage";
import Home from "./pages/Home";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/agents" element={<AgentsPage />} />
        <Route path="/weapons" element={<WeaponsPage />} />
      </Routes>
    </Router>
  );
};

export default App;
