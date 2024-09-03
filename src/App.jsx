import React from "react";
import { HashRouter as Router, Route, Routes } from "react-router-dom";
import AgentsPage from "./pages/AgentsPage";
import WeaponsPage from "./pages/WeaponsPage";
import Home from "./pages/Home";
import DetailsPage from "./pages/DetailsPage";
import LoginPage from "./pages/LoginPage";
import { useAuth } from "./components/context/AuthContext";
import CreateAgentPage from "./pages/CreateAgentPage";
import CreateWeaponPage from "./pages/CreateWeaponPage";

const App = () => {
  const { isAuthenticated, login, logout } = useAuth();

  return (
    <Router>
      <Routes>
        <Route path="/" element={isAuthenticated ? <Home /> : <LoginPage />} />
        <Route
          path="/agents"
          element={isAuthenticated ? <AgentsPage /> : <LoginPage />}
        />
        <Route path="/weapons" element={<WeaponsPage />} />
        <Route
          path="/details/:type/:uuid"
          element={isAuthenticated ? <DetailsPage /> : <LoginPage />}
        />
        <Route
          path="/agents/create"
          element={isAuthenticated ? <CreateAgentPage /> : <LoginPage />}
        />
        <Route
          path="/weapons/create"
          element={isAuthenticated ? <CreateWeaponPage /> : <LoginPage />}
        />
        <Route
          path="/login"
          element={isAuthenticated ? <LoginPage /> : <LoginPage />}
        />
      </Routes>
    </Router>
  );
};

export default App;
