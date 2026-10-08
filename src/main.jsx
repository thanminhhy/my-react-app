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
import Vdu1 from "./components/bai11/Vdu1.jsx";
import Vdu2 from "./components/bai11/Vdu2.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    {/* 4. Sau khi tạo xong các components thì vào trang main.jsx(index.jsx) cấu hình route */}
    <BrowserRouter>
      <App>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/account" element={<Account />} />
          <Route path="/login" element={<Login />} />
          <Route path="/bai11_1" element={<Vdu1 />} />
          <Route path="/bai11_2" element={<Vdu2 />} />
        </Routes>
      </App>
    </BrowserRouter>
  </StrictMode>,
);
