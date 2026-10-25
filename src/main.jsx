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
import Vdu3 from "./components/bai11/Vdu3.jsx";
import NumberList from "./components/bai12/NumberList.jsx";
import ArrayMap from "./components/bai12/ArrayMap.jsx";
import ObjectMap from "./components/bai12/ObjectMap.jsx";
import A from "./components/bai31/A.jsx";
import Test from "./components/bai13-forms/input-tag";
import Textarea from "./components/bai13-forms/textarea-tag";
import Select from "./components/bai13-forms/select-tag";
import Reservation from "./components/bai13-forms/HandleMultipleInput.jsx";
import TestLogin from "./components/bai15-16/login.jsx";
import Demo from "./components/bai18-axios/Demo.jsx";
import PostDemo from "./components/bai18-axios/PostDemo.jsx";
import DeleteDemo from "./components/bai18-axios/baseUrl/DeleteDemo.jsx";
import { UserProvider } from "./context/UserContext.jsx";
import Memo from "./components/hooks/memo.jsx";

const arr = ["iphone 1", "iphone 2", "iphone 3", "iphone 4"];
const obj = {
  name: "vic",
  age: 18,
};
createRoot(document.getElementById("root")).render(
  <StrictMode>
    {/* 4. Sau khi tạo xong các components thì vào trang main.jsx(index.jsx) cấu hình route */}
    <BrowserRouter>
      <UserProvider>
        <App>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/account" element={<Account />} />
            <Route path="/login" element={<Login />} />
            <Route path="/bai11_1" element={<Vdu1 />} />
            <Route path="/bai11_2" element={<Vdu2 />} />
            <Route path="bai11_3" element={<Vdu3 />} />
            <Route path="bai12_1" element={<NumberList arr={arr} />} />
            <Route path="bai12_2" element={<ArrayMap arr={arr} />} />
            <Route path="bai12_3" element={<ObjectMap obj={obj} />} />
            <Route path="bai31" element={<A />} />
            <Route path="controlled_components" element={<Test />} />
            <Route path="bai13_textarea" element={<Textarea />} />
            <Route path="bai13_select" element={<Select />} />
            <Route path="bai15_login" element={<TestLogin />} />
            <Route path="bai18_axios" element={<Demo />} />
            <Route
              path="bai13_handle-multiple-inputs"
              element={<Reservation />}
            />
            <Route path="bai18_post_axios" element={<PostDemo />} />
            <Route path="bai18_delete_axios" element={<DeleteDemo />} />
            <Route path="memo_test" element={<Memo />} />
          </Routes>
        </App>
      </UserProvider>
    </BrowserRouter>
  </StrictMode>,
);
