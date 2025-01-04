import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import AgentsPage from "./pages/AgentsPage";
import WeaponsPage from "./pages/WeaponsPage";
import Home from "./pages/Home";
import DetailsPage from "./pages/DetailsPage";
import LoginPage from "./pages/LoginPage";
import { useAuth } from "./components/context/AuthContext";
import UsersPage from "./pages/UsersPage";

const App = () => {
  const { isAuthenticated } = useAuth();

  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            isAuthenticated ? <Home /> : <Navigate to="/login" replace />
          }
        />
        <Route
          path="/agents"
          element={
            isAuthenticated ? <AgentsPage /> : <Navigate to="/login" replace />
          }
        />
        <Route
          path="/weapons"
          element={
            isAuthenticated ? <WeaponsPage /> : <Navigate to="/login" replace />
          }
        />
        <Route
          path="/:type/details/:uuid"
          element={
            isAuthenticated ? <DetailsPage /> : <Navigate to="/login" replace />
          }
        />
        <Route
          path="/users"
          element={
            isAuthenticated ? <UsersPage /> : <Navigate to="/login" replace />
          }
        />

        <Route path="/login" element={<LoginPage />} />
      </Routes>
    </Router>
  );
};

export default App;
