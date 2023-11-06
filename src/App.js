import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./style/Toast.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Modal from "react-modal";

import Header from "./components/Header";
import Footer from "./components/Footer";
import MainPage from "./components/Main_page";
import ControlMain from "./components/Control_main";
import Login from "./components/Login";
import Join from "./components/Join";
import NoticeMain from "./components/Notice_main";
import NoticeDetail from "./components/Notice_detail";
import CustomerHelpCenter from "./components/Customer_help_center";
import ManagerPage from "./components/Manager_page";
import ManagerNotice from "./components/Manager_notice";
import NoticeAdd from "./components/Manager_notice_add";
import MemberDetail from "./components/Manager_member_detail";
import AboutUs from "./components/About_us";
import ScrollTop from "./components/Scroll_top";
import MyPage from "./components/Mypage";
import Reservation from "./components/Reservation";

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
      <ScrollTop />
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
        <Route path="/mypage" element={<MyPage />} />
        <Route path="/resv" element={<Reservation />} />
        <Route path="/manage" element={<ManagerPage />} />
        <Route path="/manageNotice" element={<ManagerNotice />} />
        <Route path="/noticeAdd" element={<NoticeAdd />} />
        <Route path="/memberDetail" element={<MemberDetail />} />
      </Routes>
      <div>
        <Footer />
      </div>
      <ToastContainer
        position="top-center" // 알람 위치 지정
        autoClose={2000} // 자동 off 시간
        hideProgressBar={true} // 진행시간바 숨김
        closeOnClick // 클릭으로 알람 닫기
        theme="light"
        limit={3} // 개수 제한
      />
    </Router>
  );
}

Modal.setAppElement("#root");

export default App;
