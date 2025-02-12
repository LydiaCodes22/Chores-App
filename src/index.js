import React from "react";
import ReactDOM from "react-dom/client";
import "./styles/index.css";
import App from "./components/App";
import { UserAuthContextProvider } from "./context/UserAuthContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <UserAuthContextProvider>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </UserAuthContextProvider>
);
