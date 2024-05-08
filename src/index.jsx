import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import AppFrame from "./components/AppFrame";
import { UserNameProvider } from "./components/UserNameProvider";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <UserNameProvider>
      <AppFrame>
        <App />
      </AppFrame>
    </UserNameProvider>
  </React.StrictMode>
);
