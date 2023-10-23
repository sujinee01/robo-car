import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import MainPage from "./components/Main_page";
import ControlMain from "./components/Control_main";
import Login from "./components/Login";
import Join from "./components/Join";
import NoticeMain from "./components/Notice_main";
import NoticeDetail from "./components/Notice_detail";
import CustomerHelpCenter from "./components/Customer_help_center";
import ManagerPage from "./components/Manager_page";
import AboutUs from "./components/About_us";

import CustomerList from "./components/Customer_review_list";
import MemberDetail from "./components/Manager_member_detail";

function App() {
  const [isLogin, setIsLogin] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);

  useEffect(() => {
    const logedIn = localStorage.getItem("id");
    if (logedIn) {
      // 로컬 스토리지에 로그인 아이디가 존재하면
      setIsLogin(true); // 로그인 정보 true
      if (logedIn === "admin") {
        // 아이디가 admin이면 관리자 로그인 true
        setIsAdmin(true);
      }
    }
  }, [isLogin, isAdmin]);

  return (
    <Router>
      <div style={{ height: "100px" }}>
        <Header isLogin={isLogin} isAdmin={isAdmin} />
      </div>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/controlMain" element={<ControlMain />} />
        <Route path="/login" element={<Login />} />
        <Route path="/join" element={<Join />} />
        <Route path="/noticeMain" element={<NoticeMain />} />
        <Route path="/noticeDetail" element={<NoticeDetail />} />
        <Route path="/helpCenter" element={<CustomerHelpCenter />} />
        <Route path="/about" element={<AboutUs />} />
        {/* <Route path="/mypage" element={<MyPage />} /> */}
        {/* <Route path="/resv" element={<ReservationPage />} /> */}
        <Route path="/manage" element={<ManagerPage />} />
        <Route path="/test" element={<MemberDetail />} />
      </Routes>
    </Router>
  );
}

export default App;
