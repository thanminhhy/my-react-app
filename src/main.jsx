import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App.jsx";
import "./assets/css/animate.css";
import "./assets/css/bootstrap.min.css";
import "./assets/css/font-awesome.min.css";
import "./assets/css/main.css";
import "./assets/css/prettyPhoto.css";
import "./assets/css/price-range.css";
import "./assets/css/responsive.css";
import Home from "./components/Home.jsx";
import Account from "./components/Account.jsx";
import Login from "./components/Login.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <App>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/account" element={<Account />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </App>
    </BrowserRouter>
  </StrictMode>,
);
