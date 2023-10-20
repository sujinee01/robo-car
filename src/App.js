import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import MainPage from "./components/Main_page";
import ControlMain from "./components/Control_main";
import Login from "./components/Login";
import Join from "./components/Join";
import NoticeMain from "./components/Notice_main";
import NoticeDetail from "./components/Notice_detail";
import CustomerHelpCenter from "./components/Customer_help_center";

import MyPage from "./components/My_page";
import ReservationPage from "./components/Reservation";
import CustomerList from "./components/Customer_review_list";
import AboutUs from "./components/About_us";

import Header from "./components/Header";

function App() {
  return (
    <Router>
      <div style={{ height: "100px" }}>
        <Header />
      </div>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/controlMain" element={<ControlMain />} />
        <Route path="/login" element={<Login />} />
        <Route path="/join" element={<Join />} />
        <Route path="/noticeMain" element={<NoticeMain />} />
        <Route path="/noticeDetail" element={<NoticeDetail />} />
        <Route path="/helpCenter" element={<CustomerHelpCenter />} />
        <Route path="/mypage" element={<MyPage />} />
        <Route path="/about" element={<AboutUs />} />
        {/* <Route path="/resv" element={<ReservationPage />} /> */}

        <Route path="/test" element={<CustomerList />} />
      </Routes>
    </Router>
  );
}

export default App;
