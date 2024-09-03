import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import AppFrame from "./components/AppFrame";
import { UserNameProvider } from "./components/UserNameProvider";
import { AuthProvider } from "./components/context/AuthContext";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const root = ReactDOM.createRoot(document.getElementById("root"));
const queryClient = new QueryClient();
root.render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
        <UserNameProvider>
          <AppFrame>
            <App />
          </AppFrame>
        </UserNameProvider>
      </AuthProvider>
    </QueryClientProvider>
  </React.StrictMode>
);
