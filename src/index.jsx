import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import AppFrame from "./components/AppFrame";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <AppFrame>
      <App />
    </AppFrame>
  </React.StrictMode>
);
